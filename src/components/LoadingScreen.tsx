import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center z-50">
      <div className="text-center space-y-6">
        {/* Animated heart with floating particles */}
        <div className="relative w-24 h-24 mx-auto">
          <div className="absolute inset-0 flex items-center justify-center">
            <Heart className="w-full h-full text-pink-500 animate-[heartbeat_1.5s_ease-in-out_infinite]" />
          </div>
          
          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-2 h-2 rounded-full bg-pink-400 opacity-70"
              style={{
                top: `${Math.sin(i * Math.PI / 4) * 30 + 40}px`,
                left: `${Math.cos(i * Math.PI / 4) * 30 + 40}px`,
                animation: `float_${i} 3s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
          
          {/* Pulsing glow */}
          <div className="absolute inset-0 rounded-full bg-pink-400 opacity-10 animate-[pulse_2s_ease-in-out_infinite]" />
        </div>

        {/* Text with gradient animation */}
        <div className="space-y-2">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-[gradientShift_3s_linear_infinite] bg-[length:200%_auto]">
            Loading GfBanao...
          </h2>
          <p className="text-gray-600 flex items-center justify-center gap-2">
            <span className="inline-block animate-[bounce_1s_infinite]">C</span>
            <span className="inline-block animate-[bounce_1s_infinite_0.1s]">u</span>
            <span className="inline-block animate-[bounce_1s_infinite_0.2s]">r</span>
            <span className="inline-block animate-[bounce_1s_infinite_0.3s]">a</span>
            <span className="inline-block animate-[bounce_1s_infinite_0.4s]">t</span>
            <span className="inline-block animate-[bounce_1s_infinite_0.5s]">i</span>
            <span className="inline-block animate-[bounce_1s_infinite_0.6s]">n</span>
            <span className="inline-block animate-[bounce_1s_infinite_0.7s]">g</span>
            <span className="ml-2">your perfect match</span>
            <Sparkles className="w-4 h-4 text-yellow-500 animate-[sparkle_1.5s_ease-in-out_infinite]" />
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mx-auto">
          <div 
            className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-[progress_2s_ease-in-out_infinite]" 
            style={{ width: '0%' }}
          />
        </div>
      </div>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes heartbeat {
          0% { transform: scale(1); }
          14% { transform: scale(1.1); }
          28% { transform: scale(1); }
          42% { transform: scale(1.1); }
          70% { transform: scale(1); }
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.2); opacity: 0.15; }
        }
        
        @keyframes progress {
          0% { width: 0%; left: 0; }
          50% { width: 100%; left: 0; }
          100% { width: 0%; left: 100%; }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes sparkle {
          0% { opacity: 0.5; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 0.5; transform: scale(0.8); }
        }
        
        ${[...Array(8)].map((_, i) => `
          @keyframes float_${i} {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(${Math.sin(i) * 5}px, ${Math.cos(i) * 5}px); }
            50% { transform: translate(${Math.sin(i * 2) * 8}px, ${Math.cos(i * 2) * 8}px); }
            75% { transform: translate(${Math.sin(i * 3) * 5}px, ${Math.cos(i * 3) * 5}px); }
          }
        `).join('')}
      `}</style>
    </div>
  );
};

export default LoadingScreen;