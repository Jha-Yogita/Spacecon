(function() {
  'use strict';
  
  const originalError = console.error;
  const originalWarn = console.warn;
  
  console.error = function(...args) {
    const msg = String(args[0] || '');
    if (
      msg.includes('WebGL') || 
      msg.includes('GL_INVALID') || 
      msg.includes('Framebuffer') || 
      msg.includes('THREE') ||
      msg.includes('glTexStorage') || 
      msg.includes('glClear') || 
      msg.includes('glDraw') ||
      msg.includes('Texture dimensions')
    ) {
      return;
    }
    originalError.apply(console, args);
  };
  
  console.warn = function(...args) {
    const msg = String(args[0] || '');
    if (
      msg.includes('THREE') || 
      msg.includes('Multiple instances')
    ) {
      return;
    }
    originalWarn.apply(console, args);
  };
})();