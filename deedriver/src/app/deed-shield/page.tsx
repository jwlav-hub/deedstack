import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import MountainSVG from '@/components/MountainSVG';
import CostCalculator from '@/components/CostCalculator';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'DeedShield — Protect Your Home with an LLC + Tokenization',
  description: 'DeedStack automates Wyoming LLC formation and property tokenization — giving your home asset protection, estate planning, and privacy for a fraction of attorney cost.',
};

const pillars = [
  {
    tag: 'PROTECT',
    tagColor: 'var(--pine)',
    tagBg: 'rgba(40,90,68,0.08)',
    accentColor: 'var(--pine)',
    title: 'Protect your assets',
    body: "Place your home in a Wyoming LLC — the nation's strongest asset-protection structure. Your personal name disappears from public property records. Your equity is shielded from personal liability judgments.",
    bullets: [
      'LLC ownership removes your name from county records',
      'Separates home equity from personal liability exposure',
      'Wyoming charging-order protection — strongest in the US',
      'Fraction of what estate attorneys charge ($3k–8k)',
    ],
    stat: '$799',
    statLabel: 'vs. $3k–8k attorney',
  },
  {
    tag: 'PASS',
    tagColor: '#52B788',
    tagBg: 'rgba(82,183,136,0.08)',
    accentColor: '#52B788',
    title: 'Pass it to your family',
    body: 'Traditional probate takes 6–18 months and costs $5–20k. With your home in a tokenized LLC, membership interests transfer to heirs in minutes — no recorded deed change, no probate, no transfer tax in most states.',
    bullets: [
      'Frictionless inheritance — no probate court',
      'Gift fractional equity to children during your lifetime',
      'Smart contract vest schedules replace complex agreements',
      'No deed re-recording when ownership transfers',
    ],
    stat: '0',
    statLabel: 'Probate months',
  },
  {
    tag: 'POSITION',
    tagColor: 'var(--gold)',
    tagBg: 'rgba(176,138,38,0.08)',
    accentColor: 'var(--gold)',
    title: 'Position for what\'s next',
    body: 'Tokenizing today pre-positions your equity for DeedStack\'s yield and liquidity products as they launch. Early tokenizers gain first access and preferred terms — without doing anything differently today.',
    bullets: [
      'Tokens are already minted when yield product launches',
      'Priority access to DeedYield participation',
      'Future partial liquidity without refinancing',
      'On-chain record is permanent — no re-work required',
    ],
    stat: 'Early',
    statLabel: 'Access priority',
  },
];

const steps = [
  {
    num: '01',
    title: 'We form your Wyoming LLC',
    body: 'DeedStack automates state filing, operating agreement generation, and registered agent setup — all in one workflow. No attorney required.',
  },
  {
    num: '02',
    title: 'We transfer your deed',
    body: 'Your home\'s title transfers to the LLC via a properly recorded deed. We handle the county recording. Your name comes off the public record.',
  },
  {
    num: '03',
    title: 'We tokenize your equity',
    body: 'Your net equity is minted as DEED tokens representing LLC membership interests. Ownership is on-chain, verifiable, and transferable without county filings.',
  },
  {
    num: '04',
    title: 'You\'re protected — and positioned',
    body: 'Annual compliance handled automatically. When yield and liquidity products launch, your tokens are ready to participate. Nothing to redo.',
  },
];

const tiers = [
  {
    name: 'Protection',
    price: '$799',
    annual: '+ $99/yr',
    color: 'var(--pine)',
    colorBg: 'rgba(40,90,68,0.06)',
    colorBorder: 'rgba(40,90,68,0.25)',
    recommended: false,
    includes: [
      'Wyoming LLC formation',
      'Deed transfer + county recording',
      'Operating agreement',
      'DEED token minting',
      'Annual state compliance',
      'Registered agent service',
      'On-chain ownership record',
    ],
  },
  {
    name: 'Protection + Bookkeeping',
    price: '$799',
    annual: '+ $299/yr',
    color: '#52B788',
    colorBg: 'rgba(82,183,136,0.06)',
    colorBorder: 'rgba(82,183,136,0.3)',
    recommended: true,
    includes: [
      'Everything in Protection',
      'Rental income tracking',
      'Expense categorization (Plaid)',
      'Schedule E summary export',
      'Annual compliance dashboard',
    ],
  },
  {
    name: 'Full Service',
    price: '$799',
    annual: '+ $599/yr',
    color: 'var(--gold)',
    colorBg: 'rgba(176,138,38,0.06)',
    colorBorder: 'rgba(176,138,38,0.25)',
    recommended: false,
    includes: [
      'Everything in Bookkeeping',
      'CPA-partnered tax filing',
      'Schedule E + 1040 support',
      'Depreciation tracking',
      'Year-round CPA access',
    ],
  },
];

export default function DeedShieldPage() {
  return (
    <>
      <Nav />
      <main style={{ background: 'var(--snow)' }}>

        {/* ── Hero ───────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden pt-[128px] pb-[100px] px-6 md:px-12 lg:px-20" style={{ background: 'var(--obsidian)' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
          <MountainSVG variant="dark" />
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span style={{ background: 'rgba(40,90,68,0.25)', color: '#52B788', borderRadius: 'var(--r-pill)', padding: '4px 12px', fontSize: '0.68rem', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: '0.08em', border: '1px solid rgba(82,183,136,0.3)' }}>ASSET PROTECTION</span>
              <span style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)', borderRadius: 'var(--r-pill)', padding: '4px 12px', fontSize: '0.68rem', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: '0.08em' }}>WYOMING LLC</span>
              <span style={{ background: 'rgba(176,138,38,0.15)', color: 'var(--gold)', borderRadius: 'var(--r-pill)', padding: '4px 12px', fontSize: '0.68rem', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: '0.08em' }}>ESTATE PLANNING</span>
            </div>

            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', letterSpacing: '0.1em', color: '#52B788', marginBottom: 12 }}>DEEDSHIELD</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.4rem, 5.5vw, 3.75rem)', fontWeight: 700, color: 'var(--white)', lineHeight: 1.06, letterSpacing: '-0.025em', marginBottom: 24 }}>
              Protect your home.<br />
              <span style={{ color: '#52B788' }}>Protect your family.</span><br />
              Own the future.
            </h1>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.125rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.6)', maxWidth: 560, marginBottom: 40 }}>
              DeedStack automates Wyoming LLC formation and property tokenization — giving your home attorney-quality asset protection, privacy, and estate planning at a fraction of the traditional cost.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <Link href="/interest-list" className="btn-primary" style={{ padding: '13px 28px', fontSize: 15 }}>
                Start Your Protection →
              </Link>
              <a href="#calculator" style={{ display: 'inline-flex', alignItems: 'center', padding: '13px 28px', fontSize: 15, fontFamily: "'DM Sans', sans-serif", fontWeight: 500, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.15)', borderRadius: 'var(--r-md)', transition: 'border-color 150ms, color 150ms' }}
                className="hover:!border-[rgba(255,255,255,0.4)] hover:!text-white">
                See Cost Calculator ↓
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              {[
                { value: '$799',    label: 'Formation Fee',            note: 'vs. $3k–8k attorney' },
                { value: '$99/yr',  label: 'Annual Compliance',        note: 'includes registered agent' },
                { value: '0%',      label: 'Transfer Tax (most states)', note: 'LLC interest transfers' },
                { value: '100%',    label: 'Deed Retained',            note: 'LLC holds title' },
              ].map((s) => (
                <div key={s.label} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 'var(--r-lg)', padding: '16px 20px', minWidth: 120 }}>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '1.35rem', fontWeight: 600, color: '#52B788', lineHeight: 1, marginBottom: 4 }}>{s.value}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.4, letterSpacing: '0.02em' }}>{s.label}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', color: 'rgba(255,255,255,0.25)', marginTop: 2 }}>{s.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Three Pillars ──────────────────────────────────────────────── */}
        <section className="py-20 px-6 md:px-12 lg:px-20" style={{ background: 'var(--frost)' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-label mb-3">THREE REASONS TO ACT TODAY</p>
              <h2 className="text-h1" style={{ color: 'var(--granite)' }}>Protect. Pass. Position.</h2>
              <p className="text-body mt-4 mx-auto" style={{ maxWidth: 520, fontSize: '0.9375rem' }}>
                Each benefit stands alone. Together, they make DeedShield the most compelling home asset-protection product available to US homeowners.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillars.map((p) => (
                <div key={p.tag} className="card flex flex-col" style={{ borderTop: `3px solid ${p.accentColor}` }}>
                  <div className="flex items-center gap-3 mb-5">
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', color: p.tagColor, background: p.tagBg, padding: '3px 9px', borderRadius: 'var(--r-pill)' }}>{p.tag}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', fontWeight: 600, color: 'var(--granite)', marginBottom: '0.75rem', lineHeight: 1.25 }}>{p.title}</h3>
                  <p className="text-body mb-5 flex-1" style={{ fontSize: '0.9rem' }}>{p.body}</p>
                  <div className="flex flex-col gap-2 mb-6">
                    {p.bullets.map(b => (
                      <div key={b} className="flex items-start gap-2">
                        <span style={{ color: p.accentColor, fontSize: '0.7rem', marginTop: 4, flexShrink: 0 }}>▸</span>
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', color: 'var(--granite)', lineHeight: 1.5 }}>{b}</span>
                      </div>
                    ))}
                  </div>
                  <div className="stat-card flex items-end gap-3">
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '1.75rem', fontWeight: 600, color: p.accentColor, lineHeight: 1 }}>{p.stat}</div>
                    <div className="stat-label pb-0.5">{p.statLabel}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Cost Calculator ────────────────────────────────────────────── */}
        <section id="calculator" className="py-20 px-6 md:px-12 lg:px-20" style={{ background: 'var(--snow)' }}>
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <p className="text-label mb-3">SAVINGS CALCULATOR</p>
              <h2 className="text-h1 mb-4" style={{ color: 'var(--granite)' }}>What would you pay a lawyer?</h2>
              <p className="text-body" style={{ fontSize: '0.9375rem', maxWidth: 520, lineHeight: 1.75 }}>
                Estate attorneys charge $3,000–$8,000 for the same LLC formation and deed transfer DeedStack automates for $799. See your projected savings below.
              </p>
            </div>
            <CostCalculator />
          </div>
        </section>

        {/* ── How It Works ───────────────────────────────────────────────── */}
        <section className="relative overflow-hidden py-24 px-6 md:px-12 lg:px-20" style={{ background: 'var(--frost)' }}>
          <div className="max-w-4xl mx-auto relative z-10">
            <p className="text-label mb-3">THE PROCESS</p>
            <h2 className="text-h1 mb-14" style={{ color: 'var(--granite)' }}>Four steps to a protected, tokenized home</h2>
            <div className="flex flex-col gap-10">
              {steps.map((step) => (
                <div key={step.num} className="flex gap-8 items-start">
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '2.5rem', fontWeight: 500, color: 'var(--mist)', lineHeight: 1, minWidth: 60, userSelect: 'none' }}>{step.num}</div>
                  <div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', fontWeight: 600, color: 'var(--granite)', marginBottom: '0.5rem' }}>{step.title}</h3>
                    <p className="text-body" style={{ fontSize: '0.9375rem' }}>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing Tiers ──────────────────────────────────────────────── */}
        <section className="py-20 px-6 md:px-12 lg:px-20" style={{ background: 'var(--snow)' }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-label mb-3">PRICING</p>
              <h2 className="text-h1" style={{ color: 'var(--granite)' }}>Choose your service level</h2>
              <p className="text-body mt-4 mx-auto" style={{ maxWidth: 480, fontSize: '0.9375rem' }}>
                All tiers include LLC formation, deed transfer, and DEED token minting. Annual tier upgrades or downgrades any time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tiers.map((t) => (
                <div key={t.name} className="rounded-2xl overflow-hidden flex flex-col"
                  style={{ background: t.recommended ? t.colorBg : 'var(--white)', border: `1.5px solid ${t.recommended ? t.colorBorder : 'var(--mist)'}`, position: 'relative' }}>
                  {t.recommended && (
                    <div style={{ background: t.color, padding: '6px 0', textAlign: 'center' }}>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', color: '#fff' }}>MOST POPULAR</span>
                    </div>
                  )}
                  <div className="p-7 flex flex-col flex-1">
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', color: t.color, marginBottom: 8 }}>{t.name.toUpperCase()}</p>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '2rem', fontWeight: 600, color: 'var(--granite)', lineHeight: 1 }}>{t.price}</span>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', color: 'var(--stone)' }}>one-time</span>
                    </div>
                    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.85rem', color: t.color, marginBottom: 20 }}>{t.annual}</p>

                    <div className="flex flex-col gap-2.5 flex-1 mb-8">
                      {t.includes.map(item => (
                        <div key={item} className="flex items-start gap-2.5">
                          <span style={{ color: t.color, flexShrink: 0, marginTop: 2, fontSize: '0.8rem' }}>✓</span>
                          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.84rem', color: 'var(--granite)', lineHeight: 1.45 }}>{item}</span>
                        </div>
                      ))}
                    </div>

                    <Link href="/interest-list"
                      style={{ display: 'block', textAlign: 'center', padding: '11px 0', fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, textDecoration: 'none', borderRadius: 'var(--r-md)', transition: 'all 150ms', background: t.recommended ? t.color : 'transparent', color: t.recommended ? '#fff' : t.color, border: `1.5px solid ${t.color}` }}
                      className={t.recommended ? 'hover:!opacity-90' : 'hover:!bg-[rgba(40,90,68,0.06)]'}>
                      Get Started →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl px-6 py-4 flex items-start gap-3" style={{ background: 'var(--frost)', border: '1px solid var(--mist)' }}>
              <span style={{ fontSize: '1rem', flexShrink: 0, marginTop: 2 }}>⚠️</span>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', color: 'var(--stone)', lineHeight: 1.7 }}>
                <strong style={{ color: 'var(--granite)' }}>Important:</strong> Transferring a primary residence into an LLC may affect homestead exemptions, mortgage due-on-sale clauses, and homeowners insurance. DeedStack structures formations to preserve these protections where possible, but outcomes vary by state and lender. All customers receive a state-specific disclosure before formation. Not legal advice — consult an attorney for your specific situation.
              </p>
            </div>
          </div>
        </section>

        {/* ── Trust bar ──────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden py-20 px-6 md:px-12 lg:px-20" style={{ background: 'var(--obsidian)' }}>
          <MountainSVG variant="dark" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.3)', marginBottom: 14 }}>WYOMING LLC · ASSET PROTECTION · ESTATE PLANNING · TOKENIZATION</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 600, color: 'var(--white)', marginBottom: 18, lineHeight: 1.2 }}>
              Attorney-quality protection.<br />
              <span style={{ color: '#52B788' }}>Automated at a fraction of the cost.</span>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9375rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, maxWidth: 520, margin: '0 auto 32px' }}>
              Wyoming-incorporated. The nation&apos;s strongest digital asset and LLC statutes. DeedShield is the first step — Yield Deed participation comes next.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/interest-list" className="btn-primary" style={{ padding: '13px 28px', fontSize: 15 }}>
                Join the Waitlist →
              </Link>
              <Link href="/yield-deed" style={{ display: 'inline-flex', alignItems: 'center', padding: '13px 28px', fontSize: 15, fontFamily: "'DM Sans', sans-serif", fontWeight: 500, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.15)', borderRadius: 'var(--r-md)' }}
                className="hover:!text-white hover:!border-[rgba(255,255,255,0.35)]">
                See Yield Deed →
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
