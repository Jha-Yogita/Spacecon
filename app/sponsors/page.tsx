'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation';
const currentYear = new Date().getFullYear();


const sponsorPool = [
  { name: 'NASA', tier: 'title' },
  { name: 'SpaceX', tier: 'title' },
  { name: 'Google', tier: 'platinum' },
  { name: 'Microsoft', tier: 'platinum' },
  { name: 'NVIDIA', tier: 'gold' },
  { name: 'IBM', tier: 'gold' },
  { name: 'Amazon', tier: 'silver' },
  { name: 'Intel', tier: 'silver' },
  { name: 'ISRO', tier: 'title' },
  { name: 'Blue Origin', tier: 'platinum' },
  { name: 'Meta', tier: 'gold' },
  { name: 'Tesla', tier: 'silver' },
]

function loop(list: any[], repeat = 2) {
  const out: any[] = []
  for (let i = 0; i < repeat; i++) out.push(...list.map(s => ({ ...s, id: `${s.name}-${i}` })))
  return out
}

const sponsorsByYear: Record<string, any[]> = {
  "2026": loop(sponsorPool, 2),
  "2025": loop([...sponsorPool].reverse(), 2),
}

const tierColors = {
  title: 'bg-red-600 border-red-500',
  platinum: 'bg-blue-600 border-blue-500',
  gold: 'bg-yellow-600 border-yellow-500',
  silver: 'bg-gray-600 border-gray-500'
}

const tierNames = {
  title: 'TITLE SPONSOR',
  platinum: 'PLATINUM',
  gold: 'GOLD',
  silver: 'SILVER'
}

export default function SponsorsPage() {
  const [year, setYear] = useState<'2026' | '2025'>('2026')
  const router = useRouter();

  const sponsors = sponsorsByYear[year]

  return (
    <div className="min-h-screen text-white relative" style={{ background: '#000' }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Montserrat:wght@600;700;800;900&display=swap');

        .starlord { font-family: 'Bangers', cursive; letter-spacing: .06em; }
        .mono { font-family: 'Montserrat', sans-serif; }

        @keyframes stars {
          from { background-position: 0 0; }
          to { background-position: 0 1000px; }
        }

        @keyframes planetFloat {
          0%,100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(4deg); }
        }

        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          33% { transform: translate(-2px, 2px); }
          66% { transform: translate(2px, -2px); }
        }

        @keyframes nebula {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
      `}</style>

      <div style={{ 
        position: 'fixed', 
        inset: 0, 
        zIndex: 0,
        background: 'radial-gradient(circle at 20% 50%, rgba(37,99,235,0.25) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(220,38,38,0.25) 0%, transparent 50%)',
      }} />

      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1,
        backgroundImage: 'radial-gradient(2px 2px at 20px 30px, #fff, transparent), radial-gradient(2px 2px at 60px 70px, #fff, transparent), radial-gradient(1px 1px at 50px 50px, #fff, transparent), radial-gradient(1px 1px at 130px 80px, #fff, transparent), radial-gradient(2px 2px at 90px 10px, #fff, transparent)',
        backgroundSize: '200px 200px',
        backgroundRepeat: 'repeat',
        opacity: 0.7,
        animation: 'stars 120s linear infinite'
      }} />

      <div style={{ position: 'fixed', inset: 0, zIndex: 2, overflow: 'hidden', pointerEvents: 'none' }}>
        <div className="absolute left-[5%] sm:left-[10%] top-[15%] w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] rounded-full opacity-60" style={{
          background: 'radial-gradient(circle at 30% 30%, #60a5fa, #2563eb 40%, #000 75%)',
          boxShadow: 'inset -80px -80px 150px rgba(0,0,0,0.7), 0 0 100px rgba(59,130,246,0.5)',
          animation: 'planetFloat 18s ease-in-out infinite'
        }} />
        
        <div className="absolute right-[5%] bottom-[10%] w-[180px] sm:w-[250px] md:w-[350px] h-[180px] sm:h-[250px] md:h-[350px] rounded-full opacity-60" style={{
          background: 'radial-gradient(circle at 30% 30%, #f87171, #dc2626 40%, #000 75%)',
          boxShadow: 'inset -70px -70px 140px rgba(0,0,0,0.7), 0 0 90px rgba(220,38,38,0.5)',
          animation: 'planetFloat 22s ease-in-out infinite reverse'
        }} />
      </div>

      <div style={{ position: 'relative', zIndex: 10 }} className="max-w-7xl mx-auto pt-12 sm:pt-16 md:pt-20 px-4 sm:px-6 pb-10 sm:pb-12 md:pb-16">

        <div className="mb-8 sm:mb-10 md:mb-12 text-center">
          <h1
            className="starlord text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem] uppercase text-white leading-none"
            style={{
              WebkitTextStroke: '2px #dc2626',
              textShadow: '0 4px 0 #dc2626, 0 8px 0 #000'
            }}
          >
            SPONSORS
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



        <div className="flex justify-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12">
          {(['2026', '2025'] as const).map(y => (
            <button
              key={y}
              onClick={() => setYear(y)}
              className={`
                starlord text-xl sm:text-2xl md:text-3xl px-8 sm:px-10 md:px-12 py-3 sm:py-4 border-2 sm:border-4 border-black shadow-[3px_3px_0_#000] sm:shadow-[6px_6px_0_#000]
                transition-all duration-300
                ${year === y
                  ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,.8)] sm:shadow-[0_0_30px_rgba(220,38,38,.8)]'
                  : 'bg-zinc-900 text-white hover:bg-zinc-800'}
              `}
            >
              {y}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {sponsors.map(s => (
            <div
              key={s.id}
              className="group relative"
            >
              <div
                className={`
                  relative h-44 sm:h-52 md:h-56 border-2 sm:border-4 border-black bg-zinc-900
                  shadow-[3px_3px_0_#000] sm:shadow-[6px_6px_0_#000]
                  transition-all duration-300
                  hover:shadow-[0_0_30px_rgba(220,38,38,.6)] sm:hover:shadow-[0_0_40px_rgba(220,38,38,.6)]
                  hover:-translate-y-1 sm:hover:-translate-y-2
                  overflow-hidden
                `}
              >
                <div className={`absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 ${tierColors[s.tier as keyof typeof tierColors]} border sm:border-2 border-black px-2 sm:px-3 py-0.5 sm:py-1 text-[0.65rem] sm:text-xs mono font-bold shadow-[2px_2px_0_#000] sm:shadow-[3px_3px_0_#000]`}>
                  <span className="hidden sm:inline">{tierNames[s.tier as keyof typeof tierNames]}</span>
                  <span className="sm:hidden">{tierNames[s.tier as keyof typeof tierNames].split(' ')[0]}</span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
                  <span className="starlord text-3xl sm:text-4xl md:text-5xl text-white text-center group-hover:animate-[glitch_0.3s_ease-in-out] break-words">
                    {s.name}
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/20 group-hover:to-red-600/40 transition-all duration-300" />
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

    </div>
  )
}