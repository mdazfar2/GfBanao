import React from 'react';
import { BookOpen, Code, Brain, Rocket, Star, Trophy, Users, Play, Clock } from 'lucide-react';

const courses = [
  {
    title: "Mastering React.js",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    difficulty: "Intermediate",
    progress: 65,
    enrolled: 1234,
    author: {
      name: "Anuj Gaurave",
      avatar: "/anuj.webp"
    }
  },
  {
    title: "AI for Beginners",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    difficulty: "Beginner",
    progress: 30,
    enrolled: 856,
    author: {
      name: "Raviranjan Kumar",
      avatar: "/ravi.webp"
    }
  },
  {
    title: "Build a Dating App with Node.js",
    thumbnail: "https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    difficulty: "Advanced",
    progress: 23,
    enrolled: 567,
    author: {
      name: "Sachin Singh",
      avatar: "/sachin.webp"
    }
  }
];

const categories = [
  { name: "Frontend Development", icon: Code, count: 45 },
  { name: "Backend Development", icon: Brain, count: 38 },
  { name: "UI/UX Design", icon: BookOpen, count: 29 },
  { name: "AI/ML", icon: Brain, count: 24 },
  { name: "DevOps", icon: Rocket, count: 19 }
];

const studyGroups = [
  {
    name: "React Ninjas",
    members: 24,
    level: "Intermediate",
    nextSession: "Saturday, 2 PM",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "AI Explorers",
    members: 18,
    level: "Advanced",
    nextSession: "Sunday, 11 AM",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const LearnPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 mb-12 overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-white mb-4">
              Level Up Your Tech Skills with Passion and Purpose
            </h1>
            <p className="text-white/90 text-lg mb-6">
              Explore curated lessons, team up with learners, and grow together
            </p>
            <button className="px-6 py-3 bg-white text-purple-600 rounded-full font-medium hover:shadow-lg transform transition-all duration-300 hover:scale-105">
              Start Learning
            </button>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-purple-500/20 to-transparent" />
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-purple-600">
                  {course.difficulty}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={course.author.avatar}
                    alt={course.author.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-gray-600 text-sm">{course.author.name}</span>
                </div>
                <div className="mb-4">
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-pink-500 to-purple-500"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-sm text-gray-600">
                    <span>{course.progress}% Complete</span>
                    <span>{course.enrolled} Enrolled</span>
                  </div>
                </div>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-medium hover:shadow-lg transition-shadow duration-300">
                  {course.progress > 0 ? 'Resume Course' : 'Start Learning'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <category.icon className="w-8 h-8 text-purple-500 mb-4 transform transition-transform duration-300 group-hover:rotate-6" />
                <h3 className="font-medium text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count} Courses</p>
              </div>
            ))}
          </div>
        </div>

        {/* Study Groups */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Study Groups</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studyGroups.map((group, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <img
                    src={group.image}
                    alt={group.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold mb-1">{group.name}</h3>
                    <div className="flex items-center space-x-2 text-sm">
                      <Users className="w-4 h-4" />
                      <span>{group.members} Members</span>
                      <span>•</span>
                      <span>{group.level}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Next: {group.nextSession}</span>
                  </div>
                  <button className="px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-medium hover:bg-purple-100 transition-colors duration-300">
                    Join Group
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Achievements</h2>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-2">
                  <Trophy className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="font-medium text-gray-900">Frontend Wizard</h3>
                <p className="text-sm text-gray-600">Level 3</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-pink-100 rounded-full flex items-center justify-center mb-2">
                  <Star className="w-8 h-8 text-pink-500" />
                </div>
                <h3 className="font-medium text-gray-900">GitHub Hero</h3>
                <p className="text-sm text-gray-600">10 Projects</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-2">
                  <Code className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="font-medium text-gray-900">API Master</h3>
                <p className="text-sm text-gray-600">Level 2</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-pink-100 rounded-full flex items-center justify-center mb-2">
                  <Brain className="w-8 h-8 text-pink-500" />
                </div>
                <h3 className="font-medium text-gray-900">Quick Learner</h3>
                <p className="text-sm text-gray-600">5 Day Streak 🔥</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnPage;