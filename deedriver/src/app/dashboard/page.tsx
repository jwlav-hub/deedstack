'use client';

import Nav from '@/components/Nav';
import InvestorGate from '@/components/InvestorGate';

// ─── Account summary ──────────────────────────────────────────────────────────

const accountSummary = [
  { label: 'Total Account Value',  value: '$84,320.00', pct: '+1.49%',  up: true  },
  { label: 'Total Market Value',   value: '$79,450.00', pct: '+1.25%',  up: true  },
  { label: 'Total Day Change',     value: '+$1,240.00', pct: '+1.49%',  up: true  },
  { label: 'Total Cost Basis',     value: '$71,200.00', pct: null,      up: null  },
  { label: 'Total Gain / Loss',    value: '+$8,250.00', pct: '+11.59%', up: true  },
];

// ─── Token holdings ───────────────────────────────────────────────────────────

const holdings = [
  {
    token:        'DEED-JH01',
    desc:         'Jackson Hole — 284 Elk Ridge Dr',
    qty:          500,
    price:        10.42,
    mktValue:     5210.00,
    costBasis:    5000.00,
    gainLoss:     210.00,
    rental:       7.2,
    appreciation: 4.8,
    yieldPct:     7.2,
    projTotal:    12.0,
  },
  {
    token:        'DEED-CH01',
    desc:         'Cheyenne — 1102 Capitol Ave',
    qty:          1200,
    price:        10.18,
    mktValue:     12216.00,
    costBasis:    12000.00,
    gainLoss:     216.00,
    rental:       6.8,
    appreciation: 3.2,
    yieldPct:     6.8,
    projTotal:    10.0,
  },
  {
    token:        'DEED-CS01',
    desc:         'Casper — 750 Mountain View Rd',
    qty:          800,
    price:        10.35,
    mktValue:     8280.00,
    costBasis:    8000.00,
    gainLoss:     280.00,
    rental:       7.5,
    appreciation: 3.9,
    yieldPct:     7.5,
    projTotal:    11.4,
  },
  {
    token:        'DEED-SH01',
    desc:         'Sheridan — 38 Powder River Ln',
    qty:          600,
    price:        10.08,
    mktValue:     6048.00,
    costBasis:    6000.00,
    gainLoss:     48.00,
    rental:       6.4,
    appreciation: 3.5,
    yieldPct:     6.4,
    projTotal:    9.9,
  },
  {
    token:        'DEED-CD01',
    desc:         'Cody — 512 Buffalo Bill Ave',
    qty:          1500,
    price:        10.61,
    mktValue:     15915.00,
    costBasis:    15000.00,
    gainLoss:     915.00,
    rental:       8.1,
    appreciation: 5.2,
    yieldPct:     8.1,
    projTotal:    13.3,
  },
  {
    token:        'DEED-LR01',
    desc:         'Laramie — 209 University Ave',
    qty:          400,
    price:        10.22,
    mktValue:     4088.00,
    costBasis:    4000.00,
    gainLoss:     88.00,
    rental:       7.8,
    appreciation: 3.1,
    yieldPct:     7.8,
    projTotal:    10.9,
  },
  {
    token:        'DEED-JH02',
    desc:         'Jackson Hole — 91 Moose Creek Rd',
    qty:          2000,
    price:        10.78,
    mktValue:     21560.00,
    costBasis:    20000.00,
    gainLoss:     1560.00,
    rental:       7.6,
    appreciation: 6.1,
    yieldPct:     7.6,
    projTotal:    13.7,
  },
  {
    token:        'DEED-CS02',
    desc:         'Casper — 310 Rimrock Dr',
    qty:          600,
    price:        10.22,
    mktValue:     6132.00,
    costBasis:    6200.00,
    gainLoss:     -68.00,
    rental:       6.9,
    appreciation: 2.8,
    yieldPct:     6.9,
    projTotal:    9.7,
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmt(n: number, decimals = 2) {
  return n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}
function fmtUSD(n: number) {
  const abs = Math.abs(n);
  const str = `$${fmt(abs)}`;
  return n < 0 ? `-${str}` : str;
}
function fmtPct(n: number) {
  return `${n >= 0 ? '+' : ''}${n.toFixed(1)}%`;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function DashboardPage() {
  const totalQty  = holdings.reduce((s, h) => s + h.qty, 0);
  const totalMkt  = holdings.reduce((s, h) => s + h.mktValue, 0);
  const totalCost = holdings.reduce((s, h) => s + h.costBasis, 0);
  const totalGL   = holdings.reduce((s, h) => s + h.gainLoss, 0);
  const avgYield  = holdings.reduce((s, h) => s + h.yieldPct * h.mktValue, 0) / totalMkt;
  const avgProj   = holdings.reduce((s, h) => s + h.projTotal * h.mktValue, 0) / totalMkt;

  return (
    <InvestorGate>
      <Nav />
      <main style={{ background: 'var(--obsidian)', minHeight: '100vh' }}>

        {/* ── Page header ────────────────────────────────────────────────── */}
        <section
          className="pt-[96px] pb-6 px-6 md:px-12 lg:px-20"
          style={{ background: 'var(--obsidian)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.35)', marginBottom: 6 }}>
                DEEDRIVER · PORTFOLIO DASHBOARD
              </p>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 600, color: 'var(--white)', lineHeight: 1.15 }}>
                Account Overview
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                fontFamily: "'DM Sans', sans-serif", fontSize: '0.7rem', letterSpacing: '0.08em',
                color: 'rgba(255,255,255,0.35)', padding: '4px 10px', borderRadius: 999,
                border: '1px solid rgba(255,255,255,0.08)',
              }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#52B788', display: 'inline-block' }} />
                LIVE · {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)' }}>
                Acct #DR-0042
              </span>
            </div>
          </div>
        </section>

        {/* ── Account summary cards ──────────────────────────────────────── */}
        <section className="px-6 md:px-12 lg:px-20 py-8" style={{ background: 'var(--obsidian)' }}>
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {accountSummary.map((s) => (
              <div
                key={s.label}
                className="rounded-xl p-5"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.35)', marginBottom: 10 }}>
                  {s.label.toUpperCase()}
                </p>
                <p style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 'clamp(0.9rem, 2vw, 1.2rem)',
                  fontWeight: 600,
                  color: s.up === true ? '#52B788' : s.up === false ? '#E8826A' : 'var(--white)',
                  lineHeight: 1,
                }}>
                  {s.value}
                </p>
                {s.pct && (
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.68rem', color: s.up ? 'rgba(82,183,136,0.65)' : 'rgba(232,130,106,0.65)', marginTop: 6 }}>
                    {s.pct}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Holdings table ─────────────────────────────────────────────── */}
        <section className="px-6 md:px-12 lg:px-20 pb-6" style={{ background: 'var(--obsidian)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>

              <div style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '12px 20px' }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)' }}>
                  TOKEN HOLDINGS
                </p>
              </div>

              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 780 }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      {[
                        { col: 'Token',      align: 'left'  },
                        { col: 'Description', align: 'left' },
                        { col: 'QTY',         align: 'right' },
                        { col: 'Price',       align: 'right' },
                        { col: 'Mkt Value',   align: 'right' },
                        { col: 'Cost Basis',  align: 'right' },
                        { col: 'Gain / Loss', align: 'right' },
                      ].map(({ col, align }) => (
                        <th key={col} style={{
                          fontFamily: "'DM Sans', sans-serif", fontSize: '0.63rem', letterSpacing: '0.08em',
                          color: 'rgba(255,255,255,0.3)', fontWeight: 600, padding: '10px 20px',
                          textAlign: align as 'left' | 'right', whiteSpace: 'nowrap',
                        }}>
                          {col.toUpperCase()}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {holdings.map((h, i) => {
                      const glColor = h.gainLoss >= 0 ? '#52B788' : '#E8826A';
                      return (
                        <tr
                          key={h.token}
                          style={{ borderBottom: i < holdings.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none', transition: 'background 120ms' }}
                          className="hover:!bg-[rgba(255,255,255,0.03)]"
                        >
                          <td style={{ padding: '13px 20px', whiteSpace: 'nowrap' }}>
                            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.78rem', fontWeight: 600, color: '#52B788' }}>{h.token}</span>
                          </td>
                          <td style={{ padding: '13px 20px' }}>
                            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>{h.desc}</span>
                          </td>
                          <td style={{ padding: '13px 20px', textAlign: 'right' }}>
                            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>{h.qty.toLocaleString()}</span>
                          </td>
                          <td style={{ padding: '13px 20px', textAlign: 'right' }}>
                            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>${fmt(h.price)}</span>
                          </td>
                          <td style={{ padding: '13px 20px', textAlign: 'right' }}>
                            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.8rem', color: 'var(--white)', fontWeight: 500 }}>{fmtUSD(h.mktValue)}</span>
                          </td>
                          <td style={{ padding: '13px 20px', textAlign: 'right' }}>
                            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>{fmtUSD(h.costBasis)}</span>
                          </td>
                          <td style={{ padding: '13px 20px', textAlign: 'right' }}>
                            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.8rem', color: glColor, fontWeight: 500 }}>
                              {h.gainLoss >= 0 ? '+' : ''}{fmtUSD(h.gainLoss)}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr style={{ borderTop: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.025)' }}>
                      <td style={{ padding: '12px 20px' }}>
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.06em', color: 'rgba(255,255,255,0.4)' }}>TOTAL</span>
                      </td>
                      <td />
                      <td style={{ padding: '12px 20px', textAlign: 'right' }}>
                        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>{totalQty.toLocaleString()}</span>
                      </td>
                      <td />
                      <td style={{ padding: '12px 20px', textAlign: 'right' }}>
                        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.8rem', color: 'var(--white)', fontWeight: 700 }}>{fmtUSD(totalMkt)}</span>
                      </td>
                      <td style={{ padding: '12px 20px', textAlign: 'right' }}>
                        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>{fmtUSD(totalCost)}</span>
                      </td>
                      <td style={{ padding: '12px 20px', textAlign: 'right' }}>
                        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.8rem', color: totalGL >= 0 ? '#52B788' : '#E8826A', fontWeight: 700 }}>
                          {totalGL >= 0 ? '+' : ''}{fmtUSD(totalGL)}
                        </span>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ── Projection section ─────────────────────────────────────────── */}
        <section className="px-6 md:px-12 lg:px-20 pt-4 pb-16" style={{ background: 'var(--obsidian)' }}>
          <div className="max-w-7xl mx-auto">

            {/* Divider label */}
            <div className="flex items-center gap-4 mb-5">
              <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.06)' }} />
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.28)', whiteSpace: 'nowrap' }}>
                PROJECTED RETURNS BY HOLDING
              </p>
              <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.06)' }} />
            </div>

            <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.03)' }}>
                      {[
                        { col: 'Token',                  align: 'left'  },
                        { col: 'Description',            align: 'left'  },
                        { col: 'Rental',                 align: 'right' },
                        { col: 'Appreciation',           align: 'right' },
                        { col: 'Yield',                  align: 'right' },
                        { col: 'Projected Total Return', align: 'right' },
                      ].map(({ col, align }) => (
                        <th key={col} style={{
                          fontFamily: "'DM Sans', sans-serif", fontSize: '0.63rem', letterSpacing: '0.08em',
                          color: 'rgba(255,255,255,0.3)', fontWeight: 600, padding: '10px 20px',
                          textAlign: align as 'left' | 'right', whiteSpace: 'nowrap',
                        }}>
                          {col.toUpperCase()}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {holdings.map((h, i) => (
                      <tr
                        key={h.token}
                        style={{ borderBottom: i < holdings.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none', transition: 'background 120ms' }}
                        className="hover:!bg-[rgba(255,255,255,0.03)]"
                      >
                        <td style={{ padding: '13px 20px', whiteSpace: 'nowrap' }}>
                          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.78rem', fontWeight: 600, color: '#52B788' }}>{h.token}</span>
                        </td>
                        <td style={{ padding: '13px 20px' }}>
                          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>{h.desc}</span>
                        </td>
                        <td style={{ padding: '13px 20px', textAlign: 'right' }}>
                          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.8rem', color: '#52B788' }}>{fmtPct(h.rental)}</span>
                        </td>
                        <td style={{ padding: '13px 20px', textAlign: 'right' }}>
                          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.8rem', color: 'rgba(212,167,80,0.9)' }}>{fmtPct(h.appreciation)}</span>
                        </td>
                        <td style={{ padding: '13px 20px', textAlign: 'right' }}>
                          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>{fmtPct(h.yieldPct)}</span>
                        </td>
                        <td style={{ padding: '13px 20px', textAlign: 'right' }}>
                          <span style={{
                            fontFamily: "'DM Mono', monospace", fontSize: '0.82rem', fontWeight: 700,
                            color: h.projTotal >= 12 ? '#52B788' : h.projTotal >= 10 ? 'rgba(212,167,80,0.95)' : 'rgba(255,255,255,0.65)',
                          }}>
                            {fmtPct(h.projTotal)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr style={{ borderTop: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.025)' }}>
                      <td colSpan={2} style={{ padding: '12px 20px' }}>
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.06em', color: 'rgba(255,255,255,0.4)' }}>
                          WEIGHTED AVG
                        </span>
                      </td>
                      <td colSpan={2} />
                      <td style={{ padding: '12px 20px', textAlign: 'right' }}>
                        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.8rem', color: '#52B788', fontWeight: 600 }}>{fmtPct(avgYield)}</span>
                      </td>
                      <td style={{ padding: '12px 20px', textAlign: 'right' }}>
                        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.82rem', color: '#52B788', fontWeight: 700 }}>{fmtPct(avgProj)}</span>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            {/* Color legend */}
            <div className="flex flex-wrap gap-6 mt-5">
              {[
                { color: '#52B788',               label: 'Rental — gross rental yield on tokenized equity' },
                { color: 'rgba(212,167,80,0.9)',   label: 'Appreciation — projected annual property value growth' },
                { color: 'rgba(255,255,255,0.6)',  label: 'Yield — fund distribution target (variable, not guaranteed)' },
              ].map((l) => (
                <div key={l.label} className="flex items-center gap-2">
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: l.color, display: 'inline-block', flexShrink: 0 }} />
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', color: 'rgba(255,255,255,0.28)', lineHeight: 1.4 }}>{l.label}</span>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', color: 'rgba(255,255,255,0.18)', lineHeight: 1.7, marginTop: 16, maxWidth: 820 }}>
              Projected returns are estimates based on current token valuations, historical Wyoming property data, and fund performance targets. All figures are hypothetical and for illustrative purposes only. Returns are variable and not guaranteed. Not financial advice. Securities offered under Reg D 506(c) for accredited investors only.
            </p>
          </div>
        </section>

      </main>
    </InvestorGate>
  );
}
