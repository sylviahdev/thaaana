import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import {
  Layers,
  Hammer,
  Wrench,
  Droplets,
  Plug,
  Paintbrush,
  Container,
  HardHat,
  Construction,
  Boxes,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// A premium, scrollable top-category strip. Mirrors the familiar Kenyan
// hardware-store browse pattern (category quick-jump) but in a glassmorphic
// industrial style — not a busy ecommerce menu bar.
const items = [
  { slug: "Cement & Concrete",    label: "Cement",       Icon: Layers },
  { slug: "Steel & Reinforcement", label: "Steel",       Icon: Wrench },
  { slug: "Roofing Materials",     label: "Roofing",     Icon: HardHat },
  { slug: "Plumbing Materials",    label: "Plumbing",    Icon: Droplets },
  { slug: "Electrical Supplies",   label: "Electricals", Icon: Plug },
  { slug: "Paint & Finishing",     label: "Paints",      Icon: Paintbrush },
  { slug: "Water & Sanitation",    label: "Water Tanks", Icon: Container },
  { slug: "Tools & Equipment",     label: "Tools",       Icon: Hammer },
  { slug: "Tiles & Flooring",      label: "Tiles",       Icon: Boxes },
  { slug: "Timber & Lumber",       label: "Timber",      Icon: Construction },
];

function TopCategoryNav() {
  const scroller = useRef(null);
  const [canL, setCanL] = useState(false);
  const [canR, setCanR] = useState(true);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const update = () => {
      setCanL(el.scrollLeft > 4);
      setCanR(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scroll = (dx) =>
    scroller.current?.scrollBy({ left: dx, behavior: "smooth" });

  return (
    <div className="relative bg-charcoal-950 border-b border-white/[0.06]">
      {/* Subtle gold rule at the top — premium accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/30 to-transparent" />

      <div className="container-pro relative">
        {/* Left scroll button */}
        <button
          type="button"
          aria-label="Scroll categories left"
          onClick={() => scroll(-240)}
          className={`hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 items-center justify-center rounded-full bg-charcoal-900/90 border border-white/10 text-slate-200 hover:text-brand-300 hover:border-brand-400/40 transition ${
            canL ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Edge fades */}
        <div
          className={`pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-charcoal-950 to-transparent z-[5] transition-opacity ${
            canL ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-charcoal-950 to-transparent z-[5] transition-opacity ${
            canR ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          ref={scroller}
          className="overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          <ul className="flex items-stretch gap-1 md:gap-2 px-1 md:px-10 py-2">
            <li className="shrink-0">
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-charcoal-950 bg-brand-400 hover:bg-brand-300 transition"
              >
                <Boxes className="h-3.5 w-3.5" />
                All Products
              </Link>
            </li>
            {items.map((it) => (
              <li key={it.slug} className="shrink-0">
                <Link
                  to={`/products?category=${encodeURIComponent(it.slug)}`}
                  className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/[0.06] border border-transparent hover:border-white/10 transition"
                >
                  <span className="h-6 w-6 inline-flex items-center justify-center rounded-md bg-white/[0.04] text-brand-300 group-hover:bg-brand-400/15 group-hover:text-brand-200 transition">
                    <it.Icon className="h-3.5 w-3.5" />
                  </span>
                  {it.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right scroll button */}
        <button
          type="button"
          aria-label="Scroll categories right"
          onClick={() => scroll(240)}
          className={`hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 items-center justify-center rounded-full bg-charcoal-900/90 border border-white/10 text-slate-200 hover:text-brand-300 hover:border-brand-400/40 transition ${
            canR ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default TopCategoryNav;
