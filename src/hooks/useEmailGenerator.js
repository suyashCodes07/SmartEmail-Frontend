import { useState } from 'react';
import geminiService from '../services/geminiService';

export const useEmailGenerator = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [generatedReply, setGeneratedReply] = useState('');

  const generateReply = async (originalEmail, tone) => {
    setIsLoading(true);
    setError(null);
    setGeneratedReply('');

    try {
      const reply = await geminiService.generateEmailReply(originalEmail, tone);
      setGeneratedReply(reply);
      return reply;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const clearReply = () => {
    setGeneratedReply('');
    setError(null);
  };

  return {
    generateReply,
    clearReply,
    generatedReply,
    isLoading,
    error
  };
};