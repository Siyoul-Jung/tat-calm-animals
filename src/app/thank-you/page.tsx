// src/app/thank-you/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6 pt-20">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-12 inline-flex items-center justify-center w-24 h-24 bg-brand rounded-[2rem] text-cream shadow-2xl shadow-brand/20"
        >
          <Heart size={40} fill="currentColor" />
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6 leading-tight">
             Welcome to <br />
             <span className="text-brand italic serif font-normal">The Circle.</span>
          </h1>
          <p className="text-xl text-charcoal/60 mb-12 leading-relaxed">
            Your journey with TAT® has begun. We&apos;ve sent a confirmation email to Betty&apos;s personal inbox. Your animals are already feeling the shift.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/dashboard">
              <Button size="lg" className="w-full">Go to Dashboard</Button>
            </Link>
            <Link href="/">
              <Button variant="outline" size="lg" className="w-full border-brand text-brand hover:bg-brand/5">Back to Home</Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 flex items-center justify-center gap-2 text-charcoal/30 text-sm font-bold uppercase tracking-widest"
        >
          <Sparkles size={16} />
          <span>The calm begins now</span>
        </motion.div>
      </div>
    </div>
  );
}
