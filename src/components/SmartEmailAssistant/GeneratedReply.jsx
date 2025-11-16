import React, { useState } from 'react';
import { Mail, Copy, CheckCircle } from 'lucide-react';
import { Card } from '../ui/Card';
import { Loader } from '../ui/Loader';

const GeneratedReply = ({ reply, isLoading }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(reply);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <Card className="h-fit">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
            <Mail className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Generated Reply
          </h2>
        </div>
        {reply && (
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 rounded-lg transition-all duration-200"
          >
            {isCopied ? (
              <>
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-600">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Copy</span>
              </>
            )}
          </button>
        )}
      </div>

      <div className="relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl z-10">
            <Loader text="Crafting your reply..." />
          </div>
        )}
        
        <div className={`transition-all duration-500 ${reply ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          {reply ? (
            <div className="bg-gray-50 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700 rounded-xl p-4 max-h-[400px] overflow-y-auto custom-scrollbar">
              <pre className="whitespace-pre-wrap font-sans text-gray-800 dark:text-gray-200 leading-relaxed">
                {reply}
              </pre>
            </div>
          ) : (
            <div className="bg-gray-50 dark:bg-slate-900/50 border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-xl p-12 text-center">
              <Mail className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500 dark:text-gray-400">
                Your generated reply will appear here
              </p>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default GeneratedReply;