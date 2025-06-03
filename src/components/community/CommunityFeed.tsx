import React from 'react';
import { Heart, MessageCircle, Share2, Pin } from 'lucide-react';

interface CommunityFeedProps {
  category: string;
  sortBy: string;
}

// Mock data for different categories
const categoryPosts = {
  webdev: [
    {
      id: 1,
      author: {
        name: "Priyanshi Jain",
        role: "Full Stack Developer",
        image: "https://th.bing.com/th/id/OIP.tkEKutVlMagfZOJn4_T8lQHaIv?cb=iwp2&rs=1&pid=ImgDetMain"
      },
      content: "Just launched my first React + Node.js project! Looking for feedback and maybe some collaboration opportunities. Check it out: github.com/azfar alam/awesome-project",
      tags: ["#React", "#NodeJS", "#OpenSource"],
      likes: 124,
      comments: 18,
      timeAgo: "2 hours ago"
    }
  ],
  appdev: [
    {
      id: 2,
      author: {
        name: "Aditya Kumar",
        role: "Mobile Developer",
        image: "/aditya.webp"
      },
      content: "Looking for beta testers for my new Flutter dating app! DM if interested 📱",
      tags: ["#Flutter", "#MobileApp", "#BetaTesters"],
      likes: 89,
      comments: 34,
      timeAgo: "1 hour ago"
    }
  ],
  aiml: [
    {
      id: 3,
      author: {
        name: "Azfar Alam",
        role: "AI Engineer",
        image: "/azfar.webp"
      },
      content: "Just implemented a dating recommendation engine using TensorFlow. The results are fascinating! Want to learn more about ML in dating apps?",
      tags: ["#AI", "#MachineLearning", "#TensorFlow"],
      likes: 256,
      comments: 42,
      timeAgo: "3 hours ago"
    }
  ],
  uiux: [
    {
      id: 4,
      author: {
        name: "Varsana Gabbi",
        role: "UX Designer",
        image: "https://1.bp.blogspot.com/-3L4emiui9oU/W2QKTV60dcI/AAAAAAAAQek/0y8omc2hJU46r9glrCkPv2Nyva3Tj32LQCLcBGAs/s1600/indian-beautiful-girls-hd-photos-14.jpg"
      },
      content: "Here's my latest dating app UI design. Focused on making the matching process more intuitive and engaging. Thoughts? 🎨",
      tags: ["#UI", "#UX", "#Design"],
      likes: 178,
      comments: 23,
      timeAgo: "4 hours ago"
    }
  ],
  loveintech: [
    {
      id: 5,
      author: {
        name: "Raviranjan Kr. Singh",
        role: "Software Engineer",
        image: "/ravi.webp"
      },
      content: "Met my girlfriend through pair programming! Who else found love while coding? ❤️",
      tags: ["#LoveStory", "#CodingLove", "#Success"],
      likes: 342,
      comments: 56,
      timeAgo: "5 hours ago"
    }
  ],
  mentalhealth: [
    {
      id: 6,
      author: {
        name: "Manikant Singh",
        role: "Tech Lead",
        image: "/mani.webp"
      },
      content: "Let's talk about burnout in tech and how to maintain work-life balance while dating. Share your experiences! 🧠",
      tags: ["#MentalHealth", "#WorkLifeBalance", "#TechLife"],
      likes: 289,
      comments: 45,
      timeAgo: "6 hours ago"
    }
  ],
  startups: [
    {
      id: 7,
      author: {
        name: "Ravishankar Kumar",
        role: "Startup Founder",
        image: "/ravishankar.webp"
      },
      content: "Looking for a technical co-founder for my dating app startup! Let's revolutionize online dating together 🚀",
      tags: ["#Startup", "#CoFounder", "#TechStartup"],
      likes: 156,
      comments: 67,
      timeAgo: "7 hours ago"
    }
  ],
  student: [
    {
      id: 8,
      author: {
        name: "Nitish Kumar",
        role: "CS Student",
        image: "/nitish.webp"
      },
      content: "Any other CS students looking for study buddies? Maybe we'll find love while debugging! 😊",
      tags: ["#CSStudent", "#StudyBuddies", "#StudentLife"],
      likes: 123,
      comments: 34,
      timeAgo: "8 hours ago"
    }
  ]
};

const CommunityFeed: React.FC<CommunityFeedProps> = ({ category, sortBy }) => {
  // Get posts based on selected category or show all posts if category is 'all'
  const posts = category === 'all' 
    ? Object.values(categoryPosts).flat()
    : categoryPosts[category as keyof typeof categoryPosts] || [];

  // Sort posts based on sortBy parameter
  const sortedPosts = [...posts].sort((a, b) => {
    if (sortBy === 'trending') {
      return b.likes - a.likes;
    }
    // For 'latest', sort by timeAgo (this is mock data, so it's simplified)
    return a.timeAgo.localeCompare(b.timeAgo);
  });

  return (
    <div className="space-y-6">
      {sortedPosts.map((post) => (
        <div key={post.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            {/* Author Info */}
            <div className="flex items-start space-x-4">
              <img
                src={post.author.image}
                alt={post.author.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium text-gray-900">{post.author.name}</h3>
                <p className="text-sm text-gray-500">{post.author.role}</p>
                <span className="text-xs text-gray-400">{post.timeAgo}</span>
              </div>
            </div>

            {/* Post Content */}
            <p className="mt-4 text-gray-800">{post.content}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex space-x-6">
                <button className="flex items-center space-x-2 text-gray-500 hover:text-pink-600 transition-colors duration-200">
                  <Heart className="h-5 w-5" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-500 hover:text-pink-600 transition-colors duration-200">
                  <MessageCircle className="h-5 w-5" />
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-500 hover:text-pink-600 transition-colors duration-200">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
              <button className="text-gray-500 hover:text-pink-600 transition-colors duration-200">
                <Pin className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommunityFeed;