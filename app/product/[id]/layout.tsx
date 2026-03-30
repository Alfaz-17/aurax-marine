import type { Metadata } from "next";

const siteUrl = "https://spiceshipsupplier.com";

export const metadata: Metadata = {
  title: "Marine Spare Part Details – Technical Specifications & Enquiry",
  description:
    "View detailed technical specifications, photos, and enquiry options for marine engine spare parts. Certified, tested, and available for global dispatch from Spice Ship Supplier.",
  keywords: [
    "marine spare part details",
    "ship engine component specifications",
    "marine part enquiry",
    "reconditioned marine parts",
    "ship spare technical specs",
    "marine parts global delivery",
  ],
  openGraph: {
    title: "Marine Spare Part – Spice Ship Supplier",
    description: "Detailed specs, photos, and enquiry for certified marine engine spare parts. Global dispatch available.",
    url: `${siteUrl}/product`,
  },
  alternates: { canonical: `${siteUrl}/product` },
};

export default function ProductDetailLayout({ children }: { children: React.ReactNode }) {
  return children;
}
