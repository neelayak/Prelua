# prelua-web

Marketing, compliance and support site for **Prelua** — SAVVNIONNIX TECHNOLOGY PRIVATE LIMITED.

Live at `https://prelua.app`. Built with Vite + React 19 + Tailwind v4, deployed to GitHub Pages.

---

## Why this is not a single-page app

GitHub Pages has no server, so it has no SPA rewrite rule. A client-side router would return a
404 on a hard load of `/privacy` — which is exactly what an App Store reviewer does when they
paste the Privacy Policy URL into a browser, and exactly what Googlebot does.

So this is a **Vite multi-page build**: every route is a real `index.html` on disk.

| Route             | Source                          | Why it exists                                       |
| ----------------- | ------------------------------- | --------------------------------------------------- |
| `/`               | `src/pages/Home.jsx`            | Positioning + waitlist                              |
| `/privacy/`       | `src/pages/Privacy.jsx`         | **Required** — App Store + Play Store submission     |
| `/terms/`         | `src/pages/Terms.jsx`           | Subscription terms, liability, medical disclaimers   |
| `/support/`       | `src/pages/Support.jsx`         | **Required** — App Store Support URL field           |
| `/delete-account/`| `src/pages/DeleteAccount.jsx`   | **Required** — Google Play account-deletion URL      |

Adding a route means three things: a page in `src/pages/`, an entry in `src/entries/`, an
`index.html` shell in a folder of that name — and a new line in `rollupOptions.input` in
`vite.config.js`. Miss the last one and the page silently will not build.

The CI workflow asserts all five files exist after `npm run build` and fails the deploy if any
are missing, so a regression here cannot reach production quietly.

---

## Run it

```bash
npm install      # not `npm ci` — see below
npm run dev      # http://localhost:5173
npm run build    # → dist/
npm run preview  # serve dist/ locally, exactly as Pages will
```

### Use `npm install`, not `npm ci`

Rollup and esbuild ship their native binaries as per-platform optional dependencies, and npm
records only the ones resolved on the machine that generated the lockfile
([npm/cli#4828](https://github.com/npm/cli/issues/4828)). `npm ci` installs strictly from the
lock, so a lock generated on one OS fails on another with `Cannot find module
@rollup/rollup-<platform>`.

The CI workflow uses `npm install` for the same reason, with a comment saying so. If you ever see
that error locally:

```bash
rm -rf node_modules package-lock.json
npm install
```

### `npm run verify`

Zero dependencies, Node built-ins only. Runs in CI on every push, and takes about 50ms:

- every route in `vite.config.js` is wired end to end — HTML shell → entry → page component
- the four submission-required routes are present, named as requirements rather than links
- every internal link points at a route that exists
- every `#anchor` points at an id that exists on the target page, including the contents arrays
  in the legal pages — so renaming an `<h2>` and forgetting its TOC entry fails the build
- `sitemap.xml` lists exactly the real routes, no more, no less
- `CNAME` and `SITE.origin` agree, so canonical tags cannot drift from the served domain
- when `dist/` exists, the compliance URLs were actually emitted

It cannot check that a page *renders* — these are React pages, so the built HTML is an empty
`<div id="root">`. For that, run `npm run preview` and look at the five pages. That trade is
deliberate: a render check needs a headless browser, which is a 150MB download for a five-page
site, and a check nobody installs is worth less than one that runs on every push.

---

## Deploy

Push to `main`. `.github/workflows/deploy.yml` builds and publishes to GitHub Pages.

**One-time GitHub setup:**

1. Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Repo → **Settings → Pages → Custom domain** → `prelua.app` → Save.
3. Tick **Enforce HTTPS** once the certificate provisions (a few minutes).

**DNS at your registrar for `prelua.app`:**

| Type  | Name  | Value                  |
| ----- | ----- | ---------------------- |
| A     | `@`   | `185.199.108.153`      |
| A     | `@`   | `185.199.109.153`      |
| A     | `@`   | `185.199.110.153`      |
| A     | `@`   | `185.199.111.153`      |
| CNAME | `www` | `<user>.github.io.`    |

`public/CNAME` holds the domain and is what keeps the custom domain bound across deploys — do
not delete it.

`public/.nojekyll` is equally load-bearing: without it GitHub Pages runs Jekyll, which strips
files and folders beginning with an underscore, quietly breaking the build output.

---

## Before this goes live — open items

These are deliberately unfinished. Search the codebase for `TODO(neelay)`.

### 1. Fill in the real contact and entity details — `src/config.js`

- `entityAddress` — the registered office address of the company. CCPA/CPRA notices have to name
  a reachable legal entity, and an App Store reviewer occasionally checks.
- `supportEmail` / `privacyEmail` — **confirm these mailboxes actually receive mail.** They are
  printed on all four legal/support pages and an unreachable support address is a rejection
  reason on its own.

### 2. Get the legal pages reviewed by counsel

They are written against Prelua's real data flows rather than a template — passive sleep-proxy
sensing, optional HealthKit/Health Connect reads, coach messages leaving the device to NVIDIA
NIM, the safety classifier reading message content, transient IP geolocation at signup, the 13+
teen tier, cohort aggregation. That is the hard part and it is done.

Two clauses in `Terms.jsx` are genuine legal decisions, not drafting, and are flagged in a
comment at the top of that file:

- **§17 governing law** is set to India (the company's seat) with US consumer rights expressly
  preserved. A US-facing consumer app sometimes prefers a US state instead.
- **There is deliberately no arbitration or class-action-waiver clause.** Adding one is a
  strategic choice with consequences; counsel should make it.

Also confirm before publishing: **NVIDIA NIM's data retention and model-training terms** for the
endpoints in use. §7 of the Privacy Policy is written conservatively — it says content is sent to
generate a reply and run the safety screen, and is not sold or used for advertising. If NVIDIA's
terms let you state something stronger ("your content is not used to train their models"), say it
explicitly, because that is the sentence users and reviewers look for.

### 3. Keep the policy true

If the app changes what it collects, this policy has to change with it. A policy describing a
system you no longer run is worse than no policy — it is a statement you can be held to.

### 4. Turn on the waitlist

The form renders, validates the address and then tells the visitor the waitlist opens shortly.
Nothing is transmitted. `WAITLIST.enabled` is `false` in `src/config.js`.

**Do not point it at a raw PostgREST table endpoint.** This repo is public, so the key ships to
every visitor; an open insert endpoint gets spammed the day the link hits Reddit.

The intended shape, which still needs your approval on the Supabase side before anything is
applied:

```sql
-- migration: waitlist
create table public.waitlist (
  id          uuid primary key default gen_random_uuid(),
  email       text not null,
  source      text,
  created_at  timestamptz not null default now()
);

-- Case-insensitive uniqueness so the same person cannot flood the table.
create unique index waitlist_email_key on public.waitlist (lower(email));

alter table public.waitlist enable row level security;
-- No policies at all: anon and authenticated get nothing.
-- Only the Edge Function, running with the service role, may write.
```

Then an Edge Function `waitlist-signup` that:

1. verifies a Cloudflare Turnstile token,
2. validates the email shape,
3. inserts with the service role key,
4. returns `200` on both a new insert and a duplicate — never confirm to a caller whether an
   address is already on the list.

Once deployed, set `enabled: true`, `endpoint`, `anonKey` and `turnstileSiteKey` in
`src/config.js`.

---

## Editorial rule for the homepage

Read the comment block at the top of `src/pages/Home.jsx` before changing any copy.

Prelua has no public users yet. Every claim on that page must survive an investor later opening
the database. So: no user counts, no revenue or retention figures, no borrowed logos, no
testimonials. The engine is described as **built**, never as **serving**, and pre-launch status
is stated in the hero rather than buried.

Credibility comes from the thesis, the science and the architecture — all real and verifiable —
not from traction. When there is real traction, add it then.

---

## Brand

The palette is sampled from the app icon: a gold sunrise over deep navy water. `ink-900`
(`#06081F`) is the icon's own sea colour, so the page and the mark share a ground instead of the
mark floating on an unrelated background. Gold (`#E6AE5B`) is the brand tone, copper (`#AF7648`)
the second gradient stop. Tokens live at the top of `src/styles.css`; nothing hard-codes a hex
outside that file except two ambient glow gradients in `Home.jsx`.

`public/logo.png` is the icon itself, and `Brand.jsx` renders it rather than a web-only redraw —
the site and the App Store listing have to be recognisably the same product at thumbnail size.
The favicon, apple-touch-icon and OG card are all generated from the same file.

One flag worth recording: the locked naming decision ruled out anything in the fire/flame/phoenix
family to avoid colliding with Phoenix's brand. The chosen icon is a warm gold sunrise, which is
adjacent to that territory. It reads as sunrise rather than flame and the figure is distinct, so
this site follows the icon — but if Phoenix and Prelua ever appear side by side in a store search,
check they still look like two companies.

---

## Pitch deck discrepancies — unresolved as of this build

The deck (`Prelua-7.pdf`) and this site disagree in several places. The site follows the locked
product decisions and omits all traction claims. Reconcile before the deck goes to anyone.

| Item | Deck says | Site / locked decisions say |
| --- | --- | --- |
| Day-30 retention | `34%` | Omitted. The live database holds 12 profiles, all internal test devices. |
| Community size | `150,000+` members, and `150k pre-registrations` | r/GetMotivatedMindset is ~100–102K, and subreddit members are not pre-registrations. |
| Prior exit | `$20k` on one slide, `$12K` on another | Site states the 125,000+ download figure and no sale price. |
| Pricing | `$5.99/mo`, `$49.99/yr` | `$4.99/mo`, `$29.99/yr` founding → `$9.99`/`$59.99`. |
| Tagline | `Emotionally Intelligent AI` | `It knows before you do.` |
| Contact | `unnionapp.com`, `unnionapp@gmail.com` | `prelua.app`. The deck's closing slide is still Phoenix-era. |
| Positioning | `zero daily manual logging` | The product is built around a two-tap check-in; passive signal is Tier 3 at 20% weight. |

The retention figure is the dangerous one. A number that does not exist in the database is the
first thing diligence checks and the last thing a fund forgives.
