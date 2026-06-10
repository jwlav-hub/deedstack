'use client';

import { useState } from 'react';
import Nav from '@/components/Nav';
import Link from 'next/link';

// ─── Types ────────────────────────────────────────────────────────────────────

type Scenario = 'owner' | 'rental' | 'prospective' | null;

interface FormData {
  name: string; email: string; state: string;
  homeValue: string; mortgageBalance: string; downPaymentPct: string; propertyType: string;
  ageRange: string; annualIncome: string; netWorth: string; creditScore: string;
  monthlyRent: string; purchaseTimeline: string;
}

const EMPTY: FormData = {
  name: '', email: '', state: '',
  homeValue: '', mortgageBalance: '', downPaymentPct: '', propertyType: '',
  ageRange: '', annualIncome: '', netWorth: '', creditScore: '',
  monthlyRent: '', purchaseTimeline: '',
};

// ─── Lookup tables ────────────────────────────────────────────────────────────

const HOME_VALUES = [
  { value: 'under300',  label: 'Under $300,000',          mid: 250_000   },
  { value: '300to500',  label: '$300,000 – $500,000',      mid: 400_000   },
  { value: '500to750',  label: '$500,000 – $750,000',      mid: 625_000   },
  { value: '750to1m',   label: '$750,000 – $1,000,000',    mid: 875_000   },
  { value: '1mto2m',    label: '$1,000,000 – $2,000,000',  mid: 1_500_000 },
  { value: 'over2m',    label: 'Over $2,000,000',          mid: 2_500_000 },
];

const MORTGAGE_BALANCES = [
  { value: 'none',      label: 'No mortgage — fully paid off',  mid: 0        },
  { value: 'under100k', label: 'Under $100,000',                mid: 75_000   },
  { value: '100to250k', label: '$100,000 – $250,000',           mid: 175_000  },
  { value: '250to500k', label: '$250,000 – $500,000',           mid: 375_000  },
  { value: '500to750k', label: '$500,000 – $750,000',           mid: 625_000  },
  { value: 'over750k',  label: 'Over $750,000',                 mid: 875_000  },
];

const DOWN_PAYMENTS = [
  { value: '5pct',  label: '5% (FHA minimum)',      pct: 0.05 },
  { value: '10pct', label: '10%',                   pct: 0.10 },
  { value: '20pct', label: '20% (conventional)',    pct: 0.20 },
  { value: '25pct', label: '25%+',                  pct: 0.25 },
  { value: 'cash',  label: 'Cash purchase (100%)',  pct: 1.00 },
];

const STATES = [
  { value: '',      label: 'Select your state' },
  { value: 'WY',   label: 'Wyoming' },
  { value: 'CA',   label: 'California' },
  { value: 'NV',   label: 'Nevada' },
  { value: 'TX',   label: 'Texas' },
  { value: 'FL',   label: 'Florida' },
  { value: 'NY',   label: 'New York' },
  { value: 'CO',   label: 'Colorado' },
  { value: 'WA',   label: 'Washington' },
  { value: 'AZ',   label: 'Arizona' },
  { value: 'OTHER',label: 'Other US state' },
];

// ─── Formatters ───────────────────────────────────────────────────────────────

function fmt(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1)}M`;
  if (n >= 1_000)     return `$${(n / 1_000).toFixed(0)}k`;
  return `$${n}`;
}
function fmtFull(n: number) { return '$' + Math.round(n).toLocaleString(); }
function pct(n: number) { return `${Math.round(n * 100)}%`; }

// ─── Report computation ───────────────────────────────────────────────────────

function computeReport(form: FormData, scenario: Scenario) {
  const homeV  = HOME_VALUES.find(v => v.value === form.homeValue)?.mid ?? 0;
  const mortV  = scenario === 'prospective' ? 0
               : (MORTGAGE_BALANCES.find(v => v.value === form.mortgageBalance)?.mid ?? 0);
  const dpPct  = DOWN_PAYMENTS.find(v => v.value === form.downPaymentPct)?.pct ?? 0;
  const downV  = scenario === 'prospective' ? homeV * dpPct : 0;
  const equity = scenario === 'prospective' ? downV : Math.max(0, homeV - mortV);
  const ltv    = homeV > 0 ? (scenario === 'prospective' ? 1 - dpPct : mortV / homeV) : 0;

  const goodCredit    = ['680to740','740plus'].includes(form.creditScore);
  const isProspective = scenario === 'prospective';
  const isRental      = scenario === 'rental';
  const isPrimary     = scenario === 'owner';

  // HELOC
  const helocLtv = isRental ? 0.75 : 0.80;
  const helocCltv = isRental ? 0.75 : 0.85;
  const helocEligible = !isProspective && ltv <= helocLtv && goodCredit;
  const helocMax = helocEligible ? Math.max(0, homeV * helocCltv - mortV) : 0;
  const helocNote = isProspective ? 'Not available before purchase'
    : ltv > helocLtv ? `LTV too high (lenders need ≤${Math.round(helocLtv*100)}% for ${isRental ? 'investment' : 'primary'} property)`
    : !goodCredit ? 'Credit score below typical 680 minimum'
    : isRental ? 'Eligible — investment property rules apply' : 'Eligible';

  // Reverse Mortgage
  const ageOk = form.ageRange === '62to70' || form.ageRange === '71plus';
  const rmEligible = isPrimary && ageOk && equity > 50_000;
  const rmMax = rmEligible ? Math.min(homeV * 0.50, 800_000) : 0;
  const rmNote = !isPrimary ? 'Requires primary residence'
    : isProspective ? 'Not available before ownership'
    : !ageOk ? 'Requires age 62 or older'
    : equity < 50_000 ? 'Insufficient equity' : 'Eligible';

  // HEI
  const heiEligible = !isProspective && equity >= 75_000;
  const heiNote = isProspective ? 'Not available before purchase'
    : equity < 75_000 ? 'Typically requires ≥$75k in equity'
    : isRental ? 'Some HEI providers cover non-primary — verify by state'
    : 'Likely eligible (no income or credit check)';

  // DeedStack
  const drActive   = form.state === 'WY';
  const drWaitlist = form.state === 'CA' || form.state === 'NV';
  const drEligible = drActive || drWaitlist;
  const track = drActive ? 'Track 1 — Wyoming Active Pilot'
    : drWaitlist ? 'Track 2 — CA/NV Waitlist'
    : 'Future Expansion State';
  const drNote = isProspective
    ? (drEligible ? 'Future consideration once purchase closes and equity is established' : 'Not yet available — register to track expansion')
    : drActive ? 'Your state qualifies for the active pilot'
    : drWaitlist ? 'Waitlist open — services pending regulatory approval in your state'
    : 'Not yet available — expansion planned';

  // Accredited
  const incomeAcc  = form.annualIncome === '200to300k' || form.annualIncome === 'over300k';
  const nwAcc      = form.netWorth === '1mPlus';
  const isAccredited = incomeAcc || nwAcc;
  const borderline = !isAccredited && (form.annualIncome === '100to200k' || form.netWorth === '500kTo1m');

  // Score
  let score = 0;
  score += drActive ? 25 : drWaitlist ? 18 : 8;
  score += equity >= 750_000 ? 25 : equity >= 500_000 ? 22 : equity >= 300_000 ? 18 : equity >= 150_000 ? 12 : equity >= 50_000 ? 6 : 0;
  score += isAccredited ? 25 : borderline ? 12 : 0;
  score += isPrimary ? (form.propertyType === 'singleFamily' ? 15 : 10) : isRental ? 8 : 6;
  score += !isProspective ? (form.ageRange === 'under55' ? 10 : form.ageRange === '55to61' ? 8 : form.ageRange === '62to70' ? 7 : 5) : 8;

  const scoreLabel = score >= 80 ? 'Strong Pilot Candidate' : score >= 60 ? 'Priority Waitlist' : score >= 40 ? 'Waitlist Eligible' : 'Pre-qualification Needed';
  const scoreColor = score >= 80 ? '#52B788' : score >= 60 ? '#285A44' : score >= 40 ? '#B08A26' : '#8A98A5';

  return { homeV, mortV, equity, ltv, downV, dpPct, isPrimary, isRental, isProspective, helocEligible, helocMax, helocNote, rmEligible, rmMax, rmNote, heiEligible, heiNote, drActive, drWaitlist, drEligible, track, drNote, isAccredited, borderline, score, scoreLabel, scoreColor };
}

// ─── Design primitives ────────────────────────────────────────────────────────

const iStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: 'var(--r-sm)', padding: '12px 14px', color: 'var(--white)',
  fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', outline: 'none', width: '100%',
};
const sStyle: React.CSSProperties = { ...iStyle, appearance: 'none', cursor: 'pointer' };
const iCls = 'focus:border-[#52B788] transition-colors';

function Label({ children, hint }: { children: React.ReactNode; hint?: string }) {
  return (
    <div className="mb-1.5">
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', color: 'rgba(255,255,255,0.48)', letterSpacing: '0.04em' }}>{children}</p>
      {hint && <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.7rem', color: 'rgba(255,255,255,0.28)', marginTop: 2, lineHeight: 1.4 }}>{hint}</p>}
    </div>
  );
}

function Field({ label, hint, value, onChange, options }: { label: string; hint?: string; value: string; onChange: (v: string) => void; options: { value: string; label: string }[] }) {
  return (
    <div>
      <Label hint={hint}>{label}</Label>
      <select value={value} onChange={e => onChange(e.target.value)} style={{ ...sStyle, color: value ? 'var(--white)' : 'rgba(255,255,255,0.32)' }} className={iCls}>
        {options.map(o => <option key={o.value} value={o.value} style={{ background: '#18242F', color: '#fff' }}>{o.label}</option>)}
      </select>
    </div>
  );
}

// ─── Scenario selector ────────────────────────────────────────────────────────

function ScenarioSelector({ value, onChange }: { value: Scenario; onChange: (s: Scenario) => void }) {
  const opts: { key: Scenario; icon: string; title: string; desc: string }[] = [
    { key: 'owner',       icon: '🏠', title: 'Owner Occupied',       desc: 'Primary residence you live in' },
    { key: 'rental',      icon: '🏢', title: 'Rental Property',      desc: 'Investment or income property' },
    { key: 'prospective', icon: '🔍', title: 'Prospective Purchase',  desc: 'Property you plan to buy' },
  ];
  return (
    <div className="mb-7">
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em', marginBottom: 10 }}>SELECT YOUR PROPERTY SCENARIO</p>
      <div className="grid grid-cols-3 gap-3">
        {opts.map(o => {
          const sel = value === o.key;
          return (
            <button key={o.key!} type="button" onClick={() => onChange(o.key)}
              style={{ background: sel ? 'rgba(82,183,136,0.14)' : 'rgba(255,255,255,0.04)', border: `1.5px solid ${sel ? '#52B788' : 'rgba(255,255,255,0.09)'}`, borderRadius: 'var(--r-md)', padding: '14px 10px', textAlign: 'center', cursor: 'pointer', transition: 'all 200ms' }}>
              <div style={{ fontSize: '1.3rem', marginBottom: 5 }}>{o.icon}</div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 600, color: sel ? '#fff' : 'rgba(255,255,255,0.6)', marginBottom: 2 }}>{o.title}</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.67rem', color: sel ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.28)', lineHeight: 1.35 }}>{o.desc}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Step indicator ───────────────────────────────────────────────────────────

function StepDots({ step }: { step: number }) {
  return (
    <div className="flex items-center gap-2 mb-7">
      {['About You', 'Property', 'Financials'].map((label, i) => {
        const n = i + 1; const active = n === step; const done = n < step;
        return (
          <div key={label} className="flex items-center gap-2">
            <div style={{ width: 24, height: 24, borderRadius: '50%', flexShrink: 0, background: done ? 'var(--pine)' : active ? '#52B788' : 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.68rem', fontWeight: 600, color: done || active ? '#fff' : 'rgba(255,255,255,0.28)', fontFamily: "'DM Mono', monospace" }}>
              {done ? '✓' : n}
            </div>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', color: active ? '#fff' : done ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.25)', fontWeight: active ? 500 : 400 }}>{label}</span>
            {i < 2 && <div style={{ width: 24, height: 1, background: done ? 'var(--pine)' : 'rgba(255,255,255,0.09)', marginLeft: 2, marginRight: 2 }} />}
          </div>
        );
      })}
    </div>
  );
}

// ─── Option card (report) ─────────────────────────────────────────────────────

function OptionCard({ title, subtitle, eligible, note, amount, pros, cons, accentColor }: {
  title: string; subtitle: string; eligible: boolean | 'waitlist' | 'future';
  note: string; amount?: string; pros: string[]; cons: string[]; accentColor: string;
}) {
  const label = eligible === 'waitlist' ? 'Waitlist' : eligible === 'future' ? 'Future' : eligible ? 'Likely Eligible' : 'Not Eligible';
  const bg    = eligible === 'waitlist' ? '#EDD9A0' : eligible === 'future' ? '#E8EEF2' : eligible ? '#ECF4EF' : '#F2F2F2';
  const color = eligible === 'waitlist' ? '#8B6800' : eligible === 'future' ? '#5A6876' : eligible ? '#285A44' : '#8A98A5';
  return (
    <div style={{ border: '1px solid var(--mist)', borderRadius: 'var(--r-lg)', overflow: 'hidden', background: 'var(--white)' }}>
      <div style={{ borderBottom: `3px solid ${accentColor}`, padding: '15px 18px 12px', background: 'var(--snow)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10, marginBottom: 6 }}>
          <div>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.95rem', fontWeight: 600, color: 'var(--granite)', marginBottom: 2 }}>{title}</p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', color: 'var(--slate)' }}>{subtitle}</p>
          </div>
          <span style={{ background: bg, color, borderRadius: 'var(--r-pill)', padding: '3px 9px', fontSize: '0.68rem', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, whiteSpace: 'nowrap', flexShrink: 0 }}>{label}</span>
        </div>
        {amount && <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.95rem', color: accentColor, fontWeight: 500, marginBottom: 4 }}>{amount}</p>}
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', color: 'var(--stone)', lineHeight: 1.45 }}>{note}</p>
      </div>
      <div style={{ padding: '12px 18px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 14px' }}>
        <div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', letterSpacing: '0.06em', color: 'var(--slate)', marginBottom: 4 }}>ADVANTAGES</p>
          {pros.map(p => <p key={p} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.73rem', color: 'var(--stone)', lineHeight: 1.45, marginBottom: 2 }}><span style={{ color: accentColor, marginRight: 4 }}>+</span>{p}</p>)}
        </div>
        <div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', letterSpacing: '0.06em', color: 'var(--slate)', marginBottom: 4 }}>TRADE-OFFS</p>
          {cons.map(c => <p key={c} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.73rem', color: 'var(--stone)', lineHeight: 1.45, marginBottom: 2 }}><span style={{ color: '#8A98A5', marginRight: 4 }}>–</span>{c}</p>)}
        </div>
      </div>
    </div>
  );
}

// ─── Report ───────────────────────────────────────────────────────────────────

function Report({ form, scenario }: { form: FormData; scenario: Scenario }) {
  const r = computeReport(form, scenario);
  const firstName = form.name.split(' ')[0];
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const scenarioLabel = scenario === 'owner' ? 'Owner-Occupied' : scenario === 'rental' ? 'Rental Property' : 'Prospective Purchase';

  const options = [
    { title: 'HELOC', subtitle: 'Home Equity Line of Credit', eligible: r.helocEligible as boolean, note: r.helocNote, amount: r.helocEligible ? `Up to ${fmt(r.helocMax)} estimated` : undefined, accentColor: '#5A6876', pros: ['Flexible draw schedule', 'Interest-only option', 'Keep full ownership'], cons: ['Variable rate (~8–10%)', 'Payments start immediately', 'Income & credit scrutiny'] },
    { title: 'Reverse Mortgage', subtitle: 'FHA HECM — Age 62+, Primary Only', eligible: r.rmEligible as boolean, note: r.rmNote, amount: r.rmEligible ? `~${fmt(r.rmMax)} principal limit` : undefined, accentColor: '#8B6E52', pros: ['No monthly payments', 'Stay in home for life', 'Tax-free proceeds'], cons: ['Interest compounds', 'Reduces estate value', 'Repay on sale or exit'] },
    { title: 'Home Equity Investment', subtitle: 'HEI — Point, Unison, Unlock', eligible: r.heiEligible as boolean, note: r.heiNote, amount: r.heiEligible ? `${fmt(r.equity * 0.10)} – ${fmt(r.equity * 0.20)} est. range` : undefined, accentColor: '#B08A26', pros: ['No monthly payments', 'No income/credit check', 'No interest accrual'], cons: ['Company shares appreciation', 'Settle on sale or term', 'Appreciation share 15–35%'] },
    { title: 'DeedStack', subtitle: 'Tokenized Equity Pledge — Accredited Pilot', eligible: (r.drActive ? true : r.drWaitlist ? 'waitlist' : r.isProspective && r.drEligible ? 'future' : false) as boolean | 'waitlist' | 'future', note: r.drNote, amount: r.drEligible && r.equity > 0 ? `${fmt(r.equity * 0.05)} – ${fmt(r.equity * 0.25)} illustrative range` : undefined, accentColor: '#285A44', pros: ['Non-recourse pledge structure', 'Targets 8% yield participation', 'Homeowner retains deed', 'Token-based'], cons: ['Accredited participants only', 'Wyoming pilot — limited slots', 'Regulatory review required', 'No operating history'] },
  ];

  return (
    <div style={{ maxWidth: 860, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ background: 'var(--obsidian)', borderRadius: 'var(--r-xl)', overflow: 'hidden', marginBottom: 18 }}>
        <div style={{ background: 'var(--pine)', padding: '20px 26px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.55)', marginBottom: 4 }}>HOME EQUITY OPPORTUNITY REPORT · {scenarioLabel.toUpperCase()}</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 600, color: '#fff', marginBottom: 2 }}>Prepared for {form.name}</h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)' }}>{today} · {STATES.find(s => s.value === form.state)?.label ?? form.state}</p>
            </div>
            <div style={{ background: r.scoreColor, borderRadius: 'var(--r-md)', padding: '11px 18px', textAlign: 'center', minWidth: 120 }}>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '1.9rem', fontWeight: 600, color: '#fff', lineHeight: 1 }}>{r.score}</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', color: 'rgba(255,255,255,0.8)', marginTop: 3 }}>{r.scoreLabel}</p>
            </div>
          </div>
        </div>
        <div style={{ padding: '10px 26px', background: 'rgba(255,255,255,0.03)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', color: 'rgba(255,255,255,0.3)' }}>Pilot Suitability Score</span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)' }}>{r.score} / 100</span>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 999, height: 5, overflow: 'hidden' }}>
            <div style={{ width: `${r.score}%`, height: '100%', background: r.scoreColor, borderRadius: 999 }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
            {['Pre-qual','Waitlist','Priority','Strong'].map(l => <span key={l} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.58rem', color: 'rgba(255,255,255,0.2)' }}>{l}</span>)}
          </div>
        </div>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', color: 'rgba(255,255,255,0.25)', padding: '7px 26px 13px', lineHeight: 1.55 }}>Illustrative only. Based on self-reported estimates. Not financial advice. Not a guarantee of eligibility, returns, or participation.</p>
      </div>

      {/* Property summary */}
      <div style={{ background: 'var(--white)', border: '1px solid var(--mist)', borderRadius: 'var(--r-lg)', padding: '20px 24px', marginBottom: 14 }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', letterSpacing: '0.08em', color: 'var(--slate)', marginBottom: 12 }}>PROPERTY SUMMARY</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 14 }}>
          {(r.isProspective
            ? [{ label: 'Target Purchase Price', value: fmtFull(r.homeV), sub: 'Self-reported estimate' }, { label: 'Planned Down Payment', value: r.dpPct > 0 ? `${pct(r.dpPct)} · ${fmtFull(r.downV)}` : '—', sub: 'Starting equity at close' }, { label: 'Starting Equity', value: fmtFull(r.equity), sub: `${pct(r.dpPct)} of purchase price` }]
            : [{ label: 'Est. Home Value', value: fmtFull(r.homeV), sub: 'Self-reported estimate' }, { label: 'Est. Mortgage Balance', value: r.mortV === 0 ? 'Paid off' : fmtFull(r.mortV), sub: 'Self-reported estimate' }, { label: 'Available Equity', value: fmtFull(r.equity), sub: r.equity > 0 ? `${pct(1 - r.ltv)} of home value` : 'Negative equity' }]
          ).map(item => (
            <div key={item.label} style={{ background: 'var(--frost)', borderRadius: 'var(--r-md)', padding: '12px 14px' }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', color: 'var(--slate)', marginBottom: 4 }}>{item.label}</p>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '1rem', color: 'var(--granite)', fontWeight: 600 }}>{item.value}</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.63rem', color: 'var(--slate)', marginTop: 2 }}>{item.sub}</p>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid var(--mist)', paddingTop: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { label: 'Scenario', value: scenarioLabel },
            { label: r.isProspective ? 'After-Purchase LTV' : 'Loan-to-Value Ratio', value: pct(r.ltv), sub: r.ltv <= 0.80 ? 'Within typical threshold' : 'Above 80% — limits some options' },
            { label: 'DeedStack Track', value: r.track },
          ].map(row => (
            <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', color: 'var(--stone)' }}>{row.label}</span>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.82rem', color: 'var(--granite)', fontWeight: 500 }}>{row.value}</span>
                {row.sub && <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', color: 'var(--slate)', marginTop: 1 }}>{row.sub}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Status row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
        <div style={{ background: 'var(--white)', border: '1px solid var(--mist)', borderRadius: 'var(--r-lg)', padding: '18px 20px' }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', letterSpacing: '0.08em', color: 'var(--slate)', marginBottom: 10 }}>ACCREDITED INVESTOR STATUS</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.9rem', background: r.isAccredited ? '#ECF4EF' : r.borderline ? '#FAF4E4' : '#F5F5F5', color: r.isAccredited ? '#285A44' : r.borderline ? '#B08A26' : '#8A98A5' }}>{r.isAccredited ? '✓' : r.borderline ? '~' : '×'}</div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.83rem', fontWeight: 500, color: 'var(--granite)' }}>{r.isAccredited ? 'Likely Accredited' : r.borderline ? 'Borderline — Verify' : 'May Not Qualify'}</p>
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', color: 'var(--stone)', lineHeight: 1.55 }}>{r.isAccredited ? `${firstName}, your inputs suggest you meet the SEC accredited investor definition (Rule 501(a)). Formal verification required before any participation.` : r.borderline ? 'Your profile is near the threshold. An attorney or CPA review is recommended before applying.' : 'DeedStack pilot participation is currently limited to accredited investors. A financial advisor can help you explore qualification pathways.'}</p>
        </div>
        <div style={{ background: 'var(--white)', border: '1px solid var(--mist)', borderRadius: 'var(--r-lg)', padding: '18px 20px' }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', letterSpacing: '0.08em', color: 'var(--slate)', marginBottom: 10 }}>STATE PILOT ELIGIBILITY</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.82rem', fontWeight: 700, background: r.drActive ? '#ECF4EF' : r.drWaitlist ? '#FAF4E4' : '#F5F5F5', color: r.drActive ? '#285A44' : r.drWaitlist ? '#B08A26' : '#8A98A5' }}>{r.drActive ? '✓' : r.drWaitlist ? '~' : '—'}</div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.83rem', fontWeight: 500, color: 'var(--granite)' }}>{r.track}</p>
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', color: 'var(--stone)', lineHeight: 1.55 }}>{r.drActive ? 'Wyoming qualifies for the active pilot. Accredited participants with Wyoming-sited property may apply for consideration.' : r.drWaitlist ? 'Your state is a priority expansion market. We\'ll contact you when regulatory approvals are in place.' : 'We\'re monitoring regulatory frameworks in your state. You\'ll receive expansion updates as they develop.'}</p>
        </div>
      </div>

      {/* Comparison */}
      <div style={{ marginBottom: 18 }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', letterSpacing: '0.08em', color: 'var(--slate)', marginBottom: 4 }}>OPTION COMPARISON</p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', color: 'var(--stone)', marginBottom: 12 }}>Based on your {scenarioLabel.toLowerCase()} profile — how your equity access options compare.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
          {options.map(o => <OptionCard key={o.title} {...o} />)}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: 'var(--obsidian)', borderRadius: 'var(--r-xl)', padding: '24px 28px', textAlign: 'center', marginBottom: 18 }}>
        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 600, color: '#fff', marginBottom: 8 }}>{r.score >= 60 ? `${firstName}, you look like a strong candidate.` : `${firstName}, you're on our radar.`}</p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, maxWidth: 440, margin: '0 auto 18px' }}>{r.drActive ? 'Your state qualifies for the Wyoming pilot. We\'ll be in touch to discuss accredited verification and pilot terms.' : r.drWaitlist ? 'You\'re on our priority waitlist. We\'ll contact you when your state track opens.' : 'We\'ll notify you when DeedStack expands to your state.'}</p>
        <Link href="/marketplace" style={{ display: 'inline-block', background: 'var(--pine)', color: '#fff', borderRadius: 'var(--r-sm)', padding: '11px 24px', fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none' }}>Learn About the Two-Track Strategy →</Link>
      </div>

      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', color: 'var(--slate)', lineHeight: 1.75, textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>This report is for informational and educational purposes only. All figures are illustrative estimates based on self-reported inputs. Nothing here constitutes financial, legal, or investment advice. DeedStack is not a registered broker-dealer or investment adviser. Pilot participation is subject to regulatory approval, accredited investor verification, and legal review of transaction documents.</p>
    </div>
  );
}

// ─── What you'll receive section ─────────────────────────────────────────────

function UpdatesSection({ state }: { state: string }) {
  const isWY = state === 'WY';
  const isCA = state === 'CA';
  const isNV = state === 'NV';
  const isKnown = isWY || isCA || isNV;

  const stateLabel = isWY ? 'Wyoming' : isCA ? 'California' : isNV ? 'Nevada' : 'your state';

  const updates = [
    {
      icon: '📡',
      title: 'Development Updates',
      body: isWY
        ? 'As a Wyoming registrant, you\'ll receive direct updates on pilot milestones — token issuance testing, custody framework completion, and first transaction announcements.'
        : `Follow our Wyoming pilot progress and see exactly what we\'re building before it reaches ${stateLabel}.`,
    },
    {
      icon: '⚖️',
      title: isKnown ? `${stateLabel} Regulatory News` : 'Regulatory Framework Updates',
      body: isWY
        ? 'Updates on Wyoming Digital Asset Statute developments, DAO LLC amendments, and Reg D 506(c) compliance milestones directly relevant to your participation track.'
        : isCA
        ? 'California has some of the most complex digital asset regulations in the US. We\'ll send you curated updates on CA DBO rulings, tokenized securities guidance, and our expansion timeline for your state.'
        : isNV
        ? 'Nevada\'s evolving blockchain framework is a priority expansion target for DeedStack. We\'ll keep you informed on NV-specific regulatory developments and our licensing progress.'
        : 'We monitor digital asset and securities regulation across all 50 states. You\'ll receive updates relevant to your jurisdiction as they develop.',
    },
    {
      icon: '🏠',
      title: 'Home Equity Market Intelligence',
      body: 'Quarterly briefings on the tokenized real estate market, HEI industry trends, HELOC rate movements, and how DeedStack\'s structure compares to traditional equity access products.',
    },
    {
      icon: '🔔',
      title: 'Early Access Notifications',
      body: isWY
        ? 'Pilot slot availability, accredited verification windows, and preferred partner terms — Wyoming registrants are first in line.'
        : `When DeedStack expands to ${stateLabel}, waitlist registrants receive first notification and priority onboarding terms before public launch.`,
    },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-20 py-20" style={{ background: 'var(--frost)' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', letterSpacing: '0.1em', color: 'var(--slate)', marginBottom: 10 }}>WHAT YOU&apos;LL RECEIVE</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 600, color: 'var(--granite)', marginBottom: 10, maxWidth: 480, lineHeight: 1.2 }}>
          Updates tailored to your location and track.
        </h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', color: 'var(--stone)', lineHeight: 1.7, maxWidth: 520, marginBottom: 40 }}>
          No generic newsletters. Everything we send is relevant to your state, your scenario, and where DeedStack is in its development. Unsubscribe any time.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {updates.map(u => (
            <div key={u.title} style={{ background: 'var(--white)', border: '1px solid var(--mist)', borderRadius: 'var(--r-lg)', padding: '22px 24px' }}>
              <div style={{ fontSize: '1.4rem', marginBottom: 10 }}>{u.icon}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', fontWeight: 600, color: 'var(--granite)', marginBottom: 8 }}>{u.title}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', color: 'var(--stone)', lineHeight: 1.65 }}>{u.body}</p>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', color: 'var(--slate)', lineHeight: 1.65, marginTop: 28, maxWidth: 560 }}>
          Joining the waitlist does not create any legal rights, obligations, or expectation of participation. DeedStack is not currently offering services in all states. All communications are for informational purposes only.
        </p>
      </div>
    </section>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function InterestListPage() {
  const [scenario, setScenario] = useState<Scenario>(null);
  const [step, setStep]         = useState(1);
  const [form, setForm]         = useState<FormData>(EMPTY);
  const [skipReport, setSkipReport] = useState(false);
  const [loading, setLoading]   = useState(false);
  const [done, setDone]         = useState(false);

  function update(field: keyof FormData, val: string) {
    setForm(prev => ({ ...prev, [field]: val }));
  }

  const s1v = form.name.trim() !== '' && form.email.includes('@') && form.state !== '';
  const s2v = form.homeValue !== '' && form.propertyType !== ''
    && (scenario === 'prospective' ? form.downPaymentPct !== '' : form.mortgageBalance !== '');
  const s3v = form.annualIncome !== '' && form.netWorth !== '' && form.creditScore !== ''
    && (scenario === 'owner' ? form.ageRange !== '' : true)
    && (scenario === 'prospective' ? form.purchaseTimeline !== '' : true);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // TODO: POST to Formspree / API route with form data
    await new Promise(r => setTimeout(r, 900));
    setLoading(false);
    setDone(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const btnBase: React.CSSProperties = { borderRadius: 'var(--r-sm)', padding: '13px 22px', fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', fontWeight: 500, border: 'none', cursor: 'pointer' };

  return (
    <>
      <Nav />
      <main style={{ background: 'var(--snow)' }}>

        {/* ── Hero + Form (continuous dark section) ─────────────────────────── */}
        {!done && (
          <section style={{ background: 'var(--obsidian)', paddingTop: 100 }}>
            <div className="px-6 md:px-12 lg:px-20">

              {/* Hero text */}
              <div style={{ maxWidth: 720, margin: '0 auto', paddingTop: 44, paddingBottom: 40 }}>
                <span style={{ display: 'inline-block', background: 'rgba(82,183,136,0.15)', color: '#52B788', borderRadius: 'var(--r-pill)', padding: '4px 12px', fontSize: '0.7rem', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: '0.08em', marginBottom: 20 }}>
                  HOME EQUITY LIQUIDITY PILOT
                </span>
                <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 700, color: 'var(--white)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 18 }}>
                  Join our waitlist &amp;<br />
                  <span style={{ color: '#52B788' }}>get your free Equity Report.</span>
                </h1>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.75, maxWidth: 520 }}>
                  Register your interest in the DeedStack pilot and receive a personalized Home Equity Opportunity Report — showing your estimated equity, how your options compare, and whether you may qualify for pilot consideration. No commitment. No credit card required.
                </p>
              </div>

              {/* Form area */}
              <div style={{ maxWidth: 640, margin: '0 auto', paddingBottom: 64 }}>

                {/* Skip option */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 20 }}>
                  <button type="button" onClick={() => setSkipReport(v => !v)}
                    style={{ background: 'none', border: 'none', fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', color: skipReport ? '#52B788' : 'rgba(255,255,255,0.3)', cursor: 'pointer', padding: 0, textDecoration: 'underline', textUnderlineOffset: 3 }}>
                    {skipReport ? '← Include my free report' : 'Forgo the report — just join the waitlist'}
                  </button>
                </div>

                {skipReport ? (
                  /* Quick join */
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div><Label>FULL NAME</Label><input type="text" required value={form.name} onChange={e => update('name', e.target.value)} placeholder="Jane Smith" style={iStyle} className={iCls} /></div>
                    <div><Label>EMAIL ADDRESS</Label><input type="email" required value={form.email} onChange={e => update('email', e.target.value)} placeholder="jane@example.com" style={iStyle} className={iCls} /></div>
                    <Field label="STATE OF PROPERTY" value={form.state} onChange={v => update('state', v)} options={STATES} />
                    <button type="submit" disabled={!s1v || loading}
                      style={{ ...btnBase, background: s1v ? 'var(--pine)' : 'rgba(40,90,68,0.35)', color: '#fff', marginTop: 4 }}
                      className={s1v ? 'hover:!bg-[#3A7A5C] transition-colors' : ''}>
                      {loading ? 'Submitting…' : 'Join Waitlist →'}
                    </button>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.7rem', color: 'rgba(255,255,255,0.22)', lineHeight: 1.6 }}>Not an offer or investment agreement. Unsubscribe at any time.</p>
                  </form>
                ) : (
                  /* Full form */
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <ScenarioSelector value={scenario} onChange={s => { setScenario(s); setStep(1); setForm(EMPTY); }} />

                    {scenario && (
                      <>
                        <StepDots step={step} />

                        {step === 1 && (
                          <>
                            <div><Label>FULL NAME</Label><input type="text" required value={form.name} onChange={e => update('name', e.target.value)} placeholder="Jane Smith" style={iStyle} className={iCls} /></div>
                            <div><Label>EMAIL ADDRESS</Label><input type="email" required value={form.email} onChange={e => update('email', e.target.value)} placeholder="jane@example.com" style={iStyle} className={iCls} /></div>
                            <Field label="STATE OF PROPERTY" value={form.state} onChange={v => update('state', v)} options={STATES} />
                            <button type="button" disabled={!s1v} onClick={() => setStep(2)}
                              style={{ ...btnBase, background: s1v ? 'var(--pine)' : 'rgba(40,90,68,0.35)', color: '#fff' }}
                              className={s1v ? 'hover:!bg-[#3A7A5C] transition-colors' : ''}>
                              Continue → Property Details
                            </button>
                          </>
                        )}

                        {step === 2 && (
                          <>
                            <Field
                              label={scenario === 'prospective' ? 'TARGET PURCHASE PRICE' : 'ESTIMATED HOME VALUE'}
                              hint={scenario === 'prospective' ? 'Your target price range' : 'Best estimate — won\'t be verified'}
                              value={form.homeValue} onChange={v => update('homeValue', v)}
                              options={[{ value: '', label: scenario === 'prospective' ? 'Select price range' : 'Select a range' }, ...HOME_VALUES]}
                            />
                            {scenario === 'prospective' ? (
                              <Field label="PLANNED DOWN PAYMENT" hint="% of purchase price you intend to put down" value={form.downPaymentPct} onChange={v => update('downPaymentPct', v)} options={[{ value: '', label: 'Select down payment' }, ...DOWN_PAYMENTS]} />
                            ) : (
                              <Field label="ESTIMATED MORTGAGE BALANCE" hint={scenario === 'rental' ? 'All mortgages on this property' : 'Include all mortgages and HELOCs'} value={form.mortgageBalance} onChange={v => update('mortgageBalance', v)} options={[{ value: '', label: 'Select a range' }, ...MORTGAGE_BALANCES]} />
                            )}
                            <Field label="PROPERTY TYPE" value={form.propertyType} onChange={v => update('propertyType', v)}
                              options={[{ value: '', label: 'Select type' }, ...(scenario === 'rental'
                                ? [{ value: 'singleFamily', label: 'Single-Family' }, { value: 'duplex', label: 'Duplex (2-unit)' }, { value: 'triplex', label: 'Triplex / Quadplex' }, { value: 'condo', label: 'Condo / Townhome' }, { value: 'other', label: 'Other' }]
                                : [{ value: 'singleFamily', label: 'Single-Family Home' }, { value: 'condo', label: 'Condominium' }, { value: 'townhome', label: 'Townhome' }, { value: 'other', label: 'Other' }])]}
                            />
                            {scenario === 'rental' && <Field label="MONTHLY RENTAL INCOME" hint="Current or projected gross rent" value={form.monthlyRent} onChange={v => update('monthlyRent', v)} options={[{ value: '', label: 'Select range' }, { value: 'under2k', label: 'Under $2,000 / mo' }, { value: '2kto3k', label: '$2,000 – $3,000 / mo' }, { value: '3kto5k', label: '$3,000 – $5,000 / mo' }, { value: '5kto10k', label: '$5,000 – $10,000 / mo' }, { value: 'over10k', label: 'Over $10,000 / mo' }]} />}
                            {scenario === 'prospective' && <Field label="PURCHASE TIMELINE" value={form.purchaseTimeline} onChange={v => update('purchaseTimeline', v)} options={[{ value: '', label: 'Select timeline' }, { value: 'under3m', label: 'Within 3 months' }, { value: '3to6m', label: '3 – 6 months' }, { value: '6to12m', label: '6 – 12 months' }, { value: '1to2y', label: '1 – 2 years' }, { value: 'exploring', label: 'Just exploring' }]} />}
                            <div className="flex gap-3">
                              <button type="button" onClick={() => setStep(1)} style={{ ...btnBase, flex: 1, background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }}>← Back</button>
                              <button type="button" disabled={!s2v} onClick={() => setStep(3)} style={{ ...btnBase, flex: 2, background: s2v ? 'var(--pine)' : 'rgba(40,90,68,0.35)', color: '#fff' }} className={s2v ? 'hover:!bg-[#3A7A5C] transition-colors' : ''}>Continue → Financials</button>
                            </div>
                          </>
                        )}

                        {step === 3 && (
                          <>
                            {scenario === 'owner' && <Field label="YOUR AGE RANGE" hint="Used to assess reverse mortgage eligibility" value={form.ageRange} onChange={v => update('ageRange', v)} options={[{ value: '', label: 'Select range' }, { value: 'under55', label: 'Under 55' }, { value: '55to61', label: '55 – 61' }, { value: '62to70', label: '62 – 70' }, { value: '71plus', label: '71 or older' }]} />}
                            <Field label="ANNUAL GROSS INCOME" hint="Individual income — used for accredited investor check" value={form.annualIncome} onChange={v => update('annualIncome', v)} options={[{ value: '', label: 'Select range' }, { value: 'under100k', label: 'Under $100,000' }, { value: '100to200k', label: '$100,000 – $200,000' }, { value: '200to300k', label: '$200,000 – $300,000' }, { value: 'over300k', label: 'Over $300,000' }]} />
                            <Field label="NET WORTH (EXCL. PRIMARY RESIDENCE)" hint="Per SEC Rule 501(a) — excludes your primary home's value" value={form.netWorth} onChange={v => update('netWorth', v)} options={[{ value: '', label: 'Select range' }, { value: 'under200k', label: 'Under $200,000' }, { value: '200kTo500k', label: '$200,000 – $500,000' }, { value: '500kTo1m', label: '$500,000 – $1,000,000' }, { value: '1mPlus', label: '$1,000,000 or more' }]} />
                            <Field label="CREDIT SCORE RANGE" hint="Won't affect your credit" value={form.creditScore} onChange={v => update('creditScore', v)} options={[{ value: '', label: 'Select range' }, { value: 'below620', label: 'Below 620' }, { value: '620to680', label: '620 – 680' }, { value: '680to740', label: '680 – 740' }, { value: '740plus', label: '740 or above' }, { value: 'unknown', label: 'Not sure' }]} />
                            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 'var(--r-md)', padding: '11px 15px' }}>
                              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.7rem', color: 'rgba(255,255,255,0.32)', lineHeight: 1.6 }}>
                                Used only to generate your report and for DeedStack pilot outreach. No credit check. No data sharing with third parties. This is not an application for credit or securities.
                              </p>
                            </div>
                            <div className="flex gap-3">
                              <button type="button" onClick={() => setStep(2)} style={{ ...btnBase, flex: 1, background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }}>← Back</button>
                              <button type="submit" disabled={!s3v || loading}
                                style={{ ...btnBase, flex: 2, background: s3v ? 'var(--pine)' : 'rgba(40,90,68,0.35)', color: '#fff' }}
                                className={s3v ? 'hover:!bg-[#3A7A5C] transition-colors' : ''}>
                                {loading ? 'Generating your report…' : 'Join Waitlist & Get My Report →'}
                              </button>
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </form>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ── Success / Report output ───────────────────────────────────────── */}
        {done && skipReport && (
          <>
            <section style={{ background: 'var(--obsidian)', paddingTop: 100, paddingBottom: 80 }} className="px-6 md:px-12 lg:px-20">
              <div style={{ maxWidth: 480, margin: '0 auto', textAlign: 'center', paddingTop: 44 }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>✓</div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: 12 }}>You&apos;re on the list, {form.name.split(' ')[0]}.</h2>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 24 }}>We&apos;ll reach out with state-relevant updates when your track opens. No spam.</p>
                <Link href="/marketplace" style={{ display: 'inline-block', background: 'var(--pine)', color: '#fff', borderRadius: 'var(--r-sm)', padding: '11px 24px', fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none' }}>Learn About the Two-Track Strategy →</Link>
              </div>
            </section>
            <UpdatesSection state={form.state} />
          </>
        )}

        {done && !skipReport && (
          <>
            <section style={{ background: 'var(--obsidian)', paddingTop: 80, paddingBottom: 24 }} className="px-6 md:px-12 lg:px-20">
              <div style={{ maxWidth: 860, margin: '0 auto' }}>
                <div style={{ background: 'rgba(82,183,136,0.1)', border: '1px solid rgba(82,183,136,0.2)', borderRadius: 'var(--r-lg)', padding: '13px 18px', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ color: '#52B788' }}>✓</span>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>You&apos;re on our waitlist, {form.name.split(' ')[0]}. Your personalized report is below.</p>
                </div>
              </div>
            </section>
            <section className="px-6 md:px-12 lg:px-20 py-12" style={{ background: 'var(--frost)' }}>
              <Report form={form} scenario={scenario} />
            </section>
            <UpdatesSection state={form.state} />
          </>
        )}

      </main>
    </>
  );
}
