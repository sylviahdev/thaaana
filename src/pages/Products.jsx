import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import ProductImage from "../components/ProductImage";
import SidebarFilters from "../components/SidebarFilters";
import productsData from "../data/products";

const API_URL = "http://127.0.0.1:5000/products";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState(productsData);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "All"
  );
  const [selectedRange, setSelectedRange] = useState(null);
  const [sort, setSort] = useState("featured");
  const [view, setView] = useState("grid");
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Try API, fall back to local demo data.
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    axios
      .get(API_URL, { timeout: 2500 })
      .then((res) => {
        if (!cancelled && Array.isArray(res.data) && res.data.length) {
          setProducts(res.data);
        }
      })
      .catch(() => {
        // Silently fall back to demo data — keeps the UI live without a backend.
      })
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, []);

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
      const matchesRange =
        !selectedRange ||
        (Number(p.price) >= selectedRange.min &&
          Number(p.price) <= selectedRange.max);
      return matchesSearch && matchesCategory && matchesRange;
    });

    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [products, search, selectedCategory, selectedRange, sort]);

  const resetFilters = () => {
    setSearch("");
    setSelectedCategory("All");
    setSelectedRange(null);
    setSort("featured");
  };

  return (
    <Layout>
      {/* Page header */}
      <section className="bg-slate-900 text-white">
        <div className="container-pro py-10 sm:py-14 lg:py-16">
          <nav className="text-xs text-slate-400">
            Home <span className="mx-1.5">/</span>{" "}
            <span className="text-slate-200">Products</span>
          </nav>
          <h1 className="mt-3 font-display text-2xl sm:text-4xl font-extrabold">
            Building Materials & Hardware
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-300">
            Browse our full catalogue of construction materials. Filter by category or
            price, and request a quotation in one click.
          </p>
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
              selectedRange={selectedRange}
              onRange={setSelectedRange}
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
                    selectedRange={selectedRange}
                    onRange={setSelectedRange}
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
                  {loading ? "Loading…" : `${filtered.length} products`}
                  {selectedCategory !== "All" && ` in ${selectedCategory}`}
                </div>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <button
                  type="button"
                  onClick={() => setFiltersOpen(true)}
                  className="lg:hidden inline-flex items-center gap-2 bg-slate-900 text-white text-xs font-semibold px-3 py-2 rounded-lg"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                    <path d="M4 6h16M7 12h10M10 18h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  Filters
                  {(selectedCategory !== "All" || selectedRange) && (
                    <span className="ml-0.5 inline-flex h-4 min-w-4 px-1 items-center justify-center rounded-full bg-brand-400 text-slate-900 text-[10px] font-bold">
                      {[selectedCategory !== "All", !!selectedRange].filter(Boolean).length}
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
                  <option value="price-asc">Price (low → high)</option>
                  <option value="price-desc">Price (high → low)</option>
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
                {filtered.map((p) => (
                  <div
                    key={p.id}
                    className="card overflow-hidden flex flex-col sm:flex-row hover:shadow-card transition"
                  >
                    <div className="sm:w-56 h-44 sm:h-auto shrink-0">
                      <ProductImage product={p} />
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <span className="chip bg-slate-100 text-slate-700">
                            {p.category}
                          </span>
                          <h3 className="mt-2 font-display font-bold text-lg text-slate-900">
                            {p.name}
                          </h3>
                          <p className="text-sm text-slate-600 mt-1">
                            {p.description}
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="font-display text-xl font-extrabold">
                            KES {Number(p.price).toLocaleString()}
                          </div>
                          <div className="text-[11px] uppercase tracking-wider text-slate-500">
                            {p.unit}
                          </div>
                        </div>
                      </div>
                      <div className="mt-auto pt-4 flex gap-2">
                        <a
                          href={`https://wa.me/254700000000?text=${encodeURIComponent(
                            `Hello Thaana, please quote me for "${p.name}".`
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-primary text-sm !py-2.5"
                        >
                          Request Quote
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Products;
