'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const TV_FVG = 'https://www.tradingview.com/script/kohwxwA6-FVG-Imbalance-Map-FlowForge/';
const TV_VOLUME = 'https://www.tradingview.com/script/qurqZonJ-Volume-Map-FlowForge/';
const TV_ORB = 'https://www.tradingview.com/script/fcmuXi8U-ORB-Sessions-15m-LO-NY-AS-FlowForge/';

interface IndicatorCard {
  badge: string;
  badgeColor: 'green' | 'gray';
  flagship?: boolean;
  title: string;
  description: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
  tvHref?: string;
  imageSrc: string;
  imageAlt: string;
}

const indicators: IndicatorCard[] = [
  {
    badge: 'PRO',
    badgeColor: 'green',
    flagship: true,
    title: 'ORB Sessions 15m (LO/NY/AS)',
    description:
      'The flagship FlowForge indicator. Track London, New York, and Asia Opening Ranges on your chart with confirmed-close breakout detection and a built-in signal quality filter. Available as 15m ORB and 5m ORB for tighter ranges.',
    bullets: [
      '8-filter quality grading system',
      'Confirmed close breakout detection',
      'Live session dashboard with R-factor tracking',
      'Smart Alerts with adjustable conviction thresholds',
      'Built-in VWAP with statistical bands',
      '7 built-in chart themes',
      'Available in 15m and 5m ORB versions',
    ],
    ctaLabel: 'Start Free Trial',
    ctaHref: 'https://tally.so/r/BzBvLN',
    tvHref: TV_ORB,
    imageSrc: '/images/Chart Themes/1/Neon.png',
    imageAlt: 'ORB Sessions indicator on TradingView, Neon theme',
  },
  {
    badge: 'FREE',
    badgeColor: 'gray',
    title: 'FVG Imbalance Map',
    description:
      'Automatically detect and visualize Fair Value Gaps from higher timeframes directly on your current chart.',
    bullets: [
      'Multi-timeframe FVG detection, no switching needed',
      'Each gap labeled, color-coded, and real-time',
      'Extends until invalidated or expired',
      'Works across all timeframes',
    ],
    ctaLabel: 'Get on TradingView',
    ctaHref: TV_FVG,
    imageSrc: '/images/Chart Themes/2/Synthwave.png',
    imageAlt: 'FVG Imbalance Map indicator on TradingView',
  },
  {
    badge: 'FREE',
    badgeColor: 'gray',
    title: 'Volume Map',
    description:
      'A theme-aware volume indicator built to complement the FlowForge suite. One theme change updates your entire chart.',
    bullets: [
      'Theme-aware, updates with your FlowForge theme',
      'Select a shared theme once, chart updates everywhere',
      'No manual color matching required',
      'Seamlessly integrates with other FlowForge tools',
    ],
    ctaLabel: 'Get on TradingView',
    ctaHref: TV_VOLUME,
    imageSrc: '/images/Chart Themes/1/Colorful.png',
    imageAlt: 'Volume Map indicator on TradingView, Colorful theme',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function IndicatorShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const perCard = el.scrollWidth / indicators.length;
    const idx = Math.round(el.scrollLeft / perCard);
    setActiveIndex(Math.max(0, Math.min(idx, indicators.length - 1)));
  }, []);

  const scrollToCard = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const perCard = el.scrollWidth / indicators.length;
    el.scrollTo({ left: perCard * index, behavior: 'smooth' });
  }, []);

  return (
    <section
      id="indicators"
      className="py-24 px-4"
      style={{ backgroundColor: '#0D0F0E' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F1F5F3] mb-4">
            Three Indicators. One Setup.
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            ORB Sessions tracks the range and confirms the break. FVG Imbalance Map shows where price is likely to react. Volume Map keeps the chart clean. Everything you need for the ORB, and FVG Imbalance Map and Volume Map are free.
          </p>
        </motion.div>

        {/* Cards — horizontal swipe on mobile, 3-col grid on desktop */}
        <motion.div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2 -mx-4 pl-6 pr-4
                     md:grid md:grid-cols-3 md:overflow-x-visible md:snap-none md:gap-6 md:mx-0 md:px-0 md:pb-0"
          style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' } as React.CSSProperties}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {indicators.map((card) => (
            <motion.article
              key={card.title}
              variants={cardVariants}
              className={`snap-start shrink-0 w-[82vw] md:w-auto flex flex-col rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                card.flagship
                  ? 'border-2 border-[#4ADE80] bg-[#161918] hover:shadow-[0_0_28px_rgba(74,222,128,0.2)]'
                  : 'border border-[#2A2F2D] bg-[#161918] hover:border-[#4ADE80]/40 hover:shadow-[0_0_16px_rgba(0,0,0,0.3)]'
              }`}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 82vw, 33vw"
                />
                {/* Badge overlay */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      card.badgeColor === 'green'
                        ? 'bg-[#4ADE80] text-[#0D0F0E]'
                        : 'bg-[#2A2F2D] text-[#9CA3AF]'
                    }`}
                  >
                    {card.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 gap-4">
                <h3 className="text-[#F1F5F3] font-bold text-lg leading-snug">
                  {card.title}{' '}
                  <span className="text-[#9CA3AF] font-normal text-sm">[FlowForge]</span>
                </h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">
                  {card.description}
                </p>

                <ul className="flex flex-col gap-2 mt-1 flex-1">
                  {card.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-[#9CA3AF] text-sm"
                    >
                      <span className="text-[#F1F5F3] mt-0.5 shrink-0">—</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4 flex flex-col gap-2">
                  {card.flagship ? (
                    <a
                      href={card.ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 w-full justify-center bg-[#4ADE80] text-[#0D0F0E] font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#22C55E] transition-colors duration-200"
                    >
                      {card.ctaLabel}
                      <ArrowRight size={14} />
                    </a>
                  ) : (
                    <a
                      href={card.ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 w-full justify-center border border-[#2A2F2D] text-[#F1F5F3] font-semibold text-sm px-5 py-2.5 rounded-lg hover:border-[#4ADE80] hover:text-[#4ADE80] transition-colors duration-200"
                    >
                      {card.ctaLabel}
                      <ArrowRight size={14} />
                    </a>
                  )}

                  {/* Secondary TradingView link — ORB card only */}
                  {card.tvHref && (
                    <a
                      href={card.tvHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1 text-[#9CA3AF] text-xs hover:text-[#F1F5F3] transition-colors duration-200"
                    >
                      View on TradingView →
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Mobile dot indicators */}
        <div className="flex md:hidden justify-center gap-2 mt-5" role="tablist" aria-label="Indicator card navigation">
          {indicators.map((card, i) => (
            <button
              key={card.title}
              role="tab"
              aria-label={`View ${card.title}`}
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
