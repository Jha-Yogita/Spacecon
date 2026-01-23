'use client';

import { useEffect } from 'react';

export default function ConsoleFilter() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const originalError = console.error;
      const originalWarn = console.warn;

      console.error = (...args: any[]) => {
        if (
          typeof args[0] === 'string' &&
          (args[0].includes('THREE') ||
           args[0].includes('WebGL') ||
           args[0].includes('GL_INVALID') ||
           args[0].includes('Framebuffer') ||
           args[0].includes('glTexStorage2D') ||
           args[0].includes('glClear') ||
           args[0].includes('glDrawElements') ||
           args[0].includes('glDrawArrays'))
        ) {
          return;
        }
        originalError.apply(console, args);
      };

      console.warn = (...args: any[]) => {
        if (
          typeof args[0] === 'string' &&
          (args[0].includes('Multiple instances of Three.js') ||
           args[0].includes('THREE'))
        ) {
          return;
        }
        originalWarn.apply(console, args);
      };
    }
  }, []);

  return null;
}