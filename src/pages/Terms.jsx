import LegalLayout, { Notice } from '../components/LegalLayout.jsx'
import Crisis from '../components/Crisis.jsx'
import { SITE, PRICING } from '../config.js'

/* ──────────────────────────────────────────────────────────────────────────────
   NOTE FOR THE OWNER — two clauses here are real legal decisions, not drafting:
     1. Governing law (§17). Set to India, the company's seat, with US consumer
        rights expressly preserved. A US-facing consumer app sometimes prefers a
        US state instead.
     2. There is deliberately NO arbitration or class-action-waiver clause.
        Adding one is a strategic choice with consequences; counsel should make
        it, not a draft.
   Get both reviewed before submitting to the App Store.
   ────────────────────────────────────────────────────────────────────────────── */

const SECTIONS = [
  { id: 'agreement', label: '1. This agreement' },
  { id: 'what', label: '2. What Prelua is not' },
  { id: 'eligibility', label: '3. Eligibility' },
  { id: 'accounts', label: '4. Your account' },
  { id: 'subscriptions', label: '5. Subscriptions' },
  { id: 'free', label: '6. Free tier limits' },
  { id: 'conduct', label: '7. Acceptable use' },
  { id: 'content', label: '8. Your content' },
  { id: 'ai', label: '9. AI output' },
  { id: 'ip', label: '10. Our content' },
  { id: 'thirdparty', label: '11. Third parties' },
  { id: 'termination', label: '12. Termination' },
  { id: 'warranty', label: '13. Disclaimers' },
  { id: 'liability', label: '14. Liability' },
  { id: 'indemnity', label: '15. Indemnity' },
  { id: 'changes', label: '16. Changes' },
  { id: 'law', label: '17. Governing law' },
  { id: 'misc', label: '18. Miscellaneous' },
]

export default function Terms() {
  return (
    <LegalLayout title="Terms of Service" kicker="Legal" sections={SECTIONS}>
      <h2 id="agreement">1. This agreement</h2>
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) are a contract between you and{' '}
        <strong>{SITE.entity}</strong>, {SITE.entityAddress} (&ldquo;Prelua&rdquo;,
        &ldquo;we&rdquo;, &ldquo;us&rdquo;), governing your use of the Prelua mobile application and
        the {SITE.origin.replace('https://', '')} website (the &ldquo;Service&rdquo;).
      </p>
      <p>
        By creating an account, or by using the Service at all — including in anonymous mode — you
        agree to these Terms and to our <a href="/privacy/">Privacy Policy</a>. If you do not agree,
        do not use the Service.
      </p>

      <h2 id="what">2. What Prelua is — and what it is not</h2>
      <Notice tone="iris" title="Prelua is a wellness product, not healthcare">
        <p style={{ marginBottom: '0.75rem' }}>
          Prelua is a general wellness application. It is{' '}
          <strong>not a medical device</strong>, and it does not provide medical advice, diagnosis,
          or treatment. It is <strong>not therapy</strong> and it is not a substitute for care from a
          qualified professional. It is <strong>not a crisis or emergency service</strong>, and no
          one monitors it for emergencies.
        </p>
        <p style={{ margin: 0 }}>
          Nothing in the Service — including anything the AI coach says, any content it delivers, or
          any score it shows you — should be relied on as a medical opinion or used to make decisions
          about diagnosis or treatment. Always consult a qualified health professional about a
          medical or mental-health condition, and never delay seeking care because of something you
          read in Prelua.
        </p>
      </Notice>

      <Crisis className="my-6" />

      <p>
        Prelua has not been evaluated or cleared by the U.S. Food and Drug Administration or any
        other regulator, and we make no claim of clinical validation. The Service is designed with
        reference to published behavioural-science frameworks; that is a design statement, not a
        claim of proven clinical outcomes for you.
      </p>

      <h2 id="eligibility">3. Eligibility</h2>
      <ul>
        <li>You must be at least 13 years old to use the Service.</li>
        <li>
          If you are under 18, you may use the Service only with the consent and involvement of a
          parent or legal guardian, and that parent or guardian agrees to these Terms on your behalf.
          Additional safety protections apply automatically to users under 18.
        </li>
        <li>
          At launch the Service is offered only to users in the United States. We may decline or
          terminate access from other regions.
        </li>
        <li>
          You must not use the Service if you are barred from doing so under applicable law or
          sanctions.
        </li>
      </ul>

      <h2 id="accounts">4. Your account</h2>
      <ul>
        <li>
          You may use Prelua anonymously, or sign in with Apple or Google. Prelua does not issue
          passwords; account security therefore depends on the security of your Apple or Google
          account.
        </li>
        <li>
          <strong>Anonymous accounts are limited.</strong> Purchases, program enrolment, data export,
          multi-device sync and extended coach chat require a signed-in account. Anonymous accounts
          are also purged after 90 days of inactivity, and{' '}
          <strong>
            if you lose the device or reinstall without linking an account, that history cannot be
            recovered
          </strong>{' '}
          — by design, because we have no way to prove it was yours.
        </li>
        <li>
          One account per person. Do not share your account, and do not use another person&rsquo;s.
        </li>
        <li>
          The information you give at onboarding — including your birth year — must be accurate.
          Misstating your age to bypass the teen safety tier is a breach of these Terms.
        </li>
      </ul>

      <h2 id="subscriptions">5. Subscriptions, billing and cancellation</h2>
      <p>
        Prelua offers a free tier and a paid subscription. Planned launch pricing is{' '}
        <strong>{PRICING.monthly} per month</strong>, or{' '}
        <strong>{PRICING.foundingYearly} per year</strong> for the first{' '}
        {PRICING.foundingSeats.toLocaleString()} founding subscribers. After the founding cohort is
        full, standard pricing is {PRICING.standardMonthly} per month or {PRICING.standardYearly} per
        year. <strong>The price shown to you in the app at the moment of purchase controls.</strong>
      </p>
      <ul>
        <li>
          <strong>Founding price lock.</strong> If you subscribe as a founding subscriber, we will not
          raise your renewal price for as long as your subscription remains continuously active. If
          you cancel and later resubscribe, the then-current price applies.
        </li>
        <li>
          <strong>Free trial.</strong> New subscribers may be offered a {PRICING.trialDays}-day free
          trial. Unless you cancel at least 24 hours before the trial ends, it converts automatically
          into a paid subscription at the price shown. Only one trial per person.
        </li>
        <li>
          <strong>Auto-renewal.</strong> Subscriptions renew automatically for the same period at the
          same price unless you cancel at least 24 hours before the current period ends. Your account
          is charged for renewal within 24 hours before the period ends.
        </li>
        <li>
          <strong>Billing is by Apple or Google, not by us.</strong> Payment is taken by the app store
          you purchased through. We never receive your card details.
        </li>
        <li>
          <strong>Cancelling.</strong> Manage or cancel in your Apple or Google account subscription
          settings. Deleting the app does not cancel a subscription and does not stop billing.
        </li>
        <li>
          <strong>Refunds</strong> are handled under the policy of the store you purchased through.
          We cannot issue a refund for a purchase we did not process, though we will help you reach
          the right place — email <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>.
        </li>
        <li>
          We may change prices for future periods. We will give you notice before a change affects a
          renewal, and you can cancel before it takes effect.
        </li>
      </ul>

      <h2 id="free">6. Free tier limits</h2>
      <p>
        The free tier includes daily check-ins, the adaptive feed and{' '}
        {PRICING.freeCoachMessagesPerDay} coach messages per day. Anonymous users get{' '}
        {PRICING.anonCoachMessagesLifetime} coach messages in total, so the feature can be tried
        before signing up. Paid subscribers get unlimited coach chat, subject to fair-use rate limits
        that exist to stop automated abuse — they are not intended to affect normal human use.
      </p>
      <p>
        These limits are product decisions and may change. We will not reduce what you have already
        paid for during a period you have paid for.
      </p>

      <h2 id="conduct">7. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>
          Use the Service to attempt to obtain medical advice, or to substitute it for professional
          care in a situation that needs one.
        </li>
        <li>
          Submit another person&rsquo;s personal or health information, or impersonate anyone.
        </li>
        <li>
          Attempt to circumvent usage limits, the safety classifier, the age gate, or any
          server-side enforcement — including by automating access or using the Service through
          anything other than the official app.
        </li>
        <li>
          Reverse engineer, decompile, scrape, or extract our content or the model prompts behind the
          coach, or use the Service&rsquo;s outputs to train a competing model.
        </li>
        <li>Probe, load-test, or interfere with the Service or its infrastructure.</li>
        <li>Use the Service for anything unlawful, or to harass or harm anyone.</li>
      </ul>

      <h2 id="content">8. Your content</h2>
      <p>
        Your thought entries, check-ins and chat messages are yours. You keep ownership of them. You
        grant us a limited, non-exclusive, worldwide, royalty-free licence to store, process and
        transmit that content <strong>solely</strong> in order to operate and improve the Service for
        you — including sending coach messages to our inference provider as described in the{' '}
        <a href="/privacy/">Privacy Policy</a>.
      </p>
      <p>
        We may derive aggregated, anonymised statistics from usage patterns and use them to improve
        the Service. Those statistics do not identify you, and — as set out in the Privacy Policy —
        your individual thought entries and chat messages are never included in cross-user analysis.
        This licence ends when you delete the content or your account, except for aggregate data that
        no longer identifies you and backups pending expiry.
      </p>

      <h2 id="ai">9. AI-generated output</h2>
      <p>
        Coach replies, insights and summaries are generated by large language models. They can be
        wrong, incomplete, or inappropriate to your situation, and they do not represent the views of
        Prelua or of any clinician. Do not rely on them for decisions about your health, finances,
        relationships, safety, or legal position. You are responsible for how you act on anything the
        Service tells you.
      </p>
      <p>
        The safety classifier that screens for crisis language is an automated system and may miss
        things or misfire. Its existence does not make Prelua a safety net, and you should not rely on
        it as one.
      </p>

      <h2 id="ip">10. Our content and intellectual property</h2>
      <p>
        The Service, including the Prelua name and mark, its software, design, meditation and audio
        content, written content, and the models and rules behind the engine, is owned by{' '}
        {SITE.entity} or its licensors and is protected by intellectual property law. You get a
        personal, non-transferable, revocable licence to use the Service for your own non-commercial
        use, and nothing more. Content in the app is for your personal use — you may not
        redistribute, broadcast, or republish it.
      </p>

      <h2 id="thirdparty">11. Third-party services</h2>
      <p>
        The Service depends on third parties, including Apple, Google, our hosting provider and our
        AI inference provider. Your use of the Service is also subject to the app store terms you
        installed under. We are not responsible for third-party services we do not control, and an
        outage or change on their side may affect the Service.
      </p>
      <p>
        Apple and Google are not parties to these Terms and have no obligation to provide support for
        the Service.
      </p>

      <h2 id="termination">12. Suspension and termination</h2>
      <p>
        You can stop using the Service at any time and delete your account from within the app — see{' '}
        <a href="/delete-account/">Delete your account</a>. Deleting your account does not cancel a
        subscription; cancel that in your store settings.
      </p>
      <p>
        We may suspend or terminate your access if you materially breach these Terms, if we are
        required to by law, or if we reasonably believe your use puts other users or the Service at
        risk. Where it is reasonable to do so we will tell you first and give you a chance to fix the
        problem. If we terminate a paid subscription other than for your breach, we will refund the
        unused portion of the period you have paid for.
      </p>
      <p>
        We may also discontinue the Service. If we do, we will give reasonable advance notice, make
        data export available before shutdown, and refund any unused prepaid period.
      </p>

      <h2 id="warranty">13. Disclaimers</h2>
      <p>
        The Service is provided <strong>&ldquo;as is&rdquo;</strong> and{' '}
        <strong>&ldquo;as available&rdquo;</strong>. To the fullest extent permitted by law, we
        disclaim all warranties, express or implied, including merchantability, fitness for a
        particular purpose and non-infringement.
      </p>
      <p>
        We do not warrant that the Service will be uninterrupted or error-free, that predictions,
        scores or recommendations will be accurate or suitable for you, that notifications will
        arrive at any particular time, or that any particular wellness outcome will follow from using
        it.
      </p>

      <h2 id="liability">14. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {SITE.entity} and its directors, employees and
        suppliers will not be liable for indirect, incidental, special, consequential, exemplary or
        punitive damages, or for lost profits, lost data, or loss of goodwill, arising out of or
        relating to the Service — even if we were told such damages were possible.
      </p>
      <p>
        Our total aggregate liability for all claims relating to the Service is limited to the
        greater of (a) the amount you paid us in the 12 months before the event giving rise to the
        claim, or (b) fifty United States dollars (US$50).
      </p>
      <p>
        Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or
        limited — including liability for death or personal injury caused by negligence, for fraud,
        or under mandatory consumer protection law in your place of residence.
      </p>

      <h2 id="indemnity">15. Indemnity</h2>
      <p>
        You agree to indemnify and hold harmless {SITE.entity} from claims, damages and reasonable
        costs arising from your breach of these Terms, your misuse of the Service, or content you
        submit that infringes someone else&rsquo;s rights.
      </p>

      <h2 id="changes">16. Changes to these Terms</h2>
      <p>
        We may update these Terms. For material changes we will give notice in the app or by email
        before they take effect, and the &ldquo;last updated&rdquo; date at the top will change.
        Continuing to use the Service after a change takes effect means you accept the updated
        Terms. If you do not accept them, stop using the Service and cancel any subscription.
      </p>

      <h2 id="law">17. Governing law and disputes</h2>
      <p>
        These Terms are governed by the laws of India, and the courts having jurisdiction over the
        registered office of {SITE.entity} will have exclusive jurisdiction over disputes — except
        that <strong>nothing in this section deprives you of the protection of the mandatory
        consumer-protection laws of your country or state of residence</strong>, or of the right to
        bring a claim in your local courts where the law gives you that right.
      </p>
      <p>
        Before starting formal proceedings, please email{' '}
        <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>. Most problems are faster to
        fix that way, and we will engage in good faith.
      </p>

      <h2 id="misc">18. Miscellaneous</h2>
      <ul>
        <li>
          If any provision of these Terms is held unenforceable, the rest remains in force and the
          unenforceable part is limited to the minimum extent necessary.
        </li>
        <li>
          Our not enforcing a provision on one occasion is not a waiver of it.
        </li>
        <li>
          You may not assign these Terms. We may assign them in connection with a merger,
          acquisition or sale of assets, subject to the notice commitment in our Privacy Policy.
        </li>
        <li>
          These Terms and the Privacy Policy are the entire agreement between you and us about the
          Service.
        </li>
        <li>
          Questions: <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>.
        </li>
      </ul>
    </LegalLayout>
  )
}
