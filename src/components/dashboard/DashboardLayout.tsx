import React, { useState, useEffect } from 'react';
import { useLocation, Routes, Route, Navigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Sidebar from './Sidebar';
import StartPost from './StartPost';
import TrendingTopics from './TrendingTopics';
import PeopleYouMayLike from './PeopleYouMayLike';
import Feed from './Feed';
import MatchesPage from '../matches/MatchesPage';
import LearnPage from '../learn/LearnPage';
import MessagesPage from '../messages/MessagesPage';
import CommunityPage from '../community/CommunityPage';
import TrendingTechPage from '../trending/TrendingTechPage';
import ProjectsPage from '../projects/ProjectsPage';
import SettingsPage from '../settings/SettingsPage';

const DashboardLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Extract the current page from the URL path
  const getCurrentPage = (path: string) => {
    const segments = path.split('/');
    return segments[2] || 'home';
  };

  const [currentPage, setCurrentPage] = useState(getCurrentPage(location.pathname));

  // Update currentPage when location changes
  useEffect(() => {
    setCurrentPage(getCurrentPage(location.pathname));
  }, [location]);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

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
      <Sidebar 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        onNavigate={handleNavigation}
      />

      {/* Main Content */}
      <div className="lg:ml-64 xl:ml-80">
        <Routes>
          <Route path="/" element={
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <StartPost />
                  <Feed />
                </div>
                <div className="space-y-6">
                  <TrendingTopics />
                  <PeopleYouMayLike />
                </div>
              </div>
            </div>
          } />
          <Route path="/matches" element={<MatchesPage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/trending" element={<TrendingTechPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </div>
  );
};

export default DashboardLayout;