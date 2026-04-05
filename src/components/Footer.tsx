import Image from 'next/image';
import Link from 'next/link';

const footerLinks = [
  { label: 'Indicators', href: '#indicators' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  {
    label: 'Discord',
    href: 'https://discord.com/invite/tu7WTrur6z',
    external: true,
  },
  {
    label: 'Gumroad',
    href: 'https://flowforgetrading.gumroad.com/l/flowforge',
    external: true,
  },
  {
    label: 'TradingView',
    href: 'https://www.tradingview.com/u/FlowForge/#published-scripts',
    external: true,
  },
];

export default function Footer() {
  return (
    <footer
      className="border-t border-[#2A2F2D] py-12 px-4"
      style={{ backgroundColor: '#0D0F0E' }}
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 text-center">
        {/* Logo */}
        <Link href="#home" aria-label="FlowForge Trading, back to top">
          <Image
            src="/images/_Logo/FlowForgeLogo.PNG"
            alt="FlowForge Trading TradingView Indicators"
            width={220}
            height={64}
            className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
        </Link>

        {/* Links */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-6" role="list">
            {footerLinks.map((link) =>
              link.external ? (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9CA3AF] hover:text-[#4ADE80] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#9CA3AF] hover:text-[#4ADE80] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Tagline */}
        <p className="text-sm italic text-[#9CA3AF]">
          Built by traders, for traders.
        </p>

        {/* Copyright */}
        <p className="text-[#9CA3AF] text-xs">
          © 2026 FlowForge Trading. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
