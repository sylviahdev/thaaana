import { ShieldCheck, FileText, Truck, HardHat } from "lucide-react";
import { Reveal, AnimatedCounter } from "./motion";

const points = [
  {
    n: "01",
    Icon: ShieldCheck,
    title: "KEBS-Certified Quality",
    body:
      "Every cement bag, steel bar and roofing sheet meets Kenya Bureau of Standards specifications. We don't compromise on safety.",
  },
  {
    n: "02",
    Icon: FileText,
    title: "Tailored Project Quotations",
    body:
      "Send your BOQ or material list and receive a written quotation within 4 hours. No hidden margins, no last-minute surprises.",
  },
  {
    n: "03",
    Icon: Truck,
    title: "Reliable Site Delivery",
    body:
      "Our own fleet of pickups and lorries delivers across Nairobi same-day, and to upcountry sites within 48 hours.",
  },
  {
    n: "04",
    Icon: HardHat,
    title: "Built for Contractors",
    body:
      "Credit terms for verified contractors, dedicated account managers, and BOQ quotations turned around in under 4 hours.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-white">
      <div className="container-pro py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="eyebrow text-brand-600">Why Choose THAANA</div>
            <h2 className="mt-3 heading-xl">
              We move materials so you can{" "}
              <span className="text-gradient-orange">move projects forward.</span>
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Construction runs on tight timelines. Late deliveries and substandard
              materials cost real money. For over a decade, we've helped contractors
              avoid both — by combining genuine stock, honest quotations and
              disciplined logistics.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
              <div className="card p-5">
                <div className="font-display text-2xl sm:text-3xl font-black tabular-nums text-charcoal-900">
                  <AnimatedCounter value={98} suffix="%" />
                </div>
                <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">
                  On-time delivery
                </div>
              </div>
              <div className="card p-5">
                <div className="font-display text-2xl sm:text-3xl font-black tabular-nums text-charcoal-900">
                  <AnimatedCounter value={4} suffix=" hrs" />
                </div>
                <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">
                  Avg. quote turnaround
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7 space-y-4">
            {points.map((p, i) => (
              <Reveal
                key={p.n}
                delay={i * 0.08}
                className="card p-6 sm:p-7 flex gap-5 hover:shadow-card hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="shrink-0">
                  <div className="h-12 w-12 rounded-xl bg-brand-50 ring-1 ring-brand-100 text-brand-600 inline-flex items-center justify-center">
                    <p.Icon className="h-5 w-5" />
                  </div>
                  <div className="font-display text-2xl font-black text-brand-400/40 leading-none mt-3 text-center">
                    {p.n}
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-charcoal-900 text-lg">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
