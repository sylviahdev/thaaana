import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Layers,
  Wrench,
  HardHat,
  Droplets,
  Plug,
  Paintbrush,
  Container,
  Hammer,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./motion";
import ProductCard from "./ProductCard";
import products from "../data/products";

// Tabbed featured grid per category — keeps the familiar "shop by category"
// pattern but with cinematic tabs, breathing room and SaaS-quality typography.
const TABS = [
  { slug: "Cement & Concrete",     label: "Cement",     Icon: Layers,     blurb: "KEBS-certified Portland cement, ballast and sand for any build." },
  { slug: "Steel & Reinforcement",  label: "Steel",     Icon: Wrench,     blurb: "Deformed bars, BRC mesh and structural sections from Devki & Doshi." },
  { slug: "Roofing Materials",      label: "Roofing",   Icon: HardHat,    blurb: "Mabati box profile, ridge caps, gutters and Decra stone-coated tiles." },
  { slug: "Plumbing Materials",     label: "Plumbing",  Icon: Droplets,   blurb: "PVC, PPR, HDPE and copper pipework with full fitting suites." },
  { slug: "Electrical Supplies",    label: "Electrical", Icon: Plug,      blurb: "Cables, MCBs, lighting, solar kits and inverters." },
  { slug: "Paint & Finishing",      label: "Paints",    Icon: Paintbrush, blurb: "Crown, Sadolin and weatherguard finishes for interior & exterior." },
  { slug: "Water & Sanitation",     label: "Water Tanks", Icon: Container, blurb: "Kentank, Roto and Techno-tanks from 1,000L to 10,000L." },
  { slug: "Tools & Equipment",      label: "Tools",     Icon: Hammer,     blurb: "Bosch power tools, welders, ladders and site equipment." },
];

function CategoryShowcase() {
  const [active, setActive] = useState(TABS[0].slug);

  // Pick the 4 most-feature-worthy products for each tab (badged first, then by id).
  const items = useMemo(
    () =>
      products
        .filter((p) => p.category === active)
        .sort((a, b) => (b.badge ? 1 : 0) - (a.badge ? 1 : 0))
        .slice(0, 4),
    [active]
  );

  const currentTab = TABS.find((t) => t.slug === active);

  return (
    <section className="bg-white">
      <div className="container-pro py-24 lg:py-32">
        <Reveal className="max-w-3xl">
          <div className="eyebrow text-brand-600">Shop by Category</div>
          <h2 className="mt-4 heading-xl">
            A curated catalogue, supplied{" "}
            <span className="text-gradient-orange">straight from KEBS-certified</span>{" "}
            manufacturers.
          </h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-2xl">
            Switch between categories to see the items contractors order from us most
            often. Every product carries live availability and a one-tap quotation.
          </p>
        </Reveal>

        {/* Tab strip */}
        <Reveal delay={0.1} className="mt-12">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide -mx-4 px-4 pb-2">
            {TABS.map((t) => {
              const isActive = t.slug === active;
              return (
                <button
                  key={t.slug}
                  type="button"
                  onClick={() => setActive(t.slug)}
                  className={`relative inline-flex items-center gap-2 px-4 py-3 rounded-2xl text-sm font-semibold transition border whitespace-nowrap ${
                    isActive
                      ? "bg-charcoal-950 text-white border-charcoal-950 shadow-card"
                      : "bg-white text-charcoal-700 border-slate-200 hover:border-charcoal-300 hover:text-charcoal-900"
                  }`}
                >
                  <span
                    className={`h-7 w-7 inline-flex items-center justify-center rounded-lg transition ${
                      isActive
                        ? "bg-brand-400 text-charcoal-950"
                        : "bg-slate-100 text-charcoal-600"
                    }`}
                  >
                    <t.Icon className="h-4 w-4" />
                  </span>
                  {t.label}
                  {isActive && (
                    <motion.span
                      layoutId="tab-indicator"
                      className="absolute -bottom-1 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-brand-400"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Tab body */}
        <div className="mt-10 grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Lede column */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="lg:sticky lg:top-32"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-charcoal-950 text-brand-300">
                  {currentTab && <currentTab.Icon className="h-5 w-5" />}
                </div>
                <h3 className="mt-5 font-display text-2xl font-extrabold text-charcoal-900 leading-tight">
                  {currentTab?.label}
                </h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  {currentTab?.blurb}
                </p>
                <Link
                  to={`/products?category=${encodeURIComponent(active)}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-brand-600 hover:text-brand-700 transition"
                >
                  Browse the full range
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Product grid column */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 lg:gap-6"
              >
                {items.map((p, i) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: i * 0.06 }}
                  >
                    <ProductCard product={p} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoryShowcase;
