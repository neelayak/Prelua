// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH.
// Everything you need to change after launch lives in this file only.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE = {
  name: 'Prelua',
  tagline: 'It knows before you do.',
  origin: 'https://prelua.app',

  // Legal entity. Shown in the footer and named in both legal pages.
  entity: 'SAVVNIONNIX TECHNOLOGY PRIVATE LIMITED',

  // TODO(neelay): replace with the registered office address of the company.
  // CCPA/CPRA notices must name a reachable legal entity, and Apple's reviewer
  // occasionally checks that the policy's contact details are real.
  entityAddress: 'Registered office address — to be confirmed',

  // TODO(neelay): confirm this mailbox actually receives mail before publishing.
  // It is printed on /support, /privacy, /terms and /delete-account.
  supportEmail: 'support@prelua.app',
  privacyEmail: 'privacy@prelua.app',

  // Dates printed on the legal pages. Bump BOTH when you materially change them.
  legalEffective: '13 September 2026',
  legalUpdated: '13 September 2026',
}

// Canonical pricing. Source: locked product decisions, 2026-07-02.
export const PRICING = {
  monthly: '$4.99',
  foundingYearly: '$29.99',
  standardMonthly: '$9.99',
  standardYearly: '$59.99',
  foundingSeats: 1000,
  trialDays: 7,
  freeCoachMessagesPerDay: 5,
  anonCoachMessagesLifetime: 5,
}

// ─────────────────────────────────────────────────────────────────────────────
// WAITLIST — DISABLED ON PURPOSE.
//
// The form renders and validates but will not submit while `enabled` is false;
// it shows a "opening shortly" state instead. Nothing is sent anywhere.
//
// To turn it on you need the Supabase side first (see README → "Waitlist").
// Do NOT point this at a raw PostgREST table endpoint from a public bundle:
// this repo is public, so the key ships to every visitor and an open insert
// endpoint gets spammed the day you post the link on Reddit. Point it at the
// `waitlist-signup` Edge Function, which verifies a Turnstile token and does
// the insert with the service role key server-side.
// ─────────────────────────────────────────────────────────────────────────────
export const WAITLIST = {
  enabled: false,
  endpoint: '', // e.g. 'https://tbwskbdjwgxremctnvuy.supabase.co/functions/v1/waitlist-signup'
  anonKey: '', // Supabase anon key — only used to invoke the function, never to write
  turnstileSiteKey: '', // Cloudflare Turnstile site key (public by design)
}

// US crisis resources. Printed on /terms and /support.
// Prelua launches on the US storefront only, so these are the correct ones.
export const CRISIS = [
  { label: '988 Suicide & Crisis Lifeline', detail: 'Call or text 988', href: 'tel:988' },
  { label: 'Crisis Text Line', detail: 'Text HOME to 741741', href: 'sms:741741' },
  { label: 'Emergency services', detail: 'Call 911', href: 'tel:911' },
]

export const NAV = [
  { label: 'The thesis', href: '/#thesis' },
  { label: 'Science', href: '/#science' },
  { label: 'Team', href: '/#team' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Support', href: '/support/' },
]

export const FOOTER_LEGAL = [
  { label: 'Privacy Policy', href: '/privacy/' },
  { label: 'Terms of Service', href: '/terms/' },
  { label: 'Support', href: '/support/' },
  { label: 'Delete your account', href: '/delete-account/' },
]
