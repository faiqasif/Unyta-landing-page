"use client";

import Image from "next/image";
import { motion } from "motion/react";

export const PlatformFeatures = () => {
  return (
    <section id="features" className="w-full py-24 bg-white flex flex-col items-center overflow-hidden scroll-mt-24 antialiased">
      {/* HEADER */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center px-6"
      >
        <h2 className="font-cormorant text-[36px] md:text-[48px] uppercase font-semibold text-[#0D0D12] mb-5">
          Platform Features
        </h2>
        <p className="font-sans font-light text-[#22000C] text-base md:text-xl max-w-2xl mx-auto">
          Everything you need to discover, connect, and collaborate — all in one place.
        </p>
      </motion.div>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.12 }}
        className="w-full flex flex-col px-4 items-center justify-center max-w-[1060px] mx-auto"
      >
        <Image
          src="/platform.png"
          alt="Platform Features"
          width={1036}
          height={945}
          quality={100}
          sizes="(max-width: 1100px) 100vw, 1036px"
          className="w-full h-auto max-w-[1036px] mx-auto"
        />
      </motion.div>
    </section>
  );
};
