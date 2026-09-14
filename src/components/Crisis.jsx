import { CRISIS } from '../config.js'

/**
 * Crisis resources. US-only, because Prelua launches on the US storefront only.
 * When Prelua opens another storefront, this block needs that country's numbers
 * — a wrong helpline is worse than none.
 */
export default function Crisis({ className = '' }) {
  return (
    <div className={`rounded-2xl border border-copper-400/35 bg-copper-400/8 p-5 ${className}`}>
      <p className="text-sm font-semibold text-mist-100">If you need help right now</p>
      <p className="mt-1.5 text-sm leading-relaxed text-mist-300">
        Prelua is not a crisis service and no one is monitoring it for emergencies. If you are
        thinking about harming yourself, or you are in danger, contact one of these instead.
      </p>
      <ul className="mt-4 flex flex-col gap-2">
        {CRISIS.map((c) => (
          <li key={c.label} className="flex flex-wrap items-baseline gap-x-2 text-sm">
            <span className="font-medium text-mist-100">{c.label}</span>
            <a
              href={c.href}
              className="text-gold-200 underline underline-offset-2 hover:text-gold-300"
            >
              {c.detail}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-mist-500">
        Outside the United States, contact your local emergency number or a crisis line in your
        country.
      </p>
    </div>
  )
}
