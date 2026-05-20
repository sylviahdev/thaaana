import { useState } from "react";
import Layout from "../components/Layout";
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

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    // Compose a WhatsApp message containing the structured request.
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
      <section className="bg-slate-900 text-white">
        <div className="container-pro py-14 lg:py-16">
          <nav className="text-xs text-slate-400">
            Home <span className="mx-1.5">/</span>
            <span className="text-slate-200">Contact</span>
          </nav>
          <h1 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold">
            Request a Quotation
          </h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            Send us your item list or BOQ. We respond with a full quotation within 4
            working hours.
          </p>
        </div>
      </section>

      <section className="container-pro py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="card p-6 lg:p-7 space-y-6">
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  Visit our yard
                </div>
                <div className="mt-1 font-display font-bold text-slate-900">
                  {site.address}
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  Phone / WhatsApp
                </div>
                <a
                  href={`tel:${site.phone}`}
                  className="mt-1 block font-display font-bold text-slate-900"
                >
                  {site.phone}
                </a>
                <a
                  href={`tel:${site.phoneAlt}`}
                  className="mt-1 block font-display font-bold text-slate-900"
                >
                  {site.phoneAlt}
                </a>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  Email
                </div>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 block font-display font-bold text-slate-900"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  Hours
                </div>
                <div className="mt-1 font-display font-bold text-slate-900">
                  {site.hours}
                </div>
              </div>
              <a
                href={whatsappLink("Hello Thaana Hardware!")}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp w-full"
              >
                Start WhatsApp Chat
              </a>
            </div>

            <div className="mt-5 card overflow-hidden">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=Ekalakala,+Machakos,+Kenya&output=embed"
                className="w-full h-56 border-0"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <form onSubmit={submit} className="card p-6 lg:p-8">
              <h2 className="font-display text-xl font-bold text-slate-900">
                Tell us what you need
              </h2>

              {sent && (
                <div className="mt-4 p-3 rounded-lg bg-emerald-50 text-emerald-800 text-sm">
                  Your request has been opened in WhatsApp — please tap Send to
                  deliver it to our team.
                </div>
              )}

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <Field label="Full name" required>
                  <input
                    required
                    value={form.name}
                    onChange={update("name")}
                    className={inputCls}
                    placeholder="Jane Wanjiru"
                  />
                </Field>
                <Field label="Company / Project">
                  <input
                    value={form.company}
                    onChange={update("company")}
                    className={inputCls}
                    placeholder="Wanjiru Builders Ltd."
                  />
                </Field>
                <Field label="Phone" required>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    className={inputCls}
                    placeholder="+254 700 000 000"
                  />
                </Field>
                <Field label="Email">
                  <input
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    className={inputCls}
                    placeholder="jane@company.co.ke"
                  />
                </Field>
                <Field label="Category" className="sm:col-span-2">
                  <select
                    value={form.category}
                    onChange={update("category")}
                    className={inputCls}
                  >
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
                  Send Request
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
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

export default Contact;
