import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Features from './components/sections/Features';
import Footer from './components/Footer';
import WaveBackground from './components/WaveBackground';

function App() {
  return (
    <div className="relative min-h-screen">
      <WaveBackground />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;