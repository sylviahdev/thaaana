import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Heart,
  FileText,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { site, whatsappLink } from "../data/site";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import TopCategoryNav from "./TopCategoryNav";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-charcoal-950/95 backdrop-blur-xl border-b border-white/[0.06] ${
        scrolled ? "shadow-[0_10px_40px_-20px_rgba(0,0,0,0.7)]" : ""
      }`}
    >
      {/* ============ Top utility bar ============ */}
      <div
        className={`hidden md:block text-xs transition-all duration-300 overflow-hidden ${
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100 border-b border-white/5"
        }`}
      >
        <div className="container-pro flex justify-between py-2 text-slate-400">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-brand-400" />
            {site.address}
          </span>
          <span className="flex items-center gap-5">
            <span className="inline-flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-brand-400" />
              {site.hours}
            </span>
            <a
              href={`tel:${site.phone}`}
              className="inline-flex items-center gap-1.5 hover:text-brand-300 transition"
            >
              <Phone className="h-3.5 w-3.5" />
              {site.phone}
            </a>
            <Link to="/about" className="hover:text-brand-300 transition">
              About
            </Link>
            <Link to="/contact" className="hover:text-brand-300 transition">
              Contact
            </Link>
          </span>
        </div>
      </div>

      {/* ============ Main row: logo + search + CTAs ============ */}
      <div className="container-pro flex items-center gap-4 lg:gap-6 py-3 lg:py-4">
        <Link to="/" className="group shrink-0 flex items-center">
          <Logo
            variant="onDark"
            markClassName="h-10 w-10 sm:h-12 sm:w-12 transition group-hover:scale-105"
          />
        </Link>

        {/* Search bar — desktop & tablet */}
        <div className="hidden sm:block flex-1 max-w-3xl">
          <SearchBar />
        </div>

        <div className="hidden lg:flex items-center gap-3 ml-auto shrink-0">
          {/* Wishlist / saved quotes — repurposed from cart */}
          <Link
            to="/products"
            aria-label="Saved quotes"
            className="hidden xl:inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-brand-300 hover:border-white/20 transition"
          >
            <Heart className="h-4 w-4" />
          </Link>

          {/* Phone block */}
          <a
            href={`tel:${site.phone}`}
            className="inline-flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/[0.04] transition"
          >
            <span className="h-10 w-10 inline-flex items-center justify-center rounded-xl bg-brand-400/15 ring-1 ring-brand-400/30 text-brand-300">
              <Phone className="h-4 w-4" />
            </span>
            <span className="leading-tight">
              <span className="block text-[10px] uppercase tracking-[0.16em] text-slate-500 font-bold">
                Call for Pricing
              </span>
              <span className="block text-sm font-bold text-white">
                {site.phone}
              </span>
            </span>
          </a>

          <button
            onClick={() => navigate("/contact")}
            className="btn-primary !py-3 !text-sm"
          >
            <FileText className="h-4 w-4" />
            Request Quote
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 ml-auto lg:hidden">
          <a
            href={whatsappLink("Hello THAANA Hardware, I'd like a quotation.")}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366]"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center h-10 w-10 rounded-xl border border-white/15 text-white bg-white/5"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile search row */}
      <div className="sm:hidden px-4 pb-3">
        <SearchBar />
      </div>

      {/* ============ Category navigation ============ */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          scrolled ? "max-h-0 opacity-0" : "max-h-16 opacity-100"
        }`}
      >
        <TopCategoryNav />
      </div>

      {/* ============ Mobile menu ============ */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-white/10 bg-charcoal-950 overflow-hidden"
          >
            <div className="container-pro py-4 flex flex-col gap-1">
              {[
                { to: "/", label: "Home" },
                { to: "/products", label: "All Products" },
                { to: "/contact#bulk", label: "Bulk Orders" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
              ].map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/5 transition"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <a
                href={`tel:${site.phone}`}
                className="mt-2 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/5 flex items-center gap-2"
              >
                <Phone className="h-4 w-4 text-brand-400" />
                {site.phone}
              </a>
              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/contact");
                }}
                className="btn-primary mt-2"
              >
                <FileText className="h-4 w-4" />
                Request Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
