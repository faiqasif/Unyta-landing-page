"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

const DISABLED_PATHS = ["/privacy", "/terms", "/guidelines"];

export const SmoothScroll = ({ children }) => {
  const lenisRef = useRef(null);
  const pathname = usePathname();
  const isDisabled = DISABLED_PATHS.some(
    (p) => pathname === p || pathname?.startsWith(`${p}/`)
  );

  useEffect(() => {
    if (isDisabled) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Patch for anchor links to work with custom scroll
    const handleClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.hash && target.origin === window.location.origin) {
        const element = document.querySelector(target.hash);
        if (element) {
          e.preventDefault();
          lenis.scrollTo(element, {
            offset: -100, // Account for fixed navbar if needed
            duration: 1.5,
          });
        }
      }
    };

    document.addEventListener('click', handleClick);

    // Global toggle for other components to lock scroll
    window.toggleLenisScroll = (stop) => {
      if (stop) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    };

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      document.removeEventListener('click', handleClick);
      delete window.toggleLenisScroll;
    };
  }, [isDisabled]);

  return <>{children}</>;
};
