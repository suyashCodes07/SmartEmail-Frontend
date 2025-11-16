import React from 'react';
import { Send } from 'lucide-react';
import { Card } from '../ui/Card';
import { PLACEHOLDER_EMAIL } from '../../utils/constants';

const EmailInput = ({ value, onChange }) => {
  return (
    <Card>
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
          <Send className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          Original Email
        </h2>
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={PLACEHOLDER_EMAIL}
        className="w-full h-64 p-4 bg-gray-50 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700 rounded-xl resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 dark:text-gray-200 placeholder-gray-400"
      />
    </Card>
  );
};

export default EmailInput;