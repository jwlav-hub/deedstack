import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import MountainSVG from '@/components/MountainSVG';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How It Works - Home Equity Tokenization',
  description: 'DeedStack converts home equity into DEED tokens via a non-recourse pledge structure. No deed transfer. Four steps from appraisal to yield participation. Wyoming-incorporated, Reg D 506(c).',
};

const steps = [
  {
    num: '01',
    title: 'Tokenization',
    body: 'DeedStack mints 1,000 DEED tokens representing 100% of your net equity — property value minus any existing mortgage balance. Your deed never moves. Title stays with you at all times. You receive all 1,000 tokens immediately.',
    note: 'Works with mortgaged homes. The mortgage holder\'s first lien is untouched.',
  },
  {
    num: '02',
    title: 'Non-Recourse Collateral Advance',
    body: 'You pledge a portion of your tokens (typically 60–80%) to DeedStack Capital. DeedStack is designed to test structures where verified equity can support a non-recourse collateral advance — not a traditional HELOC. Final treatment depends on transaction documents, state law, mortgage terms, and regulatory review. A regulator or securities lawyer may characterize the structure differently depending on jurisdiction and documentation.',
    note: 'Unpledged tokens remain fully unencumbered. The pledge can be reduced or exited at any time.',
  },
  {
    num: '03',
    title: 'Fund Deployment',
    body: 'Advanced capital is deployed into the DeedStack Capital fund — managed by the former CTO of BFAM Partners. The team&apos;s experience includes institutional trading systems and fund infrastructure associated with BFAM Partners. DeedStack&apos;s fund is new and has no independent operating track record. The fund targets an 8% gross annual return. Returns are variable and not guaranteed.',
    note: 'Historical references to BFAM Partners are team background only — not DeedStack fund results.',
  },
  {
    num: '04',
    title: 'Yield Distribution',
    body: 'Returns are distributed quarterly to your DeedStack account, net of platform fees. Withdraw, reinvest, or accumulate. Exit anytime by reducing or removing your pledge to recover your full token position.',
    note: 'No lockup period. No prepayment penalty.',
  },
];

const unitRows = [
  { item: 'Net equity tokenized', calc: '$1,000,000 × 100%', amount: '$1,000,000', bold: false },
  { item: 'Tokens minted', calc: '1,000 DEED @ $1,000/token', amount: '1,000 tokens', bold: false },
  { item: 'Tokens pledged', calc: '700 of 1,000', amount: '$700,000 collateral', bold: false },
  { item: 'Capital deployed to fund', calc: '$700,000', amount: '', bold: false },
  { item: 'Gross fund return (8%)', calc: '$700,000 × 8%', amount: '$56,000', bold: false },
  { item: 'Management fee (1.25% AUM)', calc: '$700,000 × 1.25%', amount: '−$8,750', bold: false },
  { item: 'Performance fee (10% above 8%)', calc: 'At hurdle — $0', amount: '−$0', bold: false },
  { item: 'Net annual yield to homeowner', calc: '', amount: '$47,250', bold: true },
];

const equityScenarios = [
  { scenario: 'Free & Clear', value: '$1,000,000', mortgage: '$0', equity: '$1,000,000' },
  { scenario: 'Typical', value: '$1,000,000', mortgage: '$600,000', equity: '$400,000' },
  { scenario: 'Leveraged', value: '$1,000,000', mortgage: '$800,000', equity: '$200,000' },
];

const productMatrix = [
  {
    product: 'HELOC',
    payment: 'Yes — monthly interest required',
    recourse: 'Usually yes — personal liability',
    cost: 'Stated interest rate (currently 8–10%)',
    upside: 'Borrower keeps all investment upside and absorbs all loss',
  },
  {
    product: 'Home Equity Agreement',
    payment: 'No monthly payment',
    recourse: 'Usually limited — tied to property value',
    cost: 'Share of future home appreciation (typically 15–40%)',
    upside: 'Investor shares in property upside; homeowner gives up a portion permanently',
  },
  {
    product: 'DeedStack Yield Deed',
    payment: 'Designed for no monthly payment',
    recourse: 'Intended non-recourse to homeowner',
    cost: 'Capital cost + platform fees + investment risk embedded in fund',
    upside: 'Returns variable — dependent on fund performance, capital cost, and market conditions',
  },
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
  { title: 'Property Value Decline', body: 'Token values are pegged to an automated valuation model (AVM). A significant decline may trigger an LTV adjustment. The platform maintains a conservative 70% LTV threshold with an annual AVM refresh and dispute mechanism.' },
  { title: 'Fund Performance', body: 'Returns are investment-linked, not guaranteed. DeedStack&apos;s fund is new and has no operating history. The fund manager&apos;s background at BFAM Partners is provided as team context only — it is not a representation of DeedStack fund results. You may receive less than the 8% gross target.' },
  { title: 'Lien Priority', body: 'If you have an existing mortgage, the first mortgage holder has a senior claim. Token holders hold subordinate equity interests. If you default on your mortgage, the first lien holder\'s claim takes precedence.' },
  { title: 'Marketplace Liquidity', body: 'Early-phase marketplace trading may have limited depth. The yield product does not depend on marketplace liquidity, but token resale timing cannot be guaranteed.' },
  { title: 'Due-on-Sale Clauses', body: 'Most mortgages include due-on-sale clauses triggered by property interest transfers. The synthetic token layer is not a recorded property interest and likely does not trigger this clause — but we recommend seeking lender consent where possible.' },
];

function TableHeader({ cols }: { cols: string[] }) {
  return (
    <div
      className={`grid px-6 py-3`}
      style={{
        gridTemplateColumns: `repeat(${cols.length}, minmax(0, 1fr))`,
        background: 'var(--frost)',
        borderBottom: '1px solid var(--mist)',
      }}
    >
      {cols.map((h) => <p key={h} className="text-label">{h}</p>)}
    </div>
  );
}

export default function HowItWorksPage() {
  return (
    <>
      <Nav />
      <main style={{ background: 'var(--snow)' }}>

        {/* Hero */}
        <section className="relative overflow-hidden pt-[128px] pb-[80px] px-6 md:px-12 lg:px-20" style={{ background: 'var(--snow)' }}>
          <div className="max-w-3xl mx-auto relative z-10">
            <p className="text-label mb-4">THE MECHANICS</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, color: 'var(--obsidian)', marginBottom: '1.25rem' }}>
              Your equity works for you.<br />
              <span style={{ color: 'var(--pine)' }}>Not the bank.</span>
            </h1>
            <p className="text-body" style={{ fontSize: '1.0625rem', maxWidth: 560 }}>
              DeedStack converts your home equity into tokens you own and control.
              No deed transfer. No broker. Designed to test structures where verified equity can support a non-recourse collateral advance — not a traditional HELOC.
              Final treatment depends on transaction documents, state law, mortgage terms, and regulatory review.
            </p>
          </div>
          <MountainSVG variant="light" />
        </section>

        {/* 4-step mechanics */}
        <section className="py-20 px-6 md:px-12 lg:px-20" style={{ background: 'var(--frost)' }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-label mb-12">FOUR STEPS</p>
            <div className="flex flex-col">
              {steps.map((step, i) => (
                <div key={step.num} className="flex gap-8 items-start py-10" style={{ borderBottom: i < steps.length - 1 ? '1px solid var(--mist)' : 'none' }}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '3rem', fontWeight: 500, color: 'var(--cloud)', lineHeight: 1, minWidth: 68, userSelect: 'none' as const }}>
                    {step.num}
                  </div>
                  <div className="flex-1">
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 600, color: 'var(--granite)', marginBottom: '0.625rem' }}>
                      {step.title}
                    </h2>
                    <p className="text-body mb-4" style={{ fontSize: '0.9375rem' }}>{step.body}</p>
                    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.8rem', color: 'var(--timber)', letterSpacing: '0.02em' }}>
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
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 600, color: 'var(--granite)', marginBottom: '0.5rem' }}>
              $1M home. 70% pledge. $72,450 net annual yield.
            </h2>
            <p className="text-body mb-10" style={{ fontSize: '0.9375rem' }}>
              Free and clear. Numbers are illustrative based on an 8% gross fund return target.
            </p>

            <div className="card overflow-hidden" style={{ padding: 0 }}>
              <TableHeader cols={['Item', 'Calculation', 'Amount']} />
              {unitRows.map((row, i) => (
                <div
                  key={row.item}
                  className="grid grid-cols-3 px-6 py-4"
                  style={{
                    borderBottom: i < unitRows.length - 1 ? '1px solid var(--mist)' : 'none',
                    background: row.bold ? 'var(--pine-ghost)' : i % 2 === 0 ? 'var(--white)' : 'var(--snow)',
                  }}
                >
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: row.bold ? 'var(--pine)' : 'var(--granite)', fontWeight: row.bold ? 500 : 400 }}>{row.item}</p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.8125rem', color: 'var(--slate)' }}>{row.calc}</p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.875rem', fontWeight: row.bold ? 500 : 400, color: row.bold ? 'var(--gold)' : row.amount.startsWith('−') ? 'var(--stone)' : 'var(--granite)' }}>{row.amount}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              {[
                { label: 'Return on Total Equity', value: '7.2%' },
                { label: 'Return on Deployed Capital', value: '10.3%' },
                { label: 'Delta vs. HELOC (same capital)', value: '+$128K' },
              ].map((s) => (
                <div key={s.label} className="stat-card flex-1" style={{ minWidth: 140 }}>
                  <div className="stat-value-yield" style={{ fontFamily: "'DM Mono', monospace" }}>{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
            <p className="mt-4" style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.75rem', color: 'var(--slate)', lineHeight: 1.6 }}>
              Illustrative only. Past performance does not guarantee future results. This is not investment advice. Estimates based on target fund returns.
            </p>
          </div>
        </section>

        {/* Works with mortgages */}
        <section className="py-16 px-6 md:px-12 lg:px-20" style={{ background: 'var(--frost)' }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-label mb-3">EQUITY SCENARIOS</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)', fontWeight: 600, color: 'var(--granite)', marginBottom: '0.5rem' }}>
              Works with your existing mortgage
            </h2>
            <p className="text-body mb-8" style={{ fontSize: '0.9375rem', maxWidth: 520 }}>
              DeedStack does not require a paid-off home. Tokens represent the equity layer only —
              your mortgage holder&apos;s first lien is untouched and senior in all scenarios.
              The economic sweet spot is $500,000 or more in net equity.
            </p>
            <div className="card overflow-hidden" style={{ padding: 0 }}>
              <TableHeader cols={['Scenario', 'Property Value', 'Mortgage', 'Tokenizable Equity']} />
              {equityScenarios.map((row, i) => (
                <div key={row.scenario} className="grid grid-cols-4 px-6 py-4" style={{ borderBottom: i < 2 ? '1px solid var(--mist)' : 'none', background: i % 2 === 0 ? 'var(--white)' : 'var(--snow)' }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'var(--granite)', fontWeight: 500 }}>{row.scenario}</p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.875rem', color: 'var(--stone)' }}>{row.value}</p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.875rem', color: 'var(--stone)' }}>{row.mortgage}</p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.875rem', color: 'var(--pine)' }}>{row.equity}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product comparison matrix */}
        <section className="py-20 px-6 md:px-12 lg:px-20" style={{ background: 'var(--snow)' }}>
          <div className="max-w-5xl mx-auto">
            <p className="text-label mb-3">COMPARISON</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)', fontWeight: 600, color: 'var(--granite)', marginBottom: '0.75rem' }}>
              How the structures compare
            </h2>
            <p className="text-body mb-10" style={{ fontSize: '0.9375rem', maxWidth: 580 }}>
              DeedStack is not free leverage. Capital advanced against tokenized collateral carries a cost — embedded in the fund structure through fees, capital partner terms, and investment risk. The structural differences below are what distinguish it from a HELOC or home equity agreement.
            </p>

            {/* Desktop table */}
            <div className="card overflow-hidden hidden md:block" style={{ padding: 0, overflowX: 'auto' }}>
              {/* Header */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1.2fr 1.2fr 1.6fr 1.8fr', background: 'var(--frost)', borderBottom: '1px solid var(--mist)', padding: '10px 20px', gap: '0.5rem' }}>
                {['Product', 'Monthly Payment', 'Recourse', 'Rate / Cost', 'Upside / Downside'].map((h) => (
                  <p key={h} className="text-label">{h}</p>
                ))}
              </div>
              {productMatrix.map((row, i) => (
                <div
                  key={row.product}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1.4fr 1.2fr 1.2fr 1.6fr 1.8fr',
                    padding: '16px 20px',
                    gap: '0.5rem',
                    borderBottom: i < productMatrix.length - 1 ? '1px solid var(--mist)' : 'none',
                    background: row.product === 'DeedStack Yield Deed'
                      ? 'var(--pine-ghost)'
                      : i % 2 === 0 ? 'var(--white)' : 'var(--snow)',
                    alignItems: 'start',
                  }}
                >
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.875rem', fontWeight: 600, color: row.product === 'DeedStack Yield Deed' ? 'var(--pine)' : 'var(--granite)', lineHeight: 1.4 }}>{row.product}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', color: 'var(--stone)', lineHeight: 1.55 }}>{row.payment}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', color: 'var(--stone)', lineHeight: 1.55 }}>{row.recourse}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', color: 'var(--stone)', lineHeight: 1.55 }}>{row.cost}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', color: 'var(--stone)', lineHeight: 1.55 }}>{row.upside}</p>
                </div>
              ))}
            </div>

            {/* Mobile cards */}
            <div className="flex flex-col gap-4 md:hidden">
              {productMatrix.map((row) => (
                <div key={row.product} className="card" style={{ borderLeft: `3px solid ${row.product === 'DeedStack Yield Deed' ? 'var(--pine)' : 'var(--mist)'}`, padding: '1.25rem' }}>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', fontWeight: 600, color: row.product === 'DeedStack Yield Deed' ? 'var(--pine)' : 'var(--granite)', marginBottom: 12 }}>{row.product}</p>
                  {[
                    { label: 'Monthly Payment', val: row.payment },
                    { label: 'Recourse', val: row.recourse },
                    { label: 'Rate / Cost', val: row.cost },
                    { label: 'Upside / Downside', val: row.upside },
                  ].map((f) => (
                    <div key={f.label} className="mb-3">
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.06em', color: 'var(--slate)', marginBottom: 2 }}>{f.label.toUpperCase()}</p>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.84rem', color: 'var(--stone)', lineHeight: 1.55 }}>{f.val}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <p className="mt-6" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', color: 'var(--slate)', lineHeight: 1.75 }}>
              DeedStack is designed as a non-recourse collateral advance structure. Capital cost is embedded in fund fees, capital partner terms, and investment performance — not a stated interest rate. Final characterization of the structure depends on transaction documents, state law, and regulatory review. This is not investment advice and does not constitute an offer to lend or invest.
            </p>
          </div>
        </section>

        {/* DeedStack vs Reverse Mortgage */}
        <section className="py-20 px-6 md:px-12 lg:px-20" style={{ background: 'var(--frost)' }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-label mb-3">COMPARISON</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)', fontWeight: 600, color: 'var(--granite)', marginBottom: '0.5rem' }}>
              DeedStack vs. Reverse Mortgage
            </h2>
            <p className="text-body mb-8" style={{ fontSize: '0.9375rem', maxWidth: 520 }}>
              A reverse mortgage transfers compounding risk to the homeowner. DeedStack keeps you in control — no interest, no mandatory insurance, no lender deciding when you sell.
            </p>
            <div className="card overflow-hidden" style={{ padding: 0 }}>
              <div className="grid grid-cols-3 px-6 py-3" style={{ background: 'var(--frost)', borderBottom: '1px solid var(--mist)' }}>
                <p className="text-label"></p>
                <p className="text-label">Reverse Mortgage</p>
                <p className="text-label" style={{ color: 'var(--pine)' }}>DeedStack</p>
              </div>
              {reverseRows.map((row, i) => (
                <div key={row.label} className="grid grid-cols-3 px-6 py-4 items-center" style={{ borderBottom: i < reverseRows.length - 1 ? '1px solid var(--mist)' : 'none', background: i % 2 === 0 ? 'var(--white)' : 'var(--snow)' }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'var(--stone)' }}>{row.label}</p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.875rem', color: 'var(--stone)' }}>{row.rm}</p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.875rem', color: 'var(--pine)' }}>{row.deed}</p>
                </div>
              ))}
            </div>
            <p className="mt-4" style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.75rem', color: 'var(--slate)' }}>
              DeedStack is designed as a non-recourse collateral advance, not a mortgage product. Final treatment depends on transaction documents, state law, and regulatory review. Currently available to accredited investors in Wyoming.
            </p>
          </div>
        </section>

        {/* Fee structure */}
        <section className="py-20 px-6 md:px-12 lg:px-20" style={{ background: 'var(--snow)' }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-label mb-3">FEES</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)', fontWeight: 600, color: 'var(--granite)', marginBottom: '0.5rem' }}>
              Transparent. No surprises.
            </h2>
            <p className="text-body mb-8" style={{ fontSize: '0.9375rem', maxWidth: 520 }}>
              No HELOC interest. No origination fees. No mortgage insurance. No broker commissions.
            </p>
            <div className="card overflow-hidden" style={{ padding: 0 }}>
              <TableHeader cols={['Fee', 'Rate', 'Basis']} />
              {feeRows.map((row, i) => (
                <div key={row.fee} className="grid grid-cols-3 px-6 py-4" style={{ borderBottom: i < feeRows.length - 1 ? '1px solid var(--mist)' : 'none', background: i % 2 === 0 ? 'var(--white)' : 'var(--snow)' }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'var(--granite)', fontWeight: 500 }}>{row.fee}</p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.875rem', color: 'var(--timber)', fontWeight: 500 }}>{row.rate}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'var(--stone)' }}>{row.basis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Risk factors */}
        <section className="py-20 px-6 md:px-12 lg:px-20" style={{ background: 'var(--frost)' }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-label mb-3">RISK FACTORS</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)', fontWeight: 600, color: 'var(--granite)', marginBottom: '0.75rem' }}>
              What you should know
            </h2>
            <p className="text-body mb-10" style={{ fontSize: '0.9375rem', maxWidth: 520 }}>
              We believe in direct language. These are the risks homeowners should weigh before participating.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {risks.map((r) => (
                <div key={r.title} className="card" style={{ borderLeft: '3px solid var(--mist)' }}>
                  <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9375rem', fontWeight: 500, color: 'var(--granite)', marginBottom: '0.5rem' }}>{r.title}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'var(--stone)', lineHeight: 1.7 }}>{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-24 px-6 md:px-12 lg:px-20" style={{ background: 'var(--obsidian)' }}>
          <div className="max-w-3xl mx-auto relative z-10 text-center">
            <p className="text-label mb-4" style={{ color: 'var(--slate)' }}>READY TO START</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 600, color: 'var(--white)', marginBottom: '1rem', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
              See what your equity could earn.
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: 'var(--slate)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              Enter your home value and equity. Get a personalized yield estimate in under a minute.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/calculator" className="btn-primary" style={{ padding: '13px 28px', fontSize: 15 }}>Model a Scenario</Link>
              <Link href="/yield" style={{ display: 'inline-flex', alignItems: 'center', padding: '13px 28px', fontSize: 15, fontFamily: "'DM Sans', sans-serif", fontWeight: 500, color: 'var(--slate)', textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.12)', borderRadius: 'var(--r-md)' }} className="hover:!border-[rgba(255,255,255,0.3)] hover:!text-white">
                Fund Strategy →
              </Link>
            </div>
            <p className="mt-8" style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: 'var(--slate)', lineHeight: 1.7 }}>
              Currently available to accredited investors in Wyoming. This is not investment advice. Past performance does not guarantee future results.
            </p>
          </div>
          <MountainSVG variant="dark" />
        </section>

      </main>
    </>
  );
}
