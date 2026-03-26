// src/app/for-your-animal/ResonanceTool.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, User, Dog, Sparkles, ChevronRight, Play, RefreshCw } from 'lucide-react';
import Button from '@/components/ui/Button';

import Link from 'next/link';

const OWNER_STATES = [
  { id: 'stressed', label: 'Stressed', icon: '😫', description: 'Overwhelmed by daily life' },
  { id: 'tired', label: 'Exhausted', icon: '😴', description: 'Low energy and drained' },
  { id: 'anxious', label: 'Anxious', icon: '😰', description: 'Restless and worried' },
  { id: 'neutral', label: 'Seeking Calm', icon: '🧘', description: 'Ready for deep peace' },
];

const PET_STATES = [
  { id: 'restless', label: 'Restless', icon: '🐕', description: 'Pacing or can\'t settle' },
  { id: 'anxious', label: 'Anxious', icon: '😿', description: 'Fearful or clingy' },
  { id: 'reactive', label: 'Reactive', icon: '🗯️', description: 'Quick to bark or hide' },
  { id: 'unwell', label: 'Quiet', icon: '🕯️', description: 'Recovering or low spirit' },
];

export default function ResonanceTool() {
  const [step, setStep] = useState(1);
  const [ownerState, setOwnerState] = useState<string | null>(null);
  const [petState, setPetState] = useState<string | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const nextStep = () => {
    if (step === 2) {
      setIsCalculating(true);
      setTimeout(() => {
        setIsCalculating(false);
        setStep(3);
      }, 2500);
    } else {
      setStep(step + 1);
    }
  };

  const reset = () => {
    setStep(1);
    setOwnerState(null);
    setPetState(null);
  };

  return (
    <div className="max-w-4xl mx-auto min-h-[500px] flex flex-col justify-center">
      <AnimatePresence mode="wait">
        {isCalculating ? (
          <motion.div
            key="calculating"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-20"
          >
            <div className="relative inline-block">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-brand rounded-full blur-3xl"
              />
              <Heart className="w-20 h-20 text-brand mx-auto mb-8 relative z-10 animate-pulse" />
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-4">Finding Your Resonance...</h3>
            <p className="text-charcoal/60 italic serf text-lg">Aligning your energy with theirs.</p>
          </motion.div>
        ) : step === 1 ? (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-10"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand/10 text-brand rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                <User size={14} /> Step 1: Your State
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal">How are <span className="text-brand italic serif">you</span> feeling?</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {OWNER_STATES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setOwnerState(s.id)}
                  className={`p-8 rounded-[2.5rem] border-2 transition-all flex flex-col items-center gap-4 text-center group ${
                    ownerState === s.id 
                      ? 'border-brand bg-brand/5 shadow-lg' 
                      : 'border-brand-light/20 bg-white hover:border-brand/40'
                  }`}
                >
                  <span className="text-4xl group-hover:scale-110 transition-transform">{s.icon}</span>
                  <div>
                    <p className="font-bold text-charcoal">{s.label}</p>
                    <p className="text-[10px] text-charcoal/40 mt-1 uppercase tracking-tighter">{s.description}</p>
                  </div>
                </button>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <Button 
                size="lg" 
                disabled={!ownerState}
                onClick={nextStep}
                className="px-12"
              >
                Next <ChevronRight className="ml-2" />
              </Button>
            </div>
          </motion.div>
        ) : step === 2 ? (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-10"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand/10 text-brand rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                <Dog size={14} /> Step 2: Their State
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal">What is <span className="text-brand italic serif">their</span> energy today?</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {PET_STATES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setPetState(s.id)}
                  className={`p-8 rounded-[2.5rem] border-2 transition-all flex flex-col items-center gap-4 text-center group ${
                    petState === s.id 
                      ? 'border-brand bg-brand/5 shadow-lg' 
                      : 'border-brand-light/20 bg-white hover:border-brand/40'
                  }`}
                >
                  <span className="text-4xl group-hover:scale-110 transition-transform">{s.icon}</span>
                  <div>
                    <p className="font-bold text-charcoal">{s.label}</p>
                    <p className="text-[10px] text-charcoal/40 mt-1 uppercase tracking-tighter">{s.description}</p>
                  </div>
                </button>
              ))}
            </div>
            <div className="flex justify-center gap-4 mt-12">
              <button onClick={() => setStep(1)} className="text-charcoal/40 font-bold hover:text-charcoal px-6">Back</button>
              <Button 
                size="lg" 
                disabled={!petState}
                onClick={nextStep}
                className="px-12"
              >
                Find Resonance <Sparkles className="ml-2" />
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="step3"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[4rem] p-12 border border-brand-light/30 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8">
               <Sparkles className="text-brand/20 w-16 h-16" />
            </div>
            
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2 aspect-square rounded-[3rem] overflow-hidden shadow-xl">
                 <img 
                   src="/images/joint-healing.jpg" 
                   alt="Joint Healing Session" 
                   className="w-full h-full object-cover"
                 />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-sm font-bold text-brand uppercase tracking-[0.2em] mb-4">Your Perfect Match</h3>
                <h2 className="text-4xl font-bold text-charcoal mb-6 leading-tight">The Mirror of <br/><span className="italic serif text-brand">Shared Release</span></h2>
                <p className="text-charcoal/60 mb-8 leading-relaxed italic">
                   &quot;When you find your peace, they find theirs.&quot;
                </p>
                <div className="bg-brand/5 p-6 rounded-3xl border border-brand/10 mb-8">
                   <h4 className="text-sm font-bold text-brand uppercase tracking-widest mb-2 flex items-center gap-2">
                      <Sparkles size={14} /> The Dual Release
                   </h4>
                   <p className="text-sm text-charcoal/80">
                      Based on your stress and their restless energy, this session focuses on calming your central nervous system to create a safe anchor. As their heart rate slows, you will feel the weight lift from your own shoulders.
                   </p>
                </div>
                <div className="space-y-4 mb-10">
                   <div className="flex items-center gap-3 text-sm font-medium">
                      <div className="w-2 h-2 rounded-full bg-brand" />
                      <span>Joint Visual Matching</span>
                   </div>
                   <div className="flex items-center gap-3 text-sm font-medium">
                      <div className="w-2 h-2 rounded-full bg-brand" />
                      <span>12-Minute Guided Practice</span>
                   </div>
                </div>
                <div className="flex flex-col gap-4">
                   <Link href="/thank-you" className="w-full">
                      <Button size="lg" className="w-full">
                         <Play className="mr-2 fill-cream" size={18} /> Start Session
                      </Button>
                   </Link>
                   <button 
                     onClick={reset}
                     className="flex items-center justify-center gap-2 text-charcoal/40 text-xs font-bold uppercase tracking-widest hover:text-brand transition-colors"
                   >
                     <RefreshCw size={14} /> Try a different state
                   </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
