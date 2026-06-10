'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';

const LINK_COLOR = 'rgba(255,255,255,0.78)';

const platformDropdown = [
  { href: '/solution',  label: 'Platform Solution', desc: 'Supply meets demand — how it works' },
  { href: '/ecosystem', label: 'Ecosystem',          desc: 'Three-layer connected infrastructure' },
];

const navLinks = [
  { href: '/marketplace', label: 'Marketplace' },
];

export default function Nav() {
  const [open, setOpen]               = useState(false);
  const [platOpen, setPlatOpen]       = useState(false);
  const [mobilePlatOpen, setMobilePlatOpen] = useState(false);
  const platTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handlePlatEnter() { if (platTimer.current) clearTimeout(platTimer.current); setPlatOpen(true); }
  function handlePlatLeave() { platTimer.current = setTimeout(() => setPlatOpen(false), 120); }

  return (
    <nav style={{ background: 'var(--obsidian)', height: 64 }} className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 h-full flex items-center justify-between">

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="/logo-dark.png" alt="DeedStack logo" style={{ height: 24, width: 'auto', display: 'block' }} />
          <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.55rem', color: 'var(--white)', letterSpacing: '-0.015em' }}>Deed</span>
          <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.55rem', color: '#52B788', letterSpacing: '-0.015em', marginLeft: '-0.35rem' }}>Stack</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">

          {/* Platform dropdown */}
          <div className="relative" onMouseEnter={handlePlatEnter} onMouseLeave={handlePlatLeave}>
            <button
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: platOpen ? '#fff' : LINK_COLOR, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, padding: '4px 0', transition: 'color 150ms' }}
            >
              Platform
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ opacity: 0.55, transition: 'transform 200ms', transform: platOpen ? 'rotate(180deg)' : 'none' }}>
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {platOpen && (
              <div
                style={{ position: 'absolute', top: 'calc(100% + 12px)', left: '50%', transform: 'translateX(-50%)', background: 'var(--granite)', borderRadius: 'var(--r-lg)', border: '1px solid rgba(255,255,255,0.08)', padding: '8px', minWidth: 240, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
                onMouseEnter={handlePlatEnter}
                onMouseLeave={handlePlatLeave}
              >
                {platformDropdown.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setPlatOpen(false)}
                    style={{ display: 'block', padding: '10px 12px', borderRadius: 'var(--r-md)', textDecoration: 'none', transition: 'background 150ms' }}
                    className="hover:!bg-[rgba(255,255,255,0.07)]"
                  >
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: 'var(--white)', marginBottom: 2 }}>{item.label}</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.4)', lineHeight: 1.4 }}>{item.desc}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Regular links */}
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href}
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: LINK_COLOR, textDecoration: 'none', transition: 'color 150ms' }}
              className="hover:!text-white"
            >
              {l.label}
            </Link>
          ))}

          {/* Investor portal — subtle separator */}
          <span style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.1)', display: 'block' }} />
          <Link href="/investors"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: 'var(--gold)', textDecoration: 'none', letterSpacing: '0.03em', transition: 'opacity 150ms' }}
            className="hover:!opacity-80"
          >
            Investors
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/interest-list"
            style={{ background: 'transparent', color: '#52B788', border: '1px solid #52B788', borderRadius: 'var(--r-sm)', padding: '7px 16px', fontSize: 13, fontWeight: 500, fontFamily: "'DM Sans', sans-serif", textDecoration: 'none', transition: 'background 200ms, color 200ms' }}
            className="hover:!bg-[#52B788] hover:!text-white"
          >
            Join Waitlist
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Toggle menu">
          <span style={{ width: 20, height: 1.5, background: LINK_COLOR, display: 'block' }} />
          <span style={{ width: 20, height: 1.5, background: LINK_COLOR, display: 'block' }} />
          <span style={{ width: 14, height: 1.5, background: LINK_COLOR, display: 'block' }} />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div style={{ background: 'var(--obsidian)', borderTop: '1px solid rgba(255,255,255,0.06)' }}
          className="absolute top-[64px] left-0 right-0 flex flex-col p-6 gap-1 md:hidden max-h-[80vh] overflow-y-auto">

          {/* Platform mobile accordion */}
          <button onClick={() => setMobilePlatOpen(v => !v)}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: LINK_COLOR, background: 'none', border: 'none', cursor: 'pointer', padding: '10px 0', width: '100%' }}>
            Platform
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ opacity: 0.45, transform: mobilePlatOpen ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }}>
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {mobilePlatOpen && (
            <div style={{ paddingLeft: 12, borderLeft: '2px solid rgba(255,255,255,0.08)', marginLeft: 2, marginBottom: 8 }}>
              {platformDropdown.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)}
                  style={{ display: 'block', padding: '8px 0', fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: LINK_COLOR, textDecoration: 'none', padding: '10px 0' }}>
              {l.label}
            </Link>
          ))}

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: 8, paddingTop: 16 }}>
            <Link href="/investors" onClick={() => setOpen(false)}
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: 'var(--gold)', textDecoration: 'none', display: 'block', paddingBottom: 12 }}>
              Investor Materials →
            </Link>
          </div>

          <Link href="/interest-list" onClick={() => setOpen(false)}
            style={{ marginTop: 4, display: 'block', textAlign: 'center', background: '#52B788', color: '#fff', borderRadius: 'var(--r-sm)', padding: '12px 24px', fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>
            Join Waitlist
          </Link>
        </div>
      )}
    </nav>
  );
}
