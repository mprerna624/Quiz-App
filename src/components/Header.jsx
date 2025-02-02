import React, { useState } from 'react';
import { ClipboardList, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-800 via-indigo-700 to-indigo-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <ClipboardList className="w-8 h-8" />
            <span className="font-bold text-xl md:text-[27px]">QuizMaster</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="/" className="hover:text-blue-200 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-colors">Quizzes</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-colors">Leaderboard</a></li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden p-2 rounded-lg hover:bg-blue-600 transition-colors">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'} md:hidden overflow-hidden transition-all duration-300 ease-in-out`}>
          <nav className="py-2">
            <ul className="space-y-2 text-center">
              <li><a href="/"className="block px-3 py-2 rounded-lg hover:bg-blue-600 transition-colors" onClick={toggleMenu}>Home</a></li>
              <li><a href="#"className="block px-3 py-2 rounded-lg hover:bg-blue-600 transition-colors" onClick={toggleMenu}>Quizzes</a></li>
              <li><a href="#"className="block px-3 py-2 rounded-lg hover:bg-blue-600 transition-colors" onClick={toggleMenu}>Leaderboard</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header