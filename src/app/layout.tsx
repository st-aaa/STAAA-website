import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Header from "@/components/Landingpage/Header";
import Footer from "@/components/Landingpage/Footer";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata including Google site verification
export const metadata: Metadata = {
  title: "ST-AAA LLC | Business & Financial Services in Garland, TX",
  description:
    "Comprehensive business solutions in Garland, TX. ST-AAA LLC offers business formation, compliance, and financial services for entrepreneurs and businesses.",
  keywords: [
    "ST-AAA LLC",
    "Business Services Garland TX",
    "Financial Services Garland TX",
    "Business Formation",
    "Compliance Services",
    "Entrepreneur Support",
  ],
    icons: {
    icon: "/favicon.ico", // Browser tab
    shortcut: "/favicon.ico",
    apple: "/slogo.png", // for iOS Safari
  },

  authors: [{ name: "ST-AAA LLC" }],
  publisher: "ST-AAA LLC",
  creator: "ST-AAA LLC",
  openGraph: {
    title: "ST-AAA LLC | Business & Financial Services",
    description:
      "Your one-stop partner for business formation, compliance, and financial services. Serving entrepreneurs and businesses with expertise and dedication.",
    url: "https://www.st-aaa.com",
    siteName: "ST-AAA LLC",
    type: "website",
     images: [
      {
        url: "https://www.st-aaa.com/slogo.png", // Must be full URL
        width: 200,
        height: 200,
        alt: "ST-AAA LLC Logo",
      },]
  },
  twitter: {
    card: "summary_large_image",
    title: "ST-AAA LLC | Business & Financial Services",
    description:
      "Comprehensive business solutions for entrepreneurs and businesses in Garland, TX.",
    creator: "@STAAALLC", // replace if you get a real handle
  },
  other: {
    "google-site-verification": "mIx2xiS36fYxumTQ4ZoLsYgwgaSMYTBY0eWiGMsW_tg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <Toaster position="top-center" richColors />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
