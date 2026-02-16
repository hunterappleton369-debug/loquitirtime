import React from 'react';
import Card from './ui/Card';
import { motion } from 'framer-motion';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative" id="loss">
      <div className="max-w-7xl mx-auto px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-unbounded text-4xl md:text-5xl font-bold mb-6">
              Silence slashes salaries.
            </h2>
            <p className="text-lg text-navy-custom/60 font-light leading-relaxed">
              Your staff is already overwhelmed with court dates, paperwork, and current clients. When everyone is busy and the phone rings, high-value leads don't wait—they simply call the next firm on the list. This inability to handle overflow isn't just an operational headache; it is a massive, silent revenue drain that limits your firm's growth.
            </p>
          </motion.div>
        </div>

        <div className="relative flex flex-col md:flex-row items-stretch justify-between gap-12 md:gap-4 mb-16">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-navy-custom/5 -z-0"></div>

          {/* The Leak */}
          <div className="md:w-1/3">
             <Card className="h-full p-10 flex flex-col justify-between text-center relative z-10">
                <div>
                  <div className="font-unbounded text-5xl font-bold text-navy-custom mb-4">40%</div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-3">The Leak</p>
                  <p className="text-navy-custom/50 text-sm font-medium">Of Potential Clients Call After Hours</p>
                </div>
                <p className="mt-6 text-[9px] text-navy-custom/30 font-bold uppercase tracking-widest">Source: Ruby Receptionists</p>
            </Card>
          </div>

          <div className="md:hidden flex justify-center">
            <span className="material-symbols-outlined text-primary/30 text-3xl animate-bounce">arrow_downward</span>
          </div>

          {/* The Loss */}
          <div className="md:w-1/3">
             <Card className="h-full p-10 flex flex-col justify-between text-center relative z-10">
                <div>
                  <div className="font-unbounded text-5xl font-bold text-navy-custom mb-4">80%</div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-3">The Loss</p>
                  <p className="text-navy-custom/50 text-sm font-medium">Immediately call a competitor</p>
                </div>
                <p className="mt-6 text-[9px] text-navy-custom/30 font-bold uppercase tracking-widest">Source: Law Firm Newswire</p>
            </Card>
          </div>

          <div className="md:hidden flex justify-center">
            <span className="material-symbols-outlined text-primary/30 text-3xl animate-bounce">arrow_downward</span>
          </div>

          {/* The Cost */}
          <div className="md:w-1/3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative z-10 bg-navy-custom p-10 rounded-[2.5rem] shadow-2xl h-full text-center text-white md:scale-105 flex flex-col justify-between"
            >
              <div>
                <div className="font-unbounded text-5xl font-bold text-primary mb-4">$13k</div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-3">The Cost</p>
                <p className="text-white/60 text-sm font-medium leading-relaxed">Average net fee lost per missed qualified case.</p>
              </div>
              <p className="mt-6 text-[9px] text-white/20 font-bold uppercase tracking-widest">Source: Casepeer</p>
            </motion.div>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <h3 className="font-unbounded text-2xl md:text-3xl font-bold text-navy-custom mb-2">
            Catching just 1 case per month can add $156,000 per year.
          </h3>
          <p className="text-[10px] font-bold uppercase tracking-widest text-navy-custom/30">
            based on industry average case size
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;