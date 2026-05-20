import { Link } from "react-router-dom";
import { site, categories, whatsappLink } from "../data/site";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="container-pro py-14 lg:py-16 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <Logo variant="onDark" markClassName="h-12 w-12" showTagline />
          <p className="mt-5 text-sm leading-relaxed text-slate-400 max-w-sm">
            A trusted Kenyan supplier of quality building materials and hardware,
            serving contractors, developers and homeowners since 2013.
          </p>
          <div className="mt-6 flex items-center gap-2">
            {["facebook", "instagram", "linkedin", "x"].map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 hover:border-brand-400 hover:text-brand-300 transition"
              >
                <span className="text-xs uppercase">{s[0]}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
            Company
          </div>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/products" className="hover:text-white transition">Products</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            <li><Link to="/login" className="hover:text-white transition">Admin Login</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
            Categories
          </div>
          <ul className="mt-4 space-y-2.5 text-sm">
            {categories.slice(0, 6).map((c) => (
              <li key={c}>
                <Link
                  to={`/products?category=${encodeURIComponent(c)}`}
                  className="hover:text-white transition"
                >
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
            Get in touch
          </div>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <div className="text-slate-500 text-xs">Address</div>
              <div className="text-slate-200">{site.address}</div>
            </li>
            <li>
              <div className="text-slate-500 text-xs">Phone</div>
              <a href={`tel:${site.phone}`} className="block text-slate-200 hover:text-white">
                {site.phone}
              </a>
              <a href={`tel:${site.phoneAlt}`} className="block text-slate-200 hover:text-white">
                {site.phoneAlt}
              </a>
            </li>
            <li>
              <div className="text-slate-500 text-xs">Email</div>
              <a href={`mailto:${site.email}`} className="text-slate-200 hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <div className="text-slate-500 text-xs">Hours</div>
              <div className="text-slate-200">{site.hours}</div>
            </li>
          </ul>
          <a
            href={whatsappLink("Hello Thaana Hardware!")}
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp mt-5 w-full !py-2.5 text-sm"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      <div className="border-t border-slate-900">
        <div className="container-pro py-5 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-slate-500">
          <div>© {new Date().getFullYear()} Thaana Hardware Ltd. All rights reserved.</div>
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
