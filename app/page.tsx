import dynamic from 'next/dynamic';
import { Hero } from "@/components/boty/hero";
import { SEOIntro } from "@/components/boty/seo-intro";


// Dynamic imports for below-the-fold components
const ProductGrid = dynamic(() => import("@/components/boty/product-grid").then(mod => mod.ProductGrid));
const BrandGrid = dynamic(() => import("@/components/boty/brands-grid").then(mod => mod.BrandGrid));
const FeatureSection = dynamic(() => import("@/components/boty/feature-section").then(mod => mod.FeatureSection));
const Testimonials = dynamic(() => import("@/components/boty/testimonials").then(mod => mod.Testimonials));


export default function HomePage() {
  return (
    <main>
      <Hero />
      <SEOIntro />
      <ProductGrid />
      <BrandGrid />
      <FeatureSection />
      <Testimonials />
    </main>
  )
}
