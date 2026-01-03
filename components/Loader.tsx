"use client";

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Loader({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(pathname === '/');
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [displayText, setDisplayText] = useState('');
  
  const loadingText = 'INITIALIZING SYSTEMS...';

  useEffect(() => {
    // Only show loader on home page
    if (pathname !== '/') {
      setLoading(false);
      return;
    }

    const duration = 4000;
    const startTime = Date.now();

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.floor(newProgress));

      if (newProgress >= 100) {
        clearInterval(progressInterval);
      }
    }, 16);

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= loadingText.length) {
        setDisplayText(loadingText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 120);

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 800);
    }, duration + 300);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
      clearInterval(typingInterval);
    };
  }, [pathname]);

  return (
    <>
      {/* Loader Screen */}
      {loading && (
        <div 
          className={`fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden transition-opacity duration-800 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
        >
          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-12 h-full">
              {[...Array(60)].map((_, i) => (
                <div 
                  key={i} 
                  className="border-r border-b border-white/10 transition-opacity duration-1000"
                  style={{
                    animation: 'gridPulse 3s ease-in-out infinite',
                    animationDelay: `${i * 0.03}s`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Scanline effect */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-5"
            style={{
              background: 'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
              animation: 'scanline 4s linear infinite',
              height: '150px',
            }}
          />

          {/* Main content */}
          <div className="relative z-10 text-center">
            {/* Enhanced spinning ring with smooth animation */}
            <div className="relative w-28 h-28 mx-auto mb-14">
              {/* Outer ring glow */}
              <div className="absolute inset-0 rounded-full border border-white/5" />
              
              {/* Main animated ring */}
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle
                  cx="56"
                  cy="56"
                  r="52"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1"
                  fill="none"
                />
                <circle
                  cx="56"
                  cy="56"
                  r="52"
                  stroke="white"
                  strokeWidth="2.5"
                  fill="none"
                  strokeDasharray="326"
                  strokeLinecap="round"
                  style={{
                    strokeDashoffset: 326 - (326 * progress) / 100,
                    transition: 'stroke-dashoffset 0.15s ease-out',
                    filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.4))',
                  }}
                />
              </svg>

              {/* Pulsing center with glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-white" style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-white/50 animate-ping" />
                </div>
              </div>
            </div>

            {/* SpaceCon text with subtle animation */}
            <h1 className="text-7xl md:text-8xl font-bold text-white tracking-wider mb-8 transition-all duration-300">
              Space<span className="text-white/50">Con</span>
            </h1>

            {/* Progress percentage - 0 to 100 (normal counting) */}
            <div className="text-5xl font-bold text-white mb-5 font-mono tabular-nums tracking-wider">
              {progress}
              <span className="text-white/30 text-4xl">%</span>
            </div>

            {/* Enhanced progress bar */}
            <div className="w-80 h-1.5 bg-white/8 rounded-full mx-auto mb-8 overflow-hidden relative">
              {/* Shimmer effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                style={{
                  animation: 'shimmer 2.5s ease-in-out infinite',
                }}
              />
              {/* Main progress */}
              <div 
                className="h-full bg-white rounded-full relative transition-all duration-150 ease-out"
                style={{ 
                  width: `${progress}%`,
                  boxShadow: '0 0 12px rgba(255,255,255,0.4)',
                }}
              >
                {/* Moving tip glow */}
                <div 
                  className="absolute right-0 top-0 w-2 h-full bg-white rounded-full"
                  style={{ animation: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
                />
              </div>
            </div>

            {/* Typing animation text */}
            <div className="h-7 flex items-center justify-center">
              <span className="text-white/50 text-sm tracking-[0.35em] font-mono transition-all duration-200">
                {displayText}
              </span>
              <span 
                className="text-white/50 text-sm font-mono ml-1"
                style={{ animation: 'blink 1s step-end infinite' }}
              >
                |
              </span>
            </div>
          </div>

          {/* Corner accents with animation */}
          {[
            'top-8 left-8',
            'top-8 right-8 rotate-90',
            'bottom-8 left-8 -rotate-90',
            'bottom-8 right-8 rotate-180'
          ].map((position, i) => (
            <div 
              key={i}
              className={`absolute ${position} w-14 h-14 border-t-2 border-l-2 border-white/20 transition-all duration-1000`}
              style={{
                animation: 'cornerPulse 3s ease-in-out infinite',
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}

          <style jsx>{`
            @keyframes gridPulse {
              0%, 100% { opacity: 0.1; }
              50% { opacity: 0.3; }
            }

            @keyframes scanline {
              0% { transform: translateY(-100%); }
              100% { transform: translateY(100vh); }
            }

            @keyframes shimmer {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(100%); }
            }

            @keyframes cornerPulse {
              0%, 100% { opacity: 0.2; }
              50% { opacity: 0.5; }
            }

            @keyframes blink {
              0%, 50% { opacity: 1; }
              51%, 100% { opacity: 0; }
            }

            @keyframes pulse {
              0%, 100% {
                opacity: 1;
                transform: scale(1);
              }
              50% {
                opacity: 0.8;
                transform: scale(1.1);
              }
            }
          `}</style>
        </div>
      )}

      {/* Main Content */}
      <div className={loading ? 'hidden' : 'block'}>
        {children}
      </div>
    </>
  );
}