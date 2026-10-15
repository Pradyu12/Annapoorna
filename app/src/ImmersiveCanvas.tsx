import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function ParticleCloud() {
  const points = useRef<THREE.Points>(null);
  const geometry = useMemo(() => {
    const count = 1800;
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    for (let i = 0; i < count; i += 1) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 1.1 + Math.random() * 0.85;
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.cos(phi);
      positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
      sizes[i] = 0.012 + Math.random() * 0.03;
    }
    const nextGeometry = new THREE.BufferGeometry();
    nextGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    nextGeometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    return nextGeometry;
  }, []);

  useFrame((state, delta) => {
    if (!points.current) return;
    points.current.rotation.y += delta * 0.12;
    points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.12;
    points.current.position.x = THREE.MathUtils.lerp(points.current.position.x, state.pointer.x * 0.28, 0.035);
    points.current.position.y = THREE.MathUtils.lerp(points.current.position.y, state.pointer.y * 0.2, 0.035);
  });

  return (
    <points ref={points} geometry={geometry}>
      <shaderMaterial
        uniforms={{ uTime: { value: 0 }, uColor: { value: new THREE.Color('#D71920') } }}
        vertexShader={`
          attribute float aSize;
          varying vec3 vPosition;
          void main() {
            vPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = aSize * 340.0 / gl_Position.w;
          }
        `}
        fragmentShader={`
          varying vec3 vPosition;
          void main() {
            float distance = length(gl_PointCoord - vec2(0.5));
            if (distance > 0.5) discard;
            float alpha = 1.0 - smoothstep(0.25, 0.5, distance);
            vec3 color = mix(vec3(0.08, 0.08, 0.08), vec3(0.84, 0.09, 0.125), smoothstep(-1.0, 1.4, vPosition.y));
            gl_FragColor = vec4(color, alpha * 0.72);
          }
        `}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function ImmersiveCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.4], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: false, powerPreference: 'high-performance' }}
      aria-hidden="true"
    >
      <ParticleCloud />
    </Canvas>
  );
}