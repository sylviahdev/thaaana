import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight, Send } from "lucide-react";
import Layout from "../components/Layout";
import BulkOrders from "../components/BulkOrders";
import DeliveryCoverage from "../components/DeliveryCoverage";
import RequestCallback from "../components/RequestCallback";
import QuoteBuilder from "../components/QuoteBuilder";
import { Reveal } from "../components/motion";
import { site, categories, whatsappLink } from "../data/site";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    category: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = "Contact & Request a Quotation | THAANA Hardware Kenya";
  }, []);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const text = [
      `New quotation request from ${form.name}`,
      form.company && `Company: ${form.company}`,
      form.phone && `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      form.category && `Category: ${form.category}`,
      "",
      "Items / details:",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(text), "_blank");
    setSent(true);
  };

  return (
    <Layout>
      {/* Page header */}
      <section className="relative bg-charcoal-950 text-white overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(245,166,35,0.15),transparent_60%)]" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-brick-500/15 blur-3xl -z-10" />
        <div className="container-pro py-16 lg:py-20">
          <nav className="text-xs text-slate-400">
            Home <span className="mx-1.5">/</span>
            <span className="text-slate-200">Contact</span>
          </nav>
          <Reveal>
            <h1 className="mt-3 font-display text-3xl sm:text-5xl font-black leading-tight max-w-3xl">
              Request a <span className="text-gradient-orange">Quotation</span>
            </h1>
            <p className="mt-5 max-w-2xl text-slate-300 text-lg">
              Send us your item list or BOQ. We respond with a full quotation within
              4 working hours — including availability, lead times and delivery.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="container-pro py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal className="relative card p-6 lg:p-7 space-y-6 overflow-hidden">
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-brand-400/[0.10] blur-3xl" aria-hidden />
              <div className="relative">
                <div className="eyebrow text-brand-600">Reach our team</div>
                <h3 className="mt-2 font-display text-xl font-extrabold text-charcoal-900">
                  Direct lines to the yard.
                </h3>
              </div>

              <div className="space-y-5">
                <InfoRow Icon={MapPin} label="Visit our yard" value={site.address} />
                <InfoRow
                  Icon={Phone}
                  label="Phone / WhatsApp"
                  value={
                    <>
                      <a href={`tel:${site.phone}`} className="block hover:text-brand-600">
                        {site.phone}
                      </a>
                      <a href={`tel:${site.phoneAlt}`} className="block hover:text-brand-600">
                        {site.phoneAlt}
                      </a>
                    </>
                  }
                />
                <InfoRow
                  Icon={Mail}
                  label="Email"
                  value={
                    <a href={`mailto:${site.email}`} className="hover:text-brand-600">
                      {site.email}
                    </a>
                  }
                />
                <InfoRow Icon={Clock} label="Hours" value={site.hours} />
              </div>

              <a
                href={whatsappLink("Hello THAANA Hardware!")}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp w-full relative"
              >
                <MessageCircle className="h-4 w-4" />
                Start WhatsApp Chat
              </a>
            </Reveal>

            <Reveal delay={0.1} className="mt-5 card overflow-hidden">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=Ekalakala,+Machakos,+Kenya&output=embed"
                className="w-full h-56 border-0"
                loading="lazy"
              />
            </Reveal>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <Reveal>
              <form
                onSubmit={submit}
                className="relative card p-6 lg:p-8 overflow-hidden"
              >
                {/* accent bar */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-400 via-brand-300 to-brand-500" aria-hidden />
                <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-brand-400/[0.07] blur-3xl" aria-hidden />

                <div className="relative">
                  <div className="eyebrow text-brand-600">Request a quotation</div>
                  <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-charcoal-900 tracking-tight">
                    Tell us what you need.
                  </h2>
                  <p className="text-sm text-slate-500 mt-2">
                    Submitting opens WhatsApp pre-filled, ready to send. We
                    respond within 4 working hours.
                  </p>
                </div>

                {sent && (
                  <div className="mt-5 p-3.5 rounded-xl bg-emerald-50 text-emerald-800 text-sm ring-1 ring-emerald-100">
                    Your request has been opened in WhatsApp — please tap Send to
                    deliver it to our team.
                  </div>
                )}

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <Field label="Full name" required>
                  <input required value={form.name} onChange={update("name")} className={inputCls} placeholder="Jane Wanjiru" />
                </Field>
                <Field label="Company / Project">
                  <input value={form.company} onChange={update("company")} className={inputCls} placeholder="Wanjiru Builders Ltd." />
                </Field>
                <Field label="Phone" required>
                  <input required type="tel" value={form.phone} onChange={update("phone")} className={inputCls} placeholder="+254 700 000 000" />
                </Field>
                <Field label="Email">
                  <input type="email" value={form.email} onChange={update("email")} className={inputCls} placeholder="jane@company.co.ke" />
                </Field>
                <Field label="Category" className="sm:col-span-2">
                  <select value={form.category} onChange={update("category")} className={inputCls}>
                    <option value="">Select a category…</option>
                    {categories.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                    <option>Mixed / multiple categories</option>
                  </select>
                </Field>
                <Field label="Items required" required className="sm:col-span-2">
                  <textarea
                    required
                    value={form.message}
                    onChange={update("message")}
                    rows={5}
                    className={inputCls}
                    placeholder="e.g. 200 bags Bamburi 32.5N, 50 lengths Y12 steel, delivery to Ruiru..."
                  />
                </Field>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 justify-between">
                <p className="text-xs text-slate-500">
                  By submitting, your request opens in WhatsApp ready to send.
                </p>
                <button type="submit" className="btn-primary">
                  <Send className="h-4 w-4" />
                  Send Request
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <BulkOrders />
      <DeliveryCoverage />
      <QuoteBuilder />
      <RequestCallback />
    </Layout>
  );
}

const inputCls =
  "w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-300 transition";

function Field({ label, required, className = "", children }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
        {label} {required && <span className="text-brand-500">*</span>}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

function InfoRow({ Icon, label, value }) {
  return (
    <div className="flex gap-4">
      <span className="h-10 w-10 rounded-xl bg-brand-50 ring-1 ring-brand-100 text-brand-600 inline-flex items-center justify-center shrink-0">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
          {label}
        </div>
        <div className="mt-1 font-display font-bold text-charcoal-900">
          {value}
        </div>
      </div>
    </div>
  );
}

export default Contact;
