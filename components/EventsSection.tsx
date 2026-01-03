'use client';

import { useState, useEffect } from 'react';

const eventsData = [
  { id: 1, title: "SKYSCAPE", tagline: "Astrophotography Challenge", prize: "₹6,000", date: "29 JAN - 15 FEB", deadline: "15 FEB", venue: "ONLINE", status: "OPEN", image: "/skyscape.png", rulebook: "#" },
  { id: 2, title: "DATA SPHERE", tagline: "Data Analytics Challenge", prize: "₹50,000", date: "22 FEB", deadline: "20 FEB", venue: "CBT", status: "OPEN", image: "/data.png", rulebook: "#" },
  { id: 3, title: "DIRACOSMOS", tagline: "Case Study Competition", prize: "₹50,000", date: "23 FEB", deadline: "22 FEB", venue: "CBT FIRST FLOOR", status: "OPEN", image: "/dira.png", rulebook: "#" },
  { id: 4, title: "SUPER-KNOW-A", tagline: "Astronomy Quiz", prize: "₹50,000", date: "22 FEB", deadline: "21 FEB", venue: "MAIN AUDI", status: "OPEN", image: "/super.png", rulebook: "#" },
  { id: 5, title: "INNOVEARTH", tagline: "Ideathon", prize: "₹50,000", date: "21 FEB", deadline: "CLOSED", venue: "APJ HALLS", status: "CLOSED", image: "/innov.png", rulebook: "#" },
  { id: 6, title: "CTRL + ALT + HACK", tagline: "24-Hour Hackathon", prize: "₹1,50,000", date: "22–23 FEB", deadline: "21 FEB", venue: "MAIN AUDI 1&2", status: "OPEN", image: "/cntl.png", rulebook: "#" },
];

export default function SpaceConEvents() {
  const [gridOffset, setGridOffset] = useState(0);

  useEffect(() => {
    const i = setInterval(() => setGridOffset(p => (p + 0.5) % 80), 50);
    return () => clearInterval(i);
  }, []);

  return (
    <section id="events" className="relative min-h-screen bg-black text-white py-16 px-6 overflow-hidden">

      {/* subtle moving grid */}
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
                            linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          backgroundPosition: `${gridOffset}px ${gridOffset}px`
        }}
      />

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER + VIEW ALL */}
        <div className="flex items-start justify-between mb-14">
          <div>
            <div className="w-20 h-[2px] bg-white mb-4"></div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-2">
              EVENTS
            </h1>
            <p className="text-gray-400">
              Explore the biggest challenges of SpaceCon
            </p>
          </div>

          <a
            href="/events"
            className="hidden md:flex px-6 py-3 border border-white/30 rounded-full font-bold hover:bg-white hover:text-black transition"
          >
            VIEW ALL EVENTS
          </a>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {eventsData.map(event => (
            <div
              key={event.id}
              className="border border-white/15 bg-black rounded-2xl overflow-hidden transition-all duration-300
                         hover:shadow-[0_0_20px_rgba(255,255,255,0.12)] hover:-translate-y-1 hover:border-white/50"
            >

              <div className="h-64 bg-black flex items-center justify-center">
                <img src={event.image} className="object-contain h-full w-full" />
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-1">{event.title}</h3>
                <p className="text-gray-400 mb-3">{event.tagline}</p>

                <div className="w-12 h-[2px] bg-white/60 mb-4" />

                <div className="space-y-1 text-sm text-gray-300">
                  <div>💰 Prize — <span className="text-white font-semibold">{event.prize}</span></div>
                  <div>📅 {event.date}</div>
                  <div>⏰ Deadline: {event.deadline}</div>
                  <div>📍 {event.venue}</div>
                </div>

                {/* BUTTONS */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button
                    className={`py-2.5 rounded-lg font-bold transition 
                    ${event.status === 'OPEN'
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-gray-800 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {event.status === "OPEN" ? "Register Now" : "Closed"}
                  </button>

                  <a
                    href={event.rulebook}
                    className="border border-white/30 text-white py-2.5 rounded-lg text-center font-bold hover:bg-white hover:text-black transition"
                  >
                    Rulebook
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
