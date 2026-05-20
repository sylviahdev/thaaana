const items = [
  {
    title: "Quality Materials",
    desc: "Only stock from KEBS-certified manufacturers and trusted importers.",
    icon: (
      <path
        d="M9 12l2 2 4-4M12 3l8 4v5c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Trusted by Contractors",
    desc: "Preferred supplier for 500+ active construction firms across Kenya.",
    icon: (
      <path
        d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M22 21v-2a4 4 0 0 0-3-3.87M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7-4a4 4 0 1 1 0 8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Competitive Pricing",
    desc: "Direct-from-factory pricing with project discounts for bulk orders.",
    icon: (
      <path
        d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Fast Delivery",
    desc: "Same-day dispatch in Nairobi. Nationwide logistics on request.",
    icon: (
      <path
        d="M3 17V6h13v11M16 17h5l-2-5h-3M5.5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm13 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

function TrustSection() {
  return (
    <section className="bg-white border-b border-slate-100">
      <div className="container-pro py-14 lg:py-20">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.18em] text-brand-600 font-semibold">
            Why Thaana
          </div>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-slate-900">
            A supplier contractors actually rely on.
          </h2>
          <p className="mt-3 text-slate-600">
            We've built our reputation on three things: consistent quality, fair pricing,
            and getting materials to site when promised.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <div
              key={it.title}
              className="group card p-6 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-400 group-hover:text-slate-900 transition">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                  {it.icon}
                </svg>
              </div>
              <h3 className="mt-5 font-display font-bold text-slate-900 text-lg">
                {it.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustSection;
