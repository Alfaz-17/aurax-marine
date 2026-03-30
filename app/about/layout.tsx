import type { Metadata } from "next";

const siteUrl = "https://spiceshipsupplier.com";

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
    images: [{ url: `${siteUrl}/spare-parts-new.png`, width: 1200, height: 630, alt: "Spice Ship Supplier – Marine Engine Spares Facility" }],
  },
  alternates: { canonical: `${siteUrl}/about` },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
