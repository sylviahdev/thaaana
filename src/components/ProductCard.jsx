import {
  Eye,
  Heart,
  Phone,
  MessageCircle,
  FileText,
  CheckCircle2,
  AlertCircle,
  Clock4,
} from "lucide-react";
import { motion } from "framer-motion";
import { whatsappLink, site } from "../data/site";
import ProductImage from "./ProductImage";

// Availability is shown in the top-left circular badge — same visual slot as
// the discount tag on a typical hardware-store card, but tied to our
// quotation model (In Stock / Limited / On Order).
const STATUS = {
  "In Stock": {
    short: "IN",
    label: "In Stock",
    Icon: CheckCircle2,
    ring: "ring-emerald-300/60",
    chip: "bg-emerald-500 text-white",
    pill: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  },
  "Limited Stock": {
    short: "LMT",
    label: "Limited",
    Icon: AlertCircle,
    ring: "ring-amber-300/60",
    chip: "bg-amber-500 text-white",
    pill: "bg-amber-50 text-amber-700 ring-amber-100",
  },
  "On Order": {
    short: "ORD",
    label: "On Order",
    Icon: Clock4,
    ring: "ring-sky-300/60",
    chip: "bg-sky-500 text-white",
    pill: "bg-sky-50 text-sky-700 ring-sky-100",
  },
};

function ProductCard({ product }) {
  const quoteText = `Hello THAANA, I would like a quotation for "${product.name}". Please share availability, lead time and delivery options.`;
  const status = STATUS[product.availability] || STATUS["In Stock"];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white rounded-2xl border border-slate-200/70 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
    >
      {/* ===== Image area ===== */}
      <div className="relative aspect-[5/4] overflow-hidden bg-slate-50">
        <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-700 ease-out">
          <ProductImage product={product} />
        </div>

        {/* Top-left circular availability badge */}
        <div className={`absolute top-3 left-3 z-10`}>
          <span
            className={`flex h-12 w-12 items-center justify-center rounded-full ${status.chip} font-display font-black text-[10px] tracking-wider shadow-soft ring-4 ${status.ring}`}
            title={status.label}
          >
            {status.short}
          </span>
        </div>

        {/* Optional badge (e.g. "Best Seller") under the status pill */}
        {product.badge && (
          <span className="absolute top-3 left-[68px] z-10 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-charcoal-950 text-brand-300 text-[10px] font-bold uppercase tracking-wider shadow-soft">
            {product.badge}
          </span>
        )}

        {/* Top-right quick-action stack — fades in on hover */}
        <div className="absolute top-3 right-3 z-10 flex flex-col gap-1.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          <QuickAction
            label="Quick view"
            href={`/products?q=${encodeURIComponent(product.name)}`}
            Icon={Eye}
          />
          <QuickAction label="Save quote" Icon={Heart} />
          <QuickAction
            label="Call for pricing"
            href={`tel:${site.phone}`}
            Icon={Phone}
          />
        </div>
      </div>

      {/* ===== Body ===== */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-charcoal-900 text-[15px] leading-snug line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>
        <div className="mt-1.5 text-xs text-slate-500 line-clamp-1">
          {product.category}
        </div>

        {/* Quotation strip — replaces the price block */}
        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.16em] font-bold text-slate-500">
              Pricing
            </div>
            <div className="font-display font-extrabold text-brand-600 text-base">
              Call for Pricing
            </div>
          </div>
          <span
            className={`chip ${status.pill} ring-1 font-bold uppercase tracking-wide text-[10px]`}
          >
            <status.Icon className="h-3 w-3" />
            {status.label}
          </span>
        </div>

        {/* Stacked CTAs — matches the dual-button hardware-store pattern */}
        <div className="mt-4 flex flex-col gap-2">
          <a
            href={whatsappLink(quoteText).replace("https://wa.me", "https://wa.me")}
            target="_blank"
            rel="noreferrer"
            data-action="request-quote"
            className="inline-flex items-center justify-center gap-2 w-full bg-charcoal-950 hover:bg-brand-400 hover:text-charcoal-950 text-white font-bold text-[12px] uppercase tracking-wider py-3 rounded-xl transition"
          >
            <FileText className="h-4 w-4" />
            Request Quote
          </a>
          <a
            href={whatsappLink(quoteText)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-[12px] uppercase tracking-wider py-3 rounded-xl transition"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Quote
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function QuickAction({ label, Icon, href }) {
  const Element = href ? "a" : "button";
  const props = href
    ? href.startsWith("tel:")
      ? { href }
      : { href, target: "_self" }
    : { type: "button" };
  return (
    <Element
      {...props}
      aria-label={label}
      title={label}
      className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-white/95 backdrop-blur border border-slate-200 text-charcoal-700 hover:bg-charcoal-950 hover:text-brand-300 hover:border-charcoal-950 shadow-soft transition"
    >
      <Icon className="h-4 w-4" />
    </Element>
  );
}

export default ProductCard;
