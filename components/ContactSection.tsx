'use client';

import { useState, memo } from 'react';
import dynamic from 'next/dynamic';

const Spline = dynamic(
  () => import('@splinetool/react-spline').then(m => m.default),
  { ssr: false }
);

const MemoizedSpline = memo(({ scene }: { scene: string }) => (
  <Spline scene={scene} />
));

MemoizedSpline.displayName = 'MemoizedSpline';

export default function ContactSection() {
  const [active, setActive] = useState<'email' | 'team'>('email');
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
                  onClick={() => setActive('email')}
                  className={`w-full px-5 py-4 border-4 border-black comic text-xl shadow-[5px_5px_0_#000] ${
                    active === 'email' ? 'bg-red-600' : 'bg-zinc-800 hover:bg-zinc-700'
                  }`}
                >
                  EMAIL
                </button>

                <button
                  onClick={() => setActive('team')}
                  className={`w-full px-5 py-4 border-4 border-black comic text-xl shadow-[5px_5px_0_#000] ${
                    active === 'team' ? 'bg-red-600' : 'bg-zinc-800 hover:bg-zinc-700'
                  }`}
                >
                  CORE TEAM
                </button>
              </div>

              <div className="p-10 flex items-center justify-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-black">

                {active === 'email' && (
                  <div className="text-center">
                    <div className="comic text-4xl text-red-500 mb-6">
                      PRIMARY CHANNEL
                    </div>

                    <div className="border-4 border-red-600 bg-black p-8 shadow-[6px_6px_0_#000]">
                      <a
                        href="mailto:spacecon@nsut.ac.in"
                        className="comic text-3xl text-white hover:text-red-400 transition-colors break-all"
                      >
                        spacecon@nsut.ac.in
                      </a>
                    </div>
                  </div>
                )}

                {active === 'team' && (
                  <div className="w-full">
                    <div className="comic text-4xl text-red-500 mb-6">
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
