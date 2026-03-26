// src/components/VideoSection.tsx
'use client';

import { motion } from 'framer-motion';
import { Play, CheckCircle2 } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function VideoSection() {
  const benefits = [
    "Reduces immediate stress in animals",
    "Calms the owner's nervous system",
    "Deepens the human-animal bond",
    "No equipment or complex training needed"
  ];

  return (
    <section id="experience" className="py-32 bg-gradient-to-b from-cream via-brand/5 to-white relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand/10 rounded-full blur-[80px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand/10 text-brand rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
          >
            <Play size={14} className="fill-brand" />
            <span>The 2-Minute Calm</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8 text-charcoal leading-tight"
          >
            Experience the <span className="text-brand italic serif font-normal">Immediate Shift.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-charcoal/60 max-w-2xl mx-auto leading-relaxed"
          >
            TAT® works at the speed of sight. Play the session below with your animal and witness the calm settle in.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Video Player Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative group"
          >
            <div className="aspect-video bg-charcoal rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(244,114,22,0.15)] relative border-8 border-white">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/UpbujaNsKKA?autoplay=0&rel=0"
                title="TAT for Your Pet - Home Page Experience"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            {/* Playful Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-brand text-cream p-4 md:p-6 rounded-[2.5rem] shadow-xl z-20 font-bold text-xs md:text-sm"
            >
               Try it now →
            </motion.div>
          </motion.div>

          {/* Value Props & CTA */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div className="grid gap-4">
               {benefits.map((benefit, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.3 + (i * 0.1) }}
                   className="flex items-center gap-4 p-6 bg-white/40 backdrop-blur-sm border border-white/60 rounded-[2rem] hover:bg-white transition-colors"
                 >
                   <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
                     <CheckCircle2 className="w-6 h-6 text-brand" />
                   </div>
                   <p className="text-lg font-semibold text-charcoal/80 tracking-tight">{benefit}</p>
                 </motion.div>
               ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="bg-brand text-cream p-10 rounded-[4rem] shadow-2xl shadow-brand/20 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
              <h4 className="text-2xl font-bold mb-4 relative z-10 font-outfit uppercase tracking-wider">Ready for the Full Journey?</h4>
              <p className="text-cream/80 mb-8 leading-relaxed text-lg relative z-10">
                Unlock hundreds of specialized sessions designed to bring lasting calm to every corner of your life together.
              </p>
              <Button 
                variant="outline"
                className="w-full bg-white text-brand border-white hover:bg-cream/90 font-bold py-6 text-lg" 
                size="lg"
                onClick={() => document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Unlock the Full Library
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
