import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Waitlist from '../components/Waitlist.jsx'
import { Mark } from '../components/Brand.jsx'
import { PRICING } from '../config.js'

/* ──────────────────────────────────────────────────────────────────────────────
   EDITORIAL RULE FOR THIS PAGE — read before changing any copy.

   Prelua has no public users. Every claim here must survive an investor later
   opening the database. So:
     · No user counts, download counts, revenue, retention, or growth figures.
     · No "trusted by", no borrowed customer logos, no fake testimonials.
     · The engine is described as BUILT, never as SERVING.
     · Pre-launch status is stated in the hero, not buried.
   Credibility on this page comes from the thesis, the science, and the
   architecture — all of which are real and verifiable — not from traction.
   ────────────────────────────────────────────────────────────────────────────── */

function Eyebrow({ children }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-300">{children}</p>
  )
}

function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </section>
  )
}

function Rule() {
  return <div className="mx-auto max-w-6xl px-5 sm:px-8"><div className="h-px bg-ink-700/70" /></div>
}

/* ── Hero ─────────────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Ambient light, pulled from the icon: gold at the centre falling off to
          copper. Positioned high-left so it reads as the sunrise behind the mark. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-22rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full opacity-45 blur-[120px]"
        style={{
          background:
            'radial-gradient(circle at 42% 42%, rgba(242,206,147,0.55) 0%, rgba(175,118,72,0.40) 42%, transparent 72%)',
        }}
      />
      <Section className="relative pb-20 pt-16 sm:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <div className="max-w-2xl">
            <div className="inline-flex flex-wrap items-center gap-x-2.5 gap-y-2 rounded-full border border-ink-700 bg-ink-850/70 px-3.5 py-1.5 text-xs text-mist-400 backdrop-blur">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-gold-300" />
              <span>Pre-launch — private testing</span>
              <span className="text-ink-600">·</span>
              <span>iOS first, United States</span>
            </div>

            <h1 className="mt-7 font-display text-[3rem] leading-[0.98] tracking-[-0.02em] text-mist-100 sm:text-[4.25rem]">
              It knows <span className="text-gradient">before you do.</span>
            </h1>

            <p className="mt-7 text-lg leading-relaxed text-mist-300">
              Every wellness app on your phone is a content library that waits. You open it, you
              browse, you pick something. Stop opening it and it does nothing.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-mist-300">
              Prelua inverts that. It builds a living model of your mental wellness from the signals
              you already generate, predicts what you&rsquo;ll need, and delivers it at the moment it
              matters.{' '}
              <strong className="font-semibold text-mist-100">
                You don&rsquo;t find the meditation. The meditation finds you.
              </strong>
            </p>

            <div id="waitlist" className="mt-10 max-w-lg scroll-mt-28">
              <Waitlist />
            </div>
          </div>

          {/* The icon carries the whole brand, so it gets to be the hero image
              rather than a 28px afterthought in the nav. Hidden below lg —
              on a phone the copy and the email field should own the fold. */}
          <div className="relative hidden justify-center lg:flex">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 m-auto h-80 w-80 rounded-full opacity-60 blur-[90px]"
              style={{ background: 'radial-gradient(circle, rgba(230,174,91,0.7) 0%, transparent 70%)' }}
            />
            <img
              src="/logo.png"
              alt="The Prelua app icon: a figure rising through a gold sunrise above dark water."
              width={340}
              height={340}
              className="relative w-[340px] max-w-full rounded-full"
            />
          </div>
        </div>
      </Section>
    </div>
  )
}

/* ── The inversion ────────────────────────────────────────────────────────── */

const INVERSION = {
  old: {
    label: 'The content-library model',
    sub: 'Calm, Headspace, and every app built before 2023',
    points: [
      'The user has to remember the app exists',
      'The user has to diagnose their own state',
      'The user has to pick the right intervention from a catalogue',
      'Disengagement is invisible — silence looks like missing data',
      'Personalisation means an onboarding quiz you answered once',
    ],
  },
  next: {
    label: 'The adaptive-intervention model',
    sub: 'Prelua',
    points: [
      'The app decides when to reach you, from observed pattern',
      'A composite state score is inferred from behaviour, not self-report',
      'Content is selected against your current state, with the reason shown',
      'Silence is treated as a low-state signal and acted on',
      'The model updates daily and keeps updating for years',
    ],
  },
}

function Inversion() {
  return (
    <Section id="thesis" className="py-20 sm:py-28">
      <Eyebrow>The thesis</Eyebrow>
      <h2 className="mt-4 max-w-3xl font-display text-[2.125rem] leading-[1.08] tracking-[-0.015em] text-mist-100 sm:text-[2.75rem]">
        The category&rsquo;s core assumption is that the user shows up.
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist-400">
        That assumption fails precisely when the product matters most. The week someone stops
        sleeping is the week they stop opening a meditation app. A library cannot help a person who
        has gone quiet. A system that watches can.
      </p>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {[INVERSION.old, INVERSION.next].map((col, i) => (
          <div
            key={col.label}
            className={`rounded-2xl border p-6 sm:p-7 ${
              i === 1
                ? 'border-copper-400/35 bg-linear-to-b from-copper-400/8 to-transparent'
                : 'border-ink-700 bg-ink-850/50'
            }`}
          >
            <p className={`text-sm font-semibold ${i === 1 ? 'text-mist-100' : 'text-mist-300'}`}>
              {col.label}
            </p>
            <p className="mt-1 text-xs text-mist-500">{col.sub}</p>
            <ul className="mt-6 flex flex-col gap-3.5">
              {col.points.map((p) => (
                <li key={p} className="flex gap-3 text-sm leading-relaxed text-mist-300">
                  <span
                    aria-hidden="true"
                    className={`mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full ${
                      i === 1 ? 'bg-gold-300' : 'bg-ink-600'
                    }`}
                  />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

/* ── Wellness Score ──────────────────────────────────────────────────────── */

const SCORE_COMPONENTS = [
  {
    weight: 30,
    name: 'Mood trend',
    detail:
      'Rolling 7-day average of check-ins. Direction outranks level — climbing from 2→3 scores above a flat 4→4.',
  },
  {
    weight: 25,
    name: 'Engagement',
    detail:
      'Completion, save and notification-open rates. High engagement means the matching is working; low means it is not.',
  },
  {
    weight: 20,
    name: 'Consistency',
    detail:
      'Check-in frequency against your own baseline, never a universal standard. Deviation is the signal, not volume.',
  },
  {
    weight: 15,
    name: 'Sleep proxy',
    detail:
      'Stability of phone-inactive hours. A steady 11pm–7am pattern scores above an erratic one at the same duration.',
  },
  {
    weight: 10,
    name: 'Passive signal',
    detail:
      'Session-timing consistency, category breadth, notification response latency. Optional wearable data sharpens it.',
  },
]

function WellnessScore() {
  return (
    <Section id="system" className="py-20 sm:py-28">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-20">
        <div className="lg:sticky lg:top-24 lg:h-fit">
          <Eyebrow>The mechanism</Eyebrow>
          <h2 className="mt-4 font-display text-[2.125rem] leading-[1.08] tracking-[-0.015em] text-mist-100 sm:text-[2.5rem]">
            A hidden variable, reverse-calculated.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-mist-400">
            MacroFactor did something unusual in nutrition: instead of asking the user for a calorie
            goal, it reverse-calculates the variable that actually governs the outcome — total daily
            energy expenditure — from observed weight trends. The adjustment is the intelligence.
          </p>
          <p className="mt-4 text-base leading-relaxed text-mist-400">
            Prelua applies that method to wellness. It does not ask you how well you are. It derives
            a <strong className="font-semibold text-mist-100">Wellness Score</strong> — 0 to 100,
            recalculated daily — from five weighted signal families, and lets the score, not a
            stated preference, drive what the product does next.
          </p>
          <div className="mt-7 rounded-2xl border border-ink-700 bg-ink-850/60 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.09em] text-mist-500">
              Worked example
            </p>
            <p className="mt-3 text-sm leading-relaxed text-mist-300">
              Three days of{' '}
              <span className="text-gold-300">Tired · Work stress</span>, but 4 of 5 delivered
              meditations completed, check-in frequency on baseline, bedtimes drifting later,
              stress-category browsing up.
            </p>
            <p className="mt-3 font-mono text-xs leading-relaxed text-mist-400">
              0.30(35) + 0.25(80) + 0.20(85) + 0.15(40) + 0.10(60)
            </p>
            <p className="mt-3 text-sm text-mist-300">
              <span className="font-semibold text-mist-100">59.5 / 100 → “Vulnerable.”</span> The
              engine shifts delivery toward stress relief and sleep support — before the next
              check-in says anything is wrong.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {SCORE_COMPONENTS.map((c) => (
            <div
              key={c.name}
              className="rounded-2xl border border-ink-700 bg-ink-850/50 p-5 sm:p-6"
            >
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-sm font-semibold text-mist-100">{c.name}</p>
                <p className="shrink-0 font-mono text-sm text-gold-200">{c.weight}%</p>
              </div>
              <div
                className="mt-3 h-1 w-full overflow-hidden rounded-full bg-ink-700"
                role="presentation"
              >
                <div
                  className="h-full rounded-full bg-linear-to-r from-copper-400 to-gold-300"
                  style={{ width: `${(c.weight / 30) * 100}%` }}
                />
              </div>
              <p className="mt-3.5 text-sm leading-relaxed text-mist-400">{c.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

/* ── Signals + layers ─────────────────────────────────────────────────────── */

const TIERS = [
  {
    weight: '50%',
    name: 'Behavioural',
    detail:
      'What you tap, skip, replay and save. Categories browsed. Notifications opened or dismissed. Session timing. Hardest to game, so weighted highest.',
  },
  {
    weight: '30%',
    name: 'Self-report',
    detail:
      'A two-tap check-in: how you feel, then what is driving it. Three seconds, and it captures cause rather than just state. Free-text thoughts stay optional.',
  },
  {
    weight: '20%',
    name: 'Passive',
    detail:
      'Phone-inactive hours as a sleep proxy, step count, session rhythm. Optional HealthKit or Health Connect data — heart rate, HRV, sleep stages — sharpens it for users with a wearable.',
  },
]

const LAYERS = [
  {
    when: 'Day 1',
    name: 'Configured',
    detail:
      'You tell the app your schedule and what you struggle with. It delivers exactly that. Useful immediately, zero prediction required — no cold-start apology.',
  },
  {
    when: 'Week 2',
    name: 'Refined',
    detail:
      '“You dismiss the 11pm nudge on weekends — I will stop sending it then.” “Breathing beats quotes for you when you are anxious.” The schedule starts adjusting itself.',
  },
  {
    when: 'Month 2',
    name: 'Predictive',
    detail:
      'Cross-signal chains. Degraded sleep proxy plus a skipped morning check-in plus yesterday’s low engagement, and content arrives before you check in at all.',
  },
]

function Signals() {
  return (
    <Section className="py-20 sm:py-28">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Eyebrow>Signal ingestion</Eyebrow>
          <h2 className="mt-4 font-display text-[1.875rem] leading-[1.12] tracking-[-0.015em] text-mist-100 sm:text-[2.125rem]">
            Three tiers, weighted by how much they can be faked.
          </h2>
          <div className="mt-9 flex flex-col gap-7">
            {TIERS.map((t) => (
              <div key={t.name} className="border-l border-ink-700 pl-5">
                <div className="flex items-baseline gap-3">
                  <p className="text-sm font-semibold text-mist-100">{t.name}</p>
                  <p className="font-mono text-xs text-gold-200">{t.weight}</p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-mist-400">{t.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 rounded-xl border border-ink-700 bg-ink-850/50 p-4 text-sm leading-relaxed text-mist-400">
            <strong className="font-semibold text-mist-100">Silence is a signal.</strong> Three days
            without a check-in is a low-state indicator, not a gap in the dataset. The app reaches
            out — gently, and without claiming to know what is wrong.
          </p>
        </div>

        <div>
          <Eyebrow>Intelligence, staged</Eyebrow>
          <h2 className="mt-4 font-display text-[1.875rem] leading-[1.12] tracking-[-0.015em] text-mist-100 sm:text-[2.125rem]">
            Useful on day one. Predictive once it has earned the right.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-mist-400">
            Prediction that fires before the model has data is just a wrong guess with extra steps.
            So the promise is staged, and each stage is honest about what it can and cannot know.
          </p>
          <div className="mt-9 flex flex-col gap-3">
            {LAYERS.map((l, i) => (
              <div key={l.name} className="rounded-2xl border border-ink-700 bg-ink-850/50 p-5">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-mist-500">0{i + 1}</span>
                  <p className="text-sm font-semibold text-mist-100">{l.name}</p>
                  <span className="ml-auto rounded-full border border-ink-700 px-2.5 py-0.5 text-xs text-mist-400">
                    {l.when}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-mist-400">{l.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

/* ── Science ──────────────────────────────────────────────────────────────── */

const JITAI_MAP = [
  ['Decision points', 'Every check-in, every notification interaction, and continuous passive monitoring'],
  ['Tailoring variables', 'The three-tier signal system, composited into the Wellness Score'],
  ['Intervention options', 'A content library tagged by state match, energy level, coaching tone and duration'],
  ['Decision rules', 'Editable JSON condition/action rules in the database — changeable without shipping a build'],
  ['Proximal outcomes', 'Per-delivery engagement tracking fed straight back into the engine'],
]

function Science() {
  return (
    <Section id="science" className="py-20 sm:py-28">
      <div className="max-w-3xl">
        <Eyebrow>Scientific foundation</Eyebrow>
        <h2 className="mt-4 font-display text-[2.125rem] leading-[1.08] tracking-[-0.015em] text-mist-100 sm:text-[2.75rem]">
          Not invented. Implemented.
        </h2>
        <p className="mt-5 text-base leading-relaxed text-mist-400">
          Prelua is a direct implementation of{' '}
          <strong className="font-semibold text-mist-100">
            JITAI — Just-In-Time Adaptive Interventions
          </strong>
          , an intervention-design framework from behavioural health research (Nahum-Shani et al.,
          2018). The premise: deliver the right type and amount of support at the right moment, by
          adapting to a person&rsquo;s changing internal state and context — rather than on a fixed
          schedule.
        </p>
        <p className="mt-4 text-base leading-relaxed text-mist-400">
          JITAI has been evaluated across smoking cessation, physical-activity promotion, alcohol-use
          reduction, stress management and mental-health support, and underpins NIH-funded clinical
          trials. It is the accepted design standard for mobile health interventions. Prelua did not
          invent a mechanism and go looking for evidence; it built against the framework the
          evidence already supports.
        </p>
      </div>

      <div className="mt-12 overflow-hidden rounded-2xl border border-ink-700">
        <div className="grid grid-cols-1 gap-px bg-ink-700 sm:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)]">
          <div className="bg-ink-850 px-5 py-3 text-xs font-semibold uppercase tracking-[0.09em] text-mist-400">
            JITAI construct
          </div>
          <div className="hidden bg-ink-850 px-5 py-3 text-xs font-semibold uppercase tracking-[0.09em] text-mist-400 sm:block">
            Prelua implementation
          </div>
          {JITAI_MAP.map(([k, v]) => (
            <div key={k} className="contents">
              <div className="bg-ink-900 px-5 py-4 text-sm font-medium text-mist-100">{k}</div>
              <div className="bg-ink-900 px-5 pb-4 pt-0 text-sm leading-relaxed text-mist-400 sm:py-4">
                {v}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {[
          {
            t: 'Multi-domain',
            d: 'Published JITAI work is typically single-behaviour — smoking or exercise or alcohol. The Wellness Score composites mood, engagement, sleep and consistency into one state model.',
          },
          {
            t: 'Cohort learning',
            d: 'Standard JITAI adapts to the individual only. Aggregated anonymised patterns let a new user inherit priors from similar profiles — a network-effect extension the literature has not tested at consumer scale.',
          },
          {
            t: 'Longitudinal',
            d: 'JITAI studies run 4–12 weeks. A consumer product runs indefinitely, which means signal graphs far longer than any trial produces.',
          },
        ].map((c) => (
          <div key={c.t} className="rounded-2xl border border-ink-700 bg-ink-850/50 p-5">
            <p className="text-sm font-semibold text-mist-100">{c.t}</p>
            <p className="mt-2.5 text-sm leading-relaxed text-mist-400">{c.d}</p>
          </div>
        ))}
      </div>

      <p className="mt-7 max-w-3xl text-xs leading-relaxed text-mist-500">
        JITAI describes how an intervention should be designed and timed. It is not a claim that
        Prelua has been clinically validated, and Prelua makes no such claim. Prelua is not a
        medical device and has not been evaluated by any regulator.
      </p>
    </Section>
  )
}

/* ── Stack ────────────────────────────────────────────────────────────────── */

const STACK = [
  {
    t: 'NVIDIA Inception',
    d: 'Coach chat and daily analysis run on NVIDIA NIM inference endpoints. The provider sits behind an OpenAI-compatible config variable, so it is swappable without a code change — and self-hostable on DGX if chat content should never leave our own infrastructure.',
  },
  {
    t: 'Supabase',
    d: 'Postgres with row-level security, edge functions and auth. The signal graph, prediction rules and content metadata all live here; rules are data, so the engine changes without an app release.',
  },
  {
    t: 'Flutter',
    d: 'One codebase, iOS first with Android as a fast-follow. Apple and Google sign-in plus a real anonymous mode — the product is usable before you have an account.',
  },
]

function Stack() {
  return (
    <Section className="py-20 sm:py-28">
      <div className="max-w-2xl">
        <Eyebrow>How it is built</Eyebrow>
        <h2 className="mt-4 font-display text-[1.875rem] leading-[1.12] tracking-[-0.015em] text-mist-100 sm:text-[2.125rem]">
          Boring infrastructure, so the engine can be the interesting part.
        </h2>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {STACK.map((s) => (
          <div key={s.t} className="rounded-2xl border border-ink-700 bg-ink-850/50 p-6">
            <p className="text-sm font-semibold text-mist-100">{s.t}</p>
            <p className="mt-3 text-sm leading-relaxed text-mist-400">{s.d}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

/* ── Team ────────────────────────────────────────────────────────────────── */

/* Deliberately no figures attached to the prior exit. The pitch deck states two
   different sale prices for the same app on two different slides; until that is
   reconciled, the download count is the claim that stands up. Shipping a number
   an investor can catch you on is worse than shipping no number. */
const TEAM = [
  {
    name: 'Neelay Srivastava',
    role: 'Founder',
    bio: 'Built and sold a music player app with 125,000+ downloads. Led development on the Commonwealth Games app as tech lead. Founder of SAVVNIONNIX TECHNOLOGY.',
  },
  {
    name: 'Dhaval Thakur',
    role: 'Co-founder',
    bio: "Master's in Data Science, University of Waterloo. Works on the modelling side — signal processing, the prediction engine and evaluation.",
  },
  {
    name: 'Thomas Cooper',
    role: 'Mentor',
    bio: 'Former CEO of Pantri, an IoT platform backed by Bosch and Siemens through Techstars. Built AI and AR products including the British Triathlon app.',
  },
]

function Team() {
  return (
    <Section id="team" className="py-20 sm:py-28">
      <div className="max-w-2xl">
        <Eyebrow>Who is building it</Eyebrow>
        <h2 className="mt-4 font-display text-[1.875rem] leading-[1.12] tracking-[-0.015em] text-mist-100 sm:text-[2.125rem]">
          A team that has shipped consumer apps before.
        </h2>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {TEAM.map((m) => (
          <div key={m.name} className="rounded-2xl border border-ink-700 bg-ink-850/50 p-6">
            <p className="text-sm font-semibold text-mist-100">{m.name}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.09em] text-gold-300">{m.role}</p>
            <p className="mt-3.5 text-sm leading-relaxed text-mist-400">{m.bio}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

/* ── Pricing ─────────────────────────────────────────────────────────────── */

function Pricing() {
  return (
    <Section id="pricing" className="py-20 sm:py-28">
      <div className="max-w-2xl">
        <Eyebrow>Pricing</Eyebrow>
        <h2 className="mt-4 font-display text-[2.125rem] leading-[1.08] tracking-[-0.015em] text-mist-100 sm:text-[2.5rem]">
          One subscription. No ads, ever.
        </h2>
        <p className="mt-5 text-base leading-relaxed text-mist-400">
          The product reads your mood, your sleep rhythm and your messages. Selling advertising
          against that would be indefensible, so the business model is a subscription and nothing
          else. Prices below are planned launch pricing and are confirmed at purchase in-app.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-ink-700 bg-ink-850/50 p-6">
          <p className="text-sm font-semibold text-mist-100">Free</p>
          <p className="mt-4 font-display text-4xl text-mist-100">$0</p>
          <ul className="mt-6 flex flex-col gap-3 text-sm text-mist-400">
            <li>Daily check-ins and the adaptive feed</li>
            <li>{PRICING.freeCoachMessagesPerDay} coach messages per day</li>
            <li>
              {PRICING.anonCoachMessagesLifetime} messages without an account at all — try it before
              signing up
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-copper-400/40 bg-linear-to-b from-copper-400/10 to-transparent p-6">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold text-mist-100">Founding</p>
            <span className="rounded-full border border-gold-300/40 bg-gold-300/10 px-2.5 py-0.5 text-xs text-gold-200">
              First {PRICING.foundingSeats.toLocaleString()}
            </span>
          </div>
          <p className="mt-4 font-display text-4xl text-mist-100">
            {PRICING.foundingYearly}
            <span className="ml-1.5 font-sans text-sm font-normal text-mist-500">/year</span>
          </p>
          <ul className="mt-6 flex flex-col gap-3 text-sm text-mist-400">
            <li>Everything, unlimited coach chat included</li>
            <li>
              <strong className="font-semibold text-mist-100">Locked for life</strong> — the price
              never rises for founding members
            </li>
            <li>{PRICING.trialDays}-day free trial</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-ink-700 bg-ink-850/50 p-6">
          <p className="text-sm font-semibold text-mist-100">Monthly</p>
          <p className="mt-4 font-display text-4xl text-mist-100">
            {PRICING.monthly}
            <span className="ml-1.5 font-sans text-sm font-normal text-mist-500">/month</span>
          </p>
          <ul className="mt-6 flex flex-col gap-3 text-sm text-mist-400">
            <li>Everything, unlimited coach chat included</li>
            <li>{PRICING.trialDays}-day free trial</li>
            <li>Cancel any time in your App Store settings</li>
          </ul>
        </div>
      </div>

      <p className="mt-6 text-xs leading-relaxed text-mist-500">
        After the founding cohort fills, standard pricing is {PRICING.standardMonthly}/month or{' '}
        {PRICING.standardYearly}/year. Subscriptions are billed by Apple or Google, renew
        automatically unless cancelled at least 24 hours before the period ends, and are managed
        entirely in your platform account settings.
      </p>
    </Section>
  )
}

/* ── Responsibility ──────────────────────────────────────────────────────── */

function Responsibility() {
  return (
    <Section className="py-20 sm:py-28">
      <div className="rounded-3xl border border-ink-700 bg-ink-850/50 p-7 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <Eyebrow>Where we draw the line</Eyebrow>
            <h2 className="mt-4 font-display text-[1.875rem] leading-[1.12] tracking-[-0.015em] text-mist-100 sm:text-[2.125rem]">
              A system that watches you has to be held to a higher standard.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-mist-400">
              Prediction on emotional data is powerful in the wrong direction as easily as the
              right one. These constraints are architectural, not a policy page — they are built
              into the system and stated publicly so we can be held to them.
            </p>
          </div>
          <ul className="flex flex-col gap-5">
            {[
              [
                'Not a clinician',
                'Prelua does not diagnose, treat, or claim clinical outcomes. The coach is a window into what the model already sees, not a therapist simulator.',
              ],
              [
                'Crisis language is escalated, not coached',
                'Every message passes a safety classifier before the coach model sees it. Self-harm signals get resources and a human handoff — never a coaching reply.',
              ],
              [
                'Teen data never enters cohort mining',
                'Users aged 13–17 sit in a mandatory safety tier and are permanently excluded from cross-user pattern learning. Individual-only, forever.',
              ],
              [
                'Never sold, never advertised against',
                'No advertising SDKs, no data sale, no data sharing for anyone else’s marketing. Health-integration data is never used for advertising.',
              ],
              [
                'Silence is answered carefully',
                '“We haven’t heard from you in a few days” — never “you seem to be struggling.” The system flags uncertainty rather than performing confidence.',
              ],
            ].map(([t, d]) => (
              <li key={t} className="border-l border-gold-300/40 pl-5">
                <p className="text-sm font-semibold text-mist-100">{t}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-mist-400">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

/* ── Close ───────────────────────────────────────────────────────────────── */

function Close() {
  return (
    <Section className="pb-28 pt-8">
      <div className="relative overflow-hidden rounded-3xl border border-ink-700 bg-ink-850/60 px-7 py-14 text-center sm:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-full h-[24rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[100px]"
          style={{
            background:
              'radial-gradient(circle, rgba(230,174,91,0.50) 0%, rgba(143,92,56,0.38) 50%, transparent 72%)',
          }}
        />
        <div className="relative mx-auto max-w-xl">
          <Mark size={34} className="mx-auto" />
          <h2 className="mt-6 font-display text-[2.125rem] leading-[1.08] tracking-[-0.015em] text-mist-100 sm:text-[2.5rem]">
            It knows before you do.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mist-400">
            Prelua launches on iOS in the United States. Leave an email and we&rsquo;ll tell you
            once — when it&rsquo;s live.
          </p>
          <div className="mx-auto mt-8 max-w-md text-left">
            <Waitlist compact />
          </div>
        </div>
      </div>
    </Section>
  )
}

/* ── Page ────────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Nav variant="home" />
      <main>
        <Hero />
        <Rule />
        <Inversion />
        <Rule />
        <WellnessScore />
        <Rule />
        <Signals />
        <Rule />
        <Science />
        <Rule />
        <Stack />
        <Rule />
        <Team />
        <Rule />
        <Pricing />
        <Responsibility />
        <Close />
      </main>
      <Footer />
    </>
  )
}
