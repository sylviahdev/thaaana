import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Hammer,
  Layers,
  Wrench,
  Droplets,
  Plug,
  Paintbrush,
  Container,
  HardHat,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./motion";

// Cinematic premium category tiles using CSS gradients + SVG patterns
// (acts as stand-in for construction imagery without external assets).
const cats = [
  {
    name: "Cement & Concrete",
    desc: "Bamburi · Simba · Savannah",
    slug: "Cement & Concrete",
    Icon: Layers,
    tone: "from-charcoal-700 to-charcoal-950",
    accent: "rgba(245,166,35,0.35)",
    pattern: "blocks",
  },
  {
    name: "Roofing Materials",
    desc: "Mabati · Decra · gutters · ridge caps",
    slug: "Roofing Materials",
    Icon: HardHat,
    tone: "from-brick-700 to-charcoal-900",
    accent: "rgba(232,95,117,0.4)",
    pattern: "roof",
  },
  {
    name: "Steel & Metal",
    desc: "Y-bars · BRC mesh · hollow sections",
    slug: "Steel & Reinforcement",
    Icon: Wrench,
    tone: "from-brand-700 to-charcoal-900",
    accent: "rgba(245,166,35,0.4)",
    pattern: "rebar",
  },
  {
    name: "Plumbing",
    desc: "Pipes · fittings · fixtures",
    slug: "Plumbing Materials",
    Icon: Droplets,
    tone: "from-sky-800 to-charcoal-900",
    accent: "rgba(56,189,248,0.35)",
    pattern: "pipes",
  },
  {
    name: "Electricals",
    desc: "Cables · MCBs · solar kits",
    slug: "Electrical Supplies",
    Icon: Plug,
    tone: "from-amber-700 to-charcoal-900",
    accent: "rgba(252,211,77,0.4)",
    pattern: "circuit",
  },
  {
    name: "Paints",
    desc: "Crown · Sadolin · finishes",
    slug: "Paint & Finishing",
    Icon: Paintbrush,
    tone: "from-violet-800 to-charcoal-900",
    accent: "rgba(192,132,252,0.4)",
    pattern: "stripes",
  },
  {
    name: "Water Tanks",
    desc: "Kentank · Roto · Techno-tank",
    slug: "Water & Sanitation",
    Icon: Container,
    tone: "from-blue-800 to-charcoal-900",
    accent: "rgba(59,130,246,0.4)",
    pattern: "drops",
  },
  {
    name: "Tools & Equipment",
    desc: "Bosch · welders · ladders",
    slug: "Tools & Equipment",
    Icon: Hammer,
    tone: "from-rose-800 to-charcoal-900",
    accent: "rgba(248,113,113,0.4)",
    pattern: "tools",
  },
];

function Pattern({ kind, color }) {
  const id = `pat-${kind}`;
  if (kind === "blocks")
    return (
      <svg className="absolute inset-0 h-full w-full opacity-30" aria-hidden>
        <defs>
          <pattern id={id} width="48" height="32" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="46" height="14" fill="none" stroke={color} strokeWidth="1" />
            <rect x="24" y="16" width="46" height="14" fill="none" stroke={color} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    );
  if (kind === "rebar")
    return (
      <svg className="absolute inset-0 h-full w-full opacity-25" aria-hidden>
        <defs>
          <pattern id={id} width="20" height="20" patternUnits="userSpaceOnUse">
            <line x1="0" y1="10" x2="20" y2="10" stroke={color} strokeWidth="2" />
            <line x1="6" y1="2" x2="14" y2="18" stroke={color} strokeWidth="1.2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    );
  if (kind === "roof")
    return (
      <svg className="absolute inset-0 h-full w-full opacity-30" aria-hidden>
        <defs>
          <pattern id={id} width="32" height="16" patternUnits="userSpaceOnUse">
            <path d="M0 16 L16 0 L32 16" fill="none" stroke={color} strokeWidth="1.2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    );
  if (kind === "pipes")
    return (
      <svg className="absolute inset-0 h-full w-full opacity-25" aria-hidden>
        <defs>
          <pattern id={id} width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="12" fill="none" stroke={color} strokeWidth="1.5" />
            <circle cx="20" cy="20" r="6" fill="none" stroke={color} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    );
  if (kind === "circuit")
    return (
      <svg className="absolute inset-0 h-full w-full opacity-25" aria-hidden>
        <defs>
          <pattern id={id} width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M0 30 L20 30 L20 10 L40 10 L40 50 L60 50" fill="none" stroke={color} strokeWidth="1" />
            <circle cx="20" cy="10" r="2" fill={color} />
            <circle cx="40" cy="50" r="2" fill={color} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    );
  if (kind === "stripes")
    return (
      <svg className="absolute inset-0 h-full w-full opacity-25" aria-hidden>
        <defs>
          <pattern id={id} width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="14" stroke={color} strokeWidth="2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    );
  if (kind === "drops")
    return (
      <svg className="absolute inset-0 h-full w-full opacity-30" aria-hidden>
        <defs>
          <pattern id={id} width="34" height="34" patternUnits="userSpaceOnUse">
            <path d="M17 4 C 22 12 26 18 26 22 a9 9 0 0 1 -18 0 C 8 18 12 12 17 4 Z" fill="none" stroke={color} strokeWidth="1.2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    );
  if (kind === "tools")
    return (
      <svg className="absolute inset-0 h-full w-full opacity-25" aria-hidden>
        <defs>
          <pattern id={id} width="36" height="36" patternUnits="userSpaceOnUse">
            <path d="M6 30 L22 14 M20 12 a4 4 0 1 1 6 6" fill="none" stroke={color} strokeWidth="1.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    );
  return null;
}

function FeaturedCategories() {
  return (
    <section
      id="categories"
      className="bg-charcoal-950 text-white border-y border-white/5 scroll-mt-24"
    >
      <div className="absolute inset-x-0 bg-[radial-gradient(ellipse_at_top,rgba(245,166,35,0.08),transparent_60%)]" />
      <div className="container-pro py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Reveal className="max-w-xl">
            <div className="eyebrow">Browse by Category</div>
            <h2 className="mt-3 heading-xl-dark">
              Every category your <span className="text-gradient-orange">site</span> needs.
            </h2>
            <p className="mt-4 text-slate-300/90">
              Over 1,200 SKUs across eight construction categories — supplied directly
              from KEBS-certified manufacturers and ready to dispatch.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/products"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/15 hover:border-brand-400 hover:text-brand-300 rounded-xl px-4 py-2.5 transition"
            >
              View all materials
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {cats.map((c) => (
            <StaggerItem key={c.name}>
              <Link
                to={`/products?category=${encodeURIComponent(c.slug)}`}
                className={`group relative block overflow-hidden rounded-2xl aspect-[4/5] sm:aspect-[4/5] shadow-soft hover:shadow-glow transition bg-gradient-to-br ${c.tone}`}
              >
                {/* Pattern fill */}
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                  <Pattern kind={c.pattern} color="white" />
                </div>

                {/* Radial accent glow */}
                <div
                  className="absolute -right-10 -top-10 h-44 w-44 rounded-full blur-3xl transition-opacity duration-500 opacity-60 group-hover:opacity-100"
                  style={{ background: c.accent }}
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/30 to-transparent" />

                {/* Shine sweep on hover */}
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute -inset-x-full top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 group-hover:translate-x-[400%] transition-transform duration-1000" />
                </div>

                <div className="relative h-full flex flex-col justify-between p-5 sm:p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur ring-1 ring-white/15 text-white group-hover:bg-brand-400 group-hover:text-charcoal-950 transition">
                    <c.Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-display font-extrabold text-lg sm:text-xl text-white">
                      {c.name}
                    </div>
                    <div className="text-xs sm:text-sm text-white/70 mt-1">
                      {c.desc}
                    </div>
                    <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-brand-300 group-hover:text-brand-200">
                      Explore range
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export default FeaturedCategories;
