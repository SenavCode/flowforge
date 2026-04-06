'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What markets does this work on?',
    answer:
      'Any market available on TradingView. We run alerts on 9 futures contracts (MES1!, MNQ1!, M2K1!, MYM1!, MGC1!, SIL1!, MHGK20, MCL1!, NG1!) but the indicator works on stocks, forex, crypto, and commodities too.',
  },
  {
    question: 'Do I need a paid TradingView plan?',
    answer:
      'The indicators work on any TradingView plan including the free one. For real-time futures data you may need a data subscription depending on your exchange.',
  },
  {
    question: 'Can I use these alongside my existing TradingView indicators?',
    answer:
      'Yes. FlowForge indicators are standard Pine Script overlays. They add visual layers to your chart without modifying your other indicators or settings. You can add them to any chart you already use.',
  },
  {
    question: 'How do the Discord alerts work?',
    answer:
      'When the ORB indicator detects a confirmed opening range breakout (ORB) with all quality filters passing, an alert fires automatically to the members-only signals channel on Discord. You get the instrument, session, direction, and signal grade in real time.',
  },
  {
    question: 'Can I try before I subscribe?',
    answer:
      'Yes. We offer a free trial so you can test ORB Sessions on your charts before committing. Two of our indicators (FVG Imbalance Map and Volume Map) are completely free forever.',
  },
  {
    question: 'How long is the free trial?',
    answer:
      'The trial gives you full access to ORB Sessions so you can test it on your charts. When it ends, your free indicators (FVG Imbalance Map and Volume Map) and Discord access stay active.',
  },
  {
    question: 'How does the indicator decide which breakouts to alert on?',
    answer:
      'The indicator runs every breakout through 7 independent quality filters. They check candle structure, volume confirmation, trend alignment, and whether price is overextended. Zero fails means OK, that\'s a clean signal. You control how many fails you\'ll tolerate through Smart Alert thresholds.',
  },
  {
    question: 'How do I cancel?',
    answer:
      'Log into your Gumroad account, find your FlowForge subscription, and cancel directly. No email required, no questions asked. Your access continues until the end of the billing period.',
  },
  {
    question: 'Are these indicators built in Pine Script?',
    answer:
      'Yes. All FlowForge indicators are built in TradingView Pine Script and work natively on any TradingView chart.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="py-24 px-4"
      style={{ backgroundColor: '#161918' }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F1F5F3] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#9CA3AF] text-lg">
            Everything you need to know before getting started.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className={`rounded-xl border transition-colors duration-200 ${
                  isOpen
                    ? 'border-[#4ADE80]/40 bg-[#0D0F0E]'
                    : 'border-[#2A2F2D] bg-[#0D0F0E] hover:border-[#4ADE80]/30'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="text-[#F1F5F3] font-semibold text-base leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-[#9CA3AF] transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p className="px-6 pb-5 text-[#9CA3AF] text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="flex flex-col items-center gap-4 mt-16"
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
            href="https://discord.com/invite/tu7WTrur6z"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9CA3AF] text-sm hover:text-[#4ADE80] transition-colors duration-200"
          >
            Still have questions? Join the Discord →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
