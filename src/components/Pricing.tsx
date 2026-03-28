'use client';

import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const freeFeatures = [
  'FVG Imbalance Map',
  'Volume Map',
  'Community Discord access',
];

const proFeatures = [
  'Everything in Free',
  'ORB Sessions 15m (LO/NY/AS)',
  'Priority support',
  'Early access to new indicators',
];

export default function Pricing() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / (el.scrollWidth / 2));
    setActiveIndex(Math.max(0, Math.min(idx, 1)));
  }, []);

  const scrollToCard = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: (el.scrollWidth / 2) * index, behavior: 'smooth' });
  }, []);

  return (
    <section
      id="pricing"
      className="py-24 px-4"
      style={{ backgroundColor: '#161918' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F1F5F3] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-xl mx-auto">
            Start free. Upgrade when you&apos;re ready.
          </p>
        </motion.div>

        {/* Cards — horizontal swipe on mobile, 2-col grid on desktop */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2 -mx-4 px-4
                     md:grid md:grid-cols-2 md:overflow-x-visible md:snap-none md:gap-8 md:mx-0 md:px-0 md:pb-0"
          style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' } as React.CSSProperties}
        >
          {/* Free */}
          <motion.div
            className="snap-start shrink-0 w-[88vw] md:w-auto flex flex-col bg-[#0D0F0E] border border-[#4ADE80]/30 rounded-2xl p-8"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <p className="text-[#9CA3AF] text-sm font-medium uppercase tracking-widest mb-2">
                Free
              </p>
              <div className="flex items-end gap-1">
                <span className="text-5xl font-extrabold text-[#F1F5F3]">$0</span>
              </div>
              <p className="text-[#9CA3AF] text-sm mt-1">Forever free</p>
            </div>

            <ul className="flex flex-col gap-3 mb-8 flex-1" role="list">
              {freeFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-[#9CA3AF] text-sm">
                  <CheckCircle size={16} className="text-[#4ADE80] shrink-0" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="#indicators"
              className="block w-full text-center border border-[#2A2F2D] text-[#F1F5F3] font-semibold px-5 py-3 rounded-lg hover:border-[#4ADE80] hover:text-[#4ADE80] transition-colors duration-200"
            >
              Get Free Indicators
            </a>
          </motion.div>

          {/* Pro */}
          <motion.div
            className="snap-start shrink-0 w-[88vw] md:w-auto flex flex-col relative bg-[#0D0F0E] border-[3px] border-[#4ADE80] rounded-2xl p-8"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Most Popular badge */}
            <div className="flex justify-center mb-4">
              <span className="bg-[#4ADE80] text-[#0D0F0E] text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                Most Popular
              </span>
            </div>

            <div className="mb-6">
              <p className="text-[#4ADE80] text-sm font-medium uppercase tracking-widest mb-2">
                Pro
              </p>
              <div className="flex items-end gap-1">
                <span className="text-5xl font-extrabold text-[#F1F5F3]">$15</span>
                <span className="text-[#9CA3AF] text-lg mb-1">/month</span>
              </div>
              <p className="text-[#9CA3AF] text-xs mt-1">excl. VAT</p>
              <p className="text-[#9CA3AF] text-sm mt-2 flex items-center gap-2 flex-wrap">
                Or{' '}
                <span className="line-through text-[#9CA3AF] font-medium">$180</span>
                <span className="text-[#4ADE80] font-medium">$120/year</span>
                <span className="bg-[#4ADE80]/10 text-[#4ADE80] text-xs font-semibold px-1.5 py-0.5 rounded">
                  save 33%
                </span>
                <span className="text-[#9CA3AF] text-xs">excl. VAT</span>
              </p>
            </div>

            <ul className="flex flex-col gap-3 mb-8 flex-1" role="list">
              {proFeatures.map((text) => (
                <li key={text} className="flex items-center gap-3 text-sm">
                  <CheckCircle size={16} className="text-[#4ADE80] shrink-0" aria-hidden="true" />
                  <span className="text-[#9CA3AF]">{text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3">
              <a
                href="https://tally.so/r/BzBvLN"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#4ADE80] text-[#0D0F0E] font-bold px-5 py-3 rounded-lg hover:bg-[#22C55E] transition-colors duration-200"
              >
                Start Free Trial
              </a>
              <a
                href="https://flowforgetrading.gumroad.com/l/flowforge"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center text-[#9CA3AF] text-sm hover:text-[#4ADE80] underline transition-colors"
              >
                Or purchase directly on Gumroad →
              </a>
            </div>
          </motion.div>
        </div>

        {/* Mobile dot indicators */}
        <div className="flex md:hidden justify-center gap-2 mt-5" role="tablist" aria-label="Pricing card navigation">
          {['Free', 'Pro'].map((label, i) => (
            <button
              key={label}
              role="tab"
              aria-label={`View ${label} plan`}
              aria-selected={activeIndex === i}
              onClick={() => scrollToCard(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === i ? 'w-5 bg-[#4ADE80]' : 'w-1.5 bg-[#2A2F2D]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
