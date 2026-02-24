import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/Problem';
import SolutionSection from './components/Solution';
import RoiSection from './components/ROI';
import CTASection from './components/CTA';
import BookingSection from './components/Booking';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Global cursor effect hook could go here if using a canvas overlay, 
  // but we will use CSS/Framer Motion localized effects for better performance.

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <RoiSection />
        <CTASection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;