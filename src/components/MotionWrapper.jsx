import React from 'react';

export const FadeInWhenVisible = ({ children, delay = 0 }) => {
  return (
    <div 
      style={{ 
        animation: `fadeInUp 0.7s ease-out ${delay}s both` 
      }}
    >
      {children}
    </div>
  );
};

export const TiltCard = ({ children, className = '' }) => {
  return (
    <div className={`spotlight-card ${className}`}>
      {children}
    </div>
  );
};