import React from 'react';
import { Loader2 } from 'lucide-react';

export const Loader = ({ size = 'md', text = 'Loading...' }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-10 h-10'
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <Loader2 className={`${sizes[size]} text-blue-600 animate-spin`} />
      {text && <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{text}</p>}
    </div>
  );
};