import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Handshake,
  Truck,
  Award,
  Hammer,
  Users,
  Quote,
  ArrowRight,
  MapPin,
} from "lucide-react";
import Layout from "../components/Layout";
import CTASection from "../components/CTASection";
import { Reveal, Stagger, StaggerItem, AnimatedCounter } from "../components/motion";
import { whatsappLink } from "../data/site";

const values = [
  {
    Icon: ShieldCheck,
    title: "Integrity first",
    body: "We sell exactly what's on the label — no rebagged cement, no understrength steel. Every bag, bar and bundle is traceable to a KEBS-certified manufacturer.",
  },
  {
    Icon: Hammer,
    title: "Built for the trade",
    body: "Quotations, logistics and payment terms designed around how contractors actually work — site delivery windows, M-Pesa Till, 30-day terms for vetted projects.",
  },
  {
    Icon: Handshake,
    title: "Long-term partnerships",
    body: "We'd rather quote fairly and earn repeat business than win one deal and lose a client. Most of our top customers have been with us for five years or more.",
  },
];

const milestones = [
  { year: "2010", title: "Founded in Ekalakala", body: "Started with one truck and a 200 sqm yard supplying cement and steel to local contractors." },
  { year: "2014", title: "First major contractor account", body: "Won our first 40-foot container monthly tender from a Nairobi-based developer." },
  { year: "2018", title: "Mabati & roofing line added", body: "Expanded into roofing and finishing to become a full-shell builders' merchant." },
  { year: "2022", title: "4,500 sqm distribution hub", body: "Moved into our current yard, with bulk storage and same-day Nairobi dispatch capacity." },
  { year: "2026", title: "14 counties, 1,200+ SKUs", body: "Serving contractors from Mombasa to Eldoret with a 4-hour quotation SLA." },
];

function YardScene() {
  // Painterly SVG of the THAANA yard — same illustration style as PhotoBanner.
  return (
    <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="ab-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FCD9A8" />
          <stop offset="60%" stopColor="#F5C188" />
          <stop offset="100%" stopColor="#C99070" />
        </linearGradient>
        <linearGradient id="ab-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6B5B4F" />
          <stop offset="100%" stopColor="#3D332B" />
        </linearGradient>
        <linearGradient id="ab-bag" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F4EFE6" />
          <stop offset="100%" stopColor="#C9C2B3" />
        </linearGradient>
        <radialGradient id="ab-sun" cx="78%" cy="22%" r="50%">
          <stop offset="0%" stopColor="#FFF4D6" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FFF4D6" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="800" height="380" fill="url(#ab-sky)" />
      <rect y="380" width="800" height="220" fill="url(#ab-ground)" />
      <rect width="800" height="600" fill="url(#ab-sun)" />

      {/* warehouse */}
      <polygon points="40,380 40,210 240,180 440,210 440,380" fill="#5C4D3F" />
      <polygon points="40,210 240,180 440,210" fill="#3D332B" />
      <rect x="80" y="240" width="50" height="60" fill="#2D2620" />
      <rect x="160" y="240" width="50" height="60" fill="#2D2620" />
      <rect x="240" y="240" width="50" height="60" fill="#2D2620" />
      <rect x="320" y="240" width="50" height="60" fill="#2D2620" />
      <rect x="180" y="320" width="120" height="60" fill="#9C9587" />

      {/* THAANA sign */}
      <rect x="120" y="195" width="240" height="34" rx="2" fill="#F5A623" stroke="#0F1012" strokeWidth="1.5" />
      <text x="240" y="220" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="18" fill="#0F1012" letterSpacing="2">
        THAANA HARDWARE
      </text>

      {/* truck */}
      <rect x="500" y="320" width="180" height="60" rx="4" fill="#1F2937" />
      <rect x="500" y="300" width="60" height="22" fill="#1F2937" />
      <rect x="580" y="332" width="100" height="32" fill="#9CA3AF" />
      <circle cx="530" cy="390" r="14" fill="#0F172A" />
      <circle cx="660" cy="390" r="14" fill="#0F172A" />

      {/* pallet of bags */}
      <rect x="490" y="450" width="220" height="14" fill="#3D332B" />
      <rect x="490" y="464" width="220" height="6" fill="#2D2620" />
      {[0, 1, 2].map((row) => (
        <g key={row} transform={`translate(500, ${450 - row * 36})`}>
          {[0, 1].map((col) => (
            <g key={col} transform={`translate(${col * 100}, 0)`}>
              <path d="M0 36 Q10 28 50 28 Q90 28 100 36 L100 4 Q90 -4 50 -4 Q10 -4 0 4 Z" fill="url(#ab-bag)" stroke="#9C9587" strokeWidth="0.8" />
              <rect x="14" y="6" width="72" height="22" fill="#C8202E" />
              <text x="50" y="22" textAnchor="middle" fill="white" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="10" letterSpacing="0.5">
                BAMBURI
              </text>
            </g>
          ))}
        </g>
      ))}

      {/* rebar bundle */}
      <g stroke="#7A6F5C" strokeWidth="3" opacity="0.85">
        {[0, 1, 2, 3].map((i) => (
          <line key={i} x1="80" y1={460 + i * 6} x2="380" y2={460 + i * 6} />
        ))}
      </g>

      {/* atmospheric haze */}
      <rect width="800" height="600" fill="url(#ab-sun)" />
      <rect width="800" height="120" fill="url(#ab-sky)" opacity="0.4" />
    </svg>
  );
}

function About() {
  useEffect(() => {
    document.title = "About THAANA Hardware · Builders' merchant in Machakos, Kenya";
  }, []);

  return (
    <Layout>
      {/* ============ Hero ============ */}
      <section className="relative bg-charcoal-950 text-white overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(245,166,35,0.15),transparent_60%)]" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-brick-500/15 blur-3xl -z-10" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.05] -z-10" preserveAspectRatio="none" aria-hidden>
          <defs>
            <pattern id="aboutHeroGrid" width="56" height="56" patternUnits="userSpaceOnUse">
              <path d="M56 0H0V56" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#aboutHeroGrid)" />
        </svg>

        <div className="container-pro py-16 lg:py-24">
          <nav className="text-xs text-slate-400">
            <Link to="/" className="hover:text-brand-300 transition">Home</Link>
            <span className="mx-1.5">/</span>
            <span className="text-slate-200">About</span>
          </nav>
          <Reveal>
            <div className="mt-6 eyebrow">Our Story</div>
            <h1 className="mt-3 font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] max-w-3xl">
              Supplying materials contractors can{" "}
              <span className="text-gradient-orange">trust.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-slate-300 text-base sm:text-lg leading-relaxed">
              THAANA Hardware was founded in Ekalakala, Machakos in 2010 with a
              simple promise: to supply only genuine construction materials, quote
              them honestly, and deliver on time.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ Story + yard visual ============ */}
      <section className="bg-white">
        <div className="container-pro py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <Reveal className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-card aspect-[4/3] bg-charcoal-900">
                <YardScene />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/85 via-charcoal-950/20 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-7 sm:p-8 text-white">
                  <span className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-full bg-brand-400/15 ring-1 ring-brand-400/30 text-brand-300 text-[10px] font-bold uppercase tracking-[0.18em]">
                    <MapPin className="h-3 w-3" />
                    Our Yard
                  </span>
                  <div className="mt-3 font-display text-2xl sm:text-3xl font-extrabold">
                    Ekalakala, Machakos County.
                  </div>
                  <div className="mt-1.5 text-sm text-slate-300 max-w-md">
                    4,500 sqm distribution facility — open Monday–Saturday for
                    walk-in customers and contractor pickups.
                  </div>
                </div>
              </div>

              <div className="hidden sm:block absolute -mt-12 ml-8 sm:ml-12 lg:ml-16">
                <div className="card p-5 max-w-xs bg-white">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-brand-600 font-bold">
                    Stock holding
                  </div>
                  <div className="mt-1.5 font-display font-extrabold text-charcoal-900 leading-snug">
                    1,200+ SKUs across 14 categories — ready to dispatch.
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-6">
              <div className="eyebrow text-brand-600">How we got here</div>
              <h2 className="mt-3 heading-xl">
                From a single yard to Kenya's most{" "}
                <span className="text-gradient-orange">reliable</span> builders'
                merchant.
              </h2>
              <div className="mt-6 space-y-4 text-charcoal-500 leading-relaxed">
                <p>
                  We started with one truck and a 200-square-metre yard,
                  supplying cement and steel to small contractors around
                  Nairobi. Today we operate from a 4,500&nbsp;sqm distribution
                  facility and serve hundreds of contractors, developers and
                  retailers across the country.
                </p>
                <p>
                  What hasn't changed is the way we work. Every quotation — from
                  a single bag of cement to a 40-foot container of mabati — is
                  treated the same: real stock, honest answers, and delivery
                  when promised.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-5">
                <div>
                  <div className="font-display text-3xl sm:text-4xl font-black text-charcoal-900 tabular-nums">
                    <AnimatedCounter value={15} suffix="+" />
                  </div>
                  <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">
                    Years
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl sm:text-4xl font-black text-charcoal-900 tabular-nums">
                    <AnimatedCounter value={500} suffix="+" />
                  </div>
                  <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">
                    Contractors
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl sm:text-4xl font-black text-charcoal-900 tabular-nums">
                    <AnimatedCounter value={14} suffix="" />
                  </div>
                  <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">
                    Counties
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/products" className="btn-primary">
                  Browse our catalogue
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={whatsappLink("Hello THAANA Hardware, I'd like to know more about your services.")}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline"
                >
                  Talk to our team
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ Values ============ */}
      <section className="bg-charcoal-950 text-white border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(245,166,35,0.10),transparent_60%)]" />
        <div className="container-pro py-20 lg:py-28">
          <Reveal className="max-w-2xl">
            <div className="eyebrow">What we stand for</div>
            <h2 className="mt-3 heading-xl-dark">
              Three principles that govern how we{" "}
              <span className="text-gradient-orange">work.</span>
            </h2>
            <p className="mt-5 text-slate-300/90 text-base sm:text-lg leading-relaxed">
              These aren't slogans. They're the reason most of our top customers
              have been buying from us for five years or more.
            </p>
          </Reveal>

          <Stagger className="mt-12 grid md:grid-cols-3 gap-5 lg:gap-6">
            {values.map((v, i) => (
              <StaggerItem key={v.title}>
                <article className="group relative h-full card-dark p-7 lg:p-8 hover:border-brand-400/40 transition overflow-hidden">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-400/[0.06] blur-3xl group-hover:bg-brand-400/[0.12] transition" />
                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <span className="h-11 w-11 inline-flex items-center justify-center rounded-xl bg-brand-400/15 ring-1 ring-brand-400/30 text-brand-300">
                        <v.Icon className="h-5 w-5" />
                      </span>
                      <span className="font-display text-brand-300/70 text-sm font-bold tracking-[0.18em]">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-xl lg:text-2xl font-extrabold text-white leading-tight">
                      {v.title}
                    </h3>
                    <p className="mt-3 text-slate-300/90 leading-relaxed">
                      {v.body}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============ Timeline ============ */}
      <section className="bg-white">
        <div className="container-pro py-20 lg:py-28">
          <Reveal className="max-w-2xl">
            <div className="eyebrow text-brand-600">Milestones</div>
            <h2 className="mt-3 heading-xl">
              Fifteen years on the{" "}
              <span className="text-gradient-orange">yard.</span>
            </h2>
          </Reveal>

          <div className="mt-14 relative">
            {/* vertical rule on desktop */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-400/0 via-brand-400/30 to-brand-400/0" />

            <div className="space-y-10 md:space-y-16">
              {milestones.map((m, i) => {
                const right = i % 2 === 1;
                return (
                  <Reveal key={m.year} delay={i * 0.06}>
                    <div className={`md:grid md:grid-cols-2 md:gap-12 items-center ${right ? "md:[&>*:first-child]:order-2" : ""}`}>
                      <div className={`relative ${right ? "md:text-left md:pl-10" : "md:text-right md:pr-10"}`}>
                        <div className="font-display text-5xl sm:text-6xl font-black text-gradient-orange tabular-nums">
                          {m.year}
                        </div>
                        <div className="mt-2 font-display text-xl sm:text-2xl font-extrabold text-charcoal-900">
                          {m.title}
                        </div>
                        <p className="mt-2 text-charcoal-500 leading-relaxed max-w-md md:inline-block">
                          {m.body}
                        </p>
                      </div>
                      <div className={`hidden md:flex items-center ${right ? "justify-start" : "justify-end"}`}>
                        <span className="relative h-4 w-4 rounded-full bg-brand-400 ring-4 ring-brand-400/20 shadow-glow" />
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============ Trust strip ============ */}
      <section className="bg-charcoal-950 text-white border-t border-white/5">
        <div className="container-pro py-14 lg:py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { Icon: ShieldCheck, title: "KEBS-certified stock", body: "Every batch sourced directly from licensed manufacturers." },
            { Icon: Truck, title: "Nationwide delivery", body: "14 counties served — same-day dispatch within Nairobi." },
            { Icon: Award, title: "4-hour quote SLA", body: "Send a BOQ before lunch, get a quotation before close." },
            { Icon: Users, title: "Contractor-first terms", body: "M-Pesa, EFT, and 30-day terms for vetted projects." },
          ].map((t) => (
            <div key={t.title} className="flex items-start gap-4">
              <span className="h-11 w-11 shrink-0 inline-flex items-center justify-center rounded-xl bg-brand-400/15 ring-1 ring-brand-400/30 text-brand-300">
                <t.Icon className="h-5 w-5" />
              </span>
              <div>
                <div className="font-display font-extrabold text-white">
                  {t.title}
                </div>
                <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                  {t.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ Testimonial pull-quote ============ */}
      <section className="bg-white">
        <div className="container-pro py-20 lg:py-28">
          <Reveal className="max-w-4xl mx-auto text-center">
            <Quote className="h-10 w-10 text-brand-400/40 mx-auto" />
            <blockquote className="mt-6 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal-900 leading-snug tracking-tight">
              "THAANA quoted on a Tuesday, delivered a 28-tonne load to our
              Ruiru site on Thursday, and the cement was exactly what the bag
              said it was.{" "}
              <span className="text-gradient-orange">
                That's why we keep going back.
              </span>
              "
            </blockquote>
            <div className="mt-8 inline-flex items-center gap-3">
              <span className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-brand-400/15 ring-1 ring-brand-400/30 text-brand-600 font-display font-black">
                JM
              </span>
              <div className="text-left">
                <div className="font-display font-bold text-charcoal-900">
                  Joseph Mwangi
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">
                  Project Manager · Mwangi Builders Ltd.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}

export default About;
