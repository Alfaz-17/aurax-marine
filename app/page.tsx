import dynamic from 'next/dynamic';
import { Hero } from "@/components/boty/hero";
import { SEOIntro } from "@/components/boty/seo-intro";
import { Header } from "@/components/boty/header";
import { Footer } from "@/components/boty/footer";


// Dynamic imports for below-the-fold components
const LeadershipShowcase = dynamic(() => import("@/components/boty/leadership-showcase").then(mod => mod.LeadershipShowcase));
const ProductGrid = dynamic(() => import("@/components/boty/product-grid").then(mod => mod.ProductGrid));
const BrandGrid = dynamic(() => import("@/components/boty/brands-grid").then(mod => mod.BrandGrid));
const FeatureSection = dynamic(() => import("@/components/boty/feature-section").then(mod => mod.FeatureSection));
const Testimonials = dynamic(() => import("@/components/boty/testimonials").then(mod => mod.Testimonials));
const CTABanner = dynamic(() => import("@/components/boty/cta-banner").then(mod => mod.CTABanner));
const Newsletter = dynamic(() => import("@/components/boty/newsletter").then(mod => mod.Newsletter));


export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <SEOIntro />
      <LeadershipShowcase />
      <ProductGrid />
      <BrandGrid />
      <FeatureSection />
      <Testimonials />
      <CTABanner />
      <Newsletter />
      <Footer />
    </main>

  )
}
