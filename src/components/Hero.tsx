// src/components/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { MousePointer2, PlayCircle } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-cream">
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-light/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-light/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand/10 text-brand rounded-full text-xs font-bold tracking-wider uppercase mb-6">
            <span className="w-2 h-2 bg-brand rounded-full animate-ping" />
            Experience First, Simplicity Always
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold leading-[1.1] text-charcoal mb-6">
            Healing for <span className="text-brand italic">Them</span>,<br />
            Peace for <span className="text-brand italic">You</span>.
          </h1>
          <p className="text-xl text-charcoal/70 mb-10 max-w-lg leading-relaxed">
            Experience the calming power of TAT®. Start with a 2-minute signature session for your animal, and feel the relief yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link href="/session">
              <Button size="lg" className="group">
                Help Your Pet Find Calm
                <MousePointer2 className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </Link>
            <button 
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 text-charcoal/80 font-medium hover:text-brand transition-colors px-4 py-3 group"
            >
              <PlayCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Watch How It Works
            </button>
          </div>
        </motion.div>

        {/* Visual Content (High-end image: Dog & Cat) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-square md:aspect-auto md:h-[600px] w-full"
        >
          <div className="absolute inset-0 bg-brand-light/10 rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=2000&auto=format&fit=crop" 
                alt="Peaceful Dog and Cat Together" 
                className="w-full h-full object-cover object-center opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand/10 to-transparent" />
          </div>
          
          {/* Floating Element 1 */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-6 -right-6 bg-cream p-5 rounded-2xl shadow-xl border border-brand-light max-w-[200px]"
          >
            <p className="text-xs font-bold text-brand mb-1 uppercase tracking-tighter">Recent Relief</p>
            <p className="text-sm text-charcoal/80 italic font-medium">&quot;My dog settled in 2 minutes, and I finally felt the tension leave my neck.&quot;</p>
          </motion.div>

          {/* Floating Element 2 */}
          <div className="absolute -bottom-6 -left-6 bg-sage-deep text-cream p-5 rounded-2xl shadow-xl flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-sage-deep bg-sage-light flex items-center justify-center text-[10px] text-sage-deep font-bold">U{i}</div>)}
            </div>
            <div className="text-xs">
               <p className="font-bold">1,200+ Owners</p>
               <p className="opacity-70">Joined this week</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
