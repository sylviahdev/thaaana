import { Link } from "react-router-dom";
import {
  Truck,
  HandCoins,
  CalendarClock,
  Headphones,
  PackageCheck,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Reveal, AnimatedCounter } from "./motion";
import { whatsappLink } from "../data/site";

const features = [
  {
    Icon: PackageCheck,
    title: "Bulk Supply Capability",
    body: "Stockholding for cement, steel and roofing in truckload volumes — ready to dispatch.",
  },
  {
    Icon: Truck,
    title: "Direct Site Delivery",
    body: "Own fleet of 3-tonne pickups and 14-tonne lorries delivering across Kenya.",
  },
  {
    Icon: Headphones,
    title: "Dedicated Account Support",
    body: "A named account manager for every active contractor — call them direct.",
  },
  {
    Icon: CalendarClock,
    title: "Scheduled Supply Contracts",
    body: "Lock in pricing and rolling deliveries across multi-month projects.",
  },
  {
    Icon: HandCoins,
    title: "Credit Terms Available",
    body: "30-day terms for verified contractors with active project documentation.",
  },
  {
    Icon: ShieldCheck,
    title: "Fast Procurement Support",
    body: "Quotes within 4 hours, including alternates for out-of-stock items.",
  },
];

function BulkOrders() {
  return (
    <section
      id="bulk"
      className="relative bg-charcoal-950 text-white overflow-hidden scroll-mt-24"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-charcoal-950 to-black" />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-400/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-brick-500/15 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.05]" preserveAspectRatio="none" aria-hidden>
          <defs>
            <pattern id="bulkGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0V40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bulkGrid)" />
        </svg>
      </div>

      <div className="container-pro py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Heading column */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="eyebrow">Built for Contractors</div>
              <h2 className="mt-3 heading-xl-dark">
                Reliable supply partner for{" "}
                <span className="text-gradient-orange">contractors</span> &
                construction projects.
              </h2>
              <p className="mt-5 text-slate-300/90 leading-relaxed">
                When a site stops, money burns. Thaana Hardware exists to keep your
                crew moving — with the materials you need, in the volumes you ordered,
                on the day you booked.
              </p>
            </Reveal>

            {/* Animated counter strip */}
            <Reveal delay={0.15} className="mt-10 grid grid-cols-3 gap-3 sm:gap-5">
              {[
                { v: 4500, suffix: " m²", label: "Yard Stockholding" },
                { v: 500, suffix: "+", label: "Active Contractors" },
                { v: 14, suffix: "", label: "Counties Served" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5 backdrop-blur"
                >
                  <div className="font-display text-2xl sm:text-3xl font-black tabular-nums text-white">
                    <AnimatedCounter value={s.v} suffix={s.suffix} />
                  </div>
                  <div className="text-[10px] sm:text-[11px] mt-1 text-slate-400 uppercase tracking-wider">
                    {s.label}
                  </div>
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.3} className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="btn-primary">
                Open a Contractor Account
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappLink(
                  "Hello THAANA, I'd like to discuss a bulk supply contract for my project."
                )}
                target="_blank"
                rel="noreferrer"
                className="btn-outline-dark"
              >
                Discuss on WhatsApp
              </a>
            </Reveal>
          </div>

          {/* Feature grid column */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3 sm:gap-4">
            {features.map((f, i) => (
              <Reveal
                key={f.title}
                delay={i * 0.06}
                className="group relative rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 p-5 sm:p-6 backdrop-blur transition"
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-brand-400/10 via-transparent to-transparent" />
                <div className="relative">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-400/15 ring-1 ring-brand-400/30 text-brand-300 group-hover:bg-brand-400 group-hover:text-charcoal-950 transition">
                    <f.Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display font-bold text-white text-base sm:text-lg">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300/90 leading-relaxed">
                    {f.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BulkOrders;
