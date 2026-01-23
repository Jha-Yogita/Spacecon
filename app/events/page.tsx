'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';

const currentYear = new Date().getFullYear();

// Event images mapping - using actual images from your events/images directory
const eventImages: Record<string, string> = {
  "Celestial Feels": "/events/images/celestial.png",
  "Cosmic Treasure Hunt": "/events/images/cosmic.png",
  "Galactic Genius": "/events/images/galactic.png",
  // "Graph Madness": "/events/images/graph.png",
  "Integration Bee": "/events/images/integration.png",
  "Odyssey to the Moon": "/events/images/odyssey.png",
  "Gaming Event": "/events/images/respawn.png",
  "Through My Lens": "/events/images/throughmylens.png",
};

// Rulebook mapping - using actual PDFs from your rulebook directory
const rulebookUrls: Record<string, string> = {
  "Celestial Feels":
    "https://drive.google.com/file/d/1ikyjh0hs4Ht2-iPR6KEuVt4EEy1Xzz5o/view",

  "Cosmic Treasure Hunt":
    "https://drive.google.com/file/d/1HNQczjL7htIvJ01Lsu7PtJCPOgjnDVxF/view",

  "Galactic Genius":
    "https://drive.google.com/file/d/1W0k90h7SFLT42yvwpKhHW5QOSbUWE82E/view",

  "Gaming Event":
    "https://drive.google.com/file/d/1bQFRbY9x2y9hOFmWKgYkTxP0SDZY99xt/view",

  // "Graph Madness":
  //   "https://drive.google.com/file/d/1-HW_QCpU_zFQjomebu65Nna-ei24uh7A/view",

  "Integration Bee":
    "https://drive.google.com/file/d/1HD6P2BC8ZGNwtj8jANBtaq1TnIOhvQF0/view",

  "Odyssey to the Moon":
    "https://drive.google.com/file/d/1T706JXTNb6YAYZQ9CYLmScVdohbNngWn/view",

  "Through My Lens":
    "https://drive.google.com/file/d/1KNyMKGcxTPNGfR2Y9fW7Ldmbs2R7Km5P/view",
};


const eventsByDay = [
  {
    day: "Day 1",
    date: "7 FEB 2026",
    events: [
      { 
        id: 1, 
        title: "Integration Bee", 
        tagline: "Mathematics Competition", 
        description: "A fast-paced, knockout-style mathematics competition where participants solve integrals under extreme time pressure.", 
        date: "7 FEB", 
        time: "12:00 PM - 4:00 PM", 
        prize: "₹5,000", 
        venue: "SB-01,02", 
        status: "OPEN", 
        rulebook: rulebookUrls["Integration Bee"],
        unstopUrl: "https://unstop.com/competitions/integration-bee-spacecon-2026-netaji-subhas-university-of-technology-nsut-delhi-1628226" 
      },
      { 
        id: 2, 
        title: "Odyssey to the Moon", 
        tagline: "Space Mission Design", 
        description: "A conceptual space mission design challenge where teams plan a lunar exploration mission, including lander, payload, and schedule.", 
        date: "7 FEB", 
        time: "12:00 PM - 4:00 PM", 
        prize: "₹5,000", 
        venue: "APJ-3", 
        status: "OPEN", 
        rulebook: rulebookUrls["Odyssey to the Moon"],
        unstopUrl: "https://unstop.com/hackathons/odyssey-to-the-moon-spacecon-2026-netaji-subhas-university-of-technology-nsut-delhi-1627463" 
      },
      // { 
      //   id: 3, 
      //   title: "Graph Madness", 
      //   tagline: "Graph Theory Challenge", 
      //   description: "A unique event where participants interpret or create visual graphs and solve problems based on graph transformations.", 
      //   date: "7 FEB", 
      //   time: "1:00 PM - 4:00 PM", 
      //   prize: "₹5,000", 
      //   venue: "APJ-4", 
      //   status: "OPEN", 
      //   rulebook: rulebookUrls["Graph Madness"],
      //   unstopUrl: "https://unstop.com/competitions/graph-madness-spacecon-2026-netaji-subhas-university-of-technology-nsut-delhi-1627435" 
      // },
    ]
  },
  {
    day: "Day 2",
    date: "8 FEB 2026",
    events: [
      { 
        id: 1,
        title: "Cosmic Treasure Hunt", 
        tagline: "Astro-Based Adventure", 
        description: "An astro-based treasure hunt; clues tied to astronomy concepts.", 
        date: "8 FEB", 
        time: "12:00 PM - 4:00 PM", 
        prize: "₹4,000", 
        venue: "SB-01,02,03,04", 
        status: "OPEN", 
        rulebook: rulebookUrls["Cosmic Treasure Hunt"],
        unstopUrl: "https://unstop.com/quiz/cosmic-treasure-hunt-spacecon-2026-netaji-subhas-university-of-technology-nsut-delhi-1628212" 
      },
      { 
        id: 2,
        title: "Galactic Genius", 
        tagline: "Space Science Quiz", 
        description: "A space-science quiz covering astronomy, rocket science, planetary physics, telescopes, and space missions.", 
        date: "8 FEB", 
        time: "12:00 PM - 4:00 PM", 
        prize: "₹4,000", 
        venue: "APJ-3", 
        status: "OPEN", 
        rulebook: rulebookUrls["Galactic Genius"],
        unstopUrl: "https://unstop.com/quiz/galactic-genius-spacecon-2026-netaji-subhas-university-of-technology-nsut-delhi-1628166" 
      },
      { 
        id: 3,
        title: "Gaming Event", 
        tagline: "PC & Mobile Gaming", 
        description: "A PC & Mobile gaming event featuring exciting tournaments and competitions.", 
        date: "8 FEB", 
        time: "4:00 PM - 6:00 PM", 
        prize: "₹4,000", 
        venue: "APJ-4", 
        status: "OPEN", 
        rulebook: rulebookUrls["Gaming Event"],
        unstopUrl: "https://unstop.com/events/respawnnsut-spacecon-2026-netaji-subhas-university-of-technology-nsut-delhi-1628154" 
      },
      { 
        id: 4,
        title: "Celestial Feels", 
        tagline: "Documentary Screening", 
        description: "A curated screening + discussion session featuring documentaries on astronomy, JWST, black holes, and space exploration.", 
        date: "8 FEB", 
        time: "All Day", 
        prize: "NA", 
        venue: "Online", 
        status: "OPEN", 
        rulebook: rulebookUrls["Celestial Feels"],
        unstopUrl: "https://unstop.com/events/celestial-feels-spacecon-2026-netaji-subhas-university-of-technology-nsut-delhi-1627432" 
      },
      { 
        id: 5,
        title: "Through My Lens", 
        tagline: "Space Photography", 
        description: "A space-themed photography event where participants submit cosmic, night-sky, or space-inspired compositions.", 
        date: "8 FEB", 
        time: "All Day", 
        prize: "₹3,000", 
        venue: "Online", 
        status: "OPEN", 
        rulebook: rulebookUrls["Through My Lens"],
        unstopUrl: "https://unstop.com/p/through-my-lens-spacecon-2026-netaji-subhas-university-of-technology-nsut-delhi-1628217" 
      },
    ]
  }
];

export default function EventsPage() {
  const [selectedDay, setSelectedDay] = useState(0);
  const currentDay = eventsByDay[selectedDay];
  const router = useRouter();

  const makeStars = (count: number, size: number) =>
    Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size,
      opacity: Math.random() * 0.6 + 0.3,
      delay: Math.random() * 6
    }));

  const smallStars = useMemo(() => makeStars(120, 2), []);
  const mediumStars = useMemo(() => makeStars(50, 3), []);
  const bigStars = useMemo(() => makeStars(28, 4), []);

  const handleRegister = (unstopUrl: string) => {
    window.open(unstopUrl, '_blank');
  };

  // Function to calculate display ID with day prefix
  const getDisplayId = (eventId: number) => {
    return `#${eventId}`;
  };

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

        /* Custom scrollbar for event descriptions */
        .event-description::-webkit-scrollbar {
          width: 4px;
        }
        .event-description::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 2px;
        }
        .event-description::-webkit-scrollbar-thumb {
          background: #dc2626;
          border-radius: 2px;
        }
        .event-description::-webkit-scrollbar-thumb:hover {
          background: #b91c1c;
        }
      `}</style>

      <main className="relative min-h-screen bg-black text-white overflow-hidden">

        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          <div className="absolute -top-40 -left-40 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-purple-600/20 blur-[80px] sm:blur-[160px]" />
          <div className="absolute top-1/3 -right-40 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-blue-500/20 blur-[70px] sm:blur-[140px]" />
          <div className="absolute bottom-0 left-1/4 w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] bg-red-600/10 blur-[90px] sm:blur-[180px]" />

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
                opacity: s.opacity,
                animation: `comicTwinkle 6s ${s.delay}s infinite`
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
                animation: `comicPulse 7s ${s.delay}s infinite`
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
                boxShadow: '0 0 10px rgba(255,255,255,1), 0 0 20px rgba(59,130,246,.8)',
                animation: `comicPulse 9s ${s.delay}s infinite`
              }}
            />
          ))}

        </div>

        <div className="relative max-w-7xl mx-auto pt-12 sm:pt-16 md:pt-20 px-4 sm:px-6 pb-8 sm:pb-12 md:pb-16">

          <div className="text-center mb-6 sm:mb-8">
            <span className="mono text-[0.65rem] sm:text-xs tracking-[0.3em] sm:tracking-[0.45em] text-red-600 font-black uppercase">
              SPACECON 2026 • 7-8 FEBRUARY
            </span>
            <h1
              className="starlord text-[3rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem] mt-3 sm:mt-4 md:mt-6 text-white leading-none"
              style={{
                WebkitTextStroke: '2px #dc2626',
                textShadow: '4px 4px 0 #000'
              }}
            >
              ALL EVENTS
            </h1>
          </div>

          <div className="flex justify-center mb-8 sm:mb-10 md:mb-12">
            <button
              type="button"
              onClick={() => router.push('/')}
              className="mono inline-block px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-zinc-900 border-2 sm:border-4 border-black text-white text-xs sm:text-sm md:text-base font-bold tracking-wider uppercase shadow-[4px_4px_0_#000] sm:shadow-[8px_8px_0_#000] hover:bg-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,.6)] transition-all duration-300"
            >
              ← BACK HOME
            </button>
          </div>

          <div className="flex justify-center gap-2 sm:gap-4 md:gap-6 mb-10 sm:mb-12 md:mb-16 flex-wrap px-2">
            {eventsByDay.map((d, i) => (
              <button
                key={i}
                onClick={() => setSelectedDay(i)}
                className={`
                  starlord text-base sm:text-xl md:text-2xl px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 border-2 sm:border-4 border-black shadow-[3px_3px_0_#000] sm:shadow-[6px_6px_0_#000]
                  transition-all duration-300
                  ${selectedDay === i
                    ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,.8)] sm:shadow-[0_0_30px_rgba(220,38,38,.8)]'
                    : 'bg-zinc-900 text-white hover:bg-zinc-800'}
                `}
              >
                <span className="hidden sm:inline">{d.day} — {d.date}</span>
                <span className="sm:hidden">{d.day}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-10 sm:mb-12 md:mb-16 items-stretch">
            {currentDay.events.map(event => (
              <div key={`${currentDay.day}-${event.id}`} className="group h-full">
                <div className="relative h-full bg-zinc-100 border-2 sm:border-[3px] border-black overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] flex flex-col">

                  {/* Header with accent bar */}
                  <div className={`h-2 ${event.prize !== 'NA' ? 'bg-yellow-600' : 'bg-blue-600'}`} />

                  {/* Event ID badge */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-red-700 px-3 sm:px-4 py-1 border-2 border-black shadow-[3px_3px_0_#000] z-10">
                    <span className="starlord text-lg sm:text-xl text-white">{getDisplayId(event.id)}</span>
                  </div>

                  {/* Status badge */}
                  <div className={`absolute top-3 sm:top-4 right-3 sm:right-4 px-3 sm:px-4 py-1 border-2 border-black shadow-[3px_3px_0_#000] z-10 ${
                    event.status === 'OPEN' ? 'bg-green-600' : 'bg-zinc-600'
                  }`}>
                    <span className="starlord text-white text-sm sm:text-base">{event.status}</span>
                  </div>

                  {/* Event Image - Fixed Height */}
                  <div className="h-52 sm:h-56 md:h-60 bg-gradient-to-br from-black to-gray-900 flex items-center justify-center border-b-4 border-black p-4 flex-shrink-0">
                    <img 
                      src={eventImages[event.title] || "/events/images/cosmic.png"} 
                      alt={event.title} 
                      className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Event Content - Flexible */}
                  <div className="p-5 sm:p-6 flex-grow flex flex-col">
                    {/* Title and Tagline */}
                    <div className="mb-4">
                      <h3 className="starlord text-2xl sm:text-3xl text-red-700 mb-1 break-words leading-tight">{event.title}</h3>
                      <p className="mono text-xs sm:text-sm uppercase tracking-wider text-zinc-700 font-bold">
                        {event.tagline}
                      </p>
                    </div>
                    
                    {/* Description - Fixed Height with Scroll */}
                    <div className="mb-4 flex-grow">
                      <p className="mono text-sm text-zinc-800 leading-relaxed h-20 overflow-y-auto pr-2 event-description">
                        {event.description}
                      </p>
                    </div>

                    {/* Event Details Card - Fixed Height */}
                    <div className="bg-zinc-900 text-white border-l-4 border-red-600 p-4 mb-5 flex-shrink-0">
                      <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm mono font-bold">
                        <div className="flex flex-col">
                          <span className="text-gray-400 text-xs mb-1">PRIZE POOL</span>
                          <span className={`${event.prize !== 'NA' ? 'text-yellow-400' : 'text-blue-400'} text-lg`}>
                            {event.prize}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-gray-400 text-xs mb-1">DATE</span>
                          <span className="text-white">{event.date}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-gray-400 text-xs mb-1">TIME</span>
                          <span className="text-orange-400">{event.time}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-gray-400 text-xs mb-1">VENUE</span>
                          <span className="text-white text-sm">{event.venue}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons - Fixed at Bottom */}
                    <div className="flex gap-3 sm:gap-4 mt-auto">
                      <button 
                        onClick={() => handleRegister(event.unstopUrl)}
                        className="flex-1 py-3 mono text-sm sm:text-base font-black uppercase bg-red-600 text-white border-2 border-black shadow-[3px_3px_0_#000] hover:bg-red-700 hover:shadow-[4px_4px_0_#000] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[2px_2px_0_#000] transition-all duration-200 flex items-center justify-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                        </svg>
                        REGISTER
                      </button>
                      <button
                        onClick={() => window.open(event.rulebook, '_blank')}
                        className="flex-1 py-3 mono text-sm sm:text-base font-black uppercase bg-zinc-900 text-white border-2 border-black shadow-[3px_3px_0_#000] hover:bg-zinc-800 hover:shadow-[4px_4px_0_#000] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[2px_2px_0_#000] transition-all duration-200 flex items-center justify-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        RULEBOOK
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        <footer className="relative bg-black border-t-2 sm:border-t-4 border-red-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <span className="mono text-gray-400 text-xs sm:text-sm font-bold">
                © SpaceCon {currentYear}
              </span>

              <div className="hidden sm:block w-px h-4 bg-white/20" />

              <button
                onClick={() => router.push('/privacy-policy')}
                className="mono text-gray-400 hover:text-red-500 transition-colors duration-300 text-xs sm:text-sm font-bold"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </footer>

      </main>
    </>
  );
}