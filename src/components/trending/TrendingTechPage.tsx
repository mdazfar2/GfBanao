import React, { useState } from 'react';
import { Search, Heart, MessageCircle, Share2, Bookmark, Flame, Code, Brain, Palette, Globe, Rocket, ArrowRight, Users, Calendar } from 'lucide-react';

const tags = [
  { name: 'React', count: '2.5k' },
  { name: 'AI', count: '3.2k' },
  { name: 'Web3', count: '1.8k' },
  { name: 'Blockchain', count: '2.1k' },
  { name: 'Figma', count: '1.5k' },
  { name: 'TypeScript', count: '2.8k' },
  { name: 'OpenAI', count: '3.5k' },
  { name: 'DevOps', count: '1.9k' },
  { name: 'Flutter', count: '1.6k' },
  { name: 'Quantum', count: '1.2k' }
];

const trendingPosts = [
  {
    id: 1,
    title: "Why everyone is switching to Bun over Node.js",
    summary: "A deep dive into the performance benefits and developer experience improvements",
    image: "https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ['JavaScript', 'Performance', 'DevTools'],
    likes: 1234,
    comments: 89,
    author: {
      name: "Aditya Kumar",
      image: "/aditya.webp",
      badge: "🔥 Trend Scout"
    }
  },
  {
    id: 2,
    title: "AI-Powered Dating Algorithms: The Future of Match-Making",
    summary: "How machine learning is revolutionizing the way we find love in tech",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ['AI', 'Dating Tech', 'ML'],
    likes: 892,
    comments: 156,
    author: {
      name: "Anuj Gaurave",
      image: "/anuj.webp",
      badge: "🧠 AI Mentor"
    }
  }
];

const topCurators = [
  {
    name: "Ravishankar",
    image: "/ravishankar.webp",
    badge: "🔥 Trend Scout",
    tags: ['AI', 'WebDev']
  },
  {
    name: "Anjali Singh",
    image: "https://assets.unileversolutions.com/v1/134103152.jpg",
    badge: "🎙️ Tech Influencer",
    tags: ['Cloud', 'DevOps']
  }
];

const events = [
  {
    title: "Hack the Future: AI & Love",
    date: "Mar 15, 2024",
    time: "2:00 PM PST",
    status: "🔴 Live"
  },
  {
    title: "Tech Couples Mixer",
    date: "Mar 20, 2024",
    time: "6:00 PM PST",
    status: "🟢 Upcoming"
  }
];

const TrendingTechPage = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState('All');

  const tabs = ['All', 'Frameworks', 'AI/ML', 'DevTools', 'DatingTech', 'Stories'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Explore by Tags</h2>
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search tech topics..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                {tags.map((tag) => (
                  <button
                    key={tag.name}
                    onClick={() => setSelectedTag(tag.name)}
                    className={`w-full flex items-center justify-between px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedTag === tag.name
                        ? 'bg-pink-50 text-pink-600'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <span>{tag.name}</span>
                    <span className="text-sm text-gray-500">{tag.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Flame className="h-6 w-6 text-pink-500" />
                <h1 className="text-2xl font-bold">What's Hot Right Now</h1>
              </div>

              {/* Tabs */}
              <div className="flex space-x-4 overflow-x-auto pb-2">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors duration-300 ${
                      selectedTab === tab
                        ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Trending Posts */}
            {trendingPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <img
                      src={post.author.image}
                      alt={post.author.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900">{post.author.name}</h3>
                      <span className="text-sm text-pink-600">{post.author.badge}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.summary}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                      <button className="flex items-center space-x-2 text-gray-500 hover:text-pink-600">
                        <Heart className="h-5 w-5" />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-500 hover:text-pink-600">
                        <MessageCircle className="h-5 w-5" />
                        <span>{post.comments}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-500 hover:text-pink-600">
                        <Share2 className="h-5 w-5" />
                      </button>
                    </div>
                    <button className="text-gray-500 hover:text-pink-600">
                      <Bookmark className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Top Curators */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Top Curators</h2>
              <div className="space-y-4">
                {topCurators.map((curator, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <img
                      src={curator.image}
                      alt={curator.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{curator.name}</h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-pink-600">{curator.badge}</span>
                      </div>
                      <div className="flex gap-2 mt-1">
                        {curator.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm hover:bg-purple-100">
                      Follow
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900">{event.title}</h3>
                        <p className="text-sm text-gray-600">
                          {event.date} at {event.time}
                        </p>
                      </div>
                      <span className="text-sm font-medium">{event.status}</span>
                    </div>
                    <button className="mt-3 w-full px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:shadow-lg transition-shadow duration-200">
                      RSVP Now
                    </button>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-pink-600 text-sm font-medium hover:text-pink-700">
                View All Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingTechPage;