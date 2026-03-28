import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FlowForge Trading — TradingView Indicators for Futures Traders",
  description:
    "Precision-built TradingView Pine Script indicators for futures traders. Session tracking, FVG detection, and volume analysis — all on one chart.",
  keywords: [
    "TradingView indicators",
    "futures trading",
    "futures indicators",
    "Pine Script",
    "day trading",
    "opening range breakout",
    "fair value gap",
    "trading tools",
  ],
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: "FlowForge Trading — Know Your Breakout Before You Trade It",
    description:
      "Precision-built TradingView indicators for futures traders.",
    url: "https://flowforge-trading.com",
    siteName: "FlowForge Trading",
    type: "website",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
