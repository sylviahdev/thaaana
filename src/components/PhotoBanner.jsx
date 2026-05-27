import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ─────────────────────────────────────────────────────────────────────────
// Painterly SVG scenes — stand in for showroom/site photography until real
// imagery is dropped in. Each is laid out on a 1600×534 (3:1) artboard with
// soft gradients, depth-of-field bloom and rim light to read as a real photo.
// ─────────────────────────────────────────────────────────────────────────

function SanitaryScene() {
  return (
    <svg viewBox="0 0 1600 534" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="sw-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F7F6F2" />
          <stop offset="100%" stopColor="#E8E6E0" />
        </linearGradient>
        <linearGradient id="sw-light" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFF8E7" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#FFF8E7" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="sw-chrome" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8ECEF" />
          <stop offset="50%" stopColor="#9CA3AF" />
          <stop offset="100%" stopColor="#D4D9DD" />
        </linearGradient>
        <linearGradient id="sw-floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4D2CD" />
          <stop offset="100%" stopColor="#A8A7A2" />
        </linearGradient>
        <radialGradient id="sw-bloom" cx="20%" cy="30%" r="60%">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* wall + floor */}
      <rect width="1600" height="400" fill="url(#sw-wall)" />
      <rect y="400" width="1600" height="134" fill="url(#sw-floor)" />
      <line x1="0" y1="400" x2="1600" y2="400" stroke="#B8B6B0" strokeWidth="1" opacity="0.5" />

      {/* window — warm light source on the left */}
      <rect x="80" y="60" width="280" height="180" fill="#FFFDF0" />
      <rect x="80" y="60" width="280" height="180" fill="none" stroke="#D9D6CC" strokeWidth="3" />
      <line x1="220" y1="60" x2="220" y2="240" stroke="#D9D6CC" strokeWidth="2" />
      {/* light bloom across the wall */}
      <rect width="1600" height="534" fill="url(#sw-light)" opacity="0.5" />
      <rect width="1600" height="534" fill="url(#sw-bloom)" />

      {/* shelf with diffuser bottle */}
      <rect x="170" y="240" width="180" height="6" fill="#C8C5BD" />
      <rect x="220" y="200" width="22" height="44" rx="2" fill="#F2EFE6" stroke="#B5B2A8" strokeWidth="1" />
      <line x1="231" y1="195" x2="231" y2="180" stroke="#8C8779" strokeWidth="1.5" />
      <line x1="226" y1="195" x2="232" y2="180" stroke="#8C8779" strokeWidth="1.5" />

      {/* dual-flush plate on the wall */}
      <rect x="280" y="280" width="120" height="80" rx="4" fill="#EAE8E2" stroke="#B5B2A8" strokeWidth="1.5" />
      <circle cx="330" cy="320" r="18" fill="none" stroke="#8C8779" strokeWidth="2.5" />
      <circle cx="370" cy="320" r="12" fill="none" stroke="#8C8779" strokeWidth="2" />

      {/* LED-lit mirror */}
      <rect x="640" y="60" width="380" height="170" rx="6" fill="#E5E7E9" stroke="#C7CBCE" strokeWidth="2" />
      <rect x="652" y="72" width="356" height="146" rx="3" fill="#CDD2D6" />
      <rect x="648" y="68" width="364" height="6" rx="2" fill="#9FE6FF" opacity="0.85" />
      <rect x="648" y="216" width="364" height="6" rx="2" fill="#9FE6FF" opacity="0.85" />
      <rect x="700" y="125" width="240" height="40" fill="#B8BFC5" opacity="0.4" />

      {/* vanity counter */}
      <rect x="540" y="280" width="580" height="40" fill="#FAF9F7" />
      <rect x="540" y="320" width="580" height="80" fill="#EDECE8" />
      <rect x="540" y="280" width="580" height="6" fill="#D6D4CE" />

      {/* basin */}
      <rect x="680" y="278" width="300" height="44" rx="2" fill="#FFFFFF" stroke="#D9D6CC" strokeWidth="1.5" />
      <ellipse cx="830" cy="304" rx="120" ry="10" fill="#D6D4CE" opacity="0.6" />
      <circle cx="830" cy="304" r="3" fill="#9CA3AF" />

      {/* faucet */}
      <path d="M820 215 L820 250 L850 250 L850 215" fill="none" stroke="url(#sw-chrome)" strokeWidth="6" strokeLinecap="round" />
      <rect x="816" y="210" width="38" height="8" rx="2" fill="url(#sw-chrome)" />
      <rect x="830" y="250" width="10" height="22" fill="url(#sw-chrome)" />

      {/* soap dish + soap */}
      <ellipse cx="1010" cy="298" rx="34" ry="6" fill="#E5E2DA" />
      <rect x="990" y="288" width="40" height="14" rx="3" fill="#F0EFEB" />
      <rect x="998" y="282" width="24" height="10" rx="2" fill="#E8E5DB" />

      {/* freestanding tub silhouette — right side, partially in view */}
      <path d="M1180 380 Q1180 300 1280 300 L1500 300 Q1600 300 1600 380 L1600 460 Q1600 480 1580 480 L1200 480 Q1180 480 1180 460 Z" fill="#F4F2EC" stroke="#C7C4BC" strokeWidth="2" />
      <ellipse cx="1390" cy="380" rx="160" ry="14" fill="#D6D4CE" opacity="0.6" />
      {/* tub floor mixer */}
      <path d="M1130 360 L1130 420 L1130 460 L1140 460 L1148 440" fill="none" stroke="url(#sw-chrome)" strokeWidth="5" strokeLinecap="round" />
      <circle cx="1130" cy="475" r="6" fill="#9CA3AF" />

      {/* stool with towels */}
      <rect x="1020" y="400" width="120" height="60" fill="#5C5853" />
      <rect x="1030" y="395" width="100" height="14" rx="4" fill="#FFFFFF" />
      <rect x="1034" y="385" width="92" height="12" rx="3" fill="#FFFFFF" stroke="#E5E2DA" strokeWidth="1" />

      {/* depth-of-field — second vanity through doorway, blurred */}
      <g filter="url(#sw-blur)" opacity="0.6">
        <rect x="1180" y="100" width="200" height="180" fill="#DAD8D2" />
        <rect x="1210" y="140" width="140" height="100" fill="#9CA3AF" opacity="0.4" />
      </g>
      <filter id="sw-blur" x="-10%" y="-10%" width="120%" height="120%">
        <feGaussianBlur stdDeviation="6" />
      </filter>

      {/* ambient overlay */}
      <rect width="1600" height="534" fill="url(#sw-bloom)" opacity="0.4" />
    </svg>
  );
}

function CementYardScene() {
  return (
    <svg viewBox="0 0 1600 534" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="cy-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FCD9A8" />
          <stop offset="60%" stopColor="#F5C188" />
          <stop offset="100%" stopColor="#C99070" />
        </linearGradient>
        <linearGradient id="cy-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6B5B4F" />
          <stop offset="100%" stopColor="#3D332B" />
        </linearGradient>
        <linearGradient id="cy-bag" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F4EFE6" />
          <stop offset="100%" stopColor="#C9C2B3" />
        </linearGradient>
        <radialGradient id="cy-sun" cx="78%" cy="22%" r="40%">
          <stop offset="0%" stopColor="#FFF4D6" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FFF4D6" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* sky + ground */}
      <rect width="1600" height="340" fill="url(#cy-sky)" />
      <rect y="340" width="1600" height="194" fill="url(#cy-ground)" />
      <rect width="1600" height="534" fill="url(#cy-sun)" />

      {/* warehouse silhouette in the distance */}
      <polygon points="40,340 40,220 240,220 240,340" fill="#5C4D3F" />
      <polygon points="240,340 240,200 480,200 480,340" fill="#4A3D32" />
      <rect x="60" y="240" width="40" height="40" fill="#2D2620" />
      <rect x="120" y="240" width="40" height="40" fill="#2D2620" />
      <rect x="180" y="240" width="40" height="40" fill="#2D2620" />
      <rect x="280" y="220" width="50" height="50" fill="#2D2620" />
      <rect x="350" y="220" width="50" height="50" fill="#2D2620" />
      <rect x="420" y="220" width="50" height="50" fill="#2D2620" />

      {/* truck */}
      <rect x="540" y="300" width="180" height="60" rx="4" fill="#1F2937" />
      <rect x="540" y="280" width="60" height="22" fill="#1F2937" />
      <rect x="620" y="312" width="100" height="32" fill="#9CA3AF" />
      <circle cx="570" cy="370" r="14" fill="#0F172A" />
      <circle cx="700" cy="370" r="14" fill="#0F172A" />

      {/* pallet stacks of cement bags */}
      {[
        { x: 760, label: "BAMBURI", labelFill: "#C8202E" },
        { x: 1020, label: "SIMBA", labelFill: "#1E40AF" },
        { x: 1280, label: "TEMBO", labelFill: "#166534" },
      ].map(({ x, label, labelFill }, idx) => (
        <g key={idx}>
          {/* pallet */}
          <rect x={x - 10} y="380" width="220" height="14" fill="#3D332B" />
          <rect x={x - 10} y="394" width="220" height="6" fill="#2D2620" />
          {/* stacked bags */}
          {[0, 1, 2, 3].map((row) => (
            <g key={row} transform={`translate(${x}, ${380 - row * 36})`}>
              {[0, 1].map((col) => (
                <g key={col} transform={`translate(${col * 100}, 0)`}>
                  <path d="M0 36 Q10 28 50 28 Q90 28 100 36 L100 4 Q90 -4 50 -4 Q10 -4 0 4 Z" fill="url(#cy-bag)" stroke="#9C9587" strokeWidth="0.8" />
                  <rect x="14" y="6" width="72" height="22" fill={labelFill} />
                  <text x="50" y="22" textAnchor="middle" fill="white" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="10" letterSpacing="0.5">
                    {label}
                  </text>
                </g>
              ))}
            </g>
          ))}
          {/* shadow under pallet */}
          <ellipse cx={x + 100} cy="404" rx="130" ry="8" fill="#0F0A05" opacity="0.45" />
        </g>
      ))}

      {/* atmospheric haze */}
      <rect width="1600" height="534" fill="url(#cy-sun)" />
      <rect width="1600" height="120" fill="url(#cy-sky)" opacity="0.4" />
    </svg>
  );
}

function RoofingScene() {
  return (
    <svg viewBox="0 0 1600 534" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="rf-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5FA8D3" />
          <stop offset="100%" stopColor="#BFDDEC" />
        </linearGradient>
        <linearGradient id="rf-mabati-red" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C8202E" />
          <stop offset="100%" stopColor="#7F1620" />
        </linearGradient>
        <linearGradient id="rf-mabati-blue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </linearGradient>
        <linearGradient id="rf-mabati-green" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#166534" />
          <stop offset="100%" stopColor="#0F3F22" />
        </linearGradient>
        <linearGradient id="rf-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#88847C" />
          <stop offset="100%" stopColor="#4F4B45" />
        </linearGradient>
      </defs>

      <rect width="1600" height="340" fill="url(#rf-sky)" />
      <rect y="340" width="1600" height="194" fill="url(#rf-ground)" />

      {/* distant building with completed red roof */}
      <polygon points="100,340 100,260 360,200 620,260 620,340" fill="#9C9587" />
      <polygon points="100,260 360,200 620,260" fill="url(#rf-mabati-red)" />
      {/* corrugations on the roof */}
      {Array.from({ length: 22 }).map((_, i) => {
        const t = i / 22;
        const x = 100 + t * 520;
        return <line key={i} x1={x} y1={260 - (1 - Math.abs(t - 0.5) * 2) * 60} x2={x + 6} y2="260" stroke="#5A0F14" strokeWidth="1.5" opacity="0.7" />;
      })}
      <rect x="220" y="290" width="40" height="50" fill="#3B3631" />
      <rect x="460" y="290" width="40" height="50" fill="#3B3631" />

      {/* foreground stack of mabati sheets in perspective */}
      {[
        { y: 470, color: "url(#rf-mabati-red)" },
        { y: 440, color: "url(#rf-mabati-blue)" },
        { y: 410, color: "url(#rf-mabati-green)" },
        { y: 380, color: "url(#rf-mabati-red)" },
        { y: 350, color: "url(#rf-mabati-blue)" },
      ].map((s, i) => (
        <g key={i}>
          <polygon
            points={`760,${s.y} 1560,${s.y - 30} 1580,${s.y - 18} 780,${s.y + 12}`}
            fill={s.color}
            stroke="#0F1012"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
          {/* corrugations */}
          {Array.from({ length: 26 }).map((_, c) => {
            const t = c / 26;
            const x1 = 760 + t * 800;
            const x2 = x1 + 20;
            const y1 = s.y - t * 30;
            const y2 = y1 + 12;
            return <line key={c} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(0,0,0,0.35)" strokeWidth="1" />;
          })}
        </g>
      ))}

      {/* haze + sun bloom */}
      <radialGradient id="rf-bloom" cx="85%" cy="15%" r="50%">
        <stop offset="0%" stopColor="white" stopOpacity="0.55" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
      </radialGradient>
      <rect width="1600" height="534" fill="url(#rf-bloom)" />
    </svg>
  );
}

function SteelScene() {
  return (
    <svg viewBox="0 0 1600 534" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="st-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1F2937" />
          <stop offset="100%" stopColor="#0F1418" />
        </linearGradient>
        <linearGradient id="st-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9CA3AF" />
          <stop offset="50%" stopColor="#4B5563" />
          <stop offset="100%" stopColor="#1F2937" />
        </linearGradient>
        <radialGradient id="st-spark" cx="20%" cy="50%" r="35%">
          <stop offset="0%" stopColor="#F5A623" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#F5A623" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="1600" height="534" fill="url(#st-bg)" />

      {/* scaffolding silhouettes in the background */}
      <g stroke="#3D4753" strokeWidth="3" fill="none" opacity="0.7">
        <path d="M0 140 L1600 140 M0 240 L1600 240 M0 340 L1600 340" />
        {Array.from({ length: 14 }).map((_, i) => (
          <path key={i} d={`M${100 + i * 110} 0 L${100 + i * 110} 534`} />
        ))}
      </g>
      {/* diagonal braces */}
      <g stroke="#3D4753" strokeWidth="2" opacity="0.5">
        <path d="M100 140 L210 240 M210 140 L320 240 M320 140 L430 240 M430 140 L540 240" />
        <path d="M100 240 L210 340 M210 240 L320 340 M320 240 L430 340" />
      </g>

      {/* warm orange spark/light source from the left */}
      <rect width="1600" height="534" fill="url(#st-spark)" />

      {/* bundles of rebar in foreground */}
      <g>
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <g key={i}>
            <rect x={620 + (i % 7) * 100} y={420 - Math.floor(i / 7) * 38} width="900" height="22" rx="11" fill="url(#st-bar)" />
            {/* ribs */}
            {Array.from({ length: 60 }).map((_, r) => {
              const x = 620 + (i % 7) * 100 + r * 15;
              if (x > 1520) return null;
              return <line key={r} x1={x} y1={420 - Math.floor(i / 7) * 38} x2={x + 6} y2={420 - Math.floor(i / 7) * 38 + 22} stroke="#0F1418" strokeWidth="1" opacity="0.45" />;
            })}
          </g>
        ))}
        {[0, 1, 2, 3].map((i) => (
          <g key={`r${i}`}>
            <rect x={580 + i * 96} y={460 + i * 6} width="900" height="22" rx="11" fill="url(#st-bar)" />
            {Array.from({ length: 60 }).map((_, r) => {
              const x = 580 + i * 96 + r * 15;
              if (x > 1480 + i * 96) return null;
              return <line key={r} x1={x} y1={460 + i * 6} x2={x + 6} y2={460 + i * 6 + 22} stroke="#0F1418" strokeWidth="1" opacity="0.45" />;
            })}
          </g>
        ))}
      </g>

      {/* highlights along bars */}
      <g stroke="white" strokeWidth="1" opacity="0.18">
        <line x1="620" y1="425" x2="1520" y2="425" />
        <line x1="620" y1="463" x2="1520" y2="463" />
        <line x1="620" y1="501" x2="1520" y2="501" />
      </g>

      {/* welding spark glow */}
      <circle cx="240" cy="280" r="100" fill="#F5A623" opacity="0.18" />
      <circle cx="240" cy="280" r="32" fill="#FCE38A" opacity="0.55" />
      <circle cx="240" cy="280" r="10" fill="white" opacity="0.85" />
    </svg>
  );
}

function WaterTankScene() {
  return (
    <svg viewBox="0 0 1600 534" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="wt-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7AB6E8" />
          <stop offset="60%" stopColor="#C9DDEC" />
          <stop offset="100%" stopColor="#E8DCB0" />
        </linearGradient>
        <linearGradient id="wt-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6F8B5F" />
          <stop offset="100%" stopColor="#3F5034" />
        </linearGradient>
        <linearGradient id="wt-tank-black" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3D332B" />
          <stop offset="30%" stopColor="#1A1A1A" />
          <stop offset="100%" stopColor="#3D332B" />
        </linearGradient>
      </defs>

      <rect width="1600" height="380" fill="url(#wt-sky)" />
      <rect y="380" width="1600" height="154" fill="url(#wt-ground)" />

      {/* hill silhouette */}
      <path d="M0 380 Q400 320 800 350 T1600 340 L1600 380 Z" fill="#5C7A4C" opacity="0.8" />

      {/* suburban house in the distance */}
      <rect x="180" y="280" width="240" height="100" fill="#E5E0D6" />
      <polygon points="180,280 300,220 420,280" fill="#7F1620" />
      <rect x="240" y="320" width="40" height="60" fill="#3D332B" />
      <rect x="320" y="320" width="60" height="40" fill="#9CA3AF" />

      {/* tank platform */}
      <rect x="900" y="380" width="380" height="14" fill="#5C544A" />
      <rect x="920" y="394" width="40" height="80" fill="#3D332B" />
      <rect x="1220" y="394" width="40" height="80" fill="#3D332B" />
      <rect x="900" y="474" width="380" height="20" fill="#2D2620" />

      {/* large water tank in foreground */}
      <ellipse cx="1090" cy="180" rx="170" ry="32" fill="#1F2937" />
      <path d="M920 180 L920 360 Q920 388 1090 388 Q1260 388 1260 360 L1260 180" fill="url(#wt-tank-black)" />
      <path d="M920 180 L920 360 Q920 388 1090 388 Q1260 388 1260 360 L1260 180" fill="none" stroke="#0F1012" strokeWidth="2" />
      <ellipse cx="1090" cy="180" rx="170" ry="32" fill="none" stroke="#0F1012" strokeWidth="2" />
      <ellipse cx="1090" cy="180" rx="80" ry="14" fill="#0F1012" opacity="0.55" />
      {/* corrugation rings */}
      {[220, 260, 300, 340].map((y) => (
        <ellipse key={y} cx="1090" cy={y} rx="170" ry="14" fill="none" stroke="#0F1012" strokeWidth="1.2" opacity="0.5" />
      ))}
      {/* brand label */}
      <rect x="1010" y="260" width="160" height="40" rx="3" fill="#FACC15" stroke="#1F2937" strokeWidth="1.5" />
      <text x="1090" y="289" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="22" fill="#1F2937" letterSpacing="1">
        KENTANK
      </text>
      {/* tap */}
      <rect x="1255" y="358" width="22" height="8" fill="#1F2937" />
      <rect x="1265" y="362" width="8" height="22" fill="#1F2937" />

      {/* sun bloom + atmospheric mist */}
      <radialGradient id="wt-bloom" cx="85%" cy="20%" r="55%">
        <stop offset="0%" stopColor="#FFF4D6" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#FFF4D6" stopOpacity="0" />
      </radialGradient>
      <rect width="1600" height="534" fill="url(#wt-bloom)" />
      <rect y="320" width="1600" height="80" fill="url(#wt-sky)" opacity="0.35" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────

const slides = [
  {
    eyebrow: "Sanitaryware & Bathrooms",
    title: "Complete bathroom suites",
    caption: "Basins · taps · cisterns · mirrors",
    href: "/products?category=Plumbing%20Materials",
    Scene: SanitaryScene,
  },
  {
    eyebrow: "Cement & Concrete",
    title: "Genuine bagged cement, by the pallet",
    caption: "Bamburi · Simba · Savannah · Tembo",
    href: "/products?category=Cement%20%26%20Concrete",
    Scene: CementYardScene,
  },
  {
    eyebrow: "Roofing & Mabati",
    title: "Sheets, ridge caps and gutters",
    caption: "Mabati Rolling Mills · Decra · Resincoat",
    href: "/products?category=Roofing%20Materials",
    Scene: RoofingScene,
  },
  {
    eyebrow: "Steel & Reinforcement",
    title: "Y-bars, BRC mesh and sections",
    caption: "Devki · Doshi · KEBS-grade only",
    href: "/products?category=Steel%20%26%20Reinforcement",
    Scene: SteelScene,
  },
  {
    eyebrow: "Water & Sanitation",
    title: "Tanks engineered to last decades",
    caption: "Kentank · Roto · Techno-tank",
    href: "/products?category=Water%20%26%20Sanitation",
    Scene: WaterTankScene,
  },
];

function PhotoBanner() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const next = useCallback(() => setI((v) => (v + 1) % slides.length), []);
  const prev = useCallback(
    () => setI((v) => (v - 1 + slides.length) % slides.length),
    []
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 6500);
    return () => clearInterval(t);
  }, [paused, next]);

  const slide = slides[i];

  return (
    <section className="bg-white">
      <div className="container-pro py-12 lg:py-16">
        <div
          className="relative aspect-[3/1] rounded-2xl overflow-hidden shadow-card group"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Slides (crossfade) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`slide-${i}`}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <slide.Scene />
            </motion.div>
          </AnimatePresence>

          {/* Soft bottom-left caption (no dominant copy — image leads) */}
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 bg-gradient-to-t from-charcoal-950/65 via-charcoal-950/15 to-transparent">
            <AnimatePresence mode="wait">
              <motion.div
                key={`cap-${i}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45 }}
                className="max-w-2xl"
              >
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-brand-300">
                  {slide.eyebrow}
                </div>
                <div className="mt-1.5 font-display font-extrabold text-white text-xl sm:text-3xl lg:text-4xl leading-tight">
                  {slide.title}
                </div>
                <div className="hidden sm:block mt-1 text-sm text-slate-300">
                  {slide.caption}
                </div>
                <Link
                  to={slide.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-300 hover:text-brand-200 transition"
                >
                  Browse range
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrow controls (on the photo, like the reference) */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 inline-flex items-center justify-center rounded-full bg-white/70 hover:bg-white text-charcoal-900 backdrop-blur opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 inline-flex items-center justify-center rounded-full bg-white/70 hover:bg-white text-charcoal-900 backdrop-blur opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dot indicators */}
          <div className="absolute inset-x-0 top-3 flex justify-center gap-1.5 sm:hidden">
            {slides.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-6 bg-white" : "w-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>
          <div className="hidden sm:flex absolute inset-x-0 bottom-4 justify-center gap-2 z-10">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setI(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all ring-1 ring-white/40 ${
                  idx === i ? "w-8 bg-white" : "w-2 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhotoBanner;
