import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

const CostSection: React.FC = () => {
  const scrollToForm = () => {
    const el = document.getElementById('booking-form');
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const stats = [
    { value: '$10,000', label: 'Average PI case in fees', sublabel: 'Just missing one case per month...' },
    { value: '$120K', label: 'Per year in missed fees', sublabel: "That's $120,000 per year, gone." },
    { value: '$3.6M', label: 'Over a 30-year career', sublabel: 'Before compound interest.' },
  ];

  return (
    <section className="py-20 sm:py-28 bg-navy-custom relative overflow-hidden" id="cost">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
            The Numbers Don't Lie
          </span>
          <h2 className="font-unbounded text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
            The Most Expensive Leak For Most Personal Injury Firms
          </h2>
          <p className="text-white/40 text-base sm:text-lg font-light leading-relaxed">
            Let's crunch some numbers. The average PI case pays ~$10,000 in fees. Let's be really conservative: Say you're just missing one case <span className="italic text-white/60">per month</span>.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-10 text-center"
            >
              <div className="font-unbounded text-4xl sm:text-5xl font-bold text-primary mb-3">
                {stat.value}
              </div>
              <p className="text-white/70 text-sm sm:text-base font-medium mb-2">
                {stat.label}
              </p>
              <p className="text-white/30 text-xs font-light">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Inline SVG - Money Stack with Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex justify-center mb-10"
        >
          <svg width="160" height="80" viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Stack of bills */}
            <rect x="20" y="50" width="50" height="8" rx="2" stroke="#c4a154" strokeWidth="1.5" fill="rgba(196,161,84,0.15)" />
            <rect x="24" y="42" width="50" height="8" rx="2" stroke="#c4a154" strokeWidth="1.5" fill="rgba(196,161,84,0.15)" />
            <rect x="28" y="34" width="50" height="8" rx="2" stroke="#c4a154" strokeWidth="1.5" fill="rgba(196,161,84,0.15)" />
            <rect x="32" y="26" width="50" height="8" rx="2" stroke="#c4a154" strokeWidth="1.5" fill="rgba(196,161,84,0.2)" />
            {/* Dollar sign on top bill */}
            <text x="57" y="33" textAnchor="middle" fill="#c4a154" fontSize="7" fontWeight="bold">$</text>
            {/* Upward trending arrow */}
            <motion.path
              d="M100 60 L120 35 L140 15"
              stroke="#c4a154"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
            <motion.polygon
              points="136,10 145,16 138,20"
              fill="#c4a154"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 1.8 }}
            />
          </svg>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <p className="text-white/60 text-base sm:text-lg font-light leading-relaxed italic">
            "That missed revenue is <span className="text-primary font-bold not-italic">disproportionately profit</span>. You already paid for the advertising. Your overhead is covered. That's worth a fortune invested in the S&P 500."
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Button
            variant="primary"
            icon="arrow_forward"
            className="text-base sm:text-lg px-10 sm:px-14 py-5 rounded-2xl"
            onClick={scrollToForm}
          >
            Apply for the 2 Week Challenge
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CostSection;
