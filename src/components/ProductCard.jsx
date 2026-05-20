import { formatKES, whatsappLink } from "../data/site";
import ProductImage from "./ProductImage";

function ProductCard({ product }) {
  const quoteText = `Hello Thaana Hardware, I would like a quotation for "${product.name}". Please share availability and lead time.`;

  return (
    <article className="group card overflow-hidden flex flex-col hover:shadow-card hover:-translate-y-1 transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500">
          <ProductImage product={product} />
        </div>
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="chip bg-white/95 backdrop-blur text-slate-700 border border-slate-200">
            {product.category}
          </span>
          {product.badge && (
            <span className="chip bg-brand-400 text-slate-900 font-semibold">
              {product.badge}
            </span>
          )}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-slate-900 text-base leading-snug line-clamp-2">
          {product.name}
        </h3>
        <p className="mt-2 text-sm text-slate-600 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        <div className="mt-5 pt-4 border-t border-slate-100 flex items-end justify-between">
          <div>
            <div className="font-display text-lg font-extrabold text-slate-900">
              {formatKES(product.price)}
            </div>
            <div className="text-[11px] uppercase tracking-wider text-slate-500 mt-0.5">
              {product.unit || "ex. VAT"}
            </div>
          </div>
          <a
            href={whatsappLink(quoteText)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-brand-500 text-white hover:text-slate-900 font-semibold text-sm px-3.5 py-2 rounded-lg transition"
          >
            Quote
            <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
