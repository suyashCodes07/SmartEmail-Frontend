// GeneratedReply.jsx
import React, { useState } from 'react';
import { Mail, Copy, Check } from 'lucide-react';
import { Card } from '../ui/Card';

const GeneratedReply = ({ reply, isLoading }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(reply);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl">
            <Mail className="w-5 h-5 text-slate-600 dark:text-slate-400" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
              Generated Reply
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              AI-powered response
            </p>
          </div>
        </div>
        
        {/* Copy button */}
        {reply && (
          <button
            onClick={handleCopy}
            className={`
              flex items-center gap-2 px-4 py-2 
              rounded-lg transition-all duration-200
              ${isCopied 
                ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900' 
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }
            `}
          >
            {isCopied ? (
              <>
                <Check className="w-4 h-4" />
                <span className="text-sm font-medium">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span className="text-sm font-medium">Copy</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Content Area */}
      <div className="relative">
        {/* Loading State */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-xl z-10">
            <div className="text-center">
              {/* Simple loading animation */}
              <div className="flex gap-1 justify-center mb-3">
                <div className="w-2 h-2 bg-slate-600 dark:bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-slate-600 dark:bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-slate-600 dark:bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Generating reply...
              </p>
            </div>
          </div>
        )}
        
        {/* Reply Content */}
        {reply ? (
          <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-4 max-h-[400px] overflow-y-auto">
            <pre className="whitespace-pre-wrap font-sans text-sm text-slate-900 dark:text-slate-100 leading-relaxed">
              {reply}
            </pre>
          </div>
        ) : (
          !isLoading && (
            <div className="bg-slate-50 dark:bg-slate-950 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl py-12 text-center">
              <Mail className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Your generated reply will appear here
              </p>
            </div>
          )
        )}
      </div>
    </Card>
  );
};

export default GeneratedReply;