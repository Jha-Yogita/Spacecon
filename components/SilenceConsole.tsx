'use client';

import { useEffect } from 'react';

export default function SilenceConsole() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      console.warn = () => {};
      console.error = () => {};
    }
  }, []);

  return null;
}
