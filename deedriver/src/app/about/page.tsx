import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import MountainSVG from '@/components/MountainSVG';
import Image from 'next/image';
import Link from 'next/link';
import InvestorGate from '@/components/InvestorGate';

export const metadata: Metadata = {
  title: 'About - Team Behind DeedStack',
  description: 'DeedStack is built by two operators with backgrounds in institutional trading systems and fund infrastructure. Learn about the team behind Wyoming\'s home equity tokenization platform.',
};

// ─── Team ─────────────────────────────────────────────────────────────────────

const team = [
  {
    name: 'Dr. Iosif Ziman',
    title: 'CEO & CTO',
    photo: '/team/iosif-ziman.png',
    credentials: ['HKUST MBA', 'Technology & Finance'],
    bio: 'Co-Founder and former CTO of BFAM Partners, the Hong Kong-based institutional hedge fund. Iosif built the proprietary trading systems and fund infrastructure at BFAM — experience that informs the analytical and operational design of DeedStack\'s fund strategy. DeedStack\'s fund is new and has no independent operating track record.',
    highlights: [
      'Built trading systems carrying >50% of Tokyo Stock Exchange volume',
      'Grew major bank derivatives business 10× over 3 years',
      'Co-founder of BFAM Partners — institutional fund infrastructure, $5B AUM',
      'Technology and finance specialist across institutional capital markets',
    ],
  },
  {
    name: 'Joseph Laviolette',
    title: 'COO & CFO',
    photo: '/team/joseph-laviolette.png',
    credentials: ['CPA', 'HKUST MBA'],
    bio: 'Seasoned financial executive with deep experience across real estate, hospitality, and institutional finance. Joseph\'s background bridges the operational complexity of real estate transactions with the regulatory precision required for a compliant digital asset offering.',
    highlights: [
      'Financial Executive — Wynn Macau',
      'Deloitte Consulting, Real Estate Solutions — designed electronic lease system deployed at McKinsey',
      'EY Assurance Services — Real Estate & Hospitality practice',
      'Trading Specialist — Chicago Board Options Exchange',
    ],
  },
];

// ─── Partners ─────────────────────────────────────────────────────────────────

const partnerCategories = [
  {
    category: 'Banking & Custody',
    label: 'CATEGORY 1',
    description: 'Wyoming SPDI-chartered institutions providing legally perfected token custody and yield settlement infrastructure — the legal foundation for the pledge structure.',
    partners: [
      {
        name: 'Custodia Bank',
        priority: 1,
        phase: 'Immediate',
        role: 'Token custody + fund banking',
        note: 'Wyoming\'s premier SPDI charter. Founded by Caitlin Long (Wall Street securitization veteran). Institutional-grade digital asset custody under Wyoming UCC Article 12.',
        url: 'custodiabank.com',
      },
      {
        name: 'Wyoming Deposit & Transfer',
        priority: 1,
        phase: 'Immediate',
        role: 'Homeowner accounts + yield settlement',
        note: 'Purpose-built for blockchain ventures. Integrated custody and fiat banking for quarterly yield distributions to homeowners. CEO Julie Fellows brings deep banking regulatory expertise.',
        url: 'wdtfinancial.com',
      },
      {
        name: 'N3XT (NDD)',
        priority: 2,
        phase: 'Phase 1',
        role: 'On-chain USD yield settlement',
        note: 'Launched the N3XT Digital Dollar (NDD) April 2026 — bank-issued tokenized deposit backed 1:1 by cash or U.S. Treasuries. Creates a fully on-chain, instant, auditable yield payment loop.',
        url: 'n3xt.com',
      },
      {
        name: 'First Interstate Bank',
        priority: 2,
        phase: 'Phase 1',
        role: 'Wyoming homeowner referrals',
        note: 'Wyoming\'s largest community bank. Deep real estate relationships and name recognition with DeedStack\'s exact target homeowner demographic. Referral fee per onboarded homeowner.',
        url: 'firstinterstatebank.com',
      },
      {
        name: 'Western Alliance Bank',
        priority: 2,
        phase: 'Phase 1',
        role: 'Fund vehicle banking',
        note: 'Regional institutional bank with proven fintech fund banking track record. LP capital accounts, fund administration, and institutional wire processing for the DeedStack Capital fund entity.',
        url: 'westernalliancebank.com',
      },
      {
        name: 'Commercium Financial',
        priority: 3,
        phase: 'Phase 2',
        role: 'Backup custody',
        note: 'Fourth Wyoming SPDI charter. Approaching operational status. Evaluation underway for redundancy in custody structure.',
        url: 'commerciumfinancial.com',
      },
    ],
  },
  {
    category: 'Real Estate Conversion',
    label: 'CATEGORY 2',
    description: 'Title, deed recording, AVM, and origination pipelines for homeowner onboarding and investment property transactions.',
    partners: [
      {
        name: 'Propy',
        priority: 1,
        phase: 'Immediate',
        role: 'Title + deed recording + DeFi vault',
        note: 'On-chain title recording, crypto escrow, and automated closings. $100M title company expansion. Launching DeFi mortgage vault with Morpho Labs. One relationship replaces three vendors — co-development opportunity for the primary home product.',
        url: 'propy.com',
      },
      {
        name: 'Roofstock onChain',
        priority: 2,
        phase: 'Phase 1',
        role: 'Investment property origination',
        note: 'Recognized SFR marketplace with blockchain property trading modules already live. Brings deal volume; DeedStack brings yield amplification via the triple-stack model.',
        url: 'roofstock.com',
      },
      {
        name: 'Lofty.ai',
        priority: 3,
        phase: 'Phase 1',
        role: 'Tokenized rental distribution',
        note: '150+ tokenized properties in 40 markets. Actively seeking DeFi yield partnerships to reach 12–15% APR — exactly what DeedStack delivers. Distribution without building origination from scratch.',
        url: 'lofty.ai',
      },
      {
        name: 'RealT',
        priority: 3,
        phase: 'Phase 2',
        role: 'Investment property marketplace',
        note: '970+ tokenized properties on Ethereum. Proven daily dividend distribution, secondary market, and $150M+ in tokenized real estate. Distribution channel and operational playbook reference.',
        url: 'realt.co',
      },
      {
        name: 'Hometap / Point',
        priority: 3,
        phase: 'Phase 2',
        role: 'Equity incumbent referrals',
        note: '$1B+ deployed each. Built the most sophisticated homeowner equity origination pipelines in the U.S. DeedStack as their no-dilution product option for homeowners who won\'t sell equity.',
        url: 'hometap.com',
      },
      {
        name: 'Opendoor',
        priority: 3,
        phase: 'Phase 2',
        role: 'iBuyer homeowner referral funnel',
        note: 'Largest U.S. iBuyer in 50+ markets. The homeowner who gets an Opendoor offer but doesn\'t pull the trigger is DeedStack\'s exact customer. Opendoor currently earns nothing from that person.',
        url: 'opendoor.com',
      },
    ],
  },
  {
    category: 'Infrastructure & Data',
    label: 'CATEGORY 3',
    description: 'Property valuation, compliance, token issuance, and title insurance — the operational backbone required before any homeowner is onboarded.',
    partners: [
      {
        name: 'CoreLogic',
        priority: 1,
        phase: 'Immediate',
        role: 'AVM property valuations',
        note: 'Industry standard for automated property valuation. DEED token values are pegged to AVM outputs — stale valuations directly impair the legal structure and homeowner trust. Non-negotiable before launch.',
        url: 'corelogic.com',
      },
      {
        name: 'Chainalysis',
        priority: 1,
        phase: 'Immediate',
        role: 'AML / BSA compliance monitoring',
        note: 'Industry standard for blockchain transaction monitoring. Used by DOJ, IRS, and most institutional platforms. FinCEN BSA compliance requires blockchain analytics. Real estate is high-risk AML — regulators will audit this.',
        url: 'chainalysis.com',
      },
      {
        name: 'Securitize',
        priority: 2,
        phase: 'Phase 1',
        role: 'Token issuance + SEC-registered transfer agent',
        note: 'SEC-registered transfer agent used by BlackRock for its BUIDL tokenized fund. Compliance-native DEED token issuance with KYC/AML, transfer restrictions, and investor eligibility built into the token layer.',
        url: 'securitize.io',
      },
      {
        name: 'First American Title',
        priority: 3,
        phase: 'Phase 2',
        role: 'National title insurance endorsement',
        note: 'Custom endorsement confirming the token layer does not create an impermissible lien or title defect. Covers the due-on-sale risk gap for mortgaged properties. Significant legal and marketing asset for national expansion.',
        url: 'firstam.com',
      },
    ],
  },
  {
    category: 'Global Expansion',
    label: 'PHASE 3+',
    description: 'Local partners in each target jurisdiction providing banking, regulatory licensing, and distribution infrastructure for international market entry.',
    partners: [
      {
        name: 'Archax',
        priority: 3,
        phase: 'Phase 2–3 (UK)',
        role: 'FCA-regulated exchange, broker & custodian',
        note: 'Cleanest single-partner UK solution — FCA licensed as exchange, broker, AND custodian in one entity. Secondary market for DEED tokens in UK jurisdiction. Expanding tokenized fund listings.',
        url: 'archax.com',
      },
      {
        name: 'Fraxtor',
        priority: 3,
        phase: 'Phase 3 (Singapore)',
        role: 'MAS-licensed distribution partner',
        note: 'MAS-licensed Singapore digital securities platform. Existing regulatory license and investor base — fastest path to Singapore market without obtaining own CMS license immediately.',
        url: 'fraxtor.com',
      },
      {
        name: 'ADDX',
        priority: 3,
        phase: 'Phase 3 (Singapore)',
        role: 'Institutional private market exchange',
        note: 'Singapore\'s leading private market exchange. Backed by SGX and Temasek. Reaches the family office capital that DeedStack\'s fund vehicle ultimately needs.',
        url: 'addx.co',
      },
      {
        name: 'Prypco Mint',
        priority: 3,
        phase: 'Phase 3 (UAE)',
        role: 'DLD-integrated Dubai tokenization',
        note: 'First Dubai Land Department-integrated tokenization platform. DLD integration is the missing piece globally — no other partner has it. Market entry timed to Q3 2026 recovery.',
        url: 'prypco.com',
      },
    ],
  },
];

// ─── Priority badge helper ────────────────────────────────────────────────────

function PriorityBadge({ p }: { p: number }) {
  const label = p === 1 ? 'PRIORITY 1' : p === 2 ? 'PRIORITY 2' : 'PRIORITY 3';
  const color = p === 1 ? 'var(--pine)' : p === 2 ? 'var(--timber)' : 'var(--slate)';
  return (
    <span style={{
      fontFamily: "'DM Mono', monospace",
      fontSize: '0.65rem',
      fontWeight: 500,
      letterSpacing: '0.08em',
      color,
      textTransform: 'uppercase' as const,
    }}>{label}</span>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <InvestorGate>
      <Nav />
      <main style={{ background: 'var(--snow)' }}>

        {/* Hero */}
        <section className="relative overflow-hidden pt-[128px] pb-[90px] px-6 md:px-12 lg:px-20" style={{ background: 'var(--snow)' }}>
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="badge-active">WYOMING-INCORPORATED</span>
              <span className="badge-tokenized">BUILD TEAM</span>
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
              Built by practitioners.<br />
              <span style={{ color: 'var(--pine)' }}>Backed by institutional experience.</span>
            </h1>
            <p className="text-body" style={{ fontSize: '1.0625rem', maxWidth: 600, lineHeight: 1.75 }}>
              DeedStack&apos;s founding team brings together the former CTO of BFAM Partners and an
              institutional finance executive with deep real estate and capital markets experience.
              The team&apos;s background includes institutional trading systems and fund infrastructure
              associated with BFAM Partners. DeedStack&apos;s fund strategy is new and has no independent
              operating track record. Historical references are provided as background on team experience only.
            </p>
          </div>
          <MountainSVG variant="light" />
        </section>

        {/* Build Team */}
        <section className="py-24 px-6 md:px-12 lg:px-20" style={{ background: 'var(--frost)' }}>
          <div className="max-w-5xl mx-auto">
            <p className="text-label mb-3">THE BUILD TEAM</p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
              fontWeight: 600,
              color: 'var(--granite)',
              marginBottom: '0.75rem',
              letterSpacing: '-0.015em',
              lineHeight: 1.2,
            }}>
              Build Team
            </h2>
            <p className="text-body mb-14" style={{ fontSize: '0.9375rem', maxWidth: 560 }}>
              Two founding operators who have run institutional capital at scale — one on the quant and
              systems side, one on the finance and compliance side. The combination is deliberate.
            </p>

            <div className="flex flex-col gap-8">
              {team.map((member) => (
                <div key={member.name} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                  <div className="flex flex-col sm:flex-row items-stretch">
                    {/* Portrait photo */}
                    <div className="relative h-[220px] sm:h-auto sm:self-stretch w-full sm:w-[200px] sm:flex-shrink-0"
                         style={{ background: 'var(--obsidian)' }}>
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
                      />
                    </div>

                    {/* Write-up */}
                    <div style={{ padding: '1.5rem', flex: 1, minWidth: 0 }}>
                      <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', fontWeight: 600, color: 'var(--granite)', lineHeight: 1.2, marginBottom: 4 }}>{member.name}</p>
                      <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.72rem', color: 'var(--pine)', marginBottom: '0.75rem' }}>{member.title}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.credentials.map((c) => (
                          <span key={c} className="badge-active">{c}</span>
                        ))}
                      </div>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'var(--stone)', lineHeight: 1.75, marginBottom: '1rem' }}>
                        {member.bio}
                      </p>
                      <div className="flex flex-col gap-2">
                        {member.highlights.map((h, i) => (
                          <div key={i} className="flex gap-3 items-start">
                            <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--pine)', marginTop: 7, flexShrink: 0 }} />
                            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8125rem', color: 'var(--granite)', lineHeight: 1.6 }}>{h}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners intro */}
        <section className="py-16 px-6 md:px-12 lg:px-20" style={{ background: 'var(--snow)', borderBottom: '1px solid var(--mist)' }}>
          <div className="max-w-5xl mx-auto">
            <p className="text-label mb-3">PARTNER ARCHITECTURE</p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
              fontWeight: 600,
              color: 'var(--granite)',
              marginBottom: '1rem',
              letterSpacing: '-0.015em',
              lineHeight: 1.2,
            }}>
              Three categories. Sequenced by priority.
            </h2>
            <p className="text-body" style={{ fontSize: '0.9375rem', maxWidth: 620, lineHeight: 1.75 }}>
              DeedStack requires three distinct categories of partners to operate at launch and scale globally.
              No single institution covers all three functions — banking and custody, real estate conversion,
              and infrastructure. The sequence matters: Priority 1 partners must be contracted before the
              first homeowner is onboarded.
            </p>
            <div className="flex flex-wrap gap-5 mt-8">
              {[
                { label: 'Category 1', value: 'Banking & Custody' },
                { label: 'Category 2', value: 'Real Estate Conversion' },
                { label: 'Category 3', value: 'Infrastructure & Data' },
                { label: 'Phase 3+', value: 'Global Expansion' },
              ].map((s) => (
                <div key={s.label} className="stat-card" style={{ minWidth: 130 }}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: 'var(--pine)', marginBottom: 2, letterSpacing: '0.07em', textTransform: 'uppercase' as const }}>{s.label}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'var(--granite)', fontWeight: 500, lineHeight: 1.3 }}>{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner categories */}
        {partnerCategories.map((cat, catIdx) => (
          <section
            key={cat.category}
            className="py-20 px-6 md:px-12 lg:px-20"
            style={{ background: catIdx % 2 === 0 ? 'var(--snow)' : 'var(--frost)' }}
          >
            <div className="max-w-5xl mx-auto">
              <p className="text-label mb-2">{cat.label}</p>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)',
                fontWeight: 600,
                color: 'var(--granite)',
                marginBottom: '0.75rem',
                lineHeight: 1.2,
              }}>
                {cat.category}
              </h2>
              <p className="text-body mb-10" style={{ fontSize: '0.9375rem', maxWidth: 580, lineHeight: 1.7 }}>
                {cat.description}
              </p>

              <div className="card overflow-hidden" style={{ padding: 0, overflowX: 'auto' }}>
                <div className="grid px-6 py-3" style={{ gridTemplateColumns: '1.4fr 0.7fr 1fr 2.4fr', minWidth: 640, background: catIdx % 2 === 0 ? 'var(--frost)' : 'var(--white)', borderBottom: '1px solid var(--mist)' }}>
                  {['Partner', 'Priority', 'Phase', 'Role & Notes'].map((h) => (
                    <p key={h} className="text-label">{h}</p>
                  ))}
                </div>
                {cat.partners.map((p, i) => (
                  <div
                    key={p.name}
                    className="grid px-6 py-5 items-start"
                    style={{
                      gridTemplateColumns: '1.4fr 0.7fr 1fr 2.4fr',
                      minWidth: 640,
                      borderBottom: i < cat.partners.length - 1 ? '1px solid var(--mist)' : 'none',
                      background: i % 2 === 0 ? 'var(--white)' : 'var(--snow)',
                      gap: '0.75rem',
                    }}
                  >
                    <div>
                      <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.9375rem', fontWeight: 600, color: 'var(--granite)', lineHeight: 1.3 }}>{p.name}</p>
                      <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: 'var(--slate)', marginTop: 3 }}>{p.url}</p>
                    </div>
                    <PriorityBadge p={p.priority} />
                    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.75rem', color: 'var(--timber)' }}>{p.phase}</p>
                    <div>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', color: 'var(--pine)', fontWeight: 500, marginBottom: '0.35rem', lineHeight: 1.3 }}>{p.role}</p>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', color: 'var(--stone)', lineHeight: 1.65 }}>{p.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="relative overflow-hidden py-24 px-6 md:px-12 lg:px-20" style={{ background: 'var(--obsidian)' }}>
          <div className="max-w-3xl mx-auto relative z-10 text-center">
            <p className="text-label mb-4" style={{ color: 'var(--slate)' }}>READY TO ENGAGE</p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
              fontWeight: 600,
              color: 'var(--white)',
              marginBottom: '1rem',
              letterSpacing: '-0.01em',
              lineHeight: 1.2,
            }}>
              The team is built.<br />The structure is ready.
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: 'var(--slate)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              Wyoming-incorporated. Reg D 506(c) offering. Priority 1 partner outreach underway.
              DeedStack is designed to move fast in the world&apos;s most favorable regulatory environment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/regulation" className="btn-primary" style={{ padding: '13px 28px', fontSize: 15 }}>
                Regulatory Framework →
              </Link>
              <Link href="/yield" style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '13px 28px', fontSize: 15,
                fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
                color: 'var(--slate)', textDecoration: 'none',
                border: '1.5px solid rgba(255,255,255,0.12)', borderRadius: 'var(--r-md)',
              }} className="hover:!border-[rgba(255,255,255,0.3)] hover:!text-white">
                Fund Strategy &amp; Returns
              </Link>
            </div>
          </div>
          <MountainSVG variant="dark" />
        </section>

      </main>
    </InvestorGate>
  );
}
