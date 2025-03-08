import React from 'react';
import { Heart, Code, Zap, Users } from 'lucide-react';

const AboutExtended = () => {
  const reasons = [
    {
      icon: Heart,
      title: "Why GfBanao?",
      description: "Created by tech enthusiasts who understand that meaningful relationships are built on shared passions and intellectual connections. We bridge the gap between professional growth and personal relationships."
    },
    {
      icon: Code,
      title: "Tech-First Approach",
      description: "Unlike traditional platforms, we focus on technical compatibility first. Share code, not just photos. Build projects together before building a life together."
    },
    {
      icon: Zap,
      title: "Seamless Integration",
      description: "We've revolutionized how learning and connection work together. Participate in workshops, collaborate on projects, and naturally develop relationships with like-minded individuals."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join a thriving community of tech enthusiasts who are looking for both professional growth and meaningful relationships. Learn, connect, and grow together."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pink-50/50 to-purple-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose GfBanao?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The perfect platform for tech enthusiasts to find meaningful connections through shared knowledge and passion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-pink-400 to-purple-400 flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:rotate-6">
                  <reason.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 font-medium mb-8">
            "Where technical expertise meets meaningful connections"
          </p>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-500 mb-2">0</div>
              <div className="text-gray-600">Tech Enthusiasts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-500 mb-2">0</div>
              <div className="text-gray-600">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-500 mb-2">0</div>
              <div className="text-gray-600">Daily Matches</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutExtended;