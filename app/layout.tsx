import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/contexts/auth-context";
import { Header } from "@/components/boty/header";
import { Footer } from "@/components/boty/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AURAX Marine Solutions",
  description: "Global Ship Supplier & Marine Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
