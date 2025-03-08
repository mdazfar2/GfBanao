import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent animate-fade-in">
          Where Learning Meets Connection
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join TechDate to learn, grow, and connect with like-minded individuals
        </p>
        <button className="group relative inline-flex items-center px-8 py-3 text-lg font-medium rounded-full bg-gradient-to-r from-pink-400 to-purple-500 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
          Get Started
          <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-lg" />
        </button>
      </div>
    </div>
  );
};

export default Hero;