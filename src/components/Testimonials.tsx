// src/components/Testimonials.tsx
'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "My cat, Luna, had persistent anxiety after our move. Two sessions of TAT® Calm, and she's finally sleeping in her favorite sunspot again. I feel so much lighter too.",
    author: "Sarah J.",
    role: "Cat Owner",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "I was skeptical, but seeing my dog's immediate reaction was incredible. He literal sighed out his tension. It's the most profound bonding experience we've had.",
    author: "Mark T.",
    role: "Rescue Dog Parent",
    image: "/images/testimonial-mark.jpg"
  },
  {
    quote: "As a professional trainer, I've seen it all. TAT® provides that missing emotional piece that training alone often can't reach. It's gentle, fast, and lasting.",
    author: "Elena R.",
    role: "Professional Canine Instructor",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-40 bg-white relative overflow-hidden">
      {/* Dynamic Background Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-brand/10 to-transparent -z-10 blur-3xl rounded-full opacity-30" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-brand/10 text-brand rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner"
          >
            <Quote size={32} className="fill-brand" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-8 tracking-tight">
            Voices of <br/><span className="text-brand italic serif font-normal">Transformation.</span>
          </h2>
          <p className="text-lg md:text-xl text-charcoal/60 max-w-xl mx-auto leading-relaxed">
            The resonance of TAT® is felt across continents, connecting hearts and clearing paths for thousands of families.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, type: 'spring', stiffness: 50 }}
              className="group p-1 bg-white hover:bg-gradient-to-br hover:from-brand/20 hover:to-brand/5 rounded-[4rem] transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_-20px_rgba(244,114,22,0.15)]"
            >
              <div className="bg-white h-full p-12 rounded-[3.8rem] flex flex-col">
                <blockquote className="text-xl text-charcoal/80 mb-10 leading-relaxed italic flex-grow relative">
                   <span className="text-brand/20 text-6xl absolute -top-8 -left-4 font-serif group-hover:text-brand/40 transition-colors">&ldquo;</span>
                   {t.quote}
                </blockquote>

                <div className="flex items-center gap-5 pt-8 border-t border-brand/5">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-sm border-2 border-brand/10 group-hover:border-brand/30 transition-colors">
                     <img src={t.image} alt={t.author} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <div>
                     <p className="font-bold text-xl text-charcoal leading-none mb-1">{t.author}</p>
                     <p className="text-xs text-brand font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
