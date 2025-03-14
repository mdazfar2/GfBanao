import React from 'react';
import { TrendingUp, Code, Brain, Heart } from 'lucide-react';

const trendingTopics = [
  {
    icon: Code,
    title: "Building a Dating App with React",
    engagement: "2.5k developers discussing",
    gradient: "from-blue-400 to-blue-600"
  },
  {
    icon: Brain,
    title: "AI in Modern Dating",
    engagement: "1.8k posts today",
    gradient: "from-green-400 to-green-600"
  },
  {
    icon: Heart,
    title: "Tech Couples Success Stories",
    engagement: "500+ stories shared",
    gradient: "from-pink-400 to-pink-600"
  }
];

const TrendingTopics = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center space-x-2 mb-6">
        <TrendingUp className="h-5 w-5 text-pink-500" />
        <h2 className="text-lg font-semibold">Trending in Tech</h2>
      </div>

      <div className="space-y-4">
        {trendingTopics.map((topic, index) => (
          <div
            key={index}
            className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start space-x-4">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${topic.gradient} flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-6`}>
                <topic.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 group-hover:text-pink-600 transition-colors duration-200">
                  {topic.title}
                </h3>
                <p className="text-sm text-gray-500">{topic.engagement}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 px-4 py-2 text-pink-600 hover:text-pink-700 text-sm font-medium transition-colors duration-200">
        Show more topics
      </button>
    </div>
  );
};

export default TrendingTopics;