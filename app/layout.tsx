import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/contexts/auth-context";
import { Header } from "@/components/boty/header";
import { Footer } from "@/components/boty/footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const siteUrl = "https://spiceshipsupplier.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FF3B30",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Spice Ship Supplier | Marine Engine Spares & Ship Machinery Parts – Global Supplier",
    template: "%s | Spice Ship Supplier – Marine Engine Spares",
  },
  description:
    "Spice Ship Supplier is a leading global supplier of marine engine spares, ship machinery parts, MAN B&W components, Daihatsu DK20 spares, auxiliary engines, oil purifiers, and deck equipment. 30+ years serving the maritime industry from Bhavnagar, India.",
  keywords: [
    "marine engine spares",
    "ship spare parts",
    "marine machinery",
    "MAN B&W spares",
    "Daihatsu DK20 spares",
    "auxiliary engine parts",
    "oil purifier spares",
    "ship machinery supplier",
    "marine engine parts India",
    "Spice Ship Supplier",
    "AURAX Marine",
    "ship engine components",
    "cylinder liner marine",
    "piston crown marine engine",
    "marine pump spares",
    "heat exchanger marine",
    "fresh water generator spares",
    "deck equipment supplier",
    "marine spares Bhavnagar",
    "global ship supplier",
    "reconditioned marine parts",
    "OEM marine alternatives",
    "Sulzer engine spares",
    "S50MC engine parts",
    "marine compressor spares",
  ],
  authors: [{ name: "Spice Ship Supplier", url: siteUrl }],
  creator: "Spice Ship Supplier",
  publisher: "Spice Ship Supplier",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Spice Ship Supplier",
    title: "Spice Ship Supplier | Marine Engine Spares & Ship Machinery Parts",
    description:
      "Leading global supplier of marine engine spares, MAN B&W components, Daihatsu spares, and critical ship machinery. 30+ years of maritime excellence from India.",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Spice Ship Supplier – Marine Engine Spares & Ship Machinery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spice Ship Supplier | Marine Engine Spares & Ship Machinery Parts",
    description:
      "Global supplier of marine engine spares, MAN B&W, Daihatsu, auxiliary engines & ship machinery. 30+ years excellence.",
    images: [`${siteUrl}/logo.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Industrial Equipment",
  // Add your Google Search Console verification code here
  // verification: {
  //   google: "your-google-verification-code",
  // },
};

// JSON-LD Structured Data for Organization + LocalBusiness + WebSite
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Spice Ship Supplier",
      alternateName: "AURAX Marine Solutions",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
      description:
        "Global supplier of marine engine spares, ship machinery parts, MAN B&W components, Daihatsu DK20 spares, auxiliary engines, oil purifiers, and deck equipment.",
      foundingDate: "1990",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Hill Drive",
        addressLocality: "Bhavnagar",
        addressRegion: "Gujarat",
        postalCode: "364002",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-90239-68557",
          contactType: "sales",
          areaServed: "Worldwide",
          availableLanguage: ["English", "Hindi"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+91-90239-68557",
          contactType: "customer service",
          areaServed: "Worldwide",
          availableLanguage: ["English", "Hindi"],
        },
      ],
      email: "spiceshipsupplier@gmail.com",
      sameAs: [
        "https://wa.me/919023968557",
      ],
      taxID: "24AMBPK1542J1ZD",
      knowsAbout: [
        "Marine Engine Spares",
        "Ship Machinery",
        "MAN B&W Engines",
        "Daihatsu Engines",
        "Auxiliary Engines",
        "Oil Purifiers",
        "Marine Pumps",
        "Heat Exchangers",
        "Fresh Water Generators",
        "Deck Equipment",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: "Spice Ship Supplier",
      image: `${siteUrl}/logo.png`,
      url: siteUrl,
      telephone: "+91-90239-68557",
      email: "spiceshipsupplier@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Hill Drive",
        addressLocality: "Bhavnagar",
        addressRegion: "Gujarat",
        postalCode: "364002",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 21.7645,
        longitude: 72.1416,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "10:00",
          closes: "20:00",
        },
      ],
      priceRange: "$$",
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: { "@type": "GeoCoordinates", latitude: 0, longitude: 0 },
        geoRadius: "40075000",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Spice Ship Supplier",
      description:
        "Marine engine spares and ship machinery parts global supplier. Specializing in MAN B&W, Daihatsu, auxiliary engines, and critical marine equipment.",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/products?search={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Bhavnagar" />
        <meta name="geo.position" content="21.7645;72.1416" />
        <meta name="ICBM" content="21.7645, 72.1416" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        {/* Preconnect to external resources for faster loading (improves LCP) */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
