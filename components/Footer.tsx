import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <span className="text-gray-400 text-sm font-medium">
            © SpaceCon {currentYear}
          </span>
          
          <div className="hidden sm:block w-px h-4 bg-white/20" />
          
          <Link 
            href="/privacy-policy"
            className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;