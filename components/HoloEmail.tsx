'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function EmailOrb() {
  const ref = useRef<any>();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.rotation.y = t * 0.3;
    ref.current.rotation.x = t * 0.15;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.3, 64, 64]} />
      <meshPhysicalMaterial
        color="#020617"
        emissive="#38bdf8"
        emissiveIntensity={1.6}
        transmission={0.85}
        roughness={0.05}
        thickness={1.4}
      />
    </mesh>
  );
}

export default function HoloEmail() {
  return (
    <div className="relative w-[320px] h-[320px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#38bdf8" />
        <EmailOrb />
      </Canvas>

      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          boxShadow: `
            0 0 60px rgba(56,189,248,.6),
            0 0 140px rgba(56,189,248,.35)
          `
        }}
      />
    </div>
  );
}
