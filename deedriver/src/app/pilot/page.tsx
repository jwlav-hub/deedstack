import Nav from '@/components/Nav';
import Link from 'next/link';

// ─── Track data ────────────────────────────────────────────────────────────────

const track1Items = [
  'Legal entity structuring under Wyoming DAO LLC statute',
  'DEED token issuance and smart-contract test deployment',
  'Custody framework configuration with qualified digital-asset custodian',
  'First controlled homeowner tokenization transactions',
  'Reg D 506(c) compliance for accredited participants',
];

const track2Items = [
  'Homeowner demand validation and discovery',
  'Investor education and interest registration',
  'Pre-qualification pipeline building',
  'Waitlist priority sequencing for future state rollout',
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function PilotPage() {
  return (
    <>
      <Nav />
      <main style={{ background: 'var(--snow)' }}>

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section
          className="pt-[128px] pb-16 px-6 md:px-12 lg:px-20"
          style={{ background: 'var(--snow)' }}
        >
          <div className="max-w-4xl mx-auto">
            <span className="badge-active mb-6 inline-block">PILOT PROGRAM</span>
            <h1 className="text-display mb-6">
              Two-Track Launch.<br />
              <span style={{ color: 'var(--pine)' }}>One Waitlist.</span>
            </h1>
            <p className="text-body max-w-2xl" style={{ fontSize: '1.05rem', lineHeight: 1.75 }}>
              DeedStack is launching in two parallel tracks. Wyoming is our legal and technical proving ground — where token issuance, custody, and real transactions happen first. California and Nevada are our demand validation markets — where we build our waitlist, educate homeowners and investors, and sequence pre-qualified participants for future state-by-state rollout.
            </p>
          </div>
        </section>

        {/* ── Two-track cards ───────────────────────────────────────────────── */}
        <section className="px-6 md:px-12 lg:px-20 pb-20">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">

            {/* Track 1 — Wyoming */}
            <div
              className="rounded-xl p-8 flex flex-col"
              style={{ background: 'var(--obsidian)', color: 'var(--white)' }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="text-[11px] font-semibold tracking-widest px-3 py-1 rounded-full"
                  style={{ background: 'var(--pine)', color: 'var(--white)', fontFamily: "'DM Sans', sans-serif" }}
                >
                  TRACK 1
                </span>
                <span
                  className="text-[11px] font-semibold tracking-widest"
                  style={{ color: 'rgba(255,255,255,0.45)', fontFamily: "'DM Sans', sans-serif" }}
                >
                  LIVE PILOT
                </span>
              </div>

              <h2
                style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 600, color: 'var(--white)', marginBottom: '0.5rem' }}
              >
                Wyoming
              </h2>
              <p
                className="mb-6"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'rgba(255,255,255,0.60)', lineHeight: 1.65 }}
              >
                Legal structuring, token issuance, and first controlled homeowner transactions — operating under Wyoming&apos;s Digital Asset Statutes and DAO LLC framework.
              </p>

              <ul className="flex flex-col gap-3 mb-8">
                {track1Items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span style={{ color: '#52B788', fontSize: '0.9rem', marginTop: 2, flexShrink: 0 }}>✓</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.55 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                className="mt-auto rounded-lg px-4 py-3"
                style={{ background: 'rgba(255,255,255,0.06)', borderLeft: '3px solid var(--pine)' }}
              >
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.55 }}>
                  <strong style={{ color: 'rgba(255,255,255,0.9)' }}>Eligibility:</strong> Limited to verified accredited participants with Wyoming-sited property. Pilot slots are restricted and subject to legal review.
                </p>
              </div>
            </div>

            {/* Track 2 — CA/NV */}
            <div
              className="rounded-xl p-8 flex flex-col"
              style={{ background: 'var(--frost)', border: '1px solid var(--mist)' }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="text-[11px] font-semibold tracking-widest px-3 py-1 rounded-full"
                  style={{ background: 'var(--gold-pale)', color: 'var(--gold)', fontFamily: "'DM Sans', sans-serif" }}
                >
                  TRACK 2
                </span>
                <span
                  className="text-[11px] font-semibold tracking-widest"
                  style={{ color: 'var(--slate)', fontFamily: "'DM Sans', sans-serif" }}
                >
                  WAITLIST OPEN
                </span>
              </div>

              <h2
                style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 600, color: 'var(--granite)', marginBottom: '0.5rem' }}
              >
                California &amp; Nevada
              </h2>
              <p
                className="mb-6"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'var(--stone)', lineHeight: 1.65 }}
              >
                Demand validation and investor education. We&apos;re building our pre-qualified pipeline ahead of state-by-state regulatory expansion — no tokenization services are currently available in CA or NV.
              </p>

              <ul className="flex flex-col gap-3 mb-8">
                {track2Items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span style={{ color: 'var(--gold)', fontSize: '0.9rem', marginTop: 2, flexShrink: 0 }}>→</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'var(--stone)', lineHeight: 1.55 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                className="mt-auto rounded-lg px-4 py-3"
                style={{ background: 'var(--gold-ghost)', borderLeft: '3px solid var(--gold)' }}
              >
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', color: 'var(--stone)', lineHeight: 1.55 }}>
                  <strong style={{ color: 'var(--granite)' }}>Important:</strong> Joining the waitlist does not constitute a subscription, investment, or legal commitment. CA/NV homeowners cannot currently tokenize or participate. Timelines depend on regulatory approvals.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ── Waitlist CTA ─────────────────────────────────────────────────── */}
        <section
          className="px-6 md:px-12 lg:px-20 py-20"
          style={{ background: 'var(--obsidian)' }}
        >
          <div className="max-w-xl mx-auto text-center">
            <p
              className="text-[11px] tracking-widest mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.4)' }}
            >
              HOME EQUITY LIQUIDITY PILOT
            </p>
            <h2
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 600, color: 'var(--white)', marginBottom: '1rem', lineHeight: 1.2 }}
            >
              Get your free Equity Opportunity Report.
            </h2>
            <p
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '2rem' }}
            >
              Answer a few questions and receive a personalized report showing your estimated equity, a comparison of HELOC, reverse mortgage, HEI, and DeedStack options, your state eligibility, accredited investor status, and a pilot suitability score.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/interest-list"
                style={{
                  display: 'inline-block',
                  background: 'var(--pine)',
                  color: '#fff',
                  borderRadius: 'var(--r-sm)',
                  padding: '14px 28px',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'background 200ms',
                }}
                className="hover:!bg-[#3A7A5C]"
              >
                Get My Free Report →
              </Link>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
                {['Takes under 3 minutes', 'Instant — no commitment'].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ color: '#52B788', fontSize: '0.8rem' }}>✓</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* ── What happens next ─────────────────────────────────────────────── */}
        <section className="px-6 md:px-12 lg:px-20 py-20" style={{ background: 'var(--frost)' }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-label mb-4">WHAT HAPPENS NEXT</p>
            <h2 className="text-h1 mb-12" style={{ maxWidth: '28rem' }}>After you join</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  num: '01',
                  title: 'We review your submission',
                  body: 'Your state and role determine which track you enter. Wyoming participants move to accredited verification. CA/NV participants enter demand sequencing.',
                },
                {
                  num: '02',
                  title: 'You receive track-relevant updates',
                  body: 'No generic newsletters. We send Wyoming participants legal and timeline updates. CA/NV participants receive education content and state-rollout news.',
                },
                {
                  num: '03',
                  title: 'You get early access',
                  body: 'Waitlist position is first-come, first-served within each state. When your track opens, early registrants receive priority onboarding and preferred pilot terms.',
                },
              ].map((step) => (
                <div key={step.num}>
                  <p
                    className="mb-3"
                    style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.75rem', color: 'var(--pine)', letterSpacing: '0.08em' }}
                  >
                    {step.num}
                  </p>
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', fontWeight: 600, color: 'var(--granite)', marginBottom: '0.5rem' }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'var(--stone)', lineHeight: 1.65 }}>
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Legal disclaimer ─────────────────────────────────────────────── */}
        <section className="px-6 md:px-12 lg:px-20 py-10" style={{ background: 'var(--snow)', borderTop: '1px solid var(--mist)' }}>
          <div className="max-w-4xl mx-auto">
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.75rem',
                color: 'var(--slate)',
                lineHeight: 1.75,
              }}
            >
              <strong>Regulatory notice:</strong> DeedStack is currently operating a controlled pilot under Wyoming&apos;s digital asset statutes. Nothing on this page constitutes an offer to sell or solicitation to buy any security. DeedStack is not currently registered as a broker-dealer, investment adviser, or money services business in California or Nevada. Joining the waitlist does not create any legal rights, obligations, or reasonable expectations of participation. Availability of DeedStack&apos;s services in any state is subject to applicable state and federal securities law, regulatory approval, and legal review of transaction documents. All participation is limited to verified accredited investors as defined under SEC Rule 501(a). Past performance of affiliated fund managers is not indicative of future results.{' '}
              <Link href="/regulation" style={{ color: 'var(--pine)', textDecoration: 'underline' }}>
                Learn more about our regulatory framework →
              </Link>
            </p>
          </div>
        </section>

      </main>
    </>
  );
}
