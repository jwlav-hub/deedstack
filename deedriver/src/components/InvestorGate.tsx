'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Nav from '@/components/Nav';

const STORAGE_KEY = 'dr_investor_access';

type Step = 'email' | 'granted';

export default function InvestorGate({ children }: { children: React.ReactNode }) {
  const [step, setStep]         = useState<Step>('email');
  const [hydrated, setHydrated] = useState(false);
  const [email, setEmail]       = useState('');
  const [error, setError]       = useState('');

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) setStep('granted');
    setHydrated(true);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes('@')) { setError('Please enter a valid email address.'); return; }
    setError('');
    localStorage.setItem(STORAGE_KEY, email);
    setStep('granted');
  }

  // Show investor content once access confirmed
  if (hydrated && step === 'granted') return <>{children}</>;

  // Shared gate shell
  return (
    <>
      <Nav />
      <main style={{ background: 'var(--obsidian)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 24px 60px' }}>
        <div style={{ maxWidth: 460, width: '100%', textAlign: 'center' }}>

          {/* Badge */}
          <div style={{ marginBottom: 24 }}>
            <span style={{ background: 'rgba(176,138,38,0.15)', color: 'var(--gold)', borderRadius: 'var(--r-pill)', padding: '4px 14px', fontSize: '0.68rem', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: '0.1em' }}>
              INVESTOR ACCESS
            </span>
          </div>

          {step === 'email' && (
            <>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.75rem, 4vw, 2.375rem)', fontWeight: 700, color: 'var(--white)', lineHeight: 1.15, letterSpacing: '-0.015em', marginBottom: '1rem' }}>
                This section is for<br />verified investors.
              </h1>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9375rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, maxWidth: 380, margin: '0 auto 2.5rem' }}>
                Fund strategy, regulation, and partner architecture are available to accredited investors and qualified family offices. Enter your email to continue.
              </p>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <input
                  type="email" required placeholder="Enter your email address"
                  value={email} onChange={e => { setEmail(e.target.value); setError(''); }}
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 'var(--r-md)', padding: '13px 16px', fontSize: '0.9375rem', color: 'var(--white)', fontFamily: "'DM Sans', sans-serif", outline: 'none', width: '100%', boxSizing: 'border-box' }}
                />
                {error && <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8125rem', color: '#e74c3c', textAlign: 'left', margin: 0 }}>{error}</p>}
                <button type="submit"
                  style={{ background: 'var(--gold)', color: '#fff', border: 'none', borderRadius: 'var(--r-md)', padding: '13px 28px', fontSize: 15, fontWeight: 500, fontFamily: "'DM Sans', sans-serif", cursor: 'pointer', width: '100%' }}>
                  Access Materials →
                </button>
              </form>
            </>
          )}

          {/* Disclaimer */}
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.68rem', color: 'rgba(255,255,255,0.2)', marginTop: '2rem', lineHeight: 1.65 }}>
            By continuing you confirm you are an accredited investor as defined under SEC Rule 501(a).
            This is not an offer to sell securities. Materials are for informational purposes only.
          </p>

          <div style={{ marginTop: '1.5rem' }}>
            <Link href="/" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}>
              ← Back to DeedStack.com
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
