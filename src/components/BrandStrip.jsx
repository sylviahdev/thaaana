import { ShieldCheck, Award, Truck, Smile } from "lucide-react";
import { AnimatedCounter, Reveal } from "./motion";

const brands = [
  { name: "BAMBURI", tagline: "CEMENT" },
  { name: "SIMBA", tagline: "CEMENT" },
  { name: "DEVKI", tagline: "STEEL" },
  { name: "MABATI", tagline: "ROLLING MILLS" },
  { name: "CROWN", tagline: "PAINTS" },
  { name: "SADOLIN", tagline: "FINISHES" },
  { name: "BOSCH", tagline: "TOOLS" },
  { name: "SAVANNAH", tagline: "CEMENT" },
  { name: "KENTANK", tagline: "TANKS" },
  { name: "ROTO", tagline: "TANKS" },
];

const stats = [
  { Icon: ShieldCheck, value: 12, suffix: "+", label: "Years of Experience" },
  { Icon: Award, value: 14, suffix: "", label: "Counties Covered" },
  { Icon: Truck, value: 98, suffix: "%", label: "On-time Delivery" },
  { Icon: Smile, value: 99, suffix: "%", label: "Customer Satisfaction" },
];

function BrandStrip() {
  return (
    <section className="bg-white border-b border-slate-100">
      <div className="container-pro py-16 sm:py-20">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <div className="eyebrow text-brand-600">Trust & Credibility</div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-charcoal-900 max-w-2xl">
            Stocked direct from <span className="text-gradient-orange">KEBS-certified</span> manufacturers
          </h2>
        </Reveal>

        {/* Brand logos marquee */}
        <Reveal delay={0.1} className="mt-10 overflow-hidden mask-fade-edges">
          <div className="flex items-center gap-12 sm:gap-16 animate-marquee whitespace-nowrap">
            {[...brands, ...brands].map((b, i) => (
              <div
                key={`${b.name}-${i}`}
                className="group flex flex-col items-center text-center shrink-0 select-none grayscale hover:grayscale-0 transition"
              >
                <span className="font-display font-black tracking-[0.06em] text-base sm:text-lg text-charcoal-400 group-hover:text-charcoal-900 transition-colors">
                  {b.name}
                </span>
                <span className="mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-charcoal-300 group-hover:text-brand-500 font-bold transition-colors">
                  {b.tagline}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Stat strip */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className="card p-5 sm:p-6 flex items-start gap-4"
            >
              <span className="h-11 w-11 inline-flex items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 shrink-0">
                <s.Icon className="h-5 w-5" />
              </span>
              <div>
                <div className="font-display text-2xl sm:text-3xl font-black tabular-nums text-charcoal-900">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-1 uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandStrip;
