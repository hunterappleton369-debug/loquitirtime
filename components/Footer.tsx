import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 sm:py-16 border-t border-navy-custom/5 bg-background-light">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
          <div className="text-center md:text-left">
            <span className="font-unbounded text-xl font-bold text-navy-custom mb-1 block tracking-tight">
              Loquitir
            </span>
            <p className="text-[10px] text-navy-custom/40 font-bold uppercase tracking-widest">
              The Voice AI Standard for Law Firms
            </p>
          </div>

          <div className="flex space-x-8 sm:space-x-12 text-[10px] font-bold text-navy-custom/60 uppercase tracking-widest">
            <a className="hover:text-primary transition-colors" href="#">Privacy</a>
            <a className="hover:text-primary transition-colors" href="#">Terms</a>
            <a className="hover:text-primary transition-colors" href="mailto:hunter@loquitir.com">Contact</a>
          </div>

          <div className="text-[10px] text-navy-custom/30 font-bold tracking-widest uppercase">
            &copy; 2024 Loquitir AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
