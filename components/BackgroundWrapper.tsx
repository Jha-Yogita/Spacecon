// components/BackgroundWrapper.tsx
'use client';

import { motion } from 'framer-motion';

export default function BackgroundWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* GLOBAL BACKGROUND - FIXED */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900" />
        
        {/* MAIN ROTATING DISC - VERY SUBTLE */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vw] max-w-[2500px] max-h-[2500px] rounded-full"
          animate={{
            rotateY: 360,
            rotateX: 360,
          }}
          transition={{
            rotateY: { duration: 180, repeat: Infinity, ease: "linear" },
            rotateX: { duration: 240, repeat: Infinity, ease: "linear" },
          }}
        >
          {/* Outer glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/2 via-purple-500/2 to-blue-500/2" />
          
          {/* Inner ring */}
          <motion.div
            className="absolute inset-[20%] rounded-full border border-purple-400/5"
            animate={{
              rotateZ: -360,
              scale: [1, 1.03, 1],
            }}
            transition={{
              rotateZ: { duration: 100, repeat: Infinity, ease: "linear" },
              scale: { duration: 15, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          
          {/* Outer ring */}
          <motion.div
            className="absolute -inset-[15%] rounded-full border border-blue-400/3"
            animate={{
              rotateZ: 360,
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotateZ: { duration: 140, repeat: Infinity, ease: "linear" },
              scale: { duration: 20, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          
          {/* Center point */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-cyan-400/5 to-purple-400/5"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* FLOATING PARTICLES - SUBTLE */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/10 rounded-full"
            style={{
              left: `${10 + (i * 6)}%`,
              top: `${20 + (i * 5)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(i) * 10, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* CHILDREN CONTENT */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}