"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

const THANK_YOU_CONTENT = {
  application: (
    <p className="font-sans text-[#541409] text-sm sm:text-base lg:text-xl font-medium mb-8 max-w-[567px]">
      Thanks for your interest in Unyta. Our team will review your application.
    </p>
  ),
  demo: (
    <div className="font-sans text-[#541409] text-sm sm:text-base lg:text-xl font-medium mb-8 max-w-[567px] flex flex-col gap-1">
      <p>Thank you for your interest in Unyta.</p>
      <p>
        Our team will review your request and contact you within 24—48 hours.
      </p>
    </div>
  ),
};

export const ApplicationThankYouDialog = ({
  isOpen,
  onClose,
  variant = "application",
}) => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.toggleLenisScroll) {
      window.toggleLenisScroll(isOpen);
    }
    return () => {
      if (typeof window !== "undefined" && window.toggleLenisScroll) {
        window.toggleLenisScroll(false);
      }
    };
  }, [isOpen]);

  function handleHomepage() {
    onClose();
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[120] bg-black/40 backdrop-blur-sm"
          />

          <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.97 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="relative pointer-events-auto w-full max-w-[420px] lg:max-w-[712px] bg-white rounded-[24px] shadow-2xl border border-stone-200 px-8 pt-10 pb-8 sm:px-10 sm:pt-12 sm:pb-10 flex flex-col items-center text-center"
              data-lenis-prevent
            >
              <button
                type="button"
                onClick={onClose}
                className="absolute top-4 right-5 sm:top-6 sm:right-6 text-stone-400 hover:text-black transition-colors"
                aria-label="Close"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <Image
                src="/logo-brown.png"
                alt="Unyta"
                width={71}
                height={74}
                className="object-contain mb-6 w-17.75 h-auto"
                quality={100}
              />

              <h2 className="font-cormorant font-semibold text-[32px] sm:text-[36px] lg:text-[40px] uppercase text-[#741717] tracking-tight mb-4 leading-tight">
                Thank You
              </h2>

              {THANK_YOU_CONTENT[variant] ?? THANK_YOU_CONTENT.application}

              <Link
                href="/"
                onClick={handleHomepage}
                className="w-full h-[52px] sm:h-[56px] rounded-full bg-[#741717] text-white font-sans font-medium text-[15px] sm:text-base flex items-center justify-center hover:bg-[#541409] transition-all shadow-lg active:scale-[0.98]"
              >
                Homepage
              </Link>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
