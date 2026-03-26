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
    <section id="experience" className="py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold mb-6 text-charcoal"
          >
            The 2-Minute Calm
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-charcoal/60 max-w-2xl mx-auto"
          >
            Experience the relief right now. Play the video below and follow along with your animal.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Video Player Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative group"
          >
            <div className="aspect-video bg-charcoal rounded-3xl overflow-hidden shadow-2xl relative">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/UpbujaNsKKA?autoplay=0&rel=0"
                title="TAT for Your Pet - Home Page Experience"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Soft decorative glow */}
            <div className="absolute -inset-4 bg-brand/5 blur-3xl rounded-full -z-10" />
          </motion.div>

          {/* Value Props & CTA */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
               {benefits.map((benefit, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.3 + (i * 0.1) }}
                   className="flex items-start gap-3"
                 >
                   <CheckCircle2 className="w-6 h-6 text-brand mt-0.5 shrink-0" />
                   <p className="text-lg text-charcoal/80">{benefit}</p>
                 </motion.div>
               ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="bg-brand-light/30 p-8 rounded-3xl border border-brand-light"
            >
              <h4 className="text-xl font-bold mb-3 text-brand">Ready for deeper healing?</h4>
              <p className="text-charcoal/70 mb-6 leading-relaxed">
                Join our membership to access a full library of specific sessions for different animal conditions and yourself.
              </p>
              <Button 
                className="w-full" 
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
