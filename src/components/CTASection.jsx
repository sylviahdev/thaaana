import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Phone, CheckCircle2 } from "lucide-react";
import { whatsappLink, site } from "../data/site";
import { Reveal } from "./motion";

function CTASection() {
  return (
    <section className="bg-white">
      <div className="container-pro py-20 lg:py-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-charcoal-950 text-white shadow-card isolate">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-charcoal-950 via-charcoal-900 to-charcoal-950" />
              <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-brand-400/30 blur-3xl animate-float-y" />
              <div className="absolute -left-32 -bottom-32 h-80 w-80 rounded-full bg-brick-500/20 blur-3xl" />
              <svg className="absolute inset-0 h-full w-full opacity-[0.06]" preserveAspectRatio="none" aria-hidden>
                <defs>
                  <pattern id="ctaGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M40 0H0V40" fill="none" stroke="white" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#ctaGrid)" />
              </svg>
            </div>

            <div className="relative grid lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 lg:p-16">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[11px] font-medium tracking-wide text-brand-300 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-300 animate-pulse" />
                  Open for new project quotations
                </div>
                <h2 className="mt-5 heading-xl-dark">
                  Let's quote your next build.{" "}
                  <span className="text-gradient-orange">Quotations in 4 hours.</span>
                </h2>
                <p className="mt-5 max-w-xl text-slate-300 leading-relaxed">
                  Send us your BOQ or material list. We'll come back with availability,
                  lead times and a tailored quotation ,all on a single sheet.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-400">
                  {["No obligation", "Honest quotations", "Same-day Nairobi dispatch"].map((b) => (
                    <span key={b} className="inline-flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-3">
                <Link to="/contact" className="btn-primary !py-4 !text-base">
                  Request Quotation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={whatsappLink(
                    "Hello THAANA, I'd like a quotation for my project."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-white font-semibold px-6 py-4 rounded-xl transition"
                >
                  <MessageCircle className="h-5 w-5 text-[#25D366]" />
                  WhatsApp the team
                </a>
                <a
                  href={`tel:${site.phone}`}
                  className="inline-flex items-center justify-center gap-2 text-slate-400 hover:text-white text-sm transition pt-1"
                >
                  <Phone className="h-4 w-4" />
                  Or call {site.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default CTASection;
