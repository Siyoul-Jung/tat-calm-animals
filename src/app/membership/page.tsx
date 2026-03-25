// src/app/membership/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Check, Star, ShieldCheck, Zap, Users, ShieldAlert, ChevronRight, HelpCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function MembershipPage() {
  const tiers = [
    {
      name: "Self-Guided",
      price: "24",
      description: "Perfect for those who want to learn and practice at their own pace.",
      features: [
        "Full access to Practice Hub",
        "All recorded TAT® Calm sessions",
        "Progress tracking & certificates",
        "Community forum access",
        "New monthly 'Animal Tip' videos"
      ],
      buttonText: "Start Self-Guided",
      popular: false
    },
    {
      name: "Supported",
      price: "59",
      description: "For deeper healing with direct guidance from Tapas and the community.",
      features: [
        "Everything in Self-Guided",
        "Weekly Live Support with Tapas",
        "Priority Q&A session access",
        "Exclusive 'Deep Dive' workshops",
        "Direct email support for technicals",
        "Private group coaching sessions"
      ],
      buttonText: "Join Supported",
      popular: true
    }
  ];

  const faqs = [
    {
      q: "Can I switch between tiers later?",
      a: "Yes! You can upgrade to the Supported tier or move to Self-Guided at any time from your account settings."
    },
    {
      q: "Do I need prior TAT experience?",
      a: "Not at all. Our 'Start Here' onboarding program is designed specifically for complete beginners."
    },
    {
      q: "How do the live sessions work?",
      a: "Live sessions are held via Zoom every Thursday. You can submit questions in advance or ask live."
    }
  ];

  return (
    <div className="min-h-screen bg-cream pt-32 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-widest mb-6">
            The Membership
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-8 leading-[1.1]">
            Healing for Them, <br/>
            <span className="text-brand italic">Peace for You.</span>
          </h1>
          <p className="text-xl text-charcoal/60 mb-10 leading-relaxed">
            Join the global community of animal lovers using TAT® to transform trauma into connection and stress into calm.
          </p>
        </motion.div>
      </section>

      {/* Tiers Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={`relative p-10 rounded-[3rem] border-2 transition-all hover:shadow-2xl ${
                tier.popular 
                  ? 'bg-charcoal text-cream border-brand' 
                  : 'bg-white text-charcoal border-brand-light/30'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-brand text-cream px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}
              
              <h3 className={`text-2xl font-bold mb-2 ${tier.popular ? 'text-brand' : 'text-charcoal'}`}>
                {tier.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold">${tier.price}</span>
                <span className="text-sm opacity-60">/month</span>
              </div>
              <p className={`mb-8 text-sm leading-relaxed ${tier.popular ? 'text-cream/60' : 'text-charcoal/60'}`}>
                {tier.description}
              </p>
              
              <ul className="space-y-4 mb-10">
                {tier.features.map(feature => (
                  <li key={feature} className="flex gap-3 text-sm font-medium">
                    <Check className={`w-5 h-5 flex-shrink-0 ${tier.popular ? 'text-brand' : 'text-brand'}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={tier.popular ? "primary" : "outline"} 
                className="w-full py-6 text-lg"
              >
                {tier.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-brand-light/10 py-32 rounded-[4rem] mb-32 mx-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: ShieldCheck, title: "Scientific Foundation", text: "Based on 30+ years of clinical results and thousands of case studies." },
              { icon: Users, title: "Global Community", text: "Connect with certified TAT® pros and pet lovers worldwide." },
              { icon: Zap, title: "Instant Impact", text: "Simple poses and steps designed for immediate nervous system relief." }
            ].map((v, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <v.icon className="text-brand w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-charcoal">{v.title}</h4>
                <p className="text-sm text-charcoal/60 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-6 mb-32">
        <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>
        <div className="space-y-6">
          {faqs.map(faq => (
            <div key={faq.q} className="bg-white p-6 rounded-3xl border border-brand-light/20">
              <h4 className="font-bold text-charcoal flex items-center gap-2 mb-2">
                <HelpCircle className="w-4 h-4 text-brand" />
                {faq.q}
              </h4>
              <p className="text-sm text-charcoal/60 pl-6">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="max-w-5xl mx-auto px-6 text-center">
        <div className="bg-brand p-12 md:p-20 rounded-[4rem] text-cream relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent rotate-45 translate-x-1/2 -translate-y-1/2" />
           <h2 className="text-4xl font-bold mb-6 relative z-10">Start Your Animal&apos;s Journey</h2>
           <p className="text-cream/80 mb-10 max-w-xl mx-auto relative z-10">
             Give your pet the gift of calm today. No commitment, cancel anytime.
           </p>
           <Button variant="outline" className="bg-white text-brand border-white hover:bg-cream relative z-10 px-12 py-6 text-xl">
             Get Started Now
           </Button>
        </div>
      </section>
    </div>
  );
}
