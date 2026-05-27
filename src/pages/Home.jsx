import { useEffect } from "react";
import Layout from "../components/Layout";
import HeroSlider from "../components/HeroSlider";
import BrandStrip from "../components/BrandStrip";
import PhotoBanner from "../components/PhotoBanner";
import FeaturedCategories from "../components/FeaturedCategories";
import ProductGridTabs from "../components/ProductGridTabs";
import CategoryShowcase from "../components/CategoryShowcase";
import BulkOrders from "../components/BulkOrders";
import DeliveryCoverage from "../components/DeliveryCoverage";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import RequestCallback from "../components/RequestCallback";
import CTASection from "../components/CTASection";

function Home() {
  useEffect(() => {
    document.title =
      "Building Materials Kenya · Hardware Store Nairobi | THAANA Hardware Limited";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "THAANA Hardware Limited — Trusted construction materials & hardware supplier in Kenya. Cement, steel, roofing, plumbing, paints, water tanks & tools. Quotations in 4 hours, delivery nationwide."
      );
  }, []);

  return (
    <Layout>
      {/* 1 · Hero banner slider — 3 cinematic auto-rotating slides */}
      <HeroSlider />

      {/* 2 · Supplier / brand trust strip */}
      <BrandStrip />

      {/* 3 · Photo-banner slider — category storytelling */}
      <PhotoBanner />

      {/* 4 · "Building & Hardware" — NEW / FEATURED / TOP SELLERS tabbed grid */}
      <ProductGridTabs />

      {/* 4 · Premium category tiles — visual browse pattern */}
      <FeaturedCategories />

      {/* 5 · Shop by category — tabbed product carousels per category */}
      <CategoryShowcase />

      {/* 6 · Contractor / bulk orders */}
      <BulkOrders />

      {/* 7 · Delivery coverage map */}
      <DeliveryCoverage />

      {/* 8 · Why choose us */}
      <WhyChooseUs />

      {/* 9 · Testimonials carousel */}
      <Testimonials />

      {/* 10 · Callback form */}
      <RequestCallback />

      {/* 11 · Final CTA */}
      <CTASection />
    </Layout>
  );
}

export default Home;
