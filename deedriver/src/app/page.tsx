import Nav from '@/components/Nav';
import MountainSVG from '@/components/MountainSVG';
import Link from 'next/link';

const useCases = [
  {
    badge: 'YIELD GENERATION',
    badgeClass: 'badge-yield',
    title: 'Earn While You Stay',
    body:
      'Pledge your equity tokens to the fund. Earn 18–25% APY on your home equity — no debt, no monthly payments, no deed transfer. Your home, your terms.',
    stat: '~12%',
    statLabel: 'Target APY',
    statClass: 'stat-value-yield',
    cta: 'See How Yield Works',
    href: '/yield',
    accent: 'border-t-[var(--gold)]',
  },
  {
    badge: 'REVERSE MORTGAGE REPLACEMENT',
    badgeClass: 'badge-active',
    title: 'Access Equity on Your Schedule',
    body:
      'Sell tokens individually, on your timeline. No bank approval. No forced move-out. No compounding interest eating your estate. Keep the deed, access the value.',
    stat: '0%',
    statLabel: 'Interest Rate',
    statClass: 'stat-value',
    cta: 'Compare to Reverse Mortgages',
    href: '/how-it-works',
    accent: 'border-t-[var(--pine)]',
  },
  {
    badge: 'P2P MARKETPLACE',
    badgeClass: 'badge-tokenized',
    title: 'Buy and Sell Without Brokers',
    body:
      'Trade fractional equity tokens peer-to-peer. No 5–6% commission. No listing delays. Verified ownership on-chain, settled fast, fees a fraction of traditional sales.',
    stat: '<1%',
    statLabel: 'Platform Fee',
    statClass: 'stat-value',
    cta: 'Explore the Marketplace',
    href: '/how-it-works',
    accent: 'border-t-[var(--timber)]',
  },
];

const steps = [
  {
    num: '01',
    title: 'Tokenize Your Equity',
    body: 'We appraise your home and mint ERC-1400 security tokens representing your equity. Your deed never moves.',
  },
  {
    num: '02',
    title: 'Choose Your Path',
    body: 'Pledge tokens to the fund for yield, list them on the marketplace, or hold. You decide — any time.',
  },
  {
    num: '03',
    title: 'Earn or Transact',
    body: 'Yield compounds monthly. Marketplace sales settle in days, not months. Tokens redeem against the deed when you\'re ready.',
  },
];

export default function HomePage() {
  return (
    <>
      <Nav />

      <main style={{ background: 'var(--snow)' }}>

        {/* Hero */}
        <section
          className="relative overflow-hidden pt-[120px] pb-[100px] px-6 md:px-12 lg:px-20"
          style={{ background: 'var(--snow)' }}
        >
          <div className="max-w-4xl mx-auto relative z-10">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <span className="badge-active">WYOMING-INCORPORATED</span>
              <span className="badge-yield">REG D 506(c)</span>
            </div>

            {/* Headline */}
            <h1 className="text-display mb-6">
              Your equity.
              <br />
              <span style={{ color: 'var(--pine)' }}>Your yield.</span>
              <br />
              Your deed.
            </h1>

            {/* Sub-copy */}
            <p
              className="text-body max-w-xl mb-10"
              style={{ fontSize: '1.125rem', lineHeight: 1.7, color: 'var(--stone)' }}
            >
              DeedRiver lets homeowners tokenize their residential equity and earn
              institutional-grade returns — without giving up the deed, taking on
              debt, or paying a broker.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-16">
              <Link href="/calculator" className="btn-primary" style={{ padding: '13px 28px', fontSize: 15 }}>
                Calculate Your Yield
              </Link>
              <Link
                href="/how-it-works"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '13px 28px',
                  fontSize: 15,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  color: 'var(--granite)',
                  textDecoration: 'none',
                  border: '1.5px solid var(--mist)',
                  borderRadius: 'var(--r-md)',
                  transition: 'border-color var(--t-base)',
                }}
                className="hover:!border-[var(--pine-pale)]"
              >
                How It Works
              </Link>
            </div>

            {/* Stat strip */}
            <div className="flex flex-wrap gap-6">
              {[
                { value: '~12%', label: 'Target APY', className: 'stat-value-yield' },
                { value: '5 Yrs', label: 'Fund Track Record', className: 'stat-value' },
                { value: '$0', label: 'Broker Fees', className: 'stat-value' },
                { value: '100%', label: 'Deed Retained', className: 'stat-value' },
              ].map((s) => (
                <div key={s.label} className="stat-card" style={{ minWidth: 110 }}>
                  <div className={s.className}
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {s.value}
                  </div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <MountainSVG variant="light" />
        </section>

        {/* Use-case cards */}
        <section
          className="py-20 px-6 md:px-12 lg:px-20"
          style={{ background: 'var(--frost)' }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <p className="text-label mb-3">THREE WAYS TO USE DEEDRIVER</p>
              <h2 className="text-h1" style={{ color: 'var(--granite)' }}>
                Your equity, put to work
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {useCases.map((uc) => (
                <div
                  key={uc.badge}
                  className="card flex flex-col"
                  style={{
                    borderTop: `3px solid ${
                      uc.badgeClass === 'badge-yield'
                        ? 'var(--gold)'
                        : uc.badgeClass === 'badge-active'
                        ? 'var(--pine)'
                        : 'var(--timber)'
                    }`,
                  }}
                >
                  <span className={`${uc.badgeClass} self-start mb-4`}>{uc.badge}</span>

                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '1.3rem',
                      fontWeight: 600,
                      color: 'var(--granite)',
                      marginBottom: '0.75rem',
                      lineHeight: 1.25,
                    }}
                  >
                    {uc.title}
                  </h3>

                  <p className="text-body mb-6 flex-1" style={{ fontSize: '0.9375rem' }}>
                    {uc.body}
                  </p>

                  <div className="stat-card mb-6 flex items-end gap-3">
                    <div className={uc.statClass}
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      {uc.stat}
                    </div>
                    <div className="stat-label pb-1">{uc.statLabel}</div>
                  </div>

                  <Link
                    href={uc.href}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 13,
                      fontWeight: 500,
                      color: 'var(--pine)',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                    }}
                    className="hover:!text-[var(--pine-lt)] group"
                  >
                    {uc.cta}
                    <span
                      style={{ transition: 'transform var(--t-base)' }}
                      className="group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section
          className="relative overflow-hidden py-24 px-6 md:px-12 lg:px-20"
          style={{ background: 'var(--snow)' }}
        >
          <div className="max-w-4xl mx-auto relative z-10">
            <p className="text-label mb-3">THE PROCESS</p>
            <h2 className="text-h1 mb-14" style={{ color: 'var(--granite)' }}>
              Three steps to tokenized equity
            </h2>

            <div className="flex flex-col gap-10">
              {steps.map((step, i) => (
                <div key={step.num} className="flex gap-8 items-start">
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '2.5rem',
                      fontWeight: 500,
                      color: 'var(--mist)',
                      lineHeight: 1,
                      minWidth: 60,
                      userSelect: 'none',
                    }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '1.2rem',
                        fontWeight: 600,
                        color: 'var(--granite)',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-body" style={{ fontSize: '0.9375rem' }}>
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14">
              <Link href="/how-it-works" className="btn-primary">
                Full Explainer →
              </Link>
            </div>
          </div>

          <MountainSVG variant="light" />
        </section>

        {/* Trust bar */}
        <section
          style={{ background: 'var(--obsidian)' }}
          className="relative overflow-hidden py-20 px-6 md:px-12 lg:px-20"
        >
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <p className="text-label mb-4" style={{ color: 'var(--slate)' }}>
              BUILT IN WYOMING. BUILT FOR HOMEOWNERS.
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                fontWeight: 600,
                color: 'var(--white)',
                marginBottom: '1.25rem',
                letterSpacing: '-0.01em',
                lineHeight: 1.2,
              }}
            >
              The deed stays in your name.
              <br />
              The yield comes to you.
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '1.0625rem',
                lineHeight: 1.75,
                color: 'var(--slate)',
                maxWidth: 560,
                margin: '0 auto 2.5rem',
              }}
            >
              Wyoming law gives homeowners the strongest token rights in the nation.
              Reg D 506(c) keeps us compliant. A verified 5-year fund track record
              backs every yield projection.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/calculator" className="btn-primary" style={{ padding: '13px 28px', fontSize: 15 }}>
                Calculate Your Yield
              </Link>
              <Link
                href="/regulation"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '13px 28px',
                  fontSize: 15,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  color: 'var(--slate)',
                  textDecoration: 'none',
                  border: '1.5px solid rgba(255,255,255,0.12)',
                  borderRadius: 'var(--r-md)',
                  transition: 'border-color var(--t-base)',
                }}
                className="hover:!border-[rgba(255,255,255,0.3)] hover:!text-white"
              >
                Wyoming Advantage
              </Link>
            </div>
          </div>

          <MountainSVG variant="dark" />
        </section>

        {/* Footer */}
        <footer
          style={{
            background: 'var(--obsidian)',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}
          className="py-12 px-6 md:px-12 lg:px-20"
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
            <div>
              <div className="flex items-center mb-3">
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    color: 'var(--white)',
                  }}
                >
                  Deed
                </span>
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    color: 'var(--pine-lt)',
                  }}
                >
                  River
                </span>
              </div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  color: 'var(--slate)',
                  maxWidth: 260,
                  lineHeight: 1.65,
                }}
              >
                Homeowner-controlled equity tokenization. Wyoming-incorporated.
                Reg D 506(c).
              </p>
            </div>

            <div className="flex flex-wrap gap-12">
              {[
                {
                  heading: 'Platform',
                  links: [
                    { href: '/how-it-works', label: 'How It Works' },
                    { href: '/yield', label: 'Yield' },
                    { href: '/calculator', label: 'Calculator' },
                    { href: '/dashboard', label: 'Dashboard' },
                  ],
                },
                {
                  heading: 'Company',
                  links: [
                    { href: '/about', label: 'About' },
                    { href: '/regulation', label: 'Regulation' },
                  ],
                },
              ].map((col) => (
                <div key={col.heading}>
                  <p className="text-label mb-4" style={{ color: 'var(--slate)' }}>
                    {col.heading}
                  </p>
                  <div className="flex flex-col gap-2">
                    {col.links.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 13,
                          color: 'var(--slate)',
                          textDecoration: 'none',
                        }}
                        className="hover:!text-white"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="max-w-6xl mx-auto mt-10 pt-6 flex flex-col md:flex-row justify-between gap-3"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: 'var(--slate)' }}>
              © 2026 DeedRiver. Wyoming-incorporated.
            </p>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: 'var(--slate)', maxWidth: 480 }}>
              Securities offered under Reg D 506(c). For accredited investors only.
              Not financial advice. Past fund performance does not guarantee future results.
            </p>
          </div>
        </footer>

      </main>
    </>
  );
}
