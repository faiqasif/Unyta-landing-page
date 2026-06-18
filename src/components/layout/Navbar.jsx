"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    // Safety check - ensures we don't fire if previous is undefined or zero
    if (previous === undefined) return;

    // Hide navbar if scrolling down, past 150px threshold
    if (latest > previous && latest > 150) {
      setHidden(true);
      if (isOpen) setIsOpen(false);
    } else if (latest < previous) {
      // Show navbar if scrolling up
      setHidden(false);
    }
  });

  return (
    <div className="fixed top-4 md:top-5 left-1/2 z-50 -translate-x-1/2 px-4 w-full max-w-[95vw] md:max-w-fit pointer-events-none">
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -150, opacity: 0 }
        }}
        initial="visible"
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "circOut" }}
        className="flex flex-col items-center pointer-events-auto"
      >
        <div className="flex w-full md:w-fit h-13.5 items-center justify-between md:justify-center gap-x-8 rounded-full bg-[#541409] px-6 md:px-7 text-sm font-medium text-stone-200 shadow-xl">
          <Link
            href="/"
            className="flex items-center justify-center shrink-0"
          >
            <Image src="/image.png" alt="Unyta Logo" width={21} height={21} className="object-contain" style={{ height: "auto" }} quality={100} />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-x-6 whitespace-nowrap">
            <Link
              href="/#features"
              className="hover:text-white font-light tracking-wide transition-colors"
            >
              Features
            </Link>
            <Link
              href="/#how-it-works"
              className="hover:text-white font-light tracking-wide transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/#about"
              className="hover:text-white font-light tracking-wide transition-colors"
            >
              About
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none shrink-0"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-[2px] bg-white rounded-full transition-transform duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-[8px]" : ""}`}></span>
            <span className={`block w-5 h-[2px] bg-white rounded-full transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-5 h-[2px] bg-white rounded-full transition-transform duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}></span>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden flex flex-col items-center w-full bg-[#541409] rounded-2xl md:rounded-3xl mt-2 overflow-hidden transition-all duration-300 ease-in-out font-light tracking-wide shadow-2xl ${isOpen ? "max-h-80 py-2 border border-stone-200/10 opacity-100" : "max-h-0 py-0 border-transparent opacity-0"
            }`}
        >
          <Link href="/#features" onClick={() => setIsOpen(false)} className="w-full text-center py-3 text-stone-200 hover:text-white hover:bg-white/10 transition-colors">
            Features
          </Link>
          <Link href="/#how-it-works" onClick={() => setIsOpen(false)} className="w-full text-center py-3 text-stone-200 hover:text-white hover:bg-white/10 transition-colors">
            How It Works
          </Link>
          <Link href="/#about" onClick={() => setIsOpen(false)} className="w-full text-center py-3 text-stone-200 hover:text-white hover:bg-white/10 transition-colors">
            About
          </Link>
        </div>
      </motion.nav>
    </div>
  );
};
