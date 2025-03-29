import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Heart, Code } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import gsap from 'gsap';

const Hero = () => {
  const navigate = useNavigate();
  const taglineRef = useRef(null);

  const handleJoinNowClick = () => {
    navigate('/dashboard');
  };

  useEffect(() => {
    // GSAP animation ONLY for the tagline
    gsap.fromTo(
      taglineRef.current,
      { 
        opacity: 0,
        y: 30,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'elastic.out(1, 0.5)',
        delay: 0.3
      }
    );
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-50/50 via-purple-50/50 to-white/50" />
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
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
        {/* Animated Tagline */}
        <div ref={taglineRef} className="mb-4 opacity-0">
          <span className="inline-block px-4 py-2 text-lg font-medium rounded-full bg-gradient-to-r from-pink-100 via-purple-100 to-pink-100 border border-pink-200 shadow-sm">
            <span className="text-gray-500 line-through">Girl Friend</span>{' '}
            <span className="text-pink-500">❌</span>{' '}
            <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Great Future
            </span>{' '}
            <span className="text-green-500">✅</span>
          </span>
        </div>

        {/* Static Content Below */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Learn, Love, Grow — Welcome to GfBanao.
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Find your perfect match while leveling up your skills in technology.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="group relative px-8 py-4 text-lg font-medium rounded-full bg-gradient-to-r from-pink-400 to-purple-500 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            onClick={handleJoinNowClick}
          >
            Go Feed
            <ArrowRight className="inline-block ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-lg" />
          </button>
          <button className="px-8 py-4 text-lg font-medium rounded-full border-2 border-green-500 text-green-600 hover:bg-green-50 transform transition-all duration-300 hover:scale-105 flex items-center justify-center">
            <FaWhatsapp className="inline-block mr-2 h-5 w-5" />
            Join WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;