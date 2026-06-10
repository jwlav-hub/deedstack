import Nav from '@/components/Nav';
import MountainSVG from '@/components/MountainSVG';
import Link from 'next/link';

const values = [
  {
    title: 'The deed stays with you.',
    body: 'Always. No title transfer. No deed-in-lieu. No lender holding the keys. You own your home from day one to day last. The token is a financial instrument — not a claim on your property.',
  },
  {
    title: 'No debt. No personal liability.',
    body: 'We built a yield product, not a loan product. You never sign a promissory note. You never make a monthly payment. You never carry a balance that compounds against you in the middle of the night.',
  },
  {
    title: 'Transparent fees. No fine print.',
    body: 'Every fee is disclosed upfront. The tokenization cost. The management fee. The performance fee. The marketplace rate. You know exactly what you are paying before you sign anything.',
  },
  {
    title: 'Wyoming-rooted. Principled by design.',
    body: 'We incorporated in Wyoming because the law here is clear, fair, and built for this. Not because it was convenient. The structure of DeedStack reflects that same directness — no workarounds, no gray areas.',
  },
];

const principles = [
  {
    label: 'Anti-Corporate Housing',
    body: 'Corporate ownership of single-family homes has extracted wealth from neighborhoods for decades. DeedStack does not facilitate institutional takeover of residential property. Homeowners keep the deed. Full stop.',
  },
  {
    label: 'Accredited Investor First',
    body: 'We launch under Reg D 506(c) — accredited investors only. This is not a limitation we resent. It is a commitment to doing this correctly before scaling. Regulatory integrity is not optional.',
  },
  {
    label: 'Performance Over Promises',
    body: 'The fund manager has a verified five-year track record. We lead with the numbers, not the narrative. If the performance does not hold, no amount of branding fixes that.',
  },
];

export default function AboutPage() {
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
            <p className="text-label mb-4">MISSION</p>
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
              Your home.
              <br />
              <span style={{ color: 'var(--pine)' }}>Your equity. Your terms.</span>
            </h1>
            <p className="text-body" style={{ fontSize: '1.0625rem', maxWidth: 560 }}>
              DeedStack exists because homeowners deserve access to institutional-grade
              returns on equity they already own — without giving up their deed, taking
              on debt, or paying a broker to do it.
            </p>
          </div>
          <MountainSVG variant="light" />
        </section>

        {/* The problem we solve */}
        <section className="py-20 px-6 md:px-12 lg:px-20" style={{ background: 'var(--frost)' }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-label mb-6">THE PROBLEM</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)',
                    fontWeight: 600,
                    color: 'var(--granite)',
                    marginBottom: '1rem',
                    lineHeight: 1.25,
                  }}
                >
                  Homeowners hold most of their wealth in a single, illiquid asset.
                </h2>
                <p className="text-body" style={{ fontSize: '0.9375rem' }}>
                  The equity is real. The value is real. But accessing it has always meant
                  borrowing against it, selling a piece of it, or watching it sit idle.
                  None of those options were designed for the homeowner.
                </p>
              </div>
              <div>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)',
                    fontWeight: 600,
                    color: 'var(--granite)',
                    marginBottom: '1rem',
                    lineHeight: 1.25,
                  }}
                >
                  Institutional capital earns on that equity. Homeowners don&apos;t.
                </h2>
                <p className="text-body" style={{ fontSize: '0.9375rem' }}>
                  Banks use your equity as collateral to generate returns they keep.
                  Reverse mortgage lenders profit from compounding interest on what
                  you built. DeedStack redirects that return to you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-6 md:px-12 lg:px-20" style={{ background: 'var(--snow)' }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-label mb-12">WHAT WE STAND FOR</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="card"
                  style={{ borderTop: '3px solid var(--pine-pale)' }}
                >
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: 'var(--granite)',
                      marginBottom: '0.75rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {v.title}
                  </h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'var(--stone)', lineHeight: 1.75 }}>
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="py-20 px-6 md:px-12 lg:px-20" style={{ background: 'var(--frost)' }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-label mb-3">PRINCIPLES</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)',
                fontWeight: 600,
                color: 'var(--granite)',
                marginBottom: '2.5rem',
              }}
            >
              How we operate.
            </h2>
            <div className="flex flex-col gap-0">
              {principles.map((p, i) => (
                <div
                  key={p.label}
                  className="py-8 flex gap-8 items-start"
                  style={{ borderBottom: i < principles.length - 1 ? '1px solid var(--mist)' : 'none' }}
                >
                  <div style={{ minWidth: 180 }}>
                    <p
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        color: 'var(--pine)',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {p.label}
                    </p>
                  </div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9375rem', color: 'var(--stone)', lineHeight: 1.75 }}>
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Wyoming roots */}
        <section className="py-20 px-6 md:px-12 lg:px-20" style={{ background: 'var(--snow)' }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-label mb-3">WHERE WE&apos;RE FROM</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)',
                fontWeight: 600,
                color: 'var(--granite)',
                marginBottom: '1rem',
              }}
            >
              Wyoming-incorporated. Not by accident.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
              <p className="text-body" style={{ fontSize: '0.9375rem' }}>
                Wyoming has built the most complete legal framework for digital asset property
                rights in the United States. First state to recognize digital assets as a
                distinct property class. First DAO LLC legislation. No state income tax.
                We are here because the law is here.
              </p>
              <p className="text-body" style={{ fontSize: '0.9375rem' }}>
                The Wyoming identity is not branding. It reflects a plainspoken approach
                to building — no unnecessary complexity, no financial engineering for its
                own sake, no hiding fees in the fine print. That ethos runs through
                every part of how DeedStack is built.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/regulation"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  color: 'var(--pine)',
                  textDecoration: 'none',
                }}
              >
                The Wyoming Regulatory Advantage →
              </Link>
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
              Your equity has been working for everyone else.
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
              See what it could earn for you instead.
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
              Wyoming-incorporated. This is not investment advice.
            </p>
          </div>
          <MountainSVG variant="dark" />
        </section>

      </main>
    </>
  );
}
