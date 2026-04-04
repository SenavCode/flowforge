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

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LiveAlerts />
      <IndicatorShowcase />
      <Features />
      <HowItWorks />
      <Pricing />
      <Community />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
