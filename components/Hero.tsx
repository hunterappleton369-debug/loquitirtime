import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

const Hero: React.FC = () => {
  const scrollToForm = () => {
    const el = document.getElementById('booking-form');
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-navy-custom">
      {/* Background Animated SVG Waves */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-30">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: 0.4,
              d: [
                "M-100,400 C150,250 350,550 550,400 C750,250 950,550 1150,400 C1350,250 1550,550 1800,400",
                "M-100,400 C150,150 350,650 550,400 C750,150 950,650 1150,400 C1350,150 1550,650 1800,400"
              ]
            }}
            transition={{
              pathLength: { duration: 2, ease: "easeInOut" },
              opacity: { duration: 2, ease: "easeInOut" },
              d: { duration: 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
            }}
            fill="none"
            stroke="#c4a154"
            strokeLinecap="round"
            strokeWidth="2"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: 0.2,
              d: [
                "M-100,420 C200,300 400,600 600,420 C800,240 1000,600 1200,420 C1400,240 1600,600 1900,420",
                "M-100,420 C200,180 400,720 600,420 C800,120 1000,720 1200,420 C1400,120 1600,720 1900,420"
              ]
            }}
            transition={{
              pathLength: { duration: 2, delay: 0.5, ease: "easeInOut" },
              opacity: { duration: 2, delay: 0.5, ease: "easeInOut" },
              d: { duration: 7, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
            }}
            fill="none"
            stroke="#c4a154"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: 0.15,
              d: [
                "M-100,380 C100,200 300,500 500,380 C700,260 900,500 1100,380 C1300,260 1500,500 1700,380",
                "M-100,380 C100,100 300,600 500,380 C700,160 900,600 1100,380 C1300,160 1500,600 1700,380"
              ]
            }}
            transition={{
              pathLength: { duration: 2, delay: 1, ease: "easeInOut" },
              opacity: { duration: 2, delay: 1, ease: "easeInOut" },
              d: { duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
            }}
            fill="none"
            stroke="rgba(255,255,255,0.3)"
            strokeLinecap="round"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center">
        {/* Gold Banner */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-block py-2.5 px-6 sm:px-8 rounded-full bg-primary text-white mb-8 shadow-lg"
        >
          <span className="font-unbounded text-[9px] sm:text-[10px] md:text-xs font-medium uppercase tracking-[0.2em]">
            Done For You AI Automation for Small Personal Injury Firms
          </span>
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-unbounded text-3xl md:text-4xl lg:text-[3.25rem] font-bold leading-[1.15] mb-6 tracking-tight text-white text-balance"
        >
          Stop missing new clients.
          <br />
          <span className="text-primary italic">Boost Profitability. On Autopilot.</span>
          <br />
          Free Until You See Results.
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-white/50 mb-10 max-w-3xl mx-auto font-light leading-relaxed text-balance"
        >
          Loquitir helps lawyers qualify and book every PI lead instantly
          with custom AI systems, 24/7.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center justify-center gap-8"
        >
          <Button
            variant="primary"
            icon="arrow_forward"
            className="text-base sm:text-lg px-10 sm:px-16 py-5 sm:py-6 rounded-2xl"
            onClick={scrollToForm}
          >
            Get Your Free Custom Voice Agent
          </Button>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[10px] sm:text-xs font-bold text-white/40 uppercase tracking-[0.15em]">
            <span>Reduce Your Stress</span>
            <span className="text-primary">&#x2022;</span>
            <span>Increase Conversion</span>
            <span className="text-primary">&#x2022;</span>
            <span>Miss No Clients</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
