import type { Metadata } from "next";

const siteUrl = "https://spiceshipsupplier.com";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Brands", item: `${siteUrl}/brands` },
  ],
};

export const metadata: Metadata = {
  title: "Trusted Marine Engine Brands – Authorized Supply Partners",
  description:
    "Explore trusted marine engine brands supplied by Spice Ship Supplier. Authorized supply for MAN B&W, Daihatsu, Sulzer, Alfa Laval, and leading maritime equipment manufacturers worldwide.",
  keywords: [
    "marine engine brands",
    "ship spare parts brands",
    "MAN B&W authorized supplier",
    "Daihatsu marine parts",
    "Sulzer engine supplier",
    "Alfa Laval marine",
    "marine equipment manufacturers",
    "trusted marine brands India",
  ],
  openGraph: {
    title: "Trusted Marine Engine Brands | Spice Ship Supplier",
    description:
      "Authorized supply for leading marine brands: MAN B&W, Daihatsu, Sulzer, Alfa Laval & more. Global maritime equipment partners.",
    url: `${siteUrl}/brands`,
    images: [{ url: `${siteUrl}/logo.png`, width: 1200, height: 630, alt: "Marine Engine Brands – Spice Ship Supplier" }],
  },
  alternates: { canonical: `${siteUrl}/brands` },
};

export default function BrandsLayout({ children }: { children: React.ReactNode }) {
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
