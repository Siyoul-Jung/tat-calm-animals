// src/components/Pricing.tsx
'use client';

import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Pricing() {
  const tiers = [
    {
      name: "Self-Guided",
      price: "24",
      description: "Perfect for starting your journey with your animals at your own pace.",
      features: [
        "Full Library of 2-Minute Sessions",
        "Foundational TAT® Courses",
        "Community Access",
        "Progress Tracking"
      ],
      cta: "Start Healing",
      popular: false
    },
    {
      name: "Supported",
      price: "59",
      description: "For those seeking deeper guidance and professional support.",
      features: [
        "Everything in Self-Guided",
        "Live Monthly Support Sessions",
        "Professional Lead Guidance",
        "Priority Support Access",
        "Exclusive Deep Dive Workshops"
      ],
      cta: "Get Full Support",
      popular: true
    }
  ];

  return (
    <section id="membership" className="py-24 bg-cream/50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-charcoal">Choose Your Path</h2>
          <p className="text-xl text-charcoal/60 max-w-xl mx-auto">
             Flexible memberships designed for every animal lover&apos;s needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div 
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`relative bg-cream p-10 rounded-[3rem] border-2 transition-all hover:shadow-2xl ${
                tier.popular ? 'border-brand-light shadow-xl' : 'border-brand-light/20'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-cream px-6 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                  Most Supported
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-charcoal">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                   <span className="text-5xl font-bold text-brand">${tier.price}</span>
                   <span className="text-charcoal/50 font-medium">/month</span>
                </div>
                <p className="mt-4 text-charcoal/60 leading-relaxed font-medium">
                  {tier.description}
                </p>
              </div>

              <div className="space-y-4 mb-10">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-light/50 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-brand" strokeWidth={3} />
                    </div>
                    <span className="text-charcoal/80 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={tier.popular ? 'primary' : 'outline'} 
                className="w-full" 
                size="lg"
              >
                {tier.cta}
              </Button>
              
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
