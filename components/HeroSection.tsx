'use client';

import { useEffect, useState } from 'react';

export default function SpaceConHero() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    setMounted(true);

    const targetDate = new Date('2026-02-21T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => String(time).padStart(2, '0');

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Montserrat:wght@700;800;900&family=Poppins:wght@400;500;600&family=Audiowide&family=Rajdhani:wght@700&family=Russo+One&display=swap');

        .logo-font { font-family: 'Montserrat', sans-serif; }
        .nav-font { font-family: 'Poppins', sans-serif; }
        .tech-font { font-family: 'Orbitron', sans-serif; }
        .cyber-font { font-family: 'Audiowide', sans-serif; }
        .digital-font { font-family: 'Rajdhani', sans-serif; }
        .russo-font { font-family: 'Russo One', sans-serif; }

        @keyframes posterFloat {
          0%,100% { transform: translateY(0) rotate(var(--rotation)); }
          50% { transform: translateY(-8px) rotate(var(--rotation)); }
        }

        /* ================== ALL 4 POSTERS FOR MOBILE ================== */
        @media (max-width: 640px) {
          /* MOBILE POSTERS - Show all 4, smaller size */
          .mobile-poster {
            width: 120px !important;
            height: 170px !important;
            border-width: 3px !important;
            box-shadow: 0 8px 20px rgba(0,0,0,0.8) !important;
            z-index: 10;
          }
          
          /* Reduce text sizes */
          .mobile-poster .russo-font.text-5xl {
            font-size: 1.5rem !important;
            text-shadow: 1px 1px 0 currentColor !important;
          }
          
          .mobile-poster .russo-font.text-3xl,
          .mobile-poster .russo-font.text-4xl {
            font-size: 1rem !important;
            text-shadow: 1px 1px 0 currentColor !important;
          }
          
          .mobile-poster .cyber-font {
            font-size: 0.5rem !important;
            letter-spacing: 0.1em !important;
          }
          
          .mobile-poster .text-\[10px\] {
            font-size: 0.4rem !important;
          }
          
          .mobile-poster .russo-font.text-xs {
            font-size: 0.45rem !important;
            letter-spacing: 0.15em !important;
          }
          
          /* Reduce illustration sizes */
          .mobile-poster .flex-1 .relative {
            transform: scale(0.7) !important;
          }
          
          /* Adjust padding */
          .mobile-poster .px-6,
          .mobile-poster .px-4 {
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
          
          .mobile-poster .py-4 {
            padding-top: 0.25rem !important;
            padding-bottom: 0.25rem !important;
          }
          
          .mobile-poster .py-3 {
            padding-top: 0.25rem !important;
            padding-bottom: 0.25rem !important;
          }
          
          .mobile-poster .py-2 {
            padding-top: 0.2rem !important;
            padding-bottom: 0.2rem !important;
          }
          
          /* Reduce border widths */
          .mobile-poster .border-4 {
            border-width: 1.5px !important;
          }
          
          .mobile-poster .border-6 {
            border-width: 2px !important;
          }
          
          .mobile-poster .border-8 {
            border-width: 3px !important;
          }
          
          /* Reduce corner accent sizes */
          .mobile-poster .w-10.h-10 {
            width: 1rem !important;
            height: 1rem !important;
            border-width: 2px !important;
          }
          
          /* Adjust spacing for mobile layout */
          .mobile-poster.top-4 {
            top: 1rem !important;
          }
          
          .mobile-poster.bottom-4 {
            bottom: 1rem !important;
          }
          
          .mobile-poster.left-4 {
            left: 0.75rem !important;
          }
          
          .mobile-poster.right-4 {
            right: 0.75rem !important;
          }
          
          /* Slow down animation on mobile */
          .mobile-poster {
            animation: posterFloat 8s ease-in-out infinite !important;
          }
        }

        /* Extra small phones (under 380px) */
        @media (max-width: 380px) {
          .mobile-poster {
            width: 105px !important;
            height: 150px !important;
          }
          
          .mobile-poster .russo-font.text-5xl {
            font-size: 1.25rem !important;
          }
          
          .mobile-poster .russo-font.text-3xl,
          .mobile-poster .russo-font.text-4xl {
            font-size: 0.85rem !important;
          }
          
          .mobile-poster.left-4 {
            left: 0.5rem !important;
          }
          
          .mobile-poster.right-4 {
            right: 0.5rem !important;
          }
        }

        /* ================== MOBILE OPTIMIZATION ================== */
        @media (max-width: 640px) {
          /* MAIN TITLE - Ultra compact */
          .logo-font {
            font-size: 2.5rem !important;
            line-height: 0.9 !important;
            letter-spacing: -0.01em !important;
            margin-bottom: 0.5rem !important;
          }
          
          /* Reduce text shadow on mobile for better performance */
          .logo-font.glitch {
            text-shadow: 0 0 15px rgba(220, 38, 38, 0.8), 2px 2px 0 #DC2626, 4px 4px 0 rgba(0, 0, 0, 0.8) !important;
          }
          
          /* DATE - Smaller */
          .nav-font.text-3xl {
            font-size: 1rem !important;
            letter-spacing: 0.08em !important;
          }
          
          .inline-block.px-5.py-1 {
            padding: 0.4rem 0.75rem !important;
            border-width: 1px !important;
            margin-bottom: 0.5rem !important;
          }
          
          /* THEME - Compact */
          .nav-font.text-xl {
            font-size: 0.75rem !important;
            letter-spacing: 0.1em !important;
          }
          
          .inline-block.px-6.py-1\\.5 {
            padding: 0.3rem 0.75rem !important;
            border-width: 1px !important;
            margin-bottom: 0.5rem !important;
          }
          
          /* COUNTDOWN - Ultra compact */
          .countdown-mobile-container .tech-font {
            font-size: 1.5rem !important;
            line-height: 1 !important;
          }
          
          .countdown-mobile-container .digital-font {
            font-size: 0.4rem !important;
            letter-spacing: 0.03em !important;
            margin-top: -0.2rem !important;
          }
          
          .countdown-mobile-container .colon {
            font-size: 1rem !important;
            margin: 0 0.05rem !important;
          }
          
          .border-3.px-3.py-2 {
            padding: 0.4rem 0.5rem !important;
            border-width: 1px !important;
          }
          
          /* Tight spacing */
          .mb-4.sm\\:mb-10 {
            margin-bottom: 0.5rem !important;
          }
          
          .mb-4.sm\\:mb-8 {
            margin-bottom: 0.25rem !important;
          }
          
          .mb-6.sm\\:mb-16 {
            margin-bottom: 0.25rem !important;
          }
          
          .mt-0.sm\\:mt-0 {
            margin-top: 0.5rem !important;
          }
          
          /* Make countdown fit tightly */
          .flex.flex-wrap.justify-center.gap-0\\.5 {
            gap: 0.05rem !important;
          }
          
          /* Compact time units */
          .time-unit {
            min-width: 35px !important;
            padding: 0 0.1rem !important;
          }
          
          /* Reduce overall section height */
          section {
            min-height: 70vh !important;
            padding-top: 1.5rem !important;
            padding-bottom: 1rem !important;
          }
          
          /* Reduce corner accent sizes */
          .absolute.top-1.left-1.w-3.h-3 {
            width: 0.5rem !important;
            height: 0.5rem !important;
            border-width: 1px !important;
          }
          
          .absolute.bottom-1.right-1.w-3.h-3 {
            width: 0.5rem !important;
            height: 0.5rem !important;
            border-width: 1px !important;
          }
          
          /* Reduce background glow effects on mobile */
          .absolute.inset-0.bg-red-600.blur-xl {
            opacity: 0.2 !important;
          }
          
          /* Adjust main content position */
          .relative.z-20.text-center {
            padding-top: 0.5rem !important;
          }
        }

        /* ================== ANIMATIONS ================== */
        @keyframes glowPulse {
          0%,100% {
            box-shadow: 0 0 20px rgba(220,38,38,0.5),
                        inset 0 0 20px rgba(220,38,38,0.2);
          }
          50% {
            box-shadow: 0 0 40px rgba(220,38,38,0.8),
                        inset 0 0 30px rgba(220,38,38,0.4);
          }
        }

        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        @keyframes digitGlow {
          0%,100% {
            text-shadow: 0 0 10px #DC2626, 2px 2px 0 #DC2626;
          }
          50% {
            text-shadow: 0 0 15px #EF4444, 2px 2px 0 #DC2626;
          }
        }

        .countdown-digit {
          animation: digitGlow 2s ease-in-out infinite;
        }

        .stars-bg {
          background-image:
            radial-gradient(2px 2px at 20% 30%, white, transparent),
            radial-gradient(2px 2px at 60% 70%, white, transparent),
            radial-gradient(1px 1px at 50% 50%, white, transparent);
          animation: twinkle 4s ease-in-out infinite;
        }

        @keyframes twinkle {
          0%,100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        .scanline-effect {
          position: absolute;
          width: 100%;
          height: 2px;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent);
          animation: scanline 3s linear infinite;
        }

        .pulse-border {
          animation: glowPulse 2s ease-in-out infinite;
        }
      `}</style>

      <section id="home" className="relative min-h-[70vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-950 via-slate-950 to-black pt-3 pb-2 sm:py-0">
        
        {/* Deep space background with stars */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/20 via-transparent to-transparent" />
        <div className="absolute inset-0 stars-bg" />
        <div className="scanline-effect" />

        {/* ALL 4 MOBILE POSTERS */}
        <div className="absolute inset-0 overflow-hidden pointer-events-auto block sm:hidden">
          {/* COSMIC GUARDIAN - Top Left */}
          <div 
            className="mobile-poster absolute top-4 left-4 bg-black border-red-600"
            style={{ 
              '--rotation': '-4deg',
              animationDelay: '0s'
            } as any}
          >
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
              backgroundSize: '3px 3px'
            }} />
            
            <div className="relative h-full flex flex-col bg-gradient-to-b from-blue-950 via-purple-950 to-black overflow-hidden">
              <div className="relative z-10 bg-red-600 py-2 px-4 border-b-4 border-yellow-400">
                <div className="text-white russo-font text-xs text-center">
                  SPACECON
                </div>
              </div>
              
              <div className="relative z-10 text-center mt-2">
                <div className="text-yellow-400 russo-font text-5xl tracking-wider">
                  COSMIC
                </div>
                <div className="text-white russo-font text-3xl tracking-wider">
                  GUARDIAN
                </div>
              </div>
              
              <div className="flex-1 flex items-center justify-center relative z-10 px-2 py-1">
                <div className="relative w-16 h-20">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-14 bg-gradient-to-br from-red-500 to-red-700 rounded-t-[50%] border-4 border-yellow-400">
                    <div className="absolute top-4 left-1.5 right-1.5 h-6 bg-cyan-400 rounded-full border-2 border-cyan-300" />
                  </div>
                  
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 w-14 h-16 bg-gradient-to-br from-red-600 to-red-800 border-4 border-yellow-400 rounded-lg">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-yellow-400 rounded-full border-2 border-white">
                      <div className="absolute inset-1 bg-red-600 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative z-10 bg-gradient-to-r from-red-700 to-red-600 py-2 px-3 border-t-4 border-yellow-400">
                <div className="text-yellow-300 cyber-font text-center font-bold">
                  GUARDIAN
                </div>
              </div>
            </div>
            
            <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-yellow-400" />
            <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-yellow-400" />
          </div>

          {/* ROCKET FORCE - Top Right */}
          <div 
            className="mobile-poster absolute top-4 right-4 bg-black border-orange-600"
            style={{ 
              '--rotation': '3deg',
              animationDelay: '1.5s'
            } as any}
          >
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
              backgroundSize: '3px 3px'
            }} />
            
            <div className="relative h-full flex flex-col bg-gradient-to-b from-orange-950 to-black overflow-hidden">
              <div className="relative z-10 bg-orange-600 py-2 px-4 border-b-4 border-yellow-400">
                <div className="text-white russo-font text-xs text-center">
                  SPACECON
                </div>
              </div>
              
              <div className="relative z-10 text-center mt-2">
                <div className="text-yellow-400 russo-font text-5xl tracking-wider">
                  ROCKET
                </div>
                <div className="text-white russo-font text-3xl tracking-wider">
                  FORCE
                </div>
              </div>
              
              <div className="flex-1 flex items-center justify-center relative z-10 px-2 py-1">
                <div className="relative w-12 h-20">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-10 bg-gradient-to-b from-red-400 to-red-600 rounded-t-full border-4 border-yellow-400" />
                  
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 w-10 h-16 bg-gradient-to-b from-red-600 to-red-700 border-4 border-yellow-400">
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-5 h-5 bg-cyan-400 rounded-full border-2 border-yellow-400" />
                  </div>
                  
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-12 bg-gradient-to-b from-yellow-300 to-orange-500"
                       style={{ clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)' }} />
                </div>
              </div>
              
              <div className="relative z-10 bg-gradient-to-r from-orange-700 to-orange-600 py-2 px-3 border-t-4 border-yellow-400">
                <div className="text-yellow-300 cyber-font text-center font-bold">
                  BLAST OFF
                </div>
              </div>
            </div>
            
            <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-yellow-400" />
            <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-yellow-400" />
          </div>

          {/* SATURN KING - Bottom Left */}
          <div 
            className="mobile-poster absolute bottom-4 left-4 bg-black border-purple-600"
            style={{ 
              '--rotation': '2deg',
              animationDelay: '3s'
            } as any}
          >
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
              backgroundSize: '3px 3px'
            }} />
            
            <div className="relative h-full flex flex-col bg-gradient-to-b from-purple-950 to-black overflow-hidden">
              <div className="relative z-10 bg-purple-600 py-2 px-4 border-b-4 border-yellow-400">
                <div className="text-white russo-font text-xs text-center">
                  SPACECON
                </div>
              </div>
              
              <div className="relative z-10 text-center mt-2">
                <div className="text-yellow-400 russo-font text-5xl tracking-wider">
                  SATURN
                </div>
                <div className="text-white russo-font text-3xl tracking-wider">
                  KING
                </div>
              </div>
              
              <div className="flex-1 flex items-center justify-center relative z-10 px-2 py-1">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-orange-500 rounded-full border-4 border-yellow-400" />
                  
                  <div className="absolute top-1/2 -translate-y-1/2 -left-2 -right-2 h-3 bg-gradient-to-r from-transparent via-yellow-300 to-transparent rounded-full transform rotate-12 border-2 border-yellow-400" />
                </div>
              </div>
              
              <div className="relative z-10 bg-gradient-to-r from-purple-700 to-purple-600 py-2 px-3 border-t-4 border-yellow-400">
                <div className="text-yellow-300 cyber-font text-center font-bold">
                  LORD
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-yellow-400" />
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-yellow-400" />
          </div>

          {/* GALACTIC EXPLORER - Bottom Right */}
          <div 
            className="mobile-poster absolute bottom-4 right-4 bg-black border-cyan-600"
            style={{ 
              '--rotation': '-3deg',
              animationDelay: '4.5s'
            } as any}
          >
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
              backgroundSize: '3px 3px'
            }} />
            
            <div className="relative h-full flex flex-col bg-gradient-to-b from-blue-950 to-black overflow-hidden">
              <div className="relative z-10 bg-cyan-600 py-2 px-4 border-b-4 border-yellow-400">
                <div className="text-white russo-font text-xs text-center">
                  SPACECON
                </div>
              </div>
              
              <div className="relative z-10 text-center mt-2">
                <div className="text-yellow-400 russo-font text-4xl tracking-wider">
                  GALACTIC
                </div>
                <div className="text-white russo-font text-4xl tracking-wider">
                  EXPLORER
                </div>
              </div>
              
              <div className="flex-1 flex items-center justify-center relative z-10 px-2 py-1">
                <div className="relative w-12 h-12">
                  <div className="absolute top-2 left-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-3 border-yellow-400" />
                  
                  <div className="absolute top-1 right-2 w-4 h-4 bg-gradient-to-br from-red-400 to-red-600 rounded-full border-2 border-red-500" />
                  
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full" />
                </div>
              </div>
              
              <div className="relative z-10 bg-gradient-to-r from-cyan-700 to-cyan-600 py-2 px-3 border-t-4 border-yellow-400">
                <div className="text-yellow-300 cyber-font text-center font-bold">
                  EXPLORER
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-yellow-400" />
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-yellow-400" />
          </div>
        </div>

        {/* DESKTOP POSTERS */}
        <div className="absolute inset-0 overflow-hidden pointer-events-auto hidden lg:block">
          
          {/* COSMIC GUARDIAN Poster - Top Left */}
          <div 
            className="vintage-poster poster-shake absolute top-12 left-8 w-72 h-[26rem] bg-black border-8 border-red-600 shadow-[0_25px_70px_rgba(220,38,38,0.9)]"
            style={{ 
              '--rotation': '-6deg',
              animationDelay: '0s'
            } as any}
          >
            {/* ... (desktop poster content remains the same) ... */}
          </div>

          {/* ROCKET FORCE Poster - Top Right */}
          <div 
            className="vintage-poster poster-shake absolute top-16 right-8 w-72 h-[26rem] bg-black border-8 border-orange-600 shadow-[0_25px_70px_rgba(249,115,22,0.9)]"
            style={{ 
              '--rotation': '5deg',
              animationDelay: '1.5s'
            } as any}
          >
            {/* ... (desktop poster content remains the same) ... */}
          </div>

          {/* SATURN KING Poster - Bottom Left */}
          <div 
            className="vintage-poster poster-shake absolute bottom-12 left-12 w-72 h-[26rem] bg-black border-8 border-purple-600 shadow-[0_25px_70px_rgba(147,51,234,0.9)]"
            style={{ 
              '--rotation': '4deg',
              animationDelay: '3s'
            } as any}
          >
            {/* ... (desktop poster content remains the same) ... */}
          </div>

          {/* GALACTIC EXPLORER Poster - Bottom Right */}
          <div 
            className="vintage-poster poster-shake absolute bottom-16 right-12 w-72 h-[26rem] bg-black border-8 border-cyan-600 shadow-[0_25px_70px_rgba(8,145,178,0.9)]"
            style={{ 
              '--rotation': '-5deg',
              animationDelay: '4.5s'
            } as any}
          >
            {/* ... (desktop poster content remains the same) ... */}
          </div>
        </div>

        {/* Main Content - MOBILE OPTIMIZED */}
        <div className="relative z-30 text-center px-3 max-w-7xl mx-auto">
          
          {/* Title with glitch effect */}
          <div 
            className="mb-2 sm:mb-10"
            style={{
              animation: mounted ? 'fadeInUp 0.8s ease-out 0.6s both' : 'none'
            }}
          >
            <h1 className="logo-font text-8xl xs:text-9xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tighter text-white glitch"
                data-text="SPACECON"
                style={{
                  textShadow: '0 0 30px rgba(220, 38, 38, 0.8), 3px 3px 0 #DC2626, 6px 6px 0 rgba(0, 0, 0, 0.8)',
                  letterSpacing: '-0.03em',
                  lineHeight: '0.75'
                }}>
              SPACECON
            </h1>
          </div>

          {/* Date */}
          <div 
            className="mb-1 sm:mb-8"
            style={{
              animation: mounted ? 'fadeInUp 0.8s ease-out 0.8s both' : 'none'
            }}
          >
            <div className="inline-block px-5 sm:px-8 py-1 sm:py-3 bg-black/80 border-2 border-red-600/70 backdrop-blur-sm relative overflow-hidden group hover:border-red-500 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600/10 to-transparent animate-pulse" />
              <div className="nav-font text-3xl sm:text-3xl text-white font-bold tracking-[0.15em] sm:tracking-[0.25em] relative group-hover:text-red-100 transition-colors">
                21 - 23 FEB, 2026
              </div>
            </div>
          </div>

          {/* Theme with glow */}
          <div 
            className="mb-2 sm:mb-16"
            style={{
              animation: mounted ? 'fadeInUp 0.8s ease-out 1s both' : 'none'
            }}
          >
            <div className="inline-block relative group">
              <div className="absolute inset-0 bg-red-600 blur-xl sm:blur-2xl opacity-40 animate-pulse group-hover:opacity-60 transition-opacity" />
              <div className="relative px-6 sm:px-10 py-1.5 sm:py-3 bg-red-600 border-2 border-red-400 hover:bg-red-500 transition-all duration-300 cursor-pointer" style={{ animation: 'glowPulse 2s ease-in-out infinite' }}>
                <div className="nav-font text-xl sm:text-xl text-white font-bold tracking-[0.15em] sm:tracking-[0.4em] uppercase">
                  MULTIVERSE MENACE
                </div>
              </div>
            </div>
          </div>

          {/* Countdown with live timer and effects */}
          <div 
            className="mt-1 sm:mt-0 countdown-mobile-container"
            style={{
              animation: mounted ? 'fadeInUp 0.8s ease-out 1.2s both' : 'none'
            }}
          >
            <div className="inline-block w-full max-w-md sm:max-w-none mx-auto">
              <div className="border-3 sm:border-4 border-red-600/50 bg-black/80 backdrop-blur-sm px-3 sm:px-12 py-2 sm:py-8 relative overflow-hidden group hover:border-red-500/70 transition-all duration-300" style={{ animation: 'glowPulse 3s ease-in-out infinite' }}>
                <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 to-transparent" />
                <div className="scanline-effect" />
                
                {/* Countdown layout */}
                <div className="flex flex-wrap justify-center items-center gap-0.5 sm:flex sm:items-center sm:gap-8 sm:gap-12 relative">
                  {/* Days */}
                  <div className="inline-block text-center group/digit time-unit">
                    <div className="tech-font text-6xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-0 sm:mb-1 relative countdown-digit">
                      <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent" />
                      {formatTime(timeLeft.days)}
                    </div>
                    <div className="digital-font text-[10px] sm:text-xs font-bold text-gray-300 tracking-[0.1em] sm:tracking-[0.2em] mt-0 sm:mt-1">
                      DAYS
                    </div>
                  </div>

                  <div className="inline-block text-4xl sm:text-5xl font-black text-red-600 animate-pulse mx-1 sm:mx-2 colon">:</div>

                  {/* Hours */}
                  <div className="inline-block text-center group/digit time-unit">
                    <div className="tech-font text-6xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-0 sm:mb-1 relative countdown-digit">
                      <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent" />
                      {formatTime(timeLeft.hours)}
                    </div>
                    <div className="digital-font text-[10px] sm:text-xs font-bold text-gray-300 tracking-[0.1em] sm:tracking-[0.2em] mt-0 sm:mt-1">
                      HOURS
                    </div>
                  </div>

                  <div className="inline-block text-4xl sm:text-5xl font-black text-red-600 animate-pulse mx-1 sm:mx-2 colon" style={{ animationDelay: '0.5s' }}>:</div>

                  {/* Minutes */}
                  <div className="inline-block text-center group/digit time-unit">
                    <div className="tech-font text-6xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-0 sm:mb-1 relative countdown-digit">
                      <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent" />
                      {formatTime(timeLeft.minutes)}
                    </div>
                    <div className="digital-font text-[10px] sm:text-xs font-bold text-gray-300 tracking-[0.1em] sm:tracking-[0.2em] mt-0 sm:mt-1">
                      MINUTES
                    </div>
                  </div>

                  <div className="inline-block text-4xl sm:text-5xl font-black text-red-600 animate-pulse mx-1 sm:mx-2 colon" style={{ animationDelay: '1s' }}>:</div>

                  {/* Seconds */}
                  <div className="inline-block text-center group/digit time-unit">
                    <div className="tech-font text-6xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-0 sm:mb-1 relative countdown-digit">
                      <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent" />
                      {formatTime(timeLeft.seconds)}
                    </div>
                    <div className="digital-font text-[10px] sm:text-xs font-bold text-gray-300 tracking-[0.1em] sm:tracking-[0.2em] mt-0 sm:mt-1">
                      SECONDS
                    </div>
                  </div>
                </div>

                {/* Corner accents with glow */}
                <div className="absolute top-1 sm:top-2 left-1 sm:left-2 w-3 h-3 sm:w-6 sm:h-6 border-t-2 border-l-2 border-red-600 shadow-[0_0_10px_rgba(220,38,38,0.6)] pulse-border" />
                <div className="absolute top-1 sm:top-2 right-1 sm:right-2 w-3 h-3 sm:w-6 sm:h-6 border-t-2 border-r-2 border-red-600 shadow-[0_0_10px_rgba(220,38,38,0.6)] pulse-border" />
                <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 w-3 h-3 sm:w-6 sm:h-6 border-b-2 border-l-2 border-red-600 shadow-[0_0_10px_rgba(220,38,38,0.6)] pulse-border" />
                <div className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 w-3 h-3 sm:w-6 sm:h-6 border-b-2 border-r-2 border-red-600 shadow-[0_0_10px_rgba(220,38,38,0.6)] pulse-border" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-6 sm:h-40 pointer-events-none bg-gradient-to-t from-black via-black/70 to-transparent" />
      </section>
    </>
  );
}