import type { Metadata } from "next";

const siteUrl = "https://spiceshipsupplier.com";

export const metadata: Metadata = {
  title: "Contact Spice Ship Supplier – Marine Engine Spares Inquiry & Emergency Support",
  description:
    "Contact Spice Ship Supplier for marine engine spares inquiries, urgent vessel support, and technical consultations. Phone: +91 90239 68557. Located in Bhavnagar, Gujarat, India. 24/7 emergency marine support available.",
  keywords: [
    "contact marine spare parts supplier",
    "marine engine inquiry",
    "ship spare parts quote",
    "emergency marine support India",
    "marine spares Bhavnagar contact",
    "ship engine parts inquiry",
    "24/7 marine support",
    "marine equipment quotation",
  ],
  openGraph: {
    title: "Contact Spice Ship Supplier – Marine Spares Inquiry",
    description:
      "Get in touch for marine engine spares, technical consultations, and emergency vessel support. +91 90239 68557 | 24/7 Emergency Line.",
    url: `${siteUrl}/contact`,
    images: [{ url: `${siteUrl}/contact-hero.png`, width: 1200, height: 630, alt: "Contact Spice Ship Supplier – Marine Engine Spares" }],
  },
  alternates: { canonical: `${siteUrl}/contact` },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
