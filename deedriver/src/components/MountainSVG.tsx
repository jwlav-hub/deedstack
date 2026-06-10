// Tree drawn as trunk + 4 tiers of drooping branches — matches right-side reference sketch
function Tree({
  cx, ry, h, w, color, sw,
}: {
  cx: number; ry: number; h: number; w: number; color: string; sw: number;
}) {
  // [height_fraction_from_base, width_fraction, droop_fraction]
  const tiers: [number, number, number][] = [
    [0.22, 1.00, 0.10],  // bottom — widest, most droop
    [0.44, 0.70, 0.08],
    [0.63, 0.46, 0.06],
    [0.80, 0.26, 0.04],  // top — narrowest
  ];

  return (
    <g stroke={color} strokeWidth={sw} strokeLinecap="round" fill="none">
      {/* Central trunk */}
      <line x1={cx} y1={ry} x2={cx} y2={ry - h} />
      {tiers.map(([dy, dw, dd], i) => {
        const ty = ry - h * dy;   // y where branch meets trunk
        const bx = w * dw;        // horizontal reach of branch tip
        const by = h * dd;        // how far tip droops below attachment point
        return (
          <g key={i}>
            <line x1={cx} y1={ty} x2={cx - bx} y2={ty + by} />
            <line x1={cx} y1={ty} x2={cx + bx} y2={ty + by} />
          </g>
        );
      })}
    </g>
  );
}

// Mountain range: natural peaks, modest ascending trend right, clear silhouette
// viewBox 0 0 700 120 — y increases downward, lower y = higher on screen
const RIDGE_POINTS =
  '0,120 70,88 130,96 190,72 240,82 290,48 325,56 360,28 ' +
  '395,40 430,22 465,35 498,16 530,26 560,12 592,22 625,15 660,20 700,18';

const FILL_POLY = RIDGE_POINTS + ' 700,120 0,120';

// Crevice accent marks on three tallest peaks
const CREVICES: [[number, number], [number, number], [number, number]][] = [
  [[360, 28], [350, 40], [355, 34]],   // main peak
  [[498, 16], [487, 28], [492, 22]],   // third peak
  [[560, 12], [549, 24], [554, 18]],   // highest peak
];

// Tree clusters embedded inside the mountain body
// Each cluster: 3 trees with slight size/position variation
// Apex_y must be > ridge_y at that x to stay inside the polygon
interface TreeDef { cx: number; ry: number; h: number; w: number; sw: number; }

const CLUSTERS: TreeDef[][] = [
  // Cluster 1 — left shoulder (ridge ≈ y88 at x70–130)
  [
    { cx: 84,  ry: 108, h: 11,  w: 4.4, sw: 0.75 },
    { cx: 97,  ry: 106, h: 12,  w: 4.8, sw: 0.78 },
    { cx: 109, ry: 109, h: 10,  w: 4.0, sw: 0.70 },
  ],
  // Cluster 2 — left sub-peak saddle (ridge ≈ y82 at x240)
  [
    { cx: 234, ry: 98,  h: 10,  w: 4.0, sw: 0.72 },
    { cx: 246, ry: 96,  h: 11,  w: 4.5, sw: 0.75 },
    { cx: 257, ry: 99,  h: 9.5, w: 3.8, sw: 0.69 },
  ],
  // Cluster 3 — saddle between main peaks (ridge ≈ y35 at x420–465)
  [
    { cx: 438, ry: 52,  h: 9,   w: 3.8, sw: 0.70 },
    { cx: 450, ry: 50,  h: 10,  w: 4.2, sw: 0.73 },
    { cx: 461, ry: 53,  h: 8.5, w: 3.6, sw: 0.67 },
  ],
  // Cluster 4 — right high ridge (ridge ≈ y20 at x540–590)
  [
    { cx: 576, ry: 38,  h: 9,   w: 3.8, sw: 0.70 },
    { cx: 588, ry: 36,  h: 10,  w: 4.2, sw: 0.73 },
    { cx: 599, ry: 39,  h: 8.5, w: 3.5, sw: 0.67 },
  ],
];

interface MountainSVGProps {
  variant?: 'light' | 'dark';
}

export default function MountainSVG({ variant = 'light' }: MountainSVGProps) {
  const isLight = variant === 'light';

  const mountainFill    = isLight ? '#2C3A47' : '#CDD4DA';
  const creviceStroke   = isLight ? '#18242F' : '#8A98A5';
  const treeColor       = isLight ? '#285A44' : '#3A7A5C';
  const mountainOpacity = isLight ? 0.13 : 0.09;
  const treeOpacity     = isLight ? 0.62 : 0.50;

  return (
    <svg
      viewBox="0 0 700 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMaxYMax meet"
      style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '100%',
        maxWidth: 900,
        height: '48%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    >
      {/* Mountain fill */}
      <polygon points={FILL_POLY} fill={mountainFill} opacity={mountainOpacity} />

      {/* Crevice / ridge detail marks */}
      {CREVICES.map(([peak, a, b], i) => (
        <g key={i} opacity={mountainOpacity * 0.55}>
          <line x1={peak[0]} y1={peak[1]} x2={a[0]} y2={a[1]}
            stroke={creviceStroke} strokeWidth={0.8} strokeLinecap="round" />
          <line x1={peak[0]} y1={peak[1]} x2={b[0]} y2={b[1]}
            stroke={creviceStroke} strokeWidth={0.8} strokeLinecap="round" />
        </g>
      ))}

      {/* Tree clusters embedded in mountain face */}
      {CLUSTERS.map((cluster, ci) =>
        cluster.map((t, ti) => (
          <g key={`${ci}-${ti}`} opacity={treeOpacity}>
            <Tree
              cx={t.cx} ry={t.ry}
              h={t.h} w={t.w}
              color={treeColor} sw={t.sw}
            />
          </g>
        ))
      )}
    </svg>
  );
}
