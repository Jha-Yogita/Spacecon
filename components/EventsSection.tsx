'use client';

import { useMemo, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const eventsData = [
  { 
    id: 1, 
    title: "Integration Bee", 
    tagline: "Mathematics Competition", 
    description: "A fast-paced, knockout-style mathematics competition where participants solve integrals under extreme time pressure.", 
    prize: "₹5,000", 
    date: "7 FEB", 
    time: "12:00 PM - 4:00 PM", 
    venue: "SB-01,02", 
    status: "OPEN", 
    image: "/events/images/integration.png", 
    rulebook: "https://drive.google.com/file/d/1HD6P2BC8ZGNwtj8jANBtaq1TnIOhvQF0/view",
    registerLink: "https://unstop.com/competitions/integration-bee-spacecon-2026-netaji-subhas-university-of-technology-nsut-delhi-1628226"
  },
  { 
    id: 2, 
    title: "Odyssey to the Moon", 
    tagline: "Space Mission Design", 
    description: "A conceptual space mission design challenge where teams plan a lunar exploration mission, including lander, payload, and schedule.", 
    prize: "₹5,000", 
    date: "7 FEB", 
    time: "12:00 PM - 4:00 PM", 
    venue: "APJ-3", 
    status: "OPEN", 
    image: "/events/images/odyssey.png", 
    rulebook: "https://drive.google.com/file/d/1T706JXTNb6YAYZQ9CYLmScVdohbNngWn/view",
    registerLink: "https://unstop.com/hackathons/odyssey-to-the-moon-spacecon-2026-netaji-subhas-university-of-technology-nsut-delhi-1627463"
  },
  { 
    id: 3,
        title: "Through My Lens", 
        tagline: "Space Photography", 
        description: "A space-themed photography event where participants submit cosmic, night-sky, or space-inspired compositions.", 
        date: "8 FEB", 
        time: "All Day", 
        prize: "₹3,000", 
         image: "/events/images/throughmylens.png", 
        venue: "Online", 
        status: "OPEN", 
        rulebook: "https://drive.google.com/file/d/1KNyMKGcxTPNGfR2Y9fW7Ldmbs2R7Km5P/view",
        registerLink: "https://unstop.com/p/through-my-lens-spacecon-2026-netaji-subhas-university-of-technology-nsut-delhi-1628217" 
  },
  { 
    id: 4, 
    title: "Cosmic Treasure Hunt", 
    tagline: "Astro-Based Adventure", 
    description: "An astro-based treasure hunt; clues tied to astronomy concepts (e.g., 'find the red planet' → red balloon with next clue).", 
    prize: "₹4,000", 
    date: "8 FEB", 
    time: "12:00 PM - 4:00 PM", 
    venue: "SB-01,02,03,04", 
    status: "OPEN", 
    image: "/events/images/cosmic.png", 
    rulebook: "https://drive.google.com/file/d/1HNQczjL7htIvJ01Lsu7PtJCPOgjnDVxF/view",
    registerLink: "https://unstop.com/p/cosmic-treasure-hunt-spacecon-2026-netaji-subhas-university-of-technology-nsut-delhi-1628212"
  },
  { 
    id: 5, 
    title: "Galactic Genius", 
    tagline: "Space Science Quiz", 
    description: "A space-science quiz covering astronomy, rocket science, planetary physics, telescopes, and space missions.", 
    prize: "₹4,000", 
    date: "8 FEB", 
    time: "12:00 PM - 4:00 PM", 
    venue: "APJ-3", 
    status: "OPEN", 
    image: "/events/images/galactic.png", 
    rulebook: "https://drive.google.com/file/d/1W0k90h7SFLT42yvwpKhHW5QOSbUWE82E/view",
    registerLink: "https://unstop.com/quiz/galactic-genius-spacecon-2026-netaji-subhas-university-of-technology-nsut-delhi-1628166"
  },
  { 
    id: 6, 
    title: "Gaming Event", 
    tagline: "Respawn", 
    description: "A PC & Mobile gaming event featuring exciting tournaments and competitions.", 
    prize: "₹4,000", 
    date: "8 FEB", 
    time: "4:00 PM-6:00 PM", 
    venue: "APJ-4", 
    status: "OPEN", 
    image: "/events/images/respawn.png", 
    rulebook: "https://drive.google.com/file/d/1bQFRbY9x2y9hOFmWKgYkTxP0SDZY99xt/view",
    registerLink: "https://unstop.com/events/respawnnsut-spacecon-2026-netaji-subhas-university-of-technology-nsut-delhi-1628154"
  },
];

export default function SpaceConEvents() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  const router = useRouter();

 useEffect(() => {
  setMounted(true);

  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  checkMobile();
  window.addEventListener('resize', checkMobile);
  return () => window.removeEventListener('resize', checkMobile);
}, []);


  const displayedEvents = isMobile ? eventsData.slice(0, 3) : eventsData;
const makeStars = (count: number, size: number) =>
  Array.from({ length: count }).map((_, i) => ({
    id: i,
    top: Math.random() * 120,
    left: Math.random() * 100,
    size,
    opacity: Math.random() * 0.6 + 0.3,
    delay: Math.random() * 6,
    color: Math.random() > 0.85 ? '#f87171' : '#fff'
    
  }));


  const smallStars = useMemo(() => mounted ? makeStars(80, 2) : [], [mounted]);
const mediumStars = useMemo(() => mounted ? makeStars(50, 3) : [], [mounted]);
const bigStars = useMemo(() => mounted ? makeStars(28, 4) : [], [mounted]);


  const handleRegister = (eventId: number) => {
    const event = eventsData.find(e => e.id === eventId);
    if (event && event.registerLink) {
      window.open(event.registerLink, '_blank');
    } else {
      // Fallback to /events page if no specific link
      router.push('/events');
    }
  };

  const handleRulebook = (rulebookUrl: string) => {
    window.open(rulebookUrl, '_blank');
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

      <section id="events" className="relative py-12 sm:py-24 md:py-32 px-4 sm:px-6 bg-black overflow-hidden">

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
               background: s.color,

                borderRadius: '50%',
                boxShadow: '0 0 10px rgba(255,255,255,1), 0 0 20px rgba(59,130,246,.8)',
                animation: `comicPulse 9s ${s.delay}s infinite`
              }}
            />
          ))}

        </div>

        <div className="relative max-w-7xl mx-auto">

          <div className="text-center mb-8 sm:mb-16 md:mb-24">
            <span className="mono text-xs tracking-[0.35em] text-red-600 font-black uppercase">
              MULTIVERSE ARCHIVES
            </span>
            <h2
              className="starlord text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] mt-3 sm:mt-6 text-white leading-none"
              style={{
                WebkitTextStroke: '2px #dc2626',
                textShadow: '4px 4px 0 #000'
              }}
            >
              EVENTS
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 md:gap-10 mb-12 sm:mb-20 md:mb-28 items-stretch">
            {displayedEvents.map(event => (
              <div key={event.id} className="group h-full">
                <div className="relative h-full bg-zinc-100 border-2 sm:border-[3px] border-black overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] flex flex-col">

                  {/* Header with accent bar */}
                  <div className="h-2 bg-red-600" />

                  {/* Event ID badge */}
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-red-700 px-2 sm:px-4 py-1 border-2 border-black shadow-[2px_2px_0_#000] sm:shadow-[3px_3px_0_#000] z-10">
                    <span className="starlord text-base sm:text-xl text-white">#{event.id}</span>
                  </div>

                  {/* Status badge */}
                  <div className={`absolute top-2 sm:top-4 right-2 sm:right-4 px-2 sm:px-4 py-1 border-2 border-black shadow-[2px_2px_0_#000] sm:shadow-[3px_3px_0_#000] z-10 ${
                    event.status === 'OPEN' ? 'bg-green-600' : 'bg-zinc-600'
                  }`}>
                    <span className="starlord text-white text-xs sm:text-base">{event.status}</span>
                  </div>

                  {/* Event Image - Smaller on mobile */}
                  <div className="h-40 sm:h-56 md:h-60 bg-gradient-to-br from-black to-gray-900 flex items-center justify-center border-b-4 border-black p-3 sm:p-4 flex-shrink-0">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback to event title if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const textFallback = document.createElement('div');
                          textFallback.className = 'starlord text-white text-lg sm:text-2xl text-center px-2 sm:px-4';
                          textFallback.textContent = event.title;
                          parent.appendChild(textFallback);
                        }
                      }}
                    />
                  </div>

                  {/* Event Content - Compact on mobile */}
                  <div className="p-4 sm:p-6 flex-grow flex flex-col">
                    {/* Title and Tagline */}
                    <div className="mb-3 sm:mb-4">
                      <h3 className="starlord text-xl sm:text-3xl text-red-700 mb-1 break-words leading-tight">{event.title}</h3>
                      <p className="mono text-xs uppercase tracking-wider text-zinc-700 font-bold">
                        {event.tagline}
                      </p>
                    </div>
                    
                    {/* Description - Shorter height on mobile */}
                    <div className="mb-3 sm:mb-4 flex-grow">
                      <p className="mono text-sm text-zinc-800 leading-relaxed h-16 sm:h-20 overflow-y-auto pr-2 event-description">
                        {event.description}
                      </p>
                    </div>

                    {/* Event Details Card - Compact on mobile */}
                    <div className="bg-zinc-900 text-white border-l-4 border-red-600 p-3 sm:p-4 mb-4 sm:mb-5 flex-shrink-0">
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs mono font-bold">
                        <div className="flex flex-col">
                          <span className="text-gray-400 text-[10px] sm:text-xs mb-1">PRIZE POOL</span>
                          <span className="text-yellow-400 text-base sm:text-lg">
                            {event.prize}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-gray-400 text-[10px] sm:text-xs mb-1">DATE</span>
                          <span className="text-white text-sm">{event.date}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-gray-400 text-[10px] sm:text-xs mb-1">TIME</span>
                          <span className="text-orange-400 text-sm">{event.time}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-gray-400 text-[10px] sm:text-xs mb-1">VENUE</span>
                          <span className="text-white text-xs sm:text-sm">{event.venue}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons - Smaller on mobile */}
                    <div className="flex gap-2 sm:gap-4 mt-auto">
                      <button 
                        onClick={() => handleRegister(event.id)}
                        className="flex-1 py-2 sm:py-3 mono text-xs sm:text-base font-black uppercase bg-red-600 text-white border-2 border-black shadow-[2px_2px_0_#000] sm:shadow-[3px_3px_0_#000] hover:bg-red-700 hover:shadow-[3px_3px_0_#000] sm:hover:shadow-[4px_4px_0_#000] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[1px_1px_0_#000] sm:active:shadow-[2px_2px_0_#000] transition-all duration-200 flex items-center justify-center gap-1 sm:gap-2"
                      >
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                        </svg>
                        <span className="text-xs sm:text-sm">REGISTER</span>
                      </button>
                      <button
                        onClick={() => handleRulebook(event.rulebook)}
                        className="flex-1 py-2 sm:py-3 mono text-xs sm:text-base font-black uppercase bg-zinc-900 text-white border-2 border-black shadow-[2px_2px_0_#000] sm:shadow-[3px_3px_0_#000] hover:bg-zinc-800 hover:shadow-[3px_3px_0_#000] sm:hover:shadow-[4px_4px_0_#000] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[1px_1px_0_#000] sm:active:shadow-[2px_2px_0_#000] transition-all duration-200 flex items-center justify-center gap-1 sm:gap-2"
                      >
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        <span className="text-xs sm:text-sm">RULEBOOK</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center px-4">
            <button
              onClick={() => router.push('/events')}
              className="starlord text-lg sm:text-2xl md:text-3xl px-6 sm:px-12 md:px-16 py-3 sm:py-5 md:py-6 bg-red-600 text-white border-2 sm:border-4 border-black uppercase shadow-[4px_4px_0_#000] sm:shadow-[8px_8px_0_#000] md:shadow-[10px_10px_0_#000] hover:bg-red-700 hover:shadow-[0_0_30px_rgba(220,38,38,.8)] hover:-translate-y-1 transition-all duration-300"
            >
              EXPLORE ALL EVENTS →
            </button>
          </div>

        </div>
      </section>
    </>
  );
}