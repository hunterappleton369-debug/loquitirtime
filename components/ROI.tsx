import React from 'react';
import Card from './ui/Card';
import { motion } from 'framer-motion';

const RoiSection: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="roi">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="font-unbounded text-4xl md:text-6xl font-bold mb-16 text-center tracking-tight">
          Catching 1 Case Per Month.
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Main ROI Visual */}
          <div className="lg:col-span-2 bg-navy-custom rounded-[3rem] p-12 text-left flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-20 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors duration-700"></div>
            
            <div className="relative z-10">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="font-unbounded text-primary text-[8rem] font-bold leading-none mb-4 tracking-tighter"
              >
                13X
              </motion.div>
              <h3 className="text-3xl font-bold text-white mb-4">Return on Investment</h3>
              <p className="text-xl text-white/50 max-w-lg leading-relaxed font-light">
                If Loquitir captures just <span className="text-white font-medium">one single case</span> your team would have otherwise missed, the system pays for itself over 13 times.
              </p>
            </div>
          </div>

          {/* Average Adds Card */}
          <Card className="p-10 flex flex-col justify-center text-center border border-navy-custom/5 shadow-sm">
             <motion.span 
               whileHover={{ rotate: 10, scale: 1.1 }}
               className="material-symbols-outlined text-5xl text-primary/40 mb-6 mx-auto block w-fit"
             >
               analytics
             </motion.span>
             <p className="text-navy-custom/60 font-bold uppercase tracking-widest text-xs mb-3">On Average</p>
             <p className="text-navy-custom font-medium text-lg mb-2">Adds</p>
             <div className="font-unbounded text-5xl font-bold text-primary mb-2">$156,000</div>
             <p className="text-navy-custom/40 font-bold uppercase tracking-widest text-[10px]">Per Year</p>
             <a 
               href="#"
               className="mt-10 text-navy-custom/40 font-bold uppercase tracking-widest text-[10px] hover:text-primary transition-colors flex items-center justify-center gap-2 group"
             >
               View Audit Details 
               <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_outward</span>
             </a>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default RoiSection;