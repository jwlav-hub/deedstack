'use client';

import { useState } from 'react';
import Nav from '@/components/Nav';
import Link from 'next/link';
import MountainSVG from '@/components/MountainSVG';

const faqs = [
  {
    section: 'FOR HOMEOWNERS',
    color: 'var(--pine)',
    items: [
      {
        q: 'Do I keep my deed?',
        a: 'Yes. Tokenization does not transfer ownership of your home. Your deed stays in your name. DeedStack converts verified home equity into digital tokens — the deed itself is not pledged, transferred, or encumbered beyond the terms of the specific agreement. Final treatment depends on transaction documents, state law, mortgage terms, and regulatory review.',
      },
      {
        q: 'Is this a loan?',
        a: 'DeedStack is testing a non-recourse collateral advance structure — not a traditional mortgage, HELOC, or personal loan. Capital partners may advance funds against tokenized equity as collateral. The structure is designed so that the advance is non-recourse to the homeowner personally, but this characterization depends on transaction documents and may be viewed differently by regulators or legal counsel.',
      },
      {
        q: 'What happens if I want to sell my house?',
        a: 'The pledge structure is designed to be unwound when a property is sold. Pledged tokens would be redeemed, the collateral advance settled, and any net proceeds returned to you. Specific exit mechanics depend on your agreement terms and are subject to the platform\'s transfer and settlement procedures at the time of exit.',
      },
      {
        q: 'Do I have to make monthly payments?',
        a: 'The structure is designed with no monthly payment requirement. Capital cost is embedded in the fund structure — not charged as a stated interest rate. However, this does not mean the capital is free. Returns are variable and dependent on fund performance. You may receive less than projected.',
      },
      {
        q: 'How much equity can I tokenize?',
        a: 'DeedStack is in a Wyoming pilot phase. Eligibility depends on verified equity position, property type, and pilot slot availability. The platform targets properties with meaningful equity — typically $200,000 or more in verified net equity. Contact us through the waitlist to discuss your specific situation.',
      },
      {
        q: 'Who can participate?',
        a: 'During the pilot, DeedStack is working with Wyoming homeowners who own income-producing or residential property with verified equity. Homeowners do not need to be accredited investors. Investors acquiring DEED tokens on the marketplace must be accredited investors as defined under SEC Rule 501(a).',
      },
    ],
  },
  {
    section: 'ABOUT DEEDRIVER',
    color: '#52B788',
    items: [
      {
        q: 'What is DeedStack?',
        a: 'DeedStack is a Wyoming-based real estate tokenization platform. It converts verified home equity into DEED tokens — digital securities representing fractional economic interests in the underlying equity. Homeowners access capital without selling or refinancing. Accredited investors access real estate returns from $100.',
      },
      {
        q: 'Is DeedStack regulated?',
        a: 'DeedStack operates under Wyoming\'s Digital Asset Statutes and issues securities under Reg D 506(c) of the Securities Act of 1933. Reg D 506(c) permits general solicitation but restricts purchases to verified accredited investors. DeedStack does not hold a broker-dealer license and is not registered as an investment advisor. Legal and regulatory review is ongoing.',
      },
      {
        q: 'Is Wyoming important to how this works?',
        a: 'Yes. Wyoming has enacted the most comprehensive digital asset legislation in the United States, including statutes that explicitly recognize tokenized property rights, digital asset custodians (SPDIs), and DAO LLCs. This legal clarity makes Wyoming the right jurisdiction for the pilot phase.',
      },
      {
        q: 'What stage is DeedStack at?',
        a: 'DeedStack is in a controlled pilot phase — testing the tokenization structure, legal framework, and fund mechanics with a limited number of Wyoming properties and accredited investors. The platform has no operating history. All yield figures shown are targets, not results.',
      },
    ],
  },
  {
    section: 'FOR INVESTORS',
    color: 'var(--gold)',
    items: [
      {
        q: 'Can I trade my DEED tokens?',
        a: 'DEED tokens are designed for compliant secondary transfer — but they are restricted securities under Reg D 506(c). Secondary trading is not freely available like a stock exchange. Transfer requires securities compliance, eligible counterparties, and available marketplace liquidity. DeedStack is building the infrastructure for compliant peer-to-peer transfer, but this is not available in the current pilot phase.',
      },
      {
        q: 'What is the minimum investment?',
        a: 'The target minimum is $100 per token on the marketplace. During the pilot, access is limited to verified accredited investors and selected Wyoming properties. Broader access would require additional regulatory qualification.',
      },
      {
        q: 'Are the projected yields guaranteed?',
        a: 'No. All yield figures are targets, not guarantees. Returns depend on fund performance, property valuations, vacancy rates, capital costs, and market conditions. DeedStack\'s fund has no operating history. You may receive less than projected or nothing at all.',
      },
      {
        q: 'Where can I see fund strategy and diligence materials?',
        a: 'Full fund strategy, simulations, regulation details, and partner architecture are available through the investor materials section — gated to accredited investors.',
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        borderBottom: '1px solid var(--mist)',
        paddingTop: '1rem',
        paddingBottom: '1rem',
      }}
    >
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 16,
          width: '100%',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          padding: 0,
        }}
      >
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.9375rem',
          fontWeight: 500,
          color: 'var(--granite)',
          lineHeight: 1.5,
        }}>
          {q}
        </span>
        <svg
          width="16" height="16" viewBox="0 0 16 16" fill="none"
          style={{
            flexShrink: 0,
            marginTop: 2,
            transform: open ? 'rotate(180deg)' : 'none',
            transition: 'transform 200ms',
            opacity: 0.45,
          }}
        >
          <path d="M3 5l5 5 5-5" stroke="var(--granite)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.875rem',
          color: 'var(--stone)',
          lineHeight: 1.75,
          marginTop: '0.75rem',
          paddingRight: 32,
        }}>
          {a}
        </p>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <Nav />
      <main style={{ background: 'var(--snow)' }}>

        {/* Hero */}
        <section className="relative overflow-hidden pt-[128px] pb-16 px-6 md:px-12 lg:px-20" style={{ background: 'var(--snow)' }}>
          <div className="max-w-3xl mx-auto relative z-10">
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              color: 'var(--pine)',
              marginBottom: 16,
            }}>
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: 'var(--obsidian)',
              marginBottom: '1rem',
            }}>
              Questions about<br />
              <span style={{ color: 'var(--pine)' }}>how DeedStack works.</span>
            </h1>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '1.0625rem',
              color: 'var(--stone)',
              lineHeight: 1.75,
              maxWidth: 520,
            }}>
              Homeowner or investor — find answers about tokenization, yield, regulation,
              and how the platform operates.
            </p>
          </div>
          <MountainSVG variant="light" />
        </section>

        {/* FAQ sections */}
        {faqs.map((section) => (
          <section
            key={section.section}
            className="py-16 px-6 md:px-12 lg:px-20"
            style={{ borderTop: '1px solid var(--mist)' }}
          >
            <div className="max-w-3xl mx-auto">
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: section.color,
                marginBottom: '1.5rem',
              }}>
                {section.section}
              </p>
              <div>
                {section.items.map((item) => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="relative overflow-hidden py-24 px-6 md:px-12 lg:px-20" style={{ background: 'var(--obsidian)' }}>
          <div className="max-w-3xl mx-auto relative z-10 text-center">
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              color: 'rgba(255,255,255,0.3)',
              marginBottom: 16,
            }}>
              READY TO BEGIN
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
              fontWeight: 600,
              color: 'var(--white)',
              marginBottom: '1rem',
              letterSpacing: '-0.01em',
              lineHeight: 1.2,
            }}>
              Still have questions?
            </h2>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '2.5rem',
              lineHeight: 1.7,
            }}>
              Join the waitlist and our team will follow up directly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/interest-list" className="btn-primary" style={{ padding: '13px 28px', fontSize: 15 }}>
                Join the Waitlist
              </Link>
              <Link href="/investors" style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '13px 28px', fontSize: 15,
                fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
                color: 'var(--gold)', textDecoration: 'none',
                border: '1.5px solid rgba(176,138,38,0.35)', borderRadius: 'var(--r-md)',
              }}>
                Investor Materials →
              </Link>
            </div>
          </div>
          <MountainSVG variant="dark" />
        </section>

      </main>
    </>
  );
}
