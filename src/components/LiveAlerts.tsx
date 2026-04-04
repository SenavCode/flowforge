'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const tickers = ['MES', 'MNQ', 'M2K', 'MYM', 'MGC', 'SIL', 'HG', 'CL', 'NG'];

export default function LiveAlerts() {
  return (
    <section
      className="py-24 px-4"
      style={{ backgroundColor: '#161918' }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-10">

        {/* Header */}
        <motion.div
          className="flex flex-col items-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 bg-[#0D0F0E] border border-[#2A2F2D] text-[#9CA3AF] text-sm px-4 py-2 rounded-full">
            <MessageCircle size={14} className="text-[#4ADE80]" aria-hidden="true" />
            Live on Discord
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F1F5F3]">
            Never Miss an ORB Breakout
          </h2>

          <p className="text-[#9CA3AF] text-lg max-w-2xl leading-relaxed">
            Get real-time ORB breakout alerts delivered straight to your Discord. Every signal graded, every session covered.
          </p>
        </motion.div>

        {/* Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="w-full max-w-2xl"
        >
          <div
            className="rounded-2xl overflow-hidden border border-[#2A2F2D]"
            style={{ boxShadow: '0 0 48px rgba(74, 222, 128, 0.12), 0 8px 32px rgba(0,0,0,0.4)' }}
          >
            <Image
              src="/discord-signals.png"
              alt="Live ORB breakout alerts in the FlowForge Discord"
              width={900}
              height={560}
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
        </motion.div>

        {/* Ticker badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          aria-label="Covered futures contracts"
        >
          {tickers.map((ticker) => (
            <span
              key={ticker}
              className="bg-[#0D0F0E] border border-[#2A2F2D] text-[#9CA3AF] text-xs font-mono font-semibold px-3 py-1.5 rounded-full tracking-wide"
            >
              {ticker}
            </span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.a
          href="https://discord.com/invite/tu7WTrur6z"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold text-base px-8 py-4 rounded-xl transition-colors duration-200"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          aria-label="Join the FlowForge Discord for live alerts"
        >
          <MessageCircle size={20} aria-hidden="true" />
          Join Discord
        </motion.a>

      </div>
    </section>
  );
}
