"use client";

import { useEffect, useRef } from "react";

export default function AuroraBackground() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let raf = 0;
    let targetX = 0.5;
    let targetY = 0.3;
    let curX = 0.5;
    let curY = 0.3;

    function onMove(e: MouseEvent) {
      targetX = e.clientX / window.innerWidth;
      targetY = e.clientY / window.innerHeight;
    }

    function tick() {
      curX += (targetX - curX) * 0.06;
      curY += (targetY - curY) * 0.06;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${curX * 100}vw, ${
          curY * 100
        }vh, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg">
      {/* Base aurora mesh blobs */}
      <div className="absolute -top-40 -left-40 h-[560px] w-[560px] rounded-full bg-violet-300/40 blur-[120px] animate-float-slow" />
      <div className="absolute top-1/3 -right-32 h-[480px] w-[480px] rounded-full bg-lavender-300/40 blur-[130px] animate-float" />
      <div className="absolute bottom-0 left-1/4 h-[520px] w-[520px] rounded-full bg-peach-200/50 blur-[140px] animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/4 h-[360px] w-[360px] rounded-full bg-violet-200/30 blur-[110px] animate-float" />

      {/* Mouse-follow ambient glow */}
      <div
        ref={glowRef}
        className="absolute left-0 top-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(207,199,251,0.35)_0%,_rgba(225,218,252,0.12)_45%,_transparent_75%)] blur-3xl will-change-transform"
        style={{ transform: "translate(-50%,-50%)" }}
      />

      {/* Soft top light wash */}
      <div className="absolute inset-x-0 top-0 h-[40vh] bg-gradient-to-b from-white/60 to-transparent" />
    </div>
  );
}
