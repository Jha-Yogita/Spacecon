'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function SpaceNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'events', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (current) setActive(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActive(id);
    setIsMenuOpen(false);

    // If NOT on homepage, redirect and scroll there
    if (pathname !== '/') {
      router.push(`/#${id}`);
      return;
    }

    // Special case: scroll to top for Home
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'events', label: 'Events' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-lg border-b border-white/10'
          : 'bg-black border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-5xl font-black text-white tracking-tighter hover:tracking-widest transition-all duration-500"
          >
            SpaceCon
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-12">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-2xl font-medium transition-all duration-300 relative group ${
                  active === item.id ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <span className="relative z-10">{item.label}</span>

                {active === item.id && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                )}

                <div className="absolute -inset-3 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </button>
            ))}

            {/* CTA */}
            <button
              onClick={() => scrollToSection('events')}
              className="px-10 py-4 bg-white text-black text-xl font-bold rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/20"
            >
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-14 h-14 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            <div className="w-8 h-8 relative">
              <div
                className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' : 'top-2'
                }`}
              />
              <div
                className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                }`}
              />
              <div
                className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' : 'bottom-2'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100 py-8' : 'max-h-0 opacity-0 py-0'
          } border-t border-white/10`}
        >
          <div className="space-y-6">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left text-2xl font-medium py-4 transition-all duration-300 flex items-center justify-between ${
                  active === item.id
                    ? 'text-white bg-white/10 px-6 rounded-xl border border-white/20'
                    : 'text-gray-400 hover:text-white px-6'
                }`}
              >
                <span>{item.label}</span>
                {active === item.id && <div className="w-3 h-3 bg-white rounded-full animate-pulse" />}
              </button>
            ))}

            <div className="pt-6">
              <button
                onClick={() => scrollToSection('events')}
                className="w-full py-5 bg-white text-black text-2xl font-bold rounded-full hover:bg-gray-100 transition-colors duration-300"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
