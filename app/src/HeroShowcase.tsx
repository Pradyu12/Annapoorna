import { useEffect, useRef, useState } from 'react';
import heroImage from './assets/logistics-hero.png';
import { usePrefersReducedMotion } from './motion';

/**
 * Flat-image hero showcase.
 *
 * Motion is layered so each effect can be disabled independently:
 *  - reveal      : one-shot entrance (CSS, plays on mount)
 *  - float       : slow idle bob (CSS loop)
 *  - glow        : soft red halo pulse (CSS loop)
 *  - pointer tilt: the scene leans toward the cursor (JS + CSS transition)
 *  - scroll drift: the scene eases as the section passes the viewport (JS)
 *
 * Everything collapses to a still frame under prefers-reduced-motion.
 */
export default function HeroShowcase() {
  const reducedMotion = usePrefersReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [drift, setDrift] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const node = cardRef.current;
    if (!node) return;

    const handleMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      setPointer({
        x: (event.clientX - rect.left) / rect.width - 0.5,
        y: (event.clientY - rect.top) / rect.height - 0.5,
      });
    };
    const handleLeave = () => setPointer({ x: 0, y: 0 });

    node.addEventListener('pointermove', handleMove);
    node.addEventListener('pointerleave', handleLeave);
    return () => {
      node.removeEventListener('pointermove', handleMove);
      node.removeEventListener('pointerleave', handleLeave);
    };
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;
    let frame = 0;

    const measure = () => {
      frame = 0;
      const node = cardRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
      setDrift(Math.max(-1, Math.min(1, progress)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    measure();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reducedMotion]);

  const sceneStyle = reducedMotion
    ? undefined
    : {
        transform: [
          'perspective(1100px)',
          `rotateX(${(-pointer.y * 6).toFixed(2)}deg)`,
          `rotateY(${(pointer.x * 8).toFixed(2)}deg)`,
          `translate3d(${(pointer.x * 18).toFixed(1)}px, ${(pointer.y * 12 - drift * 30).toFixed(1)}px, 0)`,
        ].join(' '),
        transition: 'transform 400ms cubic-bezier(0.2, 0.6, 0.3, 1)',
        transformStyle: 'preserve-3d' as const,
      };

  return (
    <div
      ref={cardRef}
      className="relative h-[320px] w-full overflow-hidden rounded-3xl border border-[#E7E7E7] bg-gradient-to-br from-[#F7F7F7] via-white to-[#F2D3D6]/50 shadow-2xl shadow-black/10 sm:h-[400px] md:h-[480px]"
    >
      {/* soft red halo */}
      <span className="pointer-events-none absolute inset-0 grid place-items-center">
        <span className="hero-glow h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(215,25,32,0.18),rgba(215,25,32,0)_70%)] md:h-[380px] md:w-[380px]" />
      </span>

      {/* subtle grid texture for depth */}
      <span
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(#E7E7E7 1px, transparent 1px), linear-gradient(90deg, #E7E7E7 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 78%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black, transparent 78%)',
        }}
      />

      <div className="absolute inset-0 grid place-items-center p-6" style={sceneStyle}>
        <div className="hero-float h-full w-full">
          <img
            src={heroImage}
            alt="Isometric illustration of warehouse operations: storage, handling and dispatch"
            className="hero-reveal h-full w-full object-contain drop-shadow-[0_28px_45px_rgba(23,23,23,0.16)]"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>

      {/* corner accent */}
      <span className="pointer-events-none absolute right-5 top-5 h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_0_6px_rgba(215,25,32,0.12)]" />
    </div>
  );
}
