// THAANA HARDWARE LIMITED — official premium logo system.
//
// Design upgrade:
//   • A premium 5-point gold star crowns the roof apex (premium emblem)
//   • Subtle gold halo behind the star adds polish
//   • House silhouette split half charcoal / half red (unchanged identity)
//   • Internal TH monogram with screw inside the T's stem
//   • Wordmark reads "THAANA HARDWARE LIMITED" with star delimiters
//
// Exports:
//   <LogoMark />     — square mark (favicon, app icon, square spots)
//   <LogoWordmark /> — wordmark + tagline
//   <Logo />         — horizontal lockup (default)
//
// Variants: "onLight" (charcoal+red) and "onDark" (white+red).

const C = {
  onLight: {
    dark:    "#1A1A1A",
    red:     "#C8202E",
    paper:   "#FFFFFF",
    gold:    "#D4A52A",
    goldHi:  "#F2C94C",
    tagline: "#475569",
  },
  onDark: {
    dark:    "#FFFFFF",
    red:     "#E85F75",
    paper:   "transparent",
    gold:    "#F2C94C",
    goldHi:  "#FCE38A",
    tagline: "#94A3B8",
  },
};

export function LogoMark({
  className = "h-10 w-10",
  variant = "onLight",
  title = "Thaana Hardware Limited",
}) {
  const c = C[variant] || C.onLight;

  // 5-point star path centred at (120, 14) with radius 12 (outer) / 5 (inner)
  // mathematically constructed so the points are crisp.
  const cx = 120;
  const cy = 14;
  const R = 12;   // outer radius
  const r = 5;    // inner radius
  const points = [];
  for (let i = 0; i < 10; i++) {
    const angle = (Math.PI / 5) * i - Math.PI / 2;
    const radius = i % 2 === 0 ? R : r;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    points.push(`${x.toFixed(2)},${y.toFixed(2)}`);
  }
  const starPath = points.join(" ");

  return (
    <svg viewBox="0 0 240 240" className={className} role="img" aria-label={title}>
      <title>{title}</title>

      <defs>
        <linearGradient id={`thStarGrad-${variant}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.goldHi} />
          <stop offset="100%" stopColor={c.gold} />
        </linearGradient>
        <radialGradient id={`thStarHalo-${variant}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={c.gold} stopOpacity="0.55" />
          <stop offset="100%" stopColor={c.gold} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* === PREMIUM STAR — crowning the roof apex === */}
      <circle cx={cx} cy={cy} r="22" fill={`url(#thStarHalo-${variant})`} />
      <polygon
        points={starPath}
        fill={`url(#thStarGrad-${variant})`}
        stroke={c.dark}
        strokeWidth="1"
        strokeLinejoin="round"
      />
      {/* Star inner highlight — adds dimensional polish */}
      <polygon
        points={`${cx},${cy - R + 1} ${cx + r * 0.55},${cy - r * 0.3} ${cx - r * 0.55},${cy - r * 0.3}`}
        fill="white"
        opacity="0.55"
      />

      {/* === ROOF — chunky chevron split left/right, now starting below the star === */}
      <path d="M120 30 L120 60 L42 96 L24 86 Z" fill={c.dark} />
      <path d="M120 30 L120 60 L198 96 L216 86 Z" fill={c.red} />

      {/* === ROOF UNDERSIDE / EAVES === */}
      <rect x="38" y="92" width="82" height="16" fill={c.dark} />
      <rect x="120" y="92" width="82" height="16" fill={c.red} />

      {/* === 2x2 ROOF WINDOW === */}
      <g fill={c.dark}>
        <rect x="106" y="62" width="9" height="9" />
        <rect x="118" y="62" width="9" height="9" />
        <rect x="106" y="74" width="9" height="9" />
        <rect x="118" y="74" width="9" height="9" />
      </g>

      {/* === "T" stem (charcoal) === */}
      <rect x="62" y="108" width="36" height="100" fill={c.dark} />
      {/* === "H" posts + crossbar (red) === */}
      <rect x="120" y="108" width="34" height="100" fill={c.red} />
      <rect x="170" y="108" width="34" height="100" fill={c.red} />
      <rect x="120" y="144" width="84" height="22" fill={c.red} />

      {/* === SCREW inside the T stem === */}
      <g>
        <ellipse cx="80" cy="138" rx="14" ry="6" fill={c.paper} stroke={c.dark} strokeWidth="2" />
        <line x1="68" y1="138" x2="92" y2="138" stroke={c.dark} strokeWidth="2" strokeLinecap="round" />
        <path
          d="M70 143 L90 143 L88 153 L72 153 L88 163 L72 163 L88 173 L72 173 L88 183 L72 183 L80 196 Z"
          fill={c.paper}
          stroke={c.dark}
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </g>

      {/* === Foundation accent — thin gold rule under the monogram === */}
      <rect x="56" y="214" width="128" height="3" fill={`url(#thStarGrad-${variant})`} />
    </svg>
  );
}

// Small inline gold star used as a delimiter in the wordmark.
function SmallStar({ size = 9, color = "#D4A52A" }) {
  const cx = size / 2;
  const cy = size / 2;
  const R = size / 2;
  const r = size / 5;
  const pts = [];
  for (let i = 0; i < 10; i++) {
    const angle = (Math.PI / 5) * i - Math.PI / 2;
    const radius = i % 2 === 0 ? R : r;
    pts.push(`${cx + Math.cos(angle) * radius},${cy + Math.sin(angle) * radius}`);
  }
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden>
      <polygon points={pts.join(" ")} fill={color} />
    </svg>
  );
}

export function LogoWordmark({
  className = "",
  variant = "onLight",
  showTagline = true,
}) {
  const c = C[variant] || C.onLight;
  return (
    <div className={`leading-none text-center ${className}`}>
      <div
        className="font-display font-black tracking-[0.04em] text-[22px] sm:text-[26px]"
        style={{ color: c.dark }}
      >
        TH<span style={{ color: c.red }}>AA</span>NA
      </div>
      <div className="mt-1.5 flex items-center justify-center gap-2">
        <SmallStar color={c.gold} />
        <span
          className="font-display font-bold tracking-[0.22em] text-[11px] sm:text-[12px]"
          style={{ color: c.red }}
        >
          HARDWARE LIMITED
        </span>
        <SmallStar color={c.gold} />
      </div>
      {showTagline && (
        <div
          className="mt-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.22em] font-semibold"
          style={{ color: c.tagline }}
        >
          Building Trust. Building Better.
        </div>
      )}
    </div>
  );
}

// Default horizontal lockup — mark + compact text.
export default function Logo({
  className = "",
  markClassName = "h-10 w-10",
  variant = "onLight",
  showTagline = false,
  layout = "horizontal",
}) {
  const c = C[variant] || C.onLight;

  if (layout === "stacked") {
    return (
      <div className={`flex flex-col items-center gap-2 ${className}`}>
        <LogoMark variant={variant} className={markClassName} />
        <LogoWordmark variant={variant} showTagline={showTagline} />
      </div>
    );
  }

  return (
    <div className={`inline-flex flex-col ${className}`}>
      <div className="flex items-center gap-3">
        <LogoMark variant={variant} className={markClassName} />
        <div className="leading-tight">
          <div
            className="font-display font-black tracking-tight text-base sm:text-lg"
            style={{ color: c.dark }}
          >
            TH<span style={{ color: c.red }}>AA</span>NA{" "}
            <span style={{ color: c.red }}>HARDWARE</span>
          </div>
          <div className="mt-0.5 flex items-center gap-1.5">
            <SmallStar size={7} color={c.gold} />
            <span
              className="font-display font-bold tracking-[0.28em] text-[9px] sm:text-[10px]"
              style={{ color: c.gold }}
            >
              LIMITED
            </span>
            <span
              className="h-px flex-1 max-w-[28px]"
              style={{ background: c.gold, opacity: 0.5 }}
            />
          </div>
        </div>
      </div>
      {showTagline && (
        <div
          className="mt-1 text-[10px] uppercase tracking-[0.22em] font-semibold text-center sm:text-left sm:pl-[60px]"
          style={{ color: c.tagline }}
        >
          Building Trust. Building Better.
        </div>
      )}
    </div>
  );
}
