import type { Metadata } from "next";

const siteUrl = "https://spiceshipsupplier.com";

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
    images: [{ url: `${siteUrl}/engine-maintenance-new.png`, width: 1200, height: 630, alt: "Marine Engine Spares Services – Spice Ship Supplier" }],
  },
  alternates: { canonical: `${siteUrl}/services` },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
