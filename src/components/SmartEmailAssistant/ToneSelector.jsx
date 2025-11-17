import React, { useState } from 'react';
import { 
  Palette,
  Briefcase,
  Smile,
  Users,
  Zap,
  Heart,
  MessageSquare,
  Coffee,
  Check,
  Info
} from 'lucide-react';
import { Card } from '../ui/Card';

const ENHANCED_TONES = [
  { 
    id: 'professional', 
    label: 'Professional', 
    icon: Briefcase,
    description: 'Formal business communication',
    example: 'Dear Mr. Smith, I hope this email finds you well...'
  },
  { 
    id: 'friendly', 
    label: 'Friendly', 
    icon: Smile,
    description: 'Warm and approachable tone',
    example: 'Hi there! Thanks for reaching out...'
  },
  { 
    id: 'casual', 
    label: 'Casual', 
    icon: Coffee,
    description: 'Relaxed and conversational',
    example: 'Hey! Just wanted to follow up...'
  },
  { 
    id: 'confident', 
    label: 'Confident', 
    icon: Zap,
    description: 'Direct and assertive',
    example: 'I\'m certain we can achieve this...'
  },
  { 
    id: 'empathetic', 
    label: 'Empathetic', 
    icon: Heart,
    description: 'Understanding and supportive',
    example: 'I understand how you feel...'
  },
  { 
    id: 'collaborative', 
    label: 'Collaborative', 
    icon: Users,
    description: 'Team-oriented approach',
    example: 'Let\'s work together on this...'
  },
];

const ToneSelector = ({ selectedTone, onToneChange }) => {
  const [hoveredTone, setHoveredTone] = useState(null);
  const [showTooltip, setShowTooltip] = useState(null);

  return (
    <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
      {/* Header with info */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl">
            <Palette className="w-5 h-5 text-slate-600 dark:text-slate-400" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
              Select Tone
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              Choose how your reply should sound
            </p>
          </div>
        </div>
        
        {/* Info button */}
        <button
          className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          title="Click any tone to see an example"
        >
          <Info className="w-4 h-4 text-slate-400" />
        </button>
      </div>

      {/* Tone Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {ENHANCED_TONES.map((tone) => {
          const Icon = tone.icon;
          const isSelected = selectedTone === tone.label;

          return (
            <div key={tone.id} className="relative">
              <button
                onClick={() => onToneChange(tone.label)}
                onMouseEnter={() => setHoveredTone(tone.id)}
                onMouseLeave={() => setHoveredTone(null)}
                className={`
                  w-full p-4 rounded-xl
                  transition-all duration-200 ease-out
                  ${isSelected 
                    ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-md' 
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:shadow-md border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                  }
                `}
              >
                {/* Selected checkmark */}
                {isSelected && (
                  <div className="absolute top-2 right-2">
                    <Check className="w-4 h-4" />
                  </div>
                )}

                {/* Icon and label */}
                <div className="flex items-center gap-3">
                  <div className={`
                    p-2 rounded-lg
                    ${isSelected 
                      ? 'bg-white/10 dark:bg-slate-900/10' 
                      : 'bg-slate-100 dark:bg-slate-700'
                    }
                  `}>
                    <Icon className={`
                      w-5 h-5
                      ${isSelected 
                        ? 'text-white dark:text-slate-900' 
                        : 'text-slate-600 dark:text-slate-400'
                      }
                    `} />
                  </div>
                  
                  <div className="text-left flex-1">
                    <div className={`
                      font-medium text-sm
                      ${isSelected 
                        ? 'text-white dark:text-slate-900' 
                        : 'text-slate-900 dark:text-slate-100'
                      }
                    `}>
                      {tone.label}
                    </div>
                    <div className={`
                      text-xs mt-0.5
                      ${isSelected 
                        ? 'text-white/70 dark:text-slate-900/70' 
                        : 'text-slate-500 dark:text-slate-400'
                      }
                    `}>
                      {tone.description}
                    </div>
                  </div>
                </div>
              </button>

              {/* Tooltip with example */}
              {hoveredTone === tone.id && (
                <div className="absolute z-10 bottom-full left-0 right-0 mb-2 p-3 bg-slate-800 dark:bg-slate-700 text-white rounded-lg shadow-lg pointer-events-none">
                  <div className="text-xs font-medium mb-1">Example:</div>
                  <div className="text-xs opacity-90 italic">"{tone.example}"</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default ToneSelector;