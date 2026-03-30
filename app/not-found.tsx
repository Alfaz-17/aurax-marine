import Link from "next/link";
import { Anchor, ArrowLeft, Search } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found – Spice Ship Supplier",
  description:
    "The page you're looking for doesn't exist. Browse our marine engine spares inventory or contact us for assistance.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-2xl">
        {/* Large 404 */}
        <div className="relative mb-8">
          <span className="text-[120px] sm:text-[180px] md:text-[220px] font-black text-black/5 leading-none select-none block">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <Anchor className="w-16 h-16 sm:w-20 sm:h-20 text-primary" />
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black uppercase tracking-tighter mb-4">
          Component <span className="text-primary italic">Not Found</span>
        </h1>

        <p className="text-sm sm:text-base text-black/60 mb-10 italic max-w-md mx-auto leading-relaxed">
          The marine part or page you&apos;re looking for may have been moved, renamed, or is no longer in our inventory.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-black text-white font-black uppercase tracking-widest text-[10px] hover:bg-primary transition-all flex items-center justify-center gap-3"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <Link
            href="/products"
            className="px-8 py-4 border border-black/20 text-black font-black uppercase tracking-widest text-[10px] hover:bg-black hover:text-white transition-all flex items-center justify-center gap-3"
          >
            <Search className="w-4 h-4" /> Browse Inventory
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-black/10">
          <p className="text-[10px] text-black/40 uppercase tracking-widest font-black">
            Need help? Call{" "}
            <a href="tel:+919023968557" className="text-primary hover:underline">
              +91 90239 68557
            </a>{" "}
            or{" "}
            <a href="mailto:spiceshipsupplier@gmail.com" className="text-primary hover:underline">
              Email Us
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
