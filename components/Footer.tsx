import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t-4 border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <span className="mono text-gray-400 text-xs sm:text-sm font-bold">
            © SpaceCon 2026
          </span>

          <div className="hidden sm:block w-px h-4 bg-white/20" />

          <a 
            href="/privacy-policy"
            className="mono text-gray-400 hover:text-red-500 transition-colors duration-300 text-xs sm:text-sm font-bold"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;