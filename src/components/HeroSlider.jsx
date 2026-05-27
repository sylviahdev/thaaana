import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Truck,
  Clock,
  Zap,
  Layers,
  HardHat,
  Container,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { whatsappLink } from "../data/site";
import { AnimatedCounter } from "./motion";

// Cinematic 3-slide hero banner — same aesthetic as Winstar's "warehouse
// slider" pattern but with premium dark industrial polish, cinematic gradients
// and animated counters.
const slides = [
  {
    eyebrow: "Foundations & Structure",
    titleTop: "Cement, Steel &",
    titleAccent: "Reinforcement",
    titleBottom: "delivered to site, on the day.",
    subtitle:
      "Bamburi · Simba · Savannah · Devki. KEBS-certified bags and bars from Kenya's leading manufacturers.",
    Icon: Layers,
    accent: "from-brand-500/30 via-brand-300/20 to-transparent",
    pillTone: "bg-brand-400/15 ring-brand-400/30 text-brand-300",
    chips: ["Y8–Y25 rebar", "BRC mesh", "Quarry ballast", "River sand"],
    art: "site", // build-site silhouette
    ctaCategory: "Cement & Concrete",
  },
  {
    eyebrow: "Building Shell & Roofing",
    titleTop: "Mabati, Decra &",
    titleAccent: "Premium Finishes",
    titleBottom: "for projects that outlast the rain.",
    subtitle:
      "Mabati Rolling Mills box profile and stone-coated tiles · Crown and Sadolin weatherguard finishes.",
    Icon: HardHat,
    accent: "from-brick-500/35 via-brick-400/20 to-transparent",
    pillTone: "bg-brick-500/15 ring-brick-500/30 text-brick-300",
    chips: ["28g & 30g sheets", "Ridge caps", "Decra tiles", "Gutter systems"],
    art: "roof",
    ctaCategory: "Roofing Materials",
  },
  {
    eyebrow: "Water · Plumbing · Sanitation",
    titleTop: "Tanks, Pipes &",
    titleAccent: "Sanitary Suites",
    titleBottom: "engineered for everyday reliability.",
    subtitle:
      "Kentank · Roto · Techno-tank water storage from 1,000L to 10,000L · PPR, PVC and HDPE pipework.",
    Icon: Container,
    accent: "from-sky-500/30 via-sky-300/15 to-transparent",
    pillTone: "bg-sky-500/15 ring-sky-500/30 text-sky-300",
    chips: ["Kentank tanks", "PPR pipework", "Septic tanks", "Bio digesters"],
    art: "tanks",
    ctaCategory: "Water & Sanitation",
  },
];

const STATS = [
  { value: 1200, suffix: "+", label: "Products Available" },
  { value: 500, suffix: "+", label: "Contractors Served" },
  { value: 4, suffix: " hr", label: "Quote Turnaround" },
  { value: 14, suffix: "+", label: "Counties Delivered" },
];

const TRUST = [
  { Icon: ShieldCheck, text: "KEBS-certified stock" },
  { Icon: Clock, text: "4-hour quote SLA" },
  { Icon: Truck, text: "Nationwide delivery" },
  { Icon: Zap, text: "Same-day Nairobi dispatch" },
];

function SlideArt({ kind }) {
  // Three stylised SVG illustrations — stand in for warehouse photography
  // until real imagery is dropped in. Each is composed in the same artboard
  // so transitions feel cohesive.
  if (kind === "site") {
    return (
      <svg viewBox="0 0 480 360" className="absolute inset-0 h-full w-full opacity-40 mix-blend-screen" aria-hidden>
        <defs>
          <linearGradient id="siteG" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F5A623" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#F5A623" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Skyline */}
        <g fill="url(#siteG)">
          <rect x="40" y="200" width="60" height="160" />
          <rect x="110" y="140" width="90" height="220" />
          <rect x="220" y="100" width="80" height="260" />
          <rect x="320" y="180" width="70" height="180" />
          <rect x="400" y="220" width="70" height="140" />
        </g>
        {/* Tower crane */}
        <g stroke="#F5A623" strokeOpacity="0.5" strokeWidth="2" fill="none">
          <path d="M250 60 L250 220" />
          <path d="M150 80 L360 80" />
          <path d="M150 80 L250 60 L360 80" />
        </g>
        {/* Rebar bundle stylised */}
        <g stroke="#F5A623" strokeOpacity="0.4" strokeWidth="2">
          <line x1="20" y1="320" x2="160" y2="320" />
          <line x1="20" y1="330" x2="160" y2="330" />
          <line x1="20" y1="340" x2="160" y2="340" />
        </g>
      </svg>
    );
  }
  if (kind === "roof") {
    return (
      <svg viewBox="0 0 480 360" className="absolute inset-0 h-full w-full opacity-40 mix-blend-screen" aria-hidden>
        <defs>
          <linearGradient id="roofG" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E85F75" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#E85F75" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Stacked roof sheets in perspective */}
        <g stroke="#E85F75" strokeOpacity="0.6" strokeWidth="2" fill="url(#roofG)">
          <polygon points="40,200 360,140 460,150 100,210" />
          <polygon points="60,230 380,170 480,180 120,240" />
          <polygon points="80,260 400,200 500,210 140,270" />
        </g>
        {/* Corrugations */}
        <g stroke="#E85F75" strokeOpacity="0.3" strokeWidth="1.5">
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={i} x1={80 + i * 32} y1="140" x2={120 + i * 32} y2="270" />
          ))}
        </g>
      </svg>
    );
  }
  // tanks
  return (
    <svg viewBox="0 0 480 360" className="absolute inset-0 h-full w-full opacity-45 mix-blend-screen" aria-hidden>
      <defs>
        <linearGradient id="tankG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Tank row */}
      {[80, 220, 360].map((cx, i) => (
        <g key={cx} fill="url(#tankG)" stroke="#38BDF8" strokeOpacity="0.55" strokeWidth="2">
          <ellipse cx={cx} cy="120" rx={50 + i * 4} ry="14" />
          <path d={`M${cx - (50 + i * 4)} 120 L${cx - (50 + i * 4)} 300 Q${cx - (50 + i * 4)} 320 ${cx} 320 Q${cx + (50 + i * 4)} 320 ${cx + (50 + i * 4)} 300 L${cx + (50 + i * 4)} 120`} />
          {[150, 180, 210, 240, 270].map((y) => (
            <ellipse key={y} cx={cx} cy={y} rx={50 + i * 4} ry="5" fill="none" strokeOpacity="0.25" />
          ))}
        </g>
      ))}
    </svg>
  );
}

function HeroSlider() {
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
    <section
      className="relative overflow-hidden bg-charcoal-950 text-white isolate"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Static dark backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-950 via-charcoal-900 to-charcoal-950" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.05]" preserveAspectRatio="none" aria-hidden>
          <defs>
            <pattern id="heroGrid" width="56" height="56" patternUnits="userSpaceOnUse">
              <path d="M56 0H0V56" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>
      </div>

      {/* Per-slide accent glow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`accent-${i}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className={`absolute inset-0 -z-10 bg-gradient-to-br ${slide.accent}`}
        />
      </AnimatePresence>

      {/* Per-slide stylised art */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`art-${i}`}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 -z-10"
        >
          <SlideArt kind={slide.art} />
        </motion.div>
      </AnimatePresence>

      {/* Edge fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal-950 to-transparent -z-10" />

      <div className="container-pro grid lg:grid-cols-12 gap-10 lg:gap-12 items-center py-16 sm:py-24 lg:py-32">
        {/* Slide copy */}
        <div className="lg:col-span-7 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={`copy-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full ring-1 ${slide.pillTone} backdrop-blur text-[11px] font-bold uppercase tracking-[0.16em]`}
              >
                <slide.Icon className="h-3.5 w-3.5" />
                {slide.eyebrow}
              </div>

              <h1 className="mt-6 font-display text-[2.5rem] leading-[1.02] sm:text-[3.5rem] lg:text-[4.5rem] lg:leading-[1.02] font-black tracking-[-0.02em]">
                {slide.titleTop}{" "}
                <span className="text-gradient-orange">{slide.titleAccent}</span>{" "}
                <span className="block text-white/90 font-extrabold text-[2rem] sm:text-[2.5rem] lg:text-[3rem] leading-[1.1] mt-2">
                  {slide.titleBottom}
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base sm:text-lg text-slate-300/90 leading-relaxed">
                {slide.subtitle}
              </p>

              {/* Slide chips */}
              <div className="mt-6 flex flex-wrap gap-2">
                {slide.chips.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold text-slate-200"
                  >
                    <CheckCircle2 className="h-3 w-3 text-brand-400" />
                    {c}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
                <Link
                  to={`/products?category=${encodeURIComponent(slide.ctaCategory)}`}
                  className="group inline-flex items-center justify-center gap-2 bg-brand-400 hover:bg-brand-300 text-charcoal-950 font-bold px-6 py-4 rounded-xl shadow-glow transition-all duration-200 hover:-translate-y-0.5"
                >
                  Browse {slide.ctaCategory}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={whatsappLink(
                    `Hello THAANA, I'd like a quotation for ${slide.ctaCategory}.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 text-white font-semibold px-6 py-4 rounded-xl backdrop-blur transition"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-[#25D366]">
                    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.554-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24Z" />
                  </svg>
                  WhatsApp Inquiry
                </a>
              </div>

              {/* Trust micro-row */}
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-400">
                {TRUST.map((t) => (
                  <span key={t.text} className="inline-flex items-center gap-1.5">
                    <t.Icon className="h-3.5 w-3.5 text-brand-400" />
                    {t.text}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right column — glass card with category visual */}
        <div className="lg:col-span-5 w-full">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-brand-500/25 via-brand-300/10 to-transparent blur-3xl rounded-[2.5rem]" />
            <AnimatePresence mode="wait">
              <motion.div
                key={`panel-${i}`}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.97 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-2xl bg-charcoal-900/70 border border-white/10 backdrop-blur-xl p-2 shadow-ring"
              >
                <div className="flex items-center gap-1.5 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                  <span className="ml-auto text-[10px] uppercase tracking-[0.18em] text-slate-500 font-bold">
                    Live Quote
                  </span>
                </div>

                <div className="rounded-xl bg-white text-charcoal-900 p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <span className="h-12 w-12 rounded-xl bg-charcoal-950 text-brand-300 inline-flex items-center justify-center">
                      <slide.Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500 font-bold">
                        Quotation · {slide.eyebrow}
                      </div>
                      <div className="mt-0.5 font-display text-base font-bold leading-tight">
                        Site delivery, Kitengela
                      </div>
                    </div>
                    <span className="ml-auto inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Drafting
                    </span>
                  </div>

                  <ul className="mt-5 divide-y divide-slate-100 text-sm">
                    {slide.chips.slice(0, 3).map((row, idx) => (
                      <motion.li
                        key={row}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.45, delay: 0.25 + idx * 0.08 }}
                        className="flex items-center justify-between py-2.5"
                      >
                        <span className="font-semibold text-charcoal-900 truncate">
                          {row}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 shrink-0 ml-3">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          In Stock
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-4 pt-4 border-t border-slate-200 grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500 font-bold">
                        Quote Turnaround
                      </div>
                      <div className="font-display text-xl font-extrabold mt-1">
                        Under 4 hrs
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500 font-bold">
                        Delivery ETA
                      </div>
                      <div className="font-display text-base font-bold mt-1">
                        Tomorrow, 8 AM
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="container-pro pb-6 lg:pb-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setI(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-10 bg-brand-400" : "w-3 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
          <span className="ml-3 text-[10px] uppercase tracking-[0.16em] font-bold text-slate-500 tabular-nums">
            {String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-brand-400/40 transition"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-brand-400 text-charcoal-950 hover:bg-brand-300 transition"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Animated stats strip */}
      <div className="relative border-t border-white/10 bg-charcoal-950/60 backdrop-blur">
        <div className="container-pro py-7 grid grid-cols-2 sm:grid-cols-4 gap-y-5 gap-x-6 divide-x divide-white/5">
          {STATS.map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`px-4 sm:px-6 ${idx === 0 ? "pl-0 sm:pl-0" : ""}`}
            >
              <div className="font-display text-2xl sm:text-3xl font-black tabular-nums text-white">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 mt-1 uppercase tracking-wider">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSlider;
