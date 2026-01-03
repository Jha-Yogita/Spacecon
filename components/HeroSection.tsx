'use client';

import { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // parallax scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight;
      const progress = Math.min(scrollY / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // text animations
  useEffect(() => {
    const t1 = setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.style.opacity = '1';
        titleRef.current.style.transform = 'translateY(0)';
      }
    }, 300);

    const t2 = setTimeout(() => {
      if (dateRef.current) {
        dateRef.current.style.opacity = '1';
        dateRef.current.style.transform = 'translateY(0)';
      }
    }, 800);

    const t3 = setTimeout(() => {
      const el = document.querySelector('.countdown-timer');
      if (el) {
        el.classList.remove('opacity-0', 'translate-y-10');
        el.classList.add('opacity-100', 'translate-y-0');
      }
    }, 1200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Spline */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `scale(${1 + scrollProgress * 0.05})`,
          transition: 'transform 0.35s ease-out'
        }}
      >
        <Spline
          scene="https://prod.spline.design/rp19Z4b5u-TWRZm4/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto">
        <h1
          ref={titleRef}
          className="text-6xl sm:text-7xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-black text-white mb-4 md:mb-6 tracking-tighter leading-[0.9] transition-all duration-1000 opacity-0 translate-y-10"
        >
          SpaceCon
        </h1>

        <div
          ref={dateRef}
          className="text-2xl sm:text-3xl md:text-4xl text-white/90 font-light mb-12 transition-all duration-1000 opacity-0 translate-y-10"
        >
          21 - 23 FEB, 2026
        </div>

        <div className="countdown-timer opacity-0 translate-y-10 transition-all duration-1000">
          <div className="inline-block px-8 py-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white">00</div>
                <div className="text-sm text-gray-400 mt-2 tracking-wider">DAYS</div>
              </div>

              <div className="text-3xl text-white/50">:</div>

              <div className="text-center">
                <div className="text-4xl font-bold text-white">00</div>
                <div className="text-sm text-gray-400 mt-2 tracking-wider">HOURS</div>
              </div>

              <div className="text-3xl text-white/50">:</div>

              <div className="text-center">
                <div className="text-4xl font-bold text-white">00</div>
                <div className="text-sm text-gray-400 mt-2 tracking-wider">MINUTES</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SMOOTH TRANSITION TO EVENTS SECTION */}
      <div className="absolute bottom-0 left-0 w-full h-40 pointer-events-none z-20">
        {/* fade to dark */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#06060a] to-black" />

        {/* grid overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>
    </section>
  );
}
