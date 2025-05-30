import React from 'react';
import { X, Heart, Star, Users } from 'lucide-react';

interface UserInfoPanelProps {
  user: any;
  onClose: () => void;
}

const UserInfoPanel: React.FC<UserInfoPanelProps> = ({ user, onClose }) => {
  return (
    <div className="w-80 border-l border-gray-200 bg-white">
      <div className="p-4 border-b flex items-center justify-between">
        <h3 className="font-medium">Profile Info</h3>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      <div className="p-4">
        <div className="text-center mb-6">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          />
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">Full Stack Developer</p>
          <div className="mt-2 flex items-center justify-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-sm text-gray-600">Online</span>
          </div>
        </div>

        <div className="space-y-6">
          {/* Tech Match */}
          <div className="text-center p-4 bg-pink-50 rounded-xl">
            <div className="text-3xl font-bold text-pink-600 mb-1">92%</div>
            <div className="text-sm text-gray-600">Tech Match</div>
          </div>

          {/* Tech Interests */}
          <div>
            <h4 className="font-medium mb-2">Tech Interests</h4>
            <div className="flex flex-wrap gap-2">
              {user.techInterests.map((interest: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            <button className="w-full px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:shadow-lg transition-shadow duration-200">
              View Full Profile
            </button>
            <button className="w-full px-4 py-2 border border-purple-400 text-purple-600 rounded-full hover:bg-purple-50 transition-colors duration-200">
              Collaborate on Project
            </button>
          </div>

          {/* Shared Media */}
          <div>
            <h4 className="font-medium mb-2">Shared Media</h4>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="aspect-square bg-gray-100 rounded-lg"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoPanel;