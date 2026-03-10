import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

const CTASection: React.FC = () => {
  const scrollToForm = () => {
    const el = document.getElementById('booking-form');
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 sm:py-28 relative bg-navy-custom overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-unbounded text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight italic"
        >
          Stop Paying for Leads<br className="hidden sm:block" /> You Never Answer.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-white/40 mb-12 font-light leading-relaxed text-balance max-w-3xl mx-auto"
        >
          We'll build you a custom system and deploy it to test how much more your firm could be growing. No risk, no obligation. We rely on results to earn your business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center"
        >
          <Button
            onClick={scrollToForm}
            variant="primary"
            className="text-base sm:text-lg px-10 sm:px-14 py-5 rounded-2xl"
          >
            Get Your Free Custom Voice Agent
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
