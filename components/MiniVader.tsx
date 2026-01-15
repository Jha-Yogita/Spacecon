'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function VaderCore() {
  const group = useRef<THREE.Group>(null!);
  const breath = useRef<THREE.Mesh>(null!);
  const saber = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // float + subtle rotation
    group.current.position.y = Math.sin(t * 1.2) * 0.12;
    group.current.rotation.y = t * 0.25;

    // breathing glow
    breath.current.scale.y = 1 + Math.sin(t * 3) * 0.15;

    // saber pulse
    (saber.current.material as THREE.MeshStandardMaterial).emissiveIntensity =
      2.2 + Math.sin(t * 4) * 0.6;
  });

  return (
    <group ref={group}>
      {/* HELMET DOME */}
      <mesh position={[0, 0.6, 0]}>
        <sphereGeometry args={[0.9, 32, 32]} />
        <meshStandardMaterial color="#0b0b0b" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* MASK PLATE */}
      <mesh position={[0, -0.05, 0]}>
        <boxGeometry args={[0.9, 0.8, 0.6]} />
        <meshStandardMaterial color="#050505" roughness={0.4} metalness={0.7} />
      </mesh>

      {/* EYES */}
      {[-0.22, 0.22].map((x, i) => (
        <mesh key={i} position={[x, 0.15, 0.35]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial
            color="#dc2626"
            emissive="#dc2626"
            emissiveIntensity={2}
          />
        </mesh>
      ))}

      {/* BREATHING GRILL */}
      <mesh ref={breath} position={[0, -0.28, 0.36]}>
        <boxGeometry args={[0.35, 0.25, 0.05]} />
        <meshStandardMaterial
          color="#111"
          emissive="#dc2626"
          emissiveIntensity={1.2}
        />
      </mesh>

      {/* CHEST PANEL */}
      <mesh position={[0, -0.9, 0]}>
        <boxGeometry args={[0.6, 0.5, 0.35]} />
        <meshStandardMaterial color="#0e0e0e" />
      </mesh>

      {/* LIGHTSABER */}
      <mesh ref={saber} position={[0.85, -0.7, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 1.4, 16]} />
        <meshStandardMaterial
          color="#dc2626"
          emissive="#dc2626"
          emissiveIntensity={2.5}
        />
      </mesh>
    </group>
  );
}

export default function MiniVader() {
  return (
    <div className="relative w-[360px] h-[360px]">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[3, 3, 3]} intensity={2} color="#dc2626" />
        <pointLight position={[-3, -3, -3]} intensity={1.2} />

        <VaderCore />

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>

      {/* OUTER RED AURA */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          boxShadow: `
            0 0 60px rgba(220,38,38,0.6),
            0 0 120px rgba(220,38,38,0.35)
          `,
        }}
      />
    </div>
  );
}
