'use client';

import React from 'react';
import { useRouter } from 'next/navigation';


const sponsors = [
  'SPACEX', 'NASA', 'BLUE ORIGIN', 'GOOGLE', 'MICROSOFT',
  'NVIDIA', 'ISRO', 'AMAZON', 'META', 'INTEL'
];

export default function SponsorsSection() {
  const router = useRouter();
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Montserrat:wght@600;700;800;900&display=swap');

        .starlord { font-family: 'Bangers', cursive; letter-spacing: .06em; }
        .mono { font-family: 'Montserrat', sans-serif; }

        @keyframes moveLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes moveRight {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }

        @keyframes planetFloat {
          0%,100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-40px) rotate(6deg); }
        }

        .scroll-container:hover {
          animation-play-state: paused !important;
        }
      `}</style>

      <section className="relative py-20 sm:py-32 lg:py-40 bg-black overflow-hidden">

        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -left-1/2 sm:-left-1/3 lg:-left-1/4 top-1/4 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] lg:w-[900px] lg:h-[900px] rounded-full"
            style={{
              background:
                'radial-gradient(circle at 30% 30%, #93c5fd, #2563eb 35%, #022c22 70%)',
              boxShadow:
                'inset -180px -180px 260px rgba(0,0,0,.95), 0 0 160px rgba(59,130,246,.5)',
              animation: 'planetFloat 18s ease-in-out infinite'
            }}
          />
          <div
            className="absolute -right-1/2 sm:-right-1/3 lg:-right-1/4 bottom-0 w-[400px] h-[400px] sm:w-[550px] sm:h-[550px] lg:w-[700px] lg:h-[700px] rounded-full"
            style={{
              background:
                'radial-gradient(circle at 30% 30%, #86efac, #16a34a 35%, #022c22 70%)',
              boxShadow:
                'inset -160px -160px 240px rgba(0,0,0,.97), 0 0 140px rgba(34,197,94,.45)',
              animation: 'planetFloat 22s ease-in-out infinite'
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

          <div className="text-center mb-12 sm:mb-16 lg:mb-24">
            <h2
              className="starlord text-5xl sm:text-7xl md:text-8xl lg:text-9xl mt-4 sm:mt-6 text-white"
              style={{
                WebkitTextStroke: '2px #dc2626',
                textShadow: '4px 4px 0 #000'
              }}
            >
              SPONSORS
            </h2>
          </div>

          <div className="overflow-hidden mb-8 sm:mb-12 lg:mb-16">
            <div 
              className="scroll-container flex gap-4 sm:gap-6 lg:gap-10 w-max"
              style={{ animation: 'moveLeft 40s linear infinite' }}
            >
              {[...sponsors, ...sponsors].map((name, i) => (
                <div
                  key={i}
                  className={`
                    starlord text-xl sm:text-2xl lg:text-4xl px-6 sm:px-10 lg:px-14 py-4 sm:py-6 lg:py-10 border-2 sm:border-3 lg:border-4 border-black
                    bg-zinc-900 text-white
                    shadow-[4px_4px_0_#000] sm:shadow-[6px_6px_0_#000]
                    transition-all duration-300
                    hover:bg-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,.8)]
                    hover:-translate-y-2
                  `}
                >
                  {name}
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden mb-8 sm:mb-12 lg:mb-16">
            <div 
              className="scroll-container flex gap-4 sm:gap-6 lg:gap-10 w-max"
              style={{ animation: 'moveRight 45s linear infinite' }}
            >
              {[...sponsors, ...sponsors].map((name, i) => (
                <div
                  key={i}
                  className={`
                    starlord text-xl sm:text-2xl lg:text-4xl px-6 sm:px-10 lg:px-14 py-4 sm:py-6 lg:py-10 border-2 sm:border-3 lg:border-4 border-black
                    bg-zinc-900 text-white
                    shadow-[4px_4px_0_#000] sm:shadow-[6px_6px_0_#000]
                    transition-all duration-300
                    hover:bg-blue-600 hover:shadow-[0_0_30px_rgba(37,99,235,.8)]
                    hover:-translate-y-2
                  `}
                >
                  {name}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-12 lg:mt-16">
            <button
              onClick={() => router.push('/sponsors')}
              className="event-btn starlord text-xl sm:text-2xl lg:text-3xl px-8 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 bg-red-600 text-white border-3 sm:border-4 border-black uppercase shadow-[6px_6px_0_#000] sm:shadow-[8px_8px_0_#000] lg:shadow-[10px_10px_0_#000] hover:bg-red-700 hover:shadow-[0_0_30px_rgba(220,38,38,.8)] hover:-translate-y-1 transition-all duration-300"
            >
              ALL SPONSORS →
            </button>
          </div>

        </div>
      </section>
    </>
  );
}