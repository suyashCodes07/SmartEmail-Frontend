import React from 'react';
import { Mail, Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <header className="mb-8 pb-6 border-b border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-slate-900 dark:bg-slate-100 rounded-xl">
            <Mail className="w-6 h-6 text-white dark:text-slate-900" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              SmartEmail Assistant
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              AI-powered email replies
            </p>
          </div>
        </div>

        {/* Right side info */}
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Sparkles className="w-4 h-4" />
          <span className="hidden sm:inline">Powered by Gemini AI</span>
        </div>
      </div>
    </header>
  );
};

export default Header;