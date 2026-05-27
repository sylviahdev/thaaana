import { useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Star,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./motion";
import ProductCard from "./ProductCard";
import products from "../data/products";

// "BUILDING & HARDWARE" — NEW | FEATURED | TOP SELLERS — the centrepiece
// product showcase. Mirrors the familiar hardware-store landing pattern (tabbed
// grid + side carousel arrows) with premium dark-on-light SaaS polish.
const TABS = [
  { id: "new",       label: "New Arrivals", Icon: Sparkles },
  { id: "featured",  label: "Featured",     Icon: Star },
  { id: "top",       label: "Top Sellers",  Icon: TrendingUp },
];

function ProductGridTabs() {
  const [activeIdx, setActiveIdx] = useState(1); // start on Featured
  const active = TABS[activeIdx].id;

  const next = useCallback(
    () => setActiveIdx((v) => (v + 1) % TABS.length),
    []
  );
  const prev = useCallback(
    () => setActiveIdx((v) => (v - 1 + TABS.length) % TABS.length),
    []
  );

  const items = useMemo(() => {
    if (active === "new") {
      return [
        "Solar Panel 200W Monocrystalline",
        "Pure Sine Wave Inverter 1.5kVA",
        "Decra Stone-Coated Roof Tile",
        "Bio Digester Tank 3000L",
        "LED Floodlight 50W",
        "Aluminium Sliding Window (1.5m × 1.2m)",
        "Texture Paint (10L)",
        "Waterproofing Membrane (10m roll)",
      ]
        .map((n) => products.find((p) => p.name === n))
        .filter(Boolean);
    }
    if (active === "top") {
      return [
        "Bamburi Nguvu 32.5N Cement (50kg)",
        "Y12 Deformed Steel Bar (12m)",
        "Mabati Box Profile 28g (3m)",
        "BRC Mesh A142 (4.8m × 2.4m)",
        "Ballast 3/4\" (per tonne)",
        "River Sand (per tonne)",
        "Roto Tank 5000L",
        "Crown Silk Vinyl Emulsion (20L)",
      ]
        .map((n) => products.find((p) => p.name === n))
        .filter(Boolean);
    }
    return products.filter((p) => p.badge).slice(0, 8);
  }, [active]);

  return (
    <section className="bg-white">
      <div className="container-pro py-20 lg:py-28">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <Reveal>
            <div className="eyebrow text-brand-600">Building & Hardware</div>
            <h2 className="mt-3 heading-xl">
              Materials moving{" "}
              <span className="text-gradient-orange">fastest</span> on our yard this
              week.
            </h2>
          </Reveal>

          <Reveal
            delay={0.08}
            className="flex items-center gap-1 bg-slate-100 p-1 rounded-2xl self-start"
          >
            {TABS.map((t, idx) => {
              const isActive = t.id === active;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`relative inline-flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition ${
                    isActive
                      ? "text-charcoal-950"
                      : "text-slate-500 hover:text-charcoal-700"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="grid-tab-pill"
                      className="absolute inset-0 bg-white rounded-xl shadow-soft"
                      transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                    />
                  )}
                  <span className="relative inline-flex items-center gap-2">
                    <t.Icon className="h-3.5 w-3.5" />
                    {t.label}
                  </span>
                </button>
              );
            })}
          </Reveal>
        </div>

        {/* Grid + side carousel arrows (the Winstar-style flanking controls) */}
        <div className="mt-12 relative">
          {/* Prev arrow */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous set of products"
            className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-white border border-slate-200 hover:border-charcoal-950 hover:bg-charcoal-950 hover:text-brand-300 text-charcoal-700 shadow-card transition"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
            >
              {items.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                >
                  <ProductCard product={p} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Next arrow */}
          <button
            type="button"
            onClick={next}
            aria-label="Next set of products"
            className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-charcoal-950 hover:bg-brand-400 hover:text-charcoal-950 text-white shadow-card transition"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dot indicators + browse-all CTA */}
        <div className="mt-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {TABS.map((t, idx) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveIdx(idx)}
                aria-label={`Go to ${t.label}`}
                className={`h-1.5 rounded-full transition-all ${
                  idx === activeIdx
                    ? "w-10 bg-brand-400"
                    : "w-3 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-charcoal-950 hover:bg-charcoal-900 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition shadow-soft hover:shadow-card"
          >
            Browse the full catalogue
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProductGridTabs;
