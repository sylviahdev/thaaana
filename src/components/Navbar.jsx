import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { site, whatsappLink } from "../data/site";
import Logo from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200/70 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
      <div className="hidden md:block bg-slate-900 text-slate-300 text-xs">
        <div className="container-pro flex justify-between py-1.5">
          <span>{site.address}</span>
          <span className="flex items-center gap-4">
            <span>{site.hours}</span>
            <a href={`tel:${site.phone}`} className="hover:text-brand-300 transition">
              {site.phone}
            </a>
            <a href={`tel:${site.phoneAlt}`} className="hover:text-brand-300 transition">
              {site.phoneAlt}
            </a>
          </span>
        </div>
      </div>

      <nav className="container-pro flex items-center justify-between h-16 lg:h-[72px] gap-3">
        <Link to="/" className="group min-w-0 shrink">
          <Logo
            variant="onLight"
            markClassName="h-9 w-9 sm:h-11 sm:w-11 transition group-hover:scale-105 shrink-0"
            showTagline
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium rounded-lg transition ${
                    isActive ? "text-slate-900" : "text-slate-600 hover:text-slate-900"
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="inline-flex flex-col items-center">
                    {l.label}
                    <span
                      className={`mt-0.5 h-0.5 w-6 rounded-full transition-all ${
                        isActive ? "bg-brand-400" : "bg-transparent"
                      }`}
                    />
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={whatsappLink("Hello Thaana Hardware, I'd like a quotation.")}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition"
          >
            {site.phone}
          </a>
          <button onClick={() => navigate("/contact")} className="btn-primary !py-2.5 text-sm">
            Request Quote
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

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-200 text-slate-700"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="container-pro py-4 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                    isActive ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href={`tel:${site.phone}`}
              className="mt-2 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 flex items-center gap-2"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {site.phone}
            </a>
            <button
              onClick={() => {
                setOpen(false);
                navigate("/contact");
              }}
              className="btn-primary mt-2"
            >
              Request Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
