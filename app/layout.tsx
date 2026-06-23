import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zest Shop — Fresh Finds, Bold Prices",
  description:
    "Discover curated products across fashion, tech, home, and more. Shop the latest drops with fast shipping and easy returns.",
  keywords: ["shop", "e-commerce", "fashion", "tech", "home goods", "deals"],
  openGraph: {
    title: "Zest Shop — Fresh Finds, Bold Prices",
    description: "Discover curated products across fashion, tech, home, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-gray-900 antialiased font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}