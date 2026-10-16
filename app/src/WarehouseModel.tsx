import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import warehouseUrl from './assets/warehouse.glb?url';

function Warehouse() {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(warehouseUrl);
  const activeMixer = useRef<THREE.AnimationMixer | null>(null);

  const normalized = useMemo(() => {
    const clone = scene.clone(true);
    const box = new THREE.Box3().setFromObject(clone);
    const size = new THREE.Vector3();
    box.getSize(size);
    const center = new THREE.Vector3();
    box.getCenter(center);
    const scale = 2.15 / Math.max(size.x, size.y, size.z, 0.001);
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
    animations.forEach((clip) => mixer.clipAction(clip).play());
    activeMixer.current = mixer;
    return () => {
      mixer.stopAllAction();
      activeMixer.current = null;
    };
  }, [animations, normalized]);

  useFrame((state, delta) => {
    if (activeMixer.current) activeMixer.current.update(delta);
    if (!group.current) return;
    group.current.rotation.y = (group.current.rotation.y + delta * 0.2) % (Math.PI * 2);
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.05;
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, state.pointer.x * 0.18, 0.04);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, state.pointer.y * 0.12, 0.04);
  });

  return <primitive object={normalized.clone} ref={group} />;
}

export default function WarehouseModel() {
  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-3xl border border-[#E7E7E7] bg-gradient-to-br from-[#F7F7F7] via-white to-[#F2D3D6]/40 shadow-2xl shadow-black/10">
      <Canvas camera={{ position: [0, 1.35, 4], fov: 38 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.75} />
        <directionalLight position={[4, 6, 2]} intensity={1.1} />
        <pointLight position={[-3, 2, 2]} color="#D71920" intensity={0.35} />
        <Warehouse />
      </Canvas>
      <div className="pointer-events-none absolute bottom-5 left-5 rounded-2xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur">
        <span className="block text-xs font-bold uppercase tracking-[0.18em] text-red-500">Annapoorna</span>
        <strong className="mt-1 block font-[Manrope] text-xl">Warehouse workspace</strong>
      </div>
    </div>
  );
}

useGLTF.preload(warehouseUrl);