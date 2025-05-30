import React, { useState } from 'react';
import { Search, Phone, Video, MoreVertical, Smile, Paperclip, Mic, Send, Star, Clock, Check, CheckCheck } from 'lucide-react';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';
import UserInfoPanel from './UserInfoPanel';

// Mock data for initial development - will be replaced with backend data
const mockChats = [
  {
    id: 1,
    name: "Aditya Kumar",
    avatar: "/aditya.webp",
    lastMessage: "Hey Azfar, Is it working or not?",
    timestamp: "5 mins ago",
    online: true,
    unread: 2,
    techInterests: ["React", "UI/UX", "TypeScript"],
    typing: true
  },
  {
    id: 2,
    name: "Nitish Jha",
    avatar: "/nitish.webp",
    lastMessage: "Whoah! Finally Apis are working!",
    timestamp: "2 hours ago",
    online: false,
    unread: 0,
    techInterests: ["AI", "OpenCV", "Azure"]
  },
  {
    id: 3,
    name: "Ravishankar",
    avatar: "/ravishankar.webp",
    lastMessage: "bhai, I am not able to connect to the server",
    timestamp: "2 hours ago",
    online: false,
    unread: 0,
    techInterests: ["Node.js", "MongoDB", "AWS"]
  },
  {
    id: 4,
    name: "Varsana",
    avatar: "https://1.bp.blogspot.com/-3L4emiui9oU/W2QKTV60dcI/AAAAAAAAQek/0y8omc2hJU46r9glrCkPv2Nyva3Tj32LQCLcBGAs/s1600/indian-beautiful-girls-hd-photos-14.jpg",
    lastMessage: "Azfar are you coming to the party?",
    timestamp: "2 hours ago",
    online: false,
    unread: 0,
    techInterests: ["Java", "React", "Node"]
  },
  {
    id: 5,
    name: "Raviranjan",
    avatar: "/ravi.webp",
    lastMessage: "Let's play basketball tomorrow at 5 PM",
    timestamp: "2 hours ago",
    online: false,
    unread: 0,
    techInterests: ["Python", "Docker", "AWS"]
  },
  // Add more mock chats as needed
];

const MessagesPage = () => {
  // State management
  const [selectedChat, setSelectedChat] = useState(mockChats[0]);
  const [showUserInfo, setShowUserInfo] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Handler functions
  const handleChatSelect = (chat: any) => {
    setSelectedChat(chat);
  };

  const toggleUserInfo = () => {
    setShowUserInfo(!showUserInfo);
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Left Sidebar - Chat List */}
      <div className="w-80 border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b">
          <h2 className="text-2xl font-semibold mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <ChatList 
          chats={mockChats} 
          selectedChat={selectedChat} 
          onChatSelect={handleChatSelect}
          searchQuery={searchQuery}
        />
      </div>

      {/* Main Chat Window */}
      <div className="flex-1 flex flex-col">
        <ChatWindow 
          chat={selectedChat}
          onInfoToggle={toggleUserInfo}
        />
      </div>

      {/* Right Sidebar - User Info */}
      {showUserInfo && (
        <UserInfoPanel 
          user={selectedChat}
          onClose={() => setShowUserInfo(false)}
        />
      )}
    </div>
  );
};

export default MessagesPage;