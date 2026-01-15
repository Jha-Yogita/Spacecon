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
          50% { transform: translateY(-14px) rotate(var(--rotation)); }
        }

        /* ================== ONLY FIXES HERE ================== */

        /* ================== DESKTOP POSTER STYLES ================== */

        /* ================== DESKTOP POSTER STYLES ================== */

        /* ================== DESKTOP POSTER STYLES ================== */

        /* Make posters slightly smaller on desktop */
        @media (min-width: 1024px) {
          .vintage-poster {
            width: 16.5rem !important;
            height: 23.5rem !important;
          }
        }

        .vintage-poster {
          animation: posterFloat 7s ease-in-out infinite;
          transition: filter 0.35s ease, box-shadow 0.35s ease;
        }

        .vintage-poster:hover {
          transform: translateY(-10px) rotate(var(--rotation)) !important;
          filter: brightness(1.08) contrast(1.05);
          box-shadow: 0 28px 80px rgba(220,38,38,0.45);
          z-index: 40;
        }

        /* ================== MOBILE POSTER STYLES ================== */
       /* ================== DESKTOP POSTER STYLES ================== */

       /* ================== DESKTOP POSTER STYLES ================== */

        /* Make posters slightly smaller on desktop */
        @media (min-width: 1024px) {
          .vintage-poster {
            width: 16.5rem !important;
            height: 23.5rem !important;
          }
        }

        .vintage-poster {
          animation: posterFloat 7s ease-in-out infinite;
          transition: filter 0.35s ease, box-shadow 0.35s ease;
        }

        .vintage-poster:hover {
          transform: translateY(-10px) rotate(var(--rotation)) !important;
          filter: brightness(1.08) contrast(1.05);
          box-shadow: 0 28px 80px rgba(220,38,38,0.45);
          z-index: 40;
        }

        /* ================== MOBILE POSTER STYLES ================== */
        @media (max-width: 1023px) {
          .vintage-poster {
            width: 5.5rem !important;
            height: 8rem !important;
            border-width: 3px !important;
            display: block !important;
            opacity: 0.85 !important;
          }
          
          /* Reposition posters for mobile - closer to edges */
          .vintage-poster.mobile-top-left {
            top: 1rem !important;
            left: -0.5rem !important;
          }
          
          .vintage-poster.mobile-top-right {
            top: 1rem !important;
            right: -0.5rem !important;
          }
          
          .vintage-poster.mobile-bottom-left {
            bottom: 1rem !important;
            left: -0.5rem !important;
          }
          
          .vintage-poster.mobile-bottom-right {
            bottom: 1rem !important;
            right: -0.5rem !important;
          }

          /* Scale down poster content for mobile */
          .vintage-poster .russo-font {
            font-size: 0.35rem !important;
            letter-spacing: 0.15em !important;
            line-height: 1.1 !important;
          }
          
          .vintage-poster .text-5xl {
            font-size: 0.9rem !important;
            line-height: 1.1 !important;
          }
          
          .vintage-poster .text-4xl {
            font-size: 0.75rem !important;
            line-height: 1.1 !important;
          }
          
          .vintage-poster .text-3xl {
            font-size: 0.6rem !important;
            line-height: 1.1 !important;
          }
          
          .vintage-poster .cyber-font,
          .vintage-poster .digital-font {
            font-size: 0.3rem !important;
            letter-spacing: 0.1em !important;
          }
          
          .vintage-poster .py-2 {
            padding-top: 0.15rem !important;
            padding-bottom: 0.15rem !important;
          }
          
          .vintage-poster .py-3 {
            padding-top: 0.2rem !important;
            padding-bottom: 0.2rem !important;
          }
          
          .vintage-poster .px-4 {
            padding-left: 0.3rem !important;
            padding-right: 0.3rem !important;
          }
          
          .vintage-poster .mt-4,
          .vintage-poster .mt-3 {
            margin-top: 0.3rem !important;
          }
          
          .vintage-poster .mb-3,
          .vintage-poster .mb-4 {
            margin-bottom: 0.25rem !important;
          }
          
          /* Scale corner accents */
          .vintage-poster .w-10 {
            width: 0.5rem !important;
            height: 0.5rem !important;
          }
          
          /* Reduce border thickness */
          .vintage-poster .border-4 {
            border-width: 1.5px !important;
          }
          
          .vintage-poster .border-6 {
            border-width: 2px !important;
          }
          
          .vintage-poster .border-3 {
            border-width: 1px !important;
          }
          
          /* Adjust illustrations for mobile */
          .vintage-poster .relative.w-40,
          .vintage-poster .relative.w-28,
          .vintage-poster .relative.w-48,
          .vintage-poster .relative.w-full {
            transform: scale(0.35) !important;
          }
          
          /* Reduce shadows on mobile */
          .vintage-poster {
            box-shadow: 0 10px 30px rgba(220,38,38,0.5) !important;
          }
        }

        @media (max-width: 640px) {
          /* Further adjustments for small phones */
          .vintage-poster {
            width: 4.5rem !important;
            height: 6.5rem !important;
          }
        }

        /* ================== MAIN CONTENT MOBILE FIXES ================== */
        /* ================== MAIN CONTENT MOBILE FIXES ================== */

        /* ==================================================== */

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
            text-shadow: 0 0 20px #DC2626, 3px 3px 0 #DC2626;
          }
          50% {
            text-shadow: 0 0 30px #EF4444, 3px 3px 0 #DC2626;
          }
        }

        .countdown-digit {
          animation: digitGlow 2s ease-in-out infinite;
        }

        .retro-texture {
          background-image:
            repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, transparent 1px, transparent 2px, rgba(0,0,0,0.15) 3px),
            repeating-linear-gradient(90deg, rgba(0,0,0,0.15) 0px, transparent 1px, transparent 2px, rgba(0,0,0,0.15) 3px);
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

      <section id="home" className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-950 via-slate-950 to-black pt-6 pb-2 sm:py-0">
        
        {/* Deep space background with stars */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/20 via-transparent to-transparent" />
        <div className="absolute inset-0 stars-bg" />
        <div className="scanline-effect" />
        <div className="absolute inset-0 diagonal-stripes" />

        {/* Vintage Comic Book Style Space Posters */}
        <div className="absolute inset-0 overflow-hidden pointer-events-auto">
          
          {/* Astronaut in Space Poster - Top Left */}
          {/* MARVEL-STYLE: Cosmic Guardian Poster - Top Left */}
           {/* COSMIC GUARDIAN Poster - Top Left - CLEANED UP */}
      <div 
        className="vintage-poster poster-shake absolute top-12 left-8 w-72 h-[26rem] bg-black border-8 border-red-600 shadow-[0_25px_70px_rgba(220,38,38,0.9)] hidden lg:block"
        style={{ 
          '--rotation': '-6deg',
          animationDelay: '0s'
        } as any}
      >
        {/* Comic book halftone texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '4px 4px'
        }} />
        
        <div className="relative h-full flex flex-col bg-gradient-to-b from-blue-950 via-purple-950 to-black overflow-hidden">
          {/* Subtle energy background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-600/20 to-red-600/20" />
          </div>
          
          {/* Top banner */}
          <div className="relative z-10 bg-red-600 py-2 px-4 border-b-4 border-yellow-400">
            <div className="text-white russo-font text-xs tracking-[0.4em] text-center">
              SPACECON PRESENTS
            </div>
          </div>
          
          {/* Hero Title - Clean and Bold */}
          <div className="relative z-10 text-center mt-4 mb-3">
            <div className="text-yellow-400 russo-font text-5xl tracking-wider"
                 style={{ textShadow: '3px 3px 0 #DC2626, -1px -1px 0 #DC2626' }}>
              COSMIC
            </div>
            <div className="text-white russo-font text-3xl tracking-wider mt-1"
                 style={{ textShadow: '2px 2px 0 #DC2626' }}>
              GUARDIAN
            </div>
          </div>
          
          {/* Hero illustration - Simplified and Clear */}
          <div className="flex-1 flex items-center justify-center relative z-10 px-6 py-4">
            <div className="relative w-40 h-56">
              {/* Head/Helmet - Larger and clearer */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-24 bg-gradient-to-br from-red-500 to-red-700 rounded-t-[50%] border-4 border-yellow-400">
                {/* Visor - Simplified */}
                <div className="absolute top-8 left-3 right-3 h-10 bg-cyan-400 rounded-full border-2 border-cyan-300" />
              </div>
              
              {/* Body - Clean and defined */}
              <div className="absolute top-20 left-1/2 -translate-x-1/2 w-24 h-28 bg-gradient-to-br from-red-600 via-red-700 to-red-800 border-4 border-yellow-400 rounded-lg">
                {/* Chest emblem - Clear and simple */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-yellow-400 rounded-full border-2 border-white">
                  <div className="absolute inset-2 bg-red-600 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-8 bg-white rounded-sm" />
                </div>
              </div>
              
              {/* Cape - Simplified */}
              <div className="absolute top-22 -left-6 w-10 h-28 bg-gradient-to-br from-blue-500 to-blue-800 border-2 border-blue-400 origin-top-right transform rotate-8 rounded-br-lg opacity-90" />
              
              {/* Fist - Clear and powerful */}
              <div className="absolute top-32 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-300 to-yellow-600 rounded-lg border-3 border-yellow-400 transform rotate-[-15deg]" />
              
              {/* Simple energy stars - Minimal */}
              <div className="absolute top-4 left-2 w-2 h-2 bg-yellow-300 rounded-full" />
              <div className="absolute top-12 right-2 w-3 h-3 bg-cyan-400 rounded-full" />
              <div className="absolute bottom-8 right-4 w-2 h-2 bg-white rounded-full" />
            </div>
          </div>
          
          {/* Bottom banner */}
          <div className="relative z-10 bg-gradient-to-r from-red-700 via-red-600 to-red-700 py-3 px-4 border-t-4 border-yellow-400">
            <div className="text-yellow-300 cyber-font text-sm text-center tracking-[0.25em] font-bold">
              DEFENDER OF WORLDS
            </div>
            <div className="text-white text-[10px] text-center mt-1 tracking-widest opacity-80">
              SPACECON 2026 • FEB 21-23
            </div>
          </div>
        </div>
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-yellow-400" />
        <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-yellow-400" />
        <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-yellow-400" />
        <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-yellow-400" />
      </div>

      {/* ROCKET FORCE Poster - Top Right - CLEANED UP */}
      <div 
        className="vintage-poster poster-shake absolute top-16 right-8 w-72 h-[26rem] bg-black border-8 border-orange-600 shadow-[0_25px_70px_rgba(249,115,22,0.9)] hidden lg:block"
        style={{ 
          '--rotation': '5deg',
          animationDelay: '1.5s'
        } as any}
      >
        {/* Comic book halftone texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '4px 4px'
        }} />
        
        <div className="relative h-full flex flex-col bg-gradient-to-b from-orange-950 via-red-950 to-black overflow-hidden">
          {/* Subtle energy background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-orange-600/20 to-red-600/20" />
          </div>
          
          {/* Top banner */}
          <div className="relative z-10 bg-orange-600 py-2 px-4 border-b-4 border-yellow-400">
            <div className="text-white russo-font text-xs tracking-[0.4em] text-center">
              SPACECON PRESENTS
            </div>
          </div>
          
          {/* Hero Title - Clean and Bold */}
          <div className="relative z-10 text-center mt-4 mb-3">
            <div className="text-yellow-400 russo-font text-5xl tracking-wider"
                 style={{ textShadow: '3px 3px 0 #EA580C, -1px -1px 0 #EA580C' }}>
              ROCKET
            </div>
            <div className="text-white russo-font text-3xl tracking-wider mt-1"
                 style={{ textShadow: '2px 2px 0 #EA580C' }}>
              FORCE
            </div>
          </div>
          
          {/* Rocket illustration - Simplified and Clear */}
          <div className="flex-1 flex items-center justify-center relative z-10 px-6 py-4">
            {/* Simple background stars */}
            <div className="absolute top-8 left-8 w-2 h-2 bg-yellow-200 rounded-full" />
            <div className="absolute top-16 right-12 w-2 h-2 bg-white rounded-full" />
            <div className="absolute bottom-20 left-12 w-2 h-2 bg-yellow-100 rounded-full" />
            
            <div className="relative w-28 h-64">
              {/* Rocket nose - Clean */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-20 bg-gradient-to-b from-red-400 to-red-600 rounded-t-full border-4 border-yellow-400" />
              
              {/* Rocket body - Clear definition */}
              <div className="absolute top-16 left-1/2 -translate-x-1/2 w-20 h-36 bg-gradient-to-b from-red-600 via-orange-600 to-red-700 border-4 border-yellow-400">
                {/* Window - Simplified */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-10 h-10 bg-cyan-400 rounded-full border-3 border-yellow-400" />
                
                {/* Clean stripes */}
                <div className="absolute top-24 left-0 right-0 h-2 bg-yellow-400" />
              </div>
              
              {/* Fins - Clean angles */}
              <div className="absolute top-44 -left-4 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-orange-700 border-b-[28px] border-b-orange-700 border-4 border-yellow-400" />
              <div className="absolute top-44 -right-4 w-0 h-0 border-l-[20px] border-l-orange-700 border-r-[20px] border-r-transparent border-b-[28px] border-b-orange-700 border-4 border-yellow-400" />
              
              {/* Simplified flames */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-20 bg-gradient-to-b from-yellow-300 via-orange-400 to-red-500"
                   style={{ clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)' }} />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-16 bg-gradient-to-b from-white via-yellow-200 to-transparent"
                   style={{ clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)' }} />
            </div>
          </div>
          
          {/* Bottom banner */}
          <div className="relative z-10 bg-gradient-to-r from-orange-700 via-orange-600 to-orange-700 py-3 px-4 border-t-4 border-yellow-400">
            <div className="text-yellow-300 cyber-font text-sm text-center tracking-[0.25em] font-bold">
              BLAST TO THE STARS
            </div>
            <div className="text-white text-[10px] text-center mt-1 tracking-widest opacity-80">
              SPACECON 2026 • FEB 21-23
            </div>
          </div>
        </div>
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-yellow-400" />
        <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-yellow-400" />
        <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-yellow-400" />
        <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-yellow-400" />
      </div>

      {/* SATURN KING Poster - Bottom Left - CLEANED UP */}
      <div 
        className="vintage-poster poster-shake absolute bottom-12 left-12 w-72 h-[26rem] bg-black border-8 border-purple-600 shadow-[0_25px_70px_rgba(147,51,234,0.9)] hidden lg:block"
        style={{ 
          '--rotation': '4deg',
          animationDelay: '3s'
        } as any}
      >
        {/* Comic book halftone texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '4px 4px'
        }} />
        
        <div className="relative h-full flex flex-col bg-gradient-to-b from-indigo-950 via-purple-950 to-black overflow-hidden">
          {/* Subtle energy background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-indigo-600/20 to-blue-600/20" />
          </div>
          
          {/* Top banner */}
          <div className="relative z-10 bg-purple-600 py-2 px-4 border-b-4 border-yellow-400">
            <div className="text-white russo-font text-xs tracking-[0.4em] text-center">
              SPACECON PRESENTS
            </div>
          </div>
          
          {/* Hero Title - Clean and Bold */}
          <div className="relative z-10 text-center mt-4 mb-4">
            <div className="text-yellow-400 russo-font text-5xl tracking-wider"
                 style={{ textShadow: '3px 3px 0 #9333EA, -1px -1px 0 #9333EA' }}>
              SATURN
            </div>
            <div className="text-white russo-font text-3xl tracking-wider mt-1"
                 style={{ textShadow: '2px 2px 0 #9333EA' }}>
              KING
            </div>
          </div>
          
          {/* Saturn illustration - Simplified and Clear */}
          <div className="flex-1 flex items-center justify-center relative z-10 px-6">
            {/* Simple background stars */}
            <div className="absolute top-12 left-10 w-2 h-2 bg-white rounded-full" />
            <div className="absolute top-20 right-14 w-1 h-1 bg-white rounded-full" />
            <div className="absolute bottom-24 left-14 w-2 h-2 bg-yellow-200 rounded-full" />
            
            <div className="relative w-48 h-48">
              {/* Planet - Clean and bold */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-orange-400 to-orange-600 rounded-full border-6 border-yellow-400">
                {/* Simple surface details */}
                <div className="absolute top-12 left-8 right-16 h-6 bg-orange-500/30 rounded-full" />
                <div className="absolute top-1/2 left-0 right-0 h-4 bg-yellow-500/20 rounded-full" />
              </div>
              
              {/* Clean ring system */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-12 -right-12 h-10 bg-gradient-to-r from-transparent via-yellow-300 to-transparent rounded-full transform rotate-12 border-4 border-yellow-400" />
              <div className="absolute top-1/2 -translate-y-1/2 -left-12 -right-12 h-5 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full transform rotate-12 translate-y-6 border-2 border-orange-400" />
            </div>
          </div>
          
          {/* Bottom banner */}
          <div className="relative z-10 bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 py-3 px-4 border-t-4 border-yellow-400">
            <div className="text-yellow-300 cyber-font text-sm text-center tracking-[0.25em] font-bold">
              LORD OF THE RINGS
            </div>
            <div className="text-white text-[10px] text-center mt-1 tracking-widest opacity-80">
              SPACECON 2026 • FEB 21-23
            </div>
          </div>
        </div>
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-yellow-400" />
        <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-yellow-400" />
        <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-yellow-400" />
        <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-yellow-400" />
      </div>

      {/* GALACTIC EXPLORER Poster - Bottom Right - CLEANED UP */}
      <div 
        className="vintage-poster poster-shake absolute bottom-16 right-12 w-72 h-[26rem] bg-black border-8 border-cyan-600 shadow-[0_25px_70px_rgba(8,145,178,0.9)] hidden lg:block"
        style={{ 
          '--rotation': '-5deg',
          animationDelay: '4.5s'
        } as any}
      >
        {/* Comic book halftone texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '4px 4px'
        }} />
        
        <div className="relative h-full flex flex-col bg-gradient-to-b from-blue-950 via-cyan-950 to-black overflow-hidden">
          {/* Subtle energy background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-teal-600/20" />
          </div>
          
          {/* Top banner */}
          <div className="relative z-10 bg-cyan-600 py-2 px-4 border-b-4 border-yellow-400">
            <div className="text-white russo-font text-xs tracking-[0.4em] text-center">
              SPACECON PRESENTS
            </div>
          </div>
          
          {/* Hero Title - Clean and Bold */}
          <div className="relative z-10 text-center mt-3 mb-3">
            <div className="text-yellow-400 russo-font text-4xl tracking-wider"
                 style={{ textShadow: '3px 3px 0 #0891B2, -1px -1px 0 #0891B2' }}>
              GALACTIC
            </div>
            <div className="text-white russo-font text-4xl tracking-wider mt-1"
                 style={{ textShadow: '2px 2px 0 #0891B2' }}>
              EXPLORER
            </div>
          </div>
          
          {/* Space scene - Simplified and Clear */}
          <div className="flex-1 relative z-10 px-6">
            <div className="relative w-full h-full">
              {/* Clean planets - well spaced */}
              <div className="absolute top-14 left-10 w-18 h-18 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-4 border-yellow-400">
                <div className="absolute inset-2 bg-orange-500/20 rounded-full" />
              </div>
              
              <div className="absolute top-28 right-14 w-14 h-14 bg-gradient-to-br from-red-400 to-red-600 rounded-full border-4 border-red-500">
                <div className="absolute top-2 left-2 w-3 h-3 bg-red-700/50 rounded-full" />
              </div>
              
              <div className="absolute bottom-28 left-14 w-22 h-22 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-4 border-blue-400">
                {/* Clean ring */}
                <div className="absolute top-1/2 -translate-y-1/2 -left-4 -right-4 h-3 bg-gradient-to-r from-transparent via-cyan-300 to-transparent rounded-full transform rotate-[15deg] border-2 border-cyan-400" />
              </div>
              
              {/* Simple stars */}
              <div className="absolute top-24 left-1/2 w-3 h-3 bg-white rounded-full" />
              <div className="absolute top-40 right-20 w-2 h-2 bg-yellow-300 rounded-full" />
              <div className="absolute bottom-40 left-24 w-2 h-2 bg-cyan-300 rounded-full" />
              
              {/* Clean spaceship */}
              <div className="absolute bottom-24 right-20 w-14 h-10 bg-gradient-to-br from-gray-300 to-gray-500 transform -rotate-45 border-3 border-yellow-400">
                {/* Cockpit */}
                <div className="absolute top-1 left-2 w-6 h-6 bg-cyan-400 rounded-lg border-2 border-cyan-300" />
                {/* Nose */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-yellow-400" />
              </div>
            </div>
          </div>
          
          {/* Bottom banner */}
          <div className="relative z-10 bg-gradient-to-r from-cyan-700 via-cyan-600 to-cyan-700 py-3 px-4 border-t-4 border-yellow-400">
            <div className="text-yellow-300 cyber-font text-sm text-center tracking-[0.25em] font-bold">
              JOURNEY TO INFINITY
            </div>
            <div className="text-white text-[10px] text-center mt-1 tracking-widest opacity-80">
              SPACECON 2026 • FEB 21-23
            </div>
          </div>
        </div>
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-yellow-400" />
        <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-yellow-400" />
        <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-yellow-400" />
        <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-yellow-400" />
      </div>
        </div>

        {/* Main Content */}
        <div className="relative z-20 text-center px-4 max-w-7xl mx-auto mt-[-3rem] sm:mt-0">
          
          {/* Title with glitch effect */}
          <div 
            className="mb-4 sm:mb-10"
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
            className="mb-4 sm:mb-8"
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
            className="mb-6 sm:mb-16"
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

          {/* Countdown with live timer and effects - MOBILE FIXED */}
          <div 
            className="mt-0 sm:mt-0 countdown-mobile-container"
            style={{
              animation: mounted ? 'fadeInUp 0.8s ease-out 1.2s both' : 'none'
            }}
          >
            <div className="inline-block w-full max-w-md sm:max-w-none mx-auto">
              <div className="border-3 sm:border-4 border-red-600/50 bg-black/80 backdrop-blur-sm px-3 sm:px-12 py-2 sm:py-8 relative overflow-hidden group hover:border-red-500/70 transition-all duration-300" style={{ animation: 'glowPulse 3s ease-in-out infinite' }}>
                <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 to-transparent" />
                <div className="scanline-effect" />
                
                {/* Countdown layout - Fixed for mobile */}
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
        <div className="absolute bottom-0 left-0 w-full h-8 sm:h-40 pointer-events-none bg-gradient-to-t from-black via-black/70 to-transparent" />
      </section>
    </>
  );
}