'use client';

import { useState } from "react";
import dynamic from "next/dynamic";

const Spline = dynamic(
  () => import("@splinetool/react-spline").then(m => m.default),
  { ssr: false }
);

export default function ContactSection() {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const contacts = [
    { name: "Nikhil Kumar", phone: "88103 13021", role: "Coordinator" },
    { name: "Avantika Ambra", phone: "99115 61128", role: "Coordinator" },
    { name: "Omkar Ahuja", phone: "97111 06833", role: "Coordinator" },
  ];

  // ⭐ deterministic “random” stars — SAFE for hydration
  const STARS = Array.from({ length: 38 }).map((_, i) => ({
    left: (i * 97) % 100,
    delay: (i * 2.37) % 6,
    duration: 10 + ((i * 1.3) % 8),
  }));

  return (
    <section
      id="contact"
      className="relative min-h-screen text-white pt-28 px-6 md:px-10 overflow-hidden bg-black"
    >

      {/* ⭐ STARS */}
      <div className="stars-section">
        {STARS.map((star, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${star.left}%`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </div>

      {/* 🤖 ROBOT */}
      <div
        className="absolute left-6 xl:left-10 top-[42%] -translate-y-1/2 hidden xl:flex items-center justify-center z-10"
        style={{ width: 700, height: 700 }}
      >
        <div
          className="robot-wrapper relative rounded-full w-[520px] h-[520px] overflow-hidden border border-white/10 bg-black/40"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
            setParallax({ x, y });
          }}
          onMouseLeave={() => setParallax({ x: 0, y: 0 })}
        >
          <div
            style={{
              width: "760px",
              height: "760px",
              transform: `translate(${parallax.x * -0.6}px, ${parallax.y * -0.6}px)`
            }}
            className="opacity-90"
          >
            <Spline scene="https://prod.spline.design/loA19qvPmjmZx4ZR/scene.splinecode" />
          </div>
        </div>

        <div className="absolute w-[600px] h-[600px] rounded-full border border-white/15 animate-slow-spin pointer-events-none" />
      </div>

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto z-20 xl:pl-[430px] xl:pt-6">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-black tracking-tight">CONTACT US</h1>
          <p className="mt-4 text-gray-300 text-lg">Get in touch with our team</p>
        </div>

        {/* EMAIL */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="border border-purple-500/20 bg-white/5 rounded-3xl p-10 backdrop-blur-xl transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-900/20 hover:to-pink-900/10 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/10">
            <h2 className="text-gray-400 mb-3">Email</h2>

            <a
              href="mailto:spacecon@nsut.ac.in"
              className="text-3xl font-bold text-white hover:text-purple-300 transition-colors duration-300"
            >
              spacecon@nsut.ac.in
            </a>

            <p className="text-gray-400 mt-3">
              For general queries and information
            </p>
          </div>
        </div>

        {/* CONTACTS */}
        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="text-2xl font-bold text-center mb-8">Core Team</h2>

          <div className="space-y-5">
            {contacts.map((c, i) => (
              <div
                key={i}
                className="border border-purple-500/20 bg-white/5 rounded-2xl p-7 backdrop-blur-xl transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-900/20 hover:to-pink-900/10 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {c.name}
                    </h3>
                    <p className="text-gray-300">{c.role}</p>
                  </div>

                  <span className="text-2xl font-mono text-gray-300">
                    {c.phone}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slow-spin {
          from { transform: rotate(0deg);}
          to { transform: rotate(360deg);}
        }
        .animate-slow-spin { animation: slow-spin 45s linear infinite; }

        @keyframes star-fall {
          0%   { transform: translateY(-15vh); opacity:.95; }
          100% { transform: translateY(105vh); opacity:.55; }
        }

        .stars-section {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }

        .star {
          position: absolute;
          top: -10vh;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(255,255,255,.9);
          box-shadow: 0 0 10px rgba(255,255,255,.7);
          animation: star-fall linear infinite;
        }

        .robot-wrapper {
          mask-image: radial-gradient(circle at center, white 76%, transparent 100%);
          -webkit-mask-image: radial-gradient(circle at center, white 76%, transparent 100%);
        }
      `}</style>
    </section>
  );
}
