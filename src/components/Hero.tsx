// src/components/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { MousePointer2, PlayCircle } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-cream via-white to-brand/5">
      {/* Dynamic Background Decor */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center lg:text-left pt-10 lg:pt-0"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand/10 text-brand rounded-full text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-sm">
            <span className="w-2 h-2 bg-brand rounded-full animate-ping" />
            Vibrant Health, Expert Vision
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-charcoal mb-8 tracking-tighter">
            Healing for <br />
            <span className="text-brand italic serif font-normal drop-shadow-sm">Them</span>, 
            Peace for <br />
            <span className="text-brand italic serif font-normal drop-shadow-sm">You.</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-charcoal/60 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            Experience the calming power of TAT®. Start with a 2-minute signature session for your animal, and feel the relief yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <Link href="/session">
              <Button size="lg" className="group px-10 py-8 text-lg font-bold shadow-xl shadow-brand/20 hover:scale-105 transition-all">
                Help Your Pet Find Calm
                <MousePointer2 className="ml-3 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </Link>
            <button 
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-3 text-charcoal/60 font-bold hover:text-brand transition-colors px-6 py-4 group text-lg"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all group-hover:scale-110">
                 <PlayCircle className="w-8 h-8 text-brand fill-brand/10" />
              </div>
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
