import React from 'react';
import { Heart, Lightbulb, Users, Target } from 'lucide-react';

const timelineItems = [
  {
    year: '2023',
    title: 'GfBanao Launch',
    description: 'Revolutionizing tech learning and connections',
    icon: Heart,
  },
  {
    year: '2024',
    title: 'Growing Community',
    description: 'Building meaningful relationships through shared learning',
    icon: Users,
  },
  {
    year: 'Vision',
    title: 'Future Goals',
    description: 'Creating a global network of tech-savvy couples',
    icon: Target,
  },
];

const About = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how we're transforming the way people learn and connect in the tech world.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-pink-300 to-purple-300" />

          {/* Timeline items */}
          <div className="space-y-20">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } group`}
              >
                <div className="w-1/2 px-8">
                  <div className={`${
                    index % 2 === 0 ? 'text-right' : 'text-left'
                  } transform transition-all duration-300 group-hover:scale-105`}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-pink-200 opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse" />
                </div>
                <div className="w-1/2 px-8">
                  <div className={`${
                    index % 2 === 0 ? 'text-left' : 'text-right'
                  }`}>
                    <span className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                      {item.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;