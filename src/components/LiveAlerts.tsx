'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const signalImages = [
  { src: '/discord-sign2.png', alt: 'Live ORB breakout alert in the FlowForge Discord' },
  { src: '/discord-sign3.png', alt: 'FlowForge Discord signal — chart 2' },
];

const tickers = ['MES1!', 'MNQ1!', 'M2K1!', 'MYM1!', 'MGC1!', 'SIL1!', 'MHGK20', 'MCL1!', 'NG1!'];

const INTERVAL_MS = 4000;

export default function LiveAlerts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const advance = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % signalImages.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(advance, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [isPaused, advance]);

  return (
    <section
      className="py-24 px-4"
      style={{ backgroundColor: '#0D0F0E' }}
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
          <span className="inline-flex items-center gap-2 bg-[#161918] border border-[#2A2F2D] text-[#9CA3AF] text-sm px-4 py-2 rounded-full">
            <MessageCircle size={14} className="text-[#4ADE80]" aria-hidden="true" />
            Live on Discord
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F1F5F3]">
            Never Miss an ORB Breakout
          </h2>

          <p className="text-[#9CA3AF] text-lg max-w-2xl leading-relaxed">
            Real-time ORB breakout alerts delivered to Discord. Only OK-graded signals, only clean setups. Available exclusively for members.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="w-full max-w-2xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative rounded-2xl overflow-hidden border border-[#2A2F2D]">
            {/* Aspect ratio container */}
            <div className="aspect-video relative bg-[#0D0F0E]">
              <AnimatePresence mode="sync">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={signalImages[currentIndex].src}
                    alt={signalImages[currentIndex].alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 672px"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Members Only badge — overlaid top-left */}
              <div className="absolute top-3 left-3 z-20">
                <span className="bg-[#2A2F2D] text-[#F1F5F3] text-xs font-semibold px-3 py-1 rounded-full">
                  Members Only
                </span>
              </div>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-4" role="tablist" aria-label="Signal screenshot navigation">
            {signalImages.map((img, i) => (
              <button
                key={img.src}
                role="tab"
                aria-label={`View signal ${i + 1}`}
                aria-selected={currentIndex === i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === i ? 'w-5 bg-[#4ADE80]' : 'w-1.5 bg-[#2A2F2D]'
                }`}
              />
            ))}
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
              className="bg-[#161918] border border-[#2A2F2D] text-[#9CA3AF] text-xs font-mono font-semibold px-3 py-1.5 rounded-full tracking-wide"
            >
              {ticker}
            </span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="flex flex-col items-center gap-3"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <a
            href="https://flowforgetrading.gumroad.com/l/flowforge"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#4ADE80] hover:bg-[#22C55E] text-[#0D0F0E] font-bold text-base px-8 py-4 rounded-xl transition-colors duration-200"
            aria-label="Get full access to FlowForge Pro"
          >
            Get Full Access
          </a>
          <a
            href="https://discord.com/invite/tu7WTrur6z"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9CA3AF] text-sm hover:text-[#F1F5F3] transition-colors duration-200"
          >
            Or join the free community →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
