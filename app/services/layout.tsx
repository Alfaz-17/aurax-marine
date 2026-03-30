import type { Metadata } from "next";

const siteUrl = "https://spiceshipsupplier.com";

// Breadcrumb JSON-LD for Services page
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
      name: "Services",
      item: `${siteUrl}/services`,
    },
  ],
};

// FAQ Schema — powerful for getting featured snippets in Google
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What marine engine spares does Spice Ship Supplier provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We supply a complete range of marine engine spares including MAN B&W S50MC cylinder liners, piston crowns, exhaust valve assemblies, Daihatsu DK20 auxiliary engine parts, air compressor spares, oil purifier components (Alfa Laval), marine pumps, heat exchangers, and fresh water generator parts.",
      },
    },
    {
      "@type": "Question",
      name: "Do you supply OEM or alternative marine parts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide both genuine OEM parts and vetted OEM alternatives. Our technical team ensures maximum reliability and cost-efficiency for ship managers, with full technical documentation and photography for every supply.",
      },
    },
    {
      "@type": "Question",
      name: "Which marine engine brands does Spice Ship Supplier specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in MAN B&W (S50MC, S60MC, S70MC, S35MC series), Sulzer (45LA, 52LA series), Daihatsu DK20 generator sets, and Alfa Laval purifiers. We also supply deck equipment, hydraulic cranes, and marine automation components.",
      },
    },
    {
      "@type": "Question",
      name: "Does Spice Ship Supplier offer worldwide shipping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer worldwide shipping and export services to major ports and fleets globally. As a wholesale, import, and export business based in Bhavnagar, Gujarat, India, we maintain a robust global supply network with fast international logistics.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get a quote for marine engine spares?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can contact us at +91 90239 68557, email spiceshipsupplier@gmail.com, or use the contact form on our website. We provide formal quotations within 24 hours with technical documentation. Emergency 24/7 support is also available.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Marine Engine & Machinery Spares Services – MAN B&W, Daihatsu Specialists",
  description:
    "Explore Spice Ship Supplier's marine services: MAN B&W S50MC engine specialization, engine room machinery spares, technical sourcing & OEM alternatives, Daihatsu DK20 auxiliary engine spares. Trusted by global ship managers.",
  keywords: [
    "marine engine services",
    "MAN B&W S50MC spares",
    "engine room machinery",
    "technical sourcing marine",
    "OEM alternative marine parts",
    "Daihatsu DK20 auxiliary engine",
    "ship engine overhaul",
    "marine compressor spares",
    "oil purifier spares Alfa Laval",
    "marine pump service",
  ],
  openGraph: {
    title: "Marine Engine & Machinery Spares Services | Spice Ship Supplier",
    description:
      "MAN B&W, Sulzer & Daihatsu engine specialists. Engine room machinery spares, technical sourcing, and OEM alternatives for global maritime fleets.",
    url: `${siteUrl}/services`,
    images: [
      {
        url: `${siteUrl}/engine-maintenance-new.png`,
        width: 1200,
        height: 630,
        alt: "Marine Engine Spares Services – Spice Ship Supplier",
      },
    ],
  },
  alternates: { canonical: `${siteUrl}/services` },
};

export default function ServicesLayout({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
