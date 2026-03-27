// src/components/DualResonance.tsx
'use client';

import { motion } from 'framer-motion';

export default function DualResonance() {
  const bridgePaths = [
    "M60 60 Q 100 30, 140 60",
    "M60 60 Q 100 50, 140 60",
    "M60 60 Q 100 70, 140 60",
    "M60 60 Q 100 90, 140 60"
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <svg 
        viewBox="0 0 200 120" 
        className="w-full h-full"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="neuralCore" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 60) rotate(90) scale(15)">
            <stop stopColor="#F47216" />
            <stop offset="0.6" stopColor="#F47216" stopOpacity="0.4" />
            <stop offset="1" stopColor="#F47216" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="neuralCoreRight" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(140 60) rotate(90) scale(15)">
            <stop stopColor="#F47216" />
            <stop offset="0.6" stopColor="#F47216" stopOpacity="0.4" />
            <stop offset="1" stopColor="#F47216" stopOpacity="0" />
          </radialGradient>
          <filter id="glow">
             <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
             <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
             </feMerge>
          </filter>
        </defs>

        {/* Global Resonance Halo */}
        <motion.circle
          cx="100"
          cy="60"
          r="40"
          className="text-brand/5"
          stroke="currentColor"
          strokeWidth="0.5"
          animate={{
             scale: [0.8, 1.2, 0.8],
             opacity: [0, 0.2, 0]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        {/* Synaptic Infrastructure (Multiple Paths) */}
        {bridgePaths.map((d, i) => (
          <g key={`path-group-${i}`}>
             {/* The Static Path (Dormant Link) */}
             <path
               d={d}
               stroke="currentColor"
               strokeWidth="0.5"
               className="text-brand/10"
               strokeDasharray="1 3"
             />
             {/* The Active Signal (Synaptic Pulse) */}
             <motion.path
               d={d}
               stroke="url(#pathGradient)"
               strokeWidth="1.5"
               strokeLinecap="round"
               strokeDasharray="4 20"
               filter="url(#glow)"
               animate={{
                 strokeDashoffset: i % 2 === 0 ? [0, -48] : [0, 48],
                 opacity: [0.1, 0.6, 0.1]
               }}
               transition={{
                 duration: 3 + i,
                 repeat: Infinity,
                 ease: "linear"
               }}
             />
          </g>
        ))}

        {/* Resonance Waves (Mutual Interference) */}
        {[20, 35, 50].map((r, i) => (
          <g key={`resonance-${i}`}>
            <motion.circle
              cx="60"
              cy="60"
              r={r}
              stroke="currentColor"
              className="text-brand/10"
              strokeWidth="0.25"
              animate={{ opacity: [0, 0.15, 0], scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
            />
            <motion.circle
              cx="140"
              cy="60"
              r={r}
              stroke="currentColor"
              className="text-brand/10"
              strokeWidth="0.25"
              animate={{ opacity: [0, 0.15, 0], scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 + 0.2 }}
            />
          </g>
        ))}

        {/* Left Neural Node (Animal) */}
        <motion.g
          animate={{ x: [0, 1, -1, 0], y: [0, -1, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Neural Shell */}
          <circle cx="60" cy="60" r="12" fill="url(#neuralCore)" opacity="0.6" />
          {/* Neural Nucleus */}
          <motion.circle
            cx="60"
            cy="60"
            r="4"
            fill="#F47216"
            filter="url(#glow)"
            animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          {/* Mysterious Neural Dendrites (Micro-lines) */}
          {[0, 120, 240].map((angle, j) => (
             <motion.line
               key={`dendrite-left-${j}`}
               x1="60" y1="60"
               x2={60 + 10 * Math.cos(angle * Math.PI / 180)}
               y2={60 + 10 * Math.sin(angle * Math.PI / 180)}
               stroke="#F47216"
               strokeWidth="0.5"
               opacity="0.3"
               animate={{ rotate: [0, 360], opacity: [0.2, 0.5, 0.2] }}
               transition={{ duration: 10 + j, repeat: Infinity, ease: "linear" }}
             />
          ))}
        </motion.g>

        {/* Right Neural Node (Human) */}
        <motion.g
          animate={{ x: [0, -1, 1, 0], y: [0, 1, -1, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <circle cx="140" cy="60" r="12" fill="url(#neuralCoreRight)" opacity="0.6" />
          <motion.circle
            cx="140"
            cy="60"
            r="4"
            fill="#F47216"
            filter="url(#glow)"
            animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          />
          {[60, 180, 300].map((angle, j) => (
             <motion.line
               key={`dendrite-right-${j}`}
               x1="140" y1="60"
               x2={140 + 10 * Math.cos(angle * Math.PI / 180)}
               y2={60 + 10 * Math.sin(angle * Math.PI / 180)}
               stroke="#F47216"
               strokeWidth="0.5"
               opacity="0.3"
               animate={{ rotate: [360, 0], opacity: [0.2, 0.5, 0.2] }}
               transition={{ duration: 12 + j, repeat: Infinity, ease: "linear" }}
             />
          ))}
        </motion.g>

        {/* Gradient Definitions */}
        <defs>
           <linearGradient id="pathGradient" x1="60" y1="60" x2="140" y2="60" gradientUnits="userSpaceOnUse">
             <stop stopColor="#F47216" stopOpacity="0" />
             <stop offset="0.5" stopColor="#F47216" />
             <stop offset="1" stopColor="#F47216" stopOpacity="0" />
           </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
