import React from 'react';
import { Users, MessageSquare, Rocket, Brain, Heart, Code } from 'lucide-react';

const features = [
  {
    title: 'Skill-Based Matchmaking',
    description: 'Connect with people who share your tech interests and learning goals',
    icon: Brain,
  },
  {
    title: 'TechTalk Rooms',
    description: 'Join live discussions on various tech topics with like-minded individuals',
    icon: MessageSquare,
  },
  {
    title: 'Collaboration Projects',
    description: 'Work together on real projects while building meaningful connections',
    icon: Code,
  },
  {
    title: 'Learning Communities',
    description: 'Join groups focused on specific technologies or learning paths',
    icon: Users,
  },
  {
    title: 'Smart Connections',
    description: 'AI-powered matching based on your learning style and interests',
    icon: Heart,
  },
  {
    title: 'Growth Together',
    description: 'Track your progress and celebrate achievements with your connections',
    icon: Rocket,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Features that Connect & Empower
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how TechDate brings together learning and meaningful connections
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-400 to-purple-400 flex items-center justify-center mb-4 transform transition-transform duration-300 group-hover:rotate-6">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;