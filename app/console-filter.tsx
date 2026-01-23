'use client';

// Run immediately on module load
if (typeof window !== 'undefined') {
  const origError = console.error;
  const origWarn = console.warn;
  
  (console as any).error = function(...args: any[]) {
    const msg = args.join(' ');
    if (msg.indexOf('WebGL') === -1 && 
        msg.indexOf('GL_INVALID') === -1 && 
        msg.indexOf('Framebuffer') === -1 && 
        msg.indexOf('THREE') === -1 &&
        msg.indexOf('glTexStorage') === -1 && 
        msg.indexOf('glClear') === -1 && 
        msg.indexOf('glDraw') === -1) {
      origError.apply(console, args);
    }
  };
  
  (console as any).warn = function(...args: any[]) {
    const msg = args.join(' ');
    if (msg.indexOf('THREE') === -1 && 
        msg.indexOf('Multiple instances') === -1) {
      origWarn.apply(console, args);
    }
  };
}

export default function ConsoleFilter() {
  return null;
}