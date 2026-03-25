// src/components/Pricing.tsx
'use client';

import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function Pricing() {
  const tiers = [
    {
      name: 'Self-Guided',
      price: '$24',
      description: 'Ideal for those who want to practice at their own pace.',
      features: [
        'Full Course Library',
        'Practice Dashboard',
        'Community Access',
        'Progress Tracking'
      ],
      cta: 'Start Self-Guided',
      popular: false
    },
    {
      name: 'Supported',
      price: '$59',
      description: 'The complete experience with live guidance from Tapas.',
      features: [
        'Everything in Self-Guided',
        'Weekly Live Sessions',
        'Direct Q&A with Tapas',
        'Priority Support'
      ],
      cta: 'Join Supported',
      popular: true
    }
  ];

  return (
    <section id="membership" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Choose Your Path to Calm</h2>
          <p className="text-xl text-charcoal/60 max-w-2xl mx-auto">
            Whether you&apos;re just starting or looking for deep transformation, we have a membership that fits your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, idx) => (
            <motion.div 
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-10 rounded-[3rem] border-2 transition-all hover:shadow-2xl hover:scale-[1.02] flex flex-col ${
                tier.popular 
                  ? 'border-brand bg-brand/5' 
                  : 'border-brand-light/20 bg-cream/30'
              }`}
            >
              {tier.popular && (
                <div className="bg-brand text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full w-fit mb-6">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-charcoal mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold text-charcoal">{tier.price}</span>
                <span className="text-sm text-charcoal/40 font-medium">/month</span>
              </div>

              <p className="text-charcoal/60 mb-8 text-sm leading-relaxed">
                {tier.description}
              </p>

              <div className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-brand" />
                    <span className="text-sm font-medium text-charcoal/80">{feature}</span>
                  </div>
                ))}
              </div>

                <Link href="/membership" className="w-full">
                  <Button 
                    variant={tier.popular ? "primary" : "outline"} 
                    className={`w-full ${tier.popular ? 'bg-brand text-cream border-brand' : 'border-brand text-brand hover:bg-brand/5'}`}
                    size="lg"
                  >
                    {tier.cta}
                  </Button>
                </Link>
              
              <p className="text-center mt-6 text-xs text-charcoal/40 font-medium flex items-center justify-center gap-1 cursor-help group">
                 <Info className="w-3 h-3" />
                 No contracts. Cancel anytime.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
