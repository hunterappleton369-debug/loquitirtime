import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-40 pb-20 overflow-hidden hero-glow">
      {/* Background Animated SVG Waves */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-40 md:opacity-100">
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
              opacity: 0.1,
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
            stroke="#c4a154"
            strokeLinecap="round"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-block py-2.5 px-8 rounded-full bg-navy-custom text-white mb-8 shadow-lg"
        >
          <span className="font-unbounded text-[10px] md:text-xs font-medium uppercase tracking-[0.25em]">
            Profitable AI Solutions for Personal Injury Firms
          </span>
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-unbounded text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] mb-10 tracking-tight text-navy-custom text-balance"
        >
          Don't Let <span className="text-primary">$13,000</span> Go To Voicemail Tonight.
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-navy-custom/60 mb-12 max-w-4xl mx-auto font-light leading-relaxed text-balance"
        >
          Most clients call after hours. If no one answers, you're handing the client to your competitor and flushing a $100 bill in ad spend down the drain.{' '}
          Here's the good news: 56% of your competitors are unreachable by phone. There's a golden opportunity for innovative firms. AI isn't a replacement for your team, but we can help you win more clients, find your hidden profit, and reduce your team's stress with our done for you set up
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
            className="text-base sm:text-xl px-10 sm:px-20 py-5 sm:py-7 rounded-2xl"
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

          <div className="flex items-center space-x-4 opacity-70 hover:opacity-100 transition-opacity duration-300">
            <span className="material-symbols-outlined text-green-600">verified</span>
            <p className="text-sm font-bold text-navy-custom uppercase tracking-[0.15em]">
              Free Until it Works Guarantee
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;