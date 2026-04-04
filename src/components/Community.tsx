'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const pills = ['📊 Chart setups', '🔔 New indicator alerts', '🎯 Trade ideas'];

export default function Community() {
  return (
    <section
      id="community"
      className="py-24 px-4"
      style={{ backgroundColor: '#0D0F0E' }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Social proof badge */}
          <span className="inline-flex items-center gap-2 bg-[#161918] border border-[#2A2F2D] text-[#9CA3AF] text-sm px-4 py-2 rounded-full">
            <MessageCircle size={14} className="text-[#4ADE80]" aria-hidden="true" />
            Growing community of futures traders
          </span>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F1F5F3]">
            Join the FlowForge Community
          </h2>

          {/* Description */}
          <p className="text-[#9CA3AF] text-lg max-w-xl leading-relaxed">
            Live breakout alerts, members-only playbook, shared setups, and direct support. The FlowForge Discord is where the trading happens.
          </p>

          {/* Discord CTA */}
          <a
            href="https://discord.com/invite/tu7WTrur6z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors duration-200"
            aria-label="Join FlowForge Trading on Discord"
          >
            <MessageCircle size={22} aria-hidden="true" />
            Join Discord
          </a>

          <p className="text-[#9CA3AF] text-sm">
            Free to join. No commitment required.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-2" role="list" aria-label="Community topics">
            {pills.map((pill) => (
              <span
                key={pill}
                role="listitem"
                className="bg-[#161918] border border-[#2A2F2D] text-[#9CA3AF] text-sm px-4 py-2 rounded-full"
              >
                {pill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
