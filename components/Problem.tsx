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
              40% of new clients call after hours
            </h2>
            <p className="text-navy-custom/60 text-base sm:text-lg font-light leading-relaxed mb-8">
              In personal injury, the clock starts the second the accident happens. If you don't pick up, the next firm will. Your team is stressed, your overhead is high, and your marketing dollars are being wasted on missed calls.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0">check_circle</span>
                <div>
                  <p className="font-bold text-navy-custom text-sm sm:text-base">Stop wasting your advertising budget on unanswered leads</p>
                  <p className="text-navy-custom/40 text-sm font-light">Every missed call is lost ad spend.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0">check_circle</span>
                <div>
                  <p className="font-bold text-navy-custom text-sm sm:text-base">Eliminate the 3 AM intake burden from your staff</p>
                  <p className="text-navy-custom/40 text-sm font-light">Reduce team burnout after-hours 24/7 coverage.</p>
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
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4">Immediately</p>
              <p className="text-navy-custom/50 text-sm sm:text-base font-light leading-relaxed">
                Potential clients hang up and call a competitor if they don't have a live voice within 3 rings.
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
