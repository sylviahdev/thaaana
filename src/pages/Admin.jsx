import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import productsData from "../data/products";
import { categories, formatKES } from "../data/site";
import ProductImage from "../components/ProductImage";
import { LogoMark } from "../components/Logo";

const API_URL = "http://127.0.0.1:5000/products";

function Admin() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [products, setProducts] = useState(productsData);
  const [nav, setNav] = useState("products");
  const [showForm, setShowForm] = useState(false);
  const [query, setQuery] = useState("");
  const [demoMode, setDemoMode] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
    category: categories[0],
    price: "",
    unit: "per unit",
  });

  useEffect(() => {
    if (!token) navigate("/login");
  }, [token, navigate]);

  const loadProducts = async () => {
    try {
      const res = await axios.get(API_URL, { timeout: 2500 });
      if (Array.isArray(res.data)) setProducts(res.data);
    } catch {
      setDemoMode(true);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    const payload = { ...form, price: Number(form.price) };
    try {
      await axios.post(API_URL, payload, {
        headers: { Authorization: `Bearer ${token}` },
        timeout: 2500,
      });
      await loadProducts();
    } catch {
      setProducts((p) => [{ id: Date.now(), ...payload }, ...p]);
    }
    setForm({
      name: "",
      description: "",
      image: "",
      category: categories[0],
      price: "",
      unit: "per unit",
    });
    setShowForm(false);
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this product?")) return;
    try {
      await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
        timeout: 2500,
      });
      await loadProducts();
    } catch {
      setProducts((p) => p.filter((x) => x.id !== id));
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          !query ||
          p.name?.toLowerCase().includes(query.toLowerCase()) ||
          p.category?.toLowerCase().includes(query.toLowerCase())
      ),
    [products, query]
  );

  const stats = useMemo(() => {
    const total = products.length;
    const cats = new Set(products.map((p) => p.category)).size;
    const value = products.reduce((s, p) => s + (Number(p.price) || 0), 0);
    return { total, cats, value };
  }, [products]);

  const navItems = [
    { k: "overview", label: "Overview", icon: "📊" },
    { k: "products", label: "Products", icon: "📦" },
    { k: "quotes", label: "Quotations", icon: "📝" },
    { k: "customers", label: "Customers", icon: "👥" },
    { k: "settings", label: "Settings", icon: "⚙️" },
  ];

  const sidebarContent = (
    <>
      <Link
        to="/"
        className="flex items-center gap-2.5 p-6 border-b border-slate-900"
        onClick={() => setMobileNavOpen(false)}
      >
        <LogoMark variant="onDark" className="h-10 w-10" />
        <div>
          <div className="font-display text-sm font-extrabold text-white leading-tight">
            THAANA <span className="text-brand-300">HARDWARE</span>
          </div>
          <div className="text-[10px] uppercase tracking-wider text-slate-500 mt-0.5">
            Admin Console
          </div>
        </div>
      </Link>

      <nav className="p-4 flex-1 space-y-1">
        {navItems.map((n) => (
          <button
            key={n.k}
            onClick={() => {
              setNav(n.k);
              setMobileNavOpen(false);
            }}
            className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition ${
              nav === n.k
                ? "bg-white/10 text-white"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <span aria-hidden>{n.icon}</span>
            {n.label}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-900">
        <button
          onClick={logout}
          className="w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5"
        >
          <span aria-hidden>↩</span> Sign out
        </button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex w-64 flex-col bg-slate-950 text-slate-300">
        {sidebarContent}
      </aside>

      {/* Mobile sidebar drawer */}
      {mobileNavOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setMobileNavOpen(false)}
            aria-hidden
          />
          <aside className="relative w-64 max-w-[80%] flex flex-col bg-slate-950 text-slate-300 shadow-2xl">
            {sidebarContent}
          </aside>
        </div>
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="bg-white border-b border-slate-200">
          <div className="flex items-center justify-between gap-3 px-4 sm:px-6 lg:px-10 h-16">
            <div className="flex items-center gap-3 min-w-0">
              <button
                aria-label="Open menu"
                onClick={() => setMobileNavOpen(true)}
                className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-200 text-slate-700 shrink-0"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  Dashboard
                </div>
                <div className="font-display font-bold text-slate-900 capitalize truncate">
                  {nav}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {demoMode && (
                <span className="hidden sm:inline-flex chip bg-amber-100 text-amber-800">
                  Demo mode (no backend)
                </span>
              )}
              <div className="hidden sm:flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-slate-900 text-white inline-flex items-center justify-center font-bold text-sm">
                  TA
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-slate-900">Admin</div>
                  <div className="text-xs text-slate-500">thaanahardware@gmail.com</div>
                </div>
              </div>
              <div className="sm:hidden h-9 w-9 rounded-full bg-slate-900 text-white inline-flex items-center justify-center font-bold text-sm">
                TA
              </div>
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6 lg:p-10 space-y-6 sm:space-y-8">
          {/* Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <StatCard label="Total Products" value={stats.total} trend="+3 this week" />
            <StatCard label="Categories" value={stats.cats} trend="across catalogue" />
            <StatCard
              label="Catalogue Value"
              value={formatKES(stats.value)}
              trend="combined list price"
            />
            <StatCard label="Pending Quotes" value="12" trend="↗ 4 today" highlight />
          </div>

          {/* Products section */}
          <section className="card">
            <div className="p-5 sm:p-6 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="font-display font-bold text-slate-900 text-lg">
                  Product Catalogue
                </h2>
                <p className="text-sm text-slate-500 mt-0.5">
                  Add, edit and remove materials from your storefront.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400"
                  >
                    <path
                      d="m21 21-4.3-4.3M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search products…"
                    className="pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-300"
                  />
                </div>
                <button
                  onClick={() => setShowForm((v) => !v)}
                  className="btn-primary !py-2 text-sm"
                >
                  {showForm ? "Close" : "+ Add Product"}
                </button>
              </div>
            </div>

            {showForm && (
              <form
                onSubmit={handleAdd}
                className="p-5 sm:p-6 border-b border-slate-100 bg-slate-50/60 grid sm:grid-cols-2 gap-4"
              >
                <FormField label="Product name" required>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputCls}
                    placeholder="Bamburi Nguvu 32.5N (50kg)"
                  />
                </FormField>
                <FormField label="Category" required>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className={inputCls}
                  >
                    {categories.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </FormField>
                <FormField label="Price (KES)" required>
                  <input
                    required
                    type="number"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    className={inputCls}
                    placeholder="780"
                  />
                </FormField>
                <FormField label="Unit">
                  <input
                    value={form.unit}
                    onChange={(e) => setForm({ ...form, unit: e.target.value })}
                    className={inputCls}
                    placeholder="per bag"
                  />
                </FormField>
                <FormField label="Image URL" className="sm:col-span-2">
                  <input
                    value={form.image}
                    onChange={(e) => setForm({ ...form, image: e.target.value })}
                    className={inputCls}
                    placeholder="https://…"
                  />
                </FormField>
                <FormField label="Description" className="sm:col-span-2">
                  <textarea
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    rows={3}
                    className={inputCls}
                    placeholder="Short product description for customers."
                  />
                </FormField>

                <div className="sm:col-span-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="btn-outline text-sm"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn-dark text-sm">
                    Save Product
                  </button>
                </div>
              </form>
            )}

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-slate-50 text-slate-500 uppercase text-xs tracking-wider">
                  <tr>
                    <th className="text-left font-semibold px-5 py-3">Product</th>
                    <th className="text-left font-semibold px-5 py-3">Category</th>
                    <th className="text-right font-semibold px-5 py-3">Price</th>
                    <th className="text-left font-semibold px-5 py-3">Unit</th>
                    <th className="text-right font-semibold px-5 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filtered.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-50/60 transition">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-lg overflow-hidden bg-slate-100 shrink-0">
                            <ProductImage product={p} />
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900">
                              {p.name}
                            </div>
                            <div className="text-xs text-slate-500 line-clamp-1 max-w-md">
                              {p.description}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <span className="chip bg-slate-100 text-slate-700">
                          {p.category}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-right font-semibold text-slate-900">
                        {formatKES(p.price)}
                      </td>
                      <td className="px-5 py-4 text-slate-600">{p.unit}</td>
                      <td className="px-5 py-4 text-right">
                        <button
                          onClick={() => handleDelete(p.id)}
                          className="inline-flex items-center gap-1.5 text-red-600 hover:bg-red-50 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  {filtered.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-5 py-10 text-center text-slate-500">
                        No products match your search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

const inputCls =
  "w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-300 transition";

function FormField({ label, required, className = "", children }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
        {label} {required && <span className="text-brand-500">*</span>}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

function StatCard({ label, value, trend, highlight }) {
  return (
    <div
      className={`card p-5 ${
        highlight ? "bg-slate-900 text-white border-slate-900" : ""
      }`}
    >
      <div
        className={`text-xs uppercase tracking-wider font-semibold ${
          highlight ? "text-brand-300" : "text-slate-500"
        }`}
      >
        {label}
      </div>
      <div
        className={`mt-2 font-display text-2xl font-extrabold ${
          highlight ? "text-white" : "text-slate-900"
        }`}
      >
        {value}
      </div>
      <div
        className={`text-xs mt-1 ${
          highlight ? "text-slate-300" : "text-slate-500"
        }`}
      >
        {trend}
      </div>
    </div>
  );
}

export default Admin;
