import React from 'react';
import { Users, MessageCircle, Heart } from 'lucide-react';

const profiles = [
  {
    name: "Manikant Singh",
    role: "Frontend Developer",
    image: "/mani.webp",
    skills: ["React", "TypeScript"],
    match: 92
  },
  {
    name: "Kiran Pandey",
    role: "Frontend Developer",
    image: "https://img.freepik.com/premium-photo/headshot-photos-indian-women-dynamic-professions-occassions-indian-girl_978786-292.jpg",
    skills: ["React", "Tailwind CSS", "TypeScript"],
    match: 90
  },
  {
    name: "Anuj Gaurave",
    role: "UX Designer",
    image: "/anuj.webp",
    skills: ["Figma", "UI/UX"],
    match: 88
  }
];

const PeopleYouMayLike = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Users className="h-5 w-5 text-pink-500" />
        <h2 className="text-lg font-semibold">People You May Like</h2>
      </div>

      <div className="space-y-6">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="group transform transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start space-x-4">
              <img
                src={profile.image}
                alt={profile.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{profile.name}</h3>
                <p className="text-sm text-gray-500">{profile.role}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {profile.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-purple-50 text-purple-600 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm font-medium text-pink-600">
                    {profile.match}% Match
                  </span>
                  <div className="flex space-x-2">
                    <button className="p-1.5 text-gray-500 hover:text-pink-600 transition-colors duration-200">
                      <MessageCircle className="h-4 w-4" />
                    </button>
                    <button className="p-1.5 text-gray-500 hover:text-pink-600 transition-colors duration-200">
                      <Heart className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 px-4 py-2 text-pink-600 hover:text-pink-700 text-sm font-medium transition-colors duration-200">
        View more matches
      </button>
    </div>
  );
};

export default PeopleYouMayLike;