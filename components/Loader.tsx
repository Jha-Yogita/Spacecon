"use client";

import React, { useEffect, useState } from 'react';

export default function Loader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showLoader, setShowLoader] = useState(false);
  
  useEffect(() => {
    // Wait for fonts and then show loader
    const initLoader = async () => {
      // Wait for fonts to be available
      if (document.fonts) {
        await document.fonts.load("700 72px 'Bangers'");
        await document.fonts.load("700 48px 'Bebas Neue'");
        await document.fonts.ready;
      }
      
      // Small delay to ensure rendering is complete
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setShowLoader(true);
        });
      });
    };

    initLoader();
  }, []);

  useEffect(() => {
    if (!showLoader) return;

    const duration = 4500;
    const startTime = Date.now();

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.floor(newProgress));

      if (newProgress >= 100) {
        clearInterval(progressInterval);
      }
    }, 16);

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 800);
    }, duration + 300);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [showLoader]);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Bebas+Neue&display=block');

        .comic-font { 
          font-family: 'Bangers', cursive; 
          letter-spacing: 0.05em;
        }
        .title-font { 
          font-family: 'Bebas Neue', sans-serif;
        }

        @keyframes ring-rotate {
          0% { transform: rotate(-90deg); }
          100% { transform: rotate(270deg); }
        }

        @keyframes star-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .text-outline-white {
          text-shadow: 
            -3px -3px 0 #FFF, 3px -3px 0 #FFF,
            -3px 3px 0 #FFF, 3px 3px 0 #FFF,
            -3px 0 0 #FFF, 3px 0 0 #FFF,
            0 -3px 0 #FFF, 0 3px 0 #FFF;
        }
      `}</style>

      {loading && (
        <div 
          className={`fixed inset-0 z-50 overflow-hidden ${fadeOut ? 'opacity-0' : 'opacity-100'} ${showLoader ? '' : 'invisible'}`}
          style={{ 
            background: 'linear-gradient(180deg, #000000 0%, #0A0A0A 50%, #000000 100%)',
            transition: fadeOut ? 'opacity 800ms' : 'none'
          }}
        >
          <div className="hidden md:block absolute top-8 left-8">
            <div className="relative w-20 h-20">
              <div className="absolute top-0 left-0 w-full h-1 bg-red-600" />
              <div className="absolute top-0 left-0 w-1 h-full bg-red-600" />
            </div>
          </div>

          <div className="hidden md:block absolute top-8 right-8">
            <div className="relative w-20 h-20">
              <div className="absolute top-0 right-0 w-full h-1 bg-red-600" />
              <div className="absolute top-0 right-0 w-1 h-full bg-red-600" />
            </div>
          </div>

          <div className="hidden md:block absolute bottom-8 left-8">
            <div className="relative w-20 h-20">
              <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600" />
              <div className="absolute bottom-0 left-0 w-1 h-full bg-red-600" />
            </div>
          </div>

          <div className="hidden md:block absolute bottom-8 right-8">
            <div className="relative w-20 h-20">
              <div className="absolute bottom-0 right-0 w-full h-1 bg-red-600" />
              <div className="absolute bottom-0 right-0 w-1 h-full bg-red-600" />
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto px-4 sm:px-8 py-4 sm:py-8">
              
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 flex items-center justify-center mb-4 sm:mb-8">
                <div className="absolute inset-0 rounded-full border-4 sm:border-6 md:border-8 border-white" 
                  style={{ boxShadow: '0 0 0 2px #000, 0 0 40px rgba(220, 38, 38, 0.4)' }} />
                
                <div className="absolute inset-1 sm:inset-2 md:inset-4 rounded-full border-2 sm:border-3 md:border-4 border-black bg-black" />

                <svg className="absolute inset-4 sm:inset-6 md:inset-8 w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56" style={{ animation: 'ring-rotate 3s linear infinite' }}>
                  <circle cx="72" cy="72" r="67" stroke="#1A1A1A" strokeWidth="12" fill="none" className="sm:hidden" />
                  <circle cx="88" cy="88" r="83" stroke="#1A1A1A" strokeWidth="14" fill="none" className="hidden sm:block md:hidden" />
                  <circle cx="112" cy="112" r="107" stroke="#1A1A1A" strokeWidth="16" fill="none" className="hidden md:block" />
                  <circle
                    cx="72"
                    cy="72"
                    r="67"
                    stroke="#DC2626"
                    strokeWidth="14"
                    fill="none"
                    strokeDasharray="421"
                    strokeLinecap="round"
                    className="sm:hidden"
                    style={{
                      strokeDashoffset: 421 - (421 * progress) / 100,
                      transition: 'stroke-dashoffset 0.1s linear',
                      filter: 'drop-shadow(0 0 10px rgba(220, 38, 38, 0.8))',
                    }}
                  />
                  <circle
                    cx="88"
                    cy="88"
                    r="83"
                    stroke="#DC2626"
                    strokeWidth="16"
                    fill="none"
                    strokeDasharray="521"
                    strokeLinecap="round"
                    className="hidden sm:block md:hidden"
                    style={{
                      strokeDashoffset: 521 - (521 * progress) / 100,
                      transition: 'stroke-dashoffset 0.1s linear',
                      filter: 'drop-shadow(0 0 10px rgba(220, 38, 38, 0.8))',
                    }}
                  />
                  <circle
                    cx="112"
                    cy="112"
                    r="107"
                    stroke="#DC2626"
                    strokeWidth="18"
                    fill="none"
                    strokeDasharray="672"
                    strokeLinecap="round"
                    className="hidden md:block"
                    style={{
                      strokeDashoffset: 672 - (672 * progress) / 100,
                      transition: 'stroke-dashoffset 0.1s linear',
                      filter: 'drop-shadow(0 0 10px rgba(220, 38, 38, 0.8))',
                    }}
                  />
                  <circle cx="72" cy="72" r="77" stroke="#FFF" strokeWidth="2" fill="none" opacity="0.5" className="sm:hidden" />
                  <circle cx="88" cy="88" r="93" stroke="#FFF" strokeWidth="2" fill="none" opacity="0.5" className="hidden sm:block md:hidden" />
                  <circle cx="112" cy="112" r="117" stroke="#FFF" strokeWidth="2" fill="none" opacity="0.5" className="hidden md:block" />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center" style={{ animation: 'star-spin 4s linear infinite' }}>
                  <svg width="55" height="55" viewBox="0 0 100 100" className="sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px]">
                    <polygon
                      points="50,10 61,40 92,40 67,57 77,88 50,70 23,88 33,57 8,40 39,40"
                      fill="#DC2626"
                      stroke="#FFF"
                      strokeWidth="4"
                    />
                    <polygon points="50,25 56,42 72,42 60,51 65,68 50,58 35,68 40,51 28,42 44,42" fill="#FFF" opacity="0.8" />
                  </svg>
                </div>

                {/* Mobile + tablet → 4 squares */}
                <div className="block md:hidden">
                  {[0, 90, 180, 270].map((rotation, i) => (
                    <div
                      key={i}
                      className="absolute w-4 h-4 sm:w-5 sm:h-5 bg-red-600 border-2 sm:border-3 border-white"
                      style={{
                        left: '50%',
                        top: '0',
                        marginLeft: rotation === 0 || rotation === 180 ? '-8px' : '-10px',
                        marginTop: rotation === 0 || rotation === 180 ? '-8px' : '-10px',
                        transform: `rotate(${45 + rotation}deg) translateY(${rotation === 0 || rotation === 180 ? '-93px' : '-121px'})`,
                        transformOrigin: rotation === 0 || rotation === 180 ? '8px 101px' : '10px 131px',
                      }}
                    />
                  ))}
                </div>

                {/* Laptop & up → ONLY 180 */}
                <div className="hidden md:block">
                  <div
                    className="absolute w-6 h-6 bg-red-600 border-3 border-white"
                    style={{
                      left: '50%',
                      top: '50%',
                      marginLeft: '-12px',
                      marginTop: '-12px',
                      transform: 'rotate(225deg) translateY(-150px)',
                      transformOrigin: '12px 12px',
                    }}
                  />
                </div>
              </div>


              <div className="w-full flex justify-center mb-3 sm:mb-6">
                <div className="relative inline-block">
                  <h1 
                    className="comic-font text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-red-600 text-outline-white leading-none"
                    style={{
                      filter: 'drop-shadow(4px 4px 0px rgba(0, 0, 0, 0.5))',
                    }}
                  >
                    SPACECON
                  </h1>
                  <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-1 sm:h-2 bg-white mx-auto" 
                    style={{ width: '90%', marginLeft: '5%' }} />
                </div>
              </div>

              <div className="w-full flex justify-center mb-3 sm:mb-6">
                <div className="bg-red-600 border-2 sm:border-3 md:border-4 border-white px-4 sm:px-6 md:px-8 py-1 sm:py-2 md:py-3 inline-block"
                  style={{ boxShadow: '4px 4px 0 rgba(0, 0, 0, 0.6)' }}>
                  <span className="title-font text-sm sm:text-lg md:text-xl lg:text-2xl font-black text-white tracking-wider sm:tracking-widest">
                    MULTIVERSE MENACE
                  </span>
                </div>
              </div>

              <div className="w-full flex justify-center">
                <div className="bg-white border-3 sm:border-4 md:border-5 border-black px-5 sm:px-7 md:px-10 py-2 sm:py-3 md:py-3 inline-block"
                  style={{ boxShadow: '5px 5px 0 rgba(0, 0, 0, 0.4)' }}>
                  <div className="comic-font text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black tabular-nums leading-none">
                    {progress}
                    <span className="text-red-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">%</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      <div className={loading ? 'hidden' : 'block'}>
        {children}
      </div>
    </>
  );
}