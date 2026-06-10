import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import MountainSVG from '@/components/MountainSVG';
import YieldCalculator from '@/components/YieldCalculator';
import Link from 'next/link';
import InvestorGate from '@/components/InvestorGate';

export const metadata: Metadata = {
  title: 'Yield - Institutional Fund Access via Home Equity',
  description: 'DeedStack targets an 8% gross annual return on pledged equity tokens. The fund is new with no operating history. Returns are variable and not guaranteed. Accredited participants only.',
};

const teamBackground = [
  { metric: 'Fund manager institutional background', value: 'BFAM Partners' },
  { metric: 'Institutional fund infrastructure built', value: 'Yes' },
  { metric: 'Peak AUM at associated institution', value: '$5B+' },
  { metric: 'DeedStack fund operating history', value: 'None yet' },
  { metric: 'DeedStack fund target gross return', value: '8%' },
  { metric: 'Minimum via DeedStack', value: 'Your equity' },
];

export default function YieldPage() {
  return (
    <InvestorGate>
      <Nav />
      <main style={{ background: 'var(--snow)' }}>

        {/* Hero */}
        <section className="relative overflow-hidden pt-[128px] pb-[80px] px-6 md:px-12 lg:px-20" style={{ background: 'var(--snow)' }}>
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="badge-yield">FUND STRATEGY</span>
              <span className="badge-active">INSTITUTIONAL-GRADE</span>
            </div>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: 'var(--obsidian)',
              marginBottom: '1.25rem',
            }}>
              Institutional returns.<br />
              <span style={{ color: 'var(--gold)' }}>No $5M minimum.</span>
            </h1>
            <p className="text-body" style={{ fontSize: '1.0625rem', maxWidth: 580, lineHeight: 1.75 }}>
              The DeedStack fund is led by the team behind BFAM Partners — the institutional
              trading systems and fund infrastructure are their background. The fund is new,
              targets an 8% gross annual return, and has no operating history. Your home equity
              is your entry point. Returns are variable and not guaranteed.
            </p>
          </div>
          <MountainSVG variant="light" />
        </section>

        {/* BFAM Background */}
        <section className="py-20 px-6 md:px-12 lg:px-20" style={{ background: 'var(--frost)' }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Copy */}
              <div>
                <p className="text-label mb-4">TEAM BACKGROUND</p>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  fontWeight: 600,
                  color: 'var(--granite)',
                  marginBottom: '1.5rem',
                  lineHeight: 1.2,
                }}>
                  Institutional fund infrastructure. New fund with no operating history.
                </h2>

                <div className="flex flex-col gap-5">
                  <p className="text-body" style={{ fontSize: '0.9375rem' }}>
                    BFAM Partners was a Hong Kong-based institutional hedge fund that scaled to over
                    $5 billion in assets under management. Iosif Ziman served as Co-Founder and CTO,
                    building the proprietary trading systems and fund infrastructure over his tenure.
                    That operational and technical experience informs the design of DeedStack&apos;s fund.
                  </p>
                  <p className="text-body" style={{ fontSize: '0.9375rem' }}>
                    <strong>DeedStack&apos;s fund is new and has no independent operating track record.</strong> Historical
                    references to BFAM Partners are provided solely as background on the fund manager&apos;s
                    professional experience — they are not a representation of DeedStack fund performance,
                    which has no audited history. The fund targets an{' '}
                    <span style={{ fontFamily: "'DM Mono', monospace", color: 'var(--gold)', fontWeight: 500 }}>8% gross annual return</span>{' '}
                    — variable, not guaranteed, and dependent on market conditions and fund execution.
                  </p>
                  <p className="text-body" style={{ fontSize: '0.9375rem' }}>
                    Phase 1 is limited to verified accredited participants and select Wyoming pilot properties.
                    Broader homeowner access would require additional regulatory qualification, likely including
                    a Reg A+ or other public/private exempt structure.
                  </p>
                  <p className="text-body" style={{ fontSize: '0.9375rem' }}>
                    Markets are volatile. Short-term swings are real, and no investment is without risk.
                    DeedStack is designed for participants who want to put dormant equity to work in an
                    institutional-grade fund structure — with eyes open to the fact that this is a new
                    fund, not a continuation of any prior performance record.
                  </p>
                  <p style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '0.75rem',
                    color: 'var(--slate)',
                    lineHeight: 1.65,
                    paddingTop: '0.5rem',
                    borderTop: '1px solid var(--mist)',
                  }}>
                    The team&apos;s experience includes institutional trading systems and fund infrastructure
                    associated with BFAM Partners. DeedStack&apos;s fund strategy is new and has no independent
                    operating track record. Historical performance references are provided only as background
                    on team experience and are not DeedStack results. Past performance of any prior fund
                    does not guarantee future results.
                  </p>
                </div>
              </div>

              {/* Track record stats */}
              <div>
                <p className="text-label mb-4">TEAM BACKGROUND</p>
                <div className="card overflow-hidden" style={{ padding: 0 }}>
                  {teamBackground.map((row, i) => (
                    <div
                      key={row.metric}
                      className="flex justify-between items-center px-5 py-4"
                      style={{
                        borderBottom: i < teamBackground.length - 1 ? '1px solid var(--mist)' : 'none',
                        background: i % 2 === 0 ? 'var(--white)' : 'var(--snow)',
                      }}
                    >
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8125rem', color: 'var(--stone)' }}>
                        {row.metric}
                      </span>
                      <span style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: row.value === 'Your equity' ? 'var(--pine)' : row.value === 'None yet' ? '#c0392b' : 'var(--granite)',
                      }}>
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Access Problem */}
        <section className="py-16 px-6 md:px-12 lg:px-20" style={{ background: 'var(--frost)' }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-label mb-3">THE PROBLEM WE SOLVE</p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)',
              fontWeight: 600,
              color: 'var(--granite)',
              marginBottom: '1.5rem',
            }}>
              Your equity was never allowed to work this hard
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  badge: 'THE OLD WAY',
                  badgeClass: 'badge-tokenized',
                  title: 'HELOC + Self-Invest',
                  body: 'Borrow at 8% against your equity, then try to self-invest. Pay interest while you wait for returns. Net position: deeply in the hole before markets even move.',
                  footnote: '−$56K/yr interest on $700K borrowed',
                },
                {
                  badge: 'ALSO UNAVAILABLE',
                  badgeClass: 'badge-tokenized',
                  title: 'Direct Fund Access',
                  body: 'Institutional fund structures typically require $5M+ in liquid capital — not home equity. Most homeowners have been structurally excluded from this type of vehicle.',
                  footnote: '$5M+ liquid capital required',
                },
                {
                  badge: 'THE DEEDRIVER WAY',
                  badgeClass: 'badge-yield',
                  title: 'Tokenize & Earn',
                  body: 'Designed as a non-recourse token pledge structure, not a traditional mortgage or HELOC. No $5M minimum. Your equity tokens access the same institutional fund strategy. Final treatment depends on transaction documents, jurisdiction, lender/mortgage consent, and regulatory review.',
                  footnote: '+$72K+ net/yr on $1M home (illustrative)',
                },
              ].map((card) => (
                <div key={card.title} className="card flex flex-col">
                  <span className={`${card.badgeClass} self-start mb-3`}>{card.badge}</span>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: 'var(--granite)',
                    marginBottom: '0.625rem',
                  }}>
                    {card.title}
                  </h3>
                  <p className="text-body flex-1" style={{ fontSize: '0.875rem' }}>{card.body}</p>
                  <p style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '0.75rem',
                    color: card.badgeClass === 'badge-yield' ? 'var(--gold)' : 'var(--slate)',
                    marginTop: '1rem',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid var(--mist)',
                  }}>
                    {card.footnote}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-20 px-6 md:px-12 lg:px-20" style={{ background: 'var(--snow)' }}>
          <div className="max-w-5xl mx-auto">
            <p className="text-label mb-3">YIELD CALCULATOR</p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
              fontWeight: 600,
              color: 'var(--granite)',
              marginBottom: '0.5rem',
            }}>
              See what your equity earns
            </h2>
            <p className="text-body mb-10" style={{ fontSize: '0.9375rem', maxWidth: 520 }}>
              Enter your home value and existing mortgage. Adjust the return rate slider across
              the fund&apos;s 4–8% target range and see your 10, 20, and 30-year yield projection.
            </p>
            <YieldCalculator />
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-24 px-6 md:px-12 lg:px-20" style={{ background: 'var(--obsidian)' }}>
          <div className="max-w-3xl mx-auto relative z-10 text-center">
            <p className="text-label mb-4" style={{ color: 'var(--slate)' }}>READY TO BEGIN</p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
              fontWeight: 600,
              color: 'var(--white)',
              marginBottom: '1rem',
              letterSpacing: '-0.01em',
              lineHeight: 1.2,
            }}>
              Your equity. Institutional returns.
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: 'var(--slate)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              Tokenize your equity, pledge your tokens, and access quarterly distributions
              from an institutional fund structure built by the team behind BFAM Partners.
              New fund. No operating history. Returns are variable and not guaranteed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/how-it-works" className="btn-primary" style={{ padding: '13px 28px', fontSize: 15 }}>
                How It Works
              </Link>
              <Link href="/regulation" style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '13px 28px', fontSize: 15,
                fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
                color: 'var(--slate)', textDecoration: 'none',
                border: '1.5px solid rgba(255,255,255,0.12)', borderRadius: 'var(--r-md)',
              }} className="hover:!border-[rgba(255,255,255,0.3)] hover:!text-white">
                Regulation →
              </Link>
            </div>
            <p className="mt-8" style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: 'var(--slate)', lineHeight: 1.7 }}>
              Currently available to accredited investors in Wyoming. This is not investment advice.
              Past performance does not guarantee future results.
            </p>
          </div>
          <MountainSVG variant="dark" />
        </section>

      </main>
    </InvestorGate>
  );
}
