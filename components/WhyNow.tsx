import React from 'react';
import { motion } from 'framer-motion';
import Card from './ui/Card';

const WhyNow: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white" id="why-now">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
            The AI Revolution Is Here
          </span>
          <h2 className="font-unbounded text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-navy-custom">
            2 Reasons Lawyers Need to Care. Or Risk Everything.
          </h2>
          <p className="text-navy-custom/60 text-base sm:text-lg font-light leading-relaxed">
            You've seen the news. The AI storm is coming. The time to act is now. Most firms (and small businesses) are woefully unprepared.
          </p>
        </motion.div>

        {/* Inline SVG - AI / Trend Chart */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-10"
        >
          <svg width="140" height="70" viewBox="0 0 140 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Brain / network nodes */}
            <circle cx="40" cy="35" r="8" stroke="#c4a154" strokeWidth="1.5" fill="rgba(196,161,84,0.1)" />
            <circle cx="70" cy="18" r="6" stroke="#0A1628" strokeWidth="1.5" fill="none" opacity="0.3" />
            <circle cx="70" cy="52" r="6" stroke="#0A1628" strokeWidth="1.5" fill="none" opacity="0.3" />
            <circle cx="100" cy="35" r="8" stroke="#c4a154" strokeWidth="1.5" fill="rgba(196,161,84,0.1)" />
            {/* Connection lines */}
            <line x1="48" y1="33" x2="64" y2="20" stroke="#0A1628" strokeWidth="1" opacity="0.2" />
            <line x1="48" y1="37" x2="64" y2="50" stroke="#0A1628" strokeWidth="1" opacity="0.2" />
            <line x1="76" y1="20" x2="92" y2="33" stroke="#0A1628" strokeWidth="1" opacity="0.2" />
            <line x1="76" y1="50" x2="92" y2="37" stroke="#0A1628" strokeWidth="1" opacity="0.2" />
            {/* Center dot pulse */}
            <motion.circle
              cx="70" cy="35" r="3"
              fill="#c4a154"
              initial={{ scale: 1, opacity: 0.8 }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0.3, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {/* AI text */}
            <text x="70" y="38" textAnchor="middle" fill="#c4a154" fontSize="5" fontWeight="bold">AI</text>
          </svg>
        </motion.div>

        {/* Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full p-8 sm:p-10">
              <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-2xl">person_search</span>
              </div>
              <h4 className="font-unbounded text-lg sm:text-xl font-bold text-navy-custom mb-3">
                Half your clients will soon ask AI to pick a firm for them
              </h4>
              <p className="text-navy-custom/50 text-sm font-light leading-relaxed mb-4">
                People are starting to ask AI for local picks. Here's the terrifying part: A recent McKinsey & Co. report found that unprepared businesses are <span className="font-bold text-navy-custom">likely to experience a loss in traffic of 20-50% by 2028</span>... in a year and a half!
              </p>
              <p className="text-navy-custom/60 text-sm font-medium italic">
                What would happen if you lost half your clients?
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Card className="h-full p-8 sm:p-10">
              <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-2xl">trending_up</span>
              </div>
              <h4 className="font-unbounded text-lg sm:text-xl font-bold text-navy-custom mb-3">
                AI is creating unfair advantages for early adopters
              </h4>
              <p className="text-navy-custom/50 text-sm font-light leading-relaxed mb-4">
                There's an AI tool that makes running viral ads easier and more predictable. It finds the top performers from rivals in your city and shows you what's actually working, right now. No guessing. Agencies used to charge thousands for this.
              </p>
              <p className="text-navy-custom/60 text-sm font-medium italic">
                We're offering this tool and a full AI Audit for free as a bonus to joining the challenge.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyNow;
