'use client';

import { motion } from 'framer-motion';
import { Clock, Layers, Palette, Filter, BarChart2, Target } from 'lucide-react';

const features = [
  {
    icon: Clock,
    iconColor: '#4ADE80',
    title: 'Session Intelligence',
    description:
      'Know exactly when London, New York, and Asia open. Track breakouts as they happen with confirmed-close detection.',
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
    title: 'One-Click Theming',
    description:
      'All FlowForge indicators share a unified theme system. Change once, update everywhere.',
  },
  {
    icon: Filter,
    iconColor: '#4ADE80',
    title: 'Built-In Signal Grading',
    description:
      "Not all breakouts are equal. The ORB filter system grades each signal so you can focus on high-quality setups.",
  },
  {
    icon: BarChart2,
    iconColor: '#4ADE80',
    title: 'Live Session Dashboard',
    description:
      'Real-time session statistics at a glance, right on your chart.',
  },
  {
    icon: Target,
    iconColor: '#4ADE80',
    title: 'Designed for Futures',
    description:
      'Purpose-built for intraday futures traders. No bloat, no unnecessary features.',
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
            Built for Futures Traders
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            Every feature purpose-built for intraday futures trading.
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
      </div>
    </section>
  );
}
