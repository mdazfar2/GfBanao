import React from 'react';
import { Check, CheckCheck } from 'lucide-react';

interface ChatListProps {
  chats: any[];
  selectedChat: any;
  onChatSelect: (chat: any) => void;
  searchQuery: string;
}

const ChatList: React.FC<ChatListProps> = ({ chats, selectedChat, onChatSelect, searchQuery }) => {
  // Filter chats based on search query
  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 overflow-y-auto">
      {filteredChats.map((chat) => (
        <div
          key={chat.id}
          className={`p-4 cursor-pointer transition-all duration-200 hover:bg-gray-50 ${
            selectedChat?.id === chat.id ? 'bg-pink-50' : ''
          }`}
          onClick={() => onChatSelect(chat)}
        >
          <div className="flex items-start space-x-3">
            <div className="relative">
              <img
                src={chat.avatar}
                alt={chat.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              {chat.online && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className={`font-medium ${chat.unread ? 'text-gray-900' : 'text-gray-700'}`}>
                  {chat.name}
                </h3>
                <span className="text-xs text-gray-500">{chat.timestamp}</span>
              </div>
              <div className="flex items-center space-x-2">
                <p className={`text-sm truncate ${
                  chat.unread ? 'text-gray-900 font-medium' : 'text-gray-500'
                }`}>
                  {chat.lastMessage}
                </p>
                {chat.unread > 0 && (
                  <span className="flex-shrink-0 w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white">{chat.unread}</span>
                  </span>
                )}
              </div>
              {chat.typing && (
                <div className="text-sm text-pink-500 mt-1">typing...</div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;