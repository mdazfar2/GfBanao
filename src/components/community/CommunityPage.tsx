import React, { useState } from 'react';
import { Search, TrendingUp, Clock, Plus, Heart, MessageCircle, Share2, Pin, Users, Star, Globe } from 'lucide-react';
import CommunityFeed from './CommunityFeed';
import CommunitySidebar from './CommunitySidebar';
import SuggestedCommunities from './SuggestedCommunities';

const CommunityPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('trending');

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Categories */}
          <CommunitySidebar 
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
          />

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Top Bar */}
            <div className="bg-white rounded-xl shadow-md p-4 mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search posts, topics, or users..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setSortBy('trending')}
                    className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
                      sortBy === 'trending'
                        ? 'bg-pink-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <TrendingUp className="h-4 w-4" />
                    <span>Trending</span>
                  </button>
                  <button
                    onClick={() => setSortBy('latest')}
                    className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
                      sortBy === 'latest'
                        ? 'bg-pink-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Clock className="h-4 w-4" />
                    <span>Latest</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Feed */}
            <CommunityFeed category={selectedCategory} sortBy={sortBy} />
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <SuggestedCommunities />

            {/* Active Users */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Active Now</h3>
                <span className="text-sm text-gray-500">245 online</span>
              </div>
              <div className="flex -space-x-2 overflow-hidden">
                {["aditya.webp", "anuj.webp", "azfar.webp", "mani.webp", "nitish.webp"].map((img, i) => (
                  <div key={i} className="relative">
                    <img
                      src={`/${img}`}
                      alt="User avatar"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-white" />
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center">
                  <span className="text-xs text-gray-600">+12</span>
                </div>
              </div>
            </div>

            {/* Top Contributors */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Top Contributors</h3>
              <div className="space-y-4">
                {[
                  { name: "Aditya", img: "aditya.webp", points: "2.5k" },
                  { name: "Anuj", img: "anuj.webp", points: "2.3k" },
                  { name: "Azfar", img: "azfar.webp", points: "2.1k" }
                ].map((contributor, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <img
                      src={`/${contributor.img}`}
                      alt={contributor.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{contributor.name}</h4>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>Top Mentor</span>
                      </div>
                    </div>
                    <span className="text-pink-500 font-medium">{contributor.points}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full p-4 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110">
        <Plus className="h-6 w-6" />
      </button>
    </div>
  );
};

export default CommunityPage;