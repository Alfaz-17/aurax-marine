import type { Metadata } from "next";

const siteUrl = "https://spiceshipsupplier.com";

// Breadcrumb JSON-LD for About page
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: `${siteUrl}/about`,
    },
  ],
};

// AboutPage structured data
const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Spice Ship Supplier",
  description:
    "30+ years legacy in marine engine spares. Based in Bhavnagar, India, specializing in MAN B&W, Sulzer, Daihatsu engines and critical ship machinery for global fleets.",
  url: `${siteUrl}/about`,
  mainEntity: {
    "@type": "Organization",
    name: "Spice Ship Supplier",
    foundingDate: "1990",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bhavnagar",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
  },
};

export const metadata: Metadata = {
  title: "About Spice Ship Supplier – 30+ Years Marine Engine Spare Parts Legacy",
  description:
    "Learn about Spice Ship Supplier's 30+ year legacy in marine engine spares. Based in Bhavnagar, India, we specialize in MAN B&W, Sulzer, Daihatsu engines, and critical ship machinery for global fleets.",
  keywords: [
    "about Spice Ship Supplier",
    "marine spare parts company India",
    "ship engine supplier history",
    "MAN B&W specialists",
    "Sulzer engine spares",
    "maritime supply company Bhavnagar",
    "marine machinery retailer",
    "ship spare parts wholesaler",
  ],
  openGraph: {
    title: "About Spice Ship Supplier – 30+ Years Marine Excellence",
    description:
      "30+ years of proven marine service. MAN B&W, Sulzer & Daihatsu engine specialists serving global fleets with reliable ship spare parts from India.",
    url: `${siteUrl}/about`,
    images: [
      {
        url: `${siteUrl}/spare-parts-new.png`,
        width: 1200,
        height: 630,
        alt: "Spice Ship Supplier – Marine Engine Spares Facility",
      },
    ],
  },
  alternates: { canonical: `${siteUrl}/about` },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />
      {children}
    </>
  );
}
