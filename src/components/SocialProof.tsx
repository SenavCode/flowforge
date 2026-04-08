'use client';

import { motion } from 'framer-motion';

const stats = [
  { number: '400+', label: 'Traders with access' },
  { number: '45',   label: 'OK signals this week' },
];

export default function SocialProof() {
  return (
    <section
      aria-label="Social proof statistics"
      className="py-12 px-4"
      style={{ backgroundColor: '#0D0F0E' }}
    >
      <motion.div
        className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-[#2A2F2D]"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="flex flex-col items-center gap-1 px-10 py-6 sm:py-2 w-full sm:w-auto"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <span
              className="text-5xl font-extrabold text-[#F1F5F3] tabular-nums"
              style={{ textShadow: '0 0 24px rgba(74,222,128,0.35)' }}
            >
              {stat.number}
            </span>
            <span className="text-sm text-[#9CA3AF] text-center leading-snug">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
