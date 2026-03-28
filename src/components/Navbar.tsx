'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Indicators', href: '#indicators' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Community', href: '#community' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-[#0D0F0E]/80'
          : 'bg-transparent'
      }`}
    >
      {/* Red-to-green gradient bottom border — visible when scrolled */}
      {scrolled && (
        <div
          className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: 'linear-gradient(to right, #EF4444, #4ADE80)' }}
          aria-hidden="true"
        />
      )}
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="https://www.tradingview.com/u/FlowForge/#published-scripts"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="FlowForge Trading — View all published scripts on TradingView"
        >
          <Image
            src="/images/_Logo/FlowForgeLogo.PNG"
            alt="FlowForge Trading"
            width={140}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[#9CA3AF] hover:text-[#F1F5F3] text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="https://tally.so/r/BzBvLN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#4ADE80] text-[#0D0F0E] font-semibold text-sm px-5 py-2 rounded-lg hover:bg-[#22C55E] transition-colors duration-200"
          >
            Start Free Trial
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#9CA3AF] hover:text-[#F1F5F3] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#161918] border-b border-[#2A2F2D] px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-[#9CA3AF] hover:text-[#F1F5F3] py-2 text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="https://tally.so/r/BzBvLN"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#4ADE80] text-[#0D0F0E] font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#22C55E] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Start Free Trial
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
