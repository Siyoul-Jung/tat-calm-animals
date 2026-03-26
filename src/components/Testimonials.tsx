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
    <section className="py-32 bg-cream/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Voices of Relief</h2>
          <p className="text-xl text-charcoal/60 max-w-2xl mx-auto">
            From rescue cats to competitive athletes, the impact of TAT® resonates far beyond the session.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[3rem] shadow-sm border border-brand-light/20 relative group hover:shadow-xl transition-all duration-500"
            >
              <Quote className="absolute top-8 right-8 text-brand/10 w-12 h-12 group-hover:text-brand/20 transition-colors" />
              
              <blockquote className="text-lg text-charcoal/80 mb-10 leading-relaxed italic relative z-10">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-md">
                   <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
                </div>
                <div>
                   <p className="font-bold text-charcoal leading-none">{t.author}</p>
                   <p className="text-xs text-brand mt-1 font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
