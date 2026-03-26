// src/components/Pricing.tsx
'use client';

import { motion } from 'framer-motion';
import { Check, Info, Sparkles, Heart } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function Pricing() {
  const tiers = [
    {
      name: 'The Home Practice',
      price: '$24',
      description: 'Quiet, independent space for your daily ritual of calm.',
      features: [
        'Full Course Library',
        'Practice Dashboard',
        'Community Access',
        'Progress Tracking'
      ],
      cta: 'Start Your Practice',
      popular: false
    },
    {
      name: 'The Guided Circle',
      price: '$59',
      description: 'Direct connection and weekly live support for profound healing.',
      features: [
        'Everything in Home Practice',
        'Weekly Live Sessions',
        'Direct Q&A with Tapas',
        'Priority Support'
      ],
      cta: 'Join The Circle',
      popular: true
    }
  ];

  return (
    <section id="membership" className="py-24 md:py-40 bg-white relative overflow-hidden">
      {/* Decorative Brand Accent */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px] -z-10 translate-y-1/2 -translate-x-1/4" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand/10 rounded-full blur-[100px] -z-10 -translate-y-1/4 translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 md:mb-28">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-charcoal mb-8 tracking-tight"
          >
            Choose Your <span className="text-brand italic serif font-normal">Path to Calm.</span>
          </motion.h2>
          <p className="text-lg md:text-xl text-charcoal/60 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re just starting your daily ritual or looking for deep transformation, find the circle that resonates with your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {tiers.map((tier, idx) => (
            <motion.div 
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, type: 'spring', stiffness: 50 }}
              className={`p-12 rounded-[4rem] border-2 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(244,114,22,0.15)] flex flex-col relative group ${
                tier.popular 
                  ? 'border-brand bg-white shadow-xl translate-y-[-8px]' 
                  : 'border-brand/10 bg-white/40 backdrop-blur-sm'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand text-white text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-2 rounded-full shadow-lg z-20">
                  Most Proactive Ritual
                </div>
              )}
              
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-charcoal mb-4 flex items-center gap-2">
                   {tier.popular ? <Sparkles className="text-brand w-5 h-5 fill-brand/20" /> : <Heart className="text-brand/40 w-5 h-5" />}
                   {tier.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-charcoal tracking-tighter">{tier.price}</span>
                  <span className="text-sm text-charcoal/30 font-bold uppercase tracking-widest">/ month</span>
                </div>
              </div>

              <p className="text-charcoal/60 mb-10 text-lg leading-relaxed italic">
                {tier.description}
              </p>

              <div className="space-y-5 mb-12 flex-grow">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-4 group/item">
                    <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center group-hover/item:bg-brand/20 transition-colors">
                      <Check className="w-4 h-4 text-brand" />
                    </div>
                    <span className="text-base font-medium text-charcoal/80">{feature}</span>
                  </div>
                ))}
              </div>

                <Link href="/thank-you" className="w-full">
                  <Button 
                    variant={tier.popular ? "primary" : "outline"} 
                    className={`w-full py-8 text-lg font-bold rounded-[2rem] transition-all ${
                      tier.popular 
                        ? 'bg-brand text-cream border-brand shadow-lg shadow-brand/20 hover:scale-[1.02]' 
                        : 'border-brand/20 text-brand hover:bg-brand/5 hover:border-brand/40'
                    }`}
                    size="lg"
                  >
                    {tier.cta}
                  </Button>
                </Link>
              
              <p className="text-center mt-8 text-xs text-charcoal/30 font-bold uppercase tracking-[0.15em] flex items-center justify-center gap-2 cursor-help opacity-60 hover:opacity-100 transition-opacity">
                 <Info className="w-3.5 h-3.5" />
                 Flexibility First. Cancel Anytime.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
