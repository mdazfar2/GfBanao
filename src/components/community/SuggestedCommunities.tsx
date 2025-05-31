import React from 'react';
import { Users } from 'lucide-react';

const communities = [
  {
    name: "React Developers",
    members: 5600,
    description: "Share React tips, tricks, and best practices",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Tech Entrepreneurs",
    members: 3200,
    description: "Connect with fellow startup enthusiasts",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "UI/UX Design Hub",
    members: 4100,
    description: "Design discussions and feedback",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const SuggestedCommunities = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="font-semibold text-gray-900 mb-4">Suggested Communities</h3>
      <div className="space-y-4">
        {communities.map((community, index) => (
          <div
            key={index}
            className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={community.image}
                alt={community.name}
                className="w-full h-32 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-medium">{community.name}</h4>
                <div className="flex items-center text-sm">
                  <Users className="w-4 h-4 mr-1" />
                  <span>{community.members.toLocaleString()} members</span>
                </div>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-600">{community.description}</p>
            <button className="mt-2 w-full px-4 py-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors duration-200">
              Join Community
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedCommunities;