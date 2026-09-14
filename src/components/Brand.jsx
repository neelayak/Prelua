/**
 * The mark is the shipped app icon itself — a gold sunrise over deep navy —
 * rather than a web-only redraw. The site and the App Store listing have to be
 * recognisably the same product at thumbnail size.
 */
export function Mark({ size = 28, className = '' }) {
  return (
    <img
      src="/logo.png"
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      loading="eager"
      decoding="async"
      className={`shrink-0 rounded-full ${className}`}
      style={{ width: size, height: size }}
    />
  )
}

export function Wordmark({ className = '' }) {
  return (
    <a
      href="/"
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label="Prelua — home"
    >
      <Mark size={28} className="transition-transform duration-300 group-hover:scale-105" />
      <span className="text-[1.0625rem] font-semibold tracking-[-0.02em] text-mist-100">
        Prelua
      </span>
    </a>
  )
}
