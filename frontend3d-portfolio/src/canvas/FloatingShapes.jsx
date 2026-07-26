import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Torus, Cylinder, Icosahedron, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function FloatingShapes() {
  const groupRef = useRef();

  // Subtle parallax effect based on mouse pointer
  useFrame((state) => {
    if (!groupRef.current) return;
    const targetX = (state.pointer.x * 2);
    const targetY = (state.pointer.y * 2);

    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetY * 0.1, 0.05);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX * 0.1, 0.05);
  });

  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#C6FF3D" />

      <group ref={groupRef}>
        {/* Glossy Blue Torus */}
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2} position={[-4, 2, -2]}>
          <Torus args={[1, 0.4, 32, 64]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
            <MeshTransmissionMaterial
              backside
              backsideThickness={1}
              thickness={1.5}
              roughness={0.1}
              transmission={1}
              ior={1.5}
              chromaticAberration={0.05}
              anisotropy={0.1}
              color="#6FA0EF"
            />
          </Torus>
        </Float>

        {/* Lime Glass Cylinder */}
        <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5} position={[5, -2, -4]}>
          <Cylinder args={[0.8, 0.8, 2, 32]} rotation={[Math.PI / 6, 0, Math.PI / 3]}>
            <MeshTransmissionMaterial
              backside
              thickness={1.2}
              roughness={0.15}
              transmission={0.9}
              ior={1.3}
              color="#C6FF3D"
            />
          </Cylinder>
        </Float>

        {/* Ink/Dark Icosahedron */}
        <Float speed={2.5} rotationIntensity={1} floatIntensity={2.5} position={[3, 3, -6]}>
          <Icosahedron args={[1.2, 0]}>
            <meshPhysicalMaterial
              roughness={0.2}
              metalness={0.8}
              clearcoat={1}
              clearcoatRoughness={0.1}
              color="#0B0F19"
            />
          </Icosahedron>
        </Float>
      </group>
    </>
  );
}
