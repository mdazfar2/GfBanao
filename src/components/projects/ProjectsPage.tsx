import React, { useState } from 'react';
import { Search, Plus, Star, Heart, MessageCircle, Share2, Github, ExternalLink, Users, Filter } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "AI-Powered Dating App",
    description: "A modern dating application using machine learning for better matches",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    techStack: ["React", "Python", "TensorFlow"],
    author: {
      name: "Ravishankar Kumar",
      image: "/ravishankar.webp",
      lookingToCollaborate: true
    },
    likes: 234,
    comments: 45,
    githubStars: 123
  },
  {
    id: 2,
    title: "Tech Couples Blog Platform",
    description: "Share your journey of finding love through technology",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    techStack: ["Next.js", "GraphQL", "MongoDB"],
    author: {
      name: "Anuj Gaurave",
      image: "/anuj.webp",
      lookingToCollaborate: false
    },
    likes: 189,
    comments: 32,
    githubStars: 87
  }
];

const featuredProjects = [
  {
    title: "Gf Banao Dating App",
    author: "Nitish & Raviranjan",
    image: "/ravi.webp",
    likes: 456
  },
  {
    title: "Code Together Platform",
    author: "Manikant & Aditya",
    image: "/aditya.webp",
    likes: 342
  }
];

const ProjectsPage = () => {
  const [selectedTechFilter, setSelectedTechFilter] = useState('all');
  const [sortBy, setSortBy] = useState('trending');

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Header Section */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Showcase your Work. Find Your Match in Code.
                </h1>
                <p className="text-lg text-gray-600">
                  Whether you're building solo or collaborating with a crush, your project deserves the spotlight.
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <button className="flex-shrink-0 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-medium hover:shadow-lg transition-shadow duration-200 flex items-center justify-center space-x-2">
                  <Plus className="w-5 h-5" />
                  <span>Upload Project</span>
                </button>
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search by project name, stack, or user..."
                    className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {['React', 'NodeJS', 'AI', 'OpenSource', 'CoupleProjects', 'Flutter', 'DevDating'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-pink-50 hover:text-pink-600 cursor-pointer transition-colors duration-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
                  />
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <img
                        src={project.author.image}
                        alt={project.author.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <h3 className="font-medium text-gray-900">{project.author.name}</h3>
                        {project.author.lookingToCollaborate && (
                          <span className="text-sm text-pink-600">Looking to Collaborate</span>
                        )}
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h2>
                    <p className="text-gray-600 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex space-x-4">
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-pink-600">
                          <Heart className="w-5 h-5" />
                          <span>{project.likes}</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-pink-600">
                          <MessageCircle className="w-5 h-5" />
                          <span>{project.comments}</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-pink-600">
                          <Github className="w-5 h-5" />
                          <span>{project.githubStars}</span>
                        </button>
                      </div>
                      <button className="px-4 py-2 bg-purple-50 text-purple-600 rounded-full hover:bg-purple-100 transition-colors duration-200">
                        Collaborate
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Filters */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Filter className="h-5 w-5 text-pink-500" />
                <h2 className="text-lg font-semibold">Filter Projects</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Tech Stack</h3>
                  <div className="space-y-2">
                    {['Frontend', 'Backend', 'Full Stack', 'AI', 'Mobile', 'DevOps'].map((tech) => (
                      <button
                        key={tech}
                        onClick={() => setSelectedTechFilter(tech.toLowerCase())}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                          selectedTechFilter === tech.toLowerCase()
                            ? 'bg-pink-50 text-pink-600'
                            : 'hover:bg-gray-50 text-gray-600'
                        }`}
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Sort By</h3>
                  <div className="space-y-2">
                    {[
                      { id: 'trending', label: '🔥 Trending' },
                      { id: 'recent', label: '🆕 Recently Added' },
                      { id: 'collaborating', label: '🤝 Looking for Collaborators' },
                      { id: 'couples', label: '❤️ Couple Projects' }
                    ].map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setSortBy(option.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                          sortBy === option.id
                            ? 'bg-pink-50 text-pink-600'
                            : 'hover:bg-gray-50 text-gray-600'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Projects */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Star className="h-5 w-5 text-pink-500" />
                <h2 className="text-lg font-semibold">Featured Projects</h2>
              </div>

              <div className="space-y-4">
                {featuredProjects.map((project, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative rounded-lg overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h4 className="font-medium">{project.title}</h4>
                        <div className="flex items-center text-sm">
                          <Users className="w-4 h-4 mr-1" />
                          <span>{project.author}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;