import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import TrustSection from "../components/TrustSection";
import FeaturedCategories from "../components/FeaturedCategories";
import WhyChooseUs from "../components/WhyChooseUs";
import CTASection from "../components/CTASection";
import ProductCard from "../components/ProductCard";
import productsData from "../data/products";

function Home() {
  const featured = productsData.slice(0, 4);

  return (
    <Layout>
      <Hero />
      <TrustSection />

      {/* Featured products preview */}
      <section className="bg-white">
        <div className="container-pro py-16 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div className="max-w-xl">
              <div className="text-xs uppercase tracking-[0.18em] text-brand-600 font-semibold">
                Best Sellers
              </div>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-slate-900">
                Top materials our contractors order weekly.
              </h2>
            </div>
            <Link to="/products" className="btn-outline text-sm">
              View all products →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <FeaturedCategories />
      <WhyChooseUs />
      <CTASection />
    </Layout>
  );
}

export default Home;
