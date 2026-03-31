'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const chartImages = [
  { src: '/images/Chart Themes/1/Synthwave.png', alt: 'FlowForge indicators — Synthwave theme' },
  { src: '/images/Chart Themes/1/Neon.png',      alt: 'FlowForge indicators — Neon theme' },
  { src: '/images/Chart Themes/1/Dusk.png',       alt: 'FlowForge indicators — Dusk theme' },
  { src: '/images/Chart Themes/1/Arctic.png',     alt: 'FlowForge indicators — Arctic theme' },
  { src: '/images/Chart Themes/1/Colorful.png',   alt: 'FlowForge indicators — Colorful theme' },
  { src: '/images/Chart Themes/1/Sunny.png',      alt: 'FlowForge indicators — Sunny theme' },
  { src: '/images/Chart Themes/1/Monochrome.png', alt: 'FlowForge indicators — Monochrome theme' },
  { src: '/images/Chart Themes/2/Synthwave.png',  alt: 'FlowForge indicators — Synthwave v2 theme' },
  { src: '/images/Chart Themes/2/Neon.png',       alt: 'FlowForge indicators — Neon v2 theme' },
  { src: '/images/Chart Themes/2/Dusk.png',       alt: 'FlowForge indicators — Dusk v2 theme' },
  { src: '/images/Chart Themes/2/Arctic.png',     alt: 'FlowForge indicators — Arctic v2 theme' },
  { src: '/images/Chart Themes/2/Colorful.png',   alt: 'FlowForge indicators — Colorful v2 theme' },
  { src: '/images/Chart Themes/2/Sunny.png',      alt: 'FlowForge indicators — Sunny v2 theme' },
  { src: '/images/Chart Themes/2/Monochrome.png', alt: 'FlowForge indicators — Monochrome v2 theme' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + chartImages.length) % chartImages.length);
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % chartImages.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-16 overflow-hidden"
      style={{ backgroundColor: '#0D0F0E' }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden="true" />

      {/* Left red glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 15% 45%, rgba(239,68,68,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Right green glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 75% 40%, rgba(74,222,128,0.07) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-6">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <span className="inline-flex items-center gap-2 bg-[#161918] border border-[#2A2F2D] text-[#4ADE80] text-xs font-medium px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" aria-hidden="true" />
            TradingView Pine Script Indicators — Futures Trading
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#F1F5F3] leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Know your breakout{' '}
          <span className="text-[#4ADE80]">before you trade it.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg sm:text-xl text-[#9CA3AF] max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Precision-built TradingView indicators for futures traders
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="https://tally.so/r/BzBvLN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#4ADE80] text-[#0D0F0E] font-bold px-7 py-3.5 rounded-lg hover:bg-[#22C55E] transition-colors duration-200 text-base"
          >
            Start Free Trial
          </a>
          <a
            href="https://flowforgetrading.gumroad.com/l/flowforge"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border border-[#2A2F2D] text-[#F1F5F3] font-semibold px-7 py-3.5 rounded-lg hover:border-[#4ADE80] hover:text-[#4ADE80] transition-colors duration-200 text-base"
          >
            Get Full Access
          </a>
        </motion.div>

        {/* Chart image carousel */}
        <motion.div
          className="relative w-full max-w-4xl mt-8 group"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="relative rounded-xl overflow-hidden border border-[#2A2F2D] shadow-2xl shadow-black/60"
            style={{ backgroundColor: '#161918' }}
          >
            {/* Aspect ratio container */}
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>

              <AnimatePresence mode="sync">
                <motion.div
                  key={current}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  <Image
                    src={chartImages[current].src}
                    alt={chartImages[current].alt}
                    fill
                    className="object-cover"
                    priority={current === 0}
                    sizes="(max-width: 768px) 100vw, 896px"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Bottom fade */}
              <div
                className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-10"
                style={{ background: 'linear-gradient(to top, #0D0F0E 0%, transparent 100%)' }}
                aria-hidden="true"
              />

              {/* Left arrow */}
              <button
                onClick={prev}
                aria-label="Previous chart theme"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20
                           flex items-center justify-center
                           w-9 h-9 rounded-full
                           bg-black/60 hover:bg-black/80
                           text-white/70 hover:text-[#4ADE80]
                           transition-all duration-200
                           opacity-100 md:opacity-0 md:group-hover:opacity-100
                           focus-visible:opacity-100"
              >
                <ChevronLeft size={18} strokeWidth={2.5} />
              </button>

              {/* Right arrow */}
              <button
                onClick={next}
                aria-label="Next chart theme"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20
                           flex items-center justify-center
                           w-9 h-9 rounded-full
                           bg-black/60 hover:bg-black/80
                           text-white/70 hover:text-[#4ADE80]
                           transition-all duration-200
                           opacity-100 md:opacity-0 md:group-hover:opacity-100
                           focus-visible:opacity-100"
              >
                <ChevronRight size={18} strokeWidth={2.5} />
              </button>
            </div>

            {/* Dot indicators */}
            <div
              className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-20"
              role="tablist"
              aria-label="Chart theme selector"
            >
              {chartImages.map((img, i) => (
                <button
                  key={img.src}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`View ${img.alt}`}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-5 h-1.5 bg-[#4ADE80]'
                      : 'w-1.5 h-1.5 bg-[#2A2F2D] hover:bg-[#9CA3AF]'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
