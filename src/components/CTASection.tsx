'use client';

import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section
      id="trial"
      className="py-24 px-4 relative overflow-hidden"
      style={{ backgroundColor: '#161918' }}
    >
      {/* Glow bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(74,222,128,0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center gap-6">

        {/* Headline */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F1F5F3] leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0 }}
        >
          Your ORB setups are already forming.{' '}
          <span className="text-[#4ADE80]">See them clearly.</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-[#9CA3AF] text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Add the indicators to your chart. Free trial available. Cancel anytime on Gumroad.
        </motion.p>

        {/* CTA button */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="https://tally.so/r/BzBvLN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#4ADE80] text-[#0D0F0E] font-bold text-lg px-8 py-4 rounded-lg hover:bg-[#22C55E] transition-colors duration-200"
          >
            Start Free Trial →
          </a>
        </motion.div>

        <motion.a
          href="https://flowforgetrading.gumroad.com/l/flowforge"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#9CA3AF] text-sm hover:text-[#4ADE80] underline transition-colors"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Or purchase directly on Gumroad →
        </motion.a>
      </div>
    </section>
  );
}
