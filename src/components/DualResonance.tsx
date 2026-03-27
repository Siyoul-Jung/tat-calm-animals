// src/components/DualResonance.tsx
'use client';

import { motion } from 'framer-motion';

export default function DualResonance() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <svg 
        viewBox="0 0 200 120" 
        className="w-full h-full"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connection Bridge (The Neural Link) */}
        <motion.path
          d="M60 60 Q 100 40, 140 60"
          stroke="url(#bridgeGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4 8"
          animate={{
            strokeDashoffset: [0, -24],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.path
          d="M60 60 Q 100 80, 140 60"
          stroke="url(#bridgeGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4 8"
          animate={{
            strokeDashoffset: [0, 24],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Resonance Ripples - Bidirectional */}
        {[15, 25, 35].map((r, i) => (
          <g key={`ripples-${i}`}>
            {/* Left Node Ripples (Animal) */}
            <motion.circle
              cx="60"
              cy="60"
              r={r}
              stroke="currentColor"
              className="text-brand/20"
              strokeWidth="0.5"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
            {/* Right Node Ripples (Human) */}
            <motion.circle
              cx="140"
              cy="60"
              r={r}
              stroke="currentColor"
              className="text-brand/20"
              strokeWidth="0.5"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          </g>
        ))}

        {/* Central Interference Zone (Sync Point) */}
        <motion.circle
          cx="100"
          cy="60"
          r="8"
          fill="url(#syncGradient)"
          animate={{
            scale: [0.8, 1.3, 0.8],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
             duration: 2,
             repeat: Infinity,
             ease: "easeInOut"
          }}
        />

        {/* Left Node (Animal) */}
        <motion.g
          animate={{ x: [0, 2, 0], y: [0, -2, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="60" cy="60" r="12" fill="url(#coreGradient)" />
          <motion.circle
            cx="60"
            cy="60"
            r="4"
            fill="white"
            animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.5, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.g>

        {/* Right Node (Human) */}
        <motion.g
          animate={{ x: [0, -2, 0], y: [0, 2, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <circle cx="140" cy="60" r="12" fill="url(#coreGradient)" />
          <motion.circle
            cx="140"
            cy="60"
            r="4"
            fill="white"
            animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.5, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
        </motion.g>

        {/* Gradients */}
        <defs>
          <radialGradient id="coreGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 60) rotate(90) scale(12)">
            <stop stopColor="#F47216" />
            <stop offset="1" stopColor="#F47216" stopOpacity="0.3" />
          </radialGradient>
          <radialGradient id="syncGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(100 60) rotate(90) scale(15)">
            <stop stopColor="#F47216" stopOpacity="0.6" />
            <stop offset="1" stopColor="#F47216" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="bridgeGradient" x1="60" y1="60" x2="140" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F47216" stopOpacity="0.2" />
            <stop offset="0.5" stopColor="#F47216" />
            <stop offset="1" stopColor="#F47216" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
