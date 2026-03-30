import type { Metadata } from "next";

const siteUrl = "https://spiceshipsupplier.com";

export const metadata: Metadata = {
  title: "Marine Ship Spare Parts & Engine Components – Browse Full Inventory",
  description:
    "Browse Spice Ship Supplier's complete marine inventory: main engine spares, auxiliary engine parts, air compressors, oil purifiers, marine pumps, heat exchangers, and deck equipment. New OEM, reconditioned & ready stock available.",
  keywords: [
    "marine spare parts catalog",
    "ship engine components",
    "buy marine spares online",
    "marine engine inventory",
    "ship parts supplier India",
    "reconditioned marine engine parts",
    "OEM marine spares",
    "marine pump spares",
    "cylinder liner buy",
    "piston crown marine",
    "exhaust valve marine engine",
  ],
  openGraph: {
    title: "Marine Ship Spare Parts Inventory | Spice Ship Supplier",
    description:
      "Complete inventory of marine engine spares, MAN B&W components, auxiliary engine parts, and ship machinery. OEM & reconditioned options.",
    url: `${siteUrl}/products`,
    images: [{ url: `${siteUrl}/products-hero.png`, width: 1200, height: 630, alt: "Marine Ship Spare Parts – Spice Ship Supplier Inventory" }],
  },
  alternates: { canonical: `${siteUrl}/products` },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
