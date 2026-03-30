import React from 'react';
import { motion } from 'framer-motion';

/**
 * Wraps any button/element with a slow scale-breathe pulse + an outward glow ripple.
 * Draws attention calmly without any jarring movement.
 *
 * @param {string} glowColor - CSS color for the glow ripple (default: brand blue).
 */
export default function ShakeButton({ children, style, glowColor = 'rgba(35, 85, 202, 0.45)' }) {
  return (
    <motion.div
      animate={{ scale: [1, 1.04, 1] }}
      transition={{
        duration: 2.8,
        ease: [0.4, 0, 0.6, 1],
        repeat: Infinity,
        repeatDelay: 1.2,
        delay: 1.5,
      }}
      style={{
        display: 'inline-block',
        width: '100%',
        position: 'relative',
        ...style,
      }}
    >
      {/* Outward ripple ring */}
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.28], opacity: [0.55, 0] }}
        transition={{
          duration: 1.6,
          ease: 'easeOut',
          repeat: Infinity,
          repeatDelay: 2.4,
          delay: 1.5,
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: '9999px',
          background: glowColor,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </motion.div>
  );
}
