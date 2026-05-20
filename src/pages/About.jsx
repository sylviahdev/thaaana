import Layout from "../components/Layout";
import CTASection from "../components/CTASection";

const values = [
  {
    title: "Integrity first",
    body: "We sell exactly what's on the label — no rebagged cement, no understrength steel.",
  },
  {
    title: "Built for the trade",
    body: "Our pricing, logistics and payment terms are designed around how contractors actually work.",
  },
  {
    title: "Long-term partnerships",
    body: "We'd rather quote fairly and earn repeat business than win one deal and lose a client.",
  },
];

function About() {
  return (
    <Layout>
      <section className="bg-slate-900 text-white">
        <div className="container-pro py-16 lg:py-20">
          <nav className="text-xs text-slate-400">
            Home <span className="mx-1.5">/</span>
            <span className="text-slate-200">About</span>
          </nav>
          <h1 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold leading-tight max-w-3xl">
            Supplying materials contractors can trust.
          </h1>
          <p className="mt-5 max-w-2xl text-slate-300 text-lg">
            Thaana Hardware was founded in Ekalakala, Machakos in 2010 with a simple promise: to sell only genuine construction materials at fair prices and deliver on time.
          </p>
        </div>
      </section>

      <section className="container-pro py-16 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-card aspect-[4/3] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
            <svg className="absolute inset-0 h-full w-full opacity-10" preserveAspectRatio="none">
              <defs>
                <pattern id="aboutGrid" width="32" height="32" patternUnits="userSpaceOnUse">
                  <path d="M32 0H0V32" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#aboutGrid)" />
            </svg>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(245,166,35,0.25),transparent_55%)]" />
            <div className="relative h-full flex flex-col justify-end p-8 text-white">
              <div className="text-xs uppercase tracking-[0.18em] text-brand-300 font-semibold">
                Our Yard
              </div>
              <div className="mt-2 font-display text-2xl sm:text-3xl font-bold">
                Ekalakala, Machakos.
              </div>
              <div className="mt-1 text-sm text-slate-300 max-w-sm">
                Open Monday–Saturday for walk-in customers and contractor pickups.
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 card p-5 max-w-xs hidden sm:block">
            <div className="text-xs uppercase tracking-wider text-slate-500">
              Branch HQ
            </div>
            <div className="mt-1 font-display font-bold text-slate-900">
              Full stockholding across 90+ SKUs.
            </div>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-brand-600 font-semibold">
            Our story
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold text-slate-900">
            From a single yard to Kenya's most reliable builders' merchant.
          </h2>
          <div className="mt-5 space-y-4 text-slate-600 leading-relaxed">
            <p>
              We started with one truck and a 200-square-metre yard, supplying cement
              and steel to small contractors around Nairobi. Today we operate from a
              4,500 sqm distribution facility and serve hundreds of contractors,
              developers and retailers across the country.
            </p>
            <p>
              What hasn't changed is the way we work. Every order — from a single bag
              of cement to a 40-foot container of mabati — is treated the same: real
              stock, honest pricing, and delivery when promised.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-5">
            <div>
              <div className="font-display text-3xl font-bold text-slate-900">12+</div>
              <div className="text-xs text-slate-500 mt-1">Years</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-slate-900">500+</div>
              <div className="text-xs text-slate-500 mt-1">Contractors</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-slate-900">8</div>
              <div className="text-xs text-slate-500 mt-1">Categories</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-slate-100">
        <div className="container-pro py-16 lg:py-20">
          <h2 className="font-display text-3xl font-bold text-slate-900 max-w-xl">
            What we stand for.
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <div key={v.title} className="card p-6">
                <div className="font-display text-brand-500 text-sm font-bold">
                  0{i + 1}
                </div>
                <h3 className="mt-2 font-display text-xl font-bold text-slate-900">
                  {v.title}
                </h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}

export default About;
