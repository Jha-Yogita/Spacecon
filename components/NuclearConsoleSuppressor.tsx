'use client';

import { useEffect } from 'react';

export default function NuclearConsoleSuppressor() {
  useEffect(() => {
    // Run only in production
    if (process.env.NODE_ENV !== 'production') return;

    console.clear();

    /* ===============================
       1. Replace console methods
    =============================== */

    const noop = () => {};
    const originalConsole = window.console;

    const fakeConsole: Partial<Console> = {};
    const methods: (keyof Console)[] = [
      'log', 'error', 'warn', 'info', 'debug', 'trace', 'table',
      'group', 'groupEnd', 'dir', 'dirxml', 'assert', 'count',
      'countReset', 'profile', 'profileEnd', 'time', 'timeLog',
      'timeEnd', 'timeStamp', 'clear'
    ];

    methods.forEach(method => {
      (fakeConsole as any)[method] = noop;
    });

    Object.defineProperty(window, 'console', {
      value: fakeConsole,
      writable: false,
      configurable: false
    });

    /* ===============================
       2. Patch WebGLRenderingContext
    =============================== */

    const patchWebGLPrototype = (proto: any, methodsToPatch: string[]) => {
      methodsToPatch.forEach(method => {
        const original = proto?.[method];
        if (typeof original === 'function') {
          proto[method] = function (...args: any[]) {
            try {
              return original.apply(this, args);
            } catch {
              return;
            }
          };
        }
      });
    };

    if ((window as any).WebGLRenderingContext) {
      patchWebGLPrototype(
        (window as any).WebGLRenderingContext.prototype,
        [
          'texStorage2D',
          'clear',
          'drawElements',
          'drawArrays',
          'clearBufferfv',
          'clearBufferfi',
          'clearBufferiv'
        ]
      );
    }

    if ((window as any).WebGL2RenderingContext) {
      patchWebGLPrototype(
        (window as any).WebGL2RenderingContext.prototype,
        [
          'texStorage2D',
          'texStorage3D',
          'clear',
          'drawElements',
          'drawArrays',
          'drawElementsInstanced',
          'drawArraysInstanced'
        ]
      );
    }

    /* ===============================
       3. Patch canvas.getContext
       (TypeScript-safe override)
    =============================== */

    const originalGetContext = HTMLCanvasElement.prototype.getContext as any;

    (HTMLCanvasElement.prototype as any).getContext = function (
      contextId: any,
      options?: any
    ) {
      const ctx = originalGetContext.call(this, contextId, options);

      if (
        ctx &&
        (contextId === 'webgl' ||
          contextId === 'webgl2' ||
          contextId === 'experimental-webgl')
      ) {
        const gl = ctx as any;

        if (typeof gl.getError === 'function') {
          const originalGetError = gl.getError;
          gl.getError = function () {
            try {
              return originalGetError.call(this);
            } catch {
              return 0; // GL_NO_ERROR
            }
          };
        }
      }

      return ctx;
    };

    /* ===============================
       4. Suppress runtime error events
    =============================== */

    const blockError = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    window.addEventListener('error', blockError, true);
    window.addEventListener(
      'unhandledrejection',
      (e) => {
        e.preventDefault();
      },
      true
    );

    /* ===============================
       5. Periodic console clear
    =============================== */

    const clearIntervalId = setInterval(() => {
      try {
        (window.console as any)?.clear?.();
      } catch {}
    }, 1000);

    /* ===============================
       Cleanup (optional, safe)
    =============================== */

    return () => {
      clearInterval(clearIntervalId);
      window.removeEventListener('error', blockError);
      window.removeEventListener('unhandledrejection', blockError as any);
      Object.assign(window.console, originalConsole);
      HTMLCanvasElement.prototype.getContext = originalGetContext;
    };
  }, []);

  return null;
}
