import React, { useState } from 'react';
import { Sparkles, Trash2 } from 'lucide-react';
import { useEmailGenerator } from '../../hooks/useEmailGenerator';
import { Button } from '../ui/Button';
import Header from './Header';
import EmailInput from './EmailInput';
import ToneSelector from './ToneSelector';
import GeneratedReply from './GeneratedReply';

const SmartEmailAssistant = () => {
  const [originalEmail, setOriginalEmail] = useState('');
  const [tone, setTone] = useState('Professional');
  const { generateReply, clearReply, generatedReply, isLoading, error } = useEmailGenerator();

  const handleGenerateReply = async () => {
    if (!originalEmail.trim()) {
      alert('Please enter an email to reply to');
      return;
    }

    try {
      await generateReply(originalEmail, tone);
    } catch (err) {
      console.error('Error:', err);
    }
  };

  const handleClear = () => {
    setOriginalEmail('');
    clearReply();
    setTone('Professional');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="space-y-4">
            <EmailInput value={originalEmail} onChange={setOriginalEmail} />
            <ToneSelector selectedTone={tone} onToneChange={setTone} />
            
            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                onClick={handleGenerateReply}
                disabled={isLoading}
                variant="primary"
                className="flex-1"
              >
                {isLoading ? (
                  <>Loading...</>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Generate Reply
                  </>
                )}
              </Button>
              <Button onClick={handleClear} variant="secondary">
                <Trash2 className="w-5 h-5" />
                Clear
              </Button>
            </div>

            {error && (
              <div className="p-4 bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-800 rounded-lg">
                <p className="text-red-700 dark:text-red-400">{error}</p>
              </div>
            )}
          </div>

          {/* Output Section */}
          <GeneratedReply reply={generatedReply} isLoading={isLoading} />
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
          Powered by Gemini AI • Crafting perfect emails, one reply at a time
        </div>
      </div>
    </div>
  );
};

export default SmartEmailAssistant;