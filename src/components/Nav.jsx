import { useEffect, useState } from 'react'
import { Wordmark } from './Brand.jsx'
import { NAV } from '../config.js'

export default function Nav({ variant = 'home' }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Anchor links only resolve on the homepage. On the legal pages they need the
  // absolute path prefix or they dead-end.
  const links = variant === 'home' ? NAV : NAV.map((l) => ({ ...l, href: l.href.replace(/^\/#/, '/#') }))

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-ink-700/70 bg-ink-900/85 backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Wordmark />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-mist-400 transition-colors hover:text-mist-100"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#waitlist"
            className="rounded-full border border-copper-400/40 bg-copper-400/10 px-4 py-2 text-sm font-medium text-gold-300 transition-colors hover:border-gold-400/60 hover:bg-copper-400/20 hover:text-mist-100"
          >
            Join the waitlist
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-700 text-mist-300 md:hidden"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            {open ? (
              <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <path d="M2 4.5h12M2 11.5h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      <div hidden={!open} className="border-t border-ink-700 bg-ink-900/95 backdrop-blur-xl md:hidden">
        <nav className="mx-auto flex max-w-6xl flex-col px-5 py-2 sm:px-8" aria-label="Main, mobile">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-ink-800 py-3 text-sm text-mist-300 last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#waitlist"
            onClick={() => setOpen(false)}
            className="py-3 text-sm font-medium text-gold-300"
          >
            Join the waitlist →
          </a>
        </nav>
      </div>
    </header>
  )
}
