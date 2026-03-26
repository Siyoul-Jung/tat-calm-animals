// src/components/PhilosophyEssence.tsx
'use client';

import { motion } from 'framer-motion';
import { Sparkles, History, Eye, Wind } from 'lucide-react';

const PILLARS = [
  {
    icon: <History className="text-brand w-6 h-6" />,
    title: "Cellular Legacy",
    description: "Your body remembers what your mind does not. We heal the traumas stored in your cells—even those inherited from your ancestors."
  },
  {
    icon: <Eye className="text-brand w-6 h-6" />,
    title: "The Vision Bridge",
    description: "The TAT® Pose connects your brain's vision center to your cellular memory, allowing stuck trauma to be 're-viewed' and released in moments."
  },
  {
    icon: <Wind className="text-brand w-6 h-6" />,
    title: "Elegant Release",
    description: "No more reliving the past. No more endless talking. The TAT® process is simple, fast, and spiritually centered for a complete integration."
  }
];

export default function PhilosophyEssence() {
  return (
    <section className="py-32 bg-charcoal text-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-brand rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-8">
              <Sparkles size={14} className="fill-brand" />
              <span>The Essence of TAT®</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
               Healing at the <br />
               <span className="text-brand italic serif font-normal">Speed of Sight.</span>
            </h2>
            <p className="text-xl text-cream/60 leading-relaxed mb-10 max-w-lg">
               Tapas Acupressure Technique® isn&apos;t just a method—it&apos;s a bridges between your cells and your spirit.
            </p>
          </motion.div>

          <div className="grid gap-8">
            {PILLARS.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white/10 transition-colors"
              >
                <div className="flex gap-6 items-start">
                  <div className="p-4 bg-charcoal rounded-[2rem] border border-white/5 shadow-inner shrink-0 text-brand">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                    <p className="text-cream/60 leading-relaxed text-lg">
                      {p.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
