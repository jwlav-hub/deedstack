import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import MountainSVG from '@/components/MountainSVG';
import Link from 'next/link';
import InvestorGate from '@/components/InvestorGate';

export const metadata: Metadata = {
  title: 'Regulation - Wyoming Blockchain Law & Tokenized Real Estate',
  description: 'DeedStack operates under Wyoming digital asset law, Reg D 506(c), and the SEC Token Taxonomy framework. Review the Wyoming statutes, federal developments, and global market analysis behind the DeedStack structure.',
};

// ─── Data ────────────────────────────────────────────────────────────────────

const wyomingStatutes = [
  { statute: 'Digital Asset Management Act (W.S. 34-29-101)', year: '2019/2021', relevance: 'Explicit legal property rights for digital asset holders. DEED tokens are recognized as intangible personal property under Wyoming law.' },
  { statute: 'SPDI Charter (H.B. 74, W.S. 13-12-101)', year: '2019/2020', relevance: 'Special Purpose Depository Institution: fully-reserved bank framework for digital asset custody. Available as regulated custody solution for DEED tokens.' },
  { statute: 'DAO LLC Framework', year: '2021', relevance: 'Novel entity structure for token governance. DeedStack can structure token holder governance via a Wyoming DAO LLC.' },
  { statute: 'UCC Article 12 — Digital Assets', year: '2021', relevance: 'Clarifies perfection and priority of security interests in digital assets. DEED token pledges are legally perfectable under Wyoming UCC.' },
  { statute: 'FinTech Sandbox Act (W.S. 40-29-101)', year: '2019', relevance: 'Time-limited regulatory waivers for innovative fintech products. DeedStack is applying for a sandbox waiver for the primary home tokenization pilot.' },
  { statute: 'Wyoming Stable Token (WYST)', year: '2025', relevance: 'State-issued stablecoin deployed August 2025. Demonstrates Wyoming government-level commitment. Potential settlement currency for DeedStack distributions.' },
  { statute: 'Blockchain Electronic Records Act', year: '2019', relevance: 'Corporations may use blockchain for records and shareholder identification. Operational infrastructure for DeedStack\'s token registry.' },
  { statute: 'Utility Token Act (W.S. 17-4-206)', year: '2019', relevance: 'Establishes Wyoming\'s deliberate intent to build a digital asset framework. DEED tokens are treated as securities — this statute clarifies the broader ecosystem intent.' },
];

const federalDevelopments = [
  { development: 'GENIUS Act signed into law', date: 'July 2025', impact: 'First federal stablecoin framework. Recognizes Wyoming SPDI charter. Creates settlement currency infrastructure for token distributions.' },
  { development: 'SEC Project Crypto launched', date: '2025', impact: 'SEC shifting from enforcement to guidance. Innovation exemption being developed for compliant on-chain trading of tokenized securities.' },
  { development: 'SEC Token Taxonomy published', date: 'March 2026', impact: 'DEED tokens will be classified as digital securities — gives DeedStack a clear, buildable classification from day one.' },
  { development: 'DOJ Memo: End Regulation by Prosecution', date: '2025', impact: 'DOJ deprioritizes criminal enforcement for regulatory classification disputes. Reduces enforcement risk for novel but good-faith structures.' },
  { development: 'CLARITY Act — House passed', date: '2025', impact: 'Digital Asset Market Clarity Act defines the boundary between securities and commodities for digital assets. Resolution expected to provide additional structural clarity.' },
  { development: 'Fed/OCC/FDIC Joint FAQ', date: 'March 2025', impact: 'Technology-neutral capital treatment confirmed: a tokenized security receives identical treatment to its non-tokenized equivalent. Removes banking sector uncertainty.' },
];

const globalMarkets = [
  { market: 'UAE / Dubai', rating: 'VERY HIGH', ratingColor: 'var(--pine)', primaryHome: 'Novel — no homeowner equity product exists. First-mover opportunity.', investment: 'Strongest globally — DLD government-backed tokenization, VARA framework, first tokenized property sold out in 24 hours.', phase: 'Phase 3', opportunity: 'World\'s only government-operated tokenization infrastructure. Natural hedge fund capital gateway.' },
  { market: 'Singapore', rating: 'HIGH', ratingColor: 'var(--pine)', primaryHome: 'Novel — MAS framework sophisticated but homeowner product untested.', investment: 'Institutional-grade — MAS Project Guardian, JPMorgan/DBS/HSBC participation. Clearest APAC path.', phase: 'Phase 3', opportunity: 'Best institutional infrastructure in APAC. Gateway to Southeast Asian capital.' },
  { market: 'United Kingdom', rating: 'HIGH', ratingColor: 'var(--pine)', primaryHome: 'Digital Securities Sandbox ideal entry — test novel structure before full registration.', investment: 'FCA-regulated Archax provides secondary market. Deep institutional capital, ESG appetite.', phase: 'Phase 2–3', opportunity: 'Largest institutional capital pool outside the U.S. Equity release market directly parallels DeedStack\'s product.' },
  { market: 'Switzerland', rating: 'HIGH', ratingColor: 'var(--pine)', primaryHome: 'Clear legal framework — ledger-based securities under CO Articles 973d-i.', investment: 'SIX Digital Exchange (SDX) provides institutional secondary market.', phase: 'Phase 3', opportunity: 'On-chain transfer equals legal transfer under Swiss law. Strongest legal certainty in Europe.' },
  { market: 'Canada', rating: 'MEDIUM', ratingColor: 'var(--timber)', primaryHome: 'Provincial securities framework — similar to U.S. Reg D equivalent.', investment: 'Canadian pension funds mandated to allocate to alternatives.', phase: 'Phase 3', opportunity: 'Largest mandated institutional demand outside the U.S.' },
  { market: 'Germany / EU', rating: 'MEDIUM', ratingColor: 'var(--timber)', primaryHome: 'eWpG allows tokenized securities — homeowner product untested.', investment: 'Growing institutional appetite — MiCA compliance required.', phase: 'Phase 4', opportunity: 'Largest EU economy. MiCA compliance pathway clears in Phase 4.' },
];

const usExpansion = [
  { state: 'Wyoming', rating: 'LAUNCH', color: 'var(--pine)', phase: 'Now', note: 'Purpose-built framework. No jurisdiction in the world is superior.' },
  { state: 'Nevada', rating: 'HIGH', color: 'var(--pine)', phase: 'Phase 2', note: 'Blockchain records law amended. Strong investment RE market.' },
  { state: 'Colorado', rating: 'HIGH', color: 'var(--pine)', phase: 'Phase 2', note: 'No homestead complexity. Tech-forward ecosystem.' },
  { state: 'Utah', rating: 'HIGH', color: 'var(--pine)', phase: 'Phase 2', note: 'Receptive legislature. Growing high-value RE market.' },
  { state: 'Texas', rating: 'MEDIUM', color: 'var(--timber)', phase: 'Phase 2', note: 'Constitutional homestead provisions require state-specific counsel.' },
  { state: 'Florida', rating: 'MEDIUM', color: 'var(--timber)', phase: 'Phase 2', note: 'Strong homestead protections. Careful structuring required.' },
  { state: 'New York', rating: 'DEFER', color: 'var(--slate)', phase: 'Phase 4', note: 'BitLicense adds $100K+ compliance cost. Defer until established.' },
  { state: 'California', rating: 'DEFER', color: 'var(--slate)', phase: 'Phase 4', note: 'DFI enforcement posture and Prop 13 transfer issues. Phase 4.' },
];

const risks = [
  { area: 'Securities Classification', level: 'HIGH', mitigation: 'DEED tokens treated as securities from Day 1. Launch under Reg D 506(c). No attempt to argue non-security status — the classification is known and built around.' },
  { area: 'Broker-Dealer Requirement', level: 'HIGH', mitigation: 'Marketplace partnered with FINRA-registered BD at launch. ATS registration pathway pursued in parallel.' },
  { area: 'Investment Adviser Registration', level: 'HIGH', mitigation: 'Wyoming state IA registration before first capital. Federal registration at $110M AUM threshold.' },
  { area: 'CFPB — Reverse Mortgage', level: 'HIGH', mitigation: 'Proactive engagement with CFPB Office of Innovation before marketing. No-action letter request in process. Senior protection protocols embedded.' },
  { area: 'Due-on-Sale Clause', level: 'MEDIUM', mitigation: 'Wyoming real estate counsel opinion obtained. Synthetic token layer is not a recorded property interest. Lender consent sought where available. Risk disclosed to homeowners.' },
  { area: 'Property Value Decline', level: 'MEDIUM', mitigation: '70% LTV conservative threshold. Annual AVM refresh with dispute mechanism. Margin call provisions built into pledge agreement.' },
  { area: 'AML / BSA', level: 'MEDIUM', mitigation: 'Comprehensive BSA program. Blockchain analytics vendor (Chainalysis or Elliptic). Full OFAC screening of all participants.' },
  { area: 'Texas / Florida Homestead', level: 'MEDIUM', mitigation: 'State-specific counsel required before expansion. Launch delayed if legal opinion is unfavorable.' },
];

const roadmap = [
  {
    phase: '01', label: 'Wyoming Launch', timeline: 'Months 0–12',
    items: [
      'Reg D 506(c) offering documents. File Form D within 15 days of first sale.',
      'Wyoming Investment Adviser registration before accepting fund capital.',
      'Wyoming real estate counsel: due-on-sale analysis and lender consent framework.',
      'BSA/AML compliance program. Blockchain analytics vendor onboarded.',
      'FinTech Sandbox application for primary home tokenization pilot.',
      'SPDI partnership evaluation: Two Ocean Trust or Custodia Bank.',
      'CFPB Office of Innovation outreach before marketing reverse mortgage alternative.',
      'Pilot cohort: 10–20 Wyoming properties, accredited investors only.',
    ],
  },
  {
    phase: '02', label: 'U.S. Multi-State + UK Sandbox', timeline: 'Months 12–36',
    items: [
      'Begin Reg A+ SEC qualification process. Opens $75M annual offering to non-accredited investors.',
      'Federal IA registration as AUM crosses $110M threshold.',
      'Expansion into Nevada, Colorado, Utah with state-specific real estate counsel.',
      'Texas and Florida: homestead legal analysis before launch.',
      'UK Digital Securities Sandbox application — low-risk entry for primary home product testing.',
      'ATS registration evaluation for marketplace infrastructure.',
    ],
  },
  {
    phase: '03', label: 'UAE + Singapore', timeline: 'Months 24–48',
    items: [
      'UAE: VARA licensing for tokenization platform. DIFC or ADGM entity structure.',
      'Dubai Land Department partnership — connects token to legal title registration.',
      'Singapore: MAS Payment Services Act licensing. Partner with MAS-approved platform.',
      'Canada: Engage Canadian Securities Administrators. Provincial Reg D equivalent.',
      'Switzerland: Ledger-based security structure under CO Articles 973d-i for EU bridge.',
    ],
  },
  {
    phase: '04', label: 'Global Platform', timeline: 'Months 48+',
    items: [
      'Germany / EU: MiCA compliance for pan-European reach.',
      'Australia: ASIC sandbox engagement. High homeownership culture matches primary product.',
      'Saudi Arabia: Sovereign wealth fund engagement. Vision 2030 real estate push.',
      'Hong Kong: China capital gateway — contingent on geopolitical stability.',
    ],
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function RegulationPage() {
  return (
    <InvestorGate>
      <Nav />
      <main style={{ background: 'var(--snow)' }}>

        {/* Hero */}
        <section className="relative overflow-hidden pt-[128px] pb-[90px] px-6 md:px-12 lg:px-20" style={{ background: 'var(--snow)' }}>
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="badge-active">WYOMING-INCORPORATED</span>
              <span className="badge-active">REG D 506(c)</span>
              <span className="badge-tokenized">APRIL 2026</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, color: 'var(--obsidian)', marginBottom: '1.25rem' }}>
              Regulation-first.<br />
              <span style={{ color: 'var(--pine)' }}>The window is open.</span>
            </h1>
            <p className="text-body mb-10" style={{ fontSize: '1.0625rem', maxWidth: 620, lineHeight: 1.75 }}>
              Wyoming has built more blockchain-specific legislation than any jurisdiction on earth.
              The U.S. federal regulatory posture has shifted decisively toward clarity.
              The global tokenized real estate market stood at less than $0.3 trillion in 2024 and is projected to reach
              $4 trillion by 2035 — a 27% CAGR (Deloitte, 2025). DeedStack is structured for this moment — legally, operationally,
              and strategically.
            </p>
            <div className="flex flex-wrap gap-5">
              {[
                { value: '45+', label: 'Wyoming Blockchain Statutes' },
                { value: '$10B+', label: 'Tokenized Real Estate (Global)' },
                { value: '$4T', label: 'Projected Market by 2035' },
                { value: '27%', label: 'CAGR (Deloitte 2025)' },
              ].map((s) => (
                <div key={s.label} className="stat-card" style={{ minWidth: 120 }}>
                  <div className="stat-value" style={{ fontFamily: "'DM Mono', monospace" }}>{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <MountainSVG variant="light" />
        </section>

        {/* Bottom-line callout */}
        <section className="py-12 px-6 md:px-12 lg:px-20" style={{ background: 'var(--pine-ghost)', borderTop: '1px solid var(--pine-pale)', borderBottom: '1px solid var(--pine-pale)' }}>
          <div className="max-w-5xl mx-auto">
            <div className="flex gap-5 items-start">
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.1em', color: 'var(--pine)', textTransform: 'uppercase', paddingTop: 2, minWidth: 80 }}>
                Bottom Line
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: 'var(--pine)', lineHeight: 1.75, fontWeight: 400 }}>
                Wyoming is the single best launch jurisdiction in the world for DeedStack. No other U.S. state —
                and arguably no other jurisdiction globally — has more deliberately built the legal infrastructure
                for tokenized real estate. DeedStack sits at the intersection of three markets: home equity investment, tokenized real estate, and private fund access. Existing HEI companies provide equity access, but do not offer homeowner-controlled tokenization, pledge-based yield participation, or a secondary marketplace layer. The recommendation is unambiguous: incorporate in Wyoming, engage the FinTech Sandbox,
                launch a pilot cohort under Reg D, and build the compliance infrastructure for national and
                international expansion in parallel.
              </p>
            </div>
          </div>
        </section>

        {/* Wyoming — The Launch Jurisdiction */}
        <section className="py-24 px-6 md:px-12 lg:px-20" style={{ background: 'var(--snow)' }}>
          <div className="max-w-5xl mx-auto">
            <p className="text-label mb-3">PART 1</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 600, color: 'var(--granite)', marginBottom: '0.75rem', letterSpacing: '-0.015em', lineHeight: 1.2 }}>
              Wyoming: the launch jurisdiction
            </h2>
            <p className="text-body mb-12" style={{ fontSize: '0.9375rem', maxWidth: 600 }}>
              Wyoming has passed more than 45 pieces of blockchain-specific legislation since 2016 —
              more than any other U.S. state and more than most jurisdictions globally.
              The Wyoming Blockchain Select Committee built this framework deliberately:
              digital asset custody, securities, banking, corporate records, and commercial law addressed simultaneously.
              Wyoming counties have already placed land-title records on blockchain as a live pilot.
              This is operational infrastructure, not theory.
            </p>

            {/* Wyoming statute table */}
            <div className="card overflow-hidden mb-12" style={{ padding: 0 }}>
              <div className="grid px-6 py-3" style={{ gridTemplateColumns: '2.5fr 0.7fr 3fr', background: 'var(--frost)', borderBottom: '1px solid var(--mist)' }}>
                <p className="text-label">Statute / Framework</p>
                <p className="text-label">Year</p>
                <p className="text-label">DeedStack Relevance</p>
              </div>
              {wyomingStatutes.map((row, i) => (
                <div key={i} className="grid px-6 py-4 items-start" style={{ gridTemplateColumns: '2.5fr 0.7fr 3fr', borderBottom: i < wyomingStatutes.length - 1 ? '1px solid var(--mist)' : 'none', background: i % 2 === 0 ? 'var(--white)' : 'var(--snow)', gap: '1rem' }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8125rem', color: 'var(--granite)', fontWeight: 500, lineHeight: 1.5 }}>{row.statute}</p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.8rem', color: 'var(--timber)' }}>{row.year}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8125rem', color: 'var(--stone)', lineHeight: 1.6 }}>{row.relevance}</p>
                </div>
              ))}
            </div>

            {/* Key structural points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  title: 'Token Layer Is Not a Deed Transfer',
                  body: 'DEED tokens represent synthetic equity interests — not a deed transfer, not a recorded lien, and not a mortgage instrument. Token pledges are perfectable under Wyoming UCC Article 12 digital asset provisions.',
                  badge: 'STRUCTURAL',
                },
                {
                  title: 'FinTech Sandbox — Lowest-Risk Entry',
                  body: 'Wyoming\'s FinTech Sandbox Act provides time-limited regulatory waivers for innovative products. DeedStack is applying for a sandbox waiver for the primary home tokenization pilot — 10–20 properties — before full compliance build-out.',
                  badge: 'REGULATORY PATH',
                },
                {
                  title: 'SPDI Partnership Available',
                  body: 'Wyoming SPDI charters enable fully-reserved digital asset banking. DeedStack is evaluating partnership with Two Ocean Trust or Custodia Bank for token custody and distribution — regulated banking infrastructure without traditional bank complexity.',
                  badge: 'INFRASTRUCTURE',
                },
              ].map((card) => (
                <div key={card.title} className="card">
                  <span className="badge-active mb-3 inline-block">{card.badge}</span>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', fontWeight: 600, color: 'var(--granite)', marginBottom: '0.625rem', lineHeight: 1.3 }}>{card.title}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'var(--stone)', lineHeight: 1.7 }}>{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Federal Landscape */}
        <section className="py-24 px-6 md:px-12 lg:px-20" style={{ background: 'var(--frost)' }}>
          <div className="max-w-5xl mx-auto">
            <p className="text-label mb-3">PART 2</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 600, color: 'var(--granite)', marginBottom: '0.75rem', letterSpacing: '-0.015em', lineHeight: 1.2 }}>
              U.S. federal landscape — 2025–2026 transformation
            </h2>
            <p className="text-body mb-12" style={{ fontSize: '0.9375rem', maxWidth: 600 }}>
              The U.S. federal regulatory environment has undergone a fundamental shift from
              enforcement-first to clarity-first. This is the most favorable regulatory posture
              for compliant digital asset tokenization in U.S. history. Six distinct federal
              actions in 18 months have restructured the operating environment.
            </p>

            <div className="card overflow-hidden mb-12" style={{ padding: 0 }}>
              <div className="grid px-6 py-3" style={{ gridTemplateColumns: '2.5fr 0.9fr 3fr', background: 'var(--white)', borderBottom: '1px solid var(--mist)' }}>
                <p className="text-label">Development</p>
                <p className="text-label">Date</p>
                <p className="text-label">DeedStack Impact</p>
              </div>
              {federalDevelopments.map((row, i) => (
                <div key={i} className="grid px-6 py-4 items-start" style={{ gridTemplateColumns: '2.5fr 0.9fr 3fr', borderBottom: i < federalDevelopments.length - 1 ? '1px solid var(--mist)' : 'none', background: i % 2 === 0 ? 'var(--white)' : 'var(--snow)', gap: '1rem' }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8125rem', color: 'var(--granite)', fontWeight: 500, lineHeight: 1.5 }}>{row.development}</p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.8rem', color: 'var(--timber)' }}>{row.date}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8125rem', color: 'var(--stone)', lineHeight: 1.6 }}>{row.impact}</p>
                </div>
              ))}
            </div>

            {/* Offering structure */}
            <p className="text-label mb-6">OFFERING STRUCTURE</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  phase: 'Phase 1', title: 'Regulation D Rule 506(c)', timing: 'Launch — Now',
                  points: [
                    'No SEC registration required. File Form D within 15 days of first sale.',
                    'Accredited investors only: net worth >$1M (excl. primary residence) or income >$200K individual / $300K joint.',
                    '506(c) permits general solicitation — all purchasers must be verified accredited.',
                    'No limit on offering size.',
                    'Wyoming IA registration required for fund component before accepting capital.',
                  ],
                },
                {
                  phase: 'Phase 2', title: 'Regulation A+ Tier 2', timing: 'Year 2–3',
                  points: [
                    'Up to $75M annually to both accredited and non-accredited investors.',
                    'SEC qualification process: 3–6 months. Begin in parallel with Reg D launch.',
                    'Tier 2 preempts state Blue Sky law — significant simplification for multi-state expansion.',
                    'Ongoing reporting: Form 1-K annual, Form 1-SA semi-annual.',
                    'Opens DeedStack to the broad homeowner market.',
                  ],
                },
              ].map((card) => (
                <div key={card.title} className="card" style={{ borderTop: '3px solid var(--pine)' }}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="badge-active">{card.phase}</span>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.75rem', color: 'var(--gold)' }}>{card.timing}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 600, color: 'var(--granite)', marginBottom: '1rem' }}>{card.title}</h3>
                  <div className="flex flex-col gap-2">
                    {card.points.map((pt, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--pine)', marginTop: 8, flexShrink: 0 }} />
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8125rem', color: 'var(--stone)', lineHeight: 1.65 }}>{pt}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* U.S. State Matrix */}
        <section className="py-24 px-6 md:px-12 lg:px-20" style={{ background: 'var(--snow)' }}>
          <div className="max-w-5xl mx-auto">
            <p className="text-label mb-3">U.S. EXPANSION</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 600, color: 'var(--granite)', marginBottom: '0.75rem', letterSpacing: '-0.015em', lineHeight: 1.2 }}>
              State expansion priority matrix
            </h2>
            <p className="text-body mb-10" style={{ fontSize: '0.9375rem', maxWidth: 560 }}>
              National expansion follows a deliberate sequence: launch in Wyoming, expand to
              favorable western states in Phase 2, address complex homestead states with
              state-specific counsel, and defer high-compliance-cost markets until the track record is built.
            </p>

            <div className="card overflow-hidden" style={{ padding: 0 }}>
              <div className="grid px-6 py-3" style={{ gridTemplateColumns: '1.2fr 0.8fr 0.8fr 2.5fr', background: 'var(--frost)', borderBottom: '1px solid var(--mist)' }}>
                {['State', 'Rating', 'Phase', 'Key Consideration'].map(h => <p key={h} className="text-label">{h}</p>)}
              </div>
              {usExpansion.map((row, i) => (
                <div key={row.state} className="grid px-6 py-4 items-center" style={{ gridTemplateColumns: '1.2fr 0.8fr 0.8fr 2.5fr', borderBottom: i < usExpansion.length - 1 ? '1px solid var(--mist)' : 'none', background: i % 2 === 0 ? 'var(--white)' : 'var(--snow)', gap: '0.5rem' }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'var(--granite)', fontWeight: 500 }}>{row.state}</p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.75rem', fontWeight: 500, color: row.color }}>{row.rating}</p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.8rem', color: 'var(--slate)' }}>{row.phase}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8125rem', color: 'var(--stone)', lineHeight: 1.5 }}>{row.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Markets */}
        <section className="py-24 px-6 md:px-12 lg:px-20" style={{ background: 'var(--frost)' }}>
          <div className="max-w-5xl mx-auto">
            <p className="text-label mb-3">PART 3</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 600, color: 'var(--granite)', marginBottom: '0.75rem', letterSpacing: '-0.015em', lineHeight: 1.2 }}>
              Global markets — priority ranking
            </h2>
            <p className="text-body mb-5" style={{ fontSize: '0.9375rem', maxWidth: 620 }}>
              As of April 2026, tokenized real estate globally has surpassed $10 billion.
              Deloitte (2025) projects the market reaching $4 trillion by 2035, up from less than $0.3 trillion in 2024 — a 27% CAGR.
              The gap between projections and verified on-chain volume reflects a market in early
              institutional adoption. DeedStack has a narrow window to establish first-mover
              position before the market matures.
            </p>
            <div className="card mb-10" style={{ background: 'var(--gold-ghost)', border: '1px solid var(--gold-pale)', borderLeft: '3px solid var(--gold)' }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', color: 'var(--granite)', lineHeight: 1.7 }}>
                <strong>Critical investor distinction:</strong> Most global tokenization platforms address investor-inbound
                structures — bringing outside capital to buy fractional interests in properties. DeedStack&apos;s core
                innovation is homeowner-outbound equity monetization. This has minimal global precedent. That is
                simultaneously a regulatory challenge and a first-mover opportunity. DeedStack sits at the intersection of three markets: home equity investment, tokenized real estate, and private fund access. Existing HEI companies provide equity access, but do not offer homeowner-controlled tokenization, pledge-based yield participation, or a secondary marketplace layer.
              </p>
            </div>

            <div className="card overflow-hidden mb-12" style={{ padding: 0 }}>
              <div className="grid px-6 py-3" style={{ gridTemplateColumns: '1.2fr 0.7fr 1.8fr 1.8fr 0.7fr', background: 'var(--white)', borderBottom: '1px solid var(--mist)' }}>
                {['Market', 'Rating', 'Primary Home', 'Investment Property', 'Phase'].map(h => <p key={h} className="text-label">{h}</p>)}
              </div>
              {globalMarkets.map((row, i) => (
                <div key={row.market} className="grid px-6 py-4 items-start" style={{ gridTemplateColumns: '1.2fr 0.7fr 1.8fr 1.8fr 0.7fr', borderBottom: i < globalMarkets.length - 1 ? '1px solid var(--mist)' : 'none', background: i % 2 === 0 ? 'var(--white)' : 'var(--snow)', gap: '0.75rem' }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'var(--granite)', fontWeight: 500 }}>{row.market}</p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.75rem', fontWeight: 500, color: row.ratingColor }}>{row.rating}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', color: 'var(--stone)', lineHeight: 1.55 }}>{row.primaryHome}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', color: 'var(--stone)', lineHeight: 1.55 }}>{row.investment}</p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.75rem', color: 'var(--slate)' }}>{row.phase}</p>
                </div>
              ))}
            </div>

            {/* Dubai deep dive */}
            <p className="text-label mb-5">PRIORITY MARKETS — DEEP DIVE</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  flag: 'UAE / Dubai',
                  badge: 'VERY HIGH — PHASE 3',
                  badgeClass: 'badge-yield',
                  title: 'World\'s only government-operated tokenization infrastructure',
                  points: [
                    'Dubai Land Department\'s Real Estate Tokenization Project integrates blockchain with property title registration at the government level — the missing piece everywhere else.',
                    'First tokenized property sold out in under 24 hours, 224 investors from 40 countries.',
                    'DAMAC signed a $1 billion tokenization deal with MANTRA in 2025. Institutional scale validated.',
                    'No capital gains tax on UAE property. Triple-stack model: rental yield 6–8% + fund yield + appreciation.',
                    'VARA provides the clearest regulatory path outside Wyoming.',
                  ],
                },
                {
                  flag: 'Singapore',
                  badge: 'HIGH — PHASE 3',
                  badgeClass: 'badge-active',
                  title: 'Best institutional infrastructure in APAC',
                  points: [
                    'MAS Project Guardian: live pilots with JPMorgan, DBS, Standard Chartered, HSBC. Tokenized RE structures already validated.',
                    'MAS classified real estate security tokens as capital markets products — clear regulatory category.',
                    'Accredited investor threshold: SGD 2M net assets. Aligns with high-value homeowner target.',
                    'HSBC and Standard Chartered both have tokenized RE on their Singapore launch roadmap.',
                    'Gateway to Southeast Asian institutional capital.',
                  ],
                },
                {
                  flag: 'United Kingdom',
                  badge: 'HIGH — PHASE 2–3',
                  badgeClass: 'badge-active',
                  title: 'Largest institutional capital pool outside the U.S.',
                  points: [
                    'Digital Securities Sandbox (Bank of England + FCA): test tokenization in regulated environment without full registration.',
                    'UK Cryptoassets Regulations 2026 enacted February 2026 — comprehensive statutory framework now in place.',
                    'Archax (FCA-regulated) provides secondary market infrastructure.',
                    'Small offering exemption: up to GBP 8M without full FCA approval.',
                    'Equity release products widespread in UK — DeedStack\'s product translates directly.',
                  ],
                },
              ].map((m) => (
                <div key={m.flag} className="card flex flex-col">
                  <span className={`${m.badgeClass} self-start mb-3`}>{m.badge}</span>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.8rem', color: 'var(--timber)', marginBottom: '0.5rem' }}>{m.flag}</p>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', fontWeight: 600, color: 'var(--granite)', marginBottom: '1rem', lineHeight: 1.35 }}>{m.title}</h3>
                  <div className="flex flex-col gap-2 flex-1">
                    {m.points.map((pt, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <div style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--pine-pale)', marginTop: 9, flexShrink: 0 }} />
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8125rem', color: 'var(--stone)', lineHeight: 1.6 }}>{pt}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Roadmap */}
        <section className="py-24 px-6 md:px-12 lg:px-20" style={{ background: 'var(--snow)' }}>
          <div className="max-w-5xl mx-auto">
            <p className="text-label mb-3">PART 4</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 600, color: 'var(--granite)', marginBottom: '0.75rem', letterSpacing: '-0.015em', lineHeight: 1.2 }}>
              Phased compliance roadmap
            </h2>
            <p className="text-body mb-12" style={{ fontSize: '0.9375rem', maxWidth: 560 }}>
              Four phases from Wyoming pilot to global platform. Each phase builds on
              the legal and operational foundation of the prior — no phase is contingent on
              regulatory outcomes that haven&apos;t already materialized.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {roadmap.map((ph) => (
                <div key={ph.phase} className="card" style={{ borderTop: '3px solid var(--pine)' }}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '2rem', fontWeight: 500, color: 'var(--mist)', lineHeight: 1 }}>{ph.phase}</div>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 600, color: 'var(--granite)', marginTop: '0.25rem' }}>{ph.label}</h3>
                    </div>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.75rem', color: 'var(--gold)', paddingTop: '0.25rem' }}>{ph.timeline}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {ph.items.map((item, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--pine)', marginTop: 8, flexShrink: 0 }} />
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8125rem', color: 'var(--stone)', lineHeight: 1.65 }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Risk Matrix */}
        <section className="py-24 px-6 md:px-12 lg:px-20" style={{ background: 'var(--frost)' }}>
          <div className="max-w-5xl mx-auto">
            <p className="text-label mb-3">PART 5</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 600, color: 'var(--granite)', marginBottom: '0.75rem', letterSpacing: '-0.015em', lineHeight: 1.2 }}>
              Consolidated risk matrix
            </h2>
            <p className="text-body mb-10" style={{ fontSize: '0.9375rem', maxWidth: 560 }}>
              Sophisticated investors expect risk to be identified, not obscured. Every risk listed
              here has a corresponding mitigation built into the DeedStack structure, legal framework,
              or launch sequence.
            </p>

            <div className="card overflow-hidden" style={{ padding: 0 }}>
              <div className="grid px-6 py-3" style={{ gridTemplateColumns: '1.5fr 0.6fr 3fr', background: 'var(--white)', borderBottom: '1px solid var(--mist)' }}>
                {['Risk Area', 'Level', 'Mitigation'].map(h => <p key={h} className="text-label">{h}</p>)}
              </div>
              {risks.map((row, i) => (
                <div key={row.area} className="grid px-6 py-4 items-start" style={{ gridTemplateColumns: '1.5fr 0.6fr 3fr', borderBottom: i < risks.length - 1 ? '1px solid var(--mist)' : 'none', background: i % 2 === 0 ? 'var(--white)' : 'var(--snow)', gap: '1rem' }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'var(--granite)', fontWeight: 500 }}>{row.area}</p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.75rem', fontWeight: 500, color: row.level === 'HIGH' ? 'var(--gold)' : 'var(--timber)' }}>{row.level}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8125rem', color: 'var(--stone)', lineHeight: 1.65 }}>{row.mitigation}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investor CTA */}
        <section className="relative overflow-hidden py-24 px-6 md:px-12 lg:px-20" style={{ background: 'var(--obsidian)' }}>
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-label mb-4" style={{ color: 'var(--slate)' }}>INVESTOR ACCESS</p>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 600, color: 'var(--white)', marginBottom: '1rem', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
                  The structure is ready.
                  <br />The window is open.
                </h2>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: 'var(--slate)', lineHeight: 1.75, marginBottom: '2rem' }}>
                  Wyoming-incorporated. Reg D 506(c) offering. Investment Adviser registration
                  in process. FinTech Sandbox application filed. The compliance framework is
                  not forthcoming — it is built.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/yield" className="btn-primary" style={{ padding: '13px 28px', fontSize: 15 }}>
                    Fund Strategy &amp; Returns
                  </Link>
                  <Link href="/how-it-works" style={{ display: 'inline-flex', alignItems: 'center', padding: '13px 28px', fontSize: 15, fontFamily: "'DM Sans', sans-serif", fontWeight: 500, color: 'var(--slate)', textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.12)', borderRadius: 'var(--r-md)' }} className="hover:!border-[rgba(255,255,255,0.3)] hover:!text-white">
                    Platform Mechanics →
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {[
                  { label: 'Offering Type', value: 'Reg D Rule 506(c)' },
                  { label: 'Investor Eligibility', value: 'Accredited Investors' },
                  { label: 'Registration', value: 'Wyoming-incorporated' },
                  { label: 'Fund Registration', value: 'Wyoming IA (in process)' },
                  { label: 'Token Standard', value: 'ERC-1400 / ERC-3643' },
                  { label: 'Target Fund Return', value: '8% gross annual' },
                  { label: 'Custody', value: 'SPDI partnership (TBD)' },
                  { label: 'Launch Cohort', value: '10–20 Wyoming properties' },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between items-center py-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8125rem', color: 'var(--slate)' }}>{row.label}</span>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.8125rem', color: 'var(--cloud)', fontWeight: 500 }}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-14" style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: 'var(--slate)', lineHeight: 1.7, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem' }}>
              This document is not legal advice. DeedStack must engage — and has engaged — qualified securities counsel, real estate attorneys, and consumer protection specialists.
              Securities offered under Regulation D Rule 506(c). Currently available to accredited investors in Wyoming only. Past performance does not guarantee future results.
              This is not investment advice. Regulatory analysis as of April 2026. Subject to change.
            </p>
          </div>
          <MountainSVG variant="dark" />
        </section>

      </main>
    </InvestorGate>
  );
}
