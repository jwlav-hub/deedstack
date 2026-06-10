import type { Metadata } from 'next';
import InvestorGate from '@/components/InvestorGate';
import Nav from '@/components/Nav';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Data Room - DeedStack',
  description: 'Fund strategy, regulation, simulations, and partner architecture for accredited investors and family offices. Reg D 506(c).',
};

const investorSections = [
  {
    label: 'FUND',
    title: 'Fund Strategy',
    desc: 'Target returns, fee structure, deployment mechanics, and the team background behind the DeedStack Capital fund.',
    href: '/yield',
    color: 'var(--gold)',
    colorBg: 'rgba(176,138,38,0.08)',
  },
  {
    label: 'LEGAL',
    title: 'Regulation',
    desc: 'Reg D 506(c) framework, Wyoming Digital Asset Statutes, token classification, and compliance roadmap.',
    href: '/regulation',
    color: 'var(--pine)',
    colorBg: 'rgba(40,90,68,0.08)',
  },
  {
    label: 'TEAM',
    title: 'About & Partners',
    desc: 'Founding team backgrounds, institutional partners, banking infrastructure, and legal counsel.',
    href: '/about',
    color: 'var(--pine)',
    colorBg: 'rgba(40,90,68,0.08)',
  },
];

export default function InvestorsPage() {
  return (
    <InvestorGate>
      <Nav />
      <main style={{ background: 'var(--obsidian)', minHeight: '100vh' }}>

        {/* Hero */}
        <section className="pt-[128px] pb-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <div style={{ marginBottom: 16 }}>
              <span style={{
                background: 'rgba(176,138,38,0.15)',
                color: 'var(--gold)',
                borderRadius: 'var(--r-pill)',
                padding: '4px 14px',
                fontSize: '0.68rem',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                letterSpacing: '0.1em',
              }}>
                DATA ROOM
              </span>
            </div>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: 'var(--white)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}>
              Data Room.<br />
              <span style={{ color: 'var(--gold)' }}>Diligence Materials.</span>
            </h1>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.75,
              maxWidth: 540,
              marginBottom: '0.75rem',
            }}>
              DeedStack&apos;s fund strategy, legal structure, simulations, and partner infrastructure
              — consolidated for accredited investors and qualified family offices.
            </p>
            <p style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.7rem',
              color: 'rgba(255,255,255,0.2)',
              lineHeight: 1.6,
            }}>
              All materials are for informational purposes only and do not constitute an offer to sell or
              solicitation to buy any security. Reg D 506(c) — accredited investors only.
            </p>
          </div>
        </section>

        {/* Downloads */}
        <section className="pb-12 px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>DOCUMENTS</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
              {[
                { label: 'INVESTOR DECK', title: 'Seed Deck', desc: 'Platform overview, fund strategy, team, and capital ask. PowerPoint format.', file: '/DeedStack_Seed_Deck.pptx', ext: 'PPTX', color: 'var(--gold)', colorBg: 'rgba(176,138,38,0.08)' },
                { label: 'WHITEPAPER', title: 'DeedStack Whitepaper', desc: 'Technical and legal architecture of the tokenization platform. PDF format.', file: '/DeedStack_Whitepaper.pdf', ext: 'PDF', color: '#52B788', colorBg: 'rgba(82,183,136,0.08)' },
              ].map((doc) => (
                <a key={doc.file} href={doc.file} download
                  style={{ display: 'flex', alignItems: 'center', gap: 20, background: doc.colorBg, border: '1px solid rgba(255,255,255,0.06)', borderRadius: 'var(--r-lg)', padding: '1.25rem 1.5rem', textDecoration: 'none', transition: 'border-color 200ms' }}
                  className="hover:!border-[rgba(255,255,255,0.14)]"
                >
                  {/* File type badge */}
                  <div style={{ flexShrink: 0, width: 48, height: 48, background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', fontWeight: 700, color: doc.color, letterSpacing: '0.05em' }}>{doc.ext}</span>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', color: doc.color, marginBottom: 4 }}>{doc.label}</p>
                    <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', fontWeight: 600, color: 'var(--white)', marginBottom: 2 }}>{doc.title}</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.5 }}>{doc.desc}</p>
                  </div>
                  {/* Download arrow */}
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, opacity: 0.4 }}>
                    <path d="M9 3v9m0 0l-3-3m3 3l3-3M3 15h12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Materials grid */}
        <section className="pb-24 px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>PLATFORM</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {investorSections.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  style={{
                    display: 'block',
                    background: s.colorBg,
                    border: `1px solid rgba(255,255,255,0.06)`,
                    borderRadius: 'var(--r-lg)',
                    padding: '1.5rem',
                    textDecoration: 'none',
                    transition: 'border-color 200ms, background 200ms',
                  }}
                  className="hover:!border-[rgba(255,255,255,0.14)]"
                >
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    color: s.color,
                    marginBottom: 10,
                  }}>
                    {s.label}
                  </p>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    color: 'var(--white)',
                    marginBottom: '0.6rem',
                    lineHeight: 1.2,
                  }}>
                    {s.title}
                  </h3>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.8125rem',
                    color: 'rgba(255,255,255,0.4)',
                    lineHeight: 1.65,
                  }}>
                    {s.desc}
                  </p>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.8125rem',
                    color: s.color,
                    marginTop: '1rem',
                  }}>
                    View →
                  </p>
                </Link>
              ))}
            </div>

            {/* Dashboard CTA */}
            <div style={{
              marginTop: '2.5rem',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 'var(--r-lg)',
              padding: '1.5rem 2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 16,
            }}>
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', marginBottom: 6 }}>
                  PORTFOLIO DASHBOARD
                </p>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 600, color: 'var(--white)' }}>
                  Pilot participant account view
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8125rem', color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>
                  Holdings, projections, and token position summary.
                </p>
              </div>
              <Link href="/dashboard" style={{
                background: 'rgba(255,255,255,0.06)',
                color: 'var(--white)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 'var(--r-md)',
                padding: '10px 20px',
                fontSize: 13,
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}>
                Open Dashboard →
              </Link>
            </div>

            {/* Back to public site */}
            <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
              <Link href="/" style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.25)',
                textDecoration: 'none',
              }}>
                ← Back to DeedStack.com
              </Link>
            </div>
          </div>
        </section>

      </main>
    </InvestorGate>
  );
}
