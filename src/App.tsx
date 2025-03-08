import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Features from './components/sections/Features';
import Footer from './components/Footer';
import WaveBackground from './components/WaveBackground';
import AboutExtended from './components/sections/AboutExtended';
import ImplementationRoadmap from './components/sections/ImplementationRoadmap';
import HowItWorks from './components/sections/HowItWorks';
import Categories from './components/sections/Categories';
import TrendingProfiles from './components/sections/TrendingProfiles';

function App() {
  return (
    <div className="relative min-h-screen">
      <WaveBackground />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <AboutExtended />
        <ImplementationRoadmap />
        <HowItWorks />
        <Features />
        <Categories />
        <TrendingProfiles />
      </main>
      <Footer />
    </div>
  );
}

export default App;