'use client'

import { useState } from 'react'
import Link from 'next/link'

// SAME sponsor pool
const sponsorPool = [
  { name: 'NASA', symbol: '🛰️' },
  { name: 'SpaceX', symbol: '🚀' },
  { name: 'Google', symbol: 'G' },
  { name: 'Microsoft', symbol: 'M' },
  { name: 'NVIDIA', symbol: 'NV' },
  { name: 'IBM', symbol: 'IBM' },
  { name: 'Amazon', symbol: 'A' },
  { name: 'Intel', symbol: 'INTEL' },
]

// repeat helper
function loop(list: any[], repeat = 3) {
  const out: any[] = []
  for (let i = 0; i < repeat; i++) out.push(...list.map(s => ({ ...s, id: `${s.name}-${i}` })))
  return out
}

// DATA — grouped by year
const sponsorsByYear: Record<string, any[]> = {
  "2026": loop(sponsorPool, 4),
  "2025": loop([...sponsorPool].reverse(), 3),
}

export default function SponsorsPage() {
  const [year, setYear] = useState<'2026' | '2025'>('2026')

  const sponsors = sponsorsByYear[year]

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto pt-28 px-4">

        {/* HEADER */}
        <div className="mb-14 flex items-center justify-between flex-wrap gap-6">
          <div>
            <h1 className="text-6xl md:text-7xl font-black tracking-tight">
              Sponsors
            </h1>

            <p className="text-gray-300 text-lg mt-2">
              Organizations powering our journey
            </p>
          </div>

          <Link
            href="/"
            className="px-6 py-3 border border-white/25 rounded-full font-bold transition hover:bg-white hover:text-black"
          >
            ← BACK HOME
          </Link>
        </div>

        {/* YEAR TABS */}
        <div className="flex gap-4 mb-10">
          {(['2026','2025'] as const).map(y => (
            <button
              key={y}
              onClick={() => setYear(y)}
              className={`
                px-6 py-3 rounded-full border text-sm font-semibold transition
                ${year === y
                  ? 'bg-white text-black border-white'
                  : 'border-gray-700 text-gray-300 hover:bg-gray-900'}
              `}
            >
              {y} Sponsors
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
          {sponsors.map(s => (
            <div key={s.id} className="group">
              <div className="card">
                <span className="text-4xl">{s.symbol}</span>
                <span className="text-2xl font-semibold">{s.name}</span>
                <div className="card-hover" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* STYLES (same as section) */}
      <style jsx>{`
        .card {
          position: relative;
          width: 100%;
          height: 8rem;
          border-radius: 1rem;
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.15);
          backdrop-filter: blur(6px);
          display: flex;
          gap: 1.25rem;
          align-items: center;
          justify-content: center;
          transition: .25s;
        }
        .card-hover {
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          background: rgba(255,255,255,.25);
          opacity: 0;
          transition: .25s;
        }
        .group:hover .card { transform: scale(1.05); border-color: rgba(255,255,255,.35); }
        .group:hover .card-hover { opacity: .15; }
      `}</style>
    </main>
  )
}
