import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import MountainSVG from '@/components/MountainSVG';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Yield Deed - Earn Yield While Retaining Your Deed',
  description: 'DeedStack Yield Deed lets homeowners tokenize residential equity and earn institutional-grade returns — without giving up the deed, taking on debt, or paying a broker.',
};

const useCases = [
  {
    badge: 'YIELD GENERATION',
    badgeClass: 'badge-yield',
    accentColor: 'var(--gold)',
    title: 'Earn While You Stay',
    body: 'DeedStack is testing a compliant structure for converting verified home equity into a tokenized collateral position that may support yield participation, liquidity, or fractional transferability. Returns are variable, not guaranteed, and subject to fund performance, liquidity, valuation, and legal constraints.',
    stat: '8%',
    statLabel: 'Target APY',
    statClass: 'stat-value-yield',
    cta: 'See Projected Yield',
    href: '/yield',
  },
  {
    badge: 'REVERSE MORTGAGE REPLACEMENT',
    badgeClass: 'badge-active',
    accentColor: 'var(--pine)',
    title: 'Access Equity on Your Schedule',
    body: 'Sell tokens individually, on your timeline. No bank approval. No forced move-out. No compounding interest eating your estate. Keep the deed, access the value.',
    stat: '0%',
    statLabel: 'Interest Rate',
    statClass: 'stat-value',
    cta: 'Compare to Reverse Mortgages',
    href: '/how-it-works',
  },
  {
    badge: 'P2P MARKETPLACE',
    badgeClass: 'badge-tokenized',
    accentColor: 'var(--timber)',
    title: 'Buy and Sell Without Brokers',
    body: 'Trade fractional equity tokens peer-to-peer. No 5–6% commission. No listing delays. Verified ownership on-chain, settled fast, fees a fraction of traditional sales.',
    stat: '<1.5%',
    statLabel: 'Platform Fee',
    statClass: 'stat-value',
    cta: 'Explore the Marketplace',
    href: '/marketplace',
  },
];

const steps = [
  { num: '01', title: 'Tokenize Your Equity', body: 'We appraise your home and mint DEED tokens representing your net equity. Your deed never moves.' },
  { num: '02', title: 'Choose Your Path', body: 'Pledge tokens to the fund for yield, list them on the marketplace, or hold. You decide — any time.' },
  { num: '03', title: 'Earn or Transact', body: 'Yield distributes quarterly. Marketplace sales settle in days. Tokens redeem against the deed when you\'re ready.' },
];

export default function YieldDeedPage() {
  return (
    <>
      <Nav />
      <main style={{ background: 'var(--snow)' }}>

        {/* Hero */}
        <section className="relative overflow-hidden pt-[128px] pb-[100px] px-6 md:px-12 lg:px-20" style={{ background: 'var(--snow)' }}>
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <span className="badge-active">WYOMING-INCORPORATED</span>
              <span className="badge-yield">REG D 506(c)</span>
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', letterSpacing: '0.1em', color: 'var(--pine)', marginBottom: 12 }}>YIELD DEED</p>
            <h1 className="text-display mb-6">
              Your equity.<br />
              <span style={{ color: 'var(--pine)' }}>Your yield.</span><br />
              Your deed.
            </h1>
            <p className="text-body max-w-xl mb-10" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
              DeedStack Yield Deed lets homeowners tokenize their residential equity and earn institutional-grade returns — without giving up the deed, taking on traditional debt, or paying a broker. Designed as a non-recourse token pledge structure. Final treatment depends on transaction documents, jurisdiction, and regulatory review.
            </p>
            <div className="flex flex-wrap gap-4 mb-16">
              <Link href="/calculator" className="btn-primary" style={{ padding: '13px 28px', fontSize: 15 }}>
                Model a Scenario
              </Link>
              <Link href="/how-it-works" style={{ display: 'inline-flex', alignItems: 'center', padding: '13px 28px', fontSize: 15, fontFamily: "'DM Sans', sans-serif", fontWeight: 500, color: 'var(--granite)', textDecoration: 'none', border: '1.5px solid var(--mist)', borderRadius: 'var(--r-md)' }} className="hover:!border-[var(--pine-pale)]">
                How It Works
              </Link>
            </div>
            <div className="flex flex-wrap gap-6">
              {[
                { value: '8%',    label: 'Target APY',               isYield: true  },
                { value: 'New',   label: 'Fund Operating History',    isYield: false },
                { value: '$0',    label: 'Broker Fees',               isYield: false },
                { value: '100%',  label: 'Deed Retained',             isYield: false },
              ].map((s) => (
                <div key={s.label} className="stat-card" style={{ minWidth: 110 }}>
                  <div className={s.isYield ? 'stat-value-yield' : 'stat-value'} style={{ fontFamily: "'DM Mono', monospace" }}>{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <MountainSVG variant="light" />
        </section>

        {/* Use-case cards */}
        <section className="py-20 px-6 md:px-12 lg:px-20" style={{ background: 'var(--frost)' }}>
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <p className="text-label mb-3">THREE WAYS TO USE YIELD DEED</p>
              <h2 className="text-h1" style={{ color: 'var(--granite)' }}>Your equity, put to work</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {useCases.map((uc) => (
                <div key={uc.badge} className="card flex flex-col" style={{ borderTop: `3px solid ${uc.accentColor}` }}>
                  <span className={`${uc.badgeClass} self-start mb-4`}>{uc.badge}</span>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 600, color: 'var(--granite)', marginBottom: '0.75rem', lineHeight: 1.25 }}>{uc.title}</h3>
                  <p className="text-body mb-6 flex-1" style={{ fontSize: '0.9375rem' }}>{uc.body}</p>
                  <div className="stat-card mb-6 flex items-end gap-3">
                    <div className={uc.statClass} style={{ fontFamily: "'DM Mono', monospace" }}>{uc.stat}</div>
                    <div className="stat-label pb-1">{uc.statLabel}</div>
                  </div>
                  <Link href={uc.href} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: 'var(--pine)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }} className="hover:!text-[var(--pine-lt)] group">
                    {uc.cta} <span className="group-hover:translate-x-0.5" style={{ transition: 'transform var(--t-base)', display: 'inline-block' }}>→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="relative overflow-hidden py-24 px-6 md:px-12 lg:px-20" style={{ background: 'var(--snow)' }}>
          <div className="max-w-4xl mx-auto relative z-10">
            <p className="text-label mb-3">THE PROCESS</p>
            <h2 className="text-h1 mb-14" style={{ color: 'var(--granite)' }}>Three steps to tokenized equity</h2>
            <div className="flex flex-col gap-10">
              {steps.map((step) => (
                <div key={step.num} className="flex gap-8 items-start">
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '2.5rem', fontWeight: 500, color: 'var(--mist)', lineHeight: 1, minWidth: 60, userSelect: 'none' }}>{step.num}</div>
                  <div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', fontWeight: 600, color: 'var(--granite)', marginBottom: '0.5rem' }}>{step.title}</h3>
                    <p className="text-body" style={{ fontSize: '0.9375rem' }}>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-14">
              <Link href="/how-it-works" className="btn-primary">Full Explainer →</Link>
            </div>
          </div>
          <MountainSVG variant="light" />
        </section>

        {/* Capital Flow */}
        <section className="py-20 px-6 md:px-12 lg:px-20" style={{ background: 'var(--frost)' }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-label mb-3">CAPITAL FLOW</p>
            <h2 className="text-h1 mb-5" style={{ color: 'var(--granite)' }}>Where the capital actually comes from</h2>
            <p className="text-body mb-12" style={{ fontSize: '0.9375rem', maxWidth: 600, lineHeight: 1.75 }}>
              Tokenization does not create cash. DeedStack standardizes verified home equity as collateral. Capital partners may advance cash against that collateral. That capital can then be used for liquidity, investment participation, or structured financing.
            </p>

            {/* Flow chain */}
            <div className="flex flex-col gap-0">
              {[
                {
                  step: '01',
                  label: 'Homeowner Equity',
                  desc: 'Verified net equity in a Wyoming-sited residential property — appraised, documented, and confirmed.',
                  color: 'var(--pine)',
                  colorLight: 'rgba(40,90,68,0.08)',
                  border: 'rgba(40,90,68,0.2)',
                },
                {
                  step: '02',
                  label: 'Tokenized Collateral',
                  desc: 'Equity is minted as DEED tokens under Wyoming\'s Digital Asset Statutes. Tokens serve as the collateral instrument — not a loan, not a sale.',
                  color: '#52B788',
                  colorLight: 'rgba(82,183,136,0.08)',
                  border: 'rgba(82,183,136,0.2)',
                },
                {
                  step: '03',
                  label: 'Capital Partner Advance',
                  desc: 'Accredited capital partners may advance cash against the tokenized collateral position. Advance terms, rates, and conditions are set at the fund level.',
                  color: 'var(--timber)',
                  colorLight: 'rgba(120,80,40,0.07)',
                  border: 'rgba(120,80,40,0.18)',
                },
                {
                  step: '04',
                  label: 'Fund Deployment & Liquidity',
                  desc: 'Advanced capital is deployed across the fund\'s investment strategy — generating rental income, appreciation exposure, and structured returns.',
                  color: 'var(--gold)',
                  colorLight: 'rgba(176,138,38,0.08)',
                  border: 'rgba(176,138,38,0.2)',
                },
                {
                  step: '05',
                  label: 'Net Distributions',
                  desc: 'Returns flow back to homeowners after capital cost, platform fees, and risk reserves are deducted. Distributions are variable — not guaranteed.',
                  color: 'var(--pine)',
                  colorLight: 'rgba(40,90,68,0.08)',
                  border: 'rgba(40,90,68,0.2)',
                },
              ].map((node, i, arr) => (
                <div key={node.step} className="flex gap-5 items-stretch">
                  {/* Left: step indicator + connector line */}
                  <div className="flex flex-col items-center" style={{ width: 48, flexShrink: 0 }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: '50%',
                      background: node.colorLight,
                      border: `1.5px solid ${node.border}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', fontWeight: 600, color: node.color }}>{node.step}</span>
                    </div>
                    {i < arr.length - 1 && (
                      <div style={{ width: 1.5, flex: 1, minHeight: 24, background: `linear-gradient(to bottom, ${node.border}, ${arr[i+1].border})`, margin: '4px 0' }} />
                    )}
                  </div>

                  {/* Right: content */}
                  <div className="pb-8" style={{ flex: 1, paddingTop: 6 }}>
                    <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', fontWeight: 600, color: 'var(--granite)', marginBottom: 6 }}>{node.label}</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'var(--stone)', lineHeight: 1.7 }}>{node.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Disclaimer note */}
            <div className="mt-4 rounded-xl px-6 py-4" style={{ background: 'var(--white)', border: '1px solid var(--mist)', borderLeft: '3px solid var(--gold)' }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', color: 'var(--stone)', lineHeight: 1.7 }}>
                <strong style={{ color: 'var(--granite)' }}>Important:</strong> Capital advances, interest rates, advance-to-value ratios, and distribution timing are subject to capital partner terms, fund performance, legal review, and regulatory approval. Returns are variable and not guaranteed. This is not an offer to lend or invest.
              </p>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section style={{ background: 'var(--obsidian)' }} className="relative overflow-hidden py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <p className="text-label mb-4" style={{ color: 'var(--slate)' }}>BUILT IN WYOMING. BUILT FOR HOMEOWNERS.</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 600, color: 'var(--white)', marginBottom: '1.25rem', lineHeight: 1.2 }}>
              The deed stays in your name.<br />The yield comes to you.
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.0625rem', lineHeight: 1.75, color: 'var(--slate)', maxWidth: 560, margin: '0 auto 2.5rem' }}>
              Wyoming law gives homeowners the strongest token rights in the nation. Reg D 506(c) keeps us compliant. The DeedStack fund is led by the former CTO of BFAM Partners — the team&apos;s experience includes institutional trading systems and fund infrastructure associated with BFAM. DeedStack&apos;s fund is new and has no independent operating track record.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/interest-list" className="btn-primary" style={{ padding: '13px 28px', fontSize: 15 }}>Join the Waitlist</Link>
              <Link href="/regulation" style={{ display: 'inline-flex', alignItems: 'center', padding: '13px 28px', fontSize: 15, fontFamily: "'DM Sans', sans-serif", fontWeight: 500, color: 'var(--slate)', textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.12)', borderRadius: 'var(--r-md)' }} className="hover:!border-[rgba(255,255,255,0.3)] hover:!text-white">
                Wyoming Advantage
              </Link>
            </div>
          </div>
          <MountainSVG variant="dark" />
        </section>

        {/* Footer */}
        <Footer />

      </main>
    </>
  );
}
