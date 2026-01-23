'use client';

import { useEffect, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import EventsSection from '@/components/EventsSection';
import SponsorsSection from '@/components/SponsorsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    // Only suppress in production
    if (process.env.NODE_ENV === 'production') {
      // Store original console methods
      const originalConsole = {
        log: console.log,
        error: console.error,
        warn: console.warn,
        info: console.info,
        debug: console.debug,
        trace: console.trace
      };

      // Clear console immediately
      console.clear();

      // Override console methods
      const noop = () => {};
      console.log = noop;
      console.warn = noop;
      console.error = noop;
      console.info = noop;
      console.debug = noop;
      console.trace = noop;

      // Suppress specific Three.js/WebGL errors
      const originalOnError = window.onerror;
      window.onerror = function(message, source, lineno, colno, error) {
        const msg = String(message);
        const suppressPatterns = [
          'GL_INVALID_VALUE',
          'GL_INVALID_FRAMEBUFFER_OPERATION',
          'WebGL: too many errors',
          'Texture dimensions must all be greater than zero',
          'Framebuffer is incomplete',
          'Multiple instances of Three.js'
        ];
        
        const shouldSuppress = suppressPatterns.some(pattern => 
          msg.includes(pattern)
        );
        
        return shouldSuppress; // Return true to suppress the error
      };

      // Also override addEventListener for error events
      const originalAddEventListener = window.addEventListener;
      window.addEventListener = function(type: string, listener: any, options?: any) {
        if (type === 'error') {
          // Wrap error listener to filter WebGL errors
          const wrappedListener = function(event: ErrorEvent) {
            const msg = String(event.message || event.error?.message || '');
            const suppressPatterns = [
              'GL_INVALID_VALUE',
              'GL_INVALID_FRAMEBUFFER_OPERATION',
              'WebGL: too many errors',
              'Texture dimensions must all be greater than zero',
              'Framebuffer is incomplete'
            ];
            
            const shouldSuppress = suppressPatterns.some(pattern => 
              msg.includes(pattern)
            );
            
            if (!shouldSuppress && typeof listener === 'function') {
              return listener.call(window, event);
            }
          };
          return originalAddEventListener.call(window, type, wrappedListener, options);
        }
        return originalAddEventListener.call(window, type, listener, options);
      };

      // Restore console on component unmount (optional for debugging)
      return () => {
        Object.assign(console, originalConsole);
        window.onerror = originalOnError;
        window.addEventListener = originalAddEventListener;
      };
    }
  }, []);

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