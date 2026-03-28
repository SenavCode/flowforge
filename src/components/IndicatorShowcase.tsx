'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface IndicatorCard {
  badge: string;
  badgeColor: 'green' | 'gray';
  flagship?: boolean;
  title: string;
  description: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
  ctaExternal: boolean;
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
      'The flagship FlowForge indicator. Track London, New York, and Asia Opening Ranges directly on your chart with institutional-grade precision.',
    bullets: [
      'Tracks London, New York & Asia session opening ranges',
      'Detects breakouts on confirmed 5m closes',
      'Built-in signal quality filter system',
      'Live session statistics dashboard on-chart',
    ],
    ctaLabel: 'Start Free Trial',
    ctaHref: 'https://tally.so/r/BzBvLN',
    ctaExternal: true,
    imageSrc: '/images/Chart Themes/1/Neon.png',
    imageAlt: 'ORB Sessions indicator on TradingView — Neon theme',
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
    ctaHref: '#tradingview-fvg',
    ctaExternal: false,
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
    ctaHref: '#tradingview-volume',
    ctaExternal: false,
    imageSrc: '/images/Chart Themes/1/Colorful.png',
    imageAlt: 'Volume Map indicator on TradingView — Colorful theme',
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
            The FlowForge Suite
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            Three precision-built indicators designed to work together. Free to start, Pro to unlock the flagship.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {indicators.map((card) => (
            <motion.article
              key={card.title}
              variants={cardVariants}
              className={`flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                card.flagship
                  ? 'border-2 border-[#4ADE80] bg-[#161918] hover:shadow-[0_0_28px_rgba(74,222,128,0.2)]'
                  : 'border border-[#2A2F2D] bg-[#161918] hover:border-[#3D4440] hover:shadow-[0_0_16px_rgba(0,0,0,0.3)]'
              }`}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
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

                <ul className="flex flex-col gap-2 mt-1">
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

                <div className="mt-auto pt-4">
                  {card.ctaExternal ? (
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
                      className="inline-flex items-center gap-2 w-full justify-center border border-[#2A2F2D] text-[#9CA3AF] font-semibold text-sm px-5 py-2.5 rounded-lg hover:border-[#3D4440] hover:text-[#F1F5F3] transition-colors duration-200"
                    >
                      {card.ctaLabel}
                      <ArrowRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
