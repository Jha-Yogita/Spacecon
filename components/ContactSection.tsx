'use client';

import { useState, memo } from 'react';
import dynamic from 'next/dynamic';

const Spline = dynamic(
  () => import('@splinetool/react-spline').then(m => m.default),
  { ssr: false }
);

const MemoizedSpline = memo(({ scene }: { scene: string }) => (
  <Spline scene={scene} key="stable-spline" />
));


MemoizedSpline.displayName = 'MemoizedSpline';

export default function ContactSection() {
  const [active, setActive] = useState<'socials' | 'team'>('socials');
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const contacts = [
    { name: 'Ashu Anand', role: 'Coordinator', phone: '8920611106' },
    { name: 'Vansh Maheshwari', role: 'Coordinator', phone: '9958716677' },
    { name: 'Harsh Swami', role: 'Coordinator', phone: '89209424295' },
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Montserrat:wght@600;700;800;900&display=swap');

        .comic { font-family: 'Bangers', cursive; letter-spacing: .06em; }
        .mono { font-family: 'Montserrat', sans-serif; }

        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes stars {
          from { background-position: 0 0; }
          to { background-position: 0 1000px; }
        }

        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }

        @keyframes glow {
          0%,100% { box-shadow: 0 0 40px rgba(220,38,38,.35); }
          50% { box-shadow: 0 0 90px rgba(220,38,38,.6); }
        }

        #spline-watermark,
        [id*="spline"],
        [class*="spline-watermark"],
        a[href*="spline.design"] {
          display: none !important;
        }
      `}</style>

      <section
        id="contact"
        className="relative min-h-screen bg-black text-white py-24 px-4 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
            backgroundSize: '6px 6px',
            animation: 'stars 140s linear infinite'
          }}
        />

        <div className="relative max-w-6xl mx-auto text-center mb-20">
          <h1
            className="comic uppercase"
            style={{
              fontSize: 'clamp(3rem, 12vw, 9rem)',
              WebkitTextStroke: 'clamp(2px, 0.5vw, 4px) #dc2626',
              textShadow: '0 4px 0 #dc2626, 0 8px 0 #000'
            }}
          >
            CONTACT US
          </h1>
        </div>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[500px_1fr] gap-16 items-center">

          {/* Spline */}
          <div
            className="hidden lg:flex justify-center"
            style={{ animation: 'float 6s ease-in-out infinite' }}
            onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              setParallax({
                x: ((e.clientX - r.left) / r.width - 0.5) * 12,
                y: ((e.clientY - r.top) / r.height - 0.5) * 12
              });
            }}
            onMouseLeave={() => setParallax({ x: 0, y: 0 })}
          >
            <div
              className="relative w-[500px] h-[500px] rounded-full bg-zinc-900 border-4 border-black overflow-hidden"
              style={{ animation: 'glow 4s ease-in-out infinite' }}
            >
              <div
                style={{
                  width: '600px',
                  height: '600px',
                  transform: `translate(${-parallax.x}px, ${-parallax.y}px)`,
                  position: 'absolute',
                  left: '55%',
                  top: '50%',
                  marginLeft: '-300px',
                  marginTop: '-300px'
                }}
              >
                <MemoizedSpline scene="https://prod.spline.design/loA19qvPmjmZx4ZR/scene.splinecode" />
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="border-4 border-red-600 bg-zinc-950 shadow-[12px_12px_0_#000]">
            <div className="grid md:grid-cols-[240px_1fr] min-h-[480px]">

              <div className="border-r-4 border-black bg-zinc-900 p-6 space-y-6">
                <button
                  onClick={() => setActive('socials')}
                  className={`w-full px-5 py-4 border-4 border-black comic text-xl shadow-[5px_5px_0_#000] transition-all ${
                    active === 'socials' ? 'bg-red-600' : 'bg-zinc-800 hover:bg-zinc-700'
                  }`}
                >
                  SOCIALS
                </button>

                <button
                  onClick={() => setActive('team')}
                  className={`w-full px-5 py-4 border-4 border-black comic text-xl shadow-[5px_5px_0_#000] transition-all ${
                    active === 'team' ? 'bg-red-600' : 'bg-zinc-800 hover:bg-zinc-700'
                  }`}
                >
                  CORE TEAM
                </button>
              </div>

              <div className="p-6 sm:p-10 flex items-center justify-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-black">

                {active === 'socials' && (
                  <div className="text-center w-full">
                    <div className="comic text-3xl sm:text-4xl text-red-500 mb-6">
                      CONNECT WITH US
                    </div>

                    <div className="space-y-6">
                      {/* Email */}
                      <div className="border-4 border-red-600 bg-black p-4 sm:p-6 shadow-[6px_6px_0_#000]">
                        <div className="comic text-lg text-red-400 mb-2">EMAIL</div>
                        <a
                          href="mailto:spacecon@nsut.ac.in"
                          className="comic text-lg sm:text-xl md:text-2xl text-white hover:text-red-400 transition-colors break-words inline-block max-w-full"
                          style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
                        >
                          spacecon@nsut.ac.in
                        </a>
                      </div>

                      {/* Social Links */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {/* Instagram */}
                        <a
                          href="https://www.instagram.com/spacecon_nsut/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border-4 border-black bg-zinc-800 hover:bg-red-600 p-6 shadow-[5px_5px_0_#000] transition-all duration-300 group"
                        >
                          <svg className="w-12 h-12 mx-auto mb-2 fill-white transition-colors" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                          <div className="comic text-sm">INSTAGRAM</div>
                        </a>

                        {/* LinkedIn */}
                        <a
                          href="https://www.linkedin.com/company/spaceconnsut/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border-4 border-black bg-zinc-800 hover:bg-red-600 p-6 shadow-[5px_5px_0_#000] transition-all duration-300 group"
                        >
                          <svg className="w-12 h-12 mx-auto mb-2 fill-white transition-colors" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                          <div className="comic text-sm">LINKEDIN</div>
                        </a>

                        {/* Unstop */}
                       {/* Unstop */}
<a
  href="https://unstop.com/college-fests/spacecon-2026-netaji-subhas-university-of-technology-nsut-delhi-434035"
  target="_blank"
  rel="noopener noreferrer"
  className="border-4 border-black bg-zinc-800 hover:bg-red-600 p-6 shadow-[5px_5px_0_#000] transition-all duration-300 group"
>
  {/* UNSTOP LOGO */}
  <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center rounded-full bg-white">
    <span
      className="mono font-black text-black leading-none"
      style={{
        fontSize: '1.9rem',
        letterSpacing: '-0.08em',
        transform: 'translateY(1px)'
      }}
    >
      un
    </span>
  </div>

  <div className="comic text-sm">UNSTOP</div>
</a>

                      </div>
                    </div>
                  </div>
                )}

                {active === 'team' && (
                  <div className="w-full">
                    <div className="comic text-3xl sm:text-4xl text-red-500 mb-6">
                      CORE OPERATORS
                    </div>

                    <div className="space-y-6">
                      {contacts.map((c, i) => (
                        <div
                          key={i}
                          className="border-4 border-black bg-zinc-800 p-6 shadow-[5px_5px_0_#000]"
                        >
                          <div className="comic text-2xl">{c.name}</div>
                          <div className="mono text-red-400">{c.role}</div>
                          <div className="mono mt-1">{c.phone}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}