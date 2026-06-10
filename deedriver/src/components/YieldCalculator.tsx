'use client';

import { useState, useMemo } from 'react';

// ─── Helpers ────────────────────────────────────────────────────────────────

function fmtShort(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${Math.round(n / 1_000)}K`;
  return `$${Math.round(n).toLocaleString()}`;
}
function fmtFull(n: number): string {
  return '$' + Math.round(n).toLocaleString();
}
function fmtInput(n: number): string {
  return Math.round(n).toLocaleString();
}

// ─── SVG Chart ──────────────────────────────────────────────────────────────

const PAD = { top: 24, right: 24, bottom: 52, left: 80 };
const W = 640;
const H = 300;
const IW = W - PAD.left - PAD.right;
const IH = H - PAD.top - PAD.bottom;

interface ChartProps {
  capitalDeployed: number;
  netRate: number;   // net rate as a percentage e.g. 8.5
  existingDebt: number;
}

function YieldChart({ capitalDeployed, netRate, existingDebt }: ChartProps) {
  const YEARS = 30;
  const r = netRate / 100;

  // Compounded cumulative yield: capital × ((1+r)^n − 1)
  const cumYield = (yr: number) =>
    capitalDeployed > 0 && r > 0 ? capitalDeployed * (Math.pow(1 + r, yr) - 1) : 0;

  const points = Array.from({ length: YEARS + 1 }, (_, i) => ({
    year: i,
    value: cumYield(i),
  }));

  const maxVal = Math.max(
    cumYield(YEARS),
    existingDebt > 0 ? existingDebt * 1.1 : 0,
  ) * 1.1;

  const xS = (yr: number) => PAD.left + (yr / YEARS) * IW;
  const yS = (val: number) => PAD.top + IH - (Math.min(val, maxVal) / maxVal) * IH;

  const linePath = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${xS(p.year).toFixed(1)} ${yS(p.value).toFixed(1)}`)
    .join(' ');

  const areaPath = `${linePath} L ${xS(YEARS)} ${PAD.top + IH} L ${xS(0)} ${PAD.top + IH} Z`;

  const debtY = existingDebt > 0 && existingDebt < maxVal ? yS(existingDebt) : null;

  // Logarithmic debt payoff: n = log(1 + debt/capital) / log(1+r)
  const debtPayoffYear =
    existingDebt > 0 && capitalDeployed > 0 && r > 0
      ? Math.ceil(Math.log(1 + existingDebt / capitalDeployed) / Math.log(1 + r))
      : null;
  const showDebtLine = debtY !== null;

  const milestones = [10, 20, 30];
  const yTicks = 5;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }}
    >
      {/* Grid lines */}
      {Array.from({ length: yTicks + 1 }, (_, i) => {
        const val = (maxVal / yTicks) * i;
        const cy = yS(val);
        return (
          <g key={i}>
            <line
              x1={PAD.left} y1={cy} x2={PAD.left + IW} y2={cy}
              stroke="#E4E9ED" strokeWidth={i === 0 ? 1.5 : 1}
            />
            <text
              x={PAD.left - 8} y={cy + 4}
              textAnchor="end"
              style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, fill: '#8A98A5' }}
            >
              {fmtShort(val)}
            </text>
          </g>
        );
      })}

      {/* X ticks */}
      {[0, 5, 10, 15, 20, 25, 30].map((yr) => (
        <g key={yr}>
          <line
            x1={xS(yr)} y1={PAD.top + IH} x2={xS(yr)} y2={PAD.top + IH + 5}
            stroke="#CDD4DA" strokeWidth={1}
          />
          <text
            x={xS(yr)} y={PAD.top + IH + 18}
            textAnchor="middle"
            style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, fill: '#8A98A5' }}
          >
            {yr}yr
          </text>
        </g>
      ))}

      {/* Axes */}
      <line x1={PAD.left} y1={PAD.top} x2={PAD.left} y2={PAD.top + IH} stroke="#CDD4DA" strokeWidth={1.5} />
      <line x1={PAD.left} y1={PAD.top + IH} x2={PAD.left + IW} y2={PAD.top + IH} stroke="#CDD4DA" strokeWidth={1.5} />

      {/* Area fill */}
      <path d={areaPath} fill="#285A44" opacity={0.06} />

      {/* Yield line */}
      <path d={linePath} fill="none" stroke="#285A44" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />

      {/* Debt line */}
      {showDebtLine && debtY !== null && (
        <>
          <line
            x1={PAD.left} y1={debtY} x2={PAD.left + IW} y2={debtY}
            stroke="#B08A26" strokeWidth={1.5} strokeDasharray="6 4" opacity={0.7}
          />
          <text
            x={PAD.left + IW - 4} y={debtY - 6}
            textAnchor="end"
            style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, fill: '#B08A26' }}
          >
            Existing Debt
          </text>
        </>
      )}

      {/* Debt payoff intersection dot */}
      {debtPayoffYear !== null && debtPayoffYear <= YEARS && debtY !== null && (
        <>
          <circle
            cx={xS(debtPayoffYear)} cy={debtY}
            r={5} fill="#285A44" stroke="white" strokeWidth={2}
          />
          <text
            x={xS(debtPayoffYear)} y={debtY - 12}
            textAnchor="middle"
            style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, fill: '#285A44', fontWeight: 600 }}
          >
            Yr {debtPayoffYear}
          </text>
        </>
      )}

      {/* Milestone dots at 10/20/30 */}
      {milestones.map((yr) => {
        const val = cumYield(yr);
        return (
          <g key={yr}>
            <circle
              cx={xS(yr)} cy={yS(val)}
              r={4} fill="#285A44" stroke="white" strokeWidth={2}
            />
          </g>
        );
      })}
    </svg>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────

export default function YieldCalculator() {
  const [homeValue, setHomeValue] = useState(800_000);
  const [homeInput, setHomeInput] = useState('800,000');
  const [ltvPct, setLtvPct] = useState(40);
  const [returnRate, setReturnRate] = useState(8);

  const calc = useMemo(() => {
    const existingDebt = homeValue * (ltvPct / 100);
    const netEquity = homeValue - existingDebt;
    const capitalDeployed = netEquity * 0.70;

    const grossReturn = capitalDeployed * (returnRate / 100);
    const managementFee = capitalDeployed * 0.0125;
    const hurdle = capitalDeployed * 0.08;
    const performanceFee = grossReturn > hurdle ? (grossReturn - hurdle) * 0.10 : 0;
    const netAnnualYield = Math.max(0, grossReturn - managementFee - performanceFee);
    const netRate = capitalDeployed > 0 ? (netAnnualYield / capitalDeployed) * 100 : 0;
    const r = netRate / 100;

    // Compounded cumulative yield: capital × ((1+r)^n − 1)
    const cumYield = (yr: number) =>
      capitalDeployed > 0 && r > 0 ? capitalDeployed * (Math.pow(1 + r, yr) - 1) : 0;

    // Logarithmic debt payoff year with compounding
    const debtPayoffYear =
      existingDebt > 0 && capitalDeployed > 0 && r > 0
        ? Math.ceil(Math.log(1 + existingDebt / capitalDeployed) / Math.log(1 + r))
        : null;

    return {
      existingDebt,
      netEquity,
      capitalDeployed,
      grossReturn,
      managementFee,
      performanceFee,
      netAnnualYield,
      netRate,
      debtPayoffYear,
      y10: cumYield(10),
      y20: cumYield(20),
      y30: cumYield(30),
    };
  }, [homeValue, ltvPct, returnRate]);

  function handleHomeInput(raw: string) {
    const digits = raw.replace(/[^0-9]/g, '');
    const num = parseInt(digits || '0', 10);
    setHomeInput(num.toLocaleString());
    setHomeValue(num);
  }

  const sliderTrack = (val: number, min: number, max: number) =>
    `${((val - min) / (max - min)) * 100}%`;

  return (
    <div>
      {/* Input panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">

        {/* Left: inputs */}
        <div className="flex flex-col gap-6">

          {/* Home Value */}
          <div>
            <label className="text-label block mb-2">Home Value</label>
            <div style={{ position: 'relative' }}>
              <span style={{
                position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)',
                fontFamily: "'DM Mono', monospace", fontSize: 15, color: 'var(--slate)',
              }}>$</span>
              <input
                type="text"
                inputMode="numeric"
                value={homeInput}
                onChange={(e) => handleHomeInput(e.target.value)}
                onBlur={() => setHomeInput(fmtInput(homeValue))}
                style={{
                  background: 'var(--white)',
                  border: '1.5px solid var(--mist)',
                  borderRadius: 'var(--r-md)',
                  padding: '11px 14px 11px 28px',
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 18,
                  color: 'var(--granite)',
                  width: '100%',
                  outline: 'none',
                }}
                onFocus={(e) => e.currentTarget.select()}
              />
            </div>
          </div>

          {/* LTV Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-label">Existing Mortgage (LTV)</label>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: 'var(--timber)', fontWeight: 500 }}>
                {ltvPct}%
              </span>
            </div>
            <input
              type="range" min={0} max={80} step={5} value={ltvPct}
              onChange={(e) => setLtvPct(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--timber)', cursor: 'pointer' }}
            />
            <div className="flex justify-between mt-2">
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: 'var(--slate)' }}>
                Debt: {fmtShort(calc.existingDebt)}
              </span>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: 'var(--pine)' }}>
                Net Equity: {fmtShort(calc.netEquity)}
              </span>
            </div>
          </div>

          {/* Return Rate Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-label">Gross Fund Return Target</label>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: 'var(--gold)', fontWeight: 500 }}>
                {returnRate}%
              </span>
            </div>
            <input
              type="range" min={4} max={8} step={0.5} value={returnRate}
              onChange={(e) => setReturnRate(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--gold)', cursor: 'pointer' }}
            />
            <div className="flex justify-between mt-2">
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: 'var(--slate)' }}>4% Low</span>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: 'var(--slate)' }}>8% Target</span>
            </div>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: 'var(--slate)', marginTop: 6, lineHeight: 1.5 }}>
              Illustrative scenario modelling only. Returns are variable and not guaranteed.
            </p>
          </div>
        </div>

        {/* Right: key outputs */}
        <div className="flex flex-col gap-4">
          <div style={{ background: 'var(--frost)', borderRadius: 'var(--r-lg)', padding: '1.25rem', border: '1px solid var(--mist)' }}>
            <p className="text-label mb-4">Your Numbers</p>

            {[
              { label: 'Net Equity', value: fmtFull(calc.netEquity), color: 'var(--granite)' },
              { label: 'Capital Deployed (70% pledge)', value: fmtFull(calc.capitalDeployed), color: 'var(--granite)' },
              { label: 'Gross Fund Return', value: fmtFull(calc.grossReturn), color: 'var(--stone)' },
              { label: 'Platform Fees', value: `−${fmtFull(calc.managementFee + calc.performanceFee)}`, color: 'var(--slate)' },
            ].map((row) => (
              <div key={row.label} className="flex justify-between items-center py-2" style={{ borderBottom: '1px solid var(--mist)' }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8125rem', color: 'var(--stone)' }}>{row.label}</span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.875rem', color: row.color }}>{row.value}</span>
              </div>
            ))}

            {/* Net yield — hero number */}
            <div className="flex justify-between items-end pt-4">
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', fontWeight: 500, color: 'var(--granite)' }}>
                Net Annual Yield
              </span>
              <div className="text-right">
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '1.75rem', fontWeight: 500, color: 'var(--gold)', lineHeight: 1 }}>
                  {fmtFull(calc.netAnnualYield)}
                </div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: 'var(--gold-lt)', marginTop: 2 }}>
                  {calc.netRate.toFixed(2)}% net rate on deployed capital
                </div>
              </div>
            </div>
          </div>

          {/* Debt payoff callout */}
          {calc.existingDebt > 0 && calc.debtPayoffYear !== null && (
            <div style={{ background: 'var(--pine-ghost)', border: '1px solid var(--pine-pale)', borderRadius: 'var(--r-md)', padding: '1rem' }}>
              <p className="text-label mb-1" style={{ color: 'var(--pine)' }}>Debt Payoff Milestone</p>
              {calc.debtPayoffYear <= 30 ? (
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'var(--pine)', lineHeight: 1.6 }}>
                  At this return rate, with yield reinvested annually, your compounded returns could cover your{' '}
                  <span style={{ fontFamily: "'DM Mono', monospace" }}>{fmtFull(calc.existingDebt)}</span>{' '}
                  mortgage balance in{' '}
                  <span style={{ fontFamily: "'DM Mono', monospace", fontWeight: 500 }}>Year {calc.debtPayoffYear}</span>.
                </p>
              ) : (
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'var(--pine)', lineHeight: 1.6 }}>
                  Cumulative yield covers your mortgage beyond the 30-year horizon at this rate.
                  Adjust the return slider upward to see earlier payoff scenarios.
                </p>
              )}
            </div>
          )}

          {calc.existingDebt === 0 && (
            <div style={{ background: 'var(--frost)', border: '1px solid var(--mist)', borderRadius: 'var(--r-md)', padding: '1rem' }}>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: 'var(--slate)', lineHeight: 1.6 }}>
                No existing debt — 100% of yield accrues to you. Your 30-year cumulative projection is{' '}
                <span style={{ color: 'var(--gold)' }}>{fmtFull(calc.y30)}</span>.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Chart */}
      <div style={{ background: 'var(--white)', border: '1px solid var(--mist)', borderRadius: 'var(--r-lg)', padding: '1.5rem' }}>
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9375rem', fontWeight: 500, color: 'var(--granite)' }}>
              Cumulative Yield — 30-Year Projection
            </p>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: 'var(--slate)', marginTop: 2 }}>
              Yield reinvested annually · 70% pledge rate · fees applied
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div style={{ width: 20, height: 2.5, background: 'var(--pine)', borderRadius: 2 }} />
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: 'var(--slate)' }}>Cumulative Yield</span>
            </div>
            {calc.existingDebt > 0 && (
              <div className="flex items-center gap-2">
                <div style={{ width: 20, height: 0, border: '1.5px dashed var(--gold)', borderRadius: 2 }} />
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: 'var(--slate)' }}>Existing Debt</span>
              </div>
            )}
          </div>
        </div>

        <YieldChart capitalDeployed={calc.capitalDeployed} netRate={calc.netRate} existingDebt={calc.existingDebt} />
      </div>

      {/* Milestone cards */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {[
          { years: 10, value: calc.y10, label: '10-Year Total' },
          { years: 20, value: calc.y20, label: '20-Year Total' },
          { years: 30, value: calc.y30, label: '30-Year Total' },
        ].map((m) => (
          <div key={m.years} className="stat-card text-center">
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', fontWeight: 500, color: 'var(--gold)' }}>
              {fmtShort(m.value)}
            </div>
            <div className="stat-label mt-1">{m.label}</div>
          </div>
        ))}
      </div>

      <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: 'var(--slate)', marginTop: 16, lineHeight: 1.65 }}>
        This is not investment advice. Estimates are illustrative and based on target fund return rates.
        Past performance does not guarantee future results. Currently available to accredited investors in Wyoming.
      </p>
    </div>
  );
}
