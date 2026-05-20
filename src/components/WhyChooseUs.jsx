const points = [
  {
    n: "01",
    title: "KEBS-Certified Quality",
    body: "Every cement bag, steel bar and roofing sheet we stock meets Kenya Bureau of Standards specifications. We don't compromise on safety.",
  },
  {
    n: "02",
    title: "Transparent Trade Pricing",
    body: "Published price list, volume discounts, and project-based quotations. No hidden margins, no last-minute surprises.",
  },
  {
    n: "03",
    title: "Reliable Site Delivery",
    body: "Our own fleet of pickups and lorries delivers across Nairobi same-day, and to upcountry sites within 48 hours.",
  },
  {
    n: "04",
    title: "Built for Contractors",
    body: "Credit terms for verified contractors, dedicated account managers, and bill-of-quantities pricing in under 4 hours.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-white">
      <div className="container-pro py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="text-xs uppercase tracking-[0.18em] text-brand-600 font-semibold">
              Why Choose Thaana
            </div>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              We move materials so you can move projects forward.
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Construction runs on tight timelines. Late deliveries and substandard
              materials cost real money. For over a decade, we've helped contractors
              avoid both — by combining genuine stock, fair pricing and disciplined
              logistics.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
              <div className="card p-5">
                <div className="font-display text-2xl font-bold text-slate-900">
                  98%
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  On-time delivery
                </div>
              </div>
              <div className="card p-5">
                <div className="font-display text-2xl font-bold text-slate-900">
                  4 hrs
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Avg. quote turnaround
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {points.map((p) => (
              <div
                key={p.n}
                className="card p-6 sm:p-7 flex gap-5 hover:shadow-card hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="font-display text-3xl font-extrabold text-brand-400 leading-none w-12 shrink-0">
                  {p.n}
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-900 text-lg">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
