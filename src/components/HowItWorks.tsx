'use client';

import { motion } from 'framer-motion';

interface Step {
  title: string;
  description: string;
  links?: { label: string; href: string }[];
}

const steps: Step[] = [
  {
    title: 'Get Access',
    description:
      'Start a free trial or get full membership. Both options available on our Discord.',
    links: [
      { label: 'Free Trial →', href: 'https://tally.so/r/BzBvLN' },
      { label: 'Full Access →', href: 'https://flowforgetrading.gumroad.com/l/flowforge' },
    ],
  },
  {
    title: 'Add to Your Chart',
    description:
      'Open the indicator link, click Add to chart and it loads automatically. All scripts are linked in the Discord.',
  },
  {
    title: 'Pick a Theme and Set Up Alerts',
    description:
      'Choose a theme that fits your chart. Set up ORB breakout alerts and VWAP Band touch alerts. Full guides available in the Discord.',
  },
  {
    title: "You're Ready",
    description:
      'ORB boxes for London, New York and Asia. VWAP with Band 2 and Band 3. Breakout labels on breakout candles. Live session dashboard. All on your chart.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HowItWorks() {
  return (
    <section
      className="py-24 px-4"
      style={{ backgroundColor: '#0D0F0E' }}
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
            How It Works
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-xl mx-auto">
            Up and running in minutes, not hours.
          </p>
        </motion.div>

        {/* Desktop: circles + connecting line */}
        <div className="hidden md:block relative mb-6">
          {/* Connecting line behind circles */}
          <div
            className="absolute top-5 h-px bg-[#2A2F2D]"
            style={{ left: '12.5%', right: '12.5%' }}
            aria-hidden="true"
          />
          {/* Numbered circles */}
          <div className="grid grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.title} className="flex justify-center">
                <div className="relative z-10 w-10 h-10 rounded-full border-2 border-[#4ADE80] bg-[#0D0F0E] text-[#4ADE80] font-bold text-sm flex items-center justify-center">
                  {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step cards — 4-col desktop, stacked mobile */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              className="flex flex-col gap-3 bg-[#161918] border border-[#2A2F2D] rounded-xl p-5"
            >
              {/* Mobile: show number inside card */}
              <div className="flex items-center gap-3 md:block">
                <div className="md:hidden w-8 h-8 rounded-full border-2 border-[#4ADE80] text-[#4ADE80] font-bold text-sm flex items-center justify-center shrink-0">
                  {i + 1}
                </div>
                <h3 className="text-[#F1F5F3] font-bold text-base leading-snug">
                  {step.title}
                </h3>
              </div>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">
                {step.description}
              </p>
              {step.links && (
                <div className="flex flex-wrap gap-3 mt-1">
                  {step.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4ADE80] text-xs font-semibold hover:text-[#22C55E] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
