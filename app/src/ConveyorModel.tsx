import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import conveyorUrl from './assets/conveyors.glb?url';

function Conveyor() {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(conveyorUrl);
  const activeMixer = useRef<THREE.AnimationMixer | null>(null);

  const normalized = useMemo(() => {
    const clone = scene.clone(true);
    const box = new THREE.Box3().setFromObject(clone);
    const size = new THREE.Vector3();
    box.getSize(size);
    const center = new THREE.Vector3();
    box.getCenter(center);
    const scale = 1.9 / Math.max(size.x, size.y, size.z, 0.001);
    clone.scale.setScalar(scale);
    clone.position.set(-center.x * scale, -center.y * scale, -center.z * scale);
    clone.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = false;
        child.receiveShadow = true;
      }
    });
    return { clone, hasAnimation: animations.length > 0 };
  }, [scene, animations]);

  useEffect(() => {
    if (!normalized.hasAnimation) return;
    const mixer = new THREE.AnimationMixer(normalized.clone);
    animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.setLoop(THREE.LoopOnce, 1);
      action.clampWhenFinished = true;
      action.play();
    });
    activeMixer.current = mixer;
    return () => {
      mixer.stopAllAction();
      activeMixer.current = null;
    };
  }, [animations, normalized]);

  useFrame(() => {
    if (activeMixer.current) activeMixer.current.update(1 / 60);
  });

  return <primitive object={normalized.clone} ref={(node: any) => { group.current = node as THREE.Group; if (node) { node.rotation.y = Math.PI / 2; } }} />;
}

export default function ConveyorModel() {
  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-3xl border border-[#E7E7E7] bg-gradient-to-br from-[#F7F7F7] via-white to-[#F2D3D6]/40 shadow-2xl shadow-black/10">
      <Canvas camera={{ position: [0, 1.4, 4.3], fov: 34 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[4, 6, 2]} intensity={1.1} />
        <pointLight position={[-3, 2, 2]} color="#D71920" intensity={0.35} />
        <Conveyor />
      </Canvas>
    </div>
  );
}

useGLTF.preload(conveyorUrl);