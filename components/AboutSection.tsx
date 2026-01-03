'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Spline = dynamic(
  () => import('@splinetool/react-spline').then(m => m.default),
  { ssr: false }
);

export default function AboutSection() {
  const [cubeKey, setCubeKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCubeKey(k => k + 1), 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen bg-black text-white pt-32 px-4 md:px-6 overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-50 bg-gradient-to-b from-black/50 via-black/70 to-black" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter">
            ABOUT US
          </h1>

          <p className="text-gray-300 mt-3 text-lg max-w-2xl">
            Who we are — and why SpaceCon exists
          </p>

          <div className="w-24 h-px bg-white mt-4" />

          <p className="mt-10 text-xl leading-relaxed">
            At <b>SpaceCon/25</b>, our diverse events, hackathons, ideathons, seminars,
            workshops, panel discussions, and guest lectures focus on innovation in
            space science and technology — helping participants apply complex ideas
            through practical learning.
          </p>

          <p className="mt-6 text-gray-200">
            This conclave promotes collaboration, creativity, and teamwork — preparing
            students to make meaningful contributions while advancing STEM education.
          </p>
        </div>

        {/* RIGHT — 3D cube */}
        <div className="flex items-center justify-center">
          <div className="relative w-[520px] h-[520px]">

            <Spline
              key={cubeKey}
              scene="https://prod.spline.design/01QcH5Oa7t0pDPzN/scene.splinecode"
            />

            {/* fade overlay (stronger + wider) */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '260px',
                height: '100px',
                background:
                  'linear-gradient(270deg, rgba(0,0,0,0.98) 50%, rgba(0,0,0,0.75) 78%, rgba(0,0,0,0.05) 100%)',
                pointerEvents: 'none',
                backdropFilter: 'blur(3px)'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
