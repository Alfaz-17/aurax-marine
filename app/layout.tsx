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
  title: 'Corona Marine — Marine Automation & Spare Parts',
  description: 'Your premier partner for marine automation, high-quality spare parts, and specialized engineering solutions from Alang.',
  generator: 'v0.app',
  keywords: ['marine automation', 'ship spare parts', 'alang shipyard', 'marine engineering', 'vessel automation'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A3D62',
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
