import React, { useState } from 'react';
import { Book, Music, History, Users, Calculator, User, LogOut, Settings } from 'lucide-react';

interface DashboardProps {
  username: string;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ username, onLogout }) => {
  const [selectedSection, setSelectedSection] = useState('mathematics');
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const sections = [
    { name: 'mathematics', icon: Calculator, content: 'Mathematics content goes here.' },
    { name: 'physics', icon: Book, content: 'Physics content goes here.' },
    { name: 'music', icon: Music, content: 'Music content goes here.' },
    { name: 'history', icon: History, content: 'History content goes here.' },
    { name: 'civics', icon: Users, content: 'Civics content goes here.' },
  ];

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleEditProfile = () => {
    // Implement edit profile functionality
    console.log('Edit profile clicked');
    setIsProfileMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Welcome, {username}!</h1>
          <div className="flex items-center">
            <nav className="mr-4">
              {sections.map((section) => (
                <button
                  key={section.name}
                  onClick={() => setSelectedSection(section.name)}
                  className={`mx-2 p-2 rounded-md ${
                    selectedSection === section.name ? 'bg-blue-700' : 'hover:bg-blue-700'
                  }`}
                >
                  <section.icon className="inline-block mr-1" size={20} />
                  {section.name.charAt(0).toUpperCase() + section.name.slice(1)}
                </button>
              ))}
            </nav>
            <div className="relative">
              <button
                onClick={toggleProfileMenu}
                className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
              >
                <User size={24} />
              </button>
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <button
                    onClick={handleEditProfile}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    <Settings className="inline-block mr-2" size={16} />
                    Edit Profile
                  </button>
                  <button
                    onClick={onLogout}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    <LogOut className="inline-block mr-2" size={16} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto mt-8 p-4">
        <h2 className="text-3xl font-bold mb-4">
          {selectedSection.charAt(0).toUpperCase() + selectedSection.slice(1)}
        </h2>
        <p className="text-lg">
          {sections.find((section) => section.name === selectedSection)?.content}
        </p>
      </main>

      <footer className="bg-gray-200 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Visit Website
          </a>
          <a
            href="https://www.paypal.com/donate"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
          >
            Donate with PayPal
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;