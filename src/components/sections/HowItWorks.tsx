import React from 'react';
import { UserPlus, BookOpen, Users, MessageSquare, Heart, Rocket } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up & Build Profile",
    description: "Create your tech-focused profile highlighting your skills and interests"
  },
  {
    icon: BookOpen,
    title: "Choose Your Interests",
    description: "Select your preferred tech domains and learning goals"
  },
  {
    icon: Users,
    title: "Start Connecting",
    description: "Meet like-minded individuals based on technical compatibility"
  },
  {
    icon: MessageSquare,
    title: "Participate & Engage",
    description: "Join discussions, challenges, and tech events"
  },
  {
    icon: Heart,
    title: "Build Relationships",
    description: "Connect romantically or professionally with compatible matches"
  },
  {
    icon: Rocket,
    title: "Grow Together",
    description: "Learn, innovate, and build a future together"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How GfBanao Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your journey to finding the perfect tech-savvy partner
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-pink-300 to-purple-300 md:block hidden" />

          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col group`}
              >
                <div className={`md:w-1/2 w-full px-8 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                } text-center`}>
                  <div className="transform transition-all duration-300 group-hover:scale-105">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>

                <div className="relative my-8 md:my-0">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-pink-200 opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse" />
                </div>

                <div className="md:w-1/2 w-full px-8">
                  <div className={`${
                    index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                  } text-center`}>
                    <span className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                      Step {index + 1}
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

export default HowItWorks;