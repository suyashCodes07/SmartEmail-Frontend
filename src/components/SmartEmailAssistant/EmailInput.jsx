// EmailInput.jsx
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Card } from '../ui/Card';
import { PLACEHOLDER_EMAIL } from '../../utils/constants';

const EmailInput = ({ value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  const charCount = value?.length || 0;

  return (
    <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl">
          <Send className="w-5 h-5 text-slate-600 dark:text-slate-400" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            Original Email
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            Compose your message
          </p>
        </div>
      </div>

      {/* Textarea */}
      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={PLACEHOLDER_EMAIL}
          maxLength={2000}
          className={`
            w-full h-64 p-4
            bg-slate-50 dark:bg-slate-950
            border rounded-xl resize-none
            transition-all duration-200 ease-out
            text-slate-900 dark:text-slate-100
            placeholder-slate-400 dark:placeholder-slate-500
            focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-600 focus:border-transparent
            ${isFocused 
              ? 'border-slate-900 dark:border-slate-600' 
              : 'border-slate-200 dark:border-slate-800'
            }
          `}
        />
        
        {/* Character count */}
        {charCount > 0 && (
          <div className="absolute bottom-3 right-3">
            <span className="text-xs text-slate-400 dark:text-slate-500">
              {charCount} / 2000
            </span>
          </div>
        )}
      </div>
    </Card>
  );
};

export default EmailInput;