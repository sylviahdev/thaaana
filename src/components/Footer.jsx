import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

// Social icons — brand glyphs were removed from lucide; keep small inline SVGs.
const Facebook = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z" />
  </svg>
);
const Instagram = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);
const Linkedin = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.96 1.83-2 3.77-2 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-3-1.83-3-1.84 0-2.12 1.43-2.12 2.9V21h-4V9Z" />
  </svg>
);
const Twitter = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M18.244 2H21l-6.5 7.43L22 22h-6.828l-4.78-6.27L4.8 22H2l7-8L2 2h6.914l4.34 5.74L18.244 2Zm-1.196 18.2h1.624L7.05 3.7H5.314l11.734 16.5Z" />
  </svg>
);
import { site, categories, whatsappLink } from "../data/site";
import Logo from "./Logo";

function Footer() {
  const socials = [
    { name: "Facebook", Icon: Facebook, href: "#" },
    { name: "Instagram", Icon: Instagram, href: "#" },
    { name: "LinkedIn", Icon: Linkedin, href: "#" },
    { name: "Twitter", Icon: Twitter, href: "#" },
  ];

  return (
    <footer className="relative bg-charcoal-950 text-slate-300 overflow-hidden">
      {/* Top accent bar — soft brand-gradient seam */}
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/60 to-transparent"
        aria-hidden
      />
      {/* Glow + grid backdrop */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(245,166,35,0.10),transparent_60%)]" />
      <svg className="absolute inset-0 -z-10 h-full w-full opacity-[0.05]" preserveAspectRatio="none" aria-hidden>
        <defs>
          <pattern id="footerGrid" width="44" height="44" patternUnits="userSpaceOnUse">
            <path d="M44 0H0V44" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#footerGrid)" />
      </svg>

      <div className="container-pro pt-16 lg:pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo variant="onDark" markClassName="h-28 w-28" showTagline />
            <p className="mt-6 text-sm leading-relaxed text-slate-400 max-w-sm">
              Kenya's contractor-first builders' merchant. Supplying genuine
              construction materials and hardware across 14 counties since 2013.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 hover:border-brand-400 hover:text-brand-300 transition"
                >
                  <s.Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
              Company
            </div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-brand-300 transition">Home</Link></li>
              <li><Link to="/products" className="hover:text-brand-300 transition">Products</Link></li>
              <li><Link to="/products#categories" className="hover:text-brand-300 transition">Categories</Link></li>
              <li><Link to="/contact#bulk" className="hover:text-brand-300 transition">Bulk Orders</Link></li>
              <li><Link to="/about" className="hover:text-brand-300 transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-300 transition">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
              Top Categories
            </div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {categories.slice(0, 7).map((c) => (
                <li key={c}>
                  <Link
                    to={`/products?category=${encodeURIComponent(c)}`}
                    className="hover:text-brand-300 transition inline-flex items-center gap-1.5"
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
              Get in Touch
            </div>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 text-brand-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-500 text-xs">Address</div>
                  <div className="text-slate-200">{site.address}</div>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 text-brand-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-500 text-xs">Phone</div>
                  <a href={`tel:${site.phone}`} className="block text-slate-200 hover:text-brand-300">
                    {site.phone}
                  </a>
                  <a href={`tel:${site.phoneAlt}`} className="block text-slate-200 hover:text-brand-300">
                    {site.phoneAlt}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 text-brand-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-500 text-xs">Email</div>
                  <a href={`mailto:${site.email}`} className="text-slate-200 hover:text-brand-300">
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="h-4 w-4 text-brand-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-500 text-xs">Hours</div>
                  <div className="text-slate-200">{site.hours}</div>
                </div>
              </li>
            </ul>
            <a
              href={whatsappLink("Hello THAANA Hardware!")}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp mt-6 w-full !py-2.5 text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Map preview */}
        <div className="mt-12 grid lg:grid-cols-3 gap-6 items-center">
          <div className="lg:col-span-1">
            <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
              Find Our Yard
            </div>
            <p className="mt-2 text-slate-400 text-sm leading-relaxed">
              Walk-ins welcome — bring your BOQ for an on-the-spot quote.
            </p>
            <a
              href="https://www.google.com/maps?q=Ekalakala,+Machakos,+Kenya"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-brand-300 hover:text-brand-200"
            >
              Open in Google Maps <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-white/10">
            <iframe
              title="THAANA Hardware Map"
              src="https://www.google.com/maps?q=Ekalakala,+Machakos,+Kenya&output=embed"
              className="w-full h-48 lg:h-40 border-0 grayscale-[40%] hover:grayscale-0 transition duration-500"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-pro py-5 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-slate-500">
          <div>© {new Date().getFullYear()} THAANA Hardware Limited. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-slate-300">Privacy</a>
            <a href="#" className="hover:text-slate-300">Terms</a>
            <a href="#" className="hover:text-slate-300">Delivery Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
