import React from 'react';
import { Globe, Brain, Shield, Bitcoin, Database, Palette, Cloud, Code } from 'lucide-react';

const categories = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Full-stack, Frontend, Backend",
    gradient: "from-blue-400 to-blue-600"
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "ML, Deep Learning, NLP",
    gradient: "from-green-400 to-green-600"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Security, Ethical Hacking",
    gradient: "from-red-400 to-red-600"
  },
  {
    icon: Bitcoin,
    title: "Blockchain & Crypto",
    description: "Web3, Smart Contracts",
    gradient: "from-yellow-400 to-yellow-600"
  },
  {
    icon: Database,
    title: "Data Science",
    description: "Analytics, Big Data",
    gradient: "from-purple-400 to-purple-600"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Product Design, UX Research",
    gradient: "from-pink-400 to-pink-600"
  },
  {
    icon: Cloud,
    title: "/Cloud",
    description: "AWS, Azure, GCP",
    gradient: "from-indigo-400 to-indigo-600"
  },
  {
    icon: Code,
    title: "Automation",
    description: "Scripting, CI/CD, Testing",
    gradient: "from-teal-400 to-teal-600"
  }
];

const Categories = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Tech Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with people who share your technical interests
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <div className="relative">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.gradient} flex items-center justify-center mb-4 transform transition-transform duration-300 group-hover:rotate-6`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {category.description}
                </p>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-gray-500">1.2k+ Members</span>
                  <span className="text-pink-500">50+ Events</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 text-lg font-medium rounded-full bg-gradient-to-r from-pink-400 to-purple-500 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Explore All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;