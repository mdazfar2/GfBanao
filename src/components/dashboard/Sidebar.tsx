import React from 'react';
import { Home, GraduationCap, Heart, MessageCircle, Users, TrendingUp, Settings, Rocket } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: Home, label: 'Home', href: '#' },
  { icon: GraduationCap, label: 'Learn', href: '#' },
  { icon: Heart, label: 'Matches', href: '#' },
  { icon: MessageCircle, label: 'Messages', href: '#' },
  { icon: Users, label: 'Community', href: '#' },
  { icon: TrendingUp, label: 'Trending Tech', href: '#' },
  { icon: Rocket, label: 'Projects', href: '#' },
  { icon: Settings, label: 'Settings', href: '#' },
];

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
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
            <img src="/gfbanao.png" alt="GfBanao Logo" className="h-10 w-10" />
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              GfBanao
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Profile Section */}
        <div className="p-4 border-t">
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-pink-50 transition-colors duration-200 cursor-pointer">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQEP_ERr1vHOfw/profile-displayphoto-shrink_800_800/B56ZRLeTnpHIAc-/0/1736433039697?e=1747267200&v=beta&t=zww0a3-FihNvOl_oPYOO6x8fdEiOOLgFQMz-x-s6L8k"
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