import { useMemo, useState } from "react";
import {
  Plus,
  Minus,
  Trash2,
  MessageCircle,
  FileText,
  CheckCircle2,
  Package,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { whatsappLink, site } from "../data/site";
import { Reveal } from "./motion";

// Quick-pick chips for the most common contractor items.
const PRESETS = [
  { id: "cement", label: "Bamburi/Simba Cement (50kg bags)", unit: "bags" },
  { id: "rebar-y12", label: "Y12 Steel Rebar (12m)", unit: "lengths" },
  { id: "rebar-y10", label: "Y10 Steel Rebar (12m)", unit: "lengths" },
  { id: "mabati", label: "Mabati Box Profile 28g (3m)", unit: "sheets" },
  { id: "brc-a142", label: "BRC Mesh A142", unit: "sheets" },
  { id: "ballast", label: "Ballast 3/4\"", unit: "tonnes" },
  { id: "river-sand", label: "River Sand", unit: "tonnes" },
  { id: "ridge-cap", label: "Ridge Cap (3m)", unit: "lengths" },
  { id: "pvc-1", label: "PVC Pressure Pipe 1\" (6m)", unit: "lengths" },
  { id: "tank-5000", label: "Water Tank 5000L", unit: "tanks" },
  { id: "paint-emul-20", label: "Crown Vinyl Emulsion 20L", unit: "drums" },
  { id: "tile-6060", label: "Porcelain Floor Tile 60×60cm", unit: "boxes" },
];

function QuoteBuilder() {
  const [items, setItems] = useState([]);
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");

  const addPreset = (preset) => {
    setItems((cur) => {
      const exists = cur.find((i) => i.id === preset.id);
      if (exists) return cur;
      return [...cur, { ...preset, qty: 1 }];
    });
  };

  const addCustom = () => {
    const id = `custom-${Date.now()}`;
    setItems((cur) => [
      ...cur,
      { id, label: "", unit: "units", qty: 1, custom: true },
    ]);
  };

  const updateItem = (id, patch) =>
    setItems((cur) => cur.map((i) => (i.id === id ? { ...i, ...patch } : i)));
  const removeItem = (id) =>
    setItems((cur) => cur.filter((i) => i.id !== id));

  const message = useMemo(() => {
    if (items.length === 0)
      return "Hello THAANA, I'd like a quotation for my upcoming project. Please get in touch.";
    const lines = items
      .filter((i) => i.label?.trim())
      .map((i) => `• ${i.qty} ${i.unit} of ${i.label.trim()}`);
    const head = `Hello THAANA, I need a quotation for the following materials:`;
    const tail = [
      location && `\nDelivery to: ${location}`,
      notes && `\nNotes: ${notes}`,
      "\nPlease share availability, lead time and your best price. Thanks!",
    ]
      .filter(Boolean)
      .join("");
    return `${head}\n\n${lines.join("\n")}${tail}`;
  }, [items, location, notes]);

  const validCount = items.filter((i) => i.label?.trim()).length;

  return (
    <section className="relative bg-charcoal-950 text-white overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_-20%,rgba(245,166,35,0.18),transparent_60%)]" />
      <div className="container-pro py-20 lg:py-28">
        <Reveal className="max-w-2xl">
          <div className="eyebrow">Smart Quote Builder</div>
          <h2 className="mt-3 heading-xl-dark">
            Build your <span className="text-gradient-orange">WhatsApp quotation</span>{" "}
            in under a minute.
          </h2>
          <p className="mt-4 text-slate-300/90">
            Pick items, set quantities, and we'll auto-format a professional message
            ready to send. No app needed — opens directly in WhatsApp.
          </p>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Presets + builder */}
          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="card-dark p-6 lg:p-7">
              <div className="text-xs uppercase tracking-[0.18em] text-slate-400 font-bold">
                Step 1 · Pick common items
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {PRESETS.map((p) => {
                  const active = items.some((i) => i.id === p.id);
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => addPreset(p)}
                      disabled={active}
                      className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold transition border ${
                        active
                          ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300 cursor-default"
                          : "bg-white/[0.04] hover:bg-brand-400 hover:text-charcoal-950 border-white/10 text-white"
                      }`}
                    >
                      {active ? (
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      ) : (
                        <Plus className="h-3.5 w-3.5" />
                      )}
                      {p.label}
                    </button>
                  );
                })}
                <button
                  type="button"
                  onClick={addCustom}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold bg-brand-400 text-charcoal-950 border border-brand-400 hover:bg-brand-300 transition"
                >
                  <Plus className="h-3.5 w-3.5" />
                  Add custom item
                </button>
              </div>

              {/* Items list */}
              <div className="mt-7 text-xs uppercase tracking-[0.18em] text-slate-400 font-bold">
                Step 2 · Set quantities ({validCount}{" "}
                {validCount === 1 ? "item" : "items"})
              </div>

              <div className="mt-3 space-y-2 min-h-[80px]">
                <AnimatePresence initial={false}>
                  {items.length === 0 && (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="rounded-xl border border-dashed border-white/10 p-6 text-center text-sm text-slate-400"
                    >
                      <Package className="h-6 w-6 mx-auto mb-2 text-brand-400/70" />
                      No items yet — tap any chip above to begin building your quote.
                    </motion.div>
                  )}

                  {items.map((it) => (
                    <motion.div
                      key={it.id}
                      layout
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex items-center gap-2 rounded-xl bg-white/[0.04] border border-white/10 p-2.5"
                    >
                      <input
                        value={it.label}
                        onChange={(e) =>
                          updateItem(it.id, { label: e.target.value })
                        }
                        placeholder={
                          it.custom ? "e.g. Y8 Steel Rebar (12m)" : it.label
                        }
                        readOnly={!it.custom}
                        className={`flex-1 min-w-0 bg-transparent text-sm font-semibold px-2 py-1 focus:outline-none ${
                          it.custom ? "text-white" : "text-white"
                        }`}
                      />

                      <div className="flex items-center gap-1 rounded-lg bg-charcoal-900 border border-white/10">
                        <button
                          type="button"
                          onClick={() =>
                            updateItem(it.id, { qty: Math.max(1, it.qty - 1) })
                          }
                          className="h-8 w-8 inline-flex items-center justify-center text-slate-300 hover:text-brand-300 transition"
                          aria-label="Decrease"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={it.qty}
                          onChange={(e) =>
                            updateItem(it.id, {
                              qty: Math.max(1, Number(e.target.value) || 1),
                            })
                          }
                          className="w-12 text-center bg-transparent text-sm font-bold text-white focus:outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <button
                          type="button"
                          onClick={() => updateItem(it.id, { qty: it.qty + 1 })}
                          className="h-8 w-8 inline-flex items-center justify-center text-slate-300 hover:text-brand-300 transition"
                          aria-label="Increase"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>

                      {it.custom ? (
                        <input
                          value={it.unit}
                          onChange={(e) =>
                            updateItem(it.id, { unit: e.target.value })
                          }
                          placeholder="unit"
                          className="w-20 bg-charcoal-900 border border-white/10 rounded-lg px-2 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-brand-400"
                        />
                      ) : (
                        <span className="hidden sm:inline text-xs text-slate-400 px-2 min-w-[60px]">
                          {it.unit}
                        </span>
                      )}

                      <button
                        type="button"
                        onClick={() => removeItem(it.id)}
                        className="h-8 w-8 inline-flex items-center justify-center text-slate-500 hover:text-brick-400 transition"
                        aria-label="Remove"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="mt-6 text-xs uppercase tracking-[0.18em] text-slate-400 font-bold">
                Step 3 · Delivery details
              </div>
              <div className="mt-3 grid sm:grid-cols-2 gap-3">
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Delivery location (e.g. Kitengela)"
                  className="bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-400 transition"
                />
                <input
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Notes (optional)"
                  className="bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-400 transition"
                />
              </div>
            </div>
          </Reveal>

          {/* Live message preview */}
          <Reveal className="lg:col-span-5" delay={0.2}>
            <div className="lg:sticky lg:top-24">
              <div className="rounded-2xl bg-gradient-to-br from-[#075E54] via-[#0c6b5f] to-[#054640] p-1.5 shadow-card">
                {/* WhatsApp header */}
                <div className="flex items-center gap-3 px-4 py-3">
                  <div className="h-9 w-9 rounded-full bg-white/15 grid place-items-center text-white">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-white font-bold text-sm">THAANA Hardware</div>
                    <div className="text-[10px] text-white/70 inline-flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                      online · replies in &lt; 5 min
                    </div>
                  </div>
                </div>

                {/* Chat body */}
                <div className="rounded-xl bg-[#ECE5DD] p-4 min-h-[280px] relative">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22><rect width=%2240%22 height=%2240%22 fill=%22%23ECE5DD%22/><circle cx=%2210%22 cy=%2210%22 r=%221%22 fill=%22%23d8d1c8%22/><circle cx=%2230%22 cy=%2230%22 r=%221%22 fill=%22%23d8d1c8%22/></svg>')] opacity-50 rounded-xl" />
                  <div className="relative">
                    <motion.div
                      key={message.slice(0, 60)}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      className="max-w-[92%] ml-auto bg-[#DCF8C6] rounded-xl rounded-tr-sm px-3 py-2 text-[13px] text-charcoal-900 whitespace-pre-line shadow-sm leading-relaxed"
                    >
                      {message}
                      <div className="text-right text-[10px] text-slate-500 mt-1">
                        {new Date().toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}{" "}
                        ✓✓
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-3 py-3 flex flex-col sm:flex-row gap-2">
                  <a
                    href={whatsappLink(message)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-sm py-3 rounded-xl transition"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Send via WhatsApp
                  </a>
                  <a
                    href={`mailto:${site.email}?subject=${encodeURIComponent(
                      "Quotation Request"
                    )}&body=${encodeURIComponent(message)}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm py-3 rounded-xl transition"
                  >
                    <FileText className="h-4 w-4" />
                    Email instead
                  </a>
                </div>
              </div>

              <p className="mt-4 text-xs text-slate-500 text-center">
                {validCount > 0
                  ? `Ready · ${validCount} ${validCount === 1 ? "item" : "items"} in your quote`
                  : "Add items to populate your message"}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default QuoteBuilder;
