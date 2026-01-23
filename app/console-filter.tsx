'use client';

import { useEffect } from 'react';

// Suppress console errors immediately, before React even mounts
if (typeof window !== 'undefined') {
  const originalError = console.error;
  const originalWarn = console.warn;

  console.error = (...args: any[]) => {
    const message = args[0]?.toString() || '';
    if (
      message.includes('WebGL') ||
      message.includes('GL_INVALID') ||
      message.includes('Framebuffer') ||
      message.includes('THREE') ||
      message.includes('glTexStorage') ||
      message.includes('glClear') ||
      message.includes('glDraw')
    ) {
      return;
    }
    originalError.apply(console, args);
  };

  console.warn = (...args: any[]) => {
    const message = args[0]?.toString() || '';
    if (
      message.includes('THREE') ||
      message.includes('Multiple instances')
    ) {
      return;
    }
    originalWarn.apply(console, args);
  };
}

export default function ConsoleFilter() {
  useEffect(() => {
    // Additional suppression after mount
    const originalError = console.error;
    const originalWarn = console.warn;

    console.error = (...args: any[]) => {
      const message = args[0]?.toString() || '';
      if (
        message.includes('WebGL') ||
        message.includes('GL_INVALID') ||
        message.includes('Framebuffer') ||
        message.includes('THREE') ||
        message.includes('glTexStorage') ||
        message.includes('glClear') ||
        message.includes('glDraw')
      ) {
        return;
      }
      originalError.apply(console, args);
    };

    console.warn = (...args: any[]) => {
      const message = args[0]?.toString() || '';
      if (
        message.includes('THREE') ||
        message.includes('Multiple instances')
      ) {
        return;
      }
      originalWarn.apply(console, args);
    };
  }, []);

  return null;
}