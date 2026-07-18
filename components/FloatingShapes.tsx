"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Shard({
  position,
  scale,
  speed,
  color,
  geometry,
}: {
  position: [number, number, number];
  scale: number;
  speed: number;
  color: string;
  geometry: "icosahedron" | "octahedron" | "torus";
}) {
  const ref = useRef<THREE.Mesh>(null);
  const offset = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime() * speed + offset;
    ref.current.rotation.x = t * 0.25;
    ref.current.rotation.y = t * 0.18;
    ref.current.position.y = position[1] + Math.sin(t) * 0.35;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      {geometry === "icosahedron" && <icosahedronGeometry args={[1, 0]} />}
      {geometry === "octahedron" && <octahedronGeometry args={[1, 0]} />}
      {geometry === "torus" && <torusGeometry args={[0.7, 0.25, 16, 40]} />}
      <meshPhysicalMaterial
        color={color}
        transparent
        opacity={0.28}
        roughness={0.15}
        metalness={0.05}
        transmission={0.6}
        thickness={1.2}
      />
    </mesh>
  );
}

export default function FloatingShapes() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
      className="!absolute !inset-0"
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 4, 4]} intensity={0.6} color="#ffffff" />
      <directionalLight position={[-4, -2, 2]} intensity={0.3} color="#B7ACFA" />

      <Shard position={[-3.4, 1.6, -2]} scale={1.1} speed={0.35} color="#8B79F1" geometry="icosahedron" />
      <Shard position={[3.6, -1.2, -3]} scale={1.5} speed={0.28} color="#F2A66E" geometry="octahedron" />
      <Shard position={[2.4, 2.2, -1.5]} scale={0.7} speed={0.42} color="#B7ACFA" geometry="torus" />
      <Shard position={[-3, -2, -1]} scale={0.9} speed={0.3} color="#CFC7FB" geometry="octahedron" />
    </Canvas>
  );
}
