'use client';

import { motion } from 'framer-motion';
import { Clock, Layers, Palette, Filter, BarChart2, Target } from 'lucide-react';

const features = [
  {
    icon: Clock,
    iconColor: '#4ADE80',
    title: 'Session Intelligence',
    description:
      'Track ORB breakouts as they happen with confirmed-close detection across London, New York, and Asia sessions on TradingView.',
  },
  {
    icon: Layers,
    iconColor: '#4ADE80',
    title: 'Multi-Timeframe FVG Detection',
    description:
      'See higher-timeframe Fair Value Gaps on your working chart without switching timeframes.',
  },
  {
    icon: Palette,
    iconColor: '#4ADE80',
    title: '7 Built-In Themes',
    description:
      'Synthwave, Neon, Arctic, Dusk, Sunny, Monochrome, or Colorful. Each theme applies to ORB boxes, breakout labels, filter labels, dashboard, VWAP, and candles. Pick once, everything updates.',
  },
  {
    icon: Filter,
    iconColor: '#4ADE80',
    title: '9-Filter Quality Grading',
    description:
      'Every breakout runs through 9 independent quality filters covering candle structure, volume confirmation, trend alignment, momentum, overextension detection, and chase protection. Zero fails means OK.',
  },
  {
    icon: BarChart2,
    iconColor: '#4ADE80',
    title: 'Live Session Dashboard',
    description:
      'Session name, ORB range, breakout direction, and maximum R-factor extension per session, all updating in real time on your chart. Frozen at session cutoff so you can review.',
  },
  {
    icon: Target,
    iconColor: '#4ADE80',
    title: 'Micro Futures Native',
    description:
      'Pre-configured for MES, MNQ, MYM, M2K, and MCL. Session times, alert formatting, and tick data all calibrated for micro contract intraday structure.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section
      id="features"
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
            What&apos;s Actually Under the Hood
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            Session detection, signal filtering, multi-timeframe FVG mapping. Here&apos;s how the pieces connect.
          </p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {features.map(({ icon: Icon, iconColor, title, description }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className="group bg-[#161918] border border-[#2A2F2D] rounded-xl p-6 hover:border-[#4ADE80] transition-colors duration-300"
            >
              <div className="mb-4">
                <Icon
                  style={{ color: iconColor }}
                  size={30}
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-[#F1F5F3] font-semibold text-lg mb-2">
                {title}
              </h3>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="https://tally.so/r/BzBvLN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#4ADE80] text-[#0D0F0E] font-bold px-8 py-3.5 rounded-lg hover:bg-[#22C55E] transition-colors duration-200 text-base"
          >
            Start Free Trial
          </a>
          <a
            href="#indicators"
            className="text-[#9CA3AF] text-sm hover:text-[#4ADE80] transition-colors duration-200"
          >
            Or explore the indicators →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
