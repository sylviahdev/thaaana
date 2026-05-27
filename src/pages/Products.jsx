import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  FileText,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Clock4,
  Layers,
} from "lucide-react";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import ProductImage from "../components/ProductImage";
import SidebarFilters from "../components/SidebarFilters";
import { Reveal } from "../components/motion";
import products from "../data/products";
import { whatsappLink, site } from "../data/site";

const STATUS = {
  "In Stock": {
    label: "In Stock",
    Icon: CheckCircle2,
    pill: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  },
  "Limited Stock": {
    label: "Limited",
    Icon: AlertCircle,
    pill: "bg-amber-50 text-amber-700 ring-amber-100",
  },
  "On Order": {
    label: "On Order",
    Icon: Clock4,
    pill: "bg-sky-50 text-sky-700 ring-sky-100",
  },
};

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "All"
  );
  const [sort, setSort] = useState("featured");
  const [view, setView] = useState("grid");
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (selectedCategory === "All") params.delete("category");
    else params.set("category", selectedCategory);
    setSearchParams(params, { replace: true });
  }, [selectedCategory]); // eslint-disable-line react-hooks/exhaustive-deps

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const matchesSearch =
        !search ||
        p.name?.toLowerCase().includes(search.toLowerCase()) ||
        p.description?.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    if (sort === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "category")
      list = [...list].sort((a, b) => a.category.localeCompare(b.category));
    return list;
  }, [search, selectedCategory, sort]);

  const resetFilters = () => {
    setSearch("");
    setSelectedCategory("All");
    setSort("featured");
  };

  return (
    <Layout>
      {/* Page header */}
      <section className="relative bg-charcoal-950 text-white overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(245,166,35,0.15),transparent_60%)]" />
        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-brand-500/15 blur-3xl -z-10" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.05] -z-10" preserveAspectRatio="none" aria-hidden>
          <defs>
            <pattern id="productsHeroGrid" width="56" height="56" patternUnits="userSpaceOnUse">
              <path d="M56 0H0V56" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#productsHeroGrid)" />
        </svg>

        <div className="container-pro py-14 sm:py-16 lg:py-20">
          <nav className="text-xs text-slate-400">
            <Link to="/" className="hover:text-brand-300 transition">Home</Link>
            <span className="mx-1.5">/</span>
            <span className="text-slate-200">Products</span>
          </nav>
          <Reveal>
            <div className="mt-5 eyebrow">Full Catalogue</div>
            <h1 className="mt-3 font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] max-w-3xl">
              Building Materials &{" "}
              <span className="text-gradient-orange">Hardware.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-slate-300 text-base sm:text-lg leading-relaxed">
              Browse our full catalogue of construction materials. Filter by
              category and request a quotation in one click , we respond within
              4 working hours.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <Layers className="h-3.5 w-3.5 text-brand-400" />
                1,200+ SKUs in stock
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-brand-400" />
                KEBS-certified manufacturers
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock4 className="h-3.5 w-3.5 text-brand-400" />
                4-hour quotation SLA
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-pro py-8 sm:py-10 lg:py-14">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Desktop sidebar */}
          <div className="hidden lg:block lg:col-span-3">
            <SidebarFilters
              search={search}
              onSearch={setSearch}
              selectedCategory={selectedCategory}
              onCategory={setSelectedCategory}
              onReset={resetFilters}
            />
          </div>

          {/* Mobile filter drawer */}
          {filtersOpen && (
            <div className="lg:hidden fixed inset-0 z-50 flex">
              <div
                className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
                onClick={() => setFiltersOpen(false)}
                aria-hidden
              />
              <div className="relative ml-auto h-full w-full max-w-sm bg-slate-50 shadow-2xl overflow-y-auto">
                <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 bg-white border-b border-slate-200">
                  <div className="font-display font-bold text-slate-900">Filters</div>
                  <button
                    aria-label="Close filters"
                    onClick={() => setFiltersOpen(false)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
                <div className="p-4">
                  <SidebarFilters
                    search={search}
                    onSearch={setSearch}
                    selectedCategory={selectedCategory}
                    onCategory={(c) => {
                      setSelectedCategory(c);
                      setFiltersOpen(false);
                    }}
                    onReset={resetFilters}
                  />
                </div>
              </div>
            </div>
          )}

          <div className="lg:col-span-9">
            {/* Top bar */}
            <div className="card p-4 sm:p-5 mb-5 sm:mb-6 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
              <div>
                <div className="font-display font-bold text-slate-900">
                  Available Materials
                </div>
                <div className="text-sm text-slate-500 mt-0.5">
                  {filtered.length} products
                  {selectedCategory !== "All" && ` in ${selectedCategory}`}
                </div>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <button
                  type="button"
                  onClick={() => setFiltersOpen(true)}
                  className="lg:hidden inline-flex items-center gap-2 bg-charcoal-950 text-white text-xs font-semibold px-3 py-2 rounded-lg"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                    <path d="M4 6h16M7 12h10M10 18h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  Filters
                  {selectedCategory !== "All" && (
                    <span className="ml-0.5 inline-flex h-4 min-w-4 px-1 items-center justify-center rounded-full bg-brand-400 text-slate-900 text-[10px] font-bold">
                      1
                    </span>
                  )}
                </button>
                <div className="hidden sm:flex items-center bg-slate-100 rounded-lg p-1">
                  <button
                    onClick={() => setView("grid")}
                    aria-label="Grid view"
                    className={`px-2.5 py-1.5 rounded-md text-xs font-semibold transition ${
                      view === "grid" ? "bg-white shadow-sm text-slate-900" : "text-slate-500"
                    }`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => setView("list")}
                    aria-label="List view"
                    className={`px-2.5 py-1.5 rounded-md text-xs font-semibold transition ${
                      view === "list" ? "bg-white shadow-sm text-slate-900" : "text-slate-500"
                    }`}
                  >
                    List
                  </button>
                </div>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-white border border-slate-200 rounded-lg text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300"
                >
                  <option value="featured">Sort: Featured</option>
                  <option value="name">Name (A-Z)</option>
                  <option value="category">Category</option>
                </select>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="card p-10 text-center">
                <div className="font-display font-bold text-lg">
                  No materials match your filters.
                </div>
                <p className="text-slate-500 mt-2">
                  Try adjusting your search or resetting the filters.
                </p>
                <button onClick={resetFilters} className="btn-primary mt-5">
                  Reset filters
                </button>
              </div>
            ) : view === "grid" ? (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {filtered.map((p) => {
                  const status = STATUS[p.availability] || STATUS["In Stock"];
                  const quoteText = `Hello THAANA, I would like a quotation for "${p.name}". Please share availability, lead time and delivery options.`;
                  return (
                    <article
                      key={p.id}
                      className="group bg-white rounded-2xl border border-slate-200/70 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 overflow-hidden flex flex-col sm:flex-row"
                    >
                      <div className="relative sm:w-64 lg:w-72 h-48 sm:h-auto shrink-0 bg-slate-50 overflow-hidden">
                        <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700 ease-out">
                          <ProductImage product={p} />
                        </div>
                        {p.badge && (
                          <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-charcoal-950 text-brand-300 text-[10px] font-bold uppercase tracking-wider shadow-soft">
                            {p.badge}
                          </span>
                        )}
                      </div>

                      <div className="p-5 lg:p-6 flex-1 flex flex-col">
                        <div className="flex items-start justify-between gap-3 flex-wrap">
                          <div className="min-w-0">
                            <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-bold uppercase tracking-wider">
                              {p.category}
                            </span>
                            <h3 className="mt-2 font-display font-bold text-lg lg:text-xl text-charcoal-900 leading-snug">
                              {p.name}
                            </h3>
                            {p.description && (
                              <p className="text-sm text-charcoal-500 mt-1.5 leading-relaxed line-clamp-2">
                                {p.description}
                              </p>
                            )}
                          </div>
                          <span
                            className={`chip ${status.pill} ring-1 font-bold uppercase tracking-wide text-[10px] shrink-0`}
                          >
                            <status.Icon className="h-3 w-3" />
                            {status.label}
                          </span>
                        </div>

                        <div className="mt-auto pt-4 flex flex-wrap items-end justify-between gap-3 border-t border-slate-100">
                          <div className="pt-3">
                            <div className="text-[10px] uppercase tracking-[0.16em] font-bold text-slate-500">
                              Pricing
                            </div>
                            <div className="font-display font-extrabold text-brand-600 text-base">
                              Call for Pricing
                            </div>
                            {p.unit && (
                              <div className="text-xs text-slate-500 mt-0.5">{p.unit}</div>
                            )}
                          </div>
                          <div className="flex items-center gap-2 pt-3">
                            <a
                              href={`tel:${site.phone}`}
                              className="inline-flex items-center justify-center gap-2 bg-charcoal-950 hover:bg-charcoal-800 text-white font-bold text-[12px] uppercase tracking-wider px-4 py-2.5 rounded-xl transition"
                            >
                              <FileText className="h-4 w-4" />
                              Request Quote
                            </a>
                            <a
                              href={whatsappLink(quoteText)}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-[12px] uppercase tracking-wider px-4 py-2.5 rounded-xl transition"
                            >
                              <MessageCircle className="h-4 w-4" />
                              WhatsApp
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Products;
