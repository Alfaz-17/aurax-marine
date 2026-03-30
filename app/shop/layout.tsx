import type { Metadata } from "next";

const siteUrl = "https://spiceshipsupplier.com";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Shop", item: `${siteUrl}/shop` },
  ],
};

export const metadata: Metadata = {
  title: "Shop Marine Engine Spares – Engine Room Catalog & Ship Parts Store",
  description:
    "Shop marine engine spares and ship machinery parts online. Browse categorized inventory of main engines, auxiliary engines, compressors, pumps, and deck equipment. Fast worldwide delivery from Spice Ship Supplier.",
  keywords: [
    "shop marine engine spares",
    "buy ship parts online",
    "marine engine store",
    "ship machinery catalog",
    "marine spares e-commerce",
    "engine room catalog",
    "marine equipment shop India",
    "marine parts worldwide delivery",
  ],
  openGraph: {
    title: "Shop Marine Engine Spares | Spice Ship Supplier",
    description:
      "Online catalog of marine engine spares and ship machinery. Browse, enquire, and order with worldwide delivery.",
    url: `${siteUrl}/shop`,
    images: [{ url: `${siteUrl}/products-hero.png`, width: 1200, height: 630, alt: "Shop Marine Spares – Spice Ship Supplier" }],
  },
  alternates: { canonical: `${siteUrl}/shop` },
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
