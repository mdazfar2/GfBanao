import React from 'react';
import { Search, Code, Rocket, Users, Star, Layout, BookOpen, Target } from 'lucide-react';

const phases = [
  {
    title: "Research, Ideation & Infrastructure Setup",
    duration: "0-3 Months",
    icon: Search,
    tasks: [
      "Conduct Market Research",
      "Identify Competitor Platforms",
      "Define Core Features",
      "Setup Basic Infrastructure",
      "Finalize Branding & Design Concept"
    ],
    gradient: "from-blue-400 to-blue-600"
  },
  {
    title: "MVP Development",
    duration: "3-6 Months",
    icon: Code,
    tasks: [
      "Develop Core Features",
      "Build a Landing Page Website",
      "Implement Tech Matchmaking Algorithm",
      "Integrate Learning Platforms",
      "Create Internal Testing Environment"
    ],
    gradient: "from-purple-400 to-purple-600"
  },
  {
    title: "Beta Launch & Market Testing",
    duration: "6-8 Months",
    icon: Rocket,
    tasks: [
      "Launch Beta Version",
      "Collect Feedback",
      "Optimize Tech Matchmaking Algorithm",
      "Fix Bugs & Errors",
      "Collaborate with Influencers"
    ],
    gradient: "from-pink-400 to-pink-600"
  },
  {
    title: "Public Launch & Scaling",
    duration: "8-10 Months",
    icon: Target,
    tasks: [
      "Launch GfBanao Publicly",
      "Implement Premium Plans",
      "Introduce Achievement Badges",
      "Launch Marketing Campaigns",
      "Scale User Base",
      "Plan Future Roadmap"
    ],
    gradient: "from-green-400 to-green-600"
  }
];

const ImplementationRoadmap = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pink-50/50 to-purple-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Implementation Roadmap
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our 10-month journey from concept to launch
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-pink-300 to-purple-300 hidden lg:block" />

          <div className="space-y-20">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col group`}
              >
                <div className={`lg:w-1/2 w-full px-8 ${
                  index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                } text-center`}>
                  <div className="transform transition-all duration-300 group-hover:scale-105">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${phase.gradient} mb-6 transform transition-transform duration-300 group-hover:rotate-6`}>
                      <phase.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                    <p className="text-pink-600 font-medium mb-4">{phase.duration}</p>
                    <ul className={`space-y-3 text-gray-600 ${
                      index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                    } text-left`}>
                      {phase.tasks.map((task, taskIndex) => (
                        <li
                          key={taskIndex}
                          className="flex items-center lg:justify-end space-x-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative my-8 lg:my-0">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-purple-400 flex items-center justify-center">
                    <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                      {index + 1}
                    </span>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-purple-200 opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse" />
                </div>

                <div className="lg:w-1/2 w-full px-8">
                  <div className="h-full flex items-center">
                    <div className="w-full h-2 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${phase.gradient} transform transition-transform duration-500 group-hover:scale-x-110`}
                        style={{ width: `${((index + 1) / phases.length) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-xl text-gray-700 font-medium mb-8">
            Join us on this exciting journey to revolutionize tech dating and learning
          </p>
          <button className="px-8 py-3 text-lg font-medium rounded-full bg-gradient-to-r from-pink-400 to-purple-500 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Get Early Access
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImplementationRoadmap;