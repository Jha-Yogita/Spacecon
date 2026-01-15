'use client';

import { useMemo, useState, useEffect } from 'react';

const eventsData = [
  { id: 1, title: "SKYSCAPE", tagline: "Astrophotography Challenge", prize: "₹6,000", date: "29 JAN - 15 FEB", deadline: "15 FEB", venue: "ONLINE", status: "OPEN", image: "/skyscape.png", rulebook: "#" },
  { id: 2, title: "DATA SPHERE", tagline: "Data Analytics Challenge", prize: "₹50,000", date: "22 FEB", deadline: "20 FEB", venue: "CBT", status: "OPEN", image: "/data.png", rulebook: "#" },
  { id: 3, title: "DIRACOSMOS", tagline: "Case Study Competition", prize: "₹50,000", date: "23 FEB", deadline: "22 FEB", venue: "CBT FIRST FLOOR", status: "OPEN", image: "/dira.png", rulebook: "#" },
  { id: 4, title: "SUPER-KNOW-A", tagline: "Astronomy Quiz", prize: "₹50,000", date: "22 FEB", deadline: "21 FEB", venue: "MAIN AUDI", status: "OPEN", image: "/super.png", rulebook: "#" },
  { id: 5, title: "INNOVEARTH", tagline: "Ideathon", prize: "₹50,000", date: "21 FEB", deadline: "CLOSED", venue: "APJ HALLS", status: "CLOSED", image: "/innov.png", rulebook: "#" },
  { id: 6, title: "CTRL + ALT + HACK", tagline: "24-Hour Hackathon", prize: "₹1,50,000", date: "22–23 FEB", deadline: "21 FEB", venue: "MAIN AUDI 1&2", status: "OPEN", image: "/cntl.png", rulebook: "#" },
];

export default function SpaceConEvents() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const displayedEvents = isMobile ? eventsData.slice(0, 3) : eventsData;

  const makeStars = (count, size) =>
    Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: Math.random() * 120,
      left: Math.random() * 100,
      size
    }));

  const smallStars = useMemo(() => makeStars(80, 2), []);
  const mediumStars = useMemo(() => makeStars(50, 3), []);
  const bigStars = useMemo(() => makeStars(28, 4), []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Montserrat:wght@600;700;800;900&display=swap');

        .starlord { font-family: 'Bangers', cursive; letter-spacing: .06em; }
        .mono { font-family: 'Montserrat', sans-serif; }

        @keyframes comicTwinkle {
          0%,100% { opacity: .4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
        }

        @keyframes comicPulse {
          0%,100% { box-shadow: 0 0 6px rgba(255,255,255,.6); }
          50% { box-shadow: 0 0 16px rgba(255,255,255,1); }
        }

        @keyframes scanLine {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: .12; }
          100% { transform: translateY(100%); opacity: 0; }
        }

        .event-btn {
          transition: transform .18s ease, box-shadow .18s ease, filter .18s ease;
          cursor: pointer;
        }

        .event-btn:hover {
          transform: translateY(-2px);
          box-shadow: 8px 8px 0 #000;
          filter: brightness(1.1);
        }

        @media (max-width: 640px) {
          .event-btn:hover {
            box-shadow: 5px 5px 0 #000;
          }
        }
      `}</style>

      <section id="events" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black overflow-hidden">

        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          <div
            className="absolute left-0 w-full h-32 bg-gradient-to-b from-transparent via-red-500/20 to-transparent"
            style={{ animation: 'scanLine 9s linear infinite' }}
          />

          {smallStars.map(s => (
            <div
              key={`s-${s.id}`}
              style={{
                position: 'absolute',
                top: `${s.top}%`,
                left: `${s.left}%`,
                width: s.size,
                height: s.size,
                background: '#fff',
                borderRadius: '50%',
                opacity: .6,
                animation: `comicTwinkle ${Math.random() * 4 + 3}s infinite`
              }}
            />
          ))}

          {mediumStars.map(s => (
            <div
              key={`m-${s.id}`}
              style={{
                position: 'absolute',
                top: `${s.top}%`,
                left: `${s.left}%`,
                width: s.size,
                height: s.size,
                background: '#fff',
                borderRadius: '50%',
                boxShadow: '0 0 8px rgba(255,255,255,.9)',
                animation: `comicPulse ${Math.random() * 5 + 4}s infinite`
              }}
            />
          ))}

          {bigStars.map(s => (
            <div
              key={`b-${s.id}`}
              style={{
                position: 'absolute',
                top: `${s.top}%`,
                left: `${s.left}%`,
                width: s.size,
                height: s.size,
                background: Math.random() > 0.85 ? '#f87171' : '#fff',
                borderRadius: '50%',
                boxShadow: `
                  0 0 10px rgba(255,255,255,1),
                  0 0 20px rgba(59,130,246,.8)
                `,
                animation: `comicPulse ${Math.random() * 6 + 5}s infinite`
              }}
            />
          ))}

        </div>

        <div className="relative max-w-7xl mx-auto">

          <div className="text-center mb-12 sm:mb-16 md:mb-24">
            <span className="mono text-[0.65rem] sm:text-xs tracking-[0.35em] sm:tracking-[0.45em] text-red-600 font-black uppercase">
              MULTIVERSE ARCHIVES
            </span>
            <h2
              className="starlord text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] mt-4 sm:mt-6 text-white leading-none"
              style={{
                WebkitTextStroke: '2px #dc2626',
                textShadow: '4px 4px 0 #000, 6px 6px 0 #000'
              }}
            >
              EVENTS
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-14 mb-16 sm:mb-20 md:mb-28">
            {displayedEvents.map(event => (
              <div key={event.id} className="relative group">
                <div className="absolute inset-0 bg-black/70 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 blur-md" />

                <div className="relative bg-zinc-100 border-[3px] border-black overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">

                  <div className="h-2 bg-red-600" />

                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-red-700 px-3 sm:px-4 py-1 border-2 border-black shadow-[3px_3px_0_#000] sm:shadow-[4px_4px_0_#000]">
                    <span className="starlord text-lg sm:text-xl text-white">#{event.id}</span>
                  </div>

                  <div className={`absolute top-3 sm:top-4 right-3 sm:right-4 px-3 sm:px-4 py-1 border-2 border-black shadow-[3px_3px_0_#000] sm:shadow-[4px_4px_0_#000] ${
                    event.status === 'OPEN' ? 'bg-green-600' : 'bg-zinc-600'
                  }`}>
                    <span className="starlord text-white text-base sm:text-lg">{event.status}</span>
                  </div>

                  <div className="h-48 sm:h-56 md:h-64 bg-black flex items-center justify-center border-b-[4px] sm:border-b-[6px] border-black">
                    <img src={event.image} alt={event.title} className="h-full object-contain p-4" />
                  </div>

                  <div className="p-4 sm:p-5 md:p-6">
                    <h3 className="starlord text-3xl sm:text-4xl text-red-700 mb-1">{event.title}</h3>
                    <p className="mono text-[0.65rem] sm:text-xs uppercase tracking-wider text-zinc-700 font-bold mb-4 sm:mb-5">
                      {event.tagline}
                    </p>

                    <div className="bg-zinc-800 text-white border-l-4 border-red-600 p-3 sm:p-4 text-[0.65rem] sm:text-xs mono font-extrabold space-y-1.5 sm:space-y-2">
                      <div className="flex justify-between"><span>PRIZE</span><span className="text-red-400">{event.prize}</span></div>
                      <div className="flex justify-between"><span>DATE</span><span>{event.date}</span></div>
                      <div className="flex justify-between"><span>DEADLINE</span><span className="text-orange-400">{event.deadline}</span></div>
                      <div className="flex justify-between"><span>VENUE</span><span>{event.venue}</span></div>
                    </div>
                  </div>

                  <div className="bg-black p-3 sm:p-4 grid grid-cols-2 gap-3 sm:gap-4 border-t-4 border-black">
                    <button className="event-btn py-2.5 sm:py-3 mono text-xs sm:text-sm font-black uppercase bg-red-600 text-white border-3 sm:border-4 border-black shadow-[4px_4px_0_#000] sm:shadow-[5px_5px_0_#000]">
                      ENTER
                    </button>
                    <button
                      onClick={() => window.location.href = event.rulebook}
                      className="event-btn py-2.5 sm:py-3 mono text-xs sm:text-sm font-black uppercase bg-zinc-900 text-white border-3 sm:border-4 border-black shadow-[4px_4px_0_#000] sm:shadow-[5px_5px_0_#000]"
                    >
                      INTEL
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

          <div className="text-center px-4">
            <button
              onClick={() => window.location.href = '/events'}
              className="event-btn starlord text-xl sm:text-2xl md:text-3xl px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 bg-red-600 text-white border-3 sm:border-4 border-black uppercase shadow-[6px_6px_0_#000] sm:shadow-[8px_8px_0_#000] md:shadow-[10px_10px_0_#000]"
            >
              EXPLORE ALL EVENTS →
            </button>
          </div>

        </div>
      </section>
    </>
  );
}