import React from 'react';
import { MessageCircle, Heart, Star } from 'lucide-react';

const profiles = [
  {
    name: "Nitish Kumar",
    role: "AI Specialist",
    status: "Looking for Tech Partner & Relationship",
    image: "https://media.licdn.com/dms/image/v2/D5635AQHNxpoD-IZXEA/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1735480978868?e=1742472000&v=beta&t=uazFAMVVgvFEGQVrh62ORRnumcv8nNhsk3xn5wuRlX0",
    skills: ["Python", "TensorFlow", "Deep Learning"],
    rating: 4.8
  },
  {
    name: "Manikant Singh",
    role: "Blockchain Enthusiast",
    status: "Open for Professional Connections",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGsJkLXOXLK7A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1705076777573?e=1747267200&v=beta&t=RAAcTKPom1iU-LpCmql6ZjqK742ZRQ7k4d5CEzqmytQ",
    skills: ["Solidity", "Web3", "Smart Contracts"],
    rating: 4.9
  },
  {
    name: "Divya Satpute",
    role: "DevOps Maestro",
    status: "Interested in Networking & Dating",
    image: "https://media.licdn.com/dms/image/v2/D4D35AQHaPC4x5uP8qA/profile-framedphoto-shrink_800_800/B4DZTrCvvUG4Ak-/0/1739110153438?e=1742472000&v=beta&t=C7BVfxLaYafAm-Zc4MeBA3FrwQ3a3Z8mDdL-NALA27g",
    skills: ["Kubernetes", "Kiali", "Ingress"],
    rating: 4.7
  }
];

const TrendingProfiles = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trending Tech Enthusiasts
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with highly skilled individuals who are looking for meaningful relationships
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative p-6">
                <div className="flex items-start justify-between mb-6">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-gray-700 font-medium">{profile.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {profile.name}
                </h3>
                <p className="text-pink-600 font-medium mb-2">{profile.role}</p>
                <p className="text-gray-600 text-sm mb-4">{profile.status}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {profile.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-pink-50 text-pink-600 rounded-full hover:bg-pink-100 transition-colors duration-300">
                    <MessageCircle className="w-4 h-4" />
                    <span>Message</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-purple-50 text-purple-600 rounded-full hover:bg-purple-100 transition-colors duration-300">
                    <Heart className="w-4 h-4" />
                    <span>Connect</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 text-lg font-medium rounded-full border-2 border-purple-400 text-purple-600 hover:bg-purple-50 transform transition-all duration-300 hover:scale-105">
            View All Profiles
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingProfiles;