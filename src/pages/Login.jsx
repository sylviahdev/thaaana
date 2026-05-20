import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../components/Logo";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await axios.post("http://127.0.0.1:5000/login", form, {
        timeout: 3000,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/admin");
    } catch {
      // Demo fallback so the admin UI is reachable without a backend.
      if (form.username === "admin" && form.password === "admin") {
        localStorage.setItem("token", "demo-token");
        navigate("/admin");
      } else {
        setError("Invalid credentials. (Demo: admin / admin)");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-slate-50">
      {/* Brand panel */}
      <div className="relative hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(245,166,35,0.18),transparent_60%)]" />
        <svg className="absolute inset-0 h-full w-full opacity-10" preserveAspectRatio="none">
          <defs>
            <pattern id="loginGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0V40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#loginGrid)" />
        </svg>
        <div className="relative h-full flex flex-col justify-between p-12 text-white">
          <Link to="/">
            <Logo variant="onDark" markClassName="h-12 w-12" showTagline />
          </Link>

          <div className="max-w-md">
            <div className="text-brand-300 text-xs uppercase tracking-[0.2em] font-semibold">
              Admin portal
            </div>
            <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight">
              Manage your catalogue. Track quotations. Stay in control.
            </h1>
            <p className="mt-4 text-slate-300">
              Secure access for the Thaana Hardware team to add products, adjust
              prices and monitor incoming requests.
            </p>
          </div>

          <div className="text-xs text-slate-400">
            © {new Date().getFullYear()} Thaana Hardware Ltd.
          </div>
        </div>
      </div>

      {/* Form panel */}
      <div className="flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-md">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900"
          >
            <span aria-hidden>←</span> Back to site
          </Link>

          <div className="mt-6">
            <h2 className="font-display text-3xl font-bold text-slate-900">
              Sign in to dashboard
            </h2>
            <p className="mt-2 text-slate-500 text-sm">
              Enter your admin credentials to continue.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <label className="block">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                Username
              </span>
              <input
                required
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                className="mt-1.5 w-full bg-white border border-slate-200 rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-300 transition"
                placeholder="admin"
              />
            </label>

            <label className="block">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                Password
              </span>
              <input
                required
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="mt-1.5 w-full bg-white border border-slate-200 rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-300 transition"
                placeholder="••••••••"
              />
            </label>

            {error && (
              <div className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg p-3">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-dark w-full !py-3 disabled:opacity-60"
            >
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>

          <div className="mt-6 text-xs text-slate-500 text-center">
            Demo credentials: <code className="text-slate-700">admin / admin</code>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
