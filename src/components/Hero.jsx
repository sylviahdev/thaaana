import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Truck,
  Zap,
  Clock,
  Users,
  PackageSearch,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { whatsappLink, site } from "../data/site";
import { AnimatedCounter } from "./motion";

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax: background drifts slower than foreground.
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const fgY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-charcoal-950 text-white isolate"
    >
      {/* === Cinematic backdrop === */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        {/* Construction-site photograph stand-in (CSS gradients + grid) */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-950 via-charcoal-900 to-charcoal-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,166,35,0.22),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_120%,rgba(200,32,46,0.18),transparent_55%)]" />
        {/* Architectural silhouettes */}
        <svg
          className="absolute inset-x-0 bottom-0 w-full h-1/2 opacity-[0.18] mix-blend-screen"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="cranegrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F5A623" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#F5A623" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* skyline of buildings */}
          <g fill="url(#cranegrad)">
            <rect x="60" y="320" width="120" height="280" />
            <rect x="200" y="220" width="180" height="380" />
            <rect x="400" y="280" width="80" height="320" />
            <rect x="500" y="160" width="220" height="440" />
            <rect x="740" y="260" width="140" height="340" />
            <rect x="900" y="200" width="180" height="400" />
            <rect x="1100" y="280" width="120" height="320" />
            <rect x="1240" y="340" width="160" height="260" />
          </g>
          {/* tower crane */}
          <g stroke="#F5A623" strokeOpacity="0.55" strokeWidth="2" fill="none">
            <path d="M820 80 L820 280" />
            <path d="M680 100 L960 100" />
            <path d="M680 100 L820 80 L960 100" />
            <path d="M700 100 L700 130 M740 100 L740 140 M780 100 L780 130 M860 100 L860 140 M900 100 L900 130 M940 100 L940 140" />
          </g>
        </svg>

        {/* fine engineering grid */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.06]"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <pattern
              id="heroGrid"
              width="56"
              height="56"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M56 0H0V56"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>

        {/* edge fades */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal-950 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-charcoal-950 to-transparent" />
      </motion.div>

      <motion.div
        style={{ y: fgY, opacity: fade }}
        className="relative container-pro grid lg:grid-cols-12 gap-10 lg:gap-12 items-center py-16 sm:py-24 lg:py-32"
      >
        {/* === Left: copy === */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[11px] sm:text-xs font-medium text-slate-200 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="tracking-wide">
              Live · Quoting projects across Kenya right now
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-[2.5rem] leading-[1.02] sm:text-[3.5rem] lg:text-[4.5rem] lg:leading-[1.02] font-black tracking-[-0.02em]"
          >
            Your Trusted{" "}
            <span className="text-gradient-orange">Construction</span>
            {" & "}
            <span className="text-gradient-orange">Hardware</span>{" "}
            Supplier in Kenya.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-slate-300/90 leading-relaxed"
          >
            From foundations to finishes — Thaana Hardware delivers KEBS-certified
            cement, steel, roofing, plumbing and tools directly to contractors
            and developers nationwide. Send your list, we quote in 4 hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-brand-400 hover:bg-brand-300 text-charcoal-950 font-bold px-6 py-4 rounded-xl shadow-glow transition-all duration-200 hover:-translate-y-0.5"
            >
              Request Quotation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={whatsappLink(
                "Hello THAANA, I'd like to discuss my construction project."
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 text-white font-semibold px-6 py-4 rounded-xl backdrop-blur transition"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-[#25D366]">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.554-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24Z" />
              </svg>
              WhatsApp Order
            </a>
          </motion.div>

          {/* Trust micro-row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-400"
          >
            <Bullet icon={ShieldCheck}>KEBS-certified stock</Bullet>
            <Bullet icon={Clock}>4-hour quote SLA</Bullet>
            <Bullet icon={Truck}>Nationwide delivery</Bullet>
            <Bullet icon={Zap}>Same-day Nairobi dispatch</Bullet>
          </motion.div>
        </div>

        {/* === Right: floating stats panel === */}
        <div className="lg:col-span-5 w-full">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-brand-500/30 via-brand-300/15 to-transparent blur-3xl rounded-[2.5rem]" />

            {/* Glass quotation panel */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl bg-charcoal-900/70 border border-white/10 backdrop-blur-xl p-2 shadow-ring"
            >
              <div className="flex items-center gap-1.5 px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                <span className="ml-auto text-[10px] uppercase tracking-[0.18em] text-slate-500 font-bold">
                  Live Quote · Q-2851
                </span>
              </div>

              <div className="rounded-xl bg-white text-charcoal-900 p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500 font-bold">
                      Quotation · Foundation Pack
                    </div>
                    <div className="mt-1 font-display text-lg font-bold leading-tight">
                      Site delivery to Kitengela
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Drafting
                  </span>
                </div>

                <ul className="mt-5 divide-y divide-slate-100 text-sm">
                  {[
                    { name: "Bamburi Nguvu 32.5N", qty: "200 × 50kg bags", stock: "In Stock" },
                    { name: "Y12 Steel Rebar (12m)", qty: "50 lengths", stock: "In Stock" },
                    { name: "Mabati Box Profile 28g", qty: "60 sheets · 3m", stock: "In Stock" },
                    { name: "BRC Mesh A142", qty: "30 sheets", stock: "Limited" },
                  ].map((row, i) => (
                    <motion.li
                      key={row.name}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.55 + i * 0.08 }}
                      className="flex items-center justify-between py-3"
                    >
                      <div className="min-w-0">
                        <div className="font-semibold text-charcoal-900 truncate">
                          {row.name}
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">
                          {row.qty}
                        </div>
                      </div>
                      <span
                        className={`inline-flex items-center gap-1.5 text-[11px] font-bold shrink-0 ml-3 ${
                          row.stock === "Limited"
                            ? "text-amber-700"
                            : "text-emerald-700"
                        }`}
                      >
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        {row.stock}
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

            {/* Floating stat chip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="hidden sm:flex absolute -left-4 -bottom-6 lg:-left-10 lg:-bottom-10 items-center gap-3 bg-charcoal-950/85 backdrop-blur border border-white/10 rounded-2xl px-4 py-3 shadow-2xl animate-float-y"
            >
              <div className="h-10 w-10 rounded-xl bg-brand-400/15 ring-1 ring-brand-400/30 inline-flex items-center justify-center text-brand-300">
                <Truck className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <div className="text-[10px] uppercase tracking-[0.16em] text-slate-400 font-bold">
                  On-time deliveries
                </div>
                <div className="font-display text-lg font-extrabold text-white tabular-nums">
                  98.2%
                  <span className="text-emerald-400 text-xs font-semibold ml-1.5">
                    ↑ 1.4
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Second floating chip — top */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.05 }}
              className="hidden md:flex absolute -right-4 -top-6 lg:-right-8 items-center gap-3 bg-brand-400 text-charcoal-950 rounded-2xl px-4 py-3 shadow-2xl"
            >
              <ShieldCheck className="h-5 w-5" />
              <div className="leading-tight">
                <div className="text-[10px] uppercase tracking-[0.16em] font-bold opacity-80">
                  KEBS Certified
                </div>
                <div className="font-display text-sm font-extrabold">
                  Genuine stock only
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* === Animated stats strip === */}
      <div className="relative border-t border-white/10 bg-charcoal-950/60 backdrop-blur">
        <div className="container-pro py-8 grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-6 divide-x divide-white/5">
          {[
            { icon: PackageSearch, value: 1200, suffix: "+", label: "Products Available" },
            { icon: Users, value: 500, suffix: "+", label: "Contractors Served" },
            { icon: Clock, value: 4, suffix: "hr", label: "Quote Turnaround" },
            { icon: Truck, value: 14, suffix: "+", label: "Counties Delivered" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`px-4 sm:px-6 ${i === 0 ? "pl-0 sm:pl-0" : ""}`}
            >
              <div className="flex items-center gap-3">
                <span className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-400/15 ring-1 ring-brand-400/20 text-brand-300">
                  <s.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-black tabular-nums text-white">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-400 mt-1 uppercase tracking-wider">
                    {s.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Bullet({ icon: Icon, children }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <Icon className="h-3.5 w-3.5 text-brand-400" />
      {children}
    </span>
  );
}

export default Hero;
