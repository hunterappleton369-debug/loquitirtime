import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/Problem';
import CostSection from './components/CostSection';
import WhyNow from './components/WhyNow';
import SolutionSection from './components/Solution';
import Bonuses from './components/Bonuses';
import RoiSection from './components/ROI';
import CTASection from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <CostSection />
        <WhyNow />
        <SolutionSection />
        <Bonuses />
        <RoiSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
