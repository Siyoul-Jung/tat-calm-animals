// src/app/session/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw, Heart, CheckCircle, ChevronLeft, Volume2, Maximize } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function SessionPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div className="min-h-screen bg-charcoal text-cream flex flex-col pt-20">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto w-full px-6 py-4 flex items-center justify-between border-b border-white/10">
        <Link href="/dashboard" className="flex items-center gap-2 text-cream/70 hover:text-cream transition-colors group">
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Hub
        </Link>
        <div className="text-center">
           <h2 className="text-sm font-bold uppercase tracking-widest text-brand mb-1">Foundational</h2>
           <p className="font-semibold text-lg">The Signature 2-Minute Calm</p>
        </div>
        <div className="flex items-center gap-4">
           <Heart size={20} className="text-cream/40 hover:text-rose-400 cursor-pointer transition-colors" />
           <p className="text-xs font-bold text-cream/40 bg-white/5 px-3 py-1 rounded-full uppercase tracking-tighter">HD Quality</p>
        </div>
      </div>

      {/* Main Player Area */}
      <div className="flex-grow flex items-center justify-center p-6 lg:p-12 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand/5 blur-[120px] rounded-full" />

        <div className="max-w-5xl w-full aspect-video bg-black rounded-[3rem] shadow-2xl overflow-hidden relative group group-hover:scale-[1.01] transition-transform duration-700 ring-1 ring-white/10">
           {/* Video Feed */}
           <div className="absolute inset-0 bg-black">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/HKq-5GGh2uU?autoplay=1&rel=0&modestbranding=1"
                title="TAT for Your Pet - Healing Session"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
           </div>

           {/* Hover Controls */}
           <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex items-center justify-between">
                 <div className="flex items-center gap-6">
                    <button onClick={() => setIsPlaying(!isPlaying)}>
                       {isPlaying ? <Pause size={24} /> : <Play size={24} fill="currentColor" />}
                    </button>
                    <RotateCcw size={20} className="hover:rotate-[-90deg] transition-transform cursor-pointer" />
                    <div className="w-40 h-1 bg-white/20 rounded-full relative overflow-hidden group/progress cursor-pointer">
                       <div className="absolute left-0 top-0 bottom-0 w-[45%] bg-brand" />
                    </div>
                    <span className="text-xs font-medium tabular-nums text-cream/60">0:54 / 2:00</span>
                 </div>
                 <div className="flex items-center gap-5">
                    <Volume2 size={20} className="text-cream/60 hover:text-cream cursor-pointer" />
                    <Maximize size={20} className="text-cream/60 hover:text-cream cursor-pointer" />
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Completion Overlay (Triggerable) */}
      {isCompleted && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-charcoal/90 backdrop-blur-md z-[60] flex items-center justify-center p-6"
        >
          <div className="max-w-md w-full bg-cream text-charcoal p-10 rounded-[3rem] text-center shadow-2xl">
             <div className="w-20 h-20 bg-brand rounded-full flex items-center justify-center text-cream mx-auto mb-6 shadow-xl">
                <CheckCircle size={40} />
             </div>
             <h3 className="text-3xl font-bold mb-4">Well Done.</h3>
             <p className="text-charcoal/60 mb-8 leading-relaxed font-medium">
               How do you and your animal feel after this session?
             </p>
             <div className="flex justify-center gap-4 mb-10">
                {[1,2,3,4,5].map(i => (
                  <button key={i} className="w-12 h-12 rounded-full border-2 border-brand-light hover:bg-brand hover:text-white transition-all text-sm font-bold">
                    {i}
                  </button>
                ))}
             </div>
             <div className="flex flex-col gap-3">
               <Button className="w-full" size="lg">Log Session & Finish</Button>
               <button onClick={() => setIsCompleted(false)} className="text-xs font-bold uppercase tracking-widest text-charcoal/40 hover:text-charcoal transition-colors">Maybe Later</button>
             </div>
          </div>
        </motion.div>
      )}

      {/* Action Footer */}
      <div className="bg-black/20 py-8 px-6 backdrop-blur-sm border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex gap-4">
              <Button size="sm" variant="outline" className="border-white/20 text-cream hover:bg-white/10" onClick={() => setIsCompleted(true)}>Simulate Completion</Button>
              <Button size="sm" variant="ghost" className="text-cream/60 hover:text-cream">Session Notes</Button>
           </div>
           <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand/60 text-center md:text-right">
              Tapas Acupressure Technique<span className="font-light">®</span>
           </p>
        </div>
      </div>

    </div>
  );
}
