import React from 'react';
import Button from './ui/Button';
import Card from './ui/Card';
import { motion } from 'framer-motion';

const SolutionSection: React.FC = () => {
  const scrollToForm = () => {
    const el = document.getElementById('booking-form');
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const steps = [
    {
      icon: "engineering",
      title: "Hand-Crafted Agents",
      description: "Our engineers build your agent based on your specific intake scripts. We handle 100% of the build so you don't have to lift a finger.",
    },
    {
      icon: "handshake",
      title: "1-on-1 Validation",
      description: "We stress-test every edge case with you before launch to ensure your firm's reputation is flawlessly protected.",
    },
    {
      icon: "bolt",
      title: "Zero-Effort Launch",
      description: "Direct injection into your CRM for pre-screen/qualify. Your new cases appear on-time dashboard.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-background-light relative overflow-hidden" id="engine">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
            How The Challenge Works
          </span>
          <h2 className="font-unbounded text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-navy-custom">
            3 Day Custom Launch Protocol.
          </h2>
          <p className="text-navy-custom/60 text-base sm:text-lg font-light leading-relaxed">
            We don't just give you a tool. We build, test, and refine your custom AI receptionist 1-on-1 for your specific firm. Set up in 3 days, managed for 2 weeks.
          </p>
        </motion.div>

        {/* Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <Card className="h-full p-8 sm:p-10">
                <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    {step.icon}
                  </span>
                </div>
                <h4 className="font-unbounded text-lg sm:text-xl font-bold text-navy-custom mb-3">
                  {step.title}
                </h4>
                <p className="text-navy-custom/50 text-sm font-light leading-relaxed">
                  {step.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Button
            variant="primary"
            icon="arrow_forward"
            className="text-base sm:text-lg px-10 sm:px-14 py-5 rounded-2xl"
            onClick={scrollToForm}
          >
            Apply for the 2 Week Challenge
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
