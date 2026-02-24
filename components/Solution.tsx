import React from 'react';
import Button from './ui/Button';
import { motion } from 'framer-motion';

const SolutionSection: React.FC = () => {
  const features = [
    { icon: "handshake", title: "Sign more Clients, Win more Cases" },
    { icon: "autorenew", title: "Automate Aggravating Tasks 24/7" },
    { icon: "bolt", title: "Fast, Fully Custom Development, Testing, and Improvement" },
    { icon: "verified", title: "Free Until it Works Guarantee" },
  ];

  const steps = [
    { icon: "check_circle", title: "Free AI Audit with Expert", price: "$1000" },
    { icon: "check_circle", title: "Integrations + Agent Development", price: "$3000" },
    { icon: "check_circle", title: "High Pressure Testing Protocol", price: "$1000" },
  ];

  return (
    <section className="py-24 bg-background-light relative overflow-hidden" id="engine">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Column */}
          <div className="lg:sticky lg:top-40">
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">
              The Solution
            </span>
            <h2 className="font-unbounded text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Profit Finding Done For You AI System
            </h2>
            <div className="space-y-4">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="flex items-center bg-white p-6 rounded-2xl border border-navy-custom/5 shadow-sm group cursor-default"
                >
                  <div className="bg-primary/10 p-3 rounded-xl mr-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors duration-300">
                      {feature.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{feature.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column (Pricing Card) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-navy-custom rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden"
          >
            <h3 className="font-unbounded text-2xl font-bold mb-8">Risk-Free Launch Protocol</h3>
            <ul className="space-y-6">
              {steps.map((step, idx) => (
                <li key={idx} className="flex items-center justify-between border-b border-white/5 pb-4 group">
                  <div className="flex items-center space-x-3 sm:space-x-5 min-w-0">
                    <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform shrink-0">
                      {step.icon}
                    </span>
                    <span className="font-medium text-base sm:text-lg">{step.title}</span>
                  </div>
                  <span className="text-white/40 text-sm group-hover:text-white/60 transition-colors shrink-0 ml-2">
                    ({step.price})
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 sm:mt-10 bg-white/5 p-5 sm:p-8 rounded-xl sm:rounded-[2rem] border border-white/5 relative group">
              <p className="text-primary font-bold uppercase tracking-widest text-[10px] mb-4">
                Total Setup Cost
              </p>
              <div className="flex items-center gap-4 sm:gap-6 mb-8">
                <div className="text-2xl sm:text-3xl font-unbounded font-bold text-white/20 line-through tracking-tighter">
                  $5,000
                </div>
                <div className="text-4xl sm:text-6xl font-unbounded font-bold text-white tracking-tighter group-hover:scale-110 transition-transform origin-left">
                  $0.00
                </div>
              </div>
              
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_15px_rgba(196,161,84,0.6)] animate-pulse"></div>
                  <p className="text-primary font-unbounded text-sm font-bold uppercase tracking-tighter">
                    Only 5 Slots Available
                  </p>
                </div>
                <Button
                  variant="primary"
                  className="w-full sm:w-auto text-xs px-8 py-4 uppercase tracking-widest"
                  onClick={() => {
                    const el = document.getElementById('booking-form');
                    if (el) {
                      const y = el.getBoundingClientRect().top + window.scrollY - 100;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }}
                >
                  Book a Free AI Strategy Session
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;