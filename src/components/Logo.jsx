// THAANA HARDWARE — official logo system.
//
// Design (matches the supplied brand mark):
//   • House silhouette (roof + walls) split half charcoal / half red
//   • Inside the house: a "TH" monogram, T in charcoal, H in red
//   • A flat-head wood screw nested inside the T's stem — direct hardware cue
//   • A small 2×2 window on the roof's left half adds storey detail
//
// Three components are exported:
//   <LogoMark />     — square mark only (favicon, app icons, square spots)
//   <LogoWordmark /> — wordmark + optional tagline
//   <Logo />         — full vertical lockup (mark on top, wordmark below)
//
// Variants: "onLight" (default, charcoal+red) and "onDark" (white+red).

const C = {
  onLight: { dark: "#1A1A1A", red: "#C8202E", paper: "#FFFFFF", tagline: "#475569" },
  onDark:  { dark: "#FFFFFF", red: "#E85F75", paper: "transparent", tagline: "#94A3B8" },
};

export function LogoMark({ className = "h-10 w-10", variant = "onLight", title = "Thaana Hardware" }) {
  const c = C[variant] || C.onLight;
  return (
    <svg viewBox="0 0 240 240" className={className} role="img" aria-label={title}>
      <title>{title}</title>

      {/* === ROOF — chunky chevron split left/right === */}
      {/* Left half (dark) */}
      <path
        d="M120 18 L120 60 L42 96 L24 86 Z"
        fill={c.dark}
      />
      {/* Right half (red) */}
      <path
        d="M120 18 L120 60 L198 96 L216 86 Z"
        fill={c.red}
      />

      {/* === ROOF UNDERSIDE / EAVES — gives the house a "ceiling beam" === */}
      <rect x="38" y="92" width="82" height="16" fill={c.dark} />
      <rect x="120" y="92" width="82" height="16" fill={c.red} />

      {/* === 2×2 ROOF WINDOW === */}
      <g fill={c.dark}>
        <rect x="106" y="56" width="9" height="9" />
        <rect x="118" y="56" width="9" height="9" />
        <rect x="106" y="68" width="9" height="9" />
        <rect x="118" y="68" width="9" height="9" />
      </g>

      {/* === "T" — left half, charcoal === */}
      {/* vertical stem of T */}
      <rect x="62" y="108" width="36" height="100" fill={c.dark} />
      {/* === "H" — right half, red === */}
      {/* left post */}
      <rect x="120" y="108" width="34" height="100" fill={c.red} />
      {/* right post */}
      <rect x="170" y="108" width="34" height="100" fill={c.red} />
      {/* crossbar */}
      <rect x="120" y="144" width="84" height="22" fill={c.red} />

      {/* === SCREW inside the T stem === */}
      <g>
        {/* head */}
        <ellipse cx="80" cy="138" rx="14" ry="6" fill={c.paper} stroke={c.dark} strokeWidth="2" />
        <line x1="68" y1="138" x2="92" y2="138" stroke={c.dark} strokeWidth="2" strokeLinecap="round" />
        {/* shaft with threads */}
        <path
          d="M70 143 L90 143 L88 153 L72 153 L88 163 L72 163 L88 173 L72 173 L88 183 L72 183 L80 196 Z"
          fill={c.paper}
          stroke={c.dark}
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </g>
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
        <span className="h-px w-6 sm:w-8" style={{ background: c.dark }} />
        <span
          className="font-display font-bold tracking-[0.22em] text-[11px] sm:text-[13px]"
          style={{ color: c.red }}
        >
          HARDWARE
        </span>
        <span className="h-px w-6 sm:w-8" style={{ background: c.dark }} />
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

// Default horizontal lockup — mark + compact text. Tagline optional.
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
        <div
          className="font-display font-black tracking-tight text-base sm:text-lg leading-tight"
          style={{ color: c.dark }}
        >
          TH<span style={{ color: c.red }}>AA</span>NA{" "}
          <span style={{ color: c.red }}>HARDWARE</span>
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
