import { Truck, MapPin, Zap, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "./motion";
import { whatsappLink } from "../data/site";

// Approximate plot positions on a 320x360 stylised map of southern Kenya.
const regions = [
  { name: "Nairobi",  speed: "Same-day",  x: 168, y: 200, tier: 1 },
  { name: "Kiambu",   speed: "Same-day",  x: 162, y: 178, tier: 1 },
  { name: "Machakos", speed: "Same-day",  x: 198, y: 218, tier: 1 },
  { name: "Kajiado",  speed: "Next-day",  x: 150, y: 244, tier: 2 },
  { name: "Nakuru",   speed: "Next-day",  x: 110, y: 168, tier: 2 },
  { name: "Eldoret",  speed: "48 hours",  x: 78,  y: 130, tier: 3 },
  { name: "Mombasa",  speed: "48 hours",  x: 268, y: 296, tier: 3 },
];

const speedTone = {
  "Same-day": "bg-emerald-50 text-emerald-700 ring-emerald-100",
  "Next-day": "bg-amber-50 text-amber-700 ring-amber-100",
  "48 hours": "bg-sky-50 text-sky-700 ring-sky-100",
};

function DeliveryCoverage() {
  return (
    <section className="bg-white">
      <div className="container-pro py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Heading column */}
          <Reveal className="lg:col-span-5">
            <div className="eyebrow text-brand-600">Delivery Coverage</div>
            <h2 className="mt-3 heading-xl">
              Materials delivered <span className="text-gradient-orange">across Kenya</span>,
              on the day you booked.
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Our distribution network reaches 14 counties from a central Machakos hub.
              Same-day cut-off across Nairobi metro is 11 AM; upcountry sites are
              served on rolling 48-hour schedules.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              {[
                { Icon: Zap, label: "Same-day", note: "Nairobi metro" },
                { Icon: Calendar, label: "Next-day", note: "Surrounding counties" },
                { Icon: Truck, label: "Bulk transport", note: "Lorry-load logistics" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="card p-4 flex sm:flex-col gap-3 sm:gap-2"
                >
                  <s.Icon className="h-5 w-5 text-brand-500 shrink-0" />
                  <div>
                    <div className="font-display font-bold text-charcoal-900 text-sm">
                      {s.label}
                    </div>
                    <div className="text-xs text-slate-500">{s.note}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={whatsappLink(
                "Hello THAANA, I'd like to confirm delivery to my site. Location:"
              )}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-charcoal-900 hover:text-brand-600 transition"
            >
              Check delivery for your area
              <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>

          {/* Map column */}
          <Reveal delay={0.15} className="lg:col-span-7 relative">
            <div className="relative rounded-3xl bg-gradient-to-br from-charcoal-950 via-charcoal-900 to-charcoal-950 p-6 sm:p-8 overflow-hidden shadow-card">
              {/* Grid */}
              <svg className="absolute inset-0 h-full w-full opacity-[0.06]" preserveAspectRatio="none" aria-hidden>
                <defs>
                  <pattern id="mapGrid" width="32" height="32" patternUnits="userSpaceOnUse">
                    <path d="M32 0H0V32" fill="none" stroke="white" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#mapGrid)" />
              </svg>

              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-400 font-bold">
                    <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Live route map
                  </div>
                  <div className="text-xs text-slate-500">Hub · Machakos</div>
                </div>

                {/* Map SVG */}
                <div className="relative aspect-[8/9] sm:aspect-[10/9] w-full">
                  <svg viewBox="0 0 320 360" className="absolute inset-0 h-full w-full" aria-hidden>
                    {/* Stylised Kenya silhouette */}
                    <defs>
                      <linearGradient id="kenyaFill" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#F5A623" stopOpacity="0.18" />
                        <stop offset="100%" stopColor="#F5A623" stopOpacity="0.04" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M40 70 L130 30 L210 50 L260 80 L290 130 L300 200 L280 270 L300 320 L240 340 L150 320 L100 280 L50 240 L30 180 L20 120 Z"
                      fill="url(#kenyaFill)"
                      stroke="#F5A623"
                      strokeOpacity="0.35"
                      strokeWidth="1.5"
                    />

                    {/* Routes radiating from hub (Machakos) */}
                    {regions
                      .filter((r) => r.name !== "Machakos")
                      .map((r, i) => (
                        <motion.line
                          key={r.name}
                          x1="198"
                          y1="218"
                          x2={r.x}
                          y2={r.y}
                          stroke="#F5A623"
                          strokeWidth="1.5"
                          strokeDasharray="3 5"
                          strokeOpacity="0.5"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.2 + i * 0.1 }}
                        />
                      ))}

                    {/* Region pins */}
                    {regions.map((r, i) => (
                      <motion.g
                        key={r.name}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: 0.4 + i * 0.08,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        {/* Pulse ring for tier-1 (same-day) */}
                        {r.tier === 1 && (
                          <circle
                            cx={r.x}
                            cy={r.y}
                            r="12"
                            fill="none"
                            stroke="#34D399"
                            strokeWidth="1.5"
                            opacity="0.4"
                          >
                            <animate attributeName="r" values="6;18;6" dur="2.4s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0.7;0;0.7" dur="2.4s" repeatCount="indefinite" />
                          </circle>
                        )}
                        <circle
                          cx={r.x}
                          cy={r.y}
                          r={r.name === "Machakos" ? 7 : 5}
                          fill={r.name === "Machakos" ? "#F5A623" : "white"}
                          stroke={r.name === "Machakos" ? "white" : "#F5A623"}
                          strokeWidth="2"
                        />
                        <text
                          x={r.x + 10}
                          y={r.y + 4}
                          fontFamily="Inter, sans-serif"
                          fontWeight="700"
                          fontSize="11"
                          fill="white"
                        >
                          {r.name}
                        </text>
                      </motion.g>
                    ))}
                  </svg>
                </div>

                {/* Legend pills */}
                <Stagger className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {regions.map((r) => (
                    <StaggerItem
                      key={r.name}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur`}
                    >
                      <MapPin className="h-3.5 w-3.5 text-brand-300 shrink-0" />
                      <div className="leading-tight min-w-0">
                        <div className="text-[12px] font-bold text-white truncate">
                          {r.name}
                        </div>
                        <div
                          className={`text-[10px] font-semibold mt-0.5 inline-flex px-1.5 py-0.5 rounded-full ring-1 ${speedTone[r.speed]}`}
                        >
                          {r.speed}
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default DeliveryCoverage;
