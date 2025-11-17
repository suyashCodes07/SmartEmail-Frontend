import React, { useState } from 'react';
import { Sparkles, Trash2, AlertCircle, Send, RefreshCw } from 'lucide-react';
import { useEmailGenerator } from '../../hooks/useEmailGenerator';
import { Button } from '../ui/Button';
import Header from './Header';
import EmailInput from './EmailInput';
import ToneSelector from './ToneSelector';
import GeneratedReply from './GeneratedReply';

const SmartEmailAssistant = () => {
  const [originalEmail, setOriginalEmail] = useState('');
  const [tone, setTone] = useState('Professional');
  const [showSuccess, setShowSuccess] = useState(false);
  const { generateReply, clearReply, generatedReply, isLoading, error } = useEmailGenerator();

  const handleGenerateReply = async () => {
    if (!originalEmail.trim()) {
      return;
    }

    try {
      await generateReply(originalEmail, tone);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (err) {
      console.error('Error:', err);
    }
  };

  const handleClear = () => {
    setOriginalEmail('');
    clearReply();
    setTone('Professional');
  };

  const handleRegenerateReply = async () => {
    if (!originalEmail.trim()) return;
    await generateReply(originalEmail, tone);
  };

  const isEmailEmpty = !originalEmail.trim();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/25 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />
      
      <div className="relative p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <Header />

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Input Section */}
            <div className="space-y-5">
              {/* Email Input */}
              <EmailInput value={originalEmail} onChange={setOriginalEmail} />
              
              {/* Tone Selector */}
              <ToneSelector selectedTone={tone} onToneChange={setTone} />
              
              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handleGenerateReply}
                  disabled={isLoading || isEmailEmpty}
                  className={`
                    flex-1 flex items-center justify-center gap-2 
                    px-5 py-3.5 rounded-xl font-medium
                    transition-all duration-200
                    ${isEmailEmpty
                      ? 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed'
                      : isLoading
                      ? 'bg-slate-700 dark:bg-slate-600 text-white cursor-wait'
                      : 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 shadow-sm hover:shadow-md'
                    }
                  `}
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Generate Reply
                    </>
                  )}
                </button>
                
                <button
                  onClick={handleClear}
                  className="px-5 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200 flex items-center gap-2"
                >
                  <Trash2 className="w-5 h-5" />
                  <span className="hidden sm:inline">Clear</span>
                </button>
              </div>

              {/* Status Messages */}
              {/* Error Message */}
              {error && (
                <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 rounded-xl animate-fade-in">
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-red-900 dark:text-red-400">
                      Unable to generate reply
                    </p>
                    <p className="text-sm text-red-700 dark:text-red-500 mt-1">
                      {error}
                    </p>
                  </div>
                </div>
              )}

              {/* Empty State Helper */}
              {isEmailEmpty && !error && (
                <div className="p-4 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <AlertCircle className="w-4 h-4" />
                    Please enter an email to generate a reply
                  </div>
                </div>
              )}

              {/* Success Message */}
              {showSuccess && generatedReply && (
                <div className="p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 rounded-xl animate-fade-in">
                  <div className="flex items-center gap-2 text-sm text-green-700 dark:text-green-400">
                    <Sparkles className="w-4 h-4" />
                    Reply generated successfully!
                  </div>
                </div>
              )}

              {/* Quick Stats */}
              {originalEmail && (
                <div className="grid grid-cols-3 gap-3 p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                      {originalEmail.split(' ').length}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Words</div>
                  </div>
                  <div className="text-center border-x border-slate-200 dark:border-slate-700">
                    <div className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                      {tone}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Tone</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                      AI
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Powered</div>
                  </div>
                </div>
              )}
            </div>

            {/* Output Section */}
            <div className="space-y-5">
              <GeneratedReply reply={generatedReply} isLoading={isLoading} />
              
              {/* Regenerate Button */}
              {generatedReply && !isLoading && (
                <button
                  onClick={handleRegenerateReply}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  Regenerate Reply
                </button>
              )}
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <Sparkles className="w-4 h-4" />
                <span>Powered by Gemini AI</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                <span>Crafting perfect emails, one reply at a time</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default SmartEmailAssistant;