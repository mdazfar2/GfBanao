import React from 'react';
import { ArrowRight, Heart, Code } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-50/50 via-purple-50/50 to-white/50" />
        <div className="absolute inset-0 animate-float">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            >
              {i % 2 === 0 ? (
                <Heart className="w-4 h-4 text-pink-300 opacity-20" />
              ) : (
                <Code className="w-4 h-4 text-purple-300 opacity-20" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="relative text-center max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
          Learn, Love, Grow — Welcome to GfBanao.
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Find your perfect match while leveling up your skills in technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group relative px-8 py-4 text-lg font-medium rounded-full bg-gradient-to-r from-pink-400 to-purple-500 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Join Now
            <ArrowRight className="inline-block ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-lg" />
          </button>
          <button className="px-8 py-4 text-lg font-medium rounded-full border-2 border-purple-400 text-purple-600 hover:bg-purple-50 transform transition-all duration-300 hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;