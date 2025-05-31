import React from 'react';
import { Code, Smartphone, Brain, Palette, Heart, Brain as MentalHealth, Rocket, GraduationCap, Plus } from 'lucide-react';

interface CommunitySidebarProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const categories = [
  { id: 'webdev', icon: Code, name: 'Web Dev', count: 2.5 },
  { id: 'appdev', icon: Smartphone, name: 'App Dev', count: 1.8 },
  { id: 'aiml', icon: Brain, name: 'AI/ML', count: 3.2 },
  { id: 'uiux', icon: Palette, name: 'UI/UX', count: 1.5 },
  { id: 'loveintech', icon: Heart, name: 'Love in Tech', count: 2.1 },
  { id: 'mentalhealth', icon: MentalHealth, name: 'Mental Health', count: 1.2 },
  { id: 'startups', icon: Rocket, name: 'Startups', count: 0.9 },
  { id: 'student', icon: GraduationCap, name: 'Student Zone', count: 4.2 }
];

const CommunitySidebar: React.FC<CommunitySidebarProps> = ({ selectedCategory, onCategorySelect }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <button className="w-full px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl flex items-center justify-center space-x-2 hover:shadow-lg transition-shadow duration-300">
          <Plus className="h-5 w-5" />
          <span>Create Community</span>
        </button>

        <div className="mt-6 space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategorySelect(category.id)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-pink-50 text-pink-600'
                  : 'hover:bg-gray-50 text-gray-700'
              }`}
            >
              <div className="flex items-center space-x-3">
                <category.icon className="h-5 w-5" />
                <span>{category.name}</span>
              </div>
              <span className="text-sm">{category.count}k</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunitySidebar;