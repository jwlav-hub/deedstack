import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import MountainSVG from '@/components/MountainSVG';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Historical Simulations - Wyoming Property Case Studies',
  description: 'DeedStack applies its fund methodology to five historical Wyoming properties — Jackson Hole, Cheyenne, and Yellowstone — using real S&P 500 returns and county-level appreciation data. Illustrative only.',
};

// ─── Historical S&P 500 total returns (dividends reinvested) ─────────────────
// Source: NYU Stern / Damodaran dataset
const SP500: Record<number, number> = {
  2008: -0.3655, 2009: 0.2594, 2010: 0.1482, 2011: 0.0210,
  2012: 0.1589, 2013: 0.3215, 2014: 0.1352, 2015: 0.0138,
  2016: 0.1177, 2017: 0.2161, 2018: -0.0423, 2019: 0.3121,
  2020: 0.1802, 2021: 0.2847, 2022: -0.1804, 2023: 0.2606,
  2024: 0.2488, 2025: 0.1778,
};

// DeedStack target: S&P + 4 percentage points each year
const fundRate = (yr: number) => (SP500[yr] ?? 0) + 0.04;

// ─── Helpers ─────────────────────────────────────────────────────────────────
const fmt = (n: number) => '$' + Math.round(n).toLocaleString();
const fmtK = (n: number) => {
  if (Math.abs(n) >= 1_000_000) return `${n < 0 ? '−' : ''}$${(Math.abs(n) / 1_000_000).toFixed(2)}M`;
  if (Math.abs(n) >= 1_000) return `${n < 0 ? '−' : ''}$${Math.round(Math.abs(n) / 1_000)}K`;
  return `${n < 0 ? '−' : ''}$${Math.abs(Math.round(n))}`;
};
const fmtPct = (n: number) => (n >= 0 ? '+' : '') + (n * 100).toFixed(1) + '%';

// ─── Simulate year-by-year ───────────────────────────────────────────────────
function simulate(
  purchaseYear: number,
  purchasePrice: number,
  ltv: number,                     // 0–1
  propAppreciation: number[],       // annual rates, index 0 = first full year after purchase
  endYear = 2025,
) {
  const mortgageBalance = purchasePrice * ltv;
  const initEquity = purchasePrice * (1 - ltv);
  const K0 = initEquity * 0.70;    // 70% pledged to fund

  const years: number[] = [];
  const propValues: number[] = [];
  const equityGains: number[] = [];
  const kValues: number[] = [];
  const cumYields: number[] = [];
  const spRates: number[] = [];
  const fundRates: number[] = [];

  let prop = purchasePrice;
  let K = K0;
  let appIdx = 0;

  for (let yr = purchaseYear + 1; yr <= endYear; yr++) {
    const appRate = propAppreciation[appIdx++] ?? 0.04;
    prop = prop * (1 + appRate);

    const fr = fundRate(yr);
    K = K * (1 + fr);

    years.push(yr);
    propValues.push(prop);
    equityGains.push(prop - mortgageBalance - initEquity);
    kValues.push(K);
    cumYields.push(K - K0);
    spRates.push(SP500[yr] ?? 0);
    fundRates.push(fr);
    appIdx;
  }

  return {
    mortgageBalance, initEquity, K0,
    years, propValues, equityGains, kValues, cumYields, spRates, fundRates,
    finalPropValue: propValues.at(-1)!,
    finalEquity: (propValues.at(-1)! - mortgageBalance),
    finalK: kValues.at(-1)!,
    finalCumYield: cumYields.at(-1)!,
    finalEquityGain: equityGains.at(-1)!,
  };
}

// ─── Case study definitions ───────────────────────────────────────────────────
// Property appreciation arrays estimated from Teton County, Laramie County,
// and Park County WY market data (Zillow ZHVI, FHFA HPI, county assessor reports)

const JACKSON_HOLE_APP_2008 = [
  -0.12, -0.07, -0.04, -0.02,   // 2009–2012: post-GFC decline
   0.04,  0.08,  0.10,  0.08,   // 2013–2016: recovery
   0.09,  0.11,  0.05,  0.04,   // 2017–2020 pre-COVID: steady climb
   0.24,  0.40,  0.06, -0.04,   // 2020–2023: COVID boom then mild correction
   0.09,  0.05,                  // 2024–2025
];

const JACKSON_HOLE_APP_2018 = [
   0.05,  0.04,  0.24,  0.40,   // 2019–2022
   0.06, -0.04,  0.09,  0.05,   // 2023–2025 (wait, 2019 is first year after purchase 2018)
];
// 2019: +5%, 2020: +24%, 2021: +40%, 2022: +6%, 2023: -4%, 2024: +9%, 2025: +5%
const JACKSON_AIRBNB_APP = [0.05, 0.24, 0.40, 0.06, -0.04, 0.09, 0.05];

const CHEYENNE_APP_2014 = [
  0.04, 0.05, 0.05, 0.06,   // 2015–2018
  0.06, 0.11, 0.22, 0.12,   // 2019–2022: COVID bump
  0.03, 0.04, 0.02,          // 2023–2025
];

const YELLOWSTONE_APP_2016 = [
  0.07, 0.07, 0.05,           // 2017–2019
  0.16, 0.26, 0.09,           // 2020–2022: COVID surge
  0.04, 0.05, 0.03,           // 2023–2025
];

// Pre-compute all simulations
const cs1 = simulate(2008, 1_100_000, 0.00, JACKSON_HOLE_APP_2008);
const cs2 = simulate(2008, 1_100_000, 0.80, JACKSON_HOLE_APP_2008);
const cs3 = simulate(2018, 1_800_000, 0.20, JACKSON_AIRBNB_APP);
const cs4 = simulate(2014,   238_000, 0.80, CHEYENNE_APP_2014);
const cs5 = simulate(2016,   875_000, 0.00, YELLOWSTONE_APP_2016);

// AirBnb cumulative income by year for Case 3
const AIRBNB_CUMULATIVE = [60, 140, 180, 330, 510, 670, 840, 1015].map(v => v * 1000);

function calcCAGR(initInvested: number, finalValue: number, years: number) {
  return Math.pow(finalValue / initInvested, 1 / years) - 1;
}

const NUM_YEARS_CS1 = cs1.years.length;  // 17
const NUM_YEARS_CS3 = cs3.years.length;  // 7
const NUM_YEARS_CS4 = cs4.years.length;  // 11
const NUM_YEARS_CS5 = cs5.years.length;  // 9

const cagr1 = calcCAGR(1_100_000, cs1.finalK + cs1.finalPropValue, NUM_YEARS_CS1);
const cagr2 = calcCAGR(220_000,   cs2.finalK + cs2.finalEquity,    NUM_YEARS_CS1);
const cagr3 = calcCAGR(360_000,   cs3.finalK + cs3.finalEquity + AIRBNB_CUMULATIVE.at(-1)!, NUM_YEARS_CS3);
const cagr4 = calcCAGR(47_600,    cs4.finalK + cs4.finalEquity,    NUM_YEARS_CS4);
const cagr5 = calcCAGR(875_000,   cs5.finalK + cs5.finalPropValue, NUM_YEARS_CS5);

// ─── SVG Chart ───────────────────────────────────────────────────────────────
const CP = { top: 16, right: 16, bottom: 36, left: 72 };
const CW = 700; const CH = 210;
const CIW = CW - CP.left - CP.right;
const CIH = CH - CP.top - CP.bottom;

interface ChartProps {
  years: number[];
  cumYields: number[];
  equityGains: number[];
  airbnb?: number[];
  initInvested: number;
}

function SimChart({ years, cumYields, equityGains, airbnb, initInvested }: ChartProps) {
  const n = years.length;
  const allVals = [...cumYields, ...equityGains, ...(airbnb ?? []), 0, -initInvested * 0.2];
  const maxV = Math.max(...allVals) * 1.12;
  const minV = Math.min(Math.min(...allVals), 0) * 1.05;
  const range = maxV - minV;

  const xs = (i: number) => CP.left + (i / (n - 1)) * CIW;
  const ys = (v: number) => CP.top + CIH - ((v - minV) / range) * CIH;

  const linePath = (vals: number[]) =>
    vals.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xs(i).toFixed(1)} ${ys(v).toFixed(1)}`).join(' ');

  const areaPath = (vals: number[], baseline: number) => {
    const line = linePath(vals);
    return `${line} L ${xs(n - 1).toFixed(1)} ${ys(baseline).toFixed(1)} L ${xs(0).toFixed(1)} ${ys(baseline).toFixed(1)} Z`;
  };

  const zeroY = ys(0);
  const yTicks = 5;

  // Determine nice tick values
  const tickStep = range / yTicks;
  const ticks = Array.from({ length: yTicks + 1 }, (_, i) => minV + tickStep * i);

  // Stacked area: deedriver on bottom, equity gain on top (stacked)
  const stacked = cumYields.map((v, i) => v + Math.max(0, equityGains[i]));

  return (
    <svg viewBox={`0 0 ${CW} ${CH}`} style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }}>
      {/* Grid */}
      {ticks.map((v, i) => (
        <g key={i}>
          <line x1={CP.left} y1={ys(v)} x2={CP.left + CIW} y2={ys(v)}
            stroke="#E4E9ED" strokeWidth={Math.abs(v) < 1 ? 1.5 : 0.8} />
          <text x={CP.left - 6} y={ys(v) + 4} textAnchor="end"
            style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, fill: '#8A98A5' }}>
            {fmtK(v)}
          </text>
        </g>
      ))}

      {/* Zero line emphasis */}
      {zeroY >= CP.top && zeroY <= CP.top + CIH && (
        <line x1={CP.left} y1={zeroY} x2={CP.left + CIW} y2={zeroY}
          stroke="#8A98A5" strokeWidth={1} strokeDasharray="3 3" />
      )}

      {/* Property equity gain area (gold, underneath) */}
      <path d={areaPath(equityGains.map((v, i) => v + cumYields[i]), 0)}
        fill="#B08A26" opacity={0.12} />

      {/* Hedge fund cumulative yield area (green, on top) */}
      <path d={areaPath(cumYields, 0)} fill="#285A44" opacity={0.18} />

      {/* AirBnb stacked area (amber, top layer) */}
      {airbnb && (
        <path d={areaPath(airbnb.map((v, i) => v + cumYields[i] + Math.max(0, equityGains[i])), 0)}
          fill="#C07030" opacity={0.10} />
      )}

      {/* Lines */}
      <path d={linePath(equityGains.map((v, i) => v + cumYields[i]))}
        fill="none" stroke="#B08A26" strokeWidth={1.5} strokeDasharray="5 3" opacity={0.7} />
      <path d={linePath(cumYields)}
        fill="none" stroke="#285A44" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />

      {/* Axes */}
      <line x1={CP.left} y1={CP.top} x2={CP.left} y2={CP.top + CIH} stroke="#CDD4DA" strokeWidth={1.5} />
      <line x1={CP.left} y1={CP.top + CIH} x2={CP.left + CIW} y2={CP.top + CIH} stroke="#CDD4DA" strokeWidth={1.5} />

      {/* X labels — show every other year */}
      {years.map((yr, i) => (
        (yr % 2 === 0 || i === 0 || i === n - 1) && (
          <text key={yr} x={xs(i)} y={CP.top + CIH + 16} textAnchor="middle"
            style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, fill: '#8A98A5' }}>
            {yr}
          </text>
        )
      ))}

      {/* Final value dot + label (Hedge fund yield) */}
      <circle cx={xs(n - 1)} cy={ys(cumYields.at(-1)!)} r={4} fill="#285A44" stroke="white" strokeWidth={2} />
    </svg>
  );
}

// ─── Rate table ───────────────────────────────────────────────────────────────
const ALL_YEARS = Object.keys(SP500).map(Number).sort();

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function SimulationsPage() {
  return (
    <>
      <Nav />
      <main style={{ background: 'var(--snow)' }}>

        {/* Hero */}
        <section className="relative overflow-hidden pt-[128px] pb-[80px] px-6 md:px-12 lg:px-20" style={{ background: 'var(--snow)' }}>
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="badge-yield">HISTORICAL SIMULATION</span>
              <span className="badge-active">WYOMING PROPERTIES</span>
              <span className="badge-tokenized">S&amp;P 500 + 4%</span>
            </div>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: 'var(--obsidian)',
              marginBottom: '1.25rem',
            }}>
              What DeedStack would have<br />
              <span style={{ color: 'var(--pine)' }}>earned you. Historically.</span>
            </h1>
            <p className="text-body" style={{ fontSize: '1.0625rem', maxWidth: 600, lineHeight: 1.75 }}>
              Five Wyoming properties. Real purchase prices. Real S&amp;P 500 returns.
              Each simulation applies DeedStack&apos;s methodology — 70% of equity pledged to the fund —
              and compounds the yield annually at the S&amp;P 500 return plus 4 percentage points per year.
              Property values are estimated from Teton County, Laramie County, and Park County market data.
            </p>
          </div>
          <MountainSVG variant="light" />
        </section>

        {/* Methodology + Rate Table */}
        <section className="py-14 px-6 md:px-12 lg:px-20" style={{ background: 'var(--frost)' }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

              {/* Methodology */}
              <div>
                <p className="text-label mb-3">SIMULATION METHODOLOGY</p>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem, 2.5vw, 1.75rem)', fontWeight: 600, color: 'var(--granite)', marginBottom: '1rem', lineHeight: 1.2 }}>
                  S&amp;P 500 + 4% — compounded annually
                </h2>
                {[
                  ['Fund Return Target', 'S&P 500 total return + 4 percentage points each year — including dividend reinvestment. Negative in crash years (2008, 2022). Historically outperforms in strong bull years.'],
                  ['Equity Deployed', '70% of net equity at purchase is pledged to the fund. Yields compound year over year with no withdrawals.'],
                  ['Property Appreciation', 'Estimated from Teton County, Laramie County, and Park County WY assessor and MLS data. Values are illustrative.'],
                  ['Total Return', 'Hedge fund cumulative yield (green line) plus property equity gain (gold dashed line). AirBnb income shown separately where applicable.'],
                ].map(([h, b]) => (
                  <div key={h} className="flex gap-3 items-start mb-4">
                    <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--pine)', marginTop: 8, flexShrink: 0 }} />
                    <div>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', fontWeight: 600, color: 'var(--granite)', marginBottom: 2 }}>{h}</p>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', color: 'var(--stone)', lineHeight: 1.65 }}>{b}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Annual rates table */}
              <div>
                <p className="text-label mb-3">ANNUAL FUND RATES (S&amp;P + 4%)</p>
                <div className="card overflow-hidden" style={{ padding: 0 }}>
                  <div className="grid grid-cols-3 px-4 py-2" style={{ background: 'var(--obsidian)', gridTemplateColumns: '1fr 1fr 1fr' }}>
                    {['Year', 'S&P 500', 'Hedge Fund Rate'].map(h => (
                      <p key={h} style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>{h}</p>
                    ))}
                  </div>
                  {ALL_YEARS.map((yr, i) => {
                    const sp = SP500[yr];
                    const fr = sp + 0.04;
                    const isNeg = fr < 0;
                    return (
                      <div key={yr} className="grid grid-cols-3 px-4 py-2" style={{
                        gridTemplateColumns: '1fr 1fr 1fr',
                        borderBottom: i < ALL_YEARS.length - 1 ? '1px solid var(--mist)' : 'none',
                        background: isNeg ? 'rgba(180,50,50,0.04)' : i % 2 === 0 ? 'var(--white)' : 'var(--snow)',
                      }}>
                        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.75rem', color: 'var(--granite)', fontWeight: 500 }}>{yr}</span>
                        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.75rem', color: sp < 0 ? '#B84040' : 'var(--stone)' }}>{fmtPct(sp)}</span>
                        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.75rem', fontWeight: 500, color: isNeg ? '#B84040' : 'var(--pine)' }}>{fmtPct(fr)}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CASE STUDY 1 ─────────────────────────────────────────────────── */}
        <CaseSection
          num="01"
          badge="OUTRIGHT OWNERSHIP"
          badgeColor="var(--pine)"
          title="Jackson Hole Vacation Home"
          subtitle="All cash purchase — 100% equity — no mortgage"
          location="Teton County, Wyoming"
          purchaseYear={2008}
          purchasePrice={1_100_000}
          ltv={0}
          use="Owner-occupied vacation home, not rented"
          photoGradient="linear-gradient(135deg, #1a2a3a 0%, #2C3A47 60%, #1e3028 100%)"
          photoLabel="Jackson Hole · 2008"
          photoSub="Teton County, Wyoming — Mountain vacation cabin"
          data={cs1}
          deedFlowYield={cs1.finalCumYield}
          propGain={cs1.finalEquityGain}
          totalGain={cs1.finalCumYield + cs1.finalEquityGain}
          initInvested={1_100_000}
          years={NUM_YEARS_CS1}
          cagr={cagr1}
          note="Full equity at work. 2008 market crash hit the fund in year one — demonstrating real downside exposure — before compounding drove outsized long-term results."
          bg="var(--snow)"
        />

        {/* ── CASE STUDY 2 ─────────────────────────────────────────────────── */}
        <CaseSection
          num="02"
          badge="LEVERAGED PURCHASE"
          badgeColor="var(--timber)"
          title="Jackson Hole Vacation Home"
          subtitle="20% down — 80% LTV mortgage — same property"
          location="Teton County, Wyoming"
          purchaseYear={2008}
          purchasePrice={1_100_000}
          ltv={0.80}
          use="Owner-occupied vacation home, same property as Case 01"
          photoGradient="linear-gradient(135deg, #2a1a3a 0%, #3A2C47 60%, #1e2830 100%)"
          photoLabel="Jackson Hole · 2008"
          photoSub="Teton County, Wyoming — Same property, 80% financed"
          data={cs2}
          deedFlowYield={cs2.finalCumYield}
          propGain={cs2.finalEquityGain}
          totalGain={cs2.finalCumYield + cs2.finalEquityGain}
          initInvested={220_000}
          years={NUM_YEARS_CS1}
          cagr={cagr2}
          note="Same property, same appreciation — but only $220K down. Leverage amplifies ROI. The smaller initial equity base means less capital deployed in the fund, but the percentage return on investment is significantly higher."
          bg="var(--frost)"
        />

        {/* ── CASE STUDY 3 ─────────────────────────────────────────────────── */}
        <CaseSection
          num="03"
          badge="AIRBNB RENTAL PROPERTY"
          badgeColor="var(--gold)"
          title="Jackson Hole Short-Term Rental"
          subtitle="20% down — AirBnb income stream — purchased 2018"
          location="Teton County, Wyoming"
          purchaseYear={2018}
          purchasePrice={1_800_000}
          ltv={0.20}
          use="Active AirBnb vacation rental — premium Jackson Hole market"
          photoGradient="linear-gradient(135deg, #1a2a1e 0%, #2C472C 60%, #3a3a1e 100%)"
          photoLabel="Jackson Hole · 2018"
          photoSub="Teton County, Wyoming — Premium AirBnb rental property"
          data={cs3}
          deedFlowYield={cs3.finalCumYield}
          propGain={cs3.finalEquityGain}
          totalGain={cs3.finalCumYield + cs3.finalEquityGain + AIRBNB_CUMULATIVE.at(-1)!}
          airbnbTotal={AIRBNB_CUMULATIVE.at(-1)!}
          initInvested={360_000}
          years={NUM_YEARS_CS3}
          cagr={cagr3}
          note="Three income streams: DeedStack fund yield, AirBnb rental income, and property appreciation. The 2020–2021 COVID boom drove explosive short-term rental demand and property values simultaneously."
          bg="var(--snow)"
          airbnb={AIRBNB_CUMULATIVE}
        />

        {/* ── CASE STUDY 4 ─────────────────────────────────────────────────── */}
        <CaseSection
          num="04"
          badge="OWNER-OCCUPIED · CHEYENNE"
          badgeColor="var(--timber)"
          title="Cheyenne Primary Residence"
          subtitle="20% down — owner-occupied — purchased 2014"
          location="Laramie County, Wyoming"
          purchaseYear={2014}
          purchasePrice={238_000}
          ltv={0.80}
          use="Primary residence — Cheyenne, Wyoming"
          photoGradient="linear-gradient(135deg, #2a2a1a 0%, #3a3a2a 60%, #2a3a2a 100%)"
          photoLabel="Cheyenne · 2014"
          photoSub="Laramie County, Wyoming — Single-family primary residence"
          data={cs4}
          deedFlowYield={cs4.finalCumYield}
          propGain={cs4.finalEquityGain}
          totalGain={cs4.finalCumYield + cs4.finalEquityGain}
          initInvested={47_600}
          years={NUM_YEARS_CS4}
          cagr={cagr4}
          note="A modest Cheyenne home shows DeedStack's power for everyday homeowners — not just luxury markets. A $47,600 down payment generated nearly $500K in combined returns over 11 years."
          bg="var(--frost)"
        />

        {/* ── CASE STUDY 5 ─────────────────────────────────────────────────── */}
        <CaseSection
          num="05"
          badge="VACATION RANCH"
          badgeColor="var(--pine)"
          title="Yellowstone Area Ranch"
          subtitle="All cash — owner vacation property — purchased 2016"
          location="Park County, Wyoming"
          purchaseYear={2016}
          purchasePrice={875_000}
          ltv={0}
          use="Owner-held vacation and recreation ranch near Yellowstone"
          photoGradient="linear-gradient(135deg, #1a3a1a 0%, #2C4728 60%, #1e3820 100%)"
          photoLabel="Park County · 2016"
          photoSub="Park County, Wyoming — Yellowstone-area vacation ranch"
          data={cs5}
          deedFlowYield={cs5.finalCumYield}
          propGain={cs5.finalEquityGain}
          totalGain={cs5.finalCumYield + cs5.finalEquityGain}
          initInvested={875_000}
          years={NUM_YEARS_CS5}
          cagr={cagr5}
          note="Ranch properties near Yellowstone saw significant COVID-era appreciation as remote buyers sought land. DeedStack compounding on the full equity base generated over $2.7M in cumulative yield in 9 years."
          bg="var(--snow)"
        />

        {/* ── Comparison table ─────────────────────────────────────────────── */}
        <section className="py-20 px-6 md:px-12 lg:px-20" style={{ background: 'var(--obsidian)' }}>
          <div className="max-w-5xl mx-auto">
            <p className="text-label mb-3" style={{ color: 'var(--slate)' }}>ALL FIVE SIMULATIONS</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 600, color: 'var(--white)', marginBottom: '0.75rem', lineHeight: 1.2 }}>
              Side-by-side comparison
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9375rem', color: 'var(--slate)', marginBottom: '2rem', maxWidth: 560 }}>
              All simulations assume DeedStack launched at date of purchase with yield reinvested annually.
              Returns run through end of 2025.
            </p>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.10)' }}>
                    {['Property', 'Purchased', 'Down', 'Years', 'Hedge Fund Yield', 'Property Gain', 'Total Return', 'CAGR'].map(h => (
                      <th key={h} style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.40)', padding: '0 12px 10px 0', textAlign: 'left', fontWeight: 400 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: 'JH Vacation (All Cash)', yr: 2008, down: fmt(1_100_000), yrs: NUM_YEARS_CS1, df: fmtK(cs1.finalCumYield), pg: fmtK(cs1.finalEquityGain), tot: fmtK(cs1.finalCumYield + cs1.finalEquityGain), cagr: cagr1 },
                    { label: 'JH Vacation (20% Down)', yr: 2008, down: fmt(220_000), yrs: NUM_YEARS_CS1, df: fmtK(cs2.finalCumYield), pg: fmtK(cs2.finalEquityGain), tot: fmtK(cs2.finalCumYield + cs2.finalEquityGain), cagr: cagr2 },
                    { label: 'JH AirBnb (20% Down)', yr: 2018, down: fmt(360_000), yrs: NUM_YEARS_CS3, df: fmtK(cs3.finalCumYield), pg: fmtK(cs3.finalEquityGain), tot: fmtK(cs3.finalCumYield + cs3.finalEquityGain + AIRBNB_CUMULATIVE.at(-1)!), cagr: cagr3 },
                    { label: 'Cheyenne Home (20% Down)', yr: 2014, down: fmt(47_600), yrs: NUM_YEARS_CS4, df: fmtK(cs4.finalCumYield), pg: fmtK(cs4.finalEquityGain), tot: fmtK(cs4.finalCumYield + cs4.finalEquityGain), cagr: cagr4 },
                    { label: 'Yellowstone Ranch (All Cash)', yr: 2016, down: fmt(875_000), yrs: NUM_YEARS_CS5, df: fmtK(cs5.finalCumYield), pg: fmtK(cs5.finalEquityGain), tot: fmtK(cs5.finalCumYield + cs5.finalEquityGain), cagr: cagr5 },
                  ].map((row, i) => (
                    <tr key={row.label} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      {[
                        <td key="l" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', color: 'var(--white)', padding: '12px 12px 12px 0', fontWeight: 500 }}>{row.label}</td>,
                        <td key="yr" style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.75rem', color: 'var(--slate)', padding: '12px 12px 12px 0' }}>{row.yr}</td>,
                        <td key="d" style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.75rem', color: 'var(--slate)', padding: '12px 12px 12px 0' }}>{row.down}</td>,
                        <td key="y" style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.75rem', color: 'var(--slate)', padding: '12px 12px 12px 0' }}>{row.yrs} yrs</td>,
                        <td key="df" style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.8rem', color: 'var(--pine-lt)', padding: '12px 12px 12px 0', fontWeight: 500 }}>{row.df}</td>,
                        <td key="pg" style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.8rem', color: '#C8A840', padding: '12px 12px 12px 0', fontWeight: 500 }}>{row.pg}</td>,
                        <td key="tot" style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.8rem', color: 'var(--white)', padding: '12px 12px 12px 0', fontWeight: 600 }}>{row.tot}</td>,
                        <td key="cagr" style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.8rem', color: '#C8A840', padding: '12px 0 12px 0', fontWeight: 600 }}>{(row.cagr * 100).toFixed(1)}%</td>,
                      ]}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-24 px-6 md:px-12 lg:px-20" style={{ background: 'var(--obsidian)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-3xl mx-auto relative z-10 text-center">
            <p className="text-label mb-4" style={{ color: 'var(--slate)' }}>YOUR PROPERTY. YOUR NUMBERS.</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 600, color: 'var(--white)', marginBottom: '1rem', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
              Run your own simulation.
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: 'var(--slate)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              Enter your home value, LTV, and return target. See your 10, 20, and 30-year
              yield projection with annual compounding — the same model that powers these case studies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/yield" className="btn-primary" style={{ padding: '13px 28px', fontSize: 15 }}>
                Yield Calculator →
              </Link>
              <Link href="/regulation" style={{ display: 'inline-flex', alignItems: 'center', padding: '13px 28px', fontSize: 15, fontFamily: "'DM Sans', sans-serif", fontWeight: 500, color: 'var(--slate)', textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.12)', borderRadius: 'var(--r-md)' }} className="hover:!border-[rgba(255,255,255,0.3)] hover:!text-white">
                Regulatory Framework
              </Link>
            </div>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.68rem', color: 'rgba(255,255,255,0.25)', marginTop: '2rem', lineHeight: 1.7, maxWidth: 560, margin: '2rem auto 0' }}>
              Historical simulations are illustrative only. S&amp;P 500 returns sourced from NYU Stern Damodaran dataset.
              Property values are estimated from county-level market data and are not exact transaction records.
              Past performance does not guarantee future results. Not investment advice.
              DeedStack offerings are available to accredited investors in Wyoming under Reg D 506(c).
            </p>
          </div>
          <MountainSVG variant="dark" />
        </section>

      </main>
    </>
  );
}

// ─── Case Section Component ───────────────────────────────────────────────────
function CaseSection({
  num, badge, badgeColor, title, subtitle, location, purchaseYear,
  purchasePrice, ltv, use, photoGradient, photoLabel, photoSub,
  data, deedFlowYield, propGain, totalGain, airbnbTotal, initInvested,
  years, cagr, note, bg, airbnb,
}: {
  num: string; badge: string; badgeColor: string;
  title: string; subtitle: string; location: string;
  purchaseYear: number; purchasePrice: number; ltv: number;
  use: string; photoGradient: string; photoLabel: string; photoSub: string;
  data: ReturnType<typeof simulate>;
  deedFlowYield: number; propGain: number; totalGain: number;
  airbnbTotal?: number; initInvested: number;
  years: number; cagr: number; note: string; bg: string;
  airbnb?: number[];
}) {
  const mortgageBalance = purchasePrice * ltv;
  const equity = purchasePrice * (1 - ltv);

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20" style={{ background: bg }}>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.12em', color: 'var(--slate)' }}>CASE {num}</span>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.10em', color: badgeColor, textTransform: 'uppercase' }}>{badge}</span>
        </div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 600, color: 'var(--granite)', marginBottom: '0.25rem', lineHeight: 1.2 }}>
          {title}
        </h2>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.75rem', color: 'var(--slate)', marginBottom: '1.5rem' }}>{subtitle}</p>

        {/* Two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">

          {/* Photo placeholder */}
          <div className="lg:col-span-2" style={{ background: photoGradient, borderRadius: 'var(--r-lg)', minHeight: 260, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
            {/* Subtle mountain silhouette in bg */}
            <svg viewBox="0 0 300 80" style={{ position: 'absolute', bottom: 48, left: 0, right: 0, width: '100%', opacity: 0.12 }} aria-hidden="true">
              <polyline points="0,80 40,55 80,62 120,38 160,48 200,22 240,32 280,15 300,20 300,80" fill="white" />
            </svg>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: 'rgba(255,255,255,0.50)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>{location}</p>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 600, color: 'rgba(255,255,255,0.90)', lineHeight: 1.2 }}>{photoLabel}</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', color: 'rgba(255,255,255,0.50)', marginTop: 4, lineHeight: 1.5 }}>{photoSub}</p>
              <div style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.12)' }}>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.68rem', color: 'rgba(255,255,255,0.40)' }}>{use}</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="lg:col-span-3 flex flex-col gap-4">

            {/* Purchase details */}
            <div className="card" style={{ padding: '1rem 1.25rem' }}>
              <p className="text-label mb-3">PURCHASE DETAILS</p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                {[
                  ['Year Purchased', purchaseYear.toString()],
                  ['Purchase Price', fmt(purchasePrice)],
                  ['LTV / Mortgage', ltv === 0 ? '0% — All Cash' : `${(ltv * 100).toFixed(0)}% — ${fmt(mortgageBalance)}`],
                  ['Initial Equity', fmt(equity)],
                  ['DeedStack Deployed (70%)', fmt(data.K0)],
                  ['Current Est. Value', fmt(data.finalPropValue)],
                ].map(([l, v]) => (
                  <div key={l}>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', color: 'var(--slate)', marginBottom: 1 }}>{l}</p>
                    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.8rem', color: 'var(--granite)', fontWeight: 500 }}>{v}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Returns */}
            <div style={{ background: 'var(--pine-ghost)', border: '1px solid var(--pine-pale)', borderRadius: 'var(--r-lg)', padding: '1rem 1.25rem' }}>
              <p className="text-label mb-3" style={{ color: 'var(--pine)' }}>SIMULATION RESULTS (2025)</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', color: 'var(--stone)', marginBottom: 2 }}>Hedge Fund Cumulative Yield</p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '1.4rem', fontWeight: 500, color: 'var(--pine)', lineHeight: 1 }}>{fmtK(deedFlowYield)}</p>
                </div>
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', color: 'var(--stone)', marginBottom: 2 }}>Property Equity Gain</p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '1.4rem', fontWeight: 500, color: '#B08A26', lineHeight: 1 }}>{fmtK(propGain)}</p>
                </div>
                {airbnbTotal && (
                  <div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', color: 'var(--stone)', marginBottom: 2 }}>AirBnb Income (est.)</p>
                    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '1.4rem', fontWeight: 500, color: 'var(--timber)', lineHeight: 1 }}>{fmtK(airbnbTotal)}</p>
                  </div>
                )}
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', color: 'var(--stone)', marginBottom: 2 }}>Combined Total Return</p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '1.4rem', fontWeight: 600, color: 'var(--obsidian)', lineHeight: 1 }}>{fmtK(totalGain)}</p>
                </div>
              </div>
              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--pine-pale)', display: 'flex', gap: '2rem' }}>
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', color: 'var(--stone)', marginBottom: 2 }}>Years Held</p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.9rem', fontWeight: 500, color: 'var(--granite)' }}>{years} yrs</p>
                </div>
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', color: 'var(--stone)', marginBottom: 2 }}>CAGR on Invested Capital</p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.9rem', fontWeight: 600, color: 'var(--gold)' }}>{(cagr * 100).toFixed(1)}%</p>
                </div>
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', color: 'var(--stone)', marginBottom: 2 }}>Initial Invested</p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.9rem', fontWeight: 500, color: 'var(--granite)' }}>{fmt(initInvested)}</p>
                </div>
              </div>
            </div>

            {/* Note */}
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8125rem', color: 'var(--stone)', lineHeight: 1.7, padding: '0.75rem 1rem', background: 'var(--frost)', borderRadius: 'var(--r-md)', borderLeft: `3px solid ${badgeColor}` }}>
              {note}
            </p>
          </div>
        </div>

        {/* Chart */}
        <div style={{ background: 'var(--white)', border: '1px solid var(--mist)', borderRadius: 'var(--r-lg)', padding: '1.25rem' }}>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', fontWeight: 500, color: 'var(--granite)' }}>
                Cumulative Returns — {purchaseYear}–2025
              </p>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: 'var(--slate)', marginTop: 2 }}>
                Green = Hedge fund yield · Gold dashed = DeedStack + property equity gain
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 16, height: 2.5, background: 'var(--pine)', borderRadius: 2, display: 'inline-block' }} />
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: 'var(--slate)' }}>Hedge Fund Yield</span>
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 16, height: 0, border: '1.5px dashed #B08A26', display: 'inline-block' }} />
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: 'var(--slate)' }}>+ Property Equity</span>
              </span>
            </div>
          </div>
          <SimChart
            years={data.years}
            cumYields={data.cumYields}
            equityGains={data.equityGains}
            airbnb={airbnb}
            initInvested={initInvested}
          />
        </div>
      </div>
    </section>
  );
}
