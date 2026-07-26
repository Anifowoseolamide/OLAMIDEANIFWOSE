import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';

export default function Scene() {
  const sphereRef = useRef();

  // Animate the sphere rotation on every frame
  useFrame((state, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += delta * 0.2;
      sphereRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={2} color="#6366f1" />
      
      <Float
        speed={2} // Animation speed
        rotationIntensity={1.5} // XYZ rotation intensity
        floatIntensity={2} // Up/down float intensity
      >
        <Sphere ref={sphereRef} args={[1, 64, 64]} scale={2}>
          <MeshDistortMaterial
            color="#050505"
            attach="material"
            distort={0.4} // Amount of distortion
            speed={2} // Speed of distortion
            roughness={0.2}
            metalness={0.8}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </Sphere>
      </Float>
    </>
  );
}
