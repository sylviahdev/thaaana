import { MessageCircle, Phone, FileText } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { whatsappLink, site } from "../data/site";

function Layout({ children }) {
  const { scrollYProgress } = useScroll();
  const progressX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="min-h-screen flex flex-col bg-charcoal-50 overflow-x-hidden">
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-0.5 bg-brand-400 z-[60] origin-left"
      />

      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />

      {/* Desktop floating WhatsApp button */}
      <a
        href={whatsappLink("Hello THAANA Hardware!")}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        style={{ bottom: "max(1.5rem, env(safe-area-inset-bottom))" }}
        className="fixed right-4 sm:right-6 z-40 hidden sm:inline-flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-[0_12px_40px_-8px_rgba(37,211,102,0.5)] hover:scale-110 hover:shadow-[0_20px_60px_-8px_rgba(37,211,102,0.7)] transition-all duration-300 group"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-60 group-hover:opacity-0 animate-ping" />
        <svg viewBox="0 0 24 24" fill="currentColor" className="relative h-7 w-7">
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.554-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24Z" />
        </svg>
      </a>

      {/* Sticky mobile CTA bar */}
      <div
        style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
        className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-charcoal-950/95 backdrop-blur-xl border-t border-white/10 px-3 pt-3 grid grid-cols-3 gap-2"
      >
        <a
          href={whatsappLink("Hello THAANA Hardware!")}
          target="_blank"
          rel="noreferrer"
          className="inline-flex flex-col items-center justify-center gap-0.5 bg-[#25D366] text-white text-[11px] font-bold py-2.5 rounded-xl"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        <a
          href={`tel:${site.phone}`}
          className="inline-flex flex-col items-center justify-center gap-0.5 bg-white/[0.08] border border-white/15 text-white text-[11px] font-bold py-2.5 rounded-xl"
        >
          <Phone className="h-4 w-4 text-brand-400" />
          Call
        </a>
        <Link
          to="/contact"
          className="inline-flex flex-col items-center justify-center gap-0.5 bg-brand-400 text-charcoal-950 text-[11px] font-bold py-2.5 rounded-xl"
        >
          <FileText className="h-4 w-4" />
          Quote
        </Link>
      </div>

      {/* Spacer so mobile content isn't hidden behind the bar */}
      <div aria-hidden className="sm:hidden h-16" />
    </div>
  );
}

export default Layout;
