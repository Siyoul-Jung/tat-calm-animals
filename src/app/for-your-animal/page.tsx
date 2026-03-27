// src/app/for-your-animal/page.tsx
'use client';

import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import MirrorSync from '@/components/MirrorSync';
import ResonanceTool from './ResonanceTool';

export default function ForYourAnimalPage() {
  return (
    <div className="min-h-screen bg-cream selection:bg-brand/20">
      {/* Header */}
      <section className="pt-40 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand/10 text-brand rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-8">
              <Sparkles size={14} className="fill-brand" />
              <span>Resonance Matching</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-charcoal mb-8 leading-[1.05]">
              Heal <span className="text-brand italic serif text-6xl md:text-8xl">Together.</span>
            </h1>
            <p className="text-xl text-charcoal/70 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
              TAT® is more than a guide—it&apos;s a shared experience. Tell us how you both feel, and we&apos;ll find the perfect frequency for your joint release.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tool Container */}
      <section className="pb-32 px-6">
        <ResonanceTool />
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-charcoal text-cream rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">The Science of <br /><span className="text-brand italic serif">Mirror Neurons</span></h2>
            <div className="space-y-6 text-cream/70 text-lg leading-relaxed">
              <p>
                Animals are bio-dynamically linked to their owners. They don&apos;t just see your stress—they absorb it through their mirror neurons.
              </p>
              <p>
                Our resonance tool helps you identify the mismatch in your energies, providing a guided path to return to a shared state of calm. When you find your peace, they find theirs.
              </p>
            </div>
          </motion.div>
          <div className="relative group">
             <div className="aspect-square bg-brand/5 rounded-[4rem] border border-white/10 flex items-center justify-center overflow-hidden relative">
                {/* Scientific Grid Backdrop */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" 
                     style={{ backgroundImage: 'linear-gradient(#F47216 1px, transparent 1px), linear-gradient(90deg, #F47216 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
                />
                
                <div className="w-64 h-64 relative z-10">
                   <MirrorSync />
                </div>

                {/* Data Points / Micro-accents */}
                <div className="absolute top-8 left-8 w-2 h-2 bg-brand rounded-full animate-pulse" />
                <div className="absolute bottom-8 right-8 w-2 h-2 bg-brand/40 rounded-full animate-pulse delay-700" />
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
