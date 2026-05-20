import { Link } from "react-router-dom";
import { whatsappLink } from "../data/site";
import ProductImage from "./ProductImage";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      {/* Industrial gradient backdrop — no people */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,166,35,0.22),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_120%,rgba(56,189,248,0.10),transparent_50%)]" />
        {/* subtle grid */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.06]" preserveAspectRatio="none">
          <defs>
            <pattern id="heroGrid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M48 0H0V48" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>
      </div>

      <div className="relative container-pro grid lg:grid-cols-12 gap-10 items-center py-20 lg:py-28">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-medium tracking-wide text-slate-200 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-300 animate-pulse" />
            Trusted by 500+ contractors across Ekalakala, Machakos & all of Kenya
          </span>

          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
            Quality Building <br />
            Materials.{" "}
            <span className="text-brand-300">Trade Prices.</span> <br />
            Delivered Across Kenya.
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-slate-300 leading-relaxed">
            From cement and steel to roofing, paint, and power tools, Thaana Hardware
            supplies contractors, developers, and homeowners with reliable building
            materials, sourced from leading Kenyan and international manufacturers.
          </p>
          <p className="mt-4 max-w-xl text-base sm:text-lg font-semibold text-white leading-snug">
            Delivered fast. Priced fairly. <span className="text-brand-300">Built for contractors who demand durability and reliable supply..</span>
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/contact" className="btn-primary">
              Request a Quotation
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold px-5 py-3 rounded-xl transition"
            >
              Browse Products
            </Link>
            <a
              href={whatsappLink("Hello Thaana Hardware, I'd like to chat about my project.")}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition ml-2"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366]/20 text-[#25D366]">
                ✓
              </span>
              Chat with us on WhatsApp
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { k: "12+", v: "Years in business" },
              { k: "500+", v: "Active contractors" },
              { k: "8", v: "Material categories" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-2xl sm:text-3xl font-bold text-white">
                  {s.k}
                </dt>
                <dd className="text-xs sm:text-sm text-slate-400 mt-1">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Floating quote card */}
        <div className="lg:col-span-5 lg:justify-self-end w-full">
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-400/20 blur-3xl rounded-3xl" />
            <div className="relative bg-white text-slate-900 rounded-3xl shadow-card p-6 sm:p-7 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500">
                    Today's Trade Price
                  </div>
                  <div className="font-display text-xl font-bold mt-1">
                    Bamburi Nguvu 32.5N
                  </div>
                </div>
                <span className="chip bg-emerald-50 text-emerald-700">
                  In Stock
                </span>
              </div>

              <div className="mt-5 flex items-end justify-between border-b border-slate-100 pb-5">
                <div>
                  <div className="font-display text-3xl font-extrabold">
                    KES 780
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">per 50kg bag · ex. VAT</div>
                </div>
                <div className="h-20 w-20 rounded-xl overflow-hidden shrink-0">
                  <ProductImage
                    product={{
                      name: "Bamburi Nguvu 32.5N",
                      category: "Cement & Concrete",
                    }}
                  />
                </div>
              </div>

              <ul className="mt-5 space-y-2.5 text-sm text-slate-600">
                {[
                  "Volume discounts above 50 bags",
                  "Free delivery within Nairobi (200+ bags)",
                  "Same-day dispatch before 2:00 PM",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-100 text-brand-600 text-[10px] font-bold">
                      ✓
                    </span>
                    {t}
                  </li>
                ))}
              </ul>

              <Link
                to="/products"
                className="btn-dark mt-6 w-full text-sm !py-3"
              >
                See full price list
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom marquee of brand names */}
      <div className="relative border-t border-white/10 bg-slate-950/60 backdrop-blur">
        <div className="container-pro py-4 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.2em] text-slate-500">
          <span className="text-slate-400">Brands we stock</span>
          <span>Bamburi</span>
          <span>Simba Cement</span>
          <span>Mabati Rolling Mills</span>
          <span>Crown Paints</span>
          <span>Sadolin</span>
          <span>Bosch</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
