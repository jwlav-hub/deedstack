import Nav from '@/components/Nav';
import MountainSVG from '@/components/MountainSVG';
import Link from 'next/link';

const advantages = [
  {
    num: '01',
    title: 'First Digital Asset Property Law',
    body: 'Wyoming was the first U.S. state to recognize digital assets as a distinct property class under law. This means tokenized equity has a clear, enforceable legal standing — not a gray area, not a workaround.',
    note: 'Wyoming Statute § 34-29-101 et seq.',
  },
  {
    num: '02',
    title: 'DAO LLC Structure',
    body: 'Wyoming created the first legal framework for Decentralized Autonomous Organizations as limited liability companies. DeedRiver operates within this framework, giving token structures a recognized legal home that other states cannot match.',
    note: 'Wyoming DAO LLC Act, W.S. § 17-31-101.',
  },
  {
    num: '03',
    title: 'No State Income Tax',
    body: 'Wyoming has no personal income tax and no corporate income tax. Returns distributed to homeowners are not subject to state-level income taxation — a meaningful difference at scale.',
    note: 'Consult a tax advisor for your specific situation.',
  },
  {
    num: '04',
    title: 'Reg D 506(c) Clarity',
    body: 'Wyoming regulators have been consistent and proactive in clarifying the rules around securities token offerings. DeedRiver launches under Reg D 506(c) — the federal exemption for accredited investor offerings — with full state alignment.',
    note: 'Accredited investors only. Not available in all states.',
  },
];

const comparison = [
  { category: 'Digital Asset Property Law', wyoming: 'Yes — statute enacted 2019', others: 'No statutory recognition' },
  { category: 'DAO LLC Legal Structure', wyoming: 'Yes — first in the U.S.', others: 'Not recognized' },
  { category: 'State Income Tax', wyoming: 'None', others: 'Up to 13.3%' },
  { category: 'Blockchain-Friendly Banking', wyoming: 'SPDI Charter available', others: 'Traditional banking only' },
  { category: 'Token as Property', wyoming: 'Legally recognized', others: 'Legal ambiguity' },
  { category: 'Regulatory Clarity', wyoming: 'High — proactive guidance', others: 'Varies — often reactive' },
];

export default function WyomingPage() {
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
            <p className="text-label mb-4">REGULATORY ADVANTAGE</p>
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
              Wyoming wrote
              <br />
              <span style={{ color: 'var(--pine)' }}>the rulebook.</span>
            </h1>
            <p className="text-body" style={{ fontSize: '1.0625rem', maxWidth: 560 }}>
              No other state has built a more complete legal framework for tokenized assets.
              DeedRiver is incorporated in Wyoming because the law is here. The clarity is here.
              The structure is here.
            </p>
          </div>

          {/* Stat strip */}
          <div className="max-w-3xl mx-auto mt-12 relative z-10">
            <div className="flex flex-wrap gap-4">
              {[
                { value: '2019', label: 'First Digital Asset Law' },
                { value: '#1', label: 'DAO LLC Framework' },
                { value: '0%', label: 'State Income Tax' },
                { value: '506(c)', label: 'Regulatory Path' },
              ].map((s) => (
                <div key={s.label} className="stat-card flex-1 min-w-[120px]">
                  <div className="stat-value" style={{ fontFamily: "'DM Mono', monospace" }}>
                    {s.value}
                  </div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <MountainSVG variant="light" />
        </section>

        {/* Advantages */}
        <section className="py-20 px-6 md:px-12 lg:px-20" style={{ background: 'var(--frost)' }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-label mb-12">WHY WYOMING</p>
            <div className="flex flex-col gap-0">
              {advantages.map((item, i) => (
                <div
                  key={item.num}
                  className="flex gap-8 items-start py-10"
                  style={{
                    borderBottom: i < advantages.length - 1 ? '1px solid var(--mist)' : 'none',
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
                    {item.num}
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
                      {item.title}
                    </h2>
                    <p className="text-body mb-4" style={{ fontSize: '0.9375rem' }}>
                      {item.body}
                    </p>
                    <p
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: '0.8rem',
                        color: 'var(--timber)',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {item.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* State Comparison */}
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
              Wyoming vs. everywhere else
            </h2>
            <p className="text-body mb-8" style={{ fontSize: '0.9375rem', maxWidth: 520 }}>
              The gap is not close. Wyoming made deliberate, statute-level commitments
              to digital asset property rights that other states have not matched.
            </p>

            <div className="card overflow-hidden" style={{ padding: 0 }}>
              <div
                className="grid grid-cols-3 px-6 py-3"
                style={{ background: 'var(--frost)', borderBottom: '1px solid var(--mist)' }}
              >
                <p className="text-label">Category</p>
                <p className="text-label" style={{ color: 'var(--pine)' }}>Wyoming</p>
                <p className="text-label">Other States</p>
              </div>
              {comparison.map((row, i) => (
                <div
                  key={row.category}
                  className="grid grid-cols-3 px-6 py-4 items-center"
                  style={{
                    borderBottom: i < comparison.length - 1 ? '1px solid var(--mist)' : 'none',
                    background: i % 2 === 0 ? 'var(--white)' : 'var(--snow)',
                  }}
                >
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'var(--stone)' }}>
                    {row.category}
                  </p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.875rem', color: 'var(--pine)', fontWeight: 500 }}>
                    {row.wyoming}
                  </p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.875rem', color: 'var(--slate)' }}>
                    {row.others}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What this means for homeowners */}
        <section className="py-20 px-6 md:px-12 lg:px-20" style={{ background: 'var(--frost)' }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-label mb-3">WHAT THIS MEANS FOR YOU</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)',
                fontWeight: 600,
                color: 'var(--granite)',
                marginBottom: '1rem',
              }}
            >
              Your tokens have legal standing.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
              {[
                {
                  title: 'Property Rights Are Clear',
                  body: 'Wyoming law recognizes your tokens as a distinct property class. Not a novelty. Not a gray area. A legally defined asset with enforceable rights.',
                },
                {
                  title: 'No State Tax Drag',
                  body: 'Yield distributed to Wyoming residents is not subject to state income tax. Your 12% target return is not eroded by state-level taxation.',
                },
                {
                  title: 'Incorporated Where It Counts',
                  body: 'DeedRiver is a Wyoming corporation. The legal structure, the token issuance, and the fund operations are all governed under Wyoming law — the most favorable in the country.',
                },
                {
                  title: 'Accredited Investor Framework',
                  body: 'Reg D 506(c) requires accredited investor verification. Wyoming regulators have provided clear guidance on this process. No ambiguity. No retroactive enforcement risk.',
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="card"
                  style={{ borderLeft: '3px solid var(--pine-pale)' }}
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
                    {card.title}
                  </h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'var(--stone)', lineHeight: 1.7 }}>
                    {card.body}
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
            <p className="text-label mb-4" style={{ color: 'var(--slate)' }}>GET STARTED</p>
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
              Built on the right foundation.
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
              The legal clarity is here. The structure is in place.
              See what your equity can earn under it.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/calculator" className="btn-primary" style={{ padding: '13px 28px', fontSize: 15 }}>
                Calculate Your Yield
              </Link>
              <Link
                href="/how-it-works"
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
                How It Works →
              </Link>
            </div>
            <p
              className="mt-8"
              style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: 'var(--slate)', lineHeight: 1.7 }}
            >
              Securities offered under Reg D 506(c). For accredited investors only.
              This is not legal or tax advice.
            </p>
          </div>
          <MountainSVG variant="dark" />
        </section>

      </main>
    </>
  );
}
