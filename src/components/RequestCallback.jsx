import { useState } from "react";
import {
  PhoneCall,
  ArrowRight,
  CheckCircle2,
  Clock,
  Calendar,
  Briefcase,
  User,
} from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./motion";
import { whatsappLink, site } from "../data/site";

const projectTypes = [
  "Residential build",
  "Commercial / industrial",
  "Roofing only",
  "Renovation / remodel",
  "Bulk supply contract",
  "Other",
];

const slots = [
  "Within 30 minutes",
  "Today, before 2 PM",
  "Today, after 2 PM",
  "Tomorrow morning",
];

function RequestCallback() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    project: projectTypes[0],
    slot: slots[0],
  });
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const text = [
      `Hello THAANA, I'd like a callback please.`,
      ``,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Project: ${form.project}`,
      `Preferred callback time: ${form.slot}`,
    ].join("\n");
    window.open(whatsappLink(text), "_blank");
    setSent(true);
  };

  return (
    <section className="bg-white">
      <div className="container-pro py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <div className="eyebrow text-brand-600">Request a Callback</div>
            <h2 className="mt-3 heading-xl">
              Tight schedule?{" "}
              <span className="text-gradient-orange">We'll call you back.</span>
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Drop your number and project type. Our team will ring you within
              your preferred window — typically under 30 minutes during working
              hours.
            </p>

            <ul className="mt-7 space-y-3">
              {[
                "Speak directly to a procurement specialist",
                "Get availability for your full BOQ on the call",
                "Lock in pricing and delivery on the spot",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
              <a
                href={`tel:${site.phone}`}
                className="inline-flex items-center gap-2 font-semibold text-charcoal-900 hover:text-brand-600 transition"
              >
                <PhoneCall className="h-4 w-4 text-brand-500" />
                {site.phone}
              </a>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-brand-500" />
                {site.hours}
              </span>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.15}>
            <form
              onSubmit={submit}
              className="relative rounded-3xl bg-charcoal-950 text-white p-6 sm:p-8 lg:p-10 shadow-card overflow-hidden"
            >
              {/* Decoration */}
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-brand-400/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-brick-500/10 blur-3xl" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[11px] font-medium tracking-wide text-brand-300 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Avg. callback in 18 minutes
                </div>

                <h3 className="mt-4 font-display text-2xl sm:text-3xl font-extrabold leading-tight">
                  We'll Call You Back.
                </h3>

                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-200 text-sm"
                  >
                    Your request has been opened in WhatsApp — tap Send to deliver
                    it to our team.
                  </motion.div>
                )}

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <Field label="Full Name" Icon={User} required>
                    <input
                      required
                      value={form.name}
                      onChange={update("name")}
                      className={inputCls}
                      placeholder="Jane Wanjiru"
                    />
                  </Field>
                  <Field label="Phone Number" Icon={PhoneCall} required>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={update("phone")}
                      className={inputCls}
                      placeholder="+254 700 000 000"
                    />
                  </Field>
                  <Field label="Project Type" Icon={Briefcase} className="sm:col-span-2">
                    <select
                      value={form.project}
                      onChange={update("project")}
                      className={inputCls}
                    >
                      {projectTypes.map((p) => (
                        <option key={p} className="bg-charcoal-900">
                          {p}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Preferred Callback Time" Icon={Calendar} className="sm:col-span-2">
                    <div className="grid grid-cols-2 gap-2">
                      {slots.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setForm({ ...form, slot: s })}
                          className={`text-left text-xs sm:text-sm font-semibold px-3 py-2.5 rounded-xl border transition ${
                            form.slot === s
                              ? "bg-brand-400 border-brand-400 text-charcoal-950"
                              : "bg-white/[0.04] border-white/10 text-slate-200 hover:bg-white/[0.08]"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </Field>
                </div>

                <button type="submit" className="mt-7 w-full btn-primary !py-4">
                  We'll Call You Back
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="mt-3 text-[11px] text-slate-500 text-center">
                  Submitting this opens WhatsApp pre-filled — no spam, no follow-ups
                  without your consent.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full bg-white/[0.05] border border-white/10 rounded-xl px-3.5 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-400/40 focus:border-brand-400 transition";

function Field({ label, Icon, required, className = "", children }) {
  return (
    <label className={`block ${className}`}>
      <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-slate-400 font-bold">
        {Icon && <Icon className="h-3.5 w-3.5 text-brand-400" />}
        {label} {required && <span className="text-brand-400">*</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

export default RequestCallback;
