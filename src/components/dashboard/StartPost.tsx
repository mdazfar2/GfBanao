import React, { useState } from 'react';
import { Image, Link, Hash, Smile } from 'lucide-react';

interface StartPostProps {
  addPost: (content: string, tags: string[]) => void;
}

const StartPost: React.FC<StartPostProps> = ({ addPost }) => {
  const [postText, setPostText] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const suggestedTags = ['#WebDevelopment', '#AI', '#Blockchain', '#LoveInTech'];

  const handleAddTag = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handlePost = () => {
    if (postText.trim() !== '') {
      addPost(postText, selectedTags);
      setPostText('');
      setSelectedTags([]);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-start space-x-4">
        <img
          src="/azfar.webp"
          alt="Profile"
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <textarea
            placeholder="Share your tech achievements, ask for guidance, or find your perfect match..."
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            className="w-full min-h-[100px] p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
          />

          {selectedTags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {selectedTags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-4 flex items-center justify-between">
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-pink-600">
                <Image className="h-5 w-5" />
                <span>Photo</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-pink-600">
                <Link className="h-5 w-5" />
                <span>Link</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-pink-600">
                <Hash className="h-5 w-5" />
                <span>Tags</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-pink-600">
                <Smile className="h-5 w-5" />
                <span>Feeling</span>
              </button>
            </div>
            <button
              onClick={handlePost}
              className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:shadow-lg transition-shadow duration-200"
            >
              Post
            </button>
          </div>

          <div className="mt-4">
            <div className="text-sm text-gray-500 mb-2">Suggested tags:</div>
            <div className="flex flex-wrap gap-2">
              {suggestedTags.map((tag, index) => (
                <button
                  key={index}
                  onClick={() => handleAddTag(tag)}
                  className="px-3 py-1 bg-gray-100 hover:bg-pink-50 text-gray-600 hover:text-pink-600 rounded-full text-sm transition-colors duration-200"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPost;
