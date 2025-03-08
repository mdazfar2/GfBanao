import React from 'react';
import { Users, MessageSquare, Code, Brain, Heart, Rocket, BookOpen, Calendar } from 'lucide-react';

const features = [
  {
    title: 'Skill Matchmaking',
    description: 'Connect with people who share your tech interests and learning goals',
    icon: Brain,
    gradient: 'from-pink-400 to-pink-600',
  },
  {
    title: 'Live Learning Rooms',
    description: 'Join interactive sessions to learn and connect with others',
    icon: MessageSquare,
    gradient: 'from-purple-400 to-purple-600',
  },
  {
    title: 'Collaborative Projects',
    description: 'Work on real projects while building meaningful relationships',
    icon: Code,
    gradient: 'from-pink-400 to-purple-600',
  },
  {
    title: 'Tech-Themed Dates',
    description: 'Unique date ideas combining learning and connection',
    icon: Heart,
    gradient: 'from-purple-400 to-pink-600',
  },
  {
    title: 'Learning Communities',
    description: 'Join groups focused on specific technologies',
    icon: Users,
    gradient: 'from-pink-400 to-pink-600',
  },
  {
    title: 'Virtual Events',
    description: 'Attend tech workshops and social gatherings',
    icon: Calendar,
    gradient: 'from-purple-400 to-purple-600',
  },
  {
    title: 'Study Resources',
    description: 'Access curated learning materials and guides',
    icon: BookOpen,
    gradient: 'from-pink-400 to-purple-600',
  },
  {
    title: 'Growth Tracking',
    description: 'Monitor your progress in learning and relationships',
    icon: Rocket,
    gradient: 'from-purple-400 to-pink-600',
  },
];

const Features = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Features that Connect & Empower
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how GfBanao brings together learning and meaningful connections
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <div className="relative">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 transform transition-transform duration-300 group-hover:rotate-6`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;