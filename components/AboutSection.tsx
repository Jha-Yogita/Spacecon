'use client';

import Tesseract from '@/components/Tesseract';
import { useState, useEffect } from 'react';

export default function AboutSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Montserrat:wght@500;600;700;800;900&display=swap');

        .comic-title {
          font-family: 'Bangers', cursive;
          letter-spacing: 0.06em;
        }

        .body-font {
          font-family: 'Montserrat', sans-serif;
        }

        @keyframes subtle-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }

        @keyframes comic-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .disable-interaction {
          pointer-events: none !important;
          user-select: none !important;
          touch-action: none !important;
        }

        .disable-interaction * {
          pointer-events: none !important;
          user-select: none !important;
          touch-action: none !important;
        }
      `}</style>

      <section
        id="about"
        className="relative min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 lg:py-32 bg-black overflow-hidden text-white"
        style={{
          background:
            'radial-gradient(circle at top, #140202 0%, #080000 45%, #000 100%)'
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.08]"
          style={{
            background:
              'repeating-conic-gradient(from 0deg at 50% 50%, #dc2626 0deg 12deg, transparent 12deg 24deg)',
            animation: 'comic-spin 160s linear infinite'
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
            backgroundSize: '6px 6px'
          }}
        />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 relative z-30">
            <h1
              className="comic-title uppercase leading-none px-2"
              style={{
                fontSize: 'clamp(2.5rem, 10vw + 1rem, 9rem)',
                WebkitTextStroke: '2px #dc2626',
                textShadow: '0 4px 0 #dc2626, 0 8px 0 #000'
              }}
            >
              ABOUT US
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-16 items-center">
            <div className="w-full lg:w-1/2 order-2 lg:order-1 space-y-6 sm:space-y-8 lg:space-y-10 relative z-20">
              <div className="relative">
                <div className="absolute inset-0 bg-black translate-x-1.5 translate-y-1.5 sm:translate-x-2 sm:translate-y-2" />
                <div className="relative bg-gradient-to-br from-zinc-950 via-zinc-900 to-black border-2 sm:border-3 border-red-600 p-5 sm:p-6 md:p-8 lg:p-10">
                  <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 bg-red-600 border-2 sm:border-3 border-black px-2.5 sm:px-3 md:px-4 py-0.5 sm:py-1 z-10">
                    <span className="comic-title text-white text-xs sm:text-sm md:text-base">THE CORE</span>
                  </div>

                  <div className="space-y-3 sm:space-y-3.5 body-font text-sm sm:text-base md:text-lg leading-snug sm:leading-normal text-gray-200">

  <p>
    At{' '}
    <span className="comic-title text-red-500 text-base sm:text-lg md:text-xl mx-1">
      SPACECON 2026
    </span>
    , our diverse range of events unite competition, creativity, and exploration
    through engaging activities.
  </p>

  <p>
    From solving problems under pressure and designing space missions to quizzes,
    graph challenges, and astro-themed adventures, participants dive deep into
    space science using both analytical thinking and imagination.
  </p>

  <p>
    Creativity takes center stage through photography and film screenings,
    offering a unique artistic lens into the mysteries of the universe.
  </p>

</div>

                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-black translate-x-1.5 translate-y-1.5 sm:translate-x-2 sm:translate-y-2" />
                <div className="relative bg-gradient-to-br from-zinc-950 via-zinc-900 to-black border-2 sm:border-3 border-red-600 p-5 sm:p-6 md:p-8 lg:p-10">
                  <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 bg-red-600 border-2 sm:border-3 border-black px-2.5 sm:px-3 md:px-4 py-0.5 sm:py-1 z-10">
                    <span className="comic-title text-white text-xs sm:text-sm md:text-base">THE MISSION</span>
                  </div>

                 <div className="space-y-3 sm:space-y-3.5 body-font text-xs sm:text-sm md:text-base leading-snug sm:leading-normal text-gray-300">

  <p>
    Throughout these experiences, participants build critical thinking skills,
    teamwork, confidence, and gain exposure to real-world applications of space
    science and technology.
  </p>

  <p>
    SpaceCon is more than just a conclave , it’s a launchpad. By blending science
    with imagination, it fosters curiosity and collaboration, shaping minds
    ready to innovate.
  </p>

</div>

                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center relative z-10">
              <div
                className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg"
                style={{ animation: 'subtle-float 6s ease-in-out infinite' }}
              >
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="absolute w-[240px] sm:w-[280px] md:w-[360px] lg:w-[520px] h-[240px] sm:h-[280px] md:h-[360px] lg:h-[520px] rounded-full border border-cyan-400/30" />
                  <div className="absolute w-[300px] sm:w-[360px] md:w-[440px] lg:w-[600px] h-[300px] sm:h-[360px] md:h-[440px] lg:h-[600px] rounded-full border border-cyan-300/15" />
                </div>

                <div className={`w-full flex justify-center ${isMobile ? 'disable-interaction' : ''}`}>
                  <Tesseract />
                </div>

                <div className="absolute -top-3 sm:-top-4 md:-top-6 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:-left-6 bg-red-600 border-2 sm:border-3 md:border-4 border-black px-2.5 sm:px-3 md:px-5 py-1 sm:py-1.5 md:py-2 z-30">
                  <span className="comic-title text-white text-sm sm:text-base md:text-lg lg:text-xl whitespace-nowrap">
                    POWER SOURCE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}