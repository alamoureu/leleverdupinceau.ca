import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/** Respiration lente et continue (sinusoïdale) pour attirer l'oeil sans effet de glow. */
export default function ShakeButton({ children, style }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={reduceMotion ? undefined : { scale: [1, 1.025, 1] }}
      transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
      style={{
        display: 'inline-block',
        width: '100%',
        willChange: 'transform',
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}
