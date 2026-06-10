import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import MountainSVG from '@/components/MountainSVG';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'DeedStack — Real Estate Tokenization Platform',
  description: 'DeedStack is a three-layer real estate tokenization platform: tokenize properties into DEED tokens, access institutional-grade yield, and participate in compliant secondary transfer. Wyoming-incorporated. Accredited investors only.',
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const ecosystem = [
  {
    layer: '01',
    icon: '⬡',
    title: 'Tokenization Platform',
    subtitle: 'Asset Layer',
    color: 'var(--pine)',
    colorLight: 'rgba(40,90,68,0.15)',
    points: [
      'Property digitization & DEED token minting',
      'Smart contract issuance and escrow',
      'Multi-jurisdiction regulatory compliance',
      'Fractional ownership structure',
      'Deed-retained, non-recourse pledge design',
    ],
  },
  {
    layer: '02',
    icon: '◎',
    title: 'AI Intelligence Layer',
    subtitle: 'Intelligence Layer',
    color: '#52B788',
    colorLight: 'rgba(82,183,136,0.12)',
    points: [
      'Agentic deal sourcing & property matching',
      'Automated KYC / AML verification',
      'Investor risk profiling & scoring',
      'ML-based portfolio optimization',
      'Predictive valuation & lead scoring',
    ],
  },
  {
    layer: '03',
    icon: '◈',
    title: 'DEX Marketplace',
    subtitle: 'Liquidity Layer',
    color: 'var(--gold)',
    colorLight: 'rgba(176,138,38,0.12)',
    points: [
      'Secondary token trading on-chain',
      'Real-time price discovery',
      'Designed for compliant secondary transfer — subject to securities restrictions and eligibility checks',
      'Decentralized, permissioned exchange',
      'Sub-1.5% platform fee structure',
    ],
  },
];

const products = [
  {
    tag: 'FOR HOMEOWNERS',
    tagColor: 'var(--pine)',
    tagBg: 'rgba(40,90,68,0.12)',
    title: 'Yield Deed',
    desc: 'Tokenize your residential equity and earn an 8% target annual yield — while staying in your home and retaining your deed. A non-recourse pledge structure designed as an alternative to HELOCs, reverse mortgages, and home equity investment agreements.',
    stats: [['8%', 'Target APY'], ['$0', 'Broker Fees'], ['100%', 'Deed Retained']],
    cta: 'Explore Yield Deed',
    href: '/yield-deed',
    accentColor: 'var(--pine)',
  },
  {
    tag: 'FOR INVESTORS',
    tagColor: 'var(--gold)',
    tagBg: 'rgba(176,138,38,0.12)',
    title: 'Marketplace',
    desc: 'Buy fractional DEED tokens in Wyoming income-producing properties. Access institutional-grade real estate from $100. No $1M minimums. Designed for compliant secondary transfer, subject to securities restrictions, eligibility checks, and available marketplace liquidity.',
    stats: [['$100', 'Min. Investment'], ['6–8%', 'Rental Yield'], ['<1.5%', 'Platform Fee']],
    cta: 'Browse Listings',
    href: '/marketplace',
    accentColor: 'var(--gold)',
  },
];

const problems = [
  { stat: '93%', label: 'of institutional-grade real estate remains inaccessible to retail investors' },
  { stat: '$1M+', label: 'typical minimum investment for direct real estate participation' },
  { stat: '7–10 yr', label: 'average capital lockup in traditional real estate funds' },
  { stat: '18–24 mo', label: 'traditional capital formation cycles for property developers' },
];

const platformStats = [
  { value: '6',      label: 'Properties Tokenized' },
  { value: '$7.1M',  label: 'Total Value on Platform' },
  { value: '711K',   label: 'DEED Tokens Issued' },
  { value: '$100',   label: 'Minimum Investment' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PlatformPage() {
  return (
    <>
      <Nav />
      <main style={{ background: 'var(--obsidian)' }}>

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section style={{ background: 'var(--obsidian)', paddingTop: 128, paddingBottom: 80 }} className="px-6 md:px-12 lg:px-20 relative overflow-hidden">
          {/* Background grid */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
          <MountainSVG variant="dark" />

          <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span style={{ background: 'rgba(82,183,136,0.15)', color: '#52B788', borderRadius: 'var(--r-pill)', padding: '4px 12px', fontSize: '0.7rem', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: '0.08em' }}>WYOMING-INCORPORATED</span>
              <span style={{ background: 'rgba(176,138,38,0.15)', color: 'var(--gold-lt)', borderRadius: 'var(--r-pill)', padding: '4px 12px', fontSize: '0.7rem', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: '0.08em' }}>REG D 506(c)</span>
              <span style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)', borderRadius: 'var(--r-pill)', padding: '4px 12px', fontSize: '0.7rem', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: '0.08em' }}>PILOT PHASE</span>
            </div>

            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 700, color: 'var(--white)', lineHeight: 1.05, letterSpacing: '-0.025em', marginBottom: 24 }}>
              Real estate.<br />
              <span style={{ color: '#52B788' }}>Tokenized.</span><br />
              Accessible.
            </h1>

            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.1rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.75, maxWidth: 580, marginBottom: 40 }}>
              DeedStack is a three-layer tokenization platform that converts income-producing real estate into DEED tokens — enabling fractional ownership, institutional yield, and compliant secondary transfer for verified accredited participants.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <Link href="/marketplace" style={{ background: 'var(--pine)', color: '#fff', borderRadius: 'var(--r-md)', padding: '13px 28px', fontSize: 15, fontWeight: 500, fontFamily: "'DM Sans', sans-serif", textDecoration: 'none', transition: 'background 200ms' }} className="hover:!bg-[#3A7A5C]">
                Browse Marketplace →
              </Link>
              <Link href="/yield-deed" style={{ background: 'transparent', color: 'rgba(255,255,255,0.7)', borderRadius: 'var(--r-md)', padding: '13px 28px', fontSize: 15, fontWeight: 500, fontFamily: "'DM Sans', sans-serif", textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.15)', transition: 'border-color 200ms, color 200ms' }} className="hover:!border-[rgba(255,255,255,0.4)] hover:!text-white">
                Yield Deed
              </Link>
            </div>

            {/* Platform stats */}
            <div className="flex flex-wrap gap-6">
              {platformStats.map((s) => (
                <div key={s.label} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 'var(--r-md)', padding: '16px 20px', minWidth: 130 }}>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '1.5rem', fontWeight: 600, color: '#52B788', lineHeight: 1 }}>{s.value}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', marginTop: 4, letterSpacing: '0.02em' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── The Problem ───────────────────────────────────────────────────── */}
        <section style={{ background: 'var(--granite)', borderTop: '1px solid rgba(255,255,255,0.06)' }} className="px-6 md:px-12 lg:px-20 py-20">
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)', marginBottom: 10 }}>THE PROBLEM</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 600, color: 'var(--white)', marginBottom: 12, lineHeight: 1.2 }}>
              Institutional real estate has been a closed market.
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 560, marginBottom: 40 }}>
              93% of institutional-grade real estate remains inaccessible to retail investors — locked behind $1M+ minimums, 7–10 year illiquidity windows, and 6–12 month settlement cycles. Property developers face 18–24 month capital formation timelines targeting only UHNW buyers. DeedStack changes that.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {problems.map((p) => (
                <div key={p.stat} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 'var(--r-lg)', padding: '20px 18px' }}>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '1.6rem', fontWeight: 600, color: '#52B788', marginBottom: 8 }}>{p.stat}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>{p.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Three-Layer Ecosystem ─────────────────────────────────────────── */}
        <section style={{ background: 'var(--obsidian)', borderTop: '1px solid rgba(255,255,255,0.06)' }} className="px-6 md:px-12 lg:px-20 py-24 relative overflow-hidden">
          <MountainSVG variant="dark" />
          <div style={{ maxWidth: 960, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)', marginBottom: 10 }}>THE ECOSYSTEM</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 600, color: 'var(--white)', lineHeight: 1.2 }}>
                Three integrated layers.<br />One unified platform.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {ecosystem.map((e) => (
                <div key={e.layer} style={{ background: e.colorLight, border: `1px solid ${e.color}30`, borderRadius: 'var(--r-xl)', padding: '28px 24px', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: e.color, letterSpacing: '0.1em', opacity: 0.7 }}>{e.layer}</span>
                    <div style={{ flex: 1, height: 1, background: `${e.color}20` }} />
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em' }}>{e.subtitle.toUpperCase()}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', fontWeight: 600, color: 'var(--white)', marginBottom: 16 }}>{e.title}</h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 'auto' }}>
                    {e.points.map((pt) => (
                      <li key={pt} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                        <span style={{ color: e.color, fontSize: '0.75rem', marginTop: 3, flexShrink: 0 }}>▸</span>
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Connector line visual */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 0, margin: '36px 0 0', opacity: 0.35 }}>
              <div style={{ height: 1, width: 80, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4))' }} />
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,0.4)' }} />
              <div style={{ height: 1, width: 160, background: 'rgba(255,255,255,0.2)' }} />
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,0.4)' }} />
              <div style={{ height: 1, width: 80, background: 'linear-gradient(90deg, rgba(255,255,255,0.4), transparent)' }} />
            </div>
            <p style={{ textAlign: 'center', fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)', marginTop: 10, letterSpacing: '0.05em' }}>
              AI INTELLIGENCE LAYER CONNECTS ALL THREE
            </p>
          </div>
        </section>

        {/* ── Two Products ─────────────────────────────────────────────────── */}
        <section style={{ background: 'var(--granite)', borderTop: '1px solid rgba(255,255,255,0.06)' }} className="px-6 md:px-12 lg:px-20 py-24">
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <div style={{ marginBottom: 48 }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)', marginBottom: 10 }}>TWO PRODUCTS. ONE PLATFORM.</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 600, color: 'var(--white)', lineHeight: 1.2 }}>
                Whether you own property or want to invest in it.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {products.map((p) => (
                <div key={p.title} style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${p.accentColor}25`, borderRadius: 'var(--r-xl)', padding: '32px 28px', display: 'flex', flexDirection: 'column' }}>
                  <span style={{ background: p.tagBg, color: p.tagColor, borderRadius: 'var(--r-pill)', padding: '3px 10px', fontSize: '0.68rem', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: '0.06em', display: 'inline-block', marginBottom: 16, alignSelf: 'flex-start' }}>{p.tag}</span>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', fontWeight: 600, color: 'var(--white)', marginBottom: 14 }}>{p.title}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: 24, flex: 1 }}>{p.desc}</p>
                  <div className="flex gap-4 mb-24px" style={{ marginBottom: 24 }}>
                    {p.stats.map(([val, lbl]) => (
                      <div key={lbl} style={{ flex: 1 }}>
                        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '1.2rem', fontWeight: 600, color: p.accentColor }}>{val}</p>
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>{lbl}</p>
                      </div>
                    ))}
                  </div>
                  <Link href={p.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', fontWeight: 500, color: p.accentColor, textDecoration: 'none' }}>
                    {p.cta} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Wyoming Advantage bar ─────────────────────────────────────────── */}
        <section style={{ background: 'rgba(40,90,68,0.15)', borderTop: '1px solid rgba(40,90,68,0.3)', borderBottom: '1px solid rgba(40,90,68,0.3)' }} className="px-6 md:px-12 lg:px-20 py-14">
          <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', letterSpacing: '0.1em', color: 'rgba(82,183,136,0.7)', marginBottom: 8 }}>REGULATORY FOUNDATION</p>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.35rem', fontWeight: 600, color: 'var(--white)', marginBottom: 8 }}>
                Built on Wyoming&apos;s digital asset statutes.
              </h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, maxWidth: 460 }}>
                Wyoming offers the strongest token property rights in the United States — DAO LLC structure, blockchain-native digital asset laws, and a regulatory environment purpose-built for tokenized real estate.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {[
                'Wyoming Digital Asset Statutes',
                'DAO LLC Entity Framework',
                'Reg D 506(c) Compliance',
                'Qualified Custody Solutions',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: '#52B788', fontSize: '0.8rem' }}>✓</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.83rem', color: 'rgba(255,255,255,0.6)' }}>{item}</span>
                </div>
              ))}
              <Link href="/regulation" style={{ marginTop: 4, fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', color: '#52B788', textDecoration: 'none' }}>
                Wyoming regulatory framework →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────────────────────────────────── */}
        <section style={{ background: 'var(--obsidian)' }} className="px-6 md:px-12 lg:px-20 py-20 text-center relative overflow-hidden">
          <MountainSVG variant="dark" />
          <div style={{ maxWidth: 540, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 600, color: 'var(--white)', marginBottom: 16, lineHeight: 1.2 }}>
              Ready to participate?
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 32 }}>
              Join our waitlist for the Wyoming pilot and receive your free Home Equity Opportunity Report. No commitment. No credit card required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/interest-list" style={{ background: 'var(--pine)', color: '#fff', borderRadius: 'var(--r-md)', padding: '13px 28px', fontSize: 15, fontWeight: 500, fontFamily: "'DM Sans', sans-serif", textDecoration: 'none' }} className="hover:!bg-[#3A7A5C]">
                Join the Waitlist →
              </Link>
              <Link href="/marketplace" style={{ background: 'transparent', color: 'rgba(255,255,255,0.65)', borderRadius: 'var(--r-md)', padding: '13px 28px', fontSize: 15, fontWeight: 500, fontFamily: "'DM Sans', sans-serif", textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.15)' }} className="hover:!text-white hover:!border-[rgba(255,255,255,0.35)]">
                Browse Marketplace
              </Link>
            </div>
          </div>
        </section>

        {/* ── Footer ────────────────────────────────────────────────────────── */}
        <Footer />

      </main>
    </>
  );
}
