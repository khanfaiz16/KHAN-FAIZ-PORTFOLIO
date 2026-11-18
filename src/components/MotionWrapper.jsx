import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Fades and lifts children into view the first time they scroll on screen.
export const FadeInWhenVisible = ({ children, delay = 0 }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
};

// Hover-spotlight card wrapper (the spotlight follows the cursor via CSS).
export const TiltCard = ({ children, className = '' }) => {
  return <div className={`spotlight-card ${className}`}>{children}</div>;
};
