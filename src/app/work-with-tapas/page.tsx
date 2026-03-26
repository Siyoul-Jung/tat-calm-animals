// src/app/work-with-tapas/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Heart, Sparkles, Calendar, MessageSquare, Play } from 'lucide-react';
import PhilosophyEssence from '@/components/PhilosophyEssence';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function WorkWithTapasPage() {
  return (
    <div className="min-h-screen bg-cream selection:bg-brand/20">
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand/10 text-brand rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-8">
               <Heart size={14} className="fill-brand" />
               <span>Meet the Founder</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-charcoal mb-8 leading-tight">
               Your Guide to <br/>
               <span className="text-brand italic serif">Profound Peace.</span>
            </h1>
            <p className="text-xl text-charcoal/70 mb-10 leading-relaxed max-w-lg font-medium">
               I created TAT® because I believe that no animal or person should have to carry the weight of trauma alone. Let&apos;s find your way back to calm, together.
            </p>
            <div className="flex flex-wrap gap-4">
               <Link href="/membership">
                 <Button size="lg" className="px-10">Join the Guided Circle</Button>
               </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
             <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="/images/tapas-portrait.jpg" 
                  alt="Tapas Fleming" 
                  className="w-full h-full object-cover"
                />
             </div>
             {/* Decorative quote bubble */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 1 }}
               className="absolute -bottom-10 -right-6 md:right-0 bg-charcoal text-cream p-8 rounded-[3rem] max-w-xs shadow-2xl border border-brand/20"
             >
                <p className="italic text-lg mb-4 text-cream/90">&ldquo;You already have the calm within you. I&apos;m just here to help you remember it.&rdquo;</p>
                <p className="text-xs font-bold uppercase tracking-widest text-brand">— Tapas Fleming</p>
             </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <PhilosophyEssence />

      {/* Ways to Work Together */}
      <section className="py-32 bg-white rounded-[5rem] mx-4 shadow-sm">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
             <h2 className="text-4xl font-bold text-charcoal mb-4 text-center">Ways to Practice Together</h2>
             <p className="text-charcoal/60 max-w-xl mx-auto">
               Whether you prefer the intimacy of a group or the depth of a personal intensive, there is a space here for you and your companion.
             </p>
          </div>

          <div className="space-y-8">
             <div className="p-10 bg-cream/30 border border-brand/10 rounded-[3rem] flex flex-col md:flex-row items-center gap-10 hover:shadow-lg transition-all group">
                <div className="w-20 h-20 bg-brand rounded-[2rem] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                   <Calendar className="text-cream w-10 h-10" />
                </div>
                <div>
                   <h3 className="text-2xl font-bold mb-2">The Guided Circle</h3>
                   <p className="text-charcoal/60 mb-4">Weekly 90-minute live sessions where I guide you personally through TAT® for your animal.</p>
                   <Link href="/membership" className="text-brand font-bold text-sm uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn More <Play size={16} className="fill-brand" />
                   </Link>
                </div>
             </div>

             <div className="p-10 bg-cream/30 border border-brand/10 rounded-[3rem] flex flex-col md:flex-row items-center gap-10 hover:shadow-lg transition-all group opacity-60">
                <div className="w-20 h-20 bg-charcoal rounded-[2rem] flex items-center justify-center shrink-0">
                   <MessageSquare className="text-cream w-10 h-10" />
                </div>
                <div>
                   <h3 className="text-2xl font-bold mb-2">Private Intensives</h3>
                   <p className="text-charcoal/60 mb-2">One-on-one sessions for complex trauma or senior animal transitions.</p>
                   <span className="text-[10px] font-bold uppercase tracking-widest text-charcoal/40 bg-charcoal/5 px-3 py-1 rounded-full">Coming Summer 2026</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Closing Note */}
      <section className="py-32 text-center max-w-2xl mx-auto px-6">
         <Sparkles className="text-brand w-8 h-8 mx-auto mb-8" />
         <h2 className="text-3xl font-bold text-charcoal mb-8 italic">Ready to Begin?</h2>
         <p className="text-charcoal/60 mb-12 text-lg">
           Your journey with TAT® is a gift to your animal, and a path to peace for yourself. I look forward to meeting you inside the Circle.
         </p>
         <Link href="/membership">
            <Button size="lg" className="px-16 py-8">Explore Membership</Button>
         </Link>
      </section>
    </div>
  );
}
