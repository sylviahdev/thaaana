import { useState, useRef, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ChevronDown, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { categories } from "../data/site";
import products from "../data/products";

// Premium global search bar with category-scope dropdown — the centrepiece of
// the new hardware-store-style header. Live suggestions, keyboard nav, all in
// the dark industrial palette.
function SearchBar({ className = "" }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [scope, setScope] = useState("All Categories");
  const [scopeOpen, setScopeOpen] = useState(false);
  const [q, setQ] = useState("");
  const [focused, setFocused] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    const onDoc = (e) => {
      if (!wrapRef.current?.contains(e.target)) {
        setOpen(false);
        setScopeOpen(false);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const results = useMemo(() => {
    if (!q.trim()) return [];
    const needle = q.toLowerCase();
    return products
      .filter((p) => {
        if (scope !== "All Categories" && p.category !== scope) return false;
        return (
          p.name.toLowerCase().includes(needle) ||
          p.description?.toLowerCase().includes(needle) ||
          p.category.toLowerCase().includes(needle)
        );
      })
      .slice(0, 7);
  }, [q, scope]);

  const submit = (e) => {
    e?.preventDefault();
    const params = new URLSearchParams();
    if (scope !== "All Categories") params.set("category", scope);
    if (q.trim()) params.set("q", q.trim());
    navigate(`/products?${params.toString()}`);
    setOpen(false);
  };

  return (
    <form
      ref={wrapRef}
      onSubmit={submit}
      role="search"
      className={`relative flex items-stretch w-full rounded-2xl bg-white/[0.06] border border-white/10 hover:border-white/20 focus-within:border-brand-400/60 focus-within:bg-white/[0.08] backdrop-blur transition ${className}`}
    >
      {/* Category scope */}
      <button
        type="button"
        onClick={() => setScopeOpen((v) => !v)}
        className="hidden md:inline-flex items-center gap-1.5 pl-4 pr-3 text-xs font-bold text-slate-300 uppercase tracking-wider border-r border-white/10 hover:text-white transition shrink-0"
      >
        <span className="truncate max-w-[140px]">{scope}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition ${scopeOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Input */}
      <div className="flex-1 flex items-center px-3">
        <Search className="h-4 w-4 text-slate-400 shrink-0" />
        <input
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
          }}
          onFocus={() => {
            setFocused(true);
            setOpen(true);
          }}
          onBlur={() => setFocused(false)}
          placeholder="Search cement, steel, roofing, water tanks…"
          className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 px-3 py-3 focus:outline-none"
        />
        {q && (
          <button
            type="button"
            onClick={() => setQ("")}
            className="h-7 w-7 inline-flex items-center justify-center rounded-md text-slate-400 hover:text-white transition"
            aria-label="Clear"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        aria-label="Search"
        className="inline-flex items-center gap-2 px-4 sm:px-5 bg-brand-400 hover:bg-brand-300 text-charcoal-950 font-bold text-sm transition rounded-r-2xl"
      >
        <Search className="h-4 w-4" />
        <span className="hidden sm:inline">Search</span>
      </button>

      {/* Scope dropdown */}
      <AnimatePresence>
        {scopeOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 top-[calc(100%+6px)] z-50 w-64 max-h-80 overflow-y-auto rounded-xl bg-charcoal-900/95 border border-white/10 shadow-card backdrop-blur-xl p-1.5"
          >
            {["All Categories", ...categories].map((c) => (
              <li key={c}>
                <button
                  type="button"
                  onClick={() => {
                    setScope(c);
                    setScopeOpen(false);
                  }}
                  className={`w-full text-left text-sm px-3 py-2 rounded-lg transition ${
                    c === scope
                      ? "bg-brand-400 text-charcoal-950 font-bold"
                      : "text-slate-200 hover:bg-white/[0.06]"
                  }`}
                >
                  {c}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Live suggestions */}
      <AnimatePresence>
        {open && focused && q.trim() && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 right-0 top-[calc(100%+6px)] z-40 rounded-2xl bg-charcoal-900/95 border border-white/10 shadow-card backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 py-2.5 text-[10px] uppercase tracking-[0.18em] font-bold text-slate-500 border-b border-white/5 flex items-center justify-between">
              <span>{results.length} matching products</span>
              <span className="text-brand-400">Press Enter for all results</span>
            </div>
            <ul className="max-h-80 overflow-y-auto">
              {results.length === 0 ? (
                <li className="px-4 py-6 text-sm text-slate-400 text-center">
                  No matches. Try cement, mabati, rebar, tank…
                </li>
              ) : (
                results.map((p) => (
                  <li key={p.id}>
                    <button
                      type="button"
                      onMouseDown={(e) => {
                        e.preventDefault();
                        const params = new URLSearchParams();
                        params.set("category", p.category);
                        params.set("q", p.name);
                        navigate(`/products?${params.toString()}`);
                        setOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/[0.04] transition text-left"
                    >
                      <span className="h-9 w-9 rounded-lg bg-brand-400/10 ring-1 ring-brand-400/20 inline-flex items-center justify-center text-brand-300 text-[10px] font-bold shrink-0">
                        {p.category.slice(0, 2).toUpperCase()}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold text-white truncate">
                          {p.name}
                        </span>
                        <span className="block text-[11px] text-slate-400 truncate">
                          {p.category} · {p.availability}
                        </span>
                      </span>
                      <span className="text-[10px] text-brand-300 font-bold uppercase tracking-wider shrink-0">
                        Quote →
                      </span>
                    </button>
                  </li>
                ))
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

export default SearchBar;
