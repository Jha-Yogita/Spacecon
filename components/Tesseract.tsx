'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function GlowingCube() {
   const cubeRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (cubeRef.current) {
      cubeRef.current.rotation.x = t * 0.25;
      cubeRef.current.rotation.y = t * 0.35;
      cubeRef.current.material.emissiveIntensity =
        2.2 + Math.sin(t * 2) * 0.6;
    }
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[2.2, 2.2, 2.2]} />
      <meshPhysicalMaterial
        color="#7dd3fc"
        emissive="#38bdf8"
        emissiveIntensity={2.5}
        roughness={0.15}
        metalness={0.05}
        transmission={0.85}
        thickness={1.2}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </mesh>
  );
}

export default function Tesseract() {
  return (
    <div className="relative w-[420px] h-[420px]">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={3} color="#38bdf8" />
        <pointLight position={[-5, -5, -5]} intensity={2} color="#7dd3fc" />

        {/* Energy aura */}
        <mesh>
          <boxGeometry args={[2.7, 2.7, 2.7]} />
          <meshBasicMaterial
            color="#38bdf8"
            transparent
            opacity={0.08}
          />
        </mesh>

        <GlowingCube />

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.7} />
      </Canvas>

      {/* OUTER GLOW */}
      <div
        className="absolute inset-0 pointer-events-none rounded-xl"
        style={{
          boxShadow: `
            0 0 80px rgba(56,189,248,0.9),
            0 0 160px rgba(56,189,248,0.6),
            0 0 260px rgba(56,189,248,0.35)
          `
        }}
      />
    </div>
  );
}
