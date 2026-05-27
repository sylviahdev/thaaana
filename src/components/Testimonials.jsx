import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Quote, BadgeCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./motion";

const quotes = [
  {
    body:
      "We've moved 80% of our material spend to THAANA. Their quotes come back in under an hour and the trucks actually arrive on the day they say.",
    name: "James Kariuki",
    role: "Site Manager, Kariuki Build Partners",
    project: "12-unit residential, Ruiru",
    initials: "JK",
    tone: "from-brand-400 to-brand-600",
    rating: 5,
  },
  {
    body:
      "Honest weight, KEBS-grade steel, and credit terms that match how we get paid. They're the only supplier I trust for foundation pours.",
    name: "Esther Wambui",
    role: "MD, EW Construction Ltd.",
    project: "School block, Machakos",
    initials: "EW",
    tone: "from-emerald-500 to-emerald-700",
    rating: 5,
  },
  {
    body:
      "I called at 8 AM for 300 bags of cement and an emergency mabati order. Both were on site by 1 PM. That's not normal — that's THAANA.",
    name: "David Otieno",
    role: "Contractor, Otieno & Sons",
    project: "Warehouse, Athi River",
    initials: "DO",
    tone: "from-sky-500 to-sky-700",
    rating: 5,
  },
  {
    body:
      "The BOQ quotation they sent for our gated estate had every line item with alternates and lead times. Made my procurement meeting a 10-minute job.",
    name: "Faith Njeri",
    role: "Project Manager, Njeri Developments",
    project: "Estate development, Kiambu",
    initials: "FN",
    tone: "from-brick-500 to-brick-700",
    rating: 5,
  },
];

function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const next = useCallback(() => setI((v) => (v + 1) % quotes.length), []);
  const prev = useCallback(() => setI((v) => (v - 1 + quotes.length) % quotes.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 6500);
    return () => clearInterval(t);
  }, [paused, next]);

  const q = quotes[i];

  return (
    <section className="relative bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(245,166,35,0.06),transparent_60%)]" />
      <div className="container-pro py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <Reveal className="max-w-xl">
            <div className="eyebrow text-brand-600">Trusted by builders</div>
            <h2 className="mt-3 heading-xl">
              The supplier <span className="text-gradient-orange">contractors</span>{" "}
              keep coming back to.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="flex items-center gap-4 lg:flex-shrink-0">
            <div className="flex items-center gap-0.5">
              {[0, 1, 2, 3, 4].map((idx) => (
                <Star
                  key={idx}
                  className="h-5 w-5 text-brand-400 fill-brand-400"
                />
              ))}
            </div>
            <div className="leading-tight">
              <div className="font-display font-extrabold text-charcoal-900 tabular-nums">
                4.9 / 5.0
              </div>
              <div className="text-xs text-slate-500">
                Average across 140+ contractor reviews
              </div>
            </div>
          </Reveal>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative rounded-3xl bg-white border border-slate-200/70 shadow-card p-8 sm:p-10 lg:p-14 overflow-hidden">
            <Quote
              aria-hidden
              className="absolute top-6 right-6 h-20 w-20 text-brand-100"
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={q.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: q.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="h-4 w-4 text-brand-400 fill-brand-400"
                    />
                  ))}
                </div>
                <blockquote className="mt-5 font-display text-xl sm:text-2xl lg:text-3xl font-bold text-charcoal-900 leading-snug max-w-3xl">
                  "{q.body}"
                </blockquote>

                <figcaption className="mt-8 flex items-center gap-4 flex-wrap">
                  <div
                    className={`h-14 w-14 rounded-full bg-gradient-to-br ${q.tone} text-white font-display font-extrabold inline-flex items-center justify-center text-lg shadow-soft`}
                    aria-hidden
                  >
                    {q.initials}
                  </div>
                  <div className="leading-tight">
                    <div className="font-display font-bold text-charcoal-900 text-base">
                      {q.name}
                    </div>
                    <div className="text-sm text-slate-500">{q.role}</div>
                    <div className="mt-0.5 text-xs text-slate-400">{q.project}</div>
                  </div>
                  <div className="ml-auto inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-bold text-emerald-700 bg-emerald-50 ring-1 ring-emerald-100 rounded-full px-3 py-1.5">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    Verified
                  </div>
                </figcaption>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {quotes.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setI(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? "w-8 bg-brand-500" : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-white border border-slate-200 hover:border-brand-400 hover:text-brand-600 transition shadow-soft"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-charcoal-950 text-white hover:bg-brand-400 hover:text-charcoal-950 transition shadow-soft"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
