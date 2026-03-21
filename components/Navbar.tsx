import React, { useState, useEffect } from 'react';
import Button from './ui/Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToForm = () => scrollToSection('booking-form');

  return (
    <nav
      className={`fixed top-0 z-[100] w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-navy-custom/5 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
        <span
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`font-unbounded text-xl font-bold tracking-tight cursor-pointer transition-colors duration-300 ${
            isScrolled ? 'text-navy-custom' : 'text-white'
          }`}
        >
          Loquitir
        </span>

        <div className="hidden md:flex items-center space-x-10">
          <button
            onClick={() => scrollToSection('loss')}
            className={`text-[11px] font-bold uppercase tracking-[0.15em] hover:text-primary transition-colors hover:scale-105 transform duration-200 ${
              isScrolled ? 'text-navy-custom/60' : 'text-white/70'
            }`}
          >
            The Problem
          </button>
          <button
            onClick={() => scrollToSection('engine')}
            className={`text-[11px] font-bold uppercase tracking-[0.15em] hover:text-primary transition-colors hover:scale-105 transform duration-200 ${
              isScrolled ? 'text-navy-custom/60' : 'text-white/70'
            }`}
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection('roi')}
            className={`text-[11px] font-bold uppercase tracking-[0.15em] hover:text-primary transition-colors hover:scale-105 transform duration-200 ${
              isScrolled ? 'text-navy-custom/60' : 'text-white/70'
            }`}
          >
            Risk Free
          </button>

          <Button
            variant="primary"
            className="!py-3 !px-6 text-[11px] uppercase tracking-[0.1em]"
            onClick={scrollToForm}
          >
            Apply for the 2 Week Challenge
          </Button>
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden">
          <Button
            variant="primary"
            className="!py-2.5 !px-4 text-[9px] uppercase tracking-[0.1em]"
            onClick={scrollToForm}
          >
            Apply Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
