import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FlowForge Trading | TradingView Indicators for Futures Traders",
  description:
    "Precision-built TradingView Pine Script indicators for futures traders. ORB breakout alerts, FVG detection, and session tracking, all on one chart.",
  keywords: [
    "TradingView indicators",
    "futures trading",
    "futures indicators",
    "Pine Script",
    "TradingView Pine Script",
    "day trading",
    "intraday trading",
    "opening range breakout",
    "ORB indicator",
    "fair value gap",
    "FVG indicator",
    "trading tools",
    "MES futures",
    "MNQ futures",
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/icon.png',
  },
  alternates: {
    canonical: "https://flowforge-trading.com",
  },
  openGraph: {
    title: "FlowForge Trading | TradingView Indicators for Futures Traders",
    description:
      "Precision-built TradingView Pine Script indicators for futures traders. ORB breakout alerts, FVG detection, and session tracking, all on one chart.",
    url: "https://flowforge-trading.com",
    siteName: "FlowForge Trading",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://flowforge-trading.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "FlowForge Trading | TradingView Indicators for Futures Traders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowForge Trading | TradingView Indicators for Futures Traders",
    description:
      "Precision-built TradingView Pine Script indicators for futures traders. ORB breakout alerts, FVG detection, and session tracking, all on one chart.",
    images: ["https://flowforge-trading.com/og-image.png"],
  },
  metadataBase: new URL("https://flowforge-trading.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}<Analytics /></body>
    </html>
  );
}
