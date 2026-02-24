import React from 'react';
import { motion } from 'framer-motion';

const RoiSection: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="roi">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="font-unbounded text-4xl md:text-6xl font-bold mb-6 text-center tracking-tight">
          Free Until You ROI Guarantee
        </h2>

        <p className="text-navy-custom/60 text-center max-w-3xl mx-auto mb-16 text-base md:text-lg leading-relaxed font-light">
          We'll learn your needs, develop your system, test and deploy it all for free until we help you catch your first client, because we only want to build solutions that help you actually deliver
        </p>

        {/* Main ROI Visual */}
        <div className="bg-navy-custom rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 text-left flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-20 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors duration-700"></div>

          <div className="relative z-10">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="font-unbounded text-primary text-6xl sm:text-[8rem] font-bold leading-none mb-4 tracking-tighter"
            >
              13X
            </motion.div>
            <h3 className="text-3xl font-bold text-white mb-4">Return on Investment</h3>
            <p className="text-xl text-white/50 max-w-lg leading-relaxed font-light">
              If Loquitir captures just <span className="text-white font-medium">one single case</span> your team would have otherwise missed, the system pays for itself over 13 times.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoiSection;