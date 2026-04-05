'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const freeFeatures = [
  'FVG Imbalance Map',
  'Volume Map',
  'Community Discord access',
];

const proFeatures = [
  'Everything in Free',
  'ORB Sessions London, New York & Asia opening ranges',
  'Live ORB breakout alerts on Discord',
  'Members-only Playbook',
  'Priority support',
  'Early access to new indicators',
];

export default function Pricing() {
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
            $15/Month for the Indicators and the Alerts
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-xl mx-auto">
            FVG Imbalance Map and Volume Map are free forever. Pro adds ORB Sessions and live Discord breakout alerts across 9 futures contracts.
          </p>
        </motion.div>

        {/* Cards — stacked on mobile (Pro first), side-by-side on desktop */}
        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-8">

          {/* Pro — first in DOM = top on mobile */}
          <motion.div
            className="flex flex-col relative bg-[#0D0F0E] border-[3px] border-[#4ADE80] rounded-xl p-8 md:order-2"
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

          {/* Free — second in DOM = bottom on mobile */}
          <motion.div
            className="flex flex-col bg-[#0D0F0E] border border-[#4ADE80]/30 rounded-xl p-8 md:order-1"
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
              href="https://discord.com/invite/tu7WTrur6z"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center border border-[#2A2F2D] text-[#F1F5F3] font-semibold px-5 py-3 rounded-lg hover:border-[#4ADE80] hover:text-[#4ADE80] transition-colors duration-200"
            >
              Join Free on Discord
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
