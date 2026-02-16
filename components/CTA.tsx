import React from 'react';
import Button from './ui/Button';

const CTASection: React.FC = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking-form');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <section className="py-24 relative bg-navy-custom overflow-hidden" id="booking">
        {/* Background glow for CTA */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-8 relative z-10 text-center">
          <h2 className="font-unbounded text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Adapt or Be Replaced.
          </h2>
          <p className="text-xl md:text-2xl text-white/40 mb-12 font-light leading-relaxed text-balance">
            The Personal Injury firm of the future doesn't sleep. The AI adoption curve is hitting its vertical phase—firms that automate their intake today will dominate the local market.
          </p>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-[1px] bg-primary/30 mb-10"></div>
            <p className="text-primary font-unbounded text-lg font-medium uppercase tracking-[0.3em] mb-8 animate-pulse">
              The Window is Closing.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <p className="text-white/40 font-unbounded text-xs font-bold uppercase tracking-[0.2em]">
                Only 5 Slots Available
              </p>
              <Button onClick={scrollToBooking} variant="primary" className="text-lg px-12 py-5 rounded-2xl">
                Book a Free AI Strategy Session
              </Button>
            </div>
          </div>
        </div>
      </section>
  );
};

export default CTASection;