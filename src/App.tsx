// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Features from './components/sections/Features';
import Footer from './components/Footer';
import WaveBackground from './components/WaveBackground';
import AboutExtended from './components/sections/AboutExtended';
import DashboardLayout from './components/dashboard/DashboardLayout';
import HowItWorks from './components/sections/HowItWorks';
import Categories from './components/sections/Categories';
import TrendingProfiles from './components/sections/TrendingProfiles';
import ImplementationRoadmap from './components/sections/ImplementationRoadmap';


function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <WaveBackground />
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <About />
              <AboutExtended />
              <ImplementationRoadmap />
              <HowItWorks />
              <Features />
              <Categories />
              <TrendingProfiles />
              <Footer />
            </>
          } />
          <Route path="/dashboard" element={<DashboardLayout />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;