import { useState } from 'react'
import { WAITLIST } from '../config.js'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export default function Waitlist({ compact = false }) {
  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle') // idle | sending | done | error | disabled
  const [message, setMessage] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    const value = email.trim()

    if (!EMAIL_RE.test(value)) {
      setState('error')
      setMessage('That does not look like an email address.')
      return
    }

    // Deliberate: with the endpoint unconfigured there is nowhere to send this,
    // and silently dropping an address someone typed is worse than saying so.
    if (!WAITLIST.enabled || !WAITLIST.endpoint) {
      setState('disabled')
      setMessage('')
      return
    }

    setState('sending')
    try {
      const res = await fetch(WAITLIST.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(WAITLIST.anonKey ? { Authorization: `Bearer ${WAITLIST.anonKey}` } : {}),
        },
        body: JSON.stringify({ email: value, source: 'prelua.app' }),
      })
      if (!res.ok) throw new Error(String(res.status))
      setState('done')
      setEmail('')
    } catch {
      setState('error')
      setMessage('Something went wrong on our end. Try again in a moment.')
    }
  }

  if (state === 'done') {
    return (
      <div
        className="flex items-start gap-3 rounded-2xl border border-gold-300/30 bg-gold-300/8 p-5"
        role="status"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
          <circle cx="9" cy="9" r="8.25" stroke="#E6AE5B" strokeWidth="1.5" />
          <path d="M5.5 9.25L7.75 11.5L12.5 6.75" stroke="#E6AE5B" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <p className="text-sm leading-relaxed text-mist-300">
          You&rsquo;re on the list. We&rsquo;ll email once before launch — nothing else.
        </p>
      </div>
    )
  }

  return (
    <div className={compact ? '' : 'w-full'}>
      <form onSubmit={onSubmit} className="flex flex-col gap-2.5 sm:flex-row" noValidate>
        <label htmlFor={compact ? 'wl-email-2' : 'wl-email'} className="sr-only">
          Email address
        </label>
        <input
          id={compact ? 'wl-email-2' : 'wl-email'}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (state !== 'idle') setState('idle')
          }}
          className="min-w-0 flex-1 rounded-xl border border-ink-700 bg-ink-850 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-500 transition-colors focus:border-copper-400/60 focus:outline-none"
        />
        <button
          type="submit"
          disabled={state === 'sending'}
          className="shrink-0 rounded-xl bg-linear-to-r from-copper-400 to-gold-300 px-5 py-3 text-sm font-semibold text-ink-950 transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {state === 'sending' ? 'Adding…' : 'Join the waitlist'}
        </button>
      </form>

      {state === 'error' && (
        <p className="mt-2.5 text-xs text-gold-300" role="alert">
          {message}
        </p>
      )}

      {state === 'disabled' && (
        <p className="mt-2.5 text-xs leading-relaxed text-mist-400" role="status">
          The waitlist opens shortly. In the meantime, email{' '}
          <a href="mailto:support@prelua.app" className="text-gold-200 underline underline-offset-2">
            support@prelua.app
          </a>{' '}
          and we&rsquo;ll add you by hand.
        </p>
      )}

      {state === 'idle' && (
        <p className="mt-2.5 text-xs text-mist-500">
          One email before launch. No newsletter, no sharing your address.
        </p>
      )}
    </div>
  )
}
