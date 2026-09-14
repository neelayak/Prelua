import { Mark } from './Brand.jsx'
import { SITE, FOOTER_LEGAL } from '../config.js'

export default function Footer() {
  return (
    <footer className="border-t border-ink-700/70 bg-ink-950">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Mark size={24} />
              <span className="text-base font-semibold tracking-[-0.02em] text-mist-100">
                Prelua
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-mist-500">
              {SITE.tagline} An adaptive mental-wellness system built on the JITAI framework.
            </p>
            <p className="mt-4 text-xs leading-relaxed text-mist-500">
              {SITE.entity}
              <br />
              {SITE.entityAddress}
            </p>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.09em] text-mist-400">
                Legal &amp; support
              </h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {FOOTER_LEGAL.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-mist-300 transition-colors hover:text-mist-100"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.09em] text-mist-400">
                Contact
              </h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                <li>
                  <a
                    href={`mailto:${SITE.supportEmail}`}
                    className="text-sm text-mist-300 transition-colors hover:text-mist-100"
                  >
                    {SITE.supportEmail}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${SITE.privacyEmail}`}
                    className="text-sm text-mist-300 transition-colors hover:text-mist-100"
                  >
                    {SITE.privacyEmail}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* This disclaimer is load-bearing, not boilerplate. It appears on every
            page because a wellness product that reads as clinical without
            saying otherwise invites both regulatory attention and real harm. */}
        <div className="mt-12 border-t border-ink-800 pt-7">
          <p className="max-w-3xl text-xs leading-relaxed text-mist-500">
            <strong className="font-semibold text-mist-400">
              Prelua is not a medical device and does not provide medical advice, diagnosis, or
              treatment.
            </strong>{' '}
            It is not therapy, not a substitute for professional care, and not a crisis service. If
            you are in crisis or may be in danger, call or text 988 (US Suicide &amp; Crisis
            Lifeline) or call 911.
          </p>
          <p className="mt-5 text-xs text-mist-500">
            © {new Date().getFullYear()} {SITE.entity}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
