import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faHeart,
  faMapMarkerAlt,
  faCommentDots,
  faStar,
  faUsers,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons';

const matches = [
  {
    id: 1,
    name: "Aisha Khan",
    role: "Frontend Developer",
    location: "Pune",
    image: "https://starsbio.com.ng/wp-content/uploads/2024/09/aisha-1.png",
    interests: ["React", "UI/UX", "TypeScript", "Travel"],
    matchPercentage: 92
  },
  {
    id: 2,
    name: "Anushka Patel",
    role: "AI Engineer",
    location: "Gurgaon",
    image: "https://th.bing.com/th/id/OIP.tkEKutVlMagfZOJn4_T8lQHaIv?cb=iwp2&rs=1&pid=ImgDetMain",
    interests: ["Python", "Machine Learning", "Gaming"],
    matchPercentage: 88
  },
  {
    id: 3,
    name: "Aditya Kumar",
    role: "Full Stack Developer",
    location: "Jaipur",
    image: "https://images.unsplash.com/photo-1592009309602-1dde752490ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    interests: ["Node.js", "React", "Docker", "Music"],
    matchPercentage: 85
  },
  {
    id: 4,
    name: "Priyanshi Jain",
    role: "Java Developer",
    location: "Delhi",
    image: "https://th.bing.com/th/id/OIP.N8vZYvc_mwJj7tQRQAP1pgHaLG?cb=iwp2&rs=1&pid=ImgDetMain",
    interests: ["Node.js", "React", "Docker", "Music"],
    matchPercentage: 75
  },
  {
    id: 5,
    name: "Lakshay Sharma",
    role: "DevOps Engineer",
    location: "Banglore",
    image: "https://th.bing.com/th/id/OIP.PZsMLTIgXaEsdCA0VjTo7gHaLH?cb=iwp2&rs=1&pid=ImgDetMain",
    interests: ["Docker", "Linux", "CICD", "Ansible","Kubernetes"],
    matchPercentage: 64
  },
  {
    id: 6,
    name: "Amisha Bunkar",
    role: "Python Developer",
    location: "Jaipur",
    image: "https://1.bp.blogspot.com/-8OsRA8SUuDY/W2RJ57vG50I/AAAAAAAAQnE/bHqynmzGWIEQ1CQk5an4-spoaIQd8ZpGQCLcBGAs/s860/Nithya-Shetty-4.jpg",
    interests: ["Python", "AI", "Docker", "ML"],
    matchPercentage: 90
  }
];

const topMatches = [
  {
    name: "Manikant",
    role: "UX Designer",
    matchPercentage: 95,
    image: "/mani.webp"
  },
  {
    name: "Anuj",
    role: "Backend Developer",
    matchPercentage: 93,
    image: "/anuj.webp"
  }
];

const MatchesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">💘 Your Matches</h1>
              <p className="text-lg text-gray-600">People who share your tech passion and your heart.</p>
            </div>

            {/* Search/Filter Bar */}
            <div className="bg-white rounded-xl shadow-md p-4 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search matches..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
                <select className="px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                  <option>Location</option>
                  <option>Jaipur</option>
                  <option>Delhi</option>
                  <option>Pune</option>
                  <option>Gurgaon</option>
                  <option>Banglore</option>
                  
                </select>
                <select className="px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                  <option>Tech Stack</option>
                  <option>Frontend</option>
                  <option>Backend</option>
                  <option>Full Stack</option>
                  <option>DevOps</option>
                </select>
              </div>
            </div>

            {/* Matches Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matches.map((match) => (
                <div
                  key={match.id}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <img
                        src={match.image}
                        alt={match.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                      />
                      <span className="px-4 py-2 bg-pink-50 text-pink-600 rounded-full text-sm font-medium">
                        💖 {match.matchPercentage}% Match
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{match.name}</h3>
                    <p className="text-gray-600 mb-2">{match.role}</p>
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4 mr-1" />
                      {match.location}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {match.interests.map((interest, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:shadow-lg transition-shadow duration-200">
                        <FontAwesomeIcon icon={faCommentDots} className="w-4 h-4" />
                        <span>Message</span>
                      </button>
                      <button className="flex items-center justify-center px-4 py-2 border-2 border-purple-400 text-purple-600 rounded-full hover:bg-purple-50 transition-colors duration-200">
                        <FontAwesomeIcon icon={faHeart} className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Top Matches Today */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center space-x-2 mb-6">
                <FontAwesomeIcon icon={faStar} className="h-5 w-5 text-pink-500" />
                <h2 className="text-lg font-semibold">Top Matches Today</h2>
              </div>
              <div className="space-y-4">
                {topMatches.map((match, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <img
                      src={match.image}
                      alt={match.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{match.name}</h3>
                      <p className="text-sm text-gray-500">{match.role}</p>
                    </div>
                    <span className="text-pink-600 font-medium">{match.matchPercentage}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tip of the Day */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center space-x-2 mb-4">
                <FontAwesomeIcon icon={faLightbulb} className="h-5 w-5 text-yellow-500" />
                <h2 className="text-lg font-semibold">Tip of the Day</h2>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Engage in meaningful conversations! Start by asking about their latest project or favorite tech trend.
              </p>
            </div>

            {/* People Who Liked You */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center space-x-2 mb-6">
                <FontAwesomeIcon icon={faUsers} className="h-5 w-5 text-pink-500" />
                <h2 className="text-lg font-semibold">People Who Liked You</h2>
              </div>
              <div className="flex -space-x-2">
                <img
                  src="/nitish.webp"
                  alt="Profile"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="https://images.rawpixel.com/image_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA4L3Jhd3BpeGVsX29mZmljZV8zNV9iZWF1dGlmdWxfc21pbGluZ195b3VuZ19pbmRpYW5fYnVzaW5lc3Nfd29tYV8yYWM3MjMyNS1jZmU3LTQ5ODgtODBkNi03YjViZTg3ODYzNjNfMS5qcGc.jpg"
                  alt="Profile"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="/ravi.webp"
                  alt="Profile"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <div className="w-8 h-8 rounded-full bg-pink-100 border-2 border-white flex items-center justify-center">
                  <span className="text-xs text-pink-600 font-medium">+5</span>
                </div>
              </div>
              <button className="w-full mt-4 text-pink-600 text-sm font-medium hover:text-pink-700">
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchesPage;