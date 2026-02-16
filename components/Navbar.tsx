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
      // Offset for sticky header + small amount of white space as requested
      const yOffset = -100; 
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="fixed top-0 z-[110] w-full bg-navy-custom py-3 px-6 text-center">
        <p className="text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
          ONLY <span className="text-primary animate-pulse">5 SLOTS AVAILABLE</span>
        </p>
      </div>
      <nav 
        className={`fixed top-[40px] z-[100] w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md border-b border-navy-custom/5 shadow-lg' 
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-unbounded text-xl font-bold tracking-tight text-navy-custom cursor-pointer"
            >
              Loquitir
            </span>
            <span className="hidden lg:inline-block bg-navy-custom/5 text-navy-custom/60 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-navy-custom/10">
              Only 5 Slots Available
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-12">
            <button 
              onClick={() => scrollToSection('loss')}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy-custom/60 hover:text-primary transition-colors hover:scale-105 transform duration-200"
            >
              The Problem
            </button>
            <button 
              onClick={() => scrollToSection('engine')}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy-custom/60 hover:text-primary transition-colors hover:scale-105 transform duration-200"
            >
              The Solution
            </button>
            <button 
              onClick={() => scrollToSection('roi')}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy-custom/60 hover:text-primary transition-colors hover:scale-105 transform duration-200"
            >
              ROI
            </button>
            
            <Button 
              variant="navy" 
              className="!py-3 !px-6 text-[10px] uppercase tracking-[0.2em]"
              onClick={() => scrollToSection('booking-form')} 
            >
              Book Free Audit
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;