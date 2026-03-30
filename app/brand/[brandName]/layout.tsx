import type { Metadata } from "next";

const siteUrl = "https://spiceshipsupplier.com";

export const metadata: Metadata = {
  title: "Marine Brand Products – Authorized Inventory & Logistics",
  description:
    "Browse marine engine spare parts by brand. Authorized inventory of ship machinery and engine components from trusted global manufacturers, supplied by Spice Ship Supplier.",
  keywords: [
    "marine brand products",
    "ship parts by brand",
    "authorized marine inventory",
    "marine engine manufacturer parts",
    "brand specific ship spares",
  ],
  openGraph: {
    title: "Marine Brand Products | Spice Ship Supplier",
    description: "Authorized inventory of marine engine spares by brand. Trusted global manufacturers.",
    url: `${siteUrl}/brand`,
  },
  alternates: { canonical: `${siteUrl}/brand` },
};

export default function BrandDetailLayout({ children }: { children: React.ReactNode }) {
  return children;
}
