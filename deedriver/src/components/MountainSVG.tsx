interface MountainSVGProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export default function MountainSVG({ variant = 'light', className }: MountainSVGProps) {
  const fill    = variant === 'dark' ? '#CDD4DA' : '#2C3A47';
  const stroke  = variant === 'dark' ? '#CDD4DA' : '#18242F';
  const tree    = variant === 'dark' ? '#4A9A6E' : '#285A44';
  const opacity = variant === 'dark' ? 0.08 : 0.12;

  return (
    <svg
      viewBox="0 0 1200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMaxYMax meet"
      style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '100%',
        height: '48%',
        opacity,
        pointerEvents: 'none',
        zIndex: 0,
      }}
      className={className}
      aria-hidden="true"
    >
      {/* ── Mountain ridge — ascending left→right with return-chart volatility ── */}
      <polyline
        points="
          0,200
          0,190
          55,182
          95,172
          130,178
          165,158
          200,165
          235,145
          270,154
          305,128
          340,138
          375,108
          410,120
          445,92
          475,102
          510,74
          542,86
          575,56
          608,68
          642,40
          672,52
          705,28
          735,38
          768,16
          800,26
          832,10
          862,20
          895,6
          928,16
          960,4
          992,13
          1025,2
          1058,10
          1090,3
          1125,9
          1160,2
          1200,5
          1200,200
        "
        fill={fill}
      />

      {/* ── Ridge detail lines (gully shadows on main peaks) ── */}
      <polyline points="305,128 322,144 340,130" fill="none" stroke={stroke} strokeWidth="0.7"/>
      <polyline points="510,74  526,90  542,76"  fill="none" stroke={stroke} strokeWidth="0.7"/>
      <polyline points="705,28  720,44  735,30"  fill="none" stroke={stroke} strokeWidth="0.7"/>
      <polyline points="895,6   910,20  928,8"   fill="none" stroke={stroke} strokeWidth="0.7"/>

      {/* ── Trees — 4-line simple pine design, very small, to scale ── */}

      {/* Tree 1 — ridge ~(235,145) */}
      <line x1="235" y1="145" x2="235" y2="130" stroke={tree} strokeWidth="1.4"/>
      <line x1="228" y1="138" x2="242" y2="138" stroke={tree} strokeWidth="1.4"/>
      <line x1="229" y1="133" x2="241" y2="133" stroke={tree} strokeWidth="1.4"/>
      <line x1="231" y1="130" x2="239" y2="130" stroke={tree} strokeWidth="1.4"/>

      {/* Tree 2 — ridge ~(375,108) */}
      <line x1="375" y1="108" x2="375" y2="93"  stroke={tree} strokeWidth="1.4"/>
      <line x1="368" y1="101" x2="382" y2="101" stroke={tree} strokeWidth="1.4"/>
      <line x1="369" y1="96"  x2="381" y2="96"  stroke={tree} strokeWidth="1.4"/>
      <line x1="371" y1="93"  x2="379" y2="93"  stroke={tree} strokeWidth="1.4"/>

      {/* Tree 3 — ridge ~(575,56) */}
      <line x1="575" y1="56" x2="575" y2="41"  stroke={tree} strokeWidth="1.4"/>
      <line x1="568" y1="49" x2="582" y2="49"  stroke={tree} strokeWidth="1.4"/>
      <line x1="569" y1="44" x2="581" y2="44"  stroke={tree} strokeWidth="1.4"/>
      <line x1="571" y1="41" x2="579" y2="41"  stroke={tree} strokeWidth="1.4"/>

      {/* Tree 4 — ridge ~(768,16) */}
      <line x1="768" y1="16" x2="768" y2="2"   stroke={tree} strokeWidth="1.4"/>
      <line x1="761" y1="9"  x2="775" y2="9"   stroke={tree} strokeWidth="1.4"/>
      <line x1="762" y1="5"  x2="774" y2="5"   stroke={tree} strokeWidth="1.4"/>
      <line x1="764" y1="2"  x2="772" y2="2"   stroke={tree} strokeWidth="1.4"/>
    </svg>
  );
}
