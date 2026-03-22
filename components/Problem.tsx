import React from 'react';
import { motion } from 'framer-motion';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white relative" id="loss">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-unbounded text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-tight mb-6 text-navy-custom">
              The Hidden Cost of Voicemail
            </h2>
            <p className="text-navy-custom/60 text-base sm:text-lg font-light leading-relaxed mb-4">
              A potential client with a wrecked Honda Civic is calling someone else. Immediately. How often do you think this happens?
            </p>
            <p className="text-navy-custom/60 text-base sm:text-lg font-light leading-relaxed mb-4">
              Here's a frightening statistic: <span className="font-bold text-navy-custom">About forty percent of new clients call when you're closed. Eighty percent of whom leave no trace!</span> Instead, they hang up and dial the next firm on Google. $200+ in ad spend. Gone. Might as well mail a check to your competitor.
            </p>
            <p className="text-navy-custom/60 text-sm italic mb-8">
              (Seriously, google this if you don't believe me.)
            </p>

            {/* Inline SVG Illustration - Phone with missed calls + dollar signs */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex items-center gap-4 mb-8"
            >
              <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Phone */}
                <rect x="10" y="5" width="36" height="70" rx="6" stroke="#0A1628" strokeWidth="2" fill="none" />
                <rect x="20" y="10" width="16" height="2" rx="1" fill="#0A1628" opacity="0.3" />
                <circle cx="28" cy="65" r="3" stroke="#0A1628" strokeWidth="1.5" fill="none" />
                {/* Missed call icon */}
                <path d="M18 30 L28 38 L38 30" stroke="#c4a154" strokeWidth="2" strokeLinecap="round" fill="none" />
                <line x1="38" y1="30" x2="38" y2="36" stroke="#c4a154" strokeWidth="2" strokeLinecap="round" />
                {/* Red dot */}
                <circle cx="40" cy="15" r="5" fill="#ef4444" />
                <text x="40" y="18" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">3</text>
                {/* Dollar signs floating away */}
                <motion.text
                  x="60" y="25"
                  fill="#c4a154"
                  fontSize="14"
                  fontWeight="bold"
                  initial={{ opacity: 0.8, y: 25 }}
                  animate={{ opacity: [0.8, 0], y: [25, 10] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatType: "loop" }}
                >$</motion.text>
                <motion.text
                  x="78" y="35"
                  fill="#c4a154"
                  fontSize="18"
                  fontWeight="bold"
                  initial={{ opacity: 0.6, y: 35 }}
                  animate={{ opacity: [0.6, 0], y: [35, 15] }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "loop", delay: 0.5 }}
                >$</motion.text>
                <motion.text
                  x="96" y="30"
                  fill="#c4a154"
                  fontSize="12"
                  fontWeight="bold"
                  initial={{ opacity: 0.7, y: 30 }}
                  animate={{ opacity: [0.7, 0], y: [30, 12] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "loop", delay: 1 }}
                >$</motion.text>
              </svg>
            </motion.div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0">check_circle</span>
                <div>
                  <p className="font-bold text-navy-custom text-sm sm:text-base">Stop wasting your advertising budget on unanswered leads</p>
                  <p className="text-navy-custom/40 text-sm font-light">Every missed call is lost ad spend. You already paid for that lead.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0">check_circle</span>
                <div>
                  <p className="font-bold text-navy-custom text-sm sm:text-base">Eliminate the 3 AM intake burden from your staff</p>
                  <p className="text-navy-custom/40 text-sm font-light">Picture this: you're eating popcorn, enjoying Netflix after dinner. The phone rings. Across the room. Clear liability. $20,000 in fees. An easy win. But if it goes to voicemail, it's gone.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* 80% Stat Card */}
            <div className="bg-background-light border border-navy-custom/5 rounded-3xl p-8 sm:p-10">
              <div className="font-unbounded text-5xl sm:text-6xl font-bold text-navy-custom mb-2">80%</div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4">of potential clients</p>
              <p className="text-navy-custom/50 text-sm sm:text-base font-light leading-relaxed">
                immediately hang up and call a competitor if their call is missed. No voicemail. No trace. Just gone.
              </p>
            </div>

            {/* The Opportunity Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-primary rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <h3 className="font-unbounded text-2xl sm:text-3xl font-bold mb-4 leading-tight">
                  The<br />Opportunity
                </h3>
                <p className="text-white/80 text-sm sm:text-base font-light leading-relaxed mb-6">
                  Firms who answer 100% of these calls can book more consults, save marketing money, and increase total revenue.
                </p>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
                  Never Miss Another Golden Opportunity
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
