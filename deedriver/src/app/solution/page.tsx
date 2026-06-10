import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import MountainSVG from '@/components/MountainSVG';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Solution — DeedStack',
  description: 'DeedStack connects homeowners who want to unlock equity (supply) with accredited investors who want fractional real estate exposure (demand) — through a tokenized, AI-powered platform.',
};

const supplySide = [
  {
    icon: '🏡',
    title: 'Tokenize Your Equity',
    body: 'Homeowners convert verified net equity into DEED tokens. The deed stays in your name. No debt. No sale. No broker.',
  },
  {
    icon: '📋',
    title: 'Non-Recourse Pledge',
    body: 'Tokens are pledged as collateral under Wyoming\'s Digital Asset Statutes — a structure that does not trigger the due-on-sale clause or create a traditional lien.',
  },
  {
    icon: '💰',
    title: 'Earn Yield',
    body: 'Pledge tokens to the fund and receive quarterly yield distributions targeting 8% annually. Redeem anytime when you\'re ready.',
  },
];

const demandSide = [
  {
    icon: '🪙',
    title: 'Buy DEED Tokens',
    body: 'Accredited investors acquire fractional ownership in Wyoming income-producing properties — starting from $100, with no $1M minimums. Secondary transfer is designed for compliance, subject to securities restrictions and eligible counterparty requirements.',
  },
  {
    icon: '📈',
    title: 'Access Institutional Returns',
    body: 'Combined rental income, appreciation, and fund yield targeting 10–14% projected total return. Institutional fund infrastructure built by the team behind BFAM Partners. New fund — no operating history.',
  },
  {
    icon: '🔄',
    title: 'Secondary Transfer',
    body: 'DEED tokens are designed for compliant peer-to-peer secondary transfer — subject to securities restrictions, accredited investor eligibility checks, and available marketplace liquidity. Sub-1.5% platform fee.',
  },
];

const flowSteps = [
  { side: 'SUPPLY', label: 'Homeowner tokenizes equity', color: 'var(--pine)', align: 'left' },
  { side: 'PLATFORM', label: 'AI layer verifies, values & mints DEED tokens', color: '#52B788', align: 'center' },
  { side: 'DEMAND', label: 'Investor acquires tokens & earns returns', color: 'var(--gold)', align: 'right' },
];

export default function SolutionPage() {
  return (
    <>
      <Nav />
      <main style={{ background: 'var(--obsidian)' }}>

        {/* ── Hero ───────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden pt-[128px] pb-0 px-6 md:px-12 lg:px-20" style={{ background: 'var(--obsidian)' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
          <MountainSVG variant="dark" />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-end">

              {/* Left: copy */}
              <div className="pb-16 md:pb-24">
                <div className="flex flex-wrap gap-3 mb-7">
                  <span style={{ background: 'rgba(82,183,136,0.15)', color: '#52B788', borderRadius: 'var(--r-pill)', padding: '4px 12px', fontSize: '0.68rem', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: '0.08em' }}>THE SOLUTION</span>
                  <span style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.45)', borderRadius: 'var(--r-pill)', padding: '4px 12px', fontSize: '0.68rem', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: '0.08em' }}>WYOMING PILOT</span>
                </div>
                <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 700, color: 'var(--white)', lineHeight: 1.08, letterSpacing: '-0.025em', marginBottom: 24 }}>
                  Supply meets demand.<br />
                  <span style={{ color: '#52B788' }}>On-chain.</span>
                </h1>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.0625rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, maxWidth: 480, marginBottom: 36 }}>
                  DeedStack connects homeowners who want to unlock equity with investors who want institutional real estate returns — without brokers, without $1M minimums. The AI layer handles verification, valuation, and token issuance between both sides. Secondary transfer is designed for compliance, not guaranteed liquidity.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/how-it-works" style={{ background: 'var(--pine)', color: '#fff', borderRadius: 'var(--r-md)', padding: '12px 24px', fontSize: 14, fontWeight: 500, fontFamily: "'DM Sans', sans-serif", textDecoration: 'none' }} className="hover:!bg-[#3A7A5C]">
                    I&apos;m a Homeowner →
                  </Link>
                  <Link href="/marketplace" style={{ background: 'rgba(212,167,80,0.12)', color: 'var(--gold-lt)', borderRadius: 'var(--r-md)', padding: '12px 24px', fontSize: 14, fontWeight: 500, fontFamily: "'DM Sans', sans-serif", textDecoration: 'none', border: '1px solid rgba(212,167,80,0.25)' }} className="hover:!bg-[rgba(212,167,80,0.2)]">
                    I&apos;m an Investor →
                  </Link>
                </div>
              </div>

              {/* Right: skier graphic — flush to bottom */}
              <div className="relative flex justify-center md:justify-end items-end" style={{ minHeight: 380 }}>
                <Image
                  src="/skier.png"
                  alt="AI skier — DeedStack speed and intelligence"
                  width={420}
                  height={480}
                  style={{ objectFit: 'contain', objectPosition: 'bottom', filter: 'drop-shadow(0 0 40px rgba(82,183,136,0.18))' }}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Flow bar ───────────────────────────────────────────────────────── */}
        <section style={{ background: 'var(--granite)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }} className="px-6 md:px-12 lg:px-20 py-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-3 gap-4 items-center">
              {flowSteps.map((step, i) => (
                <div key={step.side} className={`flex flex-col ${i === 1 ? 'items-center text-center' : i === 0 ? 'items-start' : 'items-end text-right'}`}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.62rem', letterSpacing: '0.12em', color: step.color, marginBottom: 6 }}>{step.side}</span>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>{step.label}</p>
                  {i < 2 && (
                    <div style={{ position: 'absolute' }} />
                  )}
                </div>
              ))}
            </div>
            {/* Connector */}
            <div className="flex items-center gap-0 mt-6 opacity-30">
              <div style={{ height: 1, flex: 1, background: 'linear-gradient(90deg, var(--pine), #52B788)' }} />
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#52B788', flexShrink: 0 }} />
              <div style={{ height: 1, flex: 1, background: 'linear-gradient(90deg, #52B788, var(--gold))' }} />
            </div>
          </div>
        </section>

        {/* ── Supply & Demand ────────────────────────────────────────────────── */}
        <section className="px-6 md:px-12 lg:px-20 py-20" style={{ background: 'var(--obsidian)' }}>
          <div className="max-w-6xl mx-auto">

            <div className="text-center mb-14">
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.3)', marginBottom: 10 }}>HOW IT WORKS</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 600, color: 'var(--white)', lineHeight: 1.2 }}>
                Two sides. One platform.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">

              {/* Supply side */}
              <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(40,90,68,0.4)', background: 'rgba(40,90,68,0.08)' }}>
                <div className="px-7 py-5" style={{ borderBottom: '1px solid rgba(40,90,68,0.3)', background: 'rgba(40,90,68,0.12)' }}>
                  <div className="flex items-center gap-3">
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--pine)', flexShrink: 0 }} />
                    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.68rem', letterSpacing: '0.12em', color: 'var(--pine)' }}>SUPPLY SIDE</p>
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 600, color: 'var(--white)', marginTop: 8 }}>For Homeowners</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', marginTop: 4, lineHeight: 1.6 }}>
                    Unlock equity without selling, borrowing, or moving out.
                  </p>
                </div>
                <div className="flex flex-col gap-0">
                  {supplySide.map((item, i) => (
                    <div key={item.title} className="px-7 py-6" style={{ borderBottom: i < supplySide.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                      <div className="flex gap-4 items-start">
                        <span style={{ fontSize: '1.2rem', flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                        <div>
                          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.95rem', fontWeight: 600, color: 'var(--white)', marginBottom: 6 }}>{item.title}</p>
                          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>{item.body}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-7 py-5" style={{ borderTop: '1px solid rgba(40,90,68,0.3)' }}>
                  <Link href="/how-it-works" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', fontWeight: 500, color: '#52B788', textDecoration: 'none' }}>
                    Explore Yield Deed →
                  </Link>
                </div>
              </div>

              {/* Demand side */}
              <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(176,138,38,0.3)', background: 'rgba(176,138,38,0.06)' }}>
                <div className="px-7 py-5" style={{ borderBottom: '1px solid rgba(176,138,38,0.25)', background: 'rgba(176,138,38,0.08)' }}>
                  <div className="flex items-center gap-3">
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--gold)', flexShrink: 0 }} />
                    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.68rem', letterSpacing: '0.12em', color: 'var(--gold-lt)' }}>DEMAND SIDE</p>
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 600, color: 'var(--white)', marginTop: 8 }}>For Investors</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', marginTop: 4, lineHeight: 1.6 }}>
                    Access institutional-grade real estate from $100. Compliant secondary transfer — subject to securities restrictions and eligibility.
                  </p>
                </div>
                <div className="flex flex-col gap-0">
                  {demandSide.map((item, i) => (
                    <div key={item.title} className="px-7 py-6" style={{ borderBottom: i < demandSide.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                      <div className="flex gap-4 items-start">
                        <span style={{ fontSize: '1.2rem', flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                        <div>
                          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.95rem', fontWeight: 600, color: 'var(--white)', marginBottom: 6 }}>{item.title}</p>
                          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>{item.body}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-7 py-5" style={{ borderTop: '1px solid rgba(176,138,38,0.25)' }}>
                  <Link href="/marketplace" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', fontWeight: 500, color: 'var(--gold-lt)', textDecoration: 'none' }}>
                    Browse Marketplace →
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Why it works ───────────────────────────────────────────────────── */}
        <section className="px-6 md:px-12 lg:px-20 py-20 relative overflow-hidden" style={{ background: 'var(--granite)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <MountainSVG variant="dark" />
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.3)', marginBottom: 10 }}>WHY IT WORKS</p>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', fontWeight: 600, color: 'var(--white)', marginBottom: 18, lineHeight: 1.2 }}>
                  Wyoming makes this possible.
                </h2>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28 }}>
                  Wyoming is the only US state with digital asset statutes specifically recognizing tokenized real property rights. The DAO LLC structure and blockchain-native UCC Article 12 create the legal foundation no other state offers.
                </p>
                <Link href="/regulation" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', fontWeight: 500, color: '#52B788', textDecoration: 'none' }}>
                  Read the regulatory framework →
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { label: 'Digital Asset Statutes', desc: 'Token property rights recognized under Wyoming law' },
                  { label: 'DAO LLC Framework', desc: 'Purpose-built entity structure for tokenized real estate' },
                  { label: 'Reg D 506(c)', desc: 'Federal exemption for accredited investor offerings' },
                  { label: 'Non-Recourse Design', desc: 'Pledge structure that does not trigger due-on-sale' },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 items-start rounded-xl px-5 py-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <span style={{ color: '#52B788', fontSize: '0.8rem', marginTop: 3, flexShrink: 0 }}>✓</span>
                    <div>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', fontWeight: 600, color: 'var(--white)', marginBottom: 2 }}>{item.label}</p>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────────────────── */}
        <section className="px-6 md:px-12 lg:px-20 py-20 text-center relative overflow-hidden" style={{ background: 'var(--obsidian)' }}>
          <MountainSVG variant="dark" />
          <div className="max-w-xl mx-auto relative z-10">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', fontWeight: 600, color: 'var(--white)', marginBottom: 16, lineHeight: 1.2 }}>
              Which side are you on?
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9375rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 32 }}>
              Join the Wyoming pilot waitlist — whether you want to unlock equity from your home or invest in tokenized real estate.
            </p>
            <Link href="/interest-list" style={{ display: 'inline-block', background: 'var(--pine)', color: '#fff', borderRadius: 'var(--r-md)', padding: '13px 32px', fontSize: 15, fontWeight: 500, fontFamily: "'DM Sans', sans-serif", textDecoration: 'none' }} className="hover:!bg-[#3A7A5C]">
              Join the Waitlist →
            </Link>
          </div>
        </section>

        {/* ── Footer ─────────────────────────────────────────────────────────── */}
        <Footer />

      </main>
    </>
  );
}
