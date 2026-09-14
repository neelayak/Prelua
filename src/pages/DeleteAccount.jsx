import LegalLayout, { Notice } from '../components/LegalLayout.jsx'
import { SITE } from '../config.js'

/* Google Play requires a publicly reachable account-deletion URL for any app
   that lets users create an account — reachable WITHOUT installing the app and
   WITHOUT signing in. That is precisely this page. Do not move or rename it
   without updating the Play Console Data Safety form. */

const SECTIONS = [
  { id: 'in-app', label: 'Delete in the app' },
  { id: 'by-email', label: 'Delete by email' },
  { id: 'what', label: 'What gets deleted' },
  { id: 'kept', label: 'What we keep' },
  { id: 'timing', label: 'How long it takes' },
  { id: 'subscription', label: 'Your subscription' },
  { id: 'anonymous', label: 'Anonymous accounts' },
  { id: 'export', label: 'Export first' },
]

export default function DeleteAccount() {
  return (
    <LegalLayout
      title="Delete your account and data"
      kicker="Your data"
      sections={SECTIONS}
      showDates={false}
    >
      <p>
        You can delete your Prelua account and the personal data attached to it at any time. There are
        two routes, and neither requires you to talk to anyone first.
      </p>

      <Notice tone="iris" title="Deleting your account does not cancel your subscription">
        Subscriptions are billed by Apple or Google, not by us, so only they can stop the charge.
        Cancel in your Apple or Google account subscription settings <em>before</em> deleting your
        Prelua account — see <a href="#subscription">Your subscription</a> below.
      </Notice>

      <h2 id="in-app">Option 1 — delete in the app</h2>
      <ol>
        <li>Open Prelua.</li>
        <li>
          Go to <strong>Settings</strong>.
        </li>
        <li>
          Open <strong>Account</strong>.
        </li>
        <li>
          Tap <strong>Delete Account</strong> and confirm.
        </li>
      </ol>
      <p>
        The deletion is irreversible. Your check-in history, thought entries, chat history and the
        wellness model built from them cannot be restored afterwards, including if you sign up again
        with the same Apple or Google account.
      </p>

      <h2 id="by-email">Option 2 — delete by email</h2>
      <p>
        If you have uninstalled the app, cannot sign in, or would rather not do it yourself, email{' '}
        <a
          href={`mailto:${SITE.privacyEmail}?subject=Account%20deletion%20request`}
        >
          {SITE.privacyEmail}
        </a>{' '}
        with the subject <strong>&ldquo;Account deletion request&rdquo;</strong>.
      </p>
      <p>Please send it from the email address associated with your account, and tell us:</p>
      <ul>
        <li>Whether you signed in with Apple or with Google.</li>
        <li>Roughly when you created the account, if you remember.</li>
      </ul>
      <p>
        We have to verify that a deletion request comes from the account holder — otherwise anyone
        could erase someone else&rsquo;s history. If we cannot verify it we will tell you why rather
        than act on it. Do not send us government ID or any document containing an ID number; we do
        not need it and we do not want to hold it.
      </p>

      <h2 id="what">What gets deleted</h2>
      <ul>
        <li>Your account and sign-in identifiers.</li>
        <li>Your profile — country, birth year, gender if you provided it, and your stated goal.</li>
        <li>Every mood check-in and the reasons recorded with them.</li>
        <li>Every thought entry you wrote.</li>
        <li>Your entire coach chat history.</li>
        <li>Your Wellness Score history, and the per-user model and predictions derived from it.</li>
        <li>Your content engagement history — what you opened, completed and saved.</li>
        <li>Any health-app data we had read from Apple Health or Health Connect.</li>
        <li>Your notification settings, push token and device identifier.</li>
      </ul>

      <h2 id="kept">What we keep, and why</h2>
      <p>Two narrow things survive deletion:</p>
      <ul>
        <li>
          <strong>Aggregate statistics that no longer identify you.</strong> Prelua learns patterns
          of the form &ldquo;X% of users in this cohort who showed signal combination Y went on to
          show outcome Z&rdquo;. Those aggregates contain no identifiers and cannot be traced back to
          you or re-linked to you, so they are not deleted. Your individual thought entries and chat
          messages were never part of them in the first place.
        </li>
        <li>
          <strong>Records we are legally required to retain</strong> — principally transaction and tax
          records for a paid subscription. We keep the minimum for the period the law requires and
          nothing more.
        </li>
      </ul>

      <h2 id="timing">How long it takes</h2>
      <ul>
        <li>
          <strong>Immediately:</strong> your account stops working and your data is no longer served
          to the app.
        </li>
        <li>
          <strong>Within 30 days:</strong> your personal data is removed from our production systems.
        </li>
        <li>
          <strong>Shortly after that:</strong> encrypted backups containing it reach the end of their
          rolling retention window and expire. We do not restore deleted accounts from backups.
        </li>
      </ul>
      <p>
        Email requests are acknowledged within 10 business days and completed within 45 days, which is
        the window applicable privacy law allows. In practice we act sooner.
      </p>

      <h2 id="subscription">Your subscription</h2>
      <p>
        Because Apple and Google process the payment, we cannot cancel a subscription on your behalf.
      </p>
      <ul>
        <li>
          <strong>iPhone or iPad:</strong> Settings → your name → Subscriptions → Prelua → Cancel
          Subscription.
        </li>
        <li>
          <strong>Android:</strong> Google Play → profile icon → Payments &amp; subscriptions →
          Subscriptions → Prelua → Cancel.
        </li>
      </ul>
      <p>
        Deleting your Prelua account while a subscription is still active means the charge continues
        with nothing to use it on. Cancel first, then delete.
      </p>

      <h2 id="anonymous">Anonymous accounts</h2>
      <p>
        If you never signed in, your data is tied to a randomly generated identifier on that device.
        Delete it from Settings → Account inside the app. An anonymous account is also purged
        automatically after 90 days without use.
      </p>
      <p>
        We cannot delete an anonymous account by email request, and this is not an oversight: there is
        no verifiable link between you and that identifier, so we have no way to confirm the account
        is yours. If you no longer have the device, the 90-day purge handles it.
      </p>

      <h2 id="export">Consider exporting first</h2>
      <p>
        Deletion is permanent. If your check-in history or written entries have any value to you, take
        a copy before you delete: Settings → Account → Export data, for signed-in accounts. If export
        is unavailable to you, email{' '}
        <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a> and we will provide it.
      </p>
      <p>
        Everything above is described more fully in our <a href="/privacy/">Privacy Policy</a>. For
        anything else, <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>.
      </p>
    </LegalLayout>
  )
}
