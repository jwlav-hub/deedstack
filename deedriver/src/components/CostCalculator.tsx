'use client';

import { useState } from 'react';

const STATES: Record<string, { lawyer: number; note: string }> = {
  'Nevada':     { lawyer: 3500, note: 'LLC formation + deed transfer + operating agreement' },
  'California': { lawyer: 5500, note: 'Incl. Prop 13 structuring & review' },
  'Florida':    { lawyer: 3000, note: 'Land trust + LLC formation + deed transfer' },
  'Texas':      { lawyer: 3500, note: 'LLC formation + deed transfer + operating agreement' },
  'New York':   { lawyer: 6000, note: 'Incl. ~$1,500 publication requirement' },
  'Arizona':    { lawyer: 3000, note: 'LLC formation + deed transfer' },
  'Colorado':   { lawyer: 3500, note: 'LLC formation + deed transfer + operating agreement' },
  'Wyoming':    { lawyer: 2500, note: 'LLC formation + deed transfer' },
  'Washington': { lawyer: 3500, note: 'LLC formation + deed transfer' },
  'Oregon':     { lawyer: 3000, note: 'LLC formation + deed transfer' },
  'Other':      { lawyer: 4000, note: 'Average US attorney estimate' },
};

const TIERS = [
  {
    id: 'basic',
    label: 'Protection Only',
    formation: 799,
    annual: 99,
    includes: 'LLC formation, deed transfer, annual compliance, on-chain records',
  },
  {
    id: 'bookkeeping',
    label: 'Protection + Bookkeeping',
    formation: 799,
    annual: 299,
    includes: 'Everything in Protection + income tracking, Schedule E export',
  },
  {
    id: 'tax',
    label: 'Full Service',
    formation: 799,
    annual: 599,
    includes: 'Everything in Bookkeeping + CPA-partnered tax filing',
  },
];

function fmt(n: number) {
  return '$' + Math.round(n).toLocaleString();
}

export default function CostCalculator() {
  const [homeValue, setHomeValue] = useState(500000);
  const [stateName, setStateName] = useState('Nevada');
  const [tierId, setTierId]       = useState('basic');
  const [years, setYears]         = useState(5);

  const tier       = TIERS.find(t => t.id === tierId)!;
  const stateData  = STATES[stateName];

  // Lawyer: one-time formation + $500/yr registered agent + annual report service
  const lawyerUpfront   = stateData.lawyer;
  const lawyerAnnual    = 500;
  const lawyerTotal     = lawyerUpfront + lawyerAnnual * years;

  // DeedStack
  const drUpfront       = tier.formation;
  const drAnnual        = tier.annual;
  const drTotal         = drUpfront + drAnnual * years;

  const savings         = lawyerTotal - drTotal;
  const savingsPct      = Math.round((savings / lawyerTotal) * 100);

  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--white)', border: '1px solid var(--mist)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>

      {/* Header */}
      <div className="px-8 py-6" style={{ borderBottom: '1px solid var(--mist)', background: 'var(--frost)' }}>
        <p className="text-label mb-1">COST CALCULATOR</p>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.35rem', fontWeight: 600, color: 'var(--granite)', lineHeight: 1.2 }}>
          See what you save vs. a lawyer
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-0">

        {/* Left — Inputs */}
        <div className="p-8" style={{ borderRight: '1px solid var(--mist)' }}>

          {/* Home value */}
          <div className="mb-7">
            <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', color: 'var(--stone)', display: 'block', marginBottom: 8 }}>HOME VALUE</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '1.5rem', fontWeight: 600, color: 'var(--pine)', minWidth: 110 }}>{fmt(homeValue)}</span>
            </div>
            <input
              type="range"
              min={200000} max={3000000} step={50000}
              value={homeValue}
              onChange={e => setHomeValue(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--pine)' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: 'var(--slate)' }}>$200K</span>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: 'var(--slate)' }}>$3M</span>
            </div>
          </div>

          {/* State */}
          <div className="mb-7">
            <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', color: 'var(--stone)', display: 'block', marginBottom: 8 }}>PROPERTY STATE</label>
            <select
              value={stateName}
              onChange={e => setStateName(e.target.value)}
              style={{ width: '100%', padding: '10px 12px', fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: 'var(--granite)', background: 'var(--snow)', border: '1.5px solid var(--mist)', borderRadius: 'var(--r-md)', appearance: 'none', cursor: 'pointer' }}
            >
              {Object.keys(STATES).map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', color: 'var(--slate)', marginTop: 6, lineHeight: 1.5 }}>{stateData.note}</p>
          </div>

          {/* Tier */}
          <div className="mb-7">
            <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', color: 'var(--stone)', display: 'block', marginBottom: 8 }}>SERVICE TIER</label>
            <div className="flex flex-col gap-2">
              {TIERS.map(t => (
                <button
                  key={t.id}
                  onClick={() => setTierId(t.id)}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 10, padding: '10px 12px',
                    borderRadius: 'var(--r-md)', border: `1.5px solid ${tierId === t.id ? 'var(--pine)' : 'var(--mist)'}`,
                    background: tierId === t.id ? 'rgba(40,90,68,0.05)' : 'transparent',
                    cursor: 'pointer', textAlign: 'left', transition: 'border-color 150ms, background 150ms',
                  }}
                >
                  <div style={{ width: 14, height: 14, borderRadius: '50%', border: `2px solid ${tierId === t.id ? 'var(--pine)' : 'var(--mist)'}`, background: tierId === t.id ? 'var(--pine)' : 'transparent', flexShrink: 0, marginTop: 2, transition: 'all 150ms' }} />
                  <div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: 'var(--granite)', marginBottom: 2 }}>{t.label}</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: 'var(--slate)', lineHeight: 1.4 }}>{t.includes}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Years */}
          <div>
            <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', color: 'var(--stone)', display: 'block', marginBottom: 8 }}>PROJECTION PERIOD</label>
            <div className="flex gap-2">
              {[3, 5, 10].map(y => (
                <button key={y} onClick={() => setYears(y)}
                  style={{ flex: 1, padding: '8px 0', fontFamily: "'DM Mono', monospace", fontSize: 13, fontWeight: 500, color: years === y ? 'var(--pine)' : 'var(--stone)', background: years === y ? 'rgba(40,90,68,0.08)' : 'transparent', border: `1.5px solid ${years === y ? 'var(--pine)' : 'var(--mist)'}`, borderRadius: 'var(--r-md)', cursor: 'pointer', transition: 'all 150ms' }}>
                  {y}yr
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Results */}
        <div className="p-8 flex flex-col gap-5">

          {/* Savings hero */}
          <div className="rounded-xl px-6 py-5 text-center" style={{ background: 'rgba(40,90,68,0.06)', border: '1.5px solid rgba(40,90,68,0.2)' }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--pine)', marginBottom: 6 }}>YOUR {years}-YEAR SAVINGS</p>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '2.75rem', fontWeight: 600, color: 'var(--pine)', lineHeight: 1 }}>{fmt(savings)}</p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', color: 'var(--stone)', marginTop: 6 }}>{savingsPct}% less than a traditional attorney</p>
          </div>

          {/* Breakdown */}
          <div className="flex flex-col gap-3">
            {/* Lawyer */}
            <div className="rounded-xl px-5 py-4" style={{ background: 'var(--frost)', border: '1px solid var(--mist)' }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', color: 'var(--slate)', marginBottom: 8 }}>TRADITIONAL ATTORNEY ROUTE</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'var(--stone)' }}>One-time formation</span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: 'var(--granite)' }}>{fmt(lawyerUpfront)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'var(--stone)' }}>Annual registered agent ({years}yr)</span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: 'var(--granite)' }}>{fmt(lawyerAnnual * years)}</span>
              </div>
              <div style={{ borderTop: '1px solid var(--mist)', paddingTop: 8, display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: 'var(--granite)' }}>{years}-Year Total</span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 14, fontWeight: 600, color: 'var(--granite)' }}>{fmt(lawyerTotal)}</span>
              </div>
            </div>

            {/* DeedStack */}
            <div className="rounded-xl px-5 py-4" style={{ background: 'rgba(40,90,68,0.05)', border: '1.5px solid rgba(40,90,68,0.25)' }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', color: 'var(--pine)', marginBottom: 8 }}>DEEDSHIELD — {tier.label.toUpperCase()}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'var(--stone)' }}>Formation + tokenization</span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: 'var(--granite)' }}>{fmt(drUpfront)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'var(--stone)' }}>Annual compliance ({years}yr)</span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: 'var(--granite)' }}>{fmt(drAnnual * years)}</span>
              </div>
              <div style={{ borderTop: '1px solid rgba(40,90,68,0.2)', paddingTop: 8, display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: 'var(--pine)' }}>{years}-Year Total</span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 14, fontWeight: 600, color: 'var(--pine)' }}>{fmt(drTotal)}</span>
              </div>
            </div>
          </div>

          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.7rem', color: 'var(--slate)', lineHeight: 1.6 }}>
            Estimates are illustrative. Attorney fees vary by state, complexity, and provider. DeedStack pricing is subject to change. Not legal or financial advice.
          </p>
        </div>
      </div>
    </div>
  );
}
