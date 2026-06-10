import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Marketplace - Tokenized Wyoming Real Estate',
  description: 'Browse tokenized Wyoming real estate listings on DeedStack. Fractional DEED tokens starting at $100. Reg D 506(c) — accredited investors only. Subject to securities restrictions and transfer eligibility.',
};

const listings = [
  {
    id: 'jackson-hole-01',
    city: 'Jackson Hole',
    state: 'WY',
    address: '284 Elk Ridge Dr, Jackson, WY 83001',
    type: 'Single-Family Residential',
    totalValue: 2400000,
    tokens: 240000,
    tokensAvailable: 48000,
    pricePerToken: 10,
    projectedYield: 7.2,
    minInvestment: 100,
    status: 'ILLUSTRATIVE',
    statusClass: 'active',
    sqft: 3840,
    bedBath: '4 bd / 3.5 ba',
    gradient: 'linear-gradient(135deg, #1a3a2a 0%, #2d5a3d 50%, #1e4a30 100%)',
    accentColor: 'var(--pine)',
    highlight: 'Teton County — highest median home value in the US',
  },
  {
    id: 'cheyenne-01',
    city: 'Cheyenne',
    state: 'WY',
    address: '1102 Capitol Ave, Cheyenne, WY 82001',
    type: 'Multi-Family Residential',
    totalValue: 680000,
    tokens: 68000,
    tokensAvailable: 20400,
    pricePerToken: 10,
    projectedYield: 6.8,
    minInvestment: 100,
    status: 'ILLUSTRATIVE',
    statusClass: 'active',
    sqft: 2210,
    bedBath: '3 bd / 2 ba (duplex)',
    gradient: 'linear-gradient(135deg, #1c2a3a 0%, #2a3d55 50%, #1a2d48 100%)',
    accentColor: '#4A90D9',
    highlight: 'State capital — stable government-sector rental demand',
  },
  {
    id: 'casper-01',
    city: 'Casper',
    state: 'WY',
    address: '750 Mountain View Rd, Casper, WY 82601',
    type: 'Single-Family Residential',
    totalValue: 1200000,
    tokens: 120000,
    tokensAvailable: 36000,
    pricePerToken: 10,
    projectedYield: 7.5,
    minInvestment: 100,
    status: 'ILLUSTRATIVE',
    statusClass: 'active',
    sqft: 3120,
    bedBath: '4 bd / 3 ba',
    gradient: 'linear-gradient(135deg, #2a1a1a 0%, #4a2d2d 50%, #3a2020 100%)',
    accentColor: 'var(--gold)',
    highlight: "Wyoming's second-largest city — oil & gas sector hub",
  },
  {
    id: 'sheridan-01',
    city: 'Sheridan',
    state: 'WY',
    address: '38 Powder River Ln, Sheridan, WY 82801',
    type: 'Single-Family Residential',
    totalValue: 890000,
    tokens: 89000,
    tokensAvailable: 17800,
    pricePerToken: 10,
    projectedYield: 6.4,
    minInvestment: 100,
    status: 'ILLUSTRATIVE',
    statusClass: 'active',
    sqft: 2680,
    bedBath: '3 bd / 2.5 ba',
    gradient: 'linear-gradient(135deg, #1a1a2a 0%, #2d2d4a 50%, #20203a 100%)',
    accentColor: '#9B88E8',
    highlight: 'Ranked one of the best small cities in America',
  },
  {
    id: 'cody-01',
    city: 'Cody',
    state: 'WY',
    address: '512 Buffalo Bill Ave, Cody, WY 82414',
    type: 'Single-Family Residential',
    totalValue: 1500000,
    tokens: 150000,
    tokensAvailable: 52500,
    pricePerToken: 10,
    projectedYield: 8.1,
    minInvestment: 100,
    status: 'ILLUSTRATIVE',
    statusClass: 'active',
    sqft: 4100,
    bedBath: '5 bd / 4 ba',
    gradient: 'linear-gradient(135deg, #1a2a1a 0%, #2d4a2d 50%, #203a20 100%)',
    accentColor: '#52B788',
    highlight: 'Gateway to Yellowstone — premium tourism-driven demand',
  },
  {
    id: 'laramie-01',
    city: 'Laramie',
    state: 'WY',
    address: '209 University Ave, Laramie, WY 82070',
    type: 'Single-Family Residential',
    totalValue: 440000,
    tokens: 44000,
    tokensAvailable: 15400,
    pricePerToken: 10,
    projectedYield: 7.8,
    minInvestment: 100,
    status: 'ILLUSTRATIVE',
    statusClass: 'active',
    sqft: 1840,
    bedBath: '3 bd / 2 ba',
    gradient: 'linear-gradient(135deg, #2a1a2a 0%, #4a2d4a 50%, #3a203a 100%)',
    accentColor: '#E88BC8',
    highlight: 'University of Wyoming — consistent student/faculty rental market',
  },
];

function formatCurrency(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
  return `$${n}`;
}

function formatNumber(n: number) {
  return n.toLocaleString();
}

export default function MarketplacePage() {
  const totalValue = listings.reduce((s, l) => s + l.totalValue, 0);
  const totalTokens = listings.reduce((s, l) => s + l.tokens, 0);
  const totalAvailable = listings.reduce((s, l) => s + l.tokensAvailable, 0);

  return (
    <>
      <Nav />
      <main style={{ background: 'var(--snow)' }}>

        {/* Hero */}
        <section
          className="pt-[128px] pb-16 px-6 md:px-12 lg:px-20 relative overflow-hidden"
          style={{ background: 'var(--obsidian)' }}
        >
          {/* Grid background */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '48px 48px', pointerEvents: 'none' }} />

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Sample notice */}
            <div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full"
              style={{ background: 'rgba(212,167,80,0.12)', border: '1px solid rgba(212,167,80,0.3)' }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)', display: 'inline-block', flexShrink: 0 }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', letterSpacing: '0.1em', color: 'var(--gold)', fontWeight: 600 }}>
                SAMPLE LISTINGS — FOR ILLUSTRATION ONLY — NOT LIVE SECURITIES
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', marginBottom: 12 }}>DEEDRIVER MARKETPLACE</p>
                <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 600, color: 'var(--white)', lineHeight: 1.15, marginBottom: '1rem' }}>
                  Wyoming real estate,<br />
                  <span style={{ color: '#52B788' }}>tokenized and tradeable.</span>
                </h1>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.0625rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.6)', maxWidth: 520 }}>
                  Browse fractional DEED token listings for verified Wyoming properties. Start from $100. Designed for compliant secondary transfer — subject to securities restrictions, eligibility checks, transfer rules, and available marketplace liquidity.
                </p>
              </div>

              {/* Platform stats */}
              <div className="flex gap-6 flex-wrap md:flex-nowrap md:flex-col md:items-end">
                {[
                  { value: formatCurrency(totalValue), label: 'Total Value Listed' },
                  { value: formatNumber(totalTokens), label: 'DEED Tokens' },
                  { value: formatNumber(totalAvailable), label: 'Tokens Available' },
                ].map((s) => (
                  <div key={s.label} className="text-right">
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '1.5rem', fontWeight: 500, color: 'var(--white)', lineHeight: 1 }}>{s.value}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', letterSpacing: '0.07em', color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Filter bar */}
            <div className="flex flex-wrap gap-3 items-center">
              {[
                { label: 'All Properties', active: true },
                { label: 'Single-Family', active: false },
                { label: 'Multi-Family', active: false },
                { label: 'Highest Yield', active: false },
              ].map((f) => (
                <button
                  key={f.label}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12,
                    fontWeight: f.active ? 600 : 400,
                    padding: '6px 14px',
                    borderRadius: 'var(--r-sm)',
                    background: f.active ? 'var(--pine)' : 'rgba(255,255,255,0.06)',
                    color: f.active ? '#fff' : 'rgba(255,255,255,0.5)',
                    border: f.active ? 'none' : '1px solid rgba(255,255,255,0.1)',
                    cursor: 'pointer',
                    transition: 'all 150ms',
                  }}
                >
                  {f.label}
                </button>
              ))}
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.3)', marginLeft: 'auto' }}>
                {listings.length} listings
              </span>
            </div>
          </div>
        </section>

        {/* Listing grid */}
        <section className="py-16 px-6 md:px-12 lg:px-20" style={{ background: 'var(--frost)' }}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {listings.map((listing) => {
                const pctAvailable = Math.round((listing.tokensAvailable / listing.tokens) * 100);
                const pctSold = 100 - pctAvailable;

                return (
                  <div
                    key={listing.id}
                    className="rounded-xl overflow-hidden flex flex-col"
                    style={{ background: 'var(--white)', border: '1px solid var(--mist)', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
                  >
                    {/* Property image placeholder */}
                    <div style={{ height: 180, background: listing.gradient, position: 'relative', flexShrink: 0 }}>
                      {/* Status badge */}
                      <div style={{ position: 'absolute', top: 12, left: 12 }}>
                        <span style={{
                          display: 'inline-flex', alignItems: 'center', gap: 5,
                          fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', fontWeight: 600,
                          letterSpacing: '0.08em', padding: '4px 10px', borderRadius: 999,
                          background: 'rgba(82,183,136,0.18)', color: '#52B788',
                          border: '1px solid rgba(82,183,136,0.35)',
                        }}>
                          <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#52B788', display: 'inline-block' }} />
                          ILLUSTRATIVE
                        </span>
                      </div>

                      {/* Projected yield badge */}
                      <div style={{ position: 'absolute', top: 12, right: 12 }}>
                        <span style={{
                          fontFamily: "'DM Mono', monospace", fontSize: '0.75rem', fontWeight: 600,
                          padding: '4px 10px', borderRadius: 999,
                          background: 'rgba(0,0,0,0.35)', color: '#fff',
                          backdropFilter: 'blur(4px)',
                        }}>
                          {listing.projectedYield}% APY
                        </span>
                      </div>

                      {/* City label */}
                      <div style={{ position: 'absolute', bottom: 12, left: 12 }}>
                        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 600, color: 'rgba(255,255,255,0.95)', lineHeight: 1 }}>{listing.city}</div>
                        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.7rem', color: 'rgba(255,255,255,0.55)', marginTop: 2 }}>{listing.state} · {listing.type}</div>
                      </div>

                      {/* Accent line */}
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: listing.accentColor }} />
                    </div>

                    {/* Card body */}
                    <div className="flex flex-col flex-1 p-5">
                      {/* Address */}
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', color: 'var(--slate)', marginBottom: 10 }}>
                        {listing.address}
                      </p>

                      {/* Highlight */}
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', color: 'var(--stone)', lineHeight: 1.5, marginBottom: 14, fontStyle: 'italic' }}>
                        {listing.highlight}
                      </p>

                      {/* Property details */}
                      <div className="flex gap-4 mb-4">
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', color: 'var(--slate)' }}>{listing.bedBath}</span>
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', color: 'var(--slate)' }}>{listing.sqft.toLocaleString()} sqft</span>
                      </div>

                      {/* Key stats */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        {[
                          { label: 'Property Value', value: formatCurrency(listing.totalValue) },
                          { label: 'Price / Token', value: `$${listing.pricePerToken}` },
                          { label: 'Total Tokens', value: formatNumber(listing.tokens) },
                          { label: 'Min Investment', value: `$${listing.minInvestment}` },
                        ].map((s) => (
                          <div key={s.label} className="rounded-lg p-3" style={{ background: 'var(--frost)' }}>
                            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.85rem', fontWeight: 500, color: 'var(--granite)', lineHeight: 1 }}>{s.value}</div>
                            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', letterSpacing: '0.06em', color: 'var(--slate)', marginTop: 4 }}>{s.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Token availability bar */}
                      <div className="mb-5">
                        <div className="flex justify-between mb-1.5">
                          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', color: 'var(--slate)' }}>
                            {formatNumber(listing.tokensAvailable)} tokens available
                          </span>
                          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.72rem', color: 'var(--pine)', fontWeight: 600 }}>
                            {pctAvailable}% left
                          </span>
                        </div>
                        <div style={{ height: 4, borderRadius: 2, background: 'var(--mist)', overflow: 'hidden' }}>
                          <div style={{ height: '100%', borderRadius: 2, background: `linear-gradient(90deg, ${listing.accentColor}, #52B788)`, width: `${pctSold}%`, transition: 'width 0.3s' }} />
                        </div>
                        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', color: 'var(--slate)', marginTop: 4 }}>
                          {pctSold}% subscribed
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-auto flex gap-2">
                        <Link
                          href="/interest-list"
                          className="flex-1 text-center hover:!bg-[#3A7A5C]"
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: 13,
                            fontWeight: 500,
                            padding: '10px 16px',
                            borderRadius: 'var(--r-sm)',
                            background: 'var(--pine)',
                            color: '#fff',
                            textDecoration: 'none',
                            display: 'block',
                            transition: 'background 200ms',
                          }}
                        >
                          Request Access
                        </Link>
                        <button
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: 13,
                            fontWeight: 500,
                            padding: '10px 14px',
                            borderRadius: 'var(--r-sm)',
                            background: 'transparent',
                            color: 'var(--stone)',
                            border: '1.5px solid var(--mist)',
                            cursor: 'pointer',
                            transition: 'border-color 150ms',
                          }}
                        >
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How tokens work */}
        <section className="py-20 px-6 md:px-12 lg:px-20" style={{ background: 'var(--snow)' }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-label mb-3">HOW IT WORKS</p>
              <h2 className="text-h1" style={{ color: 'var(--granite)' }}>Buying DEED tokens</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { num: '01', title: 'Join Waitlist', body: 'Complete the interest form and verify accredited investor status. Wyoming pilot slots are limited.' },
                { num: '02', title: 'Select Listing', body: 'Browse available properties and choose how many DEED tokens to acquire at $10 each.' },
                { num: '03', title: 'Settle On-Chain', body: 'Ownership is recorded on-chain. No brokers, no escrow delays, no 6% commission.' },
                { num: '04', title: 'Earn or Transfer', body: 'Hold tokens for yield distributions, or pursue compliant secondary transfer — subject to securities restrictions, eligibility checks, and available marketplace liquidity.' },
              ].map((step) => (
                <div key={step.num} className="text-center">
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '1.75rem', fontWeight: 500, color: 'var(--mist)', lineHeight: 1, marginBottom: 12 }}>{step.num}</div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', fontWeight: 600, color: 'var(--granite)', marginBottom: '0.5rem' }}>{step.title}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'var(--stone)', lineHeight: 1.65 }}>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section style={{ background: 'var(--obsidian)' }} className="py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>
              ACCREDITED INVESTORS ONLY · REG D 506(c)
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 600, color: 'var(--white)', marginBottom: '1rem', lineHeight: 1.2 }}>
              Own Wyoming real estate<br />for $100.
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.55)', maxWidth: 480, margin: '0 auto 2.5rem' }}>
              Join the waitlist and receive your free Equity Opportunity Report. No commitment. No credit card required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/interest-list" className="btn-primary" style={{ padding: '13px 28px', fontSize: 15 }}>
                Join the Waitlist
              </Link>
              <Link
                href="/how-it-works"
                style={{ display: 'inline-flex', alignItems: 'center', padding: '13px 28px', fontSize: 15, fontFamily: "'DM Sans', sans-serif", fontWeight: 500, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.15)', borderRadius: 'var(--r-md)' }}
                className="hover:!border-[rgba(255,255,255,0.35)] hover:!text-white"
              >
                How Tokenization Works
              </Link>
            </div>
          </div>
        </section>

        {/* Legal disclaimer */}
        <section className="px-6 md:px-12 lg:px-20 py-10" style={{ background: 'var(--snow)', borderTop: '1px solid var(--mist)' }}>
          <div className="max-w-5xl mx-auto">
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', color: 'var(--slate)', lineHeight: 1.75 }}>
              <strong>Important Disclosures:</strong> All listings shown are sample illustrations for platform demonstration purposes only and do not represent actual securities offerings, live property listings, or available investments. Property addresses, valuations, yield figures, and token data are hypothetical. DeedStack is operating a controlled pilot under Wyoming&apos;s digital asset statutes. No tokenization services are available outside Wyoming at this time. Securities offered under Reg D 506(c) are available to verified accredited investors only as defined under SEC Rule 501(a). Projected yields are targets, not guarantees, and are subject to fund performance, property valuations, liquidity, and regulatory constraints. Past performance of affiliated fund managers is not indicative of future results. Nothing on this page constitutes an offer to sell or solicitation to buy any security.{' '}
              <Link href="/regulation" style={{ color: 'var(--pine)', textDecoration: 'underline' }}>
                Learn more about our regulatory framework →
              </Link>
            </p>
          </div>
        </section>

        {/* Footer */}
        <Footer />

      </main>
    </>
  );
}
