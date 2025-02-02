import React from 'react';
import { Github, Linkedin, Twitter, ClipboardList } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-800 via-indigo-700 to-indigo-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <ClipboardList className="w-5 h-5" />
              <span className="font-bold text-sm">QuizMaster</span>
            </div>
            <span className="hidden sm:inline">|</span>
            <p className="text-sm">
              © {currentYear} All rights reserved
            </p>
          </div>

          <p className="text-sm md:text-base font-semibold tracking-wide flex items-center">
            Made with <span className="text-red-500 px-1 text-lg">❤️</span> by Prerna Mittal
          </p>

          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-200 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer