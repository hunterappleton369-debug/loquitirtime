import React from 'react';
import { motion } from 'framer-motion';
import Card from './ui/Card';

const Bonuses: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-background-light" id="bonuses">
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
            Free Bonuses
          </span>
          <h2 className="font-unbounded text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-navy-custom">
            You'll also get these FREE Bonuses just for showing up
          </h2>
        </motion.div>

        {/* Gift Box Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-10"
        >
          <svg width="100" height="90" viewBox="0 0 100 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Box body */}
            <rect x="15" y="40" width="70" height="45" rx="4" stroke="#c4a154" strokeWidth="2" fill="rgba(196,161,84,0.08)" />
            {/* Box lid */}
            <rect x="10" y="30" width="80" height="14" rx="3" stroke="#c4a154" strokeWidth="2" fill="rgba(196,161,84,0.12)" />
            {/* Vertical ribbon */}
            <line x1="50" y1="30" x2="50" y2="85" stroke="#c4a154" strokeWidth="2" />
            {/* Horizontal ribbon */}
            <line x1="15" y1="62" x2="85" y2="62" stroke="#c4a154" strokeWidth="2" />
            {/* Bow */}
            <motion.path
              d="M50 30 C40 15, 25 18, 35 28 M50 30 C60 15, 75 18, 65 28"
              stroke="#c4a154"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            {/* Sparkles */}
            <motion.circle
              cx="20" cy="20" r="2" fill="#c4a154"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            />
            <motion.circle
              cx="80" cy="15" r="1.5" fill="#c4a154"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
            />
            <motion.circle
              cx="88" cy="25" r="1" fill="#c4a154"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 1.5 }}
            />
          </svg>
        </motion.div>

        {/* Two Bonus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full p-8 sm:p-10">
              <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-2xl">auto_awesome</span>
              </div>
              <h4 className="font-unbounded text-lg sm:text-xl font-bold text-navy-custom mb-3">
                Full AI Audit & Playbook to Future Proof Your Firm
              </h4>
              <p className="text-navy-custom/50 text-sm font-light leading-relaxed">
                We'll scan your website and create a detailed plan to turn ChatGPT into a referral engine for your firm. Consultants charge thousands for this.
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
                <span className="material-symbols-outlined text-primary text-2xl">ads_click</span>
              </div>
              <h4 className="font-unbounded text-lg sm:text-xl font-bold text-navy-custom mb-3">
                The Advertising Advantage Tool to Win Your Market
              </h4>
              <p className="text-navy-custom/50 text-sm font-light leading-relaxed">
                Find the best ads from competing firms in your local market. See what's working in minutes. <span className="font-bold text-navy-custom">Limited to 1 firm per zip code.</span>
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
