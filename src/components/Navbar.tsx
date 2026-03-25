// src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart, User, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'For Your Animal', href: '/for-your-animal', primary: true },
    { name: 'Membership', href: '/membership' },
    { name: 'Work with Tapas', href: '/work-with-tapas' },
    { name: 'Find a Pro', href: '/find-a-pro' },
    { name: 'Certification', href: '/certification' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-cream/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center text-cream transition-transform group-hover:scale-110">
            <Heart size={20} fill="currentColor" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-charcoal">
            TAT<span className="font-light">®</span> Calm
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-brand',
                link.primary ? 'text-brand font-bold' : 'text-charcoal/70'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Icons */}
        <div className="hidden md:flex items-center gap-5">
          <button className="text-charcoal/70 hover:text-brand transition-colors">
            <User size={20} />
          </button>
          <button className="text-charcoal/70 hover:text-brand transition-colors">
            <ShoppingBag size={20} />
          </button>
          <Link
            href="/membership"
            className="bg-brand text-cream px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand/90 transition-all hover:shadow-lg active:scale-95"
          >
            Membership
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-charcoal"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-cream shadow-xl p-6 md:hidden flex flex-col gap-4 border-t border-sage-light"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'text-lg font-medium py-2',
                  link.primary ? 'text-sage' : 'text-charcoal/80'
                )}
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-sage-light my-2" />
            <div className="flex items-center justify-between pt-2">
              <button className="flex items-center gap-2 text-charcoal/70">
                <User size={20} /> Account
              </button>
              <Link
                href="/membership"
                className="bg-sage text-cream px-6 py-2 rounded-full font-semibold"
              >
                Join Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
