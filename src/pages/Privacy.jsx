import LegalLayout, { Notice } from '../components/LegalLayout.jsx'
import { SITE } from '../config.js'

/* ──────────────────────────────────────────────────────────────────────────────
   This policy is written against Prelua's ACTUAL data flows, not a template.
   Every disclosure below corresponds to something the system really does:
   passive sleep-proxy sensing, optional HealthKit/Health Connect reads, coach
   messages leaving the device to a third-party inference provider (NVIDIA NIM),
   a safety classifier reading message content, transient IP geolocation at
   signup, a 13+ age gate with a teen tier, and cohort aggregation.

   If any of those flows changes in the app, this file must change with it.
   A policy that describes a system you no longer run is worse than none.
   ────────────────────────────────────────────────────────────────────────────── */

const SECTIONS = [
  { id: 'summary', label: 'Short version' },
  { id: 'who', label: '1. Who we are' },
  { id: 'scope', label: '2. Scope' },
  { id: 'collect', label: '3. What we collect' },
  { id: 'not-collect', label: '4. What we never collect' },
  { id: 'use', label: '5. How we use it' },
  { id: 'automated', label: '6. Automated analysis' },
  { id: 'ai', label: '7. AI and the coach' },
  { id: 'health', label: '8. Health integrations' },
  { id: 'providers', label: '9. Service providers' },
  { id: 'cohorts', label: '10. Aggregation' },
  { id: 'teens', label: '11. Users aged 13–17' },
  { id: 'retention', label: '12. Retention' },
  { id: 'rights', label: '13. Your rights' },
  { id: 'sensitive', label: '14. Sensitive information' },
  { id: 'security', label: '15. Security' },
  { id: 'changes', label: '16. Changes' },
  { id: 'contact', label: '17. Contact' },
]

export default function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" kicker="Legal" sections={SECTIONS}>
      <h2 id="summary">Short version</h2>
      <p>
        This summary is here so you actually read something. It is not a substitute for the full
        policy below, which controls.
      </p>
      <ul>
        <li>
          Prelua works by observing signals — your check-ins, what content you engage with, how your
          phone-use rhythm changes. That observation is the product, so we describe it in detail
          rather than burying it.
        </li>
        <li>
          <strong>We do not sell your personal information, and we do not share it for anyone&rsquo;s
          advertising.</strong> There are no advertising SDKs in the app.
        </li>
        <li>
          Coach chat messages leave your device and are processed by our third-party AI inference
          provider in order to generate a reply and to screen for crisis language.
        </li>
        <li>
          Health-app data (Apple Health / Health Connect) is read only if you grant permission, is
          never used for advertising, and is never sold or shared for a third party&rsquo;s own
          purposes.
        </li>
        <li>
          You can delete your account and your data from inside the app, or by emailing us. See{' '}
          <a href="/delete-account/">Delete your account</a>.
        </li>
      </ul>

      <h2 id="who">1. Who we are</h2>
      <p>
        Prelua (&ldquo;Prelua&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is operated by{' '}
        <strong>{SITE.entity}</strong>, {SITE.entityAddress}. For the purposes of applicable data
        protection law, {SITE.entity} is the business responsible for personal information collected
        through the Prelua mobile application and the {SITE.origin.replace('https://', '')} website
        (together, the &ldquo;Service&rdquo;).
      </p>
      <p>
        Privacy questions and requests: <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a>.
      </p>

      <h2 id="scope">2. Scope</h2>
      <p>
        This policy covers the Prelua app and this website. Prelua is offered at launch only to
        users in the United States, and our data practices are built to comply with the California
        Consumer Privacy Act as amended by the CPRA, alongside comparable state privacy laws. Our
        consent records are structured to be extensible to the GDPR and India&rsquo;s DPDP Act if we
        open other markets; this policy will be updated before that happens.
      </p>
      <p>
        Data is stored and processed in the United States. Prelua is not directed to, and may not be
        used by, anyone under 13.
      </p>

      <h2 id="collect">3. What we collect</h2>

      <h3>3.1 Account information</h3>
      <ul>
        <li>
          <strong>Sign-in identifiers.</strong> If you sign in with Apple or Google, we receive a
          stable user identifier and, depending on your choices with that provider, an email address.
          Prelua has no password of its own — we never see or store one.
        </li>
        <li>
          <strong>Anonymous accounts.</strong> You can use Prelua without signing in. In that mode we
          create a randomly generated account identifier. It is not linked to your name or email
          unless you later choose to attach an Apple or Google account, which preserves your history.
        </li>
      </ul>

      <h3>3.2 Onboarding information</h3>
      <ul>
        <li>
          <strong>Country.</strong> Determined once, at signup, from the IP address of your request.{' '}
          <strong>
            The IP address is read in memory and discarded — we do not store your IP address as part
            of your profile.
          </strong>{' '}
          We keep only the resulting two-letter country code.
        </li>
        <li>
          <strong>Birth year</strong>, used to apply our 13+ age gate and, for users under 18, the
          teen safety tier described in section 11.
        </li>
        <li>
          <strong>Gender</strong> — optional, and skippable. Used only to form the cohort buckets
          described in section 10.
        </li>
        <li>
          <strong>Your primary goal</strong> (for example sleep, anxiety, focus, or habit change).
        </li>
      </ul>

      <h3>3.3 What you tell us</h3>
      <ul>
        <li>
          <strong>Mood check-ins.</strong> Your selected mood and the contextual reason you select
          alongside it.
        </li>
        <li>
          <strong>Thought entries.</strong> Optional free-text notes you choose to write. These are
          personal and we treat them as such: they are never shown to other users and never included
          in the aggregate patterns described in section 10.
        </li>
        <li>
          <strong>Coach chat messages.</strong> The messages you send and the replies you receive.
        </li>
        <li>
          <strong>Settings</strong> — reminder times, quiet hours, notification preferences.
        </li>
      </ul>

      <h3>3.4 Behavioural information generated by using the app</h3>
      <ul>
        <li>Which content you open, skip, complete, replay or save.</li>
        <li>Which categories you browse and how long you spend in them.</li>
        <li>Whether you open, dismiss, or act on a notification, and how quickly.</li>
        <li>Session timestamps, session length and session frequency.</li>
      </ul>
      <p>
        This is the largest and most important category of information Prelua uses. It is the basis
        of the Wellness Score described in section 6.
      </p>

      <h3>3.5 Passive signals derived on your device</h3>
      <ul>
        <li>
          <strong>Sleep proxy.</strong> We derive an approximate rest window from periods of phone
          inactivity. This is a crude directional signal, not a sleep measurement, and we treat it as
          such.
        </li>
        <li>
          <strong>Step count</strong> from the device&rsquo;s motion sensors, used as a trend signal
          only.
        </li>
        <li>
          <strong>Session-timing consistency</strong> and category breadth over time.
        </li>
      </ul>

      <h3>3.6 Optional health-app data</h3>
      <p>
        If — and only if — you grant permission, Prelua reads a limited set of data from Apple Health
        (HealthKit) or Health Connect: heart rate, heart-rate variability, and sleep stages. See
        section 8, which sets out the specific restrictions that apply to this data.
      </p>

      <h3>3.7 Device and technical information</h3>
      <ul>
        <li>
          A push notification token and a device identifier, so that a reminder reaches your device
          and so we do not send you the same notification twice.
        </li>
        <li>App version, operating system version, and device model.</li>
        <li>
          Crash and error diagnostics, used to fix defects. We do not attempt to re-identify you from
          diagnostic data.
        </li>
      </ul>

      <h2 id="not-collect">4. What we never collect</h2>
      <p>To be unambiguous, Prelua does not collect or request:</p>
      <ul>
        <li>Precise or background location. We derive a country once, at signup, and nothing more.</li>
        <li>Your contacts, calendar, photos, camera, or microphone.</li>
        <li>Any activity outside the Prelua app — no browsing history, no cross-app tracking.</li>
        <li>
          Advertising identifiers. There are no advertising or attribution SDKs in the app, and we do
          not participate in any advertising network or data exchange.
        </li>
        <li>
          Payment card details. Purchases are handled entirely by Apple or Google; we receive a
          subscription status, never your card.
        </li>
      </ul>

      <h2 id="use">5. How we use your information</h2>
      <table>
        <thead>
          <tr>
            <th>Purpose</th>
            <th>Information used</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Provide the core product — check-ins, feed, content playback</td>
            <td>Account, check-ins, behavioural signals</td>
          </tr>
          <tr>
            <td>Compute your Wellness Score and select what to deliver next</td>
            <td>Check-ins, behavioural signals, passive signals, health data if granted</td>
          </tr>
          <tr>
            <td>Deliver notifications at times that fit your pattern</td>
            <td>Settings, push token, engagement history</td>
          </tr>
          <tr>
            <td>Run coach chat and screen it for crisis language</td>
            <td>Your messages, plus context drawn from your signals</td>
          </tr>
          <tr>
            <td>Enforce free-tier limits and prevent abuse</td>
            <td>Account identifier, message counts, rate-limit counters</td>
          </tr>
          <tr>
            <td>Improve matching quality across users</td>
            <td>Aggregated, anonymised patterns only (section 10)</td>
          </tr>
          <tr>
            <td>Fix defects and keep the Service running</td>
            <td>Diagnostics, technical information</td>
          </tr>
          <tr>
            <td>Meet legal, tax and regulatory obligations</td>
            <td>Subscription and account records</td>
          </tr>
        </tbody>
      </table>
      <p>
        We do not use your information for any purpose materially different from those listed
        without telling you first.
      </p>

      <h2 id="automated">6. Automated analysis and the Wellness Score</h2>
      <p>
        Prelua works by automated analysis. It computes a composite <strong>Wellness Score</strong>{' '}
        from your mood trend, engagement, check-in consistency, sleep proxy and passive signals, and
        uses that score — together with rules stored in our system — to decide what content to show
        you and when to notify you.
      </p>
      <Notice tone="iris" title="This is not a diagnosis">
        The Wellness Score is a product mechanism for choosing content. It is not a clinical
        assessment, a medical measurement, or a mental-health diagnosis. It should not be relied on
        to make decisions about your health, and it does not replace advice from a qualified
        professional.
      </Notice>
      <p>
        The automated analysis affects only what Prelua shows you and when. It is not used to make
        decisions with legal or comparably significant effects, and it is not used to set your price
        or restrict access to anything you have paid for.
      </p>

      <h2 id="ai">7. AI, the coach, and third-party inference</h2>
      <p>
        Coach chat is powered by large language models that we do not run on your device. This means
        the following, stated plainly:
      </p>
      <ul>
        <li>
          <strong>Your coach messages leave your device.</strong> They are transmitted over an
          encrypted connection to our third-party AI inference provider —{' '}
          <strong>NVIDIA</strong>, via its NIM inference endpoints — which generates the reply.
          Relevant context from your signal history (for example your recent mood trend) is sent
          alongside the message so the reply is grounded in your actual data rather than generic
          advice.
        </li>
        <li>
          <strong>Message content is screened before the coach sees it.</strong> Every message passes
          through an automated safety classifier that detects crisis, self-harm and abuse language.
          Where such language is detected, the system responds with crisis resources instead of
          coaching. This screening necessarily involves automated processing of the content of what
          you write.
        </li>
        <li>
          <strong>We do not sell this content, and we do not use it for advertising.</strong> We use
          it to generate your reply, to run the safety screen, to enforce usage limits, and to
          diagnose failures.
        </li>
        <li>
          Our inference provider processes content on our instructions in order to return a response.
          We choose providers whose terms are compatible with this policy, and we retain the option
          to run these models on infrastructure we control.
        </li>
      </ul>
      <Notice tone="plain" title="Please do not treat the coach as confidential">
        The coach is a software feature, not a licensed professional, and conversations with it are
        not privileged or confidential in the way a conversation with a clinician is. Avoid putting
        information in chat that you would not want stored on our servers — including identifiers
        for other people.
      </Notice>

      <h2 id="health">8. Health-app integrations (HealthKit / Health Connect)</h2>
      <p>
        These integrations are optional. Prelua functions without them; granting access improves the
        accuracy of the sleep and recovery components of your Wellness Score.
      </p>
      <ul>
        <li>
          We request read access only, and only to the specific data types named in section 3.6.
        </li>
        <li>
          <strong>
            Health data is never used for advertising or any similar use-based marketing, is never
            sold, and is never shared with or disclosed to any third party for that third
            party&rsquo;s own purposes.
          </strong>
        </li>
        <li>
          Health data is not used for the cohort aggregation described in section 10 and is not
          disclosed to data brokers.
        </li>
        <li>
          You can revoke access at any time in your device&rsquo;s Health settings. Revoking stops
          future reads; to remove data already held, delete your account or contact us.
        </li>
      </ul>

      <h2 id="providers">9. Service providers</h2>
      <p>
        We keep the list of companies that touch your data deliberately short. Each processes data on
        our behalf, under contract, for the purpose stated:
      </p>
      <table>
        <thead>
          <tr>
            <th>Provider</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Supabase</td>
            <td>Database, authentication and server functions (hosted in the United States)</td>
          </tr>
          <tr>
            <td>Google Firebase Cloud Messaging</td>
            <td>Delivering push notifications to your device</td>
          </tr>
          <tr>
            <td>NVIDIA</td>
            <td>AI inference for coach chat, safety classification and daily analysis</td>
          </tr>
          <tr>
            <td>Apple, Google</td>
            <td>Sign-in, app distribution, subscription billing and refunds</td>
          </tr>
        </tbody>
      </table>
      <p>
        We may also disclose information where we are legally required to, to establish or defend
        legal claims, or to protect someone from serious harm. If Prelua is ever involved in a
        merger or acquisition, we will notify you before your information becomes subject to a
        different policy.
      </p>

      <h2 id="cohorts">10. Aggregation and cohort patterns</h2>
      <p>
        Prelua improves its predictions by learning statistical patterns across users. This is done
        on aggregate data only:
      </p>
      <ul>
        <li>
          Individual thought entries and individual chat messages are{' '}
          <strong>never</strong> included in cross-user analysis, and are never visible to other
          users.
        </li>
        <li>
          Aggregate patterns take the form &ldquo;X% of users in this cohort who showed signal
          combination Y went on to show outcome Z&rdquo;. They contain no identifiers.
        </li>
        <li>
          Cohorts are defined by broad age bracket, gender (if you provided it), primary goal, and
          baseline score quartile. <strong>A cohort must contain at least 30 users</strong> before it
          is used at all; below that threshold we fall back to a broader cohort or to your own data
          only.
        </li>
        <li>
          Health-app data and users aged 13–17 are excluded from this process entirely.
        </li>
      </ul>

      <h2 id="teens">11. Users aged 13–17</h2>
      <p>
        Prelua accepts users aged 13 and over. If your birth year indicates you are under 18, a
        mandatory teen safety tier applies:
      </p>
      <ul>
        <li>
          <strong>Teen data is permanently excluded from cross-user cohort learning.</strong> It is
          used only to serve that individual user.
        </li>
        <li>No behavioural advertising or profiling for marketing, ever — for any user, and never for teens.</li>
        <li>Crisis-language handling and safety resources are applied without exception.</li>
      </ul>
      <p>
        Prelua is not intended for children under 13 and we do not knowingly collect information from
        them. If you believe a child under 13 has created an account, email{' '}
        <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a> and we will delete it. A
        parent or guardian may contact us at the same address to exercise rights on behalf of a user
        under 18.
      </p>

      <h2 id="retention">12. How long we keep information</h2>
      <ul>
        <li>
          <strong>Active accounts:</strong> we keep your data while your account exists, because your
          history is what makes the product work.
        </li>
        <li>
          <strong>Anonymous accounts:</strong> automatically purged after 90 days of inactivity.
        </li>
        <li>
          <strong>After you delete your account:</strong> your personal data is deleted from our
          production systems within 30 days. Aggregate statistics that no longer identify you and
          cannot be linked back to you may remain.
        </li>
        <li>
          <strong>Backups:</strong> encrypted backups are retained on a rolling basis and expire
          shortly after the deletion window.
        </li>
        <li>
          <strong>Records we must keep:</strong> transaction and tax records are retained as long as
          the law requires.
        </li>
      </ul>

      <h2 id="rights">13. Your rights and how to use them</h2>
      <p>
        If you are a California resident, the CCPA/CPRA gives you the rights below. We extend the
        same rights to every Prelua user regardless of where they live, because maintaining two
        standards is how mistakes happen.
      </p>
      <ul>
        <li>
          <strong>Know</strong> what personal information we collect, why, and who we share it with.
        </li>
        <li>
          <strong>Access</strong> a copy of your personal information in a portable format.
        </li>
        <li>
          <strong>Delete</strong> your personal information — see{' '}
          <a href="/delete-account/">Delete your account</a>.
        </li>
        <li>
          <strong>Correct</strong> inaccurate personal information.
        </li>
        <li>
          <strong>Opt out of sale or sharing.</strong> There is nothing to opt out of: we do not sell
          personal information and we do not share it for cross-context behavioural advertising. We
          have not done so in the preceding 12 months.
        </li>
        <li>
          <strong>Limit the use of sensitive personal information</strong> — see section 14.
        </li>
        <li>
          <strong>Non-discrimination.</strong> Exercising any of these rights will not change your
          price or degrade your service. We offer no financial incentive for your data.
        </li>
      </ul>
      <p>
        <strong>How to exercise them.</strong> Deletion and data export are available inside the app,
        under Settings. For anything else, email{' '}
        <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a>. We will acknowledge within
        10 business days and respond substantively within 45 days, extending once by a further 45
        days where a request is complex — we will tell you if that happens. We verify requests
        against the account they concern; where we cannot verify a request we will say so rather than
        disclose data to the wrong person. An authorised agent may submit a request on your behalf
        with written proof of authorisation.
      </p>
      <p>
        <strong>Global Privacy Control.</strong> Because we do not sell or share personal
        information, there is no sale for a GPC or Do Not Track signal to stop. We honour such
        signals as a statement of preference regardless.
      </p>

      <h2 id="sensitive">14. Sensitive personal information</h2>
      <p>
        Some of what Prelua processes is sensitive by nature — information about your mood,
        rest, and, if you enable it, health-app data. We want to be direct about how that is handled:
      </p>
      <ul>
        <li>
          It is used only to provide the Service you asked for — computing your score, selecting
          content, and running the coach and its safety screen.
        </li>
        <li>
          It is <strong>not</strong> used to infer characteristics about you beyond the product
          purposes described in this policy, and not for advertising, profiling for marketing, or
          sale.
        </li>
        <li>
          It is not disclosed to third parties except the providers listed in section 9, acting on
          our instructions.
        </li>
      </ul>
      <p>
        Because our use of sensitive personal information is limited to what is necessary to provide
        the Service, the CPRA&rsquo;s right to limit its use is already reflected in how the product
        works. If you would like us to stop processing it entirely, that means deleting your account
        — we cannot run the product without it.
      </p>

      <h2 id="security">15. Security</h2>
      <p>
        Data is encrypted in transit and at rest. Access to production data is limited to those who
        need it, database access is governed by row-level security policies so that one user&rsquo;s
        records are not reachable from another user&rsquo;s session, and server-side keys are never
        embedded in the app.
      </p>
      <p>
        No system is perfectly secure and we will not pretend otherwise. If a breach affects your
        personal information we will notify you and the relevant authorities as required by law.
      </p>

      <h2 id="changes">16. Changes to this policy</h2>
      <p>
        When we change this policy we update the &ldquo;last updated&rdquo; date at the top. For
        changes that materially affect how we handle your information, we will notify you in the app
        or by email before the change takes effect, and where the law requires it we will ask for
        your consent.
      </p>

      <h2 id="contact">17. Contact</h2>
      <p>
        {SITE.entity}
        <br />
        {SITE.entityAddress}
        <br />
        Privacy: <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a>
        <br />
        Support: <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>
      </p>
    </LegalLayout>
  )
}
