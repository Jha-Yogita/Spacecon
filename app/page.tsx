'use client';

import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import EventsSection from '@/components/EventsSection';
import SponsorsSection from '@/components/SponsorsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    const isProduction = process.env.NODE_ENV === 'production';
    
    if (isProduction) {
      // Clear console and disable it
      console.clear();
      
      // Store original console
      const originalConsole = { ...console };
      
      // Disable ALL console methods
      const consoleMethods = [
        'log', 'error', 'warn', 'info', 'debug', 
        'trace', 'table', 'group', 'groupEnd', 'dir',
        'assert', 'count', 'countReset', 'dirxml', 
        'profile', 'profileEnd', 'time', 'timeLog', 
        'timeEnd', 'timeStamp'
      ];
      
      consoleMethods.forEach(method => {
        (console as any)[method] = () => {};
      });
      
      // Override the entire console object if needed
      Object.getOwnPropertyNames(console).forEach(key => {
        if (typeof (console as any)[key] === 'function') {
          (console as any)[key] = () => {};
        }
      });
      
      // Catch WebGL errors by overriding error handler
      const originalError = console.error;
      console.error = function(...args: any[]) {
        const message = args.map(arg => 
          typeof arg === 'string' ? arg : String(arg)
        ).join(' ');
        
        const webglErrors = [
          'GL_INVALID_VALUE',
          'GL_INVALID_FRAMEBUFFER_OPERATION',
          'WebGL: too many errors',
          'Texture dimensions must all be greater than zero',
          'Framebuffer is incomplete'
        ];
        
        // If it's a WebGL error, suppress it
        const isWebGLError = webglErrors.some(error => message.includes(error));
        if (!isWebGLError) {
          originalError.apply(console, args);
        }
      };
      
      // Block window.onerror globally
      window.addEventListener('error', function(e) {
        const message = e.message || '';
        const webglErrors = [
          'GL_INVALID_VALUE',
          'GL_INVALID_FRAMEBUFFER_OPERATION',
          'Texture dimensions',
          'Framebuffer is incomplete'
        ];
        
        const isWebGLError = webglErrors.some(error => message.includes(error));
        if (isWebGLError) {
          e.preventDefault();
          e.stopPropagation();
        }
      }, true); // Use capture phase
      
      // Optional: Add a way to restore console for debugging
      // Use a secret key combination
      let secretCode = '';
      const handleSecret = (e: KeyboardEvent) => {
        secretCode += e.key;
        if (secretCode.includes('debug')) {
          Object.assign(console, originalConsole);
          console.log('Console restored for debugging');
        }
        // Reset after 3 seconds
        setTimeout(() => { secretCode = ''; }, 3000);
      };
      
      window.addEventListener('keypress', handleSecret);
      
      return () => {
        window.removeEventListener('keypress', handleSecret);
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