// src/components/HealingLoop.tsx
'use client';

import { motion } from 'framer-motion';
import { Heart, Wind, Sparkles, Footprints } from 'lucide-react';

export default function HealingLoop() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">The Mirror of Calm</h2>
          <p className="text-charcoal/60 max-w-xl mx-auto">
            Experience the profound connection: as your animal releases stress, your own nervous system finds deep, reflected peace.
          </p>
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          {/* Animal Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col items-center text-center max-w-xs"
          >
            <div className="w-24 h-24 bg-brand/10 rounded-full flex items-center justify-center mb-6 relative group">
              <Footprints className="text-brand w-10 h-10 group-hover:scale-110 transition-transform" />
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }} 
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-full border-2 border-brand/20" 
              />
            </div>
            <h4 className="text-xl font-bold mb-2">Animal Relief</h4>
            <p className="text-sm text-charcoal/50">Heart rate slows, muscles soften, and anxiety dissolves.</p>
          </motion.div>

          {/* Central Connecting Loop */}
          <div className="relative w-full max-w-[200px] h-32 flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 200 100">
               {/* Animated Loop Line */}
               <motion.path 
                 d="M 10,50 Q 100,0 190,50 Q 100,100 10,50"
                 fill="none"
                 stroke="url(#gradient)"
                 strokeWidth="4"
                 strokeLinecap="round"
                 initial={{ pathLength: 0, opacity: 0 }}
                 whileInView={{ pathLength: 1, opacity: 1 }}
                 transition={{ duration: 2, ease: "easeInOut" }}
               />
               <defs>
                 <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="#D68A67" />
                   <stop offset="100%" stopColor="#D68A67" stopOpacity="0.2" />
                 </linearGradient>
               </defs>
               
               {/* Pulsing Particle */}
               <motion.circle
                 r="4"
                 fill="#D68A67"
                 animate={{ 
                   offsetDistance: ["0%", "100%"],
                 }}
                 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                 style={{ offsetPath: "path('M 10,50 Q 100,0 190,50 Q 100,100 10,50')" }}
               />
            </svg>
            <div className="relative z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
               <Heart className="w-6 h-6 text-brand fill-brand" />
            </div>
          </div>

          {/* Human Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col items-center text-center max-w-xs"
          >
            <div className="w-24 h-24 bg-brand/10 rounded-full flex items-center justify-center mb-6 relative group">
              <Wind className="text-brand w-10 h-10 group-hover:scale-110 transition-transform" />
              <motion.div 
                animate={{ scale: [1, 1.3, 1] }} 
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute inset-0 rounded-full border-2 border-brand/20" 
              />
            </div>
            <h4 className="text-xl font-bold mb-2">Human Peace</h4>
            <p className="text-sm text-charcoal/50">Mirror neurons fire, parasympathetic system activates, and bond deepens.</p>
          </motion.div>
        </div>

        {/* Philosophy Footer */}
        <div className="mt-20 p-8 rounded-[3rem] bg-cream/50 border border-brand-light/30 text-center max-w-3xl mx-auto">
           <Sparkles className="text-brand w-6 h-6 mx-auto mb-4" />
           <p className="text-lg italic text-charcoal/80 font-medium">
             &ldquo;When they are calm, you are free. When you are calm, they feel safe.&rdquo;
           </p>
        </div>
      </div>
    </section>
  );
}
