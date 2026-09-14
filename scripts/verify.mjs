// Pre-deploy consistency check. Node built-ins only — no dependencies, no
// browser, nothing to install. Runs in CI on every push.
//
//   npm run verify
//
// What it checks:
//   1. Every route declared in vite.config.js has its HTML shell, its entry
//      file, and its page component on disk. Miss one and the route silently
//      does not build.
//   2. Every internal link points at a route that exists.
//   3. Every #anchor points at an element id that exists on the target page —
//      including the table-of-contents arrays in the legal pages.
//   4. sitemap.xml lists exactly the real routes, no more, no less.
//   5. CNAME and SITE.origin agree on the domain.
//   6. If dist/ exists, the compliance URLs were actually emitted as files.
//
// What it cannot check: whether a page renders. These are React pages, so the
// built HTML is an empty <div id="root">. For a render check, open
// `npm run preview` and look at the five pages.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// fileURLToPath, not URL.pathname: pathname percent-encodes, so a directory
// like "New AI app" arrives as "New%20AI%20app" and every read fails with
// ENOENT on a path that visibly exists.
const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)))
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8')
const exists = (p) => fs.existsSync(path.join(ROOT, p))

const problems = []
const fail = (msg) => problems.push(msg)
let checks = 0
const pass = (msg) => {
  checks++
  console.log(`  ok   ${msg}`)
}

// ── 1. Routes: vite input → html shell → entry → page ───────────────────────

const viteConfig = read('vite.config.js')
const inputs = [...viteConfig.matchAll(/(\w+):\s*resolve\(root,\s*'([^']+)'\)/g)].map(
  ([, name, html]) => ({ name, html }),
)

if (inputs.length === 0) {
  fail('Could not parse rollupOptions.input from vite.config.js — has it been restructured?')
}

/** '/privacy/' → 'src/pages/Privacy.jsx' */
const routeToPage = new Map()

for (const { name, html } of inputs) {
  if (!exists(html)) {
    fail(`vite.config.js declares input "${name}" → ${html}, but that file does not exist`)
    continue
  }

  const shell = read(html)
  const entryMatch = shell.match(/<script type="module" src="\/([^"]+)"><\/script>/)
  if (!entryMatch) {
    fail(`${html} has no module script tag — the page would render blank`)
    continue
  }

  const entry = entryMatch[1]
  if (!exists(entry)) {
    fail(`${html} loads ${entry}, which does not exist`)
    continue
  }

  const pageMatch = read(entry).match(/from '\.\.\/pages\/([^']+)'/)
  if (!pageMatch) {
    fail(`${entry} does not import a page component from ../pages/`)
    continue
  }

  const page = `src/pages/${pageMatch[1]}`
  if (!exists(page)) {
    fail(`${entry} imports ${page}, which does not exist`)
    continue
  }

  const route = html === 'index.html' ? '/' : '/' + path.dirname(html) + '/'
  routeToPage.set(route, page)
  pass(`route ${route.padEnd(17)} ${html} → ${entry} → ${page}`)
}

// The four routes below are submission requirements, not preferences. Losing
// one is not a broken link, it is a rejected app.
const REQUIRED = {
  '/privacy/': 'App Store + Google Play both require a reachable privacy policy URL',
  '/terms/': 'Referenced from the privacy policy and the app',
  '/support/': 'App Store Support URL is a required listing field',
  '/delete-account/': 'Google Play requires a public account-deletion URL',
}
for (const [route, why] of Object.entries(REQUIRED)) {
  if (!routeToPage.has(route)) fail(`REQUIRED route ${route} is missing — ${why}`)
}

// ── 2/3. Links and anchors ─────────────────────────────────────────────────

/** Every file we scan for links. */
function walk(dir) {
  return fs.readdirSync(path.join(ROOT, dir), { withFileTypes: true }).flatMap((e) => {
    const rel = `${dir}/${e.name}`
    if (e.isDirectory()) return walk(rel)
    return /\.(jsx?|mjs)$/.test(e.name) ? [rel] : []
  })
}
const sourceFiles = walk('src')

/** Element ids actually rendered by a page, e.g. <h2 id="summary"> */
const declaredIds = new Map()
for (const page of new Set(routeToPage.values())) {
  declaredIds.set(page, new Set([...read(page).matchAll(/\bid="([^"]+)"/g)].map((m) => m[1])))
}

/** Pages reached from a shared component get their ids from the page itself. */
const normalise = (p) => (p === '/' ? '/' : p.endsWith('/') ? p : p + '/')

for (const file of sourceFiles) {
  const src = read(file)

  // Static internal links: href="/privacy/", href="/#thesis", href="/"
  // and the same inside config.js object literals: href: '/privacy/'
  const hrefs = [
    ...[...src.matchAll(/href="(\/[^"]*)"/g)].map((m) => m[1]),
    ...[...src.matchAll(/href:\s*'(\/[^']*)'/g)].map((m) => m[1]),
  ]

  for (const href of hrefs) {
    const [rawPath, hash] = href.split('#')
    const route = normalise(rawPath || '/')

    if (!routeToPage.has(route)) {
      fail(`${file}: link to "${href}" — no route ${route} exists`)
      continue
    }
    if (hash && !declaredIds.get(routeToPage.get(route)).has(hash)) {
      fail(`${file}: link to "${href}" — ${routeToPage.get(route)} has no id="${hash}"`)
    }
  }

  // Table-of-contents arrays in the legal pages: { id: 'summary', label: '…' }
  // These become href="#summary" at render time, so the ids must exist in the
  // same file — this is the check that catches a renamed <h2>.
  const tocIds = [...src.matchAll(/\{\s*id:\s*'([^']+)',\s*label:/g)].map((m) => m[1])
  if (tocIds.length) {
    const own = new Set([...src.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]))
    const dead = tocIds.filter((id) => !own.has(id))
    if (dead.length) fail(`${file}: contents entries with no matching heading — ${dead.join(', ')}`)
    else pass(`${path.basename(file).padEnd(20)} ${tocIds.length} contents entries all resolve`)
  }
}
if (!problems.length) pass('all internal links and anchors resolve')

// ── 4. Sitemap matches reality ─────────────────────────────────────────────

const sitemap = read('public/sitemap.xml')
const origin = (read('src/config.js').match(/origin:\s*'([^']+)'/) || [])[1]
const listed = new Set(
  [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(origin, '')),
)

for (const route of routeToPage.keys()) {
  if (!listed.has(route)) fail(`sitemap.xml is missing ${route}`)
}
for (const route of listed) {
  if (!routeToPage.has(route)) fail(`sitemap.xml lists ${route}, which is not a real route`)
}
if (listed.size === routeToPage.size) pass(`sitemap.xml lists all ${listed.size} routes, no extras`)

// ── 5. Domain agreement ────────────────────────────────────────────────────

const cname = read('public/CNAME').trim()
if (!origin) fail('Could not read SITE.origin from src/config.js')
else if (origin !== `https://${cname}`)
  fail(`CNAME is "${cname}" but SITE.origin is "${origin}" — canonical tags would point elsewhere`)
else pass(`CNAME and SITE.origin agree on ${cname}`)

// ── 6. Build output, when there is one ─────────────────────────────────────

if (exists('dist')) {
  for (const route of routeToPage.keys()) {
    const f = route === '/' ? 'dist/index.html' : `dist${route}index.html`
    if (!exists(f)) fail(`dist/ exists but ${f} was not emitted`)
  }
  for (const f of ['dist/CNAME', 'dist/.nojekyll']) {
    if (!exists(f)) fail(`${f} missing — the custom domain or Jekyll exclusion would break`)
  }
  pass('dist/ contains every route file, CNAME and .nojekyll')
} else {
  console.log('  --   dist/ not built; skipped build-output checks')
}

// ── Result ─────────────────────────────────────────────────────────────────

if (problems.length) {
  console.error(`\n${problems.length} PROBLEM(S):\n`)
  for (const p of problems) console.error(`  ✗ ${p}`)
  console.error('')
  process.exit(1)
}
console.log(`\nALL CHECKS PASSED (${checks})`)
