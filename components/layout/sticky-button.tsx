"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function StickyButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <Button
        asChild
        className="bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 shadow-lg"
      >
        <Link href="/contact" className="flex items-center space-x-2">
          <span>Get Free Audit</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}