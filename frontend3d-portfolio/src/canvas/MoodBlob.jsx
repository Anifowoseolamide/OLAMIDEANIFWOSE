import { useRef, useMemo, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

export default function MoodBlob() {
  const meshRef = useRef();
  const materialRef = useRef();
  
  // Check for reduced motion
  const prefersReducedMotion = useMemo(() => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  // Track mouse target for lerping
  const target = useMemo(() => new THREE.Vector2(0, 0), []);
  const scrollY = useRef(window.scrollY);
  const scrollVelocity = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      scrollVelocity.current = currentScroll - scrollY.current;
      scrollY.current = currentScroll;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current || !materialRef.current) return;

    if (!prefersReducedMotion) {
      // 1. Rotation and Pulse
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
      
      const time = state.clock.getElapsedTime();
      const pulse = Math.sin(time * 2) * 0.05;
      
      // 2. Mouse tracking & Squash/Stretch
      target.x = (state.pointer.x * 2); // Amplify pointer slightly
      target.y = (state.pointer.y * 2);
      
      // Lerp position towards mouse
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, target.x, 0.05);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, target.y, 0.05);

      // Scroll velocity effect (squash and stretch)
      // Decay velocity back to 0
      scrollVelocity.current = THREE.MathUtils.lerp(scrollVelocity.current, 0, 0.1);
      
      const stretchY = 1 + Math.abs(scrollVelocity.current) * 0.005;
      const squashX = 1 - Math.abs(scrollVelocity.current) * 0.002;
      
      meshRef.current.scale.set(
        (2.5 + pulse) * squashX,
        (2.5 + pulse) * stretchY,
        2.5 + pulse
      );
      
      // Distort material speed based on scroll
      materialRef.current.speed = 2 + Math.abs(scrollVelocity.current) * 0.1;
    } else {
      // Reduced motion fallback: Static position, no pulse, no rotation
      meshRef.current.scale.set(2.5, 2.5, 2.5);
      materialRef.current.distort = 0;
    }
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      {/* Coral Light */}
      <directionalLight position={[5, 5, 5]} intensity={2.5} color="#FF4D8D" />
      {/* Cyan Light */}
      <directionalLight position={[-5, -5, -5]} intensity={2} color="#38E1FF" />
      {/* Rim light */}
      <pointLight position={[0, 0, 5]} intensity={0.5} color="#F6F3FF" />

      <Icosahedron ref={meshRef} args={[1, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          ref={materialRef}
          color="#14091F"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.6}
          clearcoat={1}
          clearcoatRoughness={0.2}
        />
      </Icosahedron>
    </>
  );
}
