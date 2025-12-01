"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgressBar() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      if (progressRef.current) {
        progressRef.current.style.width = `${scrollPercent}%`;
      }
      
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateProgress(); // Initial call

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-gradient-to-r from-transparent via-[#eef3ff] to-transparent">
      <div
        ref={progressRef}
        className="h-full bg-gradient-to-r from-[#5289ff] via-[#6b9aff] to-[#5289ff] shadow-[0_0_10px_rgba(82,137,255,0.5)] transition-none"
        style={{ width: "0%" }}
      />
    </div>
  );
}
