import { categories } from "../data/site";

const priceRanges = [
  { label: "Under KES 1,000", min: 0, max: 1000 },
  { label: "KES 1,000 – 5,000", min: 1000, max: 5000 },
  { label: "KES 5,000 – 20,000", min: 5000, max: 20000 },
  { label: "Above KES 20,000", min: 20000, max: Infinity },
];

function SidebarFilters({
  search,
  onSearch,
  selectedCategory,
  onCategory,
  selectedRange,
  onRange,
  onReset,
}) {
  return (
    <aside className="card p-5 lg:p-6 lg:sticky lg:top-[120px] self-start">
      <div className="flex items-center justify-between">
        <h2 className="font-display font-bold text-slate-900 text-lg">
          Filter Materials
        </h2>
        <button
          onClick={onReset}
          className="text-xs font-semibold text-brand-600 hover:text-brand-700"
        >
          Reset
        </button>
      </div>

      <div className="mt-5">
        <label className="block text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
          Search
        </label>
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
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Cement, steel, paint…"
            className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-300 transition"
          />
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-xs uppercase tracking-wider text-slate-500 font-semibold mb-3">
          Categories
        </label>
        <div className="flex flex-col gap-1">
          <button
            onClick={() => onCategory("All")}
            className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition ${
              selectedCategory === "All"
                ? "bg-slate-900 text-white"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            All Materials
          </button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => onCategory(c)}
              className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition ${
                selectedCategory === c
                  ? "bg-slate-900 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-xs uppercase tracking-wider text-slate-500 font-semibold mb-3">
          Price Range
        </label>
        <div className="flex flex-col gap-2">
          <label className="inline-flex items-center gap-2.5 cursor-pointer text-sm text-slate-700">
            <input
              type="radio"
              name="price"
              checked={!selectedRange}
              onChange={() => onRange(null)}
              className="h-4 w-4 accent-brand-500"
            />
            Any price
          </label>
          {priceRanges.map((r) => (
            <label
              key={r.label}
              className="inline-flex items-center gap-2.5 cursor-pointer text-sm text-slate-700"
            >
              <input
                type="radio"
                name="price"
                checked={selectedRange?.label === r.label}
                onChange={() => onRange(r)}
                className="h-4 w-4 accent-brand-500"
              />
              {r.label}
            </label>
          ))}
        </div>
      </div>

      <div className="mt-7 p-4 rounded-xl bg-slate-900 text-white">
        <div className="font-display font-bold text-sm">Need bulk pricing?</div>
        <p className="text-xs text-slate-300 mt-1">
          Project quotations for orders above KES 100K.
        </p>
        <a
          href="/contact"
          className="mt-3 inline-flex w-full justify-center bg-brand-400 hover:bg-brand-300 text-slate-900 font-semibold text-xs py-2 rounded-lg transition"
        >
          Talk to Sales
        </a>
      </div>
    </aside>
  );
}

export default SidebarFilters;
