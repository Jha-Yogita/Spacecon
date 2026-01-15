'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';


export default function MultiverseNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
const pathname = usePathname();


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'events', 'about', 'contact'];
      
      if (window.scrollY < 100) {
        setActive('home');
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const scrollPosition = window.scrollY + 150;
          
          if (scrollPosition >= elementTop) {
            setActive(section);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActive(id);
    setIsMenuOpen(false);

   if (id === 'home') {
  setActive('home');
  setIsMenuOpen(false);

  if (pathname !== '/') {
    router.push('/');
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return;
}


    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
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
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700&display=swap');
        
        .logo-font {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          letter-spacing: 0.05em;
        }
        
        .nav-font {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
        }

        @keyframes energyPulse {
          0%, 100% { opacity: 0.4; transform: scaleX(1); }
          50% { opacity: 1; transform: scaleX(1.02); }
        }

        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        @keyframes glitchSubtle {
          0%, 100% { 
            transform: translate(0, 0);
          }
          33% { 
            transform: translate(-2px, 1px);
          }
          66% { 
            transform: translate(2px, -1px);
          }
        }

        @keyframes fractureExpand {
          0% { clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%); }
          100% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
        }

        .energy-line {
          animation: energyPulse 2s ease-in-out infinite;
        }

        .scanline-effect {
          animation: scanline 3s linear infinite;
        }

        .glitch-hover:hover .glitch-text {
          animation: glitchSubtle 0.3s ease-in-out;
        }

        .glitch-hover:hover .glitch-text::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(220, 38, 38, 0.1) 50%, transparent 100%);
          animation: glitchSubtle 0.3s ease-in-out;
          pointer-events: none;
        }

        .fracture-border {
          clip-path: polygon(
            0 0, 5px 0, 5px 2px, calc(100% - 5px) 2px, calc(100% - 5px) 0, 100% 0,
            100% 5px, calc(100% - 2px) 5px, calc(100% - 2px) calc(100% - 5px), 100% calc(100% - 5px),
            100% 100%, calc(100% - 5px) 100%, calc(100% - 5px) calc(100% - 2px), 5px calc(100% - 2px),
            5px 100%, 0 100%, 0 calc(100% - 5px), 2px calc(100% - 5px), 2px 5px, 0 5px
          );
        }

        .nav-blur {
          backdrop-filter: blur(20px) saturate(180%);
        }

        .geometric-grid {
          background-image: 
            linear-gradient(rgba(220, 38, 38, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(220, 38, 38, 0.03) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled 
          ? 'bg-black/98 nav-blur shadow-2xl shadow-red-900/30' 
          : 'bg-gradient-to-b from-black via-black/95 to-transparent'
      }`}>
        
        <div className="absolute inset-0 geometric-grid opacity-30" />
        
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent">
          <div className="absolute inset-0 bg-red-600 blur-sm" />
        </div>

        <div className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="scanline-effect absolute w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
        </div>

        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
            
            <button
              onClick={() => scrollToSection('home')}
              className="relative group glitch-hover"
            >
              <div className="absolute -inset-3 sm:-inset-6 bg-red-600/0 group-hover:bg-red-600/10 transition-all duration-500" 
                   style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)' }} />
              
              <div className="relative flex items-center gap-2 sm:gap-3 lg:gap-4">
                <div className="hidden sm:flex flex-col gap-1">
                  <div className="w-0.5 sm:w-1 h-4 sm:h-6 lg:h-8 bg-red-600 group-hover:h-6 sm:group-hover:h-8 lg:group-hover:h-10 transition-all duration-300" />
                  <div className="w-0.5 sm:w-1 h-2 sm:h-3 lg:h-4 bg-red-600/60 group-hover:h-3 sm:group-hover:h-4 lg:group-hover:h-6 transition-all duration-300" />
                  <div className="w-0.5 sm:w-1 h-1 sm:h-1.5 lg:h-2 bg-red-600/30 group-hover:h-1.5 sm:group-hover:h-2 lg:group-hover:h-3 transition-all duration-300" />
                </div>
                
                <h1 className="logo-font text-2xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight relative glitch-text">
                  <span className="text-white">SPACE</span>
                  <span className="text-red-600">CON</span>
                  
                  <div className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 h-[1px] sm:h-[2px] bg-gradient-to-r from-red-600 via-white to-red-600 transform group-hover:scale-x-105 transition-transform duration-300" />
                </h1>
                
                <div className="hidden sm:flex flex-col gap-1">
                  <div className="w-0.5 sm:w-1 h-1 sm:h-1.5 lg:h-2 bg-red-600/30 group-hover:h-1.5 sm:group-hover:h-2 lg:group-hover:h-3 transition-all duration-300" />
                  <div className="w-0.5 sm:w-1 h-2 sm:h-3 lg:h-4 bg-red-600/60 group-hover:h-3 sm:group-hover:h-4 lg:group-hover:h-6 transition-all duration-300" />
                  <div className="w-0.5 sm:w-1 h-4 sm:h-6 lg:h-8 bg-red-600 group-hover:h-6 sm:group-hover:h-8 lg:group-hover:h-10 transition-all duration-300" />
                </div>
              </div>

              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-700">
                <span className="nav-font text-[8px] sm:text-[10px] text-red-500 tracking-[0.3em] sm:tracking-[0.4em] uppercase">MULTIVERSE MENACE</span>
              </div>
            </button>

            <div className="hidden lg:flex items-center gap-6 xl:gap-12">
              {navItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative group"
                >
                  <span className={`nav-font text-base xl:text-xl uppercase tracking-[0.15em] transition-all duration-300 ${
                    active === item.id 
                      ? 'text-white' 
                      : 'text-gray-500 group-hover:text-white'
                  }`}>
                    {item.label}
                  </span>

                  {active === item.id ? (
                    <div className="absolute -bottom-2 left-0 right-0 h-[3px] bg-red-600 relative">
                      <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-600 rotate-45" />
                      <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-600 rotate-45" />
                      <div className="absolute inset-0 bg-red-600 blur-md energy-line" />
                    </div>
                  ) : (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 group-hover:w-full h-[2px] bg-red-600 transition-all duration-500">
                      <div className="absolute inset-0 bg-red-600 blur-sm" />
                    </div>
                  )}

                  <div className="absolute -inset-3 bg-red-600/0 group-hover:bg-red-600/5 transition-all duration-300 -z-10"
                       style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)' }} />
                </button>
              ))}

              <button
                onClick={() => scrollToSection('events')}
                className="relative group ml-2 xl:ml-4"
              >
                <div className="absolute -inset-[2px] bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
                
                <div className="relative bg-gradient-to-br from-red-600 to-red-700 px-6 xl:px-10 py-3 xl:py-4 overflow-hidden"
                     style={{ clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}>
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
                  
                  <span className="relative nav-font text-base xl:text-xl text-white uppercase tracking-[0.2em]">
                    REGISTER
                  </span>

                  <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white" />
                  
                  <div className="absolute top-1 right-1 w-1 h-1 bg-white/60 rotate-45" />
                  <div className="absolute bottom-1 left-1 w-1 h-1 bg-white/60 rotate-45" />
                </div>
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative w-12 h-12 sm:w-14 sm:h-14 group"
            >
              <div className="absolute inset-0 bg-black border-2 border-red-600/50 group-hover:border-red-600 transition-colors duration-300" />
              
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-6 h-6 sm:w-7 sm:h-7 relative">
                  <span className={`absolute left-0 h-[2px] bg-white transition-all duration-500 ${
                    isMenuOpen ? 'w-6 sm:w-7 top-1/2 -translate-y-1/2 rotate-45' : 'w-6 sm:w-7 top-1 sm:top-1.5'
                  }`} />
                  <span className={`absolute left-0 w-6 sm:w-7 h-[2px] top-1/2 -translate-y-1/2 bg-white transition-all duration-500 ${
                    isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100'
                  }`} />
                  <span className={`absolute left-0 h-[2px] bg-white transition-all duration-500 ${
                    isMenuOpen ? 'w-6 sm:w-7 top-1/2 -translate-y-1/2 -rotate-45' : 'w-6 sm:w-7 bottom-1 sm:bottom-1.5'
                  }`} />
                </div>
              </div>

              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-red-600" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-red-600" />
            </button>
          </div>

          <div className={`lg:hidden overflow-hidden transition-all duration-700 ${
            isMenuOpen ? 'max-h-[600px] opacity-100 pb-6 sm:pb-8' : 'max-h-0 opacity-0'
          }`}>
            <div className="pt-4 sm:pt-6 space-y-2 sm:space-y-3 border-t-2 border-red-600/30 bg-black">
              {navItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative w-full text-left py-3 sm:py-4 px-4 sm:px-6 group transition-all duration-500 ${
                    active === item.id ? 'bg-red-600/10' : 'hover:bg-red-600/5'
                  }`}
                  style={{ 
                    transitionDelay: `${idx * 80}ms`,
                    clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)'
                  }}
                >
                  <div className={`absolute left-0 top-0 bottom-0 w-[2px] sm:w-[3px] bg-red-600 transition-all duration-300 ${
                    active === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                  }`} />

                  <span className={`nav-font text-lg sm:text-2xl uppercase tracking-[0.15em] transition-colors duration-300 ${
                    active === item.id ? 'text-white' : 'text-gray-400 group-hover:text-white'
                  }`}>
                    {item.label}
                  </span>

                  {active === item.id && (
                    <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-600 rotate-45">
                      <div className="absolute inset-0 bg-red-600 blur-sm" />
                    </div>
                  )}
                </button>
              ))}

              <div className="pt-3 sm:pt-4">
                <button
                  onClick={() => scrollToSection('events')}
                  className="relative w-full group"
                >
                  <div className="absolute -inset-[2px] bg-red-600 blur-md opacity-50" />
                  
                  <div className="relative bg-gradient-to-br from-red-600 to-red-700 py-4 sm:py-5"
                       style={{ clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}>
                    <span className="nav-font text-xl sm:text-2xl text-white uppercase tracking-[0.2em]">
                      REGISTER NOW
                    </span>

                    <div className="absolute top-1 left-1 w-2 sm:w-3 h-2 sm:h-3 border-t-2 border-l-2 border-white" />
                    <div className="absolute top-1 right-1 w-2 sm:w-3 h-2 sm:h-3 border-t-2 border-r-2 border-white" />
                    <div className="absolute bottom-1 left-1 w-2 sm:w-3 h-2 sm:h-3 border-b-2 border-l-2 border-white" />
                    <div className="absolute bottom-1 right-1 w-2 sm:w-3 h-2 sm:h-3 border-b-2 border-r-2 border-white" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px]">
          <div className="h-full bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />
        </div>
      </nav>
    </>
  );
}