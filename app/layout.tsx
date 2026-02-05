import React from "react"
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from "@/components/boty/header"
import { Footer } from "@/components/boty/footer"
import { FloatingWhatsappButton } from "@/components/common/floating-whatsapp-button"
import { AuthProvider } from "@/components/contexts/auth-context"

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600']
});

const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'AURAX Marine Solutions | Marine Engines & Machinery Spares Global Supplier',
  description: 'AURAX Marine Solutions is a specialized supplier of MAN B&W S50MC engine spares, auxiliary engines, and marine machinery components worldwide.',
  keywords: ['AURAX Marine', 'MAN B&W S50MC spares', 'ship machinery supplier', 'marine engine parts', 'vessel spares', 'Daihatsu generator spares'],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0B1320',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${playfairDisplay.variable} font-sans antialiased bg-background text-foreground`}>
          <AuthProvider>
            <Header />
            <div className="flex flex-col min-h-screen">
              {children}
            </div>
            <Footer />
            <FloatingWhatsappButton />
          </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
