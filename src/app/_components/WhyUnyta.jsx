"use client";

import Image from "next/image";
import { motion } from "motion/react";

export const WhyUnyta = () => {
  const cards = [
    {
      title: "Simplicity",
      desc: "All-in-one platform designed to be intuitive, so you can start collaborating instantly.",
    },
    {
      title: "Fairness",
      desc: "Clear gifting terms, transparent guidelines, and no hidden fees.",
    },
    {
      title: "Growth",
      desc: "Tools designed to elevate creators and expand brand reach.",
    },
  ];

  return (
    <section className="w-full bg-[#F9F6F6] flex flex-col items-center justify-start overflow-hidden border-y border-black/5 py-12 md:py-16">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        {/* LOGO MONOGRAM */}
        <motion.div
           initial={{ y: 20, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="mb-4 md:mb-6"
         >
           <Image 
             src="/image.png" 
             alt="Unyta Logo" 
             width={60} 
             height={60} 
             quality={100}
             className="object-contain"
             style={{ 
               height: "auto",
               filter: "brightness(0) saturate(100%) invert(11%) sepia(34%) saturate(4529%) hue-rotate(346deg) brightness(91%) contrast(98%)" 
             }}
           />
         </motion.div>

        {/* TITLE */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="font-cormorant text-[36px] tracking-tight md:text-[40px] uppercase text-[#0D0D12] mb-2"
        >
          WHY UNYTA?
        </motion.h2>

        {/* SUBTITLE */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-[#22000C] font-sans font-extralight text-base md:text-lg text-center max-w-2xl mb-12 opacity-80 px-6"
        >
          We believe in making collaborations simpler, more transparent, and rewarding.
        </motion.p>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-[1200px] px-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 + index * 0.15 }}
              className="bg-white w-full rounded-[16px] px-4 py-5 border border-[#EADCDC] flex flex-col items-start gap-y-2"
            >
              <h3 className="font-cormorant text-2xl font-semibold text-[#741717] group-hover:text-[#541409] transition-colors">
                {card.title}
              </h3>
              <p className="font-sans font-light text-[#22000C]/70 text-[15px] leading-[1.6]">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
