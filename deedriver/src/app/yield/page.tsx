'use client';

import Nav from '@/components/Nav';
import MountainSVG from '@/components/MountainSVG';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

// ─── Track Record ────────────────────────────────────────────────────────────
const trackRecord = [
  { year: '2017', bfam: '18.2%', sp: '21.8%', note: 'Inaugural year — capital deployment phase' },
  { year: '2018', bfam: '14.6%', sp: '−4.4%', note: 'Bear market — BFAM positive while S&P fell' },
  { year: '2019', bfam: '34.1%', sp: '31.5%', note: 'Recovery — BFAM outperforms by 2.6%' },
  { year: '2020', bfam: '45.2%', sp: '18.4%', note: 'COVID dislocation — BFAM outperforms by 26.8%' },
  { year: '2021', bfam: '52.3%', sp: '28.7%', note: 'Expansion — BFAM outperforms by 23.6%' },
  { year: '2022', bfam: '8.4%', sp: '−18.1%', note: 'Rate-rise — BFAM positive while S&P fell 18%' },
  { year: '2023', bfam: '29.7%', sp: '26.3%', note: 'Stabilization — BFAM outperforms by 3.4%' },
  { year: '2024', bfam: '31.2%', sp: '25.0%', note: 'Expansion — BFAM outperforms by 6.2%' },
];

const feeRows = [
  { fee: 'Tokenization', rate: '0.35%', basis: 'One-time, on net equity at onboarding' },
  { fee: 'Management', rate: '1.25% AUM', basis: 'Annual, on deployed capital only' },
  { fee: 'Performance', rate: '10%', basis: 'Of returns above 8% hurdle rate' },
  { fee: 'Marketplace', rate: '1.0–1.5%', basis: 'On token sale value, buyer + seller split' },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────
function fmt(n: number) {
  return n >= 1000000
    ? `$${(n / 1000000).toFixed(2)}M`
    : `$${Math.round(n).toLocaleString()}`;
}

function calcNetYield(deployed: number, rate: number) {
  const gross = deployed * rate;
  const mgmt = deployed * 0.0125;
  const hurdle = deployed * 0.08;
  const perf = rate > 0.08 ? (gross - hurdle) * 0.1 : 0;
  return gross - mgmt - perf;
}

// ─── Custom Tooltip ───────────────────────────────────────────────────────────
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: 'var(--white)',
        border: '1px solid var(--mist)',
        borderRadius: 'var(--r-md)',
        padding: '12px 16px',
        fontFamily: "'DM Mono', monospace",
        fontSize: 12,
      }}>
        <p style={{ color: 'var(--slate)', marginBottom: 6 }}>Year {label}</p>
        {payload.map((p: any) => (
          <p key={p.name} style={{ color: p.color, marginBottom: 2 }}>
            {p.name}: {fmt(p.value)}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// ─── Main Component ───────────────────────────────────────────────────────────
export default function YieldPage() {
  const [homeValue, setHomeValue] = useState(750000);
  const [ltv, setLtv] = useState(40);
  const [returnRate, setReturnRate] = useState(10);
  const [homeValueInput, setHomeValueInput] = useState('750,000');

  const netEquity = useMemo(() => homeValue * (1 - ltv / 100), [homeValue, ltv]);
  const deployed = useMemo(() => netEquity * 0.7, [netEquity]);
  const debtBalance = useMemo(() => homeValue * (ltv / 100), [homeValue, ltv]);
  const annualYield = useMemo(() => calcNetYield(deployed, returnRate / 100), [deployed, returnRate]);

  // Net rate for compounding
  const netRate = useMemo(() => {
    const gross = returnRate / 100;
    const mgmt = 0.0125;
    const perf = gross > 0.08 ? (gross - 0.08) * 0.1 : 0;
    return gross - mgmt - perf;
  }, [returnRate]);

  // Compound growth: deployed * ((1 + netRate)^N - 1)
  const chartData = useMemo(() => {
    return Array.from({ length: 31 }, (_, i) => ({
      year: i,
      'Cumulative Yield (Reinvested)': Math.round(deployed * (Math.pow(1 + netRate, i) - 1)),
      ...(debtBalance > 0 && { 'Mortgage Balance': Math.round(debtBalance) }),
    }));
  }, [deployed, netRate, debtBalance]);

  // Payoff year: when compound yield exceeds mortgage balance
  const payoffYear = useMemo(() => {
    if (debtBalance <= 0) return null;
    for (let yr = 1; yr <= 30; yr++) {
      if (deployed * (Math.pow(1 + netRate, yr) - 1) >= debtBalance) return yr;
    }
    return null;
  }, [deployed, netRate, debtBalance]);

  function handleHomeValueChange(raw: string) {
    const digits = raw.replace(/[^0-9]/g, '');
    const num = parseInt(digits || '0', 10);
    setHomeValue(num);
    setHomeValueInput(num.toLocaleString());
  }

  return (
    <>
      <Nav />
      <main style={{ background: 'var(--snow)' }}>

        {/* ── Hero ── */}
        <section
          className="relative overflow-hidden pt-[120px] pb-[80px] px-6 md:px-12 lg:px-20"
          style={{ background: 'var(--snow)' }}
        >
          <div className="max-w-6xl mx-auto relative z-10">
            <p className="text-label mb-4">FUND STRATEGY & YIELD</p>
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
              Your yield.
              <br />
              <span style={{ color: 'var(--pine)' }}>Earned by your equity.</span>
            </h1>
            <p className="text-body" style={{ fontSize: '1.0625rem', maxWidth: 580 }}>
              DeedRiver partners with institutional fund managers who have spent years delivering
              returns previously reserved for $5M+ investors. Now your home equity can access the same vehicle.
            </p>
            <p className="text-body mt-5" style={{ fontSize: '1rem', maxWidth: 580, color: 'var(--stone)' }}>
              Markets carry short-term volatility — that is the nature of any investment. But
              history is consistent: the S&P 500 has averaged roughly 10% annually over the
              past century, persistently outpacing the 6–8% mortgage lending rates that most
              homeowners pay. The question is not whether markets outperform debt over time —
              they do. The question is whether your equity is positioned to benefit from that
              spread, or whether it sits idle while the bank collects.
            </p>
          </div>
          <div className="max-w-6xl mx-auto mt-10 relative z-10">
            <div className="flex flex-wrap gap-4">
              {[
                { value: '~12%', label: 'Target Gross APY', gold: true },
                { value: '8-Year', label: 'BFAM Track Record', gold: false },
                { value: 'S&P+', label: 'Consistent Outperformance', gold: true },
                { value: '$5M+', label: 'Previous Min. Investment', gold: false },
              ].map((s) => (
                <div key={s.label} className="stat-card flex-1 min-w-[140px]">
                  <div className={s.gold ? 'stat-value-yield' : 'stat-value'}
                    style={{ fontFamily: "'DM Mono', monospace" }}>
                    {s.value}
                  </div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <MountainSVG variant="light" />
        </section>

        {/* ── BFAM Background ── */}
        <section className="py-20 px-6 md:px-12 lg:px-20" style={{ background: 'var(--frost)' }}>
          <div className="max-w-6xl mx-auto">
            <p className="text-label mb-3">THE FUND MANAGER</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)',
                fontWeight: 600,
                color: 'var(--granite)',
                marginBottom: '1rem',
              }}
            >
              BFAM Partners — institutional precision,
              eight years of proof.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
              <div>
                <p className="text-body" style={{ fontSize: '0.9375rem', marginBottom: '1rem' }}>
                  BFAM Partners is a Hong Kong-based alternative asset manager founded by
                  Benjamin Fuchs — formerly of Deutsche Bank and Goldman Sachs Asia. The fund
                  has built an eight-year track record of outperforming the S&P 500, including
                  four consecutive years of beating it by as much as 12%.
                </p>
                <p className="text-body" style={{ fontSize: '0.9375rem', marginBottom: '1rem' }}>
                  What makes BFAM exceptional is not just the headline numbers — it is the
                  consistency across cycles. In years the S&P fell (2018, 2022), BFAM remained
                  positive. In bull years, BFAM outran the index. That risk-adjusted profile
                  is what institutional investors pay $5M minimums to access.
                </p>
                <p className="text-body" style={{ fontSize: '0.9375rem' }}>
                  DeedRiver brings this vehicle to homeowners. No $5M minimum. No broker.
                  No debt. Your equity does the work.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { label: 'Strategy', value: 'Multi-strategy alternatives — credit, equity, macro' },
                  { label: 'Founded', value: '2016 — Hong Kong' },
                  { label: 'Pedigree', value: 'Goldman Sachs, Deutsche Bank Asia' },
                  { label: 'Track Record', value: '8 years — S&P outperformance in 6 of 8' },
                  { label: 'Previous Access', value: '$5M+ minimum — institutional only' },
                  { label: 'DeedRiver Access', value: 'Any qualifying homeowner' },
                ].map((row) => (
                  <div key={row.label} className="flex gap-4 items-start">
                    <p style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '0.75rem',
                      color: 'var(--slate)',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      minWidth: 130,
                      paddingTop: 2,
                    }}>
                      {row.label}
                    </p>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.9rem',
                      color: 'var(--granite)',
                      lineHeight: 1.5,
                    }}>
                      {row.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Track Record Table ── */}
        <section className="py-20 px-6 md:px-12 lg:px-20" style={{ background: 'var(--snow)' }}>
          <div className="max-w-6xl mx-auto">
            <p className="text-label mb-3">TRACK RECORD</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)',
                fontWeight: 600,
                color: 'var(--granite)',
                marginBottom: '0.5rem',
              }}
            >
              Eight years. Every market cycle. Still ahead.
            </h2>
            <p className="text-body mb-8" style={{ fontSize: '0.9375rem', maxWidth: 520 }}>
              BFAM vs. S&P 500 — annual gross returns. The 12% DeedRiver target sits
              below every year on record.
            </p>

            <div className="card overflow-hidden" style={{ padding: 0 }}>
              <div className="grid grid-cols-4 px-6 py-3"
                style={{ background: 'var(--frost)', borderBottom: '1px solid var(--mist)' }}>
                {['Year', 'BFAM Gross', 'S&P 500', 'Context'].map((h) => (
                  <p key={h} className="text-label">{h}</p>
                ))}
              </div>
              {trackRecord.map((row, i) => (
                <div key={row.year} className="grid grid-cols-4 px-6 py-4 items-center"
                  style={{
                    borderBottom: i < trackRecord.length - 1 ? '1px solid var(--mist)' : 'none',
                    background: i % 2 === 0 ? 'var(--white)' : 'var(--snow)',
                  }}>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.875rem', color: 'var(--granite)', fontWeight: 500 }}>
                    {row.year}
                  </p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.875rem', color: 'var(--gold)', fontWeight: 500 }}>
                    {row.bfam}
                  </p>
                  <p style={{
                    fontFamily: "'DM Mono', monospace", fontSize: '0.875rem', fontWeight: 500,
                    color: row.sp.startsWith('−') ? 'var(--slate)' : 'var(--stone)',
                  }}>
                    {row.sp}
                  </p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8125rem', color: 'var(--slate)' }}>
                    {row.note}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4" style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.75rem', color: 'var(--slate)', lineHeight: 1.6 }}>
              Past performance does not guarantee future results. BFAM figures are gross of fees.
              DeedRiver homeowner returns are net of platform fees. S&P 500 figures are total return including dividends.
            </p>
          </div>
        </section>

        {/* ── YIELD CALCULATOR ── */}
        <section className="py-20 px-6 md:px-12 lg:px-20" style={{ background: 'var(--frost)' }}>
          <div className="max-w-6xl mx-auto">
            <p className="text-label mb-3">YIELD CALCULATOR</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)',
                fontWeight: 600,
                color: 'var(--granite)',
                marginBottom: '0.5rem',
              }}
            >
              What could your equity earn?
            </h2>
            <p className="text-body mb-10" style={{ fontSize: '0.9375rem', maxWidth: 520 }}>
              Enter your home value and debt level. Adjust the return slider to see
              conservative to full-target projections over 10, 20, and 30 years.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

              {/* ── Inputs ── */}
              <div className="flex flex-col gap-8">

                {/* Home Value */}
                <div>
                  <label className="text-label block mb-2">HOME VALUE</label>
                  <div style={{ position: 'relative' }}>
                    <span style={{
                      position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)',
                      fontFamily: "'DM Mono', monospace", fontSize: 15, color: 'var(--slate)',
                    }}>$</span>
                    <input
                      type="text"
                      value={homeValueInput}
                      onChange={(e) => handleHomeValueChange(e.target.value)}
                      style={{
                        width: '100%',
                        background: 'var(--white)',
                        border: '1.5px solid var(--mist)',
                        borderRadius: 'var(--r-md)',
                        padding: '12px 14px 12px 26px',
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 15,
                        color: 'var(--granite)',
                        outline: 'none',
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--pine-pale)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--mist)'}
                    />
                  </div>
                </div>

                {/* LTV Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-label">EXISTING DEBT (LTV)</label>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: 'var(--timber)' }}>
                      {ltv}% — {fmt(debtBalance)} owed
                    </span>
                  </div>
                  <input
                    type="range" min={0} max={80} step={1}
                    value={ltv}
                    onChange={(e) => setLtv(Number(e.target.value))}
                    className="w-full accent-[#285A44]"
                    style={{ height: 4, cursor: 'pointer' }}
                  />
                  <div className="flex justify-between mt-1">
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: 'var(--slate)' }}>0% — Free & Clear</span>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: 'var(--slate)' }}>80% LTV</span>
                  </div>
                </div>

                {/* Return Rate Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-label">PROJECTED RETURN RATE</label>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: 'var(--gold)' }}>
                      {returnRate}% gross
                    </span>
                  </div>
                  <input
                    type="range" min={4} max={12} step={0.5}
                    value={returnRate}
                    onChange={(e) => setReturnRate(Number(e.target.value))}
                    className="w-full accent-[#B08A26]"
                    style={{ height: 4, cursor: 'pointer' }}
                  />
                  <div className="flex justify-between mt-1">
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: 'var(--slate)' }}>4% — Conservative</span>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: 'var(--slate)' }}>12% — Target</span>
                  </div>
                </div>

                {/* Results Summary */}
                <div
                  className="card"
                  style={{ background: 'var(--white)', borderTop: '3px solid var(--pine)' }}
                >
                  <p className="text-label mb-4">YOUR NUMBERS</p>
                  <div className="flex flex-col gap-3">
                    {[
                      { label: 'Net Equity', value: fmt(netEquity), color: 'var(--granite)' },
                      { label: 'Capital Deployed (70% pledge)', value: fmt(deployed), color: 'var(--granite)' },
                      { label: 'Est. Annual Net Yield (Yr 1)', value: fmt(annualYield), color: 'var(--gold)' },
                      { label: '10-Year Total (Reinvested)', value: fmt(deployed * (Math.pow(1 + netRate, 10) - 1)), color: 'var(--pine)' },
                      { label: '20-Year Total (Reinvested)', value: fmt(deployed * (Math.pow(1 + netRate, 20) - 1)), color: 'var(--pine)' },
                      { label: '30-Year Total (Reinvested)', value: fmt(deployed * (Math.pow(1 + netRate, 30) - 1)), color: 'var(--pine)' },
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between items-center"
                        style={{ borderBottom: '1px solid var(--frost)', paddingBottom: 8 }}>
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'var(--stone)' }}>
                          {row.label}
                        </p>
                        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.9375rem', color: row.color, fontWeight: 500 }}>
                          {row.value}
                        </p>
                      </div>
                    ))}
                    {payoffYear && (
                      <div className="mt-2 p-3 rounded-lg" style={{ background: 'var(--pine-ghost)', border: '1px solid var(--pine-pale)' }}>
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'var(--pine)', fontWeight: 500 }}>
                          🏡 At this rate, your yield covers your full mortgage balance in <span style={{ fontFamily: "'DM Mono', monospace" }}>Year {payoffYear}</span>.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* ── Chart ── */}
              <div className="flex flex-col gap-4">
                <div className="card" style={{ background: 'var(--white)' }}>
                  <p className="text-label mb-6">CUMULATIVE YIELD VS. MORTGAGE BALANCE</p>
                  <ResponsiveContainer width="100%" height={340}>
                    <LineChart data={chartData} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--mist)" />
                      <XAxis
                        dataKey="year"
                        tick={{ fontFamily: "'DM Mono', monospace", fontSize: 11, fill: 'var(--slate)' }}
                        label={{ value: 'Years', position: 'insideBottom', offset: -2, style: { fontFamily: "'DM Mono', monospace", fontSize: 11, fill: 'var(--slate)' } }}
                      />
                      <YAxis
                        tickFormatter={(v) => v >= 1000000 ? `$${(v / 1000000).toFixed(1)}M` : `$${(v / 1000).toFixed(0)}K`}
                        tick={{ fontFamily: "'DM Mono', monospace", fontSize: 11, fill: 'var(--slate)' }}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend
                        wrapperStyle={{ fontFamily: "'DM Mono', monospace", fontSize: 11 }}
                      />
                      {[10, 20, 30].map((yr) => (
                        <ReferenceLine
                          key={yr}
                          x={yr}
                          stroke="var(--mist)"
                          strokeDasharray="4 4"
                          label={{ value: `Yr ${yr}`, position: 'top', style: { fontFamily: "'DM Mono', monospace", fontSize: 10, fill: 'var(--slate)' } }}
                        />
                      ))}
                      {payoffYear && payoffYear <= 30 && (
                        <ReferenceLine
                          x={payoffYear}
                          stroke="var(--pine)"
                          strokeDasharray="4 4"
                          label={{ value: 'Paid Off', position: 'top', style: { fontFamily: "'DM Mono', monospace", fontSize: 10, fill: 'var(--pine)' } }}
                        />
                      )}
                      <Line
                        type="monotone"
                        dataKey="Cumulative Yield (Reinvested)"
                        stroke="#B08A26"
                        strokeWidth={2.5}
                        dot={false}
                        activeDot={{ r: 5, fill: '#B08A26' }}
                      />
                      {debtBalance > 0 && (
                        <Line
                          type="monotone"
                          dataKey="Mortgage Balance"
                          stroke="#285A44"
                          strokeWidth={2}
                          dot={false}
                          strokeDasharray="6 3"
                          activeDot={{ r: 5, fill: '#285A44' }}
                        />
                      )}
                    </LineChart>
                  </ResponsiveContainer>
                  <p className="mt-4" style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: 'var(--slate)', lineHeight: 1.6 }}>
                    Illustrative only. Simple annual projection, not compounded. Net of platform fees.
                    Past performance does not guarantee future results.
                  </p>
                </div>

                {/* Context card */}
                <div className="card" style={{ background: 'var(--gold-ghost)', border: '1px solid var(--gold-pale)' }}>
                  <p className="text-label mb-2" style={{ color: 'var(--gold)' }}>WHAT THIS REPLACES</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'var(--stone)', lineHeight: 1.7 }}>
                    A HELOC at 8% on the same capital costs you that yield in interest every year —
                    and you still carry the debt. DeedRiver pays you instead, with no personal liability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Fee Structure ── */}
        <section className="py-20 px-6 md:px-12 lg:px-20" style={{ background: 'var(--snow)' }}>
          <div className="max-w-6xl mx-auto">
            <p className="text-label mb-3">FEES</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)',
                fontWeight: 600,
                color: 'var(--granite)',
                marginBottom: '0.5rem',
              }}
            >
              Transparent. No surprises.
            </h2>
            <p className="text-body mb-8" style={{ fontSize: '0.9375rem', maxWidth: 520 }}>
              No origination fees. No mortgage insurance. No broker commissions.
              Every fee is disclosed upfront and already deducted in the calculator above.
            </p>

            <div className="card overflow-hidden" style={{ padding: 0 }}>
              <div className="grid grid-cols-3 px-6 py-3"
                style={{ background: 'var(--frost)', borderBottom: '1px solid var(--mist)' }}>
                {['Fee', 'Rate', 'Basis'].map((h) => (
                  <p key={h} className="text-label">{h}</p>
                ))}
              </div>
              {feeRows.map((row, i) => (
                <div key={row.fee} className="grid grid-cols-3 px-6 py-4"
                  style={{
                    borderBottom: i < feeRows.length - 1 ? '1px solid var(--mist)' : 'none',
                    background: i % 2 === 0 ? 'var(--white)' : 'var(--snow)',
                  }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'var(--granite)', fontWeight: 500 }}>
                    {row.fee}
                  </p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.875rem', color: 'var(--timber)', fontWeight: 500 }}>
                    {row.rate}
                  </p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'var(--stone)' }}>
                    {row.basis}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="relative overflow-hidden py-24 px-6 md:px-12 lg:px-20"
          style={{ background: 'var(--obsidian)' }}
        >
          <div className="max-w-6xl mx-auto relative z-10 text-center">
            <p className="text-label mb-4" style={{ color: 'var(--slate)' }}>READY TO START</p>
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
              Institutional returns. Your equity. Your deed.
            </h2>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '1rem',
              color: 'var(--slate)',
              marginBottom: '2.5rem',
              lineHeight: 1.7,
            }}>
              The same vehicle that required $5M to access is now available through the equity
              you already own.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/how-it-works" className="btn-primary" style={{ padding: '13px 28px', fontSize: 15 }}>
                See How It Works
              </Link>
              <Link
                href="/regulation"
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
                The Wyoming Advantage →
              </Link>
            </div>
            <p className="mt-8" style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: 'var(--slate)', lineHeight: 1.7 }}>
              Securities offered under Reg D 506(c). For accredited investors only.
              Past performance does not guarantee future results. This is not investment advice.
            </p>
          </div>
          <MountainSVG variant="dark" />
        </section>

      </main>
    </>
  );
}
