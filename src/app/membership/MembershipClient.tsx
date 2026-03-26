// src/app/membership/MembershipClient.tsx
'use client';

import { motion } from 'framer-motion';
import { Heart, Sparkles, Sprout, Sun, Check, HelpCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function MembershipClient() {
  const pathname = usePathname();

  useEffect(() => {
    // Force scroll to top on navigation to this page,
    // unless the user specifically targeted a hash.
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  const tiers = [
    {
      name: "The Home Practice",
      price: "24",
      icon: Sprout,
      description: "Quiet, independent space for your daily ritual of calm.",
      features: [
        "Full Practice Hub access",
        "Recorded masterclasses",
        "Progress tracking",
        "Community forum"
      ],
      buttonText: "Start Your Journey",
      popular: false
    },
    {
      name: "The Guided Circle",
      price: "59",
      icon: Sun,
      description: "Direct connection and weekly live support for profound healing.",
      features: [
        "Everything in Home Practice",
        "Weekly Live Support with Tapas",
        "Priority Q&A Sessions",
        "Private Group Coaching"
      ],
      buttonText: "Join the Guided Circle",
      popular: true
    }
  ];

  return (
    <div className="min-h-screen bg-cream selection:bg-brand/20">
      {/* Hero: Heartfelt Connection */}
      <section className="relative pt-32 pb-20 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-[0.2em] mb-8">
              <Heart size={14} className="fill-brand" />
              <span>A Shared Peace</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-charcoal mb-8 leading-[1.05]">
              Their Relief, <br/>
              <span className="text-brand italic serif">Your Release.</span>
            </h1>
            <p className="text-xl text-charcoal/70 mb-10 leading-relaxed max-w-lg">
              Membership isn&apos;t just a subscription—it&apos;s a commitment to the quiet, profound bond you share with your animal.
            </p>
            <div className="flex flex-wrap gap-4">
               <Button 
                 size="lg" 
                 className="px-10"
                 onClick={() => document.getElementById('tiers')?.scrollIntoView({ behavior: 'smooth' })}
               >
                 Choose Your Path
               </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="relative rounded-[4rem] overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square">
               <Image 
                 src="/images/membership-hero.png"
                 alt="Woman hugging a dog calmly"
                 fill
                 className="object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-brand/20 to-transparent" />
            </div>
            {/* Decorative organic shapes */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand/10 rounded-full blur-3xl" />
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-cream/80 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Tiers: The Paths to Calm */}
      <section id="tiers" className="py-24 bg-white rounded-[5rem] shadow-sm mx-4 mb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
             <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-6">Choose Your Journey</h2>
             <p className="text-charcoal/60 max-w-xl mx-auto">
                Whether you prefer the quiet rhythm of independent practice or the shared energy of a guided circle, there is a space here for you.
             </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {tiers.map((tier, idx) => (
              <motion.div
                key={tier.name}
                whileHover={{ y: -5 }}
                className={`relative p-12 rounded-[3.5rem] border-2 transition-all flex flex-col ${
                  tier.popular 
                    ? 'bg-charcoal text-cream border-brand shadow-xl' 
                    : 'bg-cream/30 text-charcoal border-brand-light/30'
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-12 -translate-y-1/2 bg-brand text-cream px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg">
                    Recommended for Deeper Healing
                  </div>
                )}

                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${tier.popular ? 'bg-brand' : 'bg-brand/10 text-brand'}`}>
                   <tier.icon size={28} />
                </div>
                
                <h3 className="text-3xl font-bold mb-3">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-5xl font-bold">${tier.price}</span>
                  <span className="text-sm opacity-60">/month</span>
                </div>
                <p className={`mb-10 text-lg italic ${tier.popular ? 'text-cream/60' : 'text-charcoal/60'}`}>
                  {tier.description}
                </p>
                
                <div className="space-y-4 mb-12 flex-grow">
                  {tier.features.map(f => (
                    <div key={f} className="flex gap-4 items-center group">
                       <Check size={18} className="text-brand shrink-0" />
                       <span className="text-sm font-medium">{f}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={tier.popular ? "primary" : "outline"}
                  className={`w-full py-7 text-lg rounded-[2rem] ${!tier.popular && 'border-charcoal/20 hover:bg-charcoal hover:text-cream'}`}
                >
                  {tier.buttonText}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emotional Quote */}
      <section className="py-24 text-center max-w-3xl mx-auto px-6">
         <Sparkles className="text-brand w-8 h-8 mx-auto mb-8" />
         <blockquote className="text-3xl md:text-4xl font-light italic leading-relaxed text-charcoal">
            &ldquo;We aren&apos;t just trying to make them behaviorally better. We are trying to make their soul feel safe again.&rdquo;
         </blockquote>
         <p className="mt-8 text-charcoal/40 font-bold uppercase tracking-widest text-xs">— Tapas Fleming</p>
      </section>

      {/* FAQ Banner */}
      <section className="pb-32 px-6">
         <div className="max-w-4xl mx-auto bg-charcoal/5 rounded-[4rem] p-12 border border-brand-light/20 flex flex-col md:flex-row items-center gap-10">
            <div className="shrink-0 w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-sm">
               <HelpCircle className="text-brand w-8 h-8" />
            </div>
            <div>
               <h4 className="text-xl font-bold mb-2">Have questions about the journey?</h4>
               <p className="text-charcoal/60 text-sm">
                 We&apos;re here to ensure you and your animal feel completely supported. Explore our full library of guides or reach out directly.
               </p>
            </div>
            <Button variant="outline" className="shrink-0 border-charcoal/20">Read FAQs</Button>
         </div>
      </section>
    </div>
  );
}
