import { useEffect, useState } from 'react'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import { SITE } from '../config.js'

/**
 * Shared shell for /privacy, /terms, /support and /delete-account.
 *
 * The sticky contents rail is not decoration: an App Store reviewer looking for
 * a specific disclosure, and a user looking for how to delete their data, both
 * arrive wanting one section out of thirty.
 */
export default function LegalLayout({ title, kicker, sections = [], showDates = true, children }) {
  const [active, setActive] = useState(sections[0]?.id)

  useEffect(() => {
    if (!sections.length) return
    const headings = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean)
    if (!headings.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-88px 0px -70% 0px', threshold: 0 },
    )
    headings.forEach((h) => observer.observe(h))
    return () => observer.disconnect()
  }, [sections])

  return (
    <>
      <Nav variant="legal" />

      <main className="mx-auto max-w-6xl px-5 pb-24 pt-12 sm:px-8 sm:pt-16">
        <div className="border-b border-ink-700/70 pb-9">
          {kicker && (
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-300">
              {kicker}
            </p>
          )}
          <h1 className="mt-3 font-display text-[2.25rem] leading-[1.08] tracking-[-0.015em] text-mist-100 sm:text-[2.75rem]">
            {title}
          </h1>
          {showDates && (
            <p className="mt-4 text-xs text-mist-500">
              Effective {SITE.legalEffective} · Last updated {SITE.legalUpdated}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-12 pt-10 lg:flex-row lg:gap-14">
          {sections.length > 0 && (
            <nav
              className="shrink-0 lg:sticky lg:top-24 lg:h-fit lg:w-56"
              aria-label="On this page"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.09em] text-mist-500">
                On this page
              </p>
              <ul className="flex flex-col gap-0.5 border-l border-ink-700">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className={`-ml-px block border-l py-1.5 pl-3 text-[0.8125rem] leading-snug transition-colors ${
                        active === s.id
                          ? 'border-gold-300 text-mist-100'
                          : 'border-transparent text-mist-500 hover:text-mist-300'
                      }`}
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <div className="legal min-w-0 max-w-2xl">{children}</div>
        </div>
      </main>

      <Footer />
    </>
  )
}

/** A callout for the things a reader must not miss. */
export function Notice({ tone = 'iris', title, children }) {
  const tones = {
    iris: 'border-copper-400/35 bg-copper-400/8',
    verd: 'border-gold-300/30 bg-gold-300/8',
    plain: 'border-ink-700 bg-ink-850',
  }
  return (
    <div className={`my-6 rounded-2xl border p-5 ${tones[tone]}`}>
      {title && (
        <p className="mb-1.5 text-sm font-semibold text-mist-100">{title}</p>
      )}
      <div className="text-sm leading-relaxed text-mist-300">{children}</div>
    </div>
  )
}
