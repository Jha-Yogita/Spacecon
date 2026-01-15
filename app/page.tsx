'use client';

import { useEffect, useState } from 'react';

import HeroSection from '@/components/HeroSection';
import EventsSection from '@/components/EventsSection';
import SponsorsSection from '@/components/SponsorsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setMounted(true);

    const hasLoaded = localStorage.getItem('spacecon_home_loaded');

    if (hasLoaded) {
      setShowLoader(false);
      return;
    }

    const timer = setTimeout(() => {
      localStorage.setItem('spacecon_home_loaded', 'true');
      setShowLoader(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  // ⛔ Prevent prerender mismatch
  if (!mounted) return null;

  if (showLoader) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen">
      <HeroSection />
      <EventsSection />
      <SponsorsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
