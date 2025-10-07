import React, { useState, useEffect } from 'react';
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
import NotFoundPAge from './components/NotFoundPage';
// import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading time
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (isLoading) {
  //   return <LoadingScreen />;
  // }

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
          <Route path="/dashboard/*" element={<DashboardLayout />} />
          <Route path="*" element={<NotFoundPAge />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App