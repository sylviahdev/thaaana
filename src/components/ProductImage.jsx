// Renders a clean, on-topic SVG illustration of the actual product.
// Every product gets a dedicated illustration based on keywords in its name,
// falling back to a category glyph.

import { createElement } from "react";

const palette = {
  "Cement & Concrete":     { bg1: "#F1F5F9", bg2: "#E2E8F0", tone: "#475569", accent: "#94A3B8" },
  "Steel & Reinforcement": { bg1: "#FFF7E6", bg2: "#FEEBC4", tone: "#92400E", accent: "#F59E0B" },
  "Plumbing Materials":    { bg1: "#EFF6FF", bg2: "#DBEAFE", tone: "#1D4ED8", accent: "#60A5FA" },
  "Electrical Supplies":   { bg1: "#FEF9C3", bg2: "#FEF3C7", tone: "#A16207", accent: "#FACC15" },
  "Roofing Materials":     { bg1: "#F0FDF4", bg2: "#DCFCE7", tone: "#166534", accent: "#4ADE80" },
  "Paint & Finishing":     { bg1: "#FAF5FF", bg2: "#F3E8FF", tone: "#6B21A8", accent: "#C084FC" },
  "Tools & Equipment":     { bg1: "#FEF2F2", bg2: "#FEE2E2", tone: "#B91C1C", accent: "#F87171" },
  "Tiles & Flooring":      { bg1: "#F0F9FF", bg2: "#E0F2FE", tone: "#075985", accent: "#38BDF8" },
  "Timber & Lumber":       { bg1: "#FEF3C7", bg2: "#FDE68A", tone: "#854D0E", accent: "#D97706" },
  "Hardware & Fasteners":  { bg1: "#F5F5F4", bg2: "#E7E5E4", tone: "#44403C", accent: "#A8A29E" },
  "Safety Equipment":      { bg1: "#FFFBEB", bg2: "#FEF3C7", tone: "#B45309", accent: "#F59E0B" },
  "Agricultural & Outdoor":{ bg1: "#ECFDF5", bg2: "#D1FAE5", tone: "#065F46", accent: "#10B981" },
  "Glass & Aluminium":     { bg1: "#F0F9FF", bg2: "#E0F2FE", tone: "#0E7490", accent: "#22D3EE" },
  "Water & Sanitation":    { bg1: "#EFF6FF", bg2: "#DBEAFE", tone: "#1E40AF", accent: "#3B82F6" },
  default:                 { bg1: "#F8FAFC", bg2: "#F1F5F9", tone: "#334155", accent: "#94A3B8" },
};

// --- Product illustrations (centered in a 400x300 canvas) ---

function CementBag({ p, brand }) {
  // Brand-specific colours and label so Simba, Savannah, Bamburi, Tembo
  // bags look distinct from each other.
  const brands = {
    simba:    { bag: "#E2E8F0", label: "#1E40AF",  text: "SIMBA",    sub: "CEMENT 42.5N" },
    savannah: { bag: "#FEF3C7", label: "#7C2D12",  text: "SAVANNAH", sub: "CEMENT 32.5R" },
    bamburi:  { bag: "#F8FAFC", label: "#B91C1C",  text: "BAMBURI",  sub: "NGUVU 32.5N" },
    tembo:    { bag: "#F8FAFC", label: "#166534",  text: "TEMBO",    sub: "CEMENT 42.5N" },
    default:  { bag: "#F1F5F9", label: p.tone,     text: "CEMENT",   sub: "50 KG" },
  };
  const b = brands[brand] || brands.default;
  return (
    <g transform="translate(140, 70)">
      <path d="M10 20 Q60 0 110 20 L120 160 Q60 175 0 160 Z" fill={b.bag} stroke={p.tone} strokeWidth="2.5" />
      <path d="M10 20 Q60 5 110 20 L110 35 Q60 22 10 35 Z" fill={p.tone} opacity="0.18" />
      <rect x="14" y="50" width="92" height="46" rx="3" fill={b.label} />
      <text x="60" y="71" textAnchor="middle" fill="white" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="14" letterSpacing="0.5">{b.text}</text>
      <text x="60" y="88" textAnchor="middle" fill="white" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="8" opacity="0.95">{b.sub}</text>
      {brand === "savannah" && (
        <g transform="translate(50, 110)" fill="none" stroke={b.label} strokeWidth="2" strokeLinecap="round">
          <path d="M10 14 V4 M2 14 Q10 2 18 14" />
          <line x1="10" y1="14" x2="10" y2="22" />
        </g>
      )}
      {brand === "bamburi" && (
        <g transform="translate(46, 108)" fill={b.label}>
          <path d="M2 14 Q2 4 12 4 Q22 4 22 14 L22 18 L18 18 L18 14 L14 14 L14 18 L10 18 L10 14 L6 14 L6 18 L2 18 Z" />
        </g>
      )}
      {brand === "tembo" && (
        <g transform="translate(46, 108)" fill={b.label}>
          <ellipse cx="14" cy="10" rx="12" ry="6" />
          <path d="M22 12 Q26 14 24 18 Q22 20 20 16" />
        </g>
      )}
      <path d="M20 134 H100 M20 144 H90 M20 152 H78" stroke={p.tone} strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" />
      {/* tied top */}
      <path d="M40 18 Q60 -2 80 18" stroke={p.tone} strokeWidth="2" fill="none" />
    </g>
  );
}

function Aggregate({ p, kind = "ballast" }) {
  // Pile of crushed stone (ballast/hardcore) or rounded grains (sand).
  const isSand = kind === "sand";
  const rockColor = isSand ? "#D4A373" : "#94A3B8";
  const rockShadow = isSand ? "#A57E4C" : "#475569";
  const rocks = [];
  // generate a stable pile
  const seed = isSand ? 1 : 7;
  for (let i = 0; i < 90; i++) {
    const x = ((i * 31 + seed * 13) % 360) + 20;
    const y = 280 - (((i * 17 + seed * 7) % 60) + ((i % 9) * 12));
    const r = isSand ? 2 + (i % 3) : 4 + (i % 6);
    rocks.push({ x, y, r, dark: (i % 3) === 0 });
  }
  return (
    <g>
      {/* base shadow */}
      <ellipse cx="200" cy="278" rx="180" ry="14" fill={p.tone} opacity="0.15" />
      {/* pile silhouette */}
      <path d="M30 270 Q120 170 200 150 Q280 170 370 270 Z" fill={rockColor} opacity="0.85" />
      <path d="M30 270 Q120 170 200 150 Q280 170 370 270 Z" fill="url(#pileShine)" />
      <defs>
        <linearGradient id="pileShine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* individual rocks */}
      {rocks.map((r, i) => (
        <circle
          key={i}
          cx={r.x}
          cy={r.y}
          r={r.r}
          fill={r.dark ? rockShadow : rockColor}
          stroke={rockShadow}
          strokeWidth="0.6"
          opacity="0.9"
        />
      ))}
    </g>
  );
}

function SteelBar({ p }) {
  return (
    <g transform="translate(20, 130)">
      <rect x="20" y="10" width="320" height="36" rx="6" fill="white" stroke={p.tone} strokeWidth="2" />
      <rect x="20" y="10" width="320" height="36" rx="6" fill={p.accent} opacity="0.25" />
      {/* ribs */}
      {Array.from({ length: 14 }).map((_, i) => (
        <path key={i} d={`M${40 + i * 22} 10 L${50 + i * 22} 46`} stroke={p.tone} strokeWidth="2" strokeLinecap="round" />
      ))}
      <circle cx="20" cy="28" r="14" fill={p.tone} />
      <circle cx="340" cy="28" r="14" fill={p.tone} />
      <text x="180" y="80" textAnchor="middle" fill={p.tone} fontFamily="Inter, sans-serif" fontWeight="700" fontSize="13">DEFORMED STEEL · 12m</text>
    </g>
  );
}

function BRCMesh({ p }) {
  return (
    <g transform="translate(80, 50)">
      <rect x="0" y="0" width="240" height="200" fill="white" stroke={p.tone} strokeWidth="2" rx="4" />
      {/* mesh */}
      {Array.from({ length: 7 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={(i + 1) * 25} x2="240" y2={(i + 1) * 25} stroke={p.tone} strokeWidth="2" opacity="0.85" />
      ))}
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={`v${i}`} x1={(i + 1) * 24} y1="0" x2={(i + 1) * 24} y2="200" stroke={p.tone} strokeWidth="2" opacity="0.85" />
      ))}
      {/* welds */}
      {Array.from({ length: 7 }).map((_, r) =>
        Array.from({ length: 9 }).map((_, c) => (
          <circle key={`d${r}-${c}`} cx={(c + 1) * 24} cy={(r + 1) * 25} r="2.5" fill={p.tone} />
        ))
      )}
    </g>
  );
}

function HoopWire({ p }) {
  return (
    <g transform="translate(120, 60)">
      <ellipse cx="80" cy="90" rx="80" ry="22" fill="white" stroke={p.tone} strokeWidth="2" />
      <ellipse cx="80" cy="90" rx="80" ry="22" fill={p.accent} opacity="0.25" />
      {/* coil rings */}
      {[0, 14, 28, 42, 56].map((dy, i) => (
        <ellipse key={i} cx="80" cy={90 - dy} rx="80" ry="22" fill="none" stroke={p.tone} strokeWidth="1.5" opacity={0.5 - i * 0.07} />
      ))}
      <ellipse cx="80" cy="34" rx="80" ry="22" fill="white" stroke={p.tone} strokeWidth="2" />
      <ellipse cx="80" cy="34" rx="40" ry="10" fill={p.bg1} stroke={p.tone} strokeWidth="1.5" />
    </g>
  );
}

function Wheelbarrow({ p }) {
  return (
    <g transform="translate(40, 80)">
      {/* tray */}
      <path d="M40 30 L260 30 L240 100 L70 100 Z" fill="white" stroke={p.tone} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M40 30 L260 30 L240 100 L70 100 Z" fill={p.accent} opacity="0.25" />
      <path d="M55 45 L245 45" stroke={p.tone} strokeOpacity="0.4" strokeWidth="2" />
      {/* handles */}
      <path d="M260 30 L320 75 M40 30 L0 75" stroke={p.tone} strokeWidth="4" strokeLinecap="round" />
      <circle cx="320" cy="75" r="6" fill={p.tone} />
      <circle cx="0" cy="75" r="6" fill={p.tone} />
      {/* legs */}
      <path d="M75 100 L70 135 M235 100 L240 135" stroke={p.tone} strokeWidth="4" strokeLinecap="round" />
      {/* wheel */}
      <circle cx="155" cy="135" r="26" fill="white" stroke={p.tone} strokeWidth="3" />
      <circle cx="155" cy="135" r="8" fill={p.tone} />
      <path d="M155 109 V161 M129 135 H181" stroke={p.tone} strokeWidth="2" />
    </g>
  );
}

function RoofingSheet({ p }) {
  return (
    <g transform="translate(40, 80)">
      <path d="M10 10 L320 10 L300 150 L0 150 Z" fill="white" stroke={p.tone} strokeWidth="2" />
      {/* corrugations */}
      {Array.from({ length: 9 }).map((_, i) => {
        const x1 = 10 + i * 34;
        const x2 = x1 - 4;
        return (
          <g key={i}>
            <path d={`M${x1} 10 L${x2 + 4} 150`} stroke={p.tone} strokeWidth="2.5" opacity="0.85" />
            <path d={`M${x1 + 10} 10 L${x2 + 14} 150`} stroke={p.accent} strokeWidth="6" opacity="0.4" />
          </g>
        );
      })}
      {/* roof ridge shadow */}
      <path d="M10 10 L320 10 L320 22 L10 22 Z" fill={p.tone} opacity="0.15" />
    </g>
  );
}

function RoofTile({ p }) {
  return (
    <g transform="translate(60, 90)">
      {Array.from({ length: 3 }).map((_, row) => (
        <g key={row} transform={`translate(${row % 2 === 0 ? 0 : 14}, ${row * 36})`}>
          {Array.from({ length: 6 }).map((_, c) => (
            <path
              key={c}
              d={`M${c * 44} 0 L${c * 44 + 38} 0 L${c * 44 + 44} 38 L${c * 44 + 4} 38 Z`}
              fill="white"
              stroke={p.tone}
              strokeWidth="1.6"
            />
          ))}
        </g>
      ))}
      <rect x="0" y="0" width="300" height="124" fill={p.accent} opacity="0.12" />
    </g>
  );
}

function Pipe({ p }) {
  return (
    <g transform="translate(40, 110)">
      <rect x="0" y="20" width="240" height="40" rx="6" fill="white" stroke={p.tone} strokeWidth="2.5" />
      <rect x="0" y="20" width="240" height="14" rx="6" fill={p.tone} opacity="0.18" />
      {/* socket */}
      <rect x="240" y="10" width="50" height="60" rx="8" fill="white" stroke={p.tone} strokeWidth="2.5" />
      <rect x="246" y="20" width="38" height="40" rx="4" fill={p.tone} opacity="0.12" />
      {/* ribs */}
      <path d="M255 10 v60 M275 10 v60" stroke={p.tone} strokeWidth="1.5" opacity="0.4" />
      <text x="120" y="46" textAnchor="middle" fill={p.tone} fontFamily="Inter, sans-serif" fontWeight="700" fontSize="11">PVC · Class B</text>
    </g>
  );
}

function Cable({ p }) {
  return (
    <g transform="translate(110, 60)">
      <circle cx="90" cy="90" r="80" fill="white" stroke={p.tone} strokeWidth="2" />
      <circle cx="90" cy="90" r="60" fill="none" stroke={p.tone} strokeWidth="2" opacity="0.7" />
      <circle cx="90" cy="90" r="40" fill="none" stroke={p.tone} strokeWidth="2" opacity="0.5" />
      <circle cx="90" cy="90" r="20" fill={p.tone} />
      <circle cx="90" cy="90" r="6" fill={p.bg1} />
      <text x="90" y="180" textAnchor="middle" fill={p.tone} fontFamily="Inter, sans-serif" fontWeight="700" fontSize="11">2.5mm² · 90m</text>
    </g>
  );
}

function Breaker({ p }) {
  return (
    <g transform="translate(110, 50)">
      <rect x="0" y="0" width="180" height="200" rx="10" fill="white" stroke={p.tone} strokeWidth="2.5" />
      {Array.from({ length: 8 }).map((_, i) => (
        <g key={i}>
          <rect x="14" y={14 + i * 22} width="152" height="16" rx="3" fill={p.bg2} stroke={p.tone} strokeWidth="1" />
          <rect x="80" y={18 + i * 22} width="14" height="8" rx="1.5" fill={p.tone} />
        </g>
      ))}
    </g>
  );
}

function PaintCans({ p }) {
  const can = (x, color, label) => (
    <g transform={`translate(${x}, 60)`}>
      <ellipse cx="40" cy="6" rx="36" ry="8" fill="white" stroke={p.tone} strokeWidth="2" />
      <path d="M4 6 V130 Q4 142 40 142 Q76 142 76 130 V6" fill="white" stroke={p.tone} strokeWidth="2" />
      <rect x="10" y="30" width="60" height="80" fill={color} opacity="0.85" />
      <rect x="10" y="30" width="60" height="80" fill="none" stroke={p.tone} strokeWidth="1" opacity="0.4" />
      <rect x="14" y="60" width="52" height="20" fill="white" />
      <text x="40" y="74" textAnchor="middle" fill={p.tone} fontFamily="Inter, sans-serif" fontWeight="800" fontSize="11">{label}</text>
      {/* handle */}
      <path d="M14 6 Q40 -16 66 6" stroke={p.tone} strokeWidth="2" fill="none" />
    </g>
  );
  return (
    <g>
      {can(70, "#A78BFA", "5L")}
      {can(170, "#34D399", "10L")}
      {can(270, "#F59E0B", "20L")}
    </g>
  );
}

function PaintShelf({ p }) {
  return (
    <g>
      <PaintCans p={p} />
      {/* shelf */}
      <rect x="40" y="220" width="320" height="10" rx="2" fill={p.tone} />
      <path d="M50 230 V250 M350 230 V250" stroke={p.tone} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
}

function Drill({ p }) {
  return (
    <g transform="translate(60, 90)">
      {/* body */}
      <path d="M10 30 L180 30 Q200 30 200 60 L200 80 Q200 110 180 110 L100 110 L100 160 Q100 170 90 170 L60 170 Q50 170 50 160 L50 110 L10 110 Z" fill="white" stroke={p.tone} strokeWidth="2.5" strokeLinejoin="round" />
      <rect x="50" y="110" width="50" height="60" rx="4" fill={p.tone} opacity="0.15" />
      <circle cx="180" cy="70" r="14" fill={p.accent} stroke={p.tone} strokeWidth="2" />
      <rect x="195" y="62" width="80" height="16" rx="4" fill={p.tone} />
      <rect x="270" y="64" width="20" height="12" fill={p.tone} />
      {/* battery */}
      <rect x="48" y="170" width="56" height="12" rx="2" fill={p.tone} />
    </g>
  );
}

function Timber({ p }) {
  return (
    <g transform="translate(40, 70)">
      {[0, 22, 44, 66, 88, 110, 132].map((y, i) => (
        <g key={i}>
          <rect x="0" y={y} width="320" height="20" fill={i % 2 === 0 ? "#F5DEB3" : "#E8C58A"} stroke={p.tone} strokeWidth="1.5" />
          {/* grain */}
          <path d={`M10 ${y + 10} Q60 ${y + 6} 120 ${y + 12} T240 ${y + 9} T320 ${y + 11}`} stroke={p.tone} strokeWidth="1" fill="none" opacity="0.35" />
          <path d={`M20 ${y + 14} Q90 ${y + 18} 200 ${y + 13} T320 ${y + 16}`} stroke={p.tone} strokeWidth="1" fill="none" opacity="0.25" />
        </g>
      ))}
      {/* end-grain ring on right edge */}
      {[0, 22, 44, 66, 88, 110, 132].map((y, i) => (
        <g key={`e${i}`}>
          <circle cx="316" cy={y + 10} r="3" fill={p.tone} opacity="0.35" />
          <circle cx="316" cy={y + 10} r="6" fill="none" stroke={p.tone} strokeWidth="0.8" opacity="0.3" />
        </g>
      ))}
    </g>
  );
}

function Tile({ p }) {
  return (
    <g transform="translate(70, 60)">
      <rect x="0" y="0" width="260" height="180" fill={p.bg2} stroke={p.tone} strokeWidth="2" />
      <line x1="130" y1="0" x2="130" y2="180" stroke={p.tone} strokeWidth="2" opacity="0.6" />
      <line x1="0" y1="90" x2="260" y2="90" stroke={p.tone} strokeWidth="2" opacity="0.6" />
      {[[10, 10], [140, 10], [10, 100], [140, 100]].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="110" height="70" fill="white" stroke={p.tone} strokeWidth="1" opacity="0.7" />
      ))}
    </g>
  );
}

function RidgeCap({ p }) {
  return (
    <g transform="translate(60, 110)">
      {/* perspective view of a ridge cap */}
      <path d="M0 80 L140 0 L280 80 L240 100 L140 30 L40 100 Z" fill="white" stroke={p.tone} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M0 80 L140 0 L280 80 L240 100 L140 30 L40 100 Z" fill={p.accent} opacity="0.2" />
      <path d="M40 100 L40 130 L240 130 L240 100" fill={p.tone} opacity="0.15" stroke={p.tone} strokeWidth="2" />
      {/* corrugation along ridge */}
      {[20, 50, 80, 110, 140, 170, 200, 230, 260].map((x) => (
        <line key={x} x1={x} y1={80 - Math.abs(x - 140) * 0.55} x2={x} y2={110 - Math.abs(x - 140) * 0.55} stroke={p.tone} strokeWidth="1.5" opacity="0.5" />
      ))}
    </g>
  );
}

function Fasteners({ p }) {
  const nail = (x, y) => (
    <g transform={`translate(${x}, ${y})`}>
      <circle cx="0" cy="0" r="9" fill={p.tone} />
      <circle cx="0" cy="0" r="9" fill="white" opacity="0.15" />
      <path d="M-1 6 L-3 70 L0 76 L3 70 L1 6 Z" fill={p.tone} />
      {/* thread */}
      <path d="M-3 20 L3 25 M-3 30 L3 35 M-3 40 L3 45 M-3 50 L3 55 M-3 60 L3 65" stroke="white" strokeWidth="0.8" opacity="0.6" />
    </g>
  );
  return (
    <g>
      {nail(120, 90)}
      {nail(160, 80)}
      {nail(200, 100)}
      {nail(240, 85)}
      {nail(280, 95)}
      {/* hex head accent */}
      <g transform="translate(160, 80)">
        <polygon points="0,-12 10,-6 10,6 0,12 -10,6 -10,-6" fill="none" stroke={p.tone} strokeWidth="1" opacity="0.4" />
      </g>
    </g>
  );
}

function Gutter({ p }) {
  return (
    <g transform="translate(40, 100)">
      {/* half-round gutter, side view */}
      <path d="M10 0 L310 0 L310 20 Q310 80 270 80 L50 80 Q10 80 10 20 Z" fill="white" stroke={p.tone} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M10 0 L310 0 L310 20 Q310 80 270 80 L50 80 Q10 80 10 20 Z" fill={p.accent} opacity="0.2" />
      <ellipse cx="160" cy="40" rx="148" ry="12" fill={p.tone} opacity="0.15" />
      {/* end cap */}
      <path d="M10 0 Q10 80 50 80" stroke={p.tone} strokeWidth="2" fill="none" />
      {/* downspout exit */}
      <rect x="140" y="78" width="42" height="60" fill="white" stroke={p.tone} strokeWidth="2.5" />
      <rect x="140" y="78" width="42" height="60" fill={p.tone} opacity="0.12" />
    </g>
  );
}

function Flashing({ p }) {
  return (
    <g transform="translate(60, 110)">
      {/* L-shaped flashing in perspective */}
      <path d="M0 60 L40 0 L280 0 L240 60 Z" fill="white" stroke={p.tone} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M0 60 L240 60 L240 120 L0 120 Z" fill="white" stroke={p.tone} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M0 60 L40 0 L280 0 L240 60 Z" fill={p.accent} opacity="0.25" />
      <path d="M0 60 L240 60 L240 120 L0 120 Z" fill={p.tone} opacity="0.1" />
      {/* edge highlights */}
      <line x1="40" y1="0" x2="0" y2="60" stroke={p.tone} strokeWidth="2" />
      <line x1="280" y1="0" x2="240" y2="60" stroke={p.tone} strokeWidth="2" />
    </g>
  );
}

function Waterproof({ p }) {
  return (
    <g transform="translate(80, 80)">
      {/* membrane roll */}
      <ellipse cx="120" cy="40" rx="120" ry="22" fill="white" stroke={p.tone} strokeWidth="2.5" />
      <rect x="0" y="40" width="240" height="80" fill="white" stroke={p.tone} strokeWidth="2.5" />
      <ellipse cx="120" cy="120" rx="120" ry="22" fill={p.bg2} stroke={p.tone} strokeWidth="2.5" />
      <ellipse cx="120" cy="40" rx="60" ry="11" fill={p.tone} opacity="0.2" />
      {/* unrolled tail */}
      <path d="M0 120 L-40 150 L260 150 L240 120 Z" fill={p.accent} opacity="0.35" stroke={p.tone} strokeWidth="2" strokeLinejoin="round" />
      {/* texture stripes */}
      {[60, 80, 100].map((y) => (
        <line key={y} x1="0" y1={y} x2="240" y2={y} stroke={p.tone} strokeWidth="1" opacity="0.25" />
      ))}
    </g>
  );
}

function GenericBox({ p }) {
  return (
    <g transform="translate(120, 80)">
      <path d="M0 30 L80 0 L160 30 L160 130 L80 160 L0 130 Z" fill="white" stroke={p.tone} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M0 30 L80 60 L160 30" stroke={p.tone} strokeWidth="2" fill="none" />
      <path d="M80 60 L80 160" stroke={p.tone} strokeWidth="2" />
      <path d="M0 30 L80 0 L160 30 L80 60 Z" fill={p.tone} opacity="0.1" />
    </g>
  );
}

function Helmet({ p }) {
  return (
    <g transform="translate(110, 70)">
      <path d="M10 110 Q10 30 90 30 Q170 30 170 110 Z" fill={p.accent} stroke={p.tone} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M10 110 Q10 30 90 30 Q170 30 170 110 Z" fill="url(#helmetShine)" />
      <defs>
        <linearGradient id="helmetShine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 110 L180 110 L175 130 L5 130 Z" fill="white" stroke={p.tone} strokeWidth="2" />
      <path d="M90 30 V110 M50 36 V108 M130 36 V108" stroke={p.tone} strokeWidth="2" opacity="0.4" />
      <circle cx="90" cy="50" r="5" fill="white" stroke={p.tone} strokeWidth="1.5" />
    </g>
  );
}

function Gumboot({ p }) {
  return (
    <g transform="translate(120, 70)">
      <path d="M40 10 L100 10 L100 110 L150 110 L150 180 L40 180 Z" fill={p.accent} stroke={p.tone} strokeWidth="2.5" strokeLinejoin="round" />
      <rect x="35" y="178" width="120" height="14" rx="3" fill={p.tone} />
      {/* sole grip */}
      {[42, 60, 78, 96, 114, 132, 150].map((x) => (
        <line key={x} x1={x} y1="182" x2={x} y2="190" stroke="white" strokeWidth="1.5" opacity="0.6" />
      ))}
      <path d="M40 10 L100 10 L100 30 L40 30 Z" fill={p.tone} opacity="0.15" />
      <path d="M40 110 L100 110" stroke={p.tone} strokeWidth="1.5" opacity="0.4" />
    </g>
  );
}

function Glove({ p }) {
  return (
    <g transform="translate(130, 70)">
      <path d="M20 80 Q20 40 50 40 L50 20 Q50 10 60 10 Q70 10 70 20 L70 38 L80 38 L80 16 Q80 6 90 6 Q100 6 100 16 L100 40 L110 40 L110 22 Q110 12 120 12 Q130 12 130 22 L130 50 L140 50 L140 38 Q140 30 148 30 Q156 30 156 38 L156 100 Q156 170 88 170 Q20 170 20 110 Z" fill={p.accent} stroke={p.tone} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M20 110 Q20 170 88 170 Q156 170 156 110 L156 130 L20 130 Z" fill={p.tone} opacity="0.15" />
    </g>
  );
}

function Mask({ p }) {
  return (
    <g transform="translate(100, 90)">
      <path d="M0 40 Q0 20 30 20 L170 20 Q200 20 200 40 L200 80 Q200 110 100 130 Q0 110 0 80 Z" fill="white" stroke={p.tone} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M0 60 Q100 70 200 60" stroke={p.tone} strokeWidth="1.5" opacity="0.4" fill="none" />
      <path d="M0 80 Q100 90 200 80" stroke={p.tone} strokeWidth="1.5" opacity="0.4" fill="none" />
      <circle cx="100" cy="50" r="14" fill={p.bg2} stroke={p.tone} strokeWidth="2" />
      <text x="100" y="55" textAnchor="middle" fill={p.tone} fontFamily="Inter, sans-serif" fontWeight="800" fontSize="10">N95</text>
      {/* straps */}
      <path d="M5 30 L-30 0 M195 30 L230 0 M5 100 L-30 130 M195 100 L230 130" stroke={p.tone} strokeWidth="2" fill="none" />
    </g>
  );
}

function Padlock({ p }) {
  return (
    <g transform="translate(140, 60)">
      <path d="M30 50 V35 Q30 5 60 5 Q90 5 90 35 V50" stroke={p.tone} strokeWidth="8" fill="none" strokeLinecap="round" />
      <rect x="5" y="50" width="110" height="100" rx="10" fill={p.accent} stroke={p.tone} strokeWidth="2.5" />
      <rect x="5" y="50" width="110" height="100" rx="10" fill="url(#padShine)" />
      <defs>
        <linearGradient id="padShine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="100" r="10" fill={p.tone} />
      <rect x="56" y="100" width="8" height="22" fill={p.tone} />
    </g>
  );
}

function Window({ p }) {
  return (
    <g transform="translate(70, 50)">
      <rect x="0" y="0" width="260" height="200" rx="4" fill={p.bg2} stroke={p.tone} strokeWidth="4" />
      <rect x="10" y="10" width="118" height="85" fill="white" stroke={p.tone} strokeWidth="2" />
      <rect x="132" y="10" width="118" height="85" fill="white" stroke={p.tone} strokeWidth="2" />
      <rect x="10" y="105" width="118" height="85" fill="white" stroke={p.tone} strokeWidth="2" />
      <rect x="132" y="105" width="118" height="85" fill="white" stroke={p.tone} strokeWidth="2" />
      {/* glass shine */}
      <path d="M15 15 L70 15 L40 90 L15 90 Z" fill="white" opacity="0.6" />
      <path d="M137 15 L192 15 L162 90 L137 90 Z" fill="white" opacity="0.6" />
      {/* handle */}
      <rect x="124" y="92" width="14" height="22" rx="2" fill={p.tone} />
    </g>
  );
}

function WaterTank({ p, brand = "kentank" }) {
  // Brand-specific styling so Kentank, Roto and Techno-Tank look distinct.
  const brands = {
    kentank: { body: "#1F2937", labelBg: "#FACC15", labelFg: "#1F2937", text: "KENTANK",     sub: "STORING WATER · FOR HEALTHY LIVING" },
    roto:    { body: "#0F172A", labelBg: "#DC2626", labelFg: "#FFFFFF", text: "ROTO",        sub: "MADE HEAVIER TO LAST LONGER" },
    techno:  { body: "#111827", labelBg: "#0EA5E9", labelFg: "#FFFFFF", text: "TECHNO-TANK", sub: "HARVEST · STORE · USE" },
    default: { body: p.accent,  labelBg: "#FACC15", labelFg: "#1F2937", text: "WATER TANK",  sub: "POLYETHYLENE STORAGE TANK" },
  };
  const bk = brands[brand] || brands.default;
  const bodyColor = bk.body;
  const labelBg = bk.labelBg;
  const labelText = bk.labelFg;
  return (
    <g transform="translate(110, 40)">
      <ellipse cx="90" cy="20" rx="80" ry="14" fill="#374151" stroke="#0F172A" strokeWidth="2" />
      <path d="M10 20 V190 Q10 215 90 215 Q170 215 170 190 V20" fill={bodyColor} stroke="#0F172A" strokeWidth="2.5" />
      <path d="M10 20 V190 Q10 215 90 215 Q170 215 170 190 V20" fill="url(#tankShine)" />
      <defs>
        <linearGradient id="tankShine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.35" />
          <stop offset="40%" stopColor="white" stopOpacity="0" />
          <stop offset="100%" stopColor="black" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <ellipse cx="90" cy="20" rx="80" ry="14" fill="#1F2937" stroke="#0F172A" strokeWidth="2" />
      <ellipse cx="90" cy="20" rx="36" ry="5" fill="#0F172A" opacity="0.6" />
      {/* corrugation rings */}
      {[44, 64, 84, 104, 124, 144, 164, 184].map((y) => (
        <ellipse key={y} cx="90" cy={y} rx="80" ry="5" fill="none" stroke="#0F172A" strokeWidth="1" opacity="0.5" />
      ))}
      {/* brand label */}
      <rect x="22" y="76" width="136" height="36" rx="2" fill={labelBg} stroke="#0F172A" strokeWidth="1.5" />
      <text x="90" y="100" textAnchor="middle" fill={labelText} fontFamily="Inter, sans-serif" fontWeight="900" fontSize="20" letterSpacing="1">
        {bk.text}
      </text>
      <text x="90" y="124" textAnchor="middle" fill="white" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="7" opacity="0.85" letterSpacing="0.5">
        {bk.sub}
      </text>
      {/* tap */}
      <rect x="170" y="188" width="18" height="6" fill="#0F172A" />
      <rect x="180" y="190" width="6" height="16" fill="#0F172A" />
    </g>
  );
}

function HDPECoil() {
  // Stacked black coils of HDPE pipe with blue stripe.
  const coil = (cx, cy, scale = 1) => (
    <g transform={`translate(${cx}, ${cy}) scale(${scale})`}>
      <ellipse cx="0" cy="0" rx="80" ry="22" fill="#1F2937" stroke="#0F172A" strokeWidth="2" />
      <ellipse cx="0" cy="0" rx="80" ry="22" fill="url(#coilShine)" />
      <ellipse cx="0" cy="0" rx="50" ry="13" fill="#111827" stroke="#0F172A" strokeWidth="1" />
      <ellipse cx="0" cy="0" rx="25" ry="6" fill="#1F2937" />
      {/* blue stripe — printed on HDPE pipes */}
      <ellipse cx="0" cy="-2" rx="80" ry="22" fill="none" stroke="#3B82F6" strokeWidth="1.5" />
      <ellipse cx="0" cy="6" rx="78" ry="21" fill="none" stroke="#3B82F6" strokeWidth="1.5" />
    </g>
  );
  return (
    <g>
      <defs>
        <linearGradient id="coilShine" x1="0" y1="-1" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.25" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      {coil(120, 80, 0.85)}
      {coil(280, 95, 0.85)}
      {coil(200, 170, 1)}
      {coil(110, 230, 0.9)}
      {coil(290, 240, 0.9)}
    </g>
  );
}

function GalvanisedPipes({ p }) {
  // Bundle of silver galvanised steel pipes, end-on view.
  const pipe = (cx, cy) => (
    <g transform={`translate(${cx}, ${cy})`}>
      <circle cx="0" cy="0" r="20" fill="#CBD5E1" stroke="#475569" strokeWidth="1.5" />
      <circle cx="0" cy="0" r="14" fill="#64748B" stroke="#334155" strokeWidth="1" />
      <circle cx="0" cy="0" r="10" fill="#1F2937" />
      <path d="M-12 -10 Q-6 -16 6 -14" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
    </g>
  );
  // grid of pipes, hexagonal packing
  const positions = [];
  const rows = 5;
  for (let r = 0; r < rows; r++) {
    const cols = 9 - (r % 2);
    for (let c = 0; c < cols; c++) {
      const x = 50 + c * 38 + (r % 2 ? 0 : 19);
      const y = 80 + r * 34;
      positions.push([x, y]);
    }
  }
  return (
    <g>
      {/* strap */}
      <rect x="30" y="60" width="340" height="200" fill="#94A3B8" opacity="0.15" />
      {positions.map(([x, y], i) => (
        <g key={i}>{pipe(x, y)}</g>
      ))}
      <text x="200" y="295" textAnchor="middle" fill={p.tone} fontFamily="Inter, sans-serif" fontWeight="700" fontSize="11">GALVANISED STEEL PIPES</text>
    </g>
  );
}

function Manhole({ p }) {
  return (
    <g transform="translate(110, 80)">
      <ellipse cx="90" cy="80" rx="80" ry="18" fill={p.tone} />
      <circle cx="90" cy="70" r="80" fill={p.accent} stroke={p.tone} strokeWidth="3" />
      <circle cx="90" cy="70" r="68" fill="none" stroke={p.tone} strokeWidth="1.5" opacity="0.5" />
      {/* radial pattern */}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i / 12) * Math.PI * 2;
        return (
          <line
            key={i}
            x1={90 + Math.cos(a) * 18}
            y1={70 + Math.sin(a) * 18}
            x2={90 + Math.cos(a) * 60}
            y2={70 + Math.sin(a) * 60}
            stroke={p.tone}
            strokeWidth="1.5"
            opacity="0.5"
          />
        );
      })}
      <circle cx="90" cy="70" r="14" fill={p.tone} />
      <text x="90" y="74" textAnchor="middle" fill="white" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="10">TH</text>
    </g>
  );
}

function Generator({ p }) {
  return (
    <g transform="translate(70, 80)">
      {/* body */}
      <rect x="0" y="40" width="260" height="120" rx="10" fill="white" stroke={p.tone} strokeWidth="2.5" />
      <rect x="0" y="40" width="260" height="40" rx="10" fill={p.tone} opacity="0.15" />
      {/* fuel tank */}
      <rect x="20" y="0" width="220" height="50" rx="10" fill={p.accent} stroke={p.tone} strokeWidth="2.5" />
      <circle cx="200" cy="20" r="8" fill={p.tone} />
      {/* control panel */}
      <rect x="20" y="92" width="100" height="50" rx="4" fill={p.bg2} stroke={p.tone} strokeWidth="1.5" />
      <circle cx="40" cy="115" r="6" fill={p.tone} />
      <circle cx="60" cy="115" r="6" fill="#10B981" />
      <rect x="74" y="105" width="36" height="20" rx="2" fill={p.tone} />
      <text x="92" y="120" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">2.5kVA</text>
      {/* socket */}
      <rect x="160" y="100" width="80" height="42" rx="4" fill={p.bg1} stroke={p.tone} strokeWidth="1.5" />
      <circle cx="180" cy="121" r="5" fill={p.tone} />
      <circle cx="220" cy="121" r="5" fill={p.tone} />
      {/* wheels */}
      <circle cx="40" cy="170" r="14" fill={p.tone} />
      <circle cx="220" cy="170" r="14" fill={p.tone} />
    </g>
  );
}

function ChainLink({ p }) {
  return (
    <g transform="translate(70, 50)">
      <rect x="0" y="0" width="260" height="200" fill="white" />
      {Array.from({ length: 8 }).map((_, row) =>
        Array.from({ length: 11 }).map((_, col) => {
          const x = col * 26 + (row % 2 ? 13 : 0);
          const y = row * 26;
          return (
            <g key={`${row}-${col}`} stroke={p.tone} strokeWidth="1.6" fill="none">
              <path d={`M${x} ${y + 13} L${x + 13} ${y} L${x + 26} ${y + 13} L${x + 13} ${y + 26} Z`} />
            </g>
          );
        })
      )}
      {/* top wire */}
      <line x1="0" y1="0" x2="260" y2="0" stroke={p.tone} strokeWidth="3" />
      <line x1="0" y1="200" x2="260" y2="200" stroke={p.tone} strokeWidth="3" />
    </g>
  );
}

function BarbedWire({ p }) {
  const barb = (x, y) => (
    <g transform={`translate(${x}, ${y})`} stroke={p.tone} strokeWidth="1.8" strokeLinecap="round">
      <line x1="-8" y1="-8" x2="8" y2="8" />
      <line x1="-8" y1="8" x2="8" y2="-8" />
    </g>
  );
  return (
    <g>
      {[80, 130, 180].map((y) => (
        <g key={y}>
          <line x1="20" y1={y} x2="380" y2={y} stroke={p.tone} strokeWidth="2.5" />
          {[60, 130, 200, 270, 340].map((x) => barb(x, y))}
        </g>
      ))}
      <text x="200" y="240" textAnchor="middle" fill={p.tone} fontFamily="Inter, sans-serif" fontWeight="700" fontSize="12">BARBED WIRE · 20kg COIL</text>
    </g>
  );
}

function WateringCan({ p }) {
  return (
    <g transform="translate(60, 90)">
      <path d="M40 50 L40 150 Q40 170 60 170 L180 170 Q200 170 200 150 L200 50 Z" fill={p.accent} stroke={p.tone} strokeWidth="2.5" strokeLinejoin="round" />
      <ellipse cx="120" cy="50" rx="80" ry="14" fill="white" stroke={p.tone} strokeWidth="2.5" />
      {/* handle */}
      <path d="M120 36 Q120 0 170 0 Q200 0 200 50" stroke={p.tone} strokeWidth="5" fill="none" />
      {/* spout */}
      <path d="M200 90 L280 50 L300 60 L260 100 L200 130 Z" fill={p.accent} stroke={p.tone} strokeWidth="2.5" strokeLinejoin="round" />
      <ellipse cx="290" cy="55" rx="12" ry="8" fill="white" stroke={p.tone} strokeWidth="2" />
      {[286, 290, 294].map((cx) => (
        <circle key={cx} cx={cx} cy="55" r="1.3" fill={p.tone} />
      ))}
    </g>
  );
}

function Mirror({ p }) {
  return (
    <g transform="translate(110, 50)">
      <rect x="0" y="0" width="180" height="220" rx="8" fill={p.tone} />
      <rect x="10" y="10" width="160" height="200" rx="4" fill="url(#mirrorShine)" stroke={p.bg2} strokeWidth="1" />
      <defs>
        <linearGradient id="mirrorShine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E0F2FE" />
          <stop offset="40%" stopColor="#F0F9FF" />
          <stop offset="100%" stopColor="#BAE6FD" />
        </linearGradient>
      </defs>
      {/* sparkle */}
      <path d="M40 30 L48 50 L68 58 L48 66 L40 86 L32 66 L12 58 L32 50 Z" fill="white" opacity="0.7" />
      <circle cx="130" cy="160" r="4" fill="white" opacity="0.7" />
    </g>
  );
}

function Hammer({ p }) {
  return (
    <g transform="translate(80, 80)">
      {/* head */}
      <path d="M40 0 L180 0 L200 30 L170 50 L70 50 L40 30 Z" fill={p.tone} stroke={p.tone} strokeWidth="2" strokeLinejoin="round" />
      <path d="M180 0 L160 -8 L160 58 L180 50" fill={p.tone} />
      {/* claw */}
      <path d="M40 0 L20 -6 L0 8 L20 16 L40 10" fill={p.tone} />
      <path d="M10 8 Q14 18 24 14" stroke="white" strokeWidth="2" fill="none" />
      {/* handle */}
      <path d="M100 50 L120 50 L160 200 L130 200 Z" fill={p.accent} stroke={p.tone} strokeWidth="2" strokeLinejoin="round" />
      <path d="M125 100 L155 100 M128 140 L156 140 M132 180 L160 180" stroke={p.tone} strokeWidth="1.5" opacity="0.5" />
    </g>
  );
}

function Spade({ p }) {
  return (
    <g transform="translate(150, 30)">
      {/* handle */}
      <rect x="40" y="0" width="20" height="170" rx="3" fill={p.accent} stroke={p.tone} strokeWidth="2" />
      {/* grip */}
      <path d="M30 0 L70 0 L65 20 L35 20 Z" fill={p.tone} />
      <ellipse cx="50" cy="20" rx="22" ry="6" fill={p.tone} />
      {/* blade */}
      <path d="M20 170 L80 170 L72 240 L28 240 Z" fill={p.tone} stroke={p.tone} strokeWidth="2" strokeLinejoin="round" />
      <path d="M28 240 L50 250 L72 240" fill={p.tone} />
      <path d="M20 170 L80 170 L72 240 L28 240 Z" fill="url(#bladeShine)" />
      <defs>
        <linearGradient id="bladeShine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </g>
  );
}

function Ladder({ p }) {
  return (
    <g transform="translate(90, 30)">
      <line x1="30" y1="0" x2="50" y2="240" stroke={p.tone} strokeWidth="6" strokeLinecap="round" />
      <line x1="190" y1="0" x2="170" y2="240" stroke={p.tone} strokeWidth="6" strokeLinecap="round" />
      {[35, 70, 105, 140, 175, 210].map((y) => (
        <line key={y} x1={30 + (y * 20) / 240} y1={y} x2={190 - (y * 20) / 240} y2={y} stroke={p.accent} strokeWidth="6" strokeLinecap="round" />
      ))}
    </g>
  );
}

function HollowSection({ p }) {
  return (
    <g transform="translate(40, 110)">
      <path d="M20 30 L320 0 L340 0 L40 30 Z" fill={p.tone} opacity="0.4" />
      <rect x="20" y="30" width="300" height="50" fill="white" stroke={p.tone} strokeWidth="2.5" />
      <rect x="20" y="30" width="300" height="14" fill={p.accent} opacity="0.4" />
      <rect x="320" y="30" width="20" height="50" fill={p.bg2} stroke={p.tone} strokeWidth="2.5" />
      {/* inner hollow */}
      <rect x="328" y="38" width="8" height="34" fill={p.tone} opacity="0.4" />
      <text x="170" y="115" textAnchor="middle" fill={p.tone} fontFamily="Inter, sans-serif" fontWeight="700" fontSize="12">HOLLOW SECTION · 6m</text>
    </g>
  );
}

function SolarPanel({ p }) {
  return (
    <g transform="translate(80, 60)">
      <path d="M20 0 L220 20 L200 160 L0 140 Z" fill="#1E3A8A" stroke={p.tone} strokeWidth="2.5" strokeLinejoin="round" />
      {/* cells */}
      {Array.from({ length: 6 }).map((_, r) =>
        Array.from({ length: 4 }).map((_, c) => (
          <rect
            key={`${r}-${c}`}
            x={10 + c * 50 + r * 1.5}
            y={8 + r * 24}
            width="44"
            height="20"
            fill="#1D4ED8"
            stroke="#0F172A"
            strokeWidth="0.5"
          />
        ))
      )}
      {/* shine */}
      <path d="M20 0 L80 4 L60 100 L0 90 Z" fill="white" opacity="0.15" />
      {/* stand */}
      <path d="M100 145 L120 200 M120 145 L100 200" stroke={p.tone} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
}

function Toilet({ p }) {
  return (
    <g transform="translate(110, 50)">
      {/* tank */}
      <rect x="20" y="0" width="140" height="80" rx="6" fill="white" stroke={p.tone} strokeWidth="2.5" />
      <rect x="120" y="20" width="20" height="6" rx="1" fill={p.tone} />
      {/* bowl */}
      <path d="M10 80 L170 80 L150 200 Q90 220 30 200 Z" fill="white" stroke={p.tone} strokeWidth="2.5" strokeLinejoin="round" />
      <ellipse cx="90" cy="140" rx="60" ry="36" fill={p.bg2} stroke={p.tone} strokeWidth="2" />
      <ellipse cx="90" cy="140" rx="40" ry="20" fill={p.tone} opacity="0.2" />
    </g>
  );
}

// Detect a brand keyword in a product name so the illustration matches.
function detectBrand(name = "") {
  const n = name.toLowerCase();
  if (n.includes("simba")) return "simba";
  if (n.includes("savannah") || n.includes("savana")) return "savannah";
  if (n.includes("bamburi") || n.includes("nguvu")) return "bamburi";
  if (n.includes("tembo")) return "tembo";
  if (n.includes("kentank")) return "kentank";
  if (n.includes("roto")) return "roto";
  if (n.includes("techno")) return "techno";
  return null;
}

function Ballast(props) { return <Aggregate {...props} kind="ballast" />; }
function Sand(props) { return <Aggregate {...props} kind="sand" />; }

// Map a product to the right illustration based on keywords in its name.
function pickIllustration(name = "", category = "") {
  const n = name.toLowerCase();

  // Aggregates
  if (/(ballast|hardcore|gravel|aggregate|chips)/.test(n)) return Ballast;
  if (/(sand)/.test(n)) return Sand;

  // Cement & concrete
  if (/(cement|nguvu|portland|tembo|simba|bamburi|savannah|savana)/.test(n)) return CementBag;

  // Steel / metal
  if (/(brc|reinforcement mesh)/.test(n)) return BRCMesh;
  if (/(binding wire|hoop iron|hoop|wire.*coil)/.test(n)) return HoopWire;
  if (/(galvanised|galvanized|gi pipe|steel pipe)/.test(n)) return GalvanisedPipes;
  if (/(y\d{1,2}|deformed|rebar|reinforcement bar|steel bar|round bar|r\d)/.test(n)) return SteelBar;
  if (/(square tube|hollow section|angle bar|flat bar|expanded metal|metal sheet)/.test(n)) return HollowSection;

  // Roofing
  if (/wheelbarrow/.test(n)) return Wheelbarrow;
  if (/(ridge cap|ridge)/.test(n)) return RidgeCap;
  if (/(roofing nail|roofing screw|roof.*nail|roof.*screw|nail|screw|bolt|nut)/.test(n)) return Fasteners;
  if (/(gutter|downpipe)/.test(n)) return Gutter;
  if (/(flashing)/.test(n)) return Flashing;
  if (/(waterproof|membrane|bitumen)/.test(n)) return Waterproof;
  if (/(mabati|box profile|corrugated|iron sheet|gauge.*sheet)/.test(n)) return RoofingSheet;
  if (/(roof tile|stone coated|decra|resincoat|tile.*roof)/.test(n)) return RoofTile;

  // Plumbing / water
  if (/(toilet|wc|cistern)/.test(n)) return Toilet;
  if (/(hdpe|irrigation pipe|water pipe.*coil|coil.*pipe)/.test(n)) return HDPECoil;
  if (/(pvc|copper pipe|ppr|plumb|drainage|conduit|downpipe|pipe)/.test(n)) return Pipe;

  // Electrical
  if (/(solar panel|solar light|inverter|battery)/.test(n)) return SolarPanel;
  if (/(cable|conductor|extension|core.*\d)/.test(n)) return Cable;
  if (/(mcb|distribution board|consumer unit|circuit breaker|breaker|switch|socket|bulb|led|floodlight)/.test(n)) return Breaker;

  // Paint
  if (/(emulsion|enamel|weatherguard|paint|undercoat|primer|varnish|thinner|gloss|spray|texture|brush|roller)/.test(n)) return PaintShelf;

  // Tools
  if (/(spade|jembe|hoe|shovel|fork)/.test(n)) return Spade;
  if (/(hammer.*claw|claw hammer|sledge|mallet)/.test(n)) return Hammer;
  if (/(ladder)/.test(n)) return Ladder;
  if (/(generator|inverter generator)/.test(n)) return Generator;
  if (/(drill|rotary|grinder|saw|impact|welding machine|welder|measuring tape|tape measure)/.test(n)) return Drill;

  // Timber
  if (/(timber|plywood|hardboard|plank|board|lumber|cypress|mvule|mahogany|pine|batten|cedar)/.test(n)) return Timber;

  // Hardware & fasteners
  if (/(hinge|padlock|lock|handle|knob|cabinet fitting)/.test(n)) return Padlock;
  if (/(chicken mesh|chain link|wire mesh|fencing)/.test(n)) return ChainLink;
  if (/(barbed wire)/.test(n)) return BarbedWire;

  // Safety
  if (/(helmet|hard hat)/.test(n)) return Helmet;
  if (/(gumboot|safety boot|rain boot)/.test(n)) return Gumboot;
  if (/(glove)/.test(n)) return Glove;
  if (/(mask|n95|respirator|dust mask)/.test(n)) return Mask;
  if (/(reflective|jacket|vest|harness)/.test(n)) return Helmet;

  // Agricultural / outdoor
  if (/(watering can|water can)/.test(n)) return WateringCan;
  if (/(fence post|fencing post|electric fence|greenhouse)/.test(n)) return ChainLink;

  // Glass & aluminium
  if (/(window|glass door|aluminium profile|aluminium)/.test(n)) return Window;
  if (/(mirror|shower)/.test(n)) return Mirror;

  // Water & sanitation
  if (/(water tank|septic tank|bio digester|tank)/.test(n)) return WaterTank;
  if (/(manhole|water meter)/.test(n)) return Manhole;

  // Tiles
  if (/(tile adhesive|grout|laminate|vinyl)/.test(n)) return Tile;
  if (/(tile|porcelain|ceramic|marble)/.test(n)) return Tile;

  // category fallback
  if (category === "Cement & Concrete") return CementBag;
  if (category === "Steel & Reinforcement") return SteelBar;
  if (category === "Roofing Materials") return RoofingSheet;
  if (category === "Plumbing Materials") return Pipe;
  if (category === "Electrical Supplies") return Cable;
  if (category === "Paint & Finishing") return PaintShelf;
  if (category === "Tools & Equipment") return Drill;
  if (category === "Timber & Lumber") return Timber;
  if (category === "Tiles & Flooring") return Tile;
  if (category === "Hardware & Fasteners") return Fasteners;
  if (category === "Safety Equipment") return Helmet;
  if (category === "Agricultural & Outdoor") return ChainLink;
  if (category === "Glass & Aluminium") return Window;
  if (category === "Water & Sanitation") return WaterTank;
  return GenericBox;
}

function ProductImage({ product, className = "" }) {
  const category = product?.category;
  const p = palette[category] || palette.default;
  const brand = detectBrand(product?.name);

  // Use a stable id based on category so gradients don't collide.
  const gradId = `pg-${(category || "default").replace(/[^a-z]/gi, "")}`;
  const patternId = `pp-${(category || "default").replace(/[^a-z]/gi, "")}`;

  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className={`h-full w-full ${className}`}
      role="img"
      aria-label={product?.name || "Product"}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={p.bg1} />
          <stop offset="100%" stopColor={p.bg2} />
        </linearGradient>
        <pattern id={patternId} width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0V28" fill="none" stroke={p.tone} strokeOpacity="0.08" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="400" height="300" fill={`url(#${gradId})`} />
      <rect width="400" height="300" fill={`url(#${patternId})`} />

      {createElement(pickIllustration(product?.name, category), { p, brand })}

      <line x1="20" y1="270" x2="380" y2="270" stroke={p.tone} strokeWidth="1" strokeDasharray="4 6" opacity="0.25" />

      <text
        x="380"
        y="290"
        textAnchor="end"
        fontFamily="Inter, sans-serif"
        fontWeight="700"
        fontSize="10"
        fill={p.tone}
        opacity="0.55"
      >
        THAANA HARDWARE
      </text>
    </svg>
  );
}

export default ProductImage;
