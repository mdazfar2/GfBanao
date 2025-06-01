import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faGraduationCap,
  faHeart,
  faMessage,
  faUsers,
  faChartLine,
  faCog,
  faRocket
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
}

const menuItems = [
  { id: 'home', icon: faHome, label: 'Home', path: '/dashboard' },
  { id: 'learn', icon: faGraduationCap, label: 'Learn', path: '/dashboard/learn' },
  { id: 'matches', icon: faHeart, label: 'Matches', path: '/dashboard/matches' },
  { id: 'messages', icon: faMessage, label: 'Messages', path: '/dashboard/messages' },
  { id: 'community', icon: faUsers, label: 'Community', path: '/dashboard/community' },
  { id: 'trending', icon: faChartLine, label: 'Trending Tech', path: '/dashboard/trending' },
  { id: 'projects', icon: faRocket, label: 'Projects', path: '/dashboard/projects' },
  { id: 'settings', icon: faCog, label: 'Settings', path: '/dashboard/settings' },
];

const Sidebar = ({ isOpen, onClose, onNavigate }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (itemId: string, path: string) => {
    onNavigate(itemId);
    navigate(path);
    onClose();
  };

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 w-64 xl:w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}
    >
      <div className="h-full flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b">
          <div className="flex items-center space-x-2">
            <img src="/gfbanao.png" alt="GfBanao Logo" className="h-9 w-9 rounded" />
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              GfBanao
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleClick(item.id, item.path)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'bg-pink-50 text-pink-600'
                      : 'text-gray-700 hover:bg-pink-50 hover:text-pink-600'
                  }`}
                >
                  <FontAwesomeIcon icon={item.icon} className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Profile Section */}
        <div className="p-4 border-t">
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-pink-50 transition-colors duration-200 cursor-pointer">
            <img
              src="/azfar.webp"
              alt="Profile"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <div className="font-medium text-gray-900">Azfar Alam</div>
              <div className="text-sm text-gray-500">Web Developer</div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;