// src/components/DashboardUpgradeBanner.tsx
'use client';

import { Sparkles, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function DashboardUpgradeBanner() {
  return (
    <Link href="/membership" className="group block mb-12">
      <div className="relative overflow-hidden bg-brand p-6 rounded-[2.5rem] text-cream shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.01]">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-charcoal/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-white/20 rounded-2xl backdrop-blur-md flex items-center justify-center shrink-0">
              <Sparkles className="w-8 h-8 text-cream" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Unlock Weekly Live Support</h3>
              <p className="text-cream/80 text-sm max-w-md">
                Upgrade to the <span className="font-bold text-white">Supported</span> Tier to join live sessions with Tapas and the global community.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-2xl backdrop-blur-md group-hover:bg-white/20 transition-colors">
            <span className="font-bold text-sm tracking-widest uppercase">Explore Benefits</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
