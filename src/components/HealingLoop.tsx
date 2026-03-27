// src/components/HealingLoop.tsx
'use client';

import { motion } from 'framer-motion';
import { Wind, Sparkles, Footprints } from 'lucide-react';
import EnergyFlow from './EnergyFlow';
import MirrorSync from './MirrorSync';

export default function HealingLoop() {
  return (
    <section className="py-24 md:py-40 bg-white relative overflow-hidden">
      {/* Decorative Brand Accent */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] -z-10 -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-brand/10 rounded-full blur-[100px] -z-10 -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 md:mb-28">
           <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand/10 text-brand rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-8"
          >
            <Sparkles size={14} className="fill-brand" />
            <span>The Mirror of Calm</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-8 tracking-tight leading-tight">
            Healing is <br/><span className="text-brand italic serif font-normal text-5xl md:text-6xl">Contagious.</span>
          </h2>
          <p className="text-lg md:text-xl text-charcoal/60 max-w-xl mx-auto leading-relaxed">
            Experience the profound resonance: as your animal releases stress, your own nervous system finds deep, reflected peace.
          </p>
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32">
          {/* Animal Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center max-w-sm flex-1"
          >
            <div className="w-32 h-32 bg-brand/5 rounded-[3rem] flex items-center justify-center mb-10 relative group border border-brand/10">
              <Footprints className="text-brand w-12 h-12 group-hover:scale-110 transition-transform" />
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} 
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -inset-4 rounded-full border-2 border-brand/20 blur-sm" 
              />
            </div>
            <h4 className="text-3xl font-bold mb-4 text-charcoal">Animal Relief</h4>
            <p className="text-lg text-charcoal/60 leading-relaxed font-medium italic">Heart rate slows, muscles soften, and anxiety dissolves into peace.</p>
          </motion.div>

          {/* Central Connecting Loop - Responsive Energy Flow */}
          <div className="relative w-32 h-64 md:w-80 md:h-32 flex items-center justify-center">
            <div className="absolute inset-0 overflow-hidden rounded-full">
               <EnergyFlow color="#F47216" particleCount={60} />
            </div>
            
            {/* Resonance Core - Representing Mirror Neurons */}
            <div className="relative z-10 w-24 h-24 md:w-28 md:h-28">
               <MirrorSync />
            </div>
          </div>

          {/* Human Side */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center max-w-sm flex-1"
          >
            <div className="w-32 h-32 bg-brand/5 rounded-[3rem] flex items-center justify-center mb-10 relative group border border-brand/10">
              <Wind className="text-brand w-12 h-12 group-hover:scale-110 transition-transform" />
              <motion.div 
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }} 
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -inset-6 rounded-full border-2 border-brand/10 blur-md" 
              />
            </div>
            <h4 className="text-3xl font-bold mb-4 text-charcoal">Human Peace</h4>
            <p className="text-lg text-charcoal/60 leading-relaxed font-medium italic">Mirror neurons fire, parasympathetic system activates, and the burden lifts.</p>
          </motion.div>
        </div>

        {/* Philosophy Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-32 p-8 md:p-12 rounded-[4rem] md:rounded-[5rem] bg-gradient-to-br from-brand/10 to-transparent border border-brand/20 text-center max-w-4xl mx-auto shadow-inner relative group"
        >
           <div className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-[4rem] md:rounded-[5rem] -z-10" />
           <Sparkles className="text-brand w-10 h-10 mx-auto mb-8 animate-bounce" />
           <p className="text-xl md:text-3xl italic text-charcoal tracking-tight font-medium leading-relaxed md:leading-tight px-6 md:px-12 flex flex-col items-center gap-1 md:block">
             <span className="md:inline">When they are calm, </span>
             <span className="text-brand not-italic font-bold tracking-tighter uppercase whitespace-nowrap md:inline inline-block mb-3 md:mb-0">
               you are free.
             </span>
             <br className="md:hidden" />
             <span className="md:inline md:ml-2">When you are calm, </span>
             <span className="md:inline inline-block">they feel safe.</span>
           </p>
        </motion.div>
      </div>
    </section>
  );
}
