import React from 'react';
import { Sparkles } from 'lucide-react';
import { Card } from '../ui/Card';
import { TONES } from '../../utils/constants';

const ToneSelector = ({ selectedTone, onToneChange }) => {
  return (
    <Card>
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
          <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          Select Tone
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {TONES.map((tone) => (
          <button
            key={tone.id}
            onClick={() => onToneChange(tone.label)}
            className={`px-4 py-2.5 rounded-xl font-medium transition-all duration-200 ${
              selectedTone === tone.label
                ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg scale-105'
                : 'bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600'
            }`}
          >
            <span className="mr-2">{tone.icon}</span>
            {tone.label}
          </button>
        ))}
      </div>
    </Card>
  );
};

export default ToneSelector;