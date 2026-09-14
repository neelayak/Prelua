import LegalLayout, { Notice } from '../components/LegalLayout.jsx'
import Crisis from '../components/Crisis.jsx'
import { SITE, PRICING } from '../config.js'

/* This page exists because the App Store requires a reachable Support URL, and
   Google Play requires a support contact. It is a hard submission requirement,
   not a nice-to-have. Keep the email on it live. */

const SECTIONS = [
  { id: 'contact', label: 'Contact us' },
  { id: 'crisis', label: 'Urgent help' },
  { id: 'product', label: 'About the app' },
  { id: 'billing', label: 'Billing' },
  { id: 'privacy', label: 'Your data' },
  { id: 'technical', label: 'Technical' },
]

function QA({ q, children }) {
  return (
    <div className="border-b border-ink-800 py-5 last:border-0">
      <p className="text-sm font-semibold text-mist-100">{q}</p>
      <div className="mt-2 text-sm leading-relaxed text-mist-400">{children}</div>
    </div>
  )
}

export default function Support() {
  return (
    <LegalLayout
      title="Support"
      kicker="Help"
      sections={SECTIONS}
      showDates={false}
    >
      <h2 id="contact">Contact us</h2>
      <p>
        Email <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>. A real person reads
        it. We aim to reply within two business days.
      </p>
      <p>
        It speeds things up if you include your device and OS version, the app version (Settings →
        About), and what you expected to happen versus what happened. If you are reporting something
        that involves your personal data, do not paste sensitive details into the email — just tell us
        what happened and we will take it from there.
      </p>

      <h2 id="crisis">If you need urgent help</h2>
      <Crisis className="my-5" />

      <h2 id="product">About the app</h2>

      <QA q="What does Prelua actually do?">
        Most wellness apps are a content library — you open them, you browse, you pick something.
        Prelua builds a model of your wellness from your check-ins, what you engage with, and your
        phone-use rhythm, then delivers what it predicts you need, when it predicts you need it.
      </QA>

      <QA q="Is it available yet?">
        Not yet. Prelua is in private testing ahead of an iOS launch in the United States. Android
        follows shortly after. Join the waitlist on the <a href="/">homepage</a> and we will email you
        once — when it is live.
      </QA>

      <QA q="Is the coach a therapist?">
        No. The coach is an AI feature grounded in your own data, and it is explicitly not therapy,
        not a clinician, and not confidential in the way a conversation with a clinician is. Every
        message is screened for crisis language first, and anything that trips that screen gets
        resources rather than coaching. If you need care, please see a professional.
      </QA>

      <QA q="Do I need an account?">
        No. You can use Prelua anonymously and even try the coach for{' '}
        {PRICING.anonCoachMessagesLifetime} messages without signing up. Be aware that an anonymous
        history cannot be recovered if you reinstall or change device without linking an Apple or
        Google account first — we have no way to prove it was yours.
      </QA>

      <QA q="Why does it ask for my birth year?">
        To apply a 13+ age gate, and to switch on additional protections for users under 18 —
        including permanently excluding their data from the cross-user pattern learning that improves
        predictions for everyone else.
      </QA>

      <h2 id="billing">Billing and subscriptions</h2>

      <QA q="What does it cost?">
        A free tier with daily check-ins, the adaptive feed and {PRICING.freeCoachMessagesPerDay}{' '}
        coach messages a day. Paid is planned at {PRICING.monthly}/month, or{' '}
        {PRICING.foundingYearly}/year for the first {PRICING.foundingSeats.toLocaleString()} founding
        subscribers, whose price is then locked for as long as they stay subscribed. There is a{' '}
        {PRICING.trialDays}-day free trial. The price shown in the app at purchase is the one that
        applies.
      </QA>

      <QA q="How do I cancel?">
        In your Apple or Google account subscription settings — not in Prelua. We do not process the
        payment, so we cannot cancel it for you.{' '}
        <strong className="font-semibold text-mist-300">
          Deleting the app does not cancel a subscription
        </strong>{' '}
        and billing continues until you cancel it at the store.
      </QA>

      <QA q="Can I get a refund?">
        Refunds are handled by the store you bought through, under their policy. Email us anyway if
        something went wrong — we will point you at the right form and, where it is our fault, say so
        to the store.
      </QA>

      <h2 id="privacy">Your data</h2>

      <QA q="How do I delete my account and data?">
        In the app: Settings → Account → Delete Account. Or email us. Full detail, including what is
        removed and how long it takes, is on <a href="/delete-account/">Delete your account</a>.
      </QA>

      <QA q="Do you sell my data?">
        No. We do not sell personal information and we do not share it for anyone&rsquo;s advertising.
        There are no advertising SDKs in the app. The full picture is in the{' '}
        <a href="/privacy/">Privacy Policy</a>.
      </QA>

      <QA q="Where do my coach messages go?">
        They leave your device and are processed by our third-party AI inference provider to generate
        a reply and to run the safety screen. That is set out in section 7 of the{' '}
        <a href="/privacy/">Privacy Policy</a>. Please do not put information in chat that you would
        not want stored on a server.
      </QA>

      <QA q="Can I get a copy of my data?">
        Yes — data export is in the app under Settings, for signed-in accounts. If you cannot reach
        it, email <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a>.
      </QA>

      <h2 id="technical">Technical</h2>

      <QA q="Notifications are not arriving.">
        Check that notifications are enabled for Prelua in your device settings, that quiet hours in
        the app are not covering the time you expect, and that the daily cap has not already been
        reached. Prelua also skips a reminder if you have already checked in that day — that is
        intentional. If none of that explains it, email us with your device model and OS version.
      </QA>

      <QA q="Sign-in with Apple or Google fails.">
        Confirm you are online, then try again after fully closing the app. If it persists, tell us
        which provider, the exact error text, and your OS version.
      </QA>

      <QA q="Health data is not showing up.">
        Health integration is optional and off until you grant it. Check your device Health settings
        and confirm Prelua has read access to heart rate, HRV and sleep. Revoking access stops future
        reads; it does not remove data already collected — delete your account or contact us for that.
      </QA>

      <Notice tone="plain" title="Reporting a security issue">
        If you believe you have found a vulnerability, email{' '}
        <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a> with the subject line
        &ldquo;Security&rdquo;. Please give us a reasonable window to fix it before disclosing
        publicly, and do not access or modify data belonging to anyone else while testing.
      </Notice>
    </LegalLayout>
  )
}
