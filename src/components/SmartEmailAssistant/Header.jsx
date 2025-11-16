import React from 'react';
import { Mail } from 'lucide-react';

const Header = () => {
  return (
    <div className="text-center mb-8 animate-fade-in">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-600 rounded-xl blur-xl opacity-50"></div>
          <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-xl shadow-lg">
            <Mail className="w-8 h-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          SmartEmail Assistant
        </h1>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-lg">
        Generate professional email replies powered by AI
      </p>
    </div>
  );
};

export default Header;