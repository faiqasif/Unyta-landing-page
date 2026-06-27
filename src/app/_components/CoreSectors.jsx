"use client";

import Image from "next/image";
import { motion } from "motion/react";

const sectors = [
  { label: "Fashion", image: "/core/c1.png" },
  { label: "Beauty", image: "/core/c2.png" },
  { label: "Travel", image: "/core/c3.png" },
  { label: "Dining", image: "/core/c4.png" },
  { label: "Wellness", image: "/core/c5.png" },
  { label: "Fitness", image: "/core/c6.png" },
  { label: "Jewellery", image: "/core/c7.png" },
  { label: "Home & Decor", image: "/core/c8.png" },
];

export const CoreSectors = () => {
  return (
    <section className="w-full py-7 sm:py-16 md:py-24 bg-white flex flex-col items-center overflow-hidden">
      <div className="mx-auto px-6 md:px-12 w-full flex flex-col items-center">
        <motion.h2
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-cormorant text-2xl sm:text-[36px] md:text-[48px] uppercase font-semibold text-[#741717] mb-12 md:mb-16 text-center leading-tight"
        >
          Core Sectors
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-4 lg:grid-cols-8 gap-x-3 gap-y-8 sm:gap-x-4 md:gap-x-5 w-full max-w-[1260px] mb-12 md:mb-16"
        >
          {sectors.map((sector) => (
            <motion.div
              key={sector.label}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              className="flex flex-col items-center gap-3 md:gap-4"
            >
              <div className="relative w-full max-w-[108px] sm:max-w-[132px] aspect-square rounded-full overflow-hidden">
                <Image
                  src={sector.image}
                  alt={sector.label}
                  fill
                  sizes="(max-width: 640px) 22vw, 132px"
                  className="object-cover"
                  quality={100}
                />
              </div>
              <span className="font-cormorant text-sm sm:text-base md:text-lg font-semibold text-[#741717] text-center leading-tight">
                {sector.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <div className="w-full max-w-[900px] h-px bg-linear-to-r from-[#FFE2DD] via-[#54140980] to-[#FFE2DD]" />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-0 w-full max-w-[700px] pt-10 md:pt-12"
        >
          <div className="flex items-center gap-4 sm:gap-5 sm:flex-1 sm:justify-center">
            <Image
              src="/core/globe.svg"
              alt=""
              width={32}
              height={32}
              aria-hidden
            />
            <div className="flex flex-col gap-0.5">
              <span className="font-sans font-light text-sm text-[#22000C]/60">
                Product Gifting
              </span>
              <span className="font-cormorant text-xl md:text-2xl font-semibold text-[#741717]">
                Available globally
              </span>
            </div>
          </div>

          <div className="hidden sm:block w-px h-14 bg-linear-to-b from-[#FFE2DD] via-[#54140966] to-[#FFE2DD] mx-8 md:mx-12 shrink-0" />

          <div className="flex items-center gap-4 sm:gap-5 sm:flex-1 sm:justify-center">
            <Image
              src="/core/location.svg"
              alt=""
              width={32}
              height={32}
              aria-hidden
            />
            <div className="flex flex-col gap-0.5">
              <span className="font-sans font-light text-sm text-[#22000C]/60">
                Experiences
              </span>
              <span className="font-cormorant text-xl md:text-2xl font-semibold text-[#741717]">
                Curated by city
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
