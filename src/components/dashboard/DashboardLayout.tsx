import React from 'react';
import { Home, GraduationCap, MessageCircle, Users, TrendingUp, Settings, Rocket, Menu, X } from 'lucide-react';
import Sidebar from './Sidebar';
import StartPost from './StartPost';
import TrendingTopics from './TrendingTopics';
import PeopleYouMayLike from './PeopleYouMayLike';
import Feed from './Feed';

const DashboardLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 right-4 z-50 md:hidden bg-white p-2 rounded-lg shadow-lg"
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <Sidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Main Content */}
      <div className="lg:ml-64 xl:ml-80">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Feed */}
            <div className="lg:col-span-2 space-y-6">
              <StartPost />
              <Feed />
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              <TrendingTopics />
              <PeopleYouMayLike />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;