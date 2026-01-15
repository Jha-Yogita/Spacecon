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
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('spacecon_home_loaded');

    if (hasLoaded) {
      setShowLoader(false);
    } else {
      const timer = setTimeout(() => {
        sessionStorage.setItem('spacecon_home_loaded', 'true');
        setShowLoader(false);
      }, 4500);

      return () => clearTimeout(timer);
    }
  }, []);

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
