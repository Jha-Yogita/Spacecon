'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const Spline = dynamic(
  () => import('@splinetool/react-spline').then(m => m.default),
  { ssr: false }
)

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

// ✅ FIXED — added types
function loop(
  list: Array<{ name: string; symbol: string }>,
  repeat: number = 4
) {
  const out: Array<{ name: string; symbol: string; id: string }> = []

  for (let i = 0; i < repeat; i++) {
    out.push(...list.map(s => ({ ...s, id: `${s.name}-${i}` })))
  }

  return out
}

export default function SponsorsSection() {
  const container1 = useRef<HTMLDivElement | null>(null)
  const container2 = useRef<HTMLDivElement | null>(null)

  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)

  const row1 = loop(sponsorPool, 4)
  const row2 = loop([...sponsorPool].reverse(), 4)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.15 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const c1 = container1.current
    const c2 = container2.current
    if (!c1 || !c2) return

    let raf: number

    const animate = () => {
      c1.scrollLeft += 2.2
      c2.scrollLeft -= 2.2

      const max1 = c1.scrollWidth - c1.clientWidth
      const max2 = c2.scrollWidth - c2.clientWidth

      if (c1.scrollLeft >= max1 / 2) c1.scrollLeft = 0
      if (c2.scrollLeft <= 0) c2.scrollLeft = max2 / 2

      raf = requestAnimationFrame(animate)
    }

    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="sponsors"
      className={`
        relative min-h-screen pt-28 pb-24 px-4 md:px-10
        text-white overflow-hidden bg-black
        transition-all duration-700
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
    >
      {/* Background spline */}
      <div className="absolute inset-0 -z-40 pointer-events-none opacity-40">
        <Spline scene="https://prod.spline.design/queVyJt7qimS-Ous/scene.splinecode" />
      </div>

      <div
        className="absolute bottom-0 right-0 -z-30"
        style={{
          width: '260px',
          height: '100px',
          background:
            'linear-gradient(270deg, rgba(0,0,0,0.98) 50%, rgba(0,0,0,0.75) 78%, rgba(0,0,0,0.05) 100%)',
          pointerEvents: 'none',
          backdropFilter: 'blur(3px)',
        }}
      />

      <div className="absolute inset-0 -z-20 bg-black/50 backdrop-blur-[1px]" />

      {/* Header */}
      <div className="relative z-10 max-w-6xl mx-auto mb-14 flex items-center justify-between flex-wrap gap-6">
        <div>
          <h2 className="text-6xl md:text-7xl font-black tracking-tight">
            Sponsors
          </h2>

          <p className="text-gray-300 text-lg mt-2">
            Proudly powering the mission beyond Earth
          </p>
        </div>

        <Link
          href="/sponsors"
          className="px-6 py-3 border border-white/25 rounded-full font-bold transition hover:bg-white hover:text-black"
        >
          VIEW ALL SPONSORS
        </Link>
      </div>

      {/* Row 1 */}
      <div className="relative overflow-hidden py-10 mb-6">
        <div ref={container1} className="flex overflow-x-hidden">
          <div className="flex gap-10 items-center">
            {row1.map(s => (
              <div key={s.id} className="flex-shrink-0 group">
                <div className="card">
                  <span className="text-4xl">{s.symbol}</span>
                  <span className="text-2xl font-semibold">{s.name}</span>
                  <div className="card-hover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="relative overflow-hidden py-10">
        <div ref={container2} className="flex overflow-x-hidden">
          <div className="flex gap-10 items-center">
            {row2.map(s => (
              <div key={s.id} className="flex-shrink-0 group">
                <div className="card">
                  <span className="text-4xl">{s.symbol}</span>
                  <span className="text-2xl font-semibold">{s.name}</span>
                  <div className="card-hover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .card {
          position: relative;
          width: 18rem;
          height: 8rem;
          border-radius: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(6px);
          display: flex;
          gap: 1.25rem;
          align-items: center;
          justify-content: center;
          transition: 0.25s;
        }
        .card-hover {
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          background: rgba(255, 255, 255, 0.25);
          opacity: 0;
          transition: 0.25s;
        }
        .group:hover .card {
          transform: scale(1.05);
          border-color: rgba(255, 255, 255, 0.35);
        }
        .group:hover .card-hover {
          opacity: 0.15;
        }
      `}</style>
    </section>
  )
}
