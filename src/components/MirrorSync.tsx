// src/components/MirrorSync.tsx
'use client';

import { motion } from 'framer-motion';

export default function MirrorSync() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer Glow / Resonance Field */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-brand/20 rounded-full blur-[40px] -z-10"
      />

      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full group"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connection Arcs - Representing Neural Paths */}
        {[0, 120, 240].map((rotation, i) => (
          <motion.path
            key={`path-${i}`}
            d="M50 15 C 65 15, 85 35, 85 50"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeLinecap="round"
            className="text-brand/30"
            initial={{ rotate: rotation, transformOrigin: '50% 50%' }}
            animate={{ 
              rotate: [rotation, rotation + 360],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              rotate: { duration: 15 + i * 5, repeat: Infinity, ease: "linear" },
              opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        ))}

        {/* Resonance Rings - Concentric Circles */}
        {[20, 32, 44].map((radius, i) => (
          <motion.circle
            key={`ring-${i}`}
            cx="50"
            cy="50"
            r={radius}
            stroke="currentColor"
            strokeWidth={0.5 + i * 0.2}
            className="text-brand/40"
            strokeDasharray="4 8"
            animate={{
              rotate: i % 2 === 0 ? 360 : -360,
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              rotate: { duration: 20 + i * 10, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 },
              opacity: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }
            }}
            style={{ transformOrigin: 'center' }}
          />
        ))}

        {/* Inner Pulsing Node (Neural Core) */}
        <motion.circle
          cx="50"
          cy="50"
          r="12"
          fill="url(#coreGradient)"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Center Spark / Sparkle */}
        <motion.circle
          cx="50"
          cy="50"
          r="2"
          fill="white"
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />

        {/* Definitions for Gradients */}
        <defs>
          <radialGradient id="coreGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50 50) rotate(90) scale(12)">
            <stop stopColor="#F47216" />
            <stop offset="1" stopColor="#F47216" stopOpacity="0.4" />
          </radialGradient>
        </defs>
      </svg>
      
      {/* Absolute Overlays for extra "Scientific" touch */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-1/2 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent rotate-45" />
        <div className="w-1/2 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent -rotate-45" />
      </div>
    </div>
  );
}
