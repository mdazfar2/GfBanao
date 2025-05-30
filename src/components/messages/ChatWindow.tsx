import React, { useState, useRef, useEffect } from 'react';
import { Phone, Video, MoreVertical, Smile, Paperclip, Mic, Send } from 'lucide-react';

// Mock messages for development
const mockMessages = [
  {
    id: 1,
    sender: 'them',
    content: "Hey! I saw your React project on GitHub. It's impressive! 🚀",
    timestamp: '10:30 AM',
    status: 'seen'
  },
  {
    id: 2,
    sender: 'me',
    content: "Thanks! I'm actually looking for collaborators. Would you be interested?",
    timestamp: '10:31 AM',
    status: 'seen'
  },
  {
    id: 3,
    sender: 'them',
    content: "Absolutely! I have experience with React and TypeScript. Maybe we could build something together?",
    timestamp: '10:32 AM',
    status: 'delivered'
  }
];

interface ChatWindowProps {
  chat: any;
  onInfoToggle: () => void;
}

const replyMap: { [key: number]: string } = {
  1: "Yes, it's working now! Let me know if you face any issues.",
  2: "Haha, finally! Let's start integrating the APIs.",
  3: "Sure, send me the error details and I'll take a look.",
  4: "Yes, I finished it last night. Want me to send it to you?",
  5: "Yes, I'll be there. See you in the meeting!",
  // Add more replies for more ids as needed
};

const ChatWindow: React.FC<ChatWindowProps> = ({ chat, onInfoToggle }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(mockMessages);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      sender: 'me',
      content: message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };

    setMessages([...messages, newMessage]);
    setMessage('');

    // Simulate reply based on chat id
    setTimeout(() => {
      const reply = {
        id: messages.length + 2,
        sender: 'them',
        content: replyMap[chat.id] || "That's great! Let's discuss more about it! 😊",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'sent'
      };
      setMessages(prev => [...prev, reply]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Header */}
      <div className="p-4 border-b flex items-center justify-between bg-white">
        <div className="flex items-center space-x-4">
          <img
            src={chat.avatar}
            alt={chat.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-medium text-gray-900">{chat.name}</h3>
            <div className="flex items-center space-x-2">
              {chat.techInterests.map((interest: string, index: number) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Phone className="h-5 w-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Video className="h-5 w-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full" onClick={onInfoToggle}>
            <MoreVertical className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                msg.sender === 'me'
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              <p>{msg.content}</p>
              <div className={`text-xs mt-1 ${
                msg.sender === 'me' ? 'text-white/70' : 'text-gray-500'
              }`}>
                {msg.timestamp}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t bg-white">
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Smile className="h-6 w-6 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Paperclip className="h-6 w-6 text-gray-600" />
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 rounded-full border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          />
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Mic className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={handleSend}
            className="p-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full hover:shadow-lg transition-shadow duration-200"
          >
            <Send className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatWindow;