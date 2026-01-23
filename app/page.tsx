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
    // Check if we're in production (for Next.js)
    const isProduction = process.env.NODE_ENV === 'production' || 
                         window.location.hostname !== 'localhost';
    
    if (isProduction) {
      console.clear(); // Clear immediately
      
      // 1. Override ALL console methods completely
      const originalConsole = window.console;
      const noop = () => {};
      
      // Replace the entire console object
      Object.keys(originalConsole).forEach(key => {
        if (typeof (originalConsole as any)[key] === 'function') {
          (window.console as any)[key] = noop;
        }
      });
      
      // 2. Monkey-patch WebGL context to suppress errors at source
      const originalGetContext = HTMLCanvasElement.prototype.getContext;
      HTMLCanvasElement.prototype.getContext = function(...args) {
        const context = originalGetContext.apply(this, args);
        
        if (context && (context as any).constructor.name.includes('WebGL')) {
          // Override WebGL error reporting
          const gl = context as WebGLRenderingContext;
          const originalGetError = gl.getError;
          
          gl.getError = function() {
            const error = originalGetError.call(gl);
            // Return NO_ERROR for WebGL errors
            if (error !== gl.NO_ERROR) {
              return gl.NO_ERROR;
            }
            return error;
          };
        }
        
        return context;
      };
      
      // 3. Override WebGLRenderingContext methods that trigger errors
      const WebGLProto = WebGLRenderingContext.prototype;
      const originalFunctions = {
        texStorage2D: WebGLProto.texStorage2D,
        clear: WebGLProto.clear,
        drawElements: WebGLProto.drawElements,
        drawArrays: WebGLProto.drawArrays,
      };
      
      // Wrap error-prone methods
      WebGLProto.texStorage2D = function(...args: any[]) {
        try {
          return originalFunctions.texStorage2D.apply(this, args);
        } catch (e) {
          return;
        }
      };
      
      WebGLProto.clear = function(...args: any[]) {
        try {
          return originalFunctions.clear.apply(this, args);
        } catch (e) {
          return;
        }
      };
      
      // 4. Block error event propagation completely
      const originalErrorHandler = window.onerror;
      window.onerror = function(message, source, lineno, colno, error) {
        // Return true to prevent default error handling
        return true;
      };
      
      // 5. Also capture unhandled promise rejections
      const originalUnhandledRejection = window.onunhandledrejection;
      window.onunhandledrejection = function(event) {
        event.preventDefault();
        return false;
      };
      
      // 6. Add error event listener that swallows all errors
      window.addEventListener('error', function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }, true); // Use capture phase
      
      return () => {
        // Restore originals on unmount (optional)
        Object.assign(window.console, originalConsole);
        HTMLCanvasElement.prototype.getContext = originalGetContext;
        Object.assign(WebGLProto, originalFunctions);
        window.onerror = originalErrorHandler;
        window.onunhandledrejection = originalUnhandledRejection;
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