'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';


const currentYear = new Date().getFullYear();

const eventImages: Record<string, string> = {
  "DATA SPHERE": "/data.png",
  "DIRACOSMOS": "/dira.png",
  "INNOVEARTH": "/innov.png",
  "CTRL + ALT + HACK": "/cntl.png",
  "SUPER-KNOW-A": "/super.png",
  "SKYSCAPE": "/skyscape.png"
};

const eventsByDay = [
  {
    day: "Day 1",
    date: "21 FEB 2025",
    events: [
      { id: 1, title: "INNOVEARTH", tagline: "Ideathon", description: "Innovate solutions for global challenges.", date: "21 FEB", time: "10:00 AM - 5:00 PM", prize: "₹50,000", venue: "APJ HALLS", status: "OPEN", rulebook: "#" },
      { id: 2, title: "WEB-A-THON", tagline: "Frontend Design", description: "Design space-themed websites.", date: "21 FEB", time: "12:00 PM - 5:00 PM", prize: "₹50,000", venue: "MINI AUDI 2", status: "OPEN", rulebook: "#" },
      { id: 3, title: "COSMOS TALK", tagline: "Tech Seminar", description: "Learn from space experts.", date: "21 FEB", time: "2:00 PM - 4:00 PM", prize: "NA", venue: "MAIN AUDI", status: "CLOSED", rulebook: "#" },
      { id: 4, title: "ROVER RACE", tagline: "Robotics", description: "Build space exploration rovers.", date: "21 FEB", time: "11:00 AM - 4:00 PM", prize: "₹75,000", venue: "ROBOTICS LAB", status: "OPEN", rulebook: "#" },
    ]
  },
  {
    day: "Day 2",
    date: "22 FEB 2025",
    events: [
      { id: 11, title: "CTRL + ALT + HACK", tagline: "Hackathon", description: "Build AI solutions.", date: "22-23 FEB", time: "8:00 AM - Next Day", prize: "₹1,50,000", venue: "MAIN AUDI", status: "OPEN", rulebook: "#" },
      { id: 12, title: "DATA SPHERE", tagline: "Data Analytics", description: "Analyze cosmic datasets.", date: "22 FEB", time: "12:00 PM - 5:00 PM", prize: "₹50,000", venue: "CBT", status: "OPEN", rulebook: "#" },
      { id: 13, title: "SUPER-KNOW-A", tagline: "Quiz", description: "Test space knowledge.", date: "22 FEB", time: "12:00 PM - 5:00 PM", prize: "₹50,000", venue: "MAIN AUDI", status: "OPEN", rulebook: "#" },
    ]
  },
  {
    day: "Day 3",
    date: "23 FEB 2025",
    events: [
      { id: 21, title: "DIRACOSMOS", tagline: "Case Study", description: "Solve space industry problems.", date: "23 FEB", time: "11:00 AM - 5:00 PM", prize: "₹50,000", venue: "CBT", status: "OPEN", rulebook: "#" },
      { id: 22, title: "SKYSCAPE", tagline: "Photography", description: "Space photography challenge.", date: "29 JAN - 15 FEB", time: "All Day", prize: "₹6,000", venue: "ONLINE", status: "OPEN", rulebook: "#" },
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
              MULTIVERSE ARCHIVES
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-14 mb-10 sm:mb-12 md:mb-16">
            {currentDay.events.map(event => (
              <div key={event.id} className="relative group">
                <div className="absolute inset-0 bg-black/70 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 blur-md" />

                <div className="relative bg-zinc-100 border-2 sm:border-[3px] border-black overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">

                  <div className="h-1.5 sm:h-2 bg-red-600" />

                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-red-700 px-2 sm:px-4 py-0.5 sm:py-1 border sm:border-2 border-black shadow-[2px_2px_0_#000] sm:shadow-[4px_4px_0_#000] z-10">
                    <span className="starlord text-base sm:text-xl text-white">#{event.id}</span>
                  </div>

                  <div className={`absolute top-2 sm:top-4 right-2 sm:right-4 px-2 sm:px-4 py-0.5 sm:py-1 border sm:border-2 border-black shadow-[2px_2px_0_#000] sm:shadow-[4px_4px_0_#000] z-10 ${
                    event.status === 'OPEN' ? 'bg-green-600' : 'bg-zinc-600'
                  }`}>
                    <span className="starlord text-white text-sm sm:text-lg">{event.status}</span>
                  </div>

                  <div className="h-48 sm:h-56 md:h-64 bg-black flex items-center justify-center border-b-4 sm:border-b-[6px] border-black">
                    <img src={eventImages[event.title] || "/data.png"} alt={event.title} className="h-full object-contain" />
                  </div>

                  <div className="p-4 sm:p-5 md:p-6">
                    <h3 className="starlord text-2xl sm:text-3xl md:text-4xl text-red-700 mb-1 break-words">{event.title}</h3>
                    <p className="mono text-[0.65rem] sm:text-xs uppercase tracking-wider text-zinc-700 font-bold mb-3 sm:mb-4 md:mb-5">
                      {event.tagline}
                    </p>

                    <div className="bg-zinc-800 text-white border-l-2 sm:border-l-4 border-red-600 p-3 sm:p-4 text-[0.65rem] sm:text-xs mono font-extrabold space-y-1.5 sm:space-y-2">
                      <div className="flex justify-between"><span>PRIZE</span><span className="text-red-400">{event.prize}</span></div>
                      <div className="flex justify-between"><span>DATE</span><span>{event.date}</span></div>
                      <div className="flex justify-between"><span>TIME</span><span className="text-orange-400 text-right ml-2">{event.time}</span></div>
                      <div className="flex justify-between"><span>VENUE</span><span className="text-right ml-2">{event.venue}</span></div>
                    </div>
                  </div>

                  <div className="bg-black p-3 sm:p-4 grid grid-cols-2 gap-3 sm:gap-4 border-t-2 sm:border-t-4 border-black">
                    <button className="event-btn py-2.5 sm:py-3 mono text-xs sm:text-sm font-black uppercase bg-red-600 text-white border-2 sm:border-4 border-black shadow-[3px_3px_0_#000] sm:shadow-[5px_5px_0_#000]">
                      ENTER
                    </button>
                    <button
                      onClick={() => window.location.href = event.rulebook}
                      className="event-btn py-2.5 sm:py-3 mono text-xs sm:text-sm font-black uppercase bg-zinc-900 text-white border-2 sm:border-4 border-black shadow-[3px_3px_0_#000] sm:shadow-[5px_5px_0_#000]"
                    >
                      INTEL
                    </button>
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