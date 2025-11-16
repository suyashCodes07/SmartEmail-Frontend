import React from 'react';

export const Card = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`glass-card p-6 transition-all duration-300 hover:shadow-2xl ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};