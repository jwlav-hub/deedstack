import Link from 'next/link';

const footerCols = [
  {
    heading: 'Platform',
    headingColor: 'var(--slate)',
    links: [
      { href: '/how-it-works', label: 'How It Works' },
      { href: '/marketplace',  label: 'Marketplace' },
      { href: '/simulations',  label: 'Simulations' },
    ],
  },
  {
    heading: 'Concepts',
    headingColor: 'var(--slate)',
    links: [
      { href: '/yield-deed',  label: 'Yield Deed' },
      { href: '/deed-shield', label: 'DeedShield' },
      { href: '/pilot',       label: 'Pilot' },
      { href: '/faq',         label: 'FAQ' },
    ],
  },
  {
    heading: 'Investors',
    headingColor: 'var(--gold)',
    links: [
      { href: '/about',     label: 'About & Partners' },
      { href: '/investors', label: 'Data Room' },
    ],
  },
  {
    heading: 'Company',
    headingColor: 'var(--slate)',
    links: [
      { href: '/interest-list', label: 'Join Waitlist' },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--obsidian)', borderTop: '1px solid rgba(255,255,255,0.06)' }} className="py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src="/logo-dark.png" alt="DeedStack" style={{ height: 20, width: 'auto', display: 'block' }} />
            <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.1rem', color: 'var(--white)' }}>Deed</span>
            <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.1rem', color: '#52B788', marginLeft: '-0.3rem' }}>Stack</span>
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'var(--slate)', maxWidth: 260, lineHeight: 1.65 }}>
            Real estate tokenization platform. Wyoming-incorporated. Reg D 506(c).
          </p>
        </div>

        {/* Nav columns */}
        <div className="flex flex-wrap gap-12">
          {footerCols.map((col) => (
            <div key={col.heading}>
              <p className="text-label mb-4" style={{ color: col.headingColor }}>{col.heading}</p>
              <div className="flex flex-col gap-2">
                {col.links.map((l) => (
                  <Link key={l.href} href={l.href}
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'var(--slate)', textDecoration: 'none' }}
                    className="hover:!text-white">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto mt-10 pt-6 flex flex-col md:flex-row justify-between gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: 'var(--slate)' }}>© 2026 DeedStack. Wyoming-incorporated.</p>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: 'var(--slate)', maxWidth: 520 }}>
          Securities offered under Reg D 506(c). For accredited investors only. Not financial advice. Past fund performance does not guarantee future results.
        </p>
      </div>
    </footer>
  );
}
