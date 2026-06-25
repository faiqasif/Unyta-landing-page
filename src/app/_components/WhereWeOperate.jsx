"use client";

import Image from "next/image";
import { motion } from "motion/react";

const cities = ["London", "Dubai", "Milan", "Paris"];

export const WhereWeOperate = () => {
  return (
    <section className="w-full py-16 bg-[#F9F6F6] flex flex-col items-center overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 w-full flex flex-col items-center">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-6"
        >
          <Image
            src="/logo-brown.png"
            alt="Unyta logo"
            width={60}
            height={66}
            className="object-contain h-auto mb-4"
            quality={100}
          />

          <h2 className="font-cormorant text-[30px] md:text-[40px] uppercase font-semibold text-[#741717] mb-4 leading-tight">
            Where We Operate
          </h2>

          <p className="font-sans text-[#22000C] text-base md:text-lg max-w-[704px] leading-relaxed mb-8">
            From global product gifting to curated city experiences, Unyta connects
            creators with premium brand partnerships across four key cities.
          </p>

          <div className="font-cormorant text-[28px] leading-tight">
            <p className="font-semibold text-[#0D0D12]">High-impact cities.</p>
            <p className="font-semibold text-[#741717]">Premium sectors.</p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-2 md:grid-cols-[128px_128px_128px_128px] gap-4 md:gap-5 w-fit"
        >
          {cities.map((city) => (
            <motion.div
              key={city}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              className="bg-white rounded-[16px] border border-[#EADCDC] px-5 py-4.75 flex items-center justify-center"
            >
              <span className="font-cormorant text-2xl font-semibold text-[#741717]">
                {city}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
