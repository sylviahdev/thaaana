import { Link } from "react-router-dom";

// Each tile uses a gradient + on-topic glyph instead of a photo — keeps the
// home page on-brand and prevents any unrelated stock imagery slipping in.
const cats = [
  {
    name: "Cement & Concrete",
    desc: "Bamburi · Simba · Savannah",
    slug: "Cement & Concrete",
    tone: "from-slate-700 to-slate-900",
    glyph: (
      <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 10h12l2 4v18a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V14l2-4Z" />
        <path d="M14 18h12M18 14v4M22 14v4M16 26h8M16 30h4" />
      </g>
    ),
  },
  {
    name: "Steel & Reinforcement",
    desc: "Y-bars · BRC · hollow sections",
    slug: "Steel & Reinforcement",
    tone: "from-brand-500 to-brand-700",
    glyph: (
      <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18h28M6 22h28" />
        <path d="M10 18v4M14 18v4M18 18v4M22 18v4M26 18v4M30 18v4" />
        <circle cx="4" cy="20" r="2" /><circle cx="36" cy="20" r="2" />
      </g>
    ),
  },
  {
    name: "Roofing Materials",
    desc: "Mabati · ridge caps · gutters",
    slug: "Roofing Materials",
    tone: "from-emerald-700 to-emerald-900",
    glyph: (
      <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 28V18l8-8h16l8 8v10" />
        <path d="M4 28h36M8 18l4 10M16 18l4 10M24 18l4 10M32 18l4 10" />
      </g>
    ),
  },
  {
    name: "Plumbing Materials",
    desc: "Pipes · fittings · fixtures",
    slug: "Plumbing Materials",
    tone: "from-sky-700 to-sky-900",
    glyph: (
      <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 14h12v6H6zM30 20v12h-6V20" />
        <path d="M18 14v6h12v-6M14 14V8h8v6" />
      </g>
    ),
  },
  {
    name: "Paint & Finishing",
    desc: "Crown · Sadolin · Rollers",
    slug: "Paint & Finishing",
    tone: "from-violet-700 to-violet-900",
    glyph: (
      <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 14h20v18a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4V14Z" />
        <path d="M10 14a10 10 0 0 1 20 0M22 22v4" />
      </g>
    ),
  },
  {
    name: "Tools & Equipment",
    desc: "Drills · grinders · welders",
    slug: "Tools & Equipment",
    tone: "from-rose-700 to-rose-900",
    glyph: (
      <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M30 6a6 6 0 0 1-8 8L8 28l4 4 14-14a6 6 0 0 1 8-8L30 16l-4-4Z" />
      </g>
    ),
  },
  {
    name: "Electrical & Solar",
    desc: "Cables · MCBs · solar kits",
    slug: "Electrical Supplies",
    tone: "from-amber-600 to-amber-800",
    glyph: (
      <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4 10 24h10l-2 16 14-22H22l4-14Z" />
      </g>
    ),
  },
  {
    name: "Water & Sanitation",
    desc: "Tanks · septic · meters",
    slug: "Water & Sanitation",
    tone: "from-blue-700 to-blue-900",
    glyph: (
      <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 4 C 26 14 32 22 32 28 a12 12 0 0 1-24 0 C 8 22 14 14 20 4 Z" />
      </g>
    ),
  },
  {
    name: "Safety Equipment",
    desc: "Helmets · gumboots · vests",
    slug: "Safety Equipment",
    tone: "from-yellow-600 to-yellow-800",
    glyph: (
      <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 28C6 18 12 12 20 12s14 6 14 16Z" />
        <path d="M2 28h36M20 12V4" />
      </g>
    ),
  },
];

function FeaturedCategories() {
  return (
    <section className="bg-slate-50 border-y border-slate-100">
      <div className="container-pro py-16 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.18em] text-brand-600 font-semibold">
              Shop by Category
            </div>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-slate-900">
              Everything you need, under one roof.
            </h2>
            <p className="mt-3 text-slate-600">
              From foundations to finishes — explore over 90 building materials,
              tools and fittings in stock now.
            </p>
          </div>
          <Link to="/products" className="hidden sm:inline-flex btn-outline text-sm">
            View all materials
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5">
          {cats.map((c) => (
            <Link
              key={c.name}
              to={`/products?category=${encodeURIComponent(c.slug)}`}
              className={`group relative overflow-hidden rounded-2xl aspect-[5/4] sm:aspect-[4/3] shadow-soft hover:shadow-card transition bg-gradient-to-br ${c.tone} text-white`}
            >
              <svg className="absolute inset-0 h-full w-full opacity-15" preserveAspectRatio="none">
                <defs>
                  <pattern id={`p-${c.name.replace(/[^a-z]/gi, "")}`} width="28" height="28" patternUnits="userSpaceOnUse">
                    <path d="M28 0H0V28" fill="none" stroke="white" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#p-${c.name.replace(/[^a-z]/gi, "")})`} />
              </svg>

              <svg
                viewBox="0 0 40 40"
                className="absolute -right-6 -bottom-6 h-44 w-44 text-white/15 group-hover:text-white/25 transition"
              >
                {c.glyph}
              </svg>

              <div className="relative h-full flex flex-col justify-between p-5 sm:p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
                  <svg viewBox="0 0 40 40" className="h-6 w-6 text-white">
                    {c.glyph}
                  </svg>
                </span>
                <div>
                  <div className="font-display font-bold text-lg sm:text-xl">{c.name}</div>
                  <div className="text-xs sm:text-sm text-white/80 mt-0.5">{c.desc}</div>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-white/90">
                    Explore range
                    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCategories;
