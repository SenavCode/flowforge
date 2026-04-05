import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LiveAlerts from '@/components/LiveAlerts';
import IndicatorShowcase from '@/components/IndicatorShowcase';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import Community from '@/components/Community';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What markets does this work on?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Any market available on TradingView. We run alerts on 9 futures contracts (MES1!, MNQ1!, M2K1!, MYM1!, MGC1!, SIL1!, MHGK20, MCL1!, NG1!) but the indicator works on stocks, forex, crypto, and commodities too.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a paid TradingView plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The indicators work on any TradingView plan including the free one. For real-time futures data you may need a data subscription depending on your exchange.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do the Discord alerts work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When the ORB indicator detects a confirmed opening range breakout (ORB) with all quality filters passing, an alert fires automatically to the members-only signals channel on Discord.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I try before I subscribe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We offer a free trial so you can test ORB Sessions on your charts before committing. Two of our indicators (FVG Imbalance Map and Volume Map) are completely free forever.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I cancel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can cancel anytime through Gumroad. No lock-in, no questions asked.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are these indicators built in Pine Script?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All FlowForge indicators are built in TradingView Pine Script and work natively on any TradingView chart.',
      },
    },
  ],
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'FlowForge Trading',
  url: 'https://flowforge-trading.com',
  logo: 'https://flowforge-trading.com/images/_Logo/FlowForgeLogo.PNG',
  sameAs: [
    'https://discord.com/invite/tu7WTrur6z',
    'https://flowforgetrading.gumroad.com/l/flowforge',
    'https://www.tradingview.com/u/FlowForge/#published-scripts',
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <main>
        <Navbar />
        <Hero />
        <LiveAlerts />
        <IndicatorShowcase />
        <HowItWorks />
        <Features />
        <Community />
        <Pricing />
        <FAQ />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
