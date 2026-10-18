import React from 'react';

/** Respiration lente et continue (sinusoïdale) pour attirer l'oeil. CSS only - keeps framer-motion off the critical path. */
export default function ShakeButton({ children, style }) {
  return (
    <span
      className="shake-button-pulse"
      style={{
        display: 'inline-block',
        width: 'fit-content',
        maxWidth: '100%',
        ...style,
      }}
    >
      {children}
    </span>
  );
}
