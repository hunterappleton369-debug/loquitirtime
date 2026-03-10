import React from 'react';
import { motion } from 'framer-motion';
import Card from './ui/Card';

const RoiSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white" id="roi">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="font-unbounded text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-navy-custom">
            Totally Risk-Free. Every Month.
          </h2>
          <p className="text-navy-custom/60 text-base sm:text-lg font-light leading-relaxed">
            We are so confident in our Voice AI that we build it free, because we're focused on generating results. Or you don't pay.
          </p>
        </motion.div>

        {/* Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full p-8 sm:p-10">
              <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-2xl">check_circle</span>
              </div>
              <h4 className="font-unbounded text-xl font-bold text-navy-custom mb-3">Free Build & Setup</h4>
              <p className="text-navy-custom/50 text-sm font-light leading-relaxed">
                We invest our own engineering resources to build your custom agents for free. You don't pay anything until you see it working perfectly.
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
                <span className="material-symbols-outlined text-primary text-2xl">check_circle</span>
              </div>
              <h4 className="font-unbounded text-xl font-bold text-navy-custom mb-3">No Long-Term Contracts</h4>
              <p className="text-navy-custom/50 text-sm font-light leading-relaxed">
                We don't lock you in. We operate on month-to-month terms because we know our value keeps you here, not a legal document.
              </p>
            </Card>
          </motion.div>
        </div>

        {/* ROI Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-start gap-4 bg-background-light border border-navy-custom/5 rounded-2xl p-6 sm:p-8">
            <span className="material-symbols-outlined text-green-500 text-2xl mt-0.5 shrink-0">verified</span>
            <p className="text-navy-custom/70 text-sm sm:text-base leading-relaxed">
              <span className="font-bold text-navy-custom">ROI Every Month Guarantee:</span> If we fail to help you sign a client any month, the entire month is free.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoiSection;
