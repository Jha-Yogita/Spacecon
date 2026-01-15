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
    <section
      id="home"
      className="
        relative
        min-h-[85vh] sm:min-h-screen
        flex items-center justify-center
        overflow-hidden
        bg-gradient-to-b from-gray-950 via-slate-950 to-black
      "
    >
      {/* CENTER CONTENT */}
      <div className="relative z-20 text-center px-4 max-w-7xl mx-auto w-full">

        {/* SPACECON */}
        <h1
          className="
            logo-font
            text-[3.6rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl
            font-black
            tracking-tighter
            text-white
          "
          style={{
            textShadow:
              '0 0 80px rgba(220,38,38,0.8), 4px 4px 0 #DC2626, 8px 8px 0 rgba(0,0,0,0.8)',
            letterSpacing: '-0.02em'
          }}
        >
          SPACECON
        </h1>

        {/* DATE */}
        <div className="mt-3 mb-3 md:mb-6">
          <div className="inline-block px-6 py-3 bg-black/80 border-2 border-red-600">
            <span className="nav-font text-base sm:text-xl md:text-2xl tracking-[0.25em] text-white">
              21 - 23 FEB, 2026
            </span>
          </div>
        </div>

        {/* TAG */}
        <div className="mb-5 md:mb-12">
          <div className="inline-block px-8 py-3 bg-red-600 border-2 border-red-400">
            <span className="nav-font text-sm sm:text-lg tracking-[0.3em] text-white">
              MULTIVERSE MENACE
            </span>
          </div>
        </div>

        {/* COUNTDOWN */}
        <div className="inline-block w-full max-w-4xl">
          <div
            className="
              border-4 border-red-600/50
              bg-black/80
              px-4 sm:px-6 md:px-8 lg:px-12
              py-4 sm:py-6 md:py-8
            "
          >
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 md:gap-8 lg:gap-12">

              {/* DAYS */}
              <div className="text-center">
                <div className="tech-font text-[2.6rem] sm:text-5xl md:text-6xl lg:text-7xl font-black text-white">
                  {formatTime(timeLeft.days)}
                </div>
                <div className="digital-font text-xs text-gray-400 tracking-[0.2em]">
                  DAYS
                </div>
              </div>

              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-red-600">:</div>

              {/* HOURS */}
              <div className="text-center">
                <div className="tech-font text-[2.6rem] sm:text-5xl md:text-6xl lg:text-7xl font-black text-white">
                  {formatTime(timeLeft.hours)}
                </div>
                <div className="digital-font text-xs text-gray-400 tracking-[0.2em]">
                  HOURS
                </div>
              </div>

              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-red-600">:</div>

              {/* MINUTES */}
              <div className="text-center">
                <div className="tech-font text-[2.6rem] sm:text-5xl md:text-6xl lg:text-7xl font-black text-white">
                  {formatTime(timeLeft.minutes)}
                </div>
                <div className="digital-font text-xs text-gray-400 tracking-[0.2em]">
                  MINUTES
                </div>
              </div>

              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-red-600">:</div>

              {/* SECONDS */}
              <div className="text-center">
                <div className="tech-font text-[2.6rem] sm:text-5xl md:text-6xl lg:text-7xl font-black text-white">
                  {formatTime(timeLeft.seconds)}
                </div>
                <div className="digital-font text-xs text-gray-400 tracking-[0.2em]">
                  SECONDS
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-24 sm:h-40 pointer-events-none bg-gradient-to-t from-black via-black/70 to-transparent" />
    </section>
  );
}
