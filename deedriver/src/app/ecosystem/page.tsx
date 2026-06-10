import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import MountainSVG from '@/components/MountainSVG';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Ecosystem — DeedStack',
  description: 'The DeedStack ecosystem: a three-layer tokenization platform connecting real estate assets, AI intelligence, and a decentralized marketplace into one unified infrastructure.',
};

const layers = [
  {
    num: '01',
    tag: 'ASSET LAYER',
    title: 'Tokenization Platform',
    color: 'var(--pine)',
    colorRgb: '40,90,68',
    desc: 'Properties are appraised, verified, and digitized. Net equity is minted into DEED tokens — each representing $10 of fractional ownership. Homeowners retain their deed throughout.',
    nodes: ['Property appraisal & AVM valuation', 'DEED token minting via smart contract', 'Deed-retained, non-recourse pledge', 'Wyoming UCC Article 12 perfected custody'],
  },
  {
    num: '02',
    tag: 'INTELLIGENCE LAYER',
    title: 'AI Platform',
    color: '#52B788',
    colorRgb: '82,183,136',
    desc: 'The AI layer is the connective tissue — sourcing deals, verifying participants, scoring risk, and optimizing portfolios across both supply and demand. It runs continuously between the asset and liquidity layers.',
    nodes: ['Automated KYC / AML verification', 'ML property valuation & lead scoring', 'Investor risk profiling & matching', 'Agentic deal sourcing & monitoring'],
  },
  {
    num: '03',
    tag: 'LIQUIDITY LAYER',
    title: 'DEX Marketplace',
    color: 'var(--gold)',
    colorRgb: '176,138,38',
    desc: 'Tokens trade on a decentralized exchange with real-time price discovery. Secondary market liquidity replaces the 7–10 year lockup of traditional real estate funds. Platform fee under 1.5%.',
    nodes: ['On-chain secondary token trading', 'Real-time price discovery', 'Peer-to-peer settlement', 'Sub-1.5% platform fee structure'],
  },
];

const connectedNodes = [
  { label: 'Homeowners', icon: '🏡', desc: 'Supply side — tokenize equity' },
  { label: 'Investors', icon: '📊', desc: 'Demand side — buy DEED tokens' },
  { label: 'Custody', icon: '🏦', desc: 'Wyoming SPDI-chartered banks' },
  { label: 'Title & Deed', icon: '📋', desc: 'Propy on-chain title recording' },
  { label: 'Compliance', icon: '🛡️', desc: 'Chainalysis AML monitoring' },
  { label: 'Valuation', icon: '📈', desc: 'CoreLogic AVM data feeds' },
];

export default function EcosystemPage() {
  return (
    <>
      <Nav />
      <main style={{ background: 'var(--snow)' }}>

        {/* ── Hero ───────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden pt-[128px] pb-20 px-6 md:px-12 lg:px-20" style={{ background: 'var(--obsidian)' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
          <MountainSVG variant="dark" />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">

              {/* Left copy */}
              <div>
                <div className="flex flex-wrap gap-3 mb-7">
                  <span style={{ background: 'rgba(82,183,136,0.15)', color: '#52B788', borderRadius: 'var(--r-pill)', padding: '4px 12px', fontSize: '0.68rem', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: '0.08em' }}>THE ECOSYSTEM</span>
                  <span style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)', borderRadius: 'var(--r-pill)', padding: '4px 12px', fontSize: '0.68rem', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: '0.08em' }}>THREE LAYERS</span>
                </div>
                <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 700, color: 'var(--white)', lineHeight: 1.08, letterSpacing: '-0.025em', marginBottom: 24 }}>
                  One platform.<br />
                  <span style={{ color: '#52B788' }}>Everything connected.</span>
                </h1>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.0625rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, maxWidth: 500, marginBottom: 36 }}>
                  DeedStack is a three-layer infrastructure — a tokenization engine, an AI intelligence hub, and a decentralized exchange — operating as a single unified platform under Wyoming&apos;s digital asset framework.
                </p>
                <div className="flex flex-wrap gap-5">
                  {[
                    { val: '3', label: 'Integrated Layers' },
                    { val: '6+', label: 'Infrastructure Partners' },
                    { val: '$10', label: 'Per DEED Token' },
                    { val: 'WY', label: 'Incorporated' },
                  ].map((s) => (
                    <div key={s.label}>
                      <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '1.4rem', fontWeight: 600, color: '#52B788', lineHeight: 1 }}>{s.val}</p>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', color: 'rgba(255,255,255,0.35)', marginTop: 4, letterSpacing: '0.04em' }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: AI Bot graphic */}
              <div className="flex justify-center md:justify-end">
                <div className="relative">
                  {/* Subtle glow behind image */}
                  <div style={{ position: 'absolute', inset: '10%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(82,183,136,0.12) 0%, transparent 70%)', filter: 'blur(20px)' }} />
                  <Image
                    src="/ai-bot.png"
                    alt="DeedStack AI ecosystem hub"
                    width={460}
                    height={460}
                    style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 30px rgba(82,183,136,0.15))', position: 'relative' }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Three layers ───────────────────────────────────────────────────── */}
        <section className="px-6 md:px-12 lg:px-20 py-20" style={{ background: 'var(--frost)' }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-label mb-3">PLATFORM ARCHITECTURE</p>
              <h2 className="text-h1" style={{ color: 'var(--granite)' }}>Three layers. One flow.</h2>
            </div>

            <div className="flex flex-col gap-6">
              {layers.map((layer) => (
                <div key={layer.num} className="rounded-2xl overflow-hidden" style={{ background: 'var(--white)', border: '1px solid var(--mist)', borderLeft: `4px solid ${layer.color}` }}>
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Left */}
                    <div className="p-8" style={{ borderRight: '1px solid var(--mist)' }}>
                      <div className="flex items-center gap-3 mb-4">
                        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.1em', color: layer.color }}>{layer.num}</span>
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', color: layer.color, background: `rgba(${layer.colorRgb},0.1)`, padding: '3px 9px', borderRadius: 'var(--r-pill)' }}>{layer.tag}</span>
                      </div>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.35rem', fontWeight: 600, color: 'var(--granite)', marginBottom: 12 }}>{layer.title}</h3>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'var(--stone)', lineHeight: 1.7 }}>{layer.desc}</p>
                    </div>
                    {/* Right: nodes */}
                    <div className="p-8 flex flex-col gap-3" style={{ background: 'var(--snow)' }}>
                      {layer.nodes.map((node) => (
                        <div key={node} className="flex items-start gap-3">
                          <span style={{ color: layer.color, fontSize: '0.75rem', marginTop: 3, flexShrink: 0 }}>▸</span>
                          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.84rem', color: 'var(--granite)', lineHeight: 1.55 }}>{node}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Layer connector */}
            <div className="flex justify-center mt-10">
              <div className="flex flex-col items-center gap-2 text-center">
                <div style={{ width: 1, height: 24, background: 'var(--mist)' }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', letterSpacing: '0.08em', color: 'var(--slate)' }}>AI INTELLIGENCE LAYER CONNECTS ALL THREE</span>
                <div style={{ width: 1, height: 24, background: 'var(--mist)' }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── Connected nodes ────────────────────────────────────────────────── */}
        <section className="px-6 md:px-12 lg:px-20 py-20" style={{ background: 'var(--snow)' }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-label mb-3">THE NETWORK</p>
                <h2 className="text-h1 mb-6" style={{ color: 'var(--granite)' }}>What connects to the hub</h2>
                <p className="text-body mb-8" style={{ fontSize: '0.9375rem', lineHeight: 1.75 }}>
                  The AI platform acts as the central hub — routing property data, investor profiles, compliance checks, and token transactions across six categories of participants and infrastructure providers.
                </p>
                <Link href="/about" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', fontWeight: 500, color: 'var(--pine)', textDecoration: 'none' }}>
                  View partner architecture →
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {connectedNodes.map((node) => (
                  <div key={node.label} className="rounded-xl p-5" style={{ background: 'var(--frost)', border: '1px solid var(--mist)' }}>
                    <span style={{ fontSize: '1.4rem', display: 'block', marginBottom: 8 }}>{node.icon}</span>
                    <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.9rem', fontWeight: 600, color: 'var(--granite)', marginBottom: 4 }}>{node.label}</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', color: 'var(--slate)', lineHeight: 1.5 }}>{node.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust bar ──────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden py-20 px-6 md:px-12 lg:px-20" style={{ background: 'var(--obsidian)' }}>
          <MountainSVG variant="dark" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.3)', marginBottom: 14 }}>BUILT ON WYOMING. COMPLIANT BY DESIGN.</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', fontWeight: 600, color: 'var(--white)', marginBottom: 18, lineHeight: 1.2 }}>
              The infrastructure is ready.<br />The pilot is live.
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9375rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, maxWidth: 520, margin: '0 auto 32px' }}>
              Wyoming-incorporated. Reg D 506(c). Priority partners under active outreach. DeedStack is designed to move fast in the world&apos;s most favorable digital asset regulatory environment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/interest-list" style={{ background: 'var(--pine)', color: '#fff', borderRadius: 'var(--r-md)', padding: '13px 28px', fontSize: 15, fontWeight: 500, fontFamily: "'DM Sans', sans-serif", textDecoration: 'none' }} className="hover:!bg-[#3A7A5C]">
                Join the Waitlist →
              </Link>
              <Link href="/solution" style={{ background: 'transparent', color: 'rgba(255,255,255,0.6)', borderRadius: 'var(--r-md)', padding: '13px 28px', fontSize: 15, fontWeight: 500, fontFamily: "'DM Sans', sans-serif", textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.15)' }} className="hover:!text-white hover:!border-[rgba(255,255,255,0.35)]">
                See the Solution
              </Link>
            </div>
          </div>
        </section>

        {/* ── Footer ─────────────────────────────────────────────────────────── */}
        <Footer />

      </main>
    </>
  );
}
