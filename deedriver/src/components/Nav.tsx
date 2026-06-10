'use client';

import Link from 'next/link';
import { useState } from 'react';

const links = [
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/yield', label: 'Yield' },
  { href: '/regulation', label: 'Regulation' },
  { href: '/about', label: 'About' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{ background: 'var(--obsidian)', height: 60 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-6xl mx-auto h-full flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-0 no-underline">
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: '1.5rem',
            color: 'var(--white)',
            letterSpacing: '-0.01em',
          }}
        >
          Deed
        </span>
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: '1.5rem',
            color: 'var(--pine-lt)',
            letterSpacing: '-0.01em',
          }}
        >
          River
        </span>
      </Link>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: 'rgba(255,255,255,0.72)',
              textDecoration: 'none',
              transition: 'color var(--t-base)',
            }}
            className="hover:!text-white"
          >
            {l.label}
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="hidden md:flex items-center gap-3">
        <Link
          href="/dashboard"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13,
            color: 'rgba(255,255,255,0.72)',
            textDecoration: 'none',
          }}
          className="hover:!text-white"
        >
          Sign In
        </Link>
        <Link
          href="/calculator"
          style={{
            background: 'var(--pine)',
            color: 'var(--white)',
            borderRadius: 'var(--r-sm)',
            padding: '8px 18px',
            fontSize: 13,
            fontWeight: 500,
            fontFamily: "'DM Sans', sans-serif",
            textDecoration: 'none',
            transition: 'background var(--t-base)',
          }}
          className="hover:!bg-[#3A7A5C]"
        >
          Calculate Your Yield
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1.5 p-2"
        aria-label="Toggle menu"
      >
        <span style={{ width: 20, height: 1.5, background: 'var(--slate)', display: 'block' }} />
        <span style={{ width: 20, height: 1.5, background: 'var(--slate)', display: 'block' }} />
        <span style={{ width: 14, height: 1.5, background: 'var(--slate)', display: 'block' }} />
      </button>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: 'var(--obsidian)',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}
          className="absolute top-[60px] left-0 right-0 flex flex-col p-6 gap-4 md:hidden"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15,
                color: 'var(--slate)',
                textDecoration: 'none',
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/calculator"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 justify-center"
          >
            Calculate Your Yield
          </Link>
        </div>
      )}
      </div>
    </nav>
  );
}
