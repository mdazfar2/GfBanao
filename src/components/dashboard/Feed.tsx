import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCommentDots,
  faHeart as faSolidHeart,
  faShare,
  faBookmark
} from '@fortawesome/free-solid-svg-icons';

const posts = [
  {
    id: 1,
    author: {
      name: "Nitish Kumar",
      role: "Full Stack Developer",
      image: "/nitish.webp"
    },
    content: "Just completed my first full-stack project using React and Node.js! Looking for someone to review my code and maybe grab a coffee? 😊",
    tags: ["#WebDevelopment", "#React", "#NodeJS"],
    likes: 124,
    comments: 18,
    timeAgo: "2 hours ago"
  },
  {
    id: 2,
    author: {
      name: "Raviranjan Kumar",
      role: "AI Engineer",
      image: "ravi.webp"
    },
    content: "Found my perfect match on GfBanao! Both of us are AI enthusiasts and now we're building a startup together. Dreams do come true! ❤️",
    tags: ["#LoveInTech", "#AI", "#Success"],
    likes: 256,
    comments: 42,
    timeAgo: "5 hours ago"
  },
  {
    id: 3,
    author: {
      name: "Vanshika Singh",
      role: "Full Stack Developer",
      image: "https://www.shutterstock.com/image-photo/close-portrait-beautiful-young-attractive-260nw-1522695962.jpg"
    },
    content: "Excited to share that I have completed my major project with my loved ones, found on GfBanao. I really enjoyed it and learned a lot about backend and APIs. 😊",
    tags: ["#WebDevelopment", "#Next.js", "#NodeJS", "API"],
    likes: 237,
    comments: 74,
    timeAgo: "9 hours ago"
  }
];

const Feed = () => {
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-xl shadow-md p-6">
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
                className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Engagement */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex space-x-6">
              <button className="flex items-center space-x-2 text-gray-500 hover:text-pink-600 transition-colors duration-200">
                <FontAwesomeIcon icon={faSolidHeart} className="h-5 w-5" />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-500 hover:text-pink-600 transition-colors duration-200">
                <FontAwesomeIcon icon={faCommentDots} className="h-5 w-5" />
                <span>{post.comments}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-500 hover:text-pink-600 transition-colors duration-200">
                <FontAwesomeIcon icon={faShare} className="h-5 w-5" />
              </button>
            </div>
            <button className="text-gray-500 hover:text-pink-600 transition-colors duration-200">
              <FontAwesomeIcon icon={faBookmark} className="h-5 w-5" />
            </button>
          </div>

          {/* Comment Input */}
          <div className="mt-4 flex items-center space-x-3">
            <img
              src="/azfar.webp"
              alt="Your profile"
              className="h-8 w-8 rounded-full object-cover"
            />
            <input
              type="text"
              placeholder="Write a comment..."
              className="flex-1 px-4 py-2 rounded-full border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;