import Nav from '@/components/Nav';
import MountainSVG from '@/components/MountainSVG';
import Link from 'next/link';

const steps = [
  {
    num: '01',
    title: 'Tokenization',
    body: 'DeedRiver mints 1,000 DEED tokens representing 100% of your net equity — property value minus any existing mortgage balance. Your deed never moves. Title stays with you at all times. You receive all 1,000 tokens immediately.',
    note: 'Works with mortgaged homes. The mortgage holder\'s first lien is untouched.',
  },
  {
    num: '02',
    title: 'Pledge — not borrowing',
    body: 'You pledge a portion of your tokens (typically 60–80%) to DeedRiver Capital. Capital is advanced against the pledged tokens at ~70% LTV. You never incur personal debt — the advance is against token collateral, not against you personally.',
    note: 'Unpledged tokens remain fully unencumbered. The pledge can be reduced or exited at any time.',
  },
  {
    num: '03',
    title: 'Fund Deployment',
    body: 'Advanced capital is deployed into the DeedRiver Capital fund — managed by an institutional-grade team with a verified five-year track record. The fund targets a 12% gross annual return — a conservative figure relative to the historical track record.',
    note: 'Past performance does not guarantee future results.',
  },
  {
    num: '04',
    title: 'Yield Distribution',
    body: 'Returns are distributed quarterly to your DeedRiver account, net of platform fees. Withdraw, reinvest, or accumulate. Exit anytime by reducing or removing your pledge to recover your full token position.',
    note: 'No lockup period. No prepayment penalty.',
  },
];

const helocRows = [
  { label: 'Cost / Benefit', heloc: '−$56,000 in interest', deed: '+$72,450 net yield', highlight: true },
  { label: 'Debt incurred', heloc: 'Yes — personal liability', deed: 'No' },
  { label: 'Monthly payments', heloc: 'Yes', deed: 'No' },
  { label: 'Deed transfer', heloc: 'No', deed: 'No' },
  { label: 'Bank approval required', heloc: 'Yes — credit check', deed: 'No' },
  { label: 'Rate risk', heloc: 'Variable — can rise', deed: 'Investment-linked' },
];

const reverseRows = [
  { label: 'Interest accrues', rm: 'Yes — compounds daily', deed: 'No' },
  { label: 'Mortgage insurance', rm: 'Required (MIP)', deed: 'None' },
  { label: 'Homeowner controls pace', rm: 'No', deed: 'Yes' },
  { label: 'Estate retains equity', rm: 'Often little or none', deed: 'All unsold tokens' },
  { label: 'Upfront fees', rm: '$6,000+', deed: 'Sub-1%' },
  { label: 'Age requirement', rm: '62+ required', deed: 'No minimum' },
];

const feeRows = [
  { fee: 'Tokenization', rate: '0.35%', basis: 'One-time, on net equity at onboarding' },
  { fee: 'Management', rate: '1.25% AUM', basis: 'Annual, on deployed capital only' },
  { fee: 'Performance', rate: '10%', basis: 'Of returns above 8% hurdle rate' },
  { fee: 'Marketplace', rate: '1.0–1.5%', basis: 'On token sale value, buyer + seller split' },
];

const risks = [
  {
    title: 'Property Value Decline',
    body: 'Token values are pegged to an automated valuation model (AVM). A significant property value decline may trigger an LTV adjustment. The platform maintains a conservative 70% LTV threshold. Annual AVM refresh with a dispute mechanism is built into the pledge agreement.',
  },
  {
    title: 'Fund Performance',
    body: 'Returns are investment-linked, not guaranteed. The 12% gross target is conservative relative to the fund\'s five-year track record, but past performance does not guarantee future results. You may receive less than projected.',
  },
  {
    title: 'Lien Priority',
    body: 'If you have an existing mortgage, the first mortgage holder has a senior claim. Token holders hold subordinate equity interests. If you default on your mortgage, the first lien holder\'s claim takes precedence over the token layer.',
  },
  {
    title: 'Marketplace Liquidity',
    body: 'Early-phase marketplace trading may have limited depth. The yield product does not depend on marketplace liquidity, but token resale timing cannot be guaranteed.',
  },
  {
    title: 'Due-on-Sale Clauses',
    body: 'Most mortgages include due-on-sale clauses triggered by property interest transfers. The synthetic token layer is not a recorded property interest and likely does not trigger this clause — but we recommend seeking lender consent where possible. This is not risk-free.',
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Nav />
      <main style={{ background: 'var(--snow)' }}>

        {/* Hero */}
        <section
          className="relative overflow-hidden pt-[120px] pb-[80px] px-6 md:px-12 lg:px-20"
          style={{ background: 'var(--snow)' }}
        >
          <div className="max-w-3xl mx-auto relative z-10">
            <p className="text-label mb-4">THE MECHANICS</p>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                color: 'var(--obsidian)',
                marginBottom: '1.25rem',
              }}
            >
              Your equity works for you.
              <br />
              <span style={{ color: 'var(--pine)' }}>Not the bank.</span>
            </h1>
            <p className="text-body" style={{ fontSize: '1.0625rem', maxWidth: 560 }}>
              DeedRiver converts your home equity into tokens you own and control.
              No deed transfer. No debt. No broker. Four steps from appraisal to quarterly yield.
            </p>
          </div>
          <MountainSVG variant="light" />
        </section>

        {/* 4-step mechanics */}
        <section className="py-20 px-6 md:px-12 lg:px-20" style={{ background: 'var(--frost)' }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-label mb-12">FOUR STEPS</p>
            <div className="flex flex-col gap-0">
              {steps.map((step, i) => (
                <div
                  key={step.num}
                  className="flex gap-8 items-start py-10"
                  style={{
                    borderBottom: i < steps.length - 1 ? '1px solid var(--mist)' : 'none',
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '3rem',
                      fontWeight: 500,
                      color: 'var(--cloud)',
                      lineHeight: 1,
                      minWidth: 68,
                      userSelect: 'none',
                    }}
                  >
                    {step.num}
                  </div>
                  <div className="flex-1">
                    <h2
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '1.3rem',
                        fontWeight: 600,
                        color: 'var(--granite)',
                        marginBottom: '0.625rem',
                      }}
                    >
                      {step.title}
                    </h2>
                    <p className="text-body mb-4" style={{ fontSize: '0.9375rem' }}>
                      {step.body}
                    </p>
                    <p
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: '0.8rem',
                        color: 'var(--timber)',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {step.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Unit economics */}
        <section className="py-20 px-6 md:px-12 lg:px-20" style={{ background: 'var(--snow)' }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-label mb-3">ILLUSTRATIVE EXAMPLE</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                fontWeight: 600,
                color: 'var(--granite)',
                marginBottom: '0.5rem',
              }}
            >
              $1M home. 70% pledge. $72,450 net annual yield.
            </h2>
            <p className="text-body mb-10" style={{ fontSize: '0.9375rem' }}>
              Free and clear. Numbers are illustrative based on a 12% gross fund return target.
            </p>

            <div
              className="card overflow-hidden"
              style={{ padding: 0, border: '1px solid var(--mist)' }}
            >
              {/* Table header */}
              <div
                className="grid grid-cols-3 px-6 py-3"
                style={{
                  background: 'var(--frost)',
                  borderBottom: '1px solid var(--mist)',
                }}
              >
                {['Item', 'Calculation', 'Amount'].map((h) => (
                  <p key={h} className="text-label">{h}</p>
                ))}
              </div>

              {[
                { item: 'Net equity tokenized', calc: '$1,000,000 × 100%', amount: '$1,000,000', bold: false },
                { item: 'Tokens minted', calc: '1,000 DEED @ $1,000/token', amount: '1,000 tokens', bold: false },
                { item: 'Tokens pledged', calc: '700 of 1,000', amount: '$700,000 collateral', bold: false },
                { item: 'Capital deployed to fund', calc: '$700,000', amount: '', bold: false },
                { item: 'Gross fund return (12%)', calc: '$700,000 × 12%', amount: '$84,000', bold: false },
                { item: 'Management fee (1.25% AUM)', calc: '$700,000 × 1.25%', amount: '−$8,750', bold: false },
                { item: 'Performance fee (10% above 8%)', calc: '($84K − $56K) × 10%', amount: '−$2,800', bold: false },
                { item: 'Net annual yield to homeowner', calc: '', amount: '$72,450', bold: true },
              ].map((row, i) => (
                <div
                  key={row.item}
                  className="grid grid-cols-3 px-6 py-4"
                  style={{
                    borderBottom: i < 7 ? '1px solid var(--mist)' : 'none',
                    background: row.bold ? 'var(--pine-ghost)' : i % 2 === 0 ? 'var(--white)' : 'var(--snow)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.875rem',
                      color: row.bold ? 'var(--pine)' : 'var(--granite)',
                      fontWeight: row.bold ? 500 : 400,
                    }}
                  >
                    {row.item}
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '0.8125rem',
                      color: 'var(--slate)',
                    }}
                  >
                    {row.calc}
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '0.875rem',
                      color: row.bold ? 'var(--gold)' : row.amount.startsWith('−') ? 'var(--stone)' : 'var(--granite)',
                      fontWeight: row.bold ? 500 : 400,
                    }}
                  >
                    {row.amount}
                  </p>
                </div>
              ))}
            </div>

            {/* Summary stat strip */}
            <div className="flex flex-wrap gap-4 mt-8">
              {[
                { label: 'Return on Total Equity', value: '7.2%' },
                { label: 'Return on Deployed Capital', value: '10.3%' },
                { label: 'Delta vs. HELOC (same capital)', value: '+$128K' },
              ].map((s) => (
                <div key={s.label} className="stat-card flex-1 min-w-[140px]">
                  <div
                    className="stat-value-yield"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {s.value}
                  </div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            <p
              className="mt-4"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.75rem',
                color: 'var(--slate)',
                lineHeight: 1.6,
              }}
            >
              Illustrative only. Past performance does not guarantee future results.
              This is not investment advice. Estimates based on target fund returns.
            </p>
          </div>
        </section>

        {/* Works with mortgages */}
        <section className="py-16 px-6 md:px-12 lg:px-20" style={{ background: 'var(--frost)' }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-label mb-3">EQUITY SCENARIOS</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)',
                fontWeight: 600,
                color: 'var(--granite)',
                marginBottom: '0.5rem',
              }}
            >
              Works with your existing mortgage
            </h2>
            <p className="text-body mb-8" style={{ fontSize: '0.9375rem', maxWidth: 520 }}>
              DeedRiver does not require a paid-off home. Tokens represent the equity layer only —
              your mortgage holder&apos;s first lien is untouched and senior in all scenarios.
              The economic sweet spot is $500,000 or more in net equity.
            </p>

            <div
              className="card overflow-hidden"
              style={{ padding: 0 }}
            >
              <div
                className="grid grid-cols-4 px-6 py-3"
                style={{ background: 'var(--white)', borderBottom: '1px solid var(--mist)' }}
              >
                {['Scenario', 'Property Value', 'Mortgage', 'Tokenizable Equity'].map((h) => (
                  <p key={h} className="text-label">{h}</p>
                ))}
              </div>
              {[
                { scenario: 'Free & Clear', value: '$1,000,000', mortgage: '$0', equity: '$1,000,000' },
                { scenario: 'Typical', value: '$1,000,000', mortgage: '$600,000', equity: '$400,000' },
                { scenario: 'Leveraged', value: '$1,000,000', mortgage: '$800,000', equity: '$200,000' },
              ].map((row, i) => (
                <div
                  key={row.scenario}
                  className="grid grid-cols-4 px-6 py-4"
                  style={{
                    borderBottom: i < 2 ? '1px solid var(--mist)' : 'none',
                    background: i % 2 === 0 ? 'var(--white)' : 'var(--snow)',
                  }}
                >
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'var(--granite)', fontWeight: 500 }}>
                    {row.scenario}
                  </p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.875rem', color: 'var(--stone)' }}>
                    {row.value}
                  </p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.875rem', color: 'var(--stone)' }}>
                    {row.mortgage}
                  </p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.875rem', color: 'var(--pine)' }}>
                    {row.equity}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison — HELOC */}
        <section className="py-20 px-6 md:px-12 lg:px-20" style={{ background: 'var(--snow)' }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-label mb-3">COMPARISON</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)',
                fontWeight: 600,
                color: 'var(--granite)',
                marginBottom: '0.5rem',
              }}
            >
              DeedRiver vs. HELOC
            </h2>
            <p className="text-body mb-8" style={{ fontSize: '0.9375rem', maxWidth: 520 }}>
              On the same $700,000 in deployed capital — one costs you $56,000 a year,
              the other pays you $72,450.
            </p>

            <div className="card overflow-hidden" style={{ padding: 0 }}>
              <div
                className="grid grid-cols-3 px-6 py-3"
                style={{ background: 'var(--frost)', borderBottom: '1px solid var(--mist)' }}
              >
                <p className="text-label"></p>
                <p className="text-label">HELOC @ 8%</p>
                <p className="text-label" style={{ color: 'var(--pine)' }}>DeedRiver</p>
              </div>
              {helocRows.map((row, i) => (
                <div
                  key={row.label}
                  className="grid grid-cols-3 px-6 py-4 items-center"
                  style={{
                    borderBottom: i < helocRows.length - 1 ? '1px solid var(--mist)' : 'none',
                    background: row.highlight ? 'var(--gold-ghost)' : i % 2 === 0 ? 'var(--white)' : 'var(--snow)',
                  }}
                >
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'var(--stone)' }}>
                    {row.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '0.875rem',
                      color: row.highlight ? 'var(--stone)' : 'var(--stone)',
                    }}
                  >
                    {row.heloc}
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '0.875rem',
                      color: row.highlight ? 'var(--gold)' : 'var(--pine)',
                      fontWeight: row.highlight ? 500 : 400,
                    }}
                  >
                    {row.deed}
                  </p>
                </div>
              ))}
            </div>

            <p
              className="mt-4"
              style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.75rem', color: 'var(--slate)' }}
            >
              DeedRiver is not a debt instrument. This is not investment advice.
              Past performance does not guarantee future results.
            </p>
          </div>
        </section>

        {/* Comparison — Reverse Mortgage */}
        <section className="py-20 px-6 md:px-12 lg:px-20" style={{ background: 'var(--frost)' }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-label mb-3">COMPARISON</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)',
                fontWeight: 600,
                color: 'var(--granite)',
                marginBottom: '0.5rem',
              }}
            >
              DeedRiver vs. Reverse Mortgage
            </h2>
            <p className="text-body mb-8" style={{ fontSize: '0.9375rem', maxWidth: 520 }}>
              A reverse mortgage transfers compounding risk to the homeowner. DeedRiver keeps
              the homeowner in control — no interest, no mandatory insurance, no lender
              deciding when you sell.
            </p>

            <div className="card overflow-hidden" style={{ padding: 0 }}>
              <div
                className="grid grid-cols-3 px-6 py-3"
                style={{ background: 'var(--white)', borderBottom: '1px solid var(--mist)' }}
              >
                <p className="text-label"></p>
                <p className="text-label">Reverse Mortgage</p>
                <p className="text-label" style={{ color: 'var(--pine)' }}>DeedRiver</p>
              </div>
              {reverseRows.map((row, i) => (
                <div
                  key={row.label}
                  className="grid grid-cols-3 px-6 py-4 items-center"
                  style={{
                    borderBottom: i < reverseRows.length - 1 ? '1px solid var(--mist)' : 'none',
                    background: i % 2 === 0 ? 'var(--white)' : 'var(--snow)',
                  }}
                >
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'var(--stone)' }}>
                    {row.label}
                  </p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.875rem', color: 'var(--stone)' }}>
                    {row.rm}
                  </p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.875rem', color: 'var(--pine)' }}>
                    {row.deed}
                  </p>
                </div>
              ))}
            </div>

            <p
              className="mt-4"
              style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.75rem', color: 'var(--slate)' }}
            >
              DeedRiver is not a mortgage product. Tokens are not debt instruments.
              Currently available to accredited investors in Wyoming.
            </p>
          </div>
        </section>

        {/* Fee structure */}
        <section className="py-20 px-6 md:px-12 lg:px-20" style={{ background: 'var(--snow)' }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-label mb-3">FEES</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)',
                fontWeight: 600,
                color: 'var(--granite)',
                marginBottom: '0.5rem',
              }}
            >
              Transparent. No surprises.
            </h2>
            <p className="text-body mb-8" style={{ fontSize: '0.9375rem', maxWidth: 520 }}>
              No HELOC interest. No origination fees. No mortgage insurance. No broker commissions.
            </p>

            <div className="card overflow-hidden" style={{ padding: 0 }}>
              <div
                className="grid grid-cols-3 px-6 py-3"
                style={{ background: 'var(--frost)', borderBottom: '1px solid var(--mist)' }}
              >
                {['Fee', 'Rate', 'Basis'].map((h) => (
                  <p key={h} className="text-label">{h}</p>
                ))}
              </div>
              {feeRows.map((row, i) => (
                <div
                  key={row.fee}
                  className="grid grid-cols-3 px-6 py-4"
                  style={{
                    borderBottom: i < feeRows.length - 1 ? '1px solid var(--mist)' : 'none',
                    background: i % 2 === 0 ? 'var(--white)' : 'var(--snow)',
                  }}
                >
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'var(--granite)', fontWeight: 500 }}>
                    {row.fee}
                  </p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.875rem', color: 'var(--timber)', fontWeight: 500 }}>
                    {row.rate}
                  </p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'var(--stone)' }}>
                    {row.basis}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Risk factors */}
        <section className="py-20 px-6 md:px-12 lg:px-20" style={{ background: 'var(--frost)' }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-label mb-3">RISK FACTORS</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)',
                fontWeight: 600,
                color: 'var(--granite)',
                marginBottom: '0.75rem',
              }}
            >
              What you should know
            </h2>
            <p className="text-body mb-10" style={{ fontSize: '0.9375rem', maxWidth: 520 }}>
              We believe in direct language. These are the risks homeowners should weigh
              before participating.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {risks.map((r) => (
                <div
                  key={r.title}
                  className="card"
                  style={{ borderLeft: '3px solid var(--mist)' }}
                >
                  <h3
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.9375rem',
                      fontWeight: 500,
                      color: 'var(--granite)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {r.title}
                  </h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'var(--stone)', lineHeight: 1.7 }}>
                    {r.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="relative overflow-hidden py-24 px-6 md:px-12 lg:px-20"
          style={{ background: 'var(--obsidian)' }}
        >
          <div className="max-w-3xl mx-auto relative z-10 text-center">
            <p className="text-label mb-4" style={{ color: 'var(--slate)' }}>READY TO START</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                fontWeight: 600,
                color: 'var(--white)',
                marginBottom: '1rem',
                letterSpacing: '-0.01em',
                lineHeight: 1.2,
              }}
            >
              See what your equity could earn.
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '1rem',
                color: 'var(--slate)',
                marginBottom: '2.5rem',
                lineHeight: 1.7,
              }}
            >
              Enter your home value and equity. Get a personalized yield estimate in under a minute.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/calculator" className="btn-primary" style={{ padding: '13px 28px', fontSize: 15 }}>
                Calculate Your Yield
              </Link>
              <Link
                href="/yield"
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
                }}
                className="hover:!border-[rgba(255,255,255,0.3)] hover:!text-white"
              >
                Fund Strategy →
              </Link>
            </div>
            <p
              className="mt-8"
              style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: 'var(--slate)', lineHeight: 1.7 }}
            >
              Currently available to accredited investors in Wyoming. This is not investment advice.
              Past performance does not guarantee future results.
            </p>
          </div>
          <MountainSVG variant="dark" />
        </section>

      </main>
    </>
  );
}
