"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Icons } from "./icons";

export const Vision = () => {
  const steps = [
    {
      title: "Swipe",
      desc: "Find the perfect match. Creator and brand collaborations tailored to you.",
      icon: Icons.visionSwipe
    },
    {
      title: "Match",
      desc: "Chat, share, collect ideas, and stay in sync. Every step of the way.",
      icon: Icons.visionMatch
    },
    {
      title: "Connect",
      desc: "Boost visibility, showcase your content, and unlock new opportunities.",
      icon: Icons.visionConnect
    },
    {
      title: "Elevate",
      desc: "Your vision. Your value. Your terms.",
      icon: Icons.visionElevate
    }
  ];

  return (
    <section className="w-full h-auto min-h-[429px] bg-[#F9F6F6] flex items-center justify-center py-10">
      <div className="w-full flex flex-col items-center px-5">
        {/* SECTION TITLE */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-x-2 md:gap-x-2 mb-10 md:mb-14 text-center flex-wrap justify-center px-6"
        >
          <h2 className="font-cormorant text-[32px] md:text-[40px] uppercase font-semibold text-[#0D0D12]">
            Our Vision:
          </h2>
          {/* STYLIZED LOGO */}
          <div className="flex items-center scale-[0.8] md:scale-[0.9] lg:scale-100">
              <Image src="/logo-vision.svg" alt="Unyta Logo" width={38} height={40} className="object-contain h-auto" quality={100} />
          </div>
          <h2 className="font-cormorant text-[32px] md:text-[40px] uppercase font-semibold text-[#0D0D12]">
            <span className="font-medium">UNYTA</span> in four steps
          </h2>
        </motion.div>

        {/* STEPS GRID */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="relative w-full max-w-[1200px] mx-auto"
        >
          {/* CONNECTING LINE (Desktop) */}
          <motion.div 
            variants={{
              hidden: { scaleX: 0, opacity: 0 },
              visible: { scaleX: 1, opacity: 1, transition: { duration: 1.2, ease: "easeInOut", delay: 0.3 } }
            }}
            className="absolute top-[26px] left-[6%] right-[6%] h-[1px] hidden lg:block origin-left"
            style={{ background: "linear-gradient(90deg, #E8C6C1 0%, #58180E 50%, #E8C6C1 100%)" }}
          />

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 md:gap-y-12 gap-x-4 lg:gap-x-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                variants={{
                  hidden: { y: 40, opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                className="flex flex-col items-center text-center relative z-10"
              >
                {/* ICON BADGE */}
                <div
                  className="size-16 rounded-full bg-gradient-to-br from-[#541409] to-[#3a0d05] flex items-center justify-center mb-6"
                  style={{ boxShadow: "0px -4px 8px 0px #FFFFFFA3 inset, 0px 4px 10px rgba(84, 20, 9, 0.25)" }}
                >
                  {step.icon}
                </div>

                {/* TEXT CONTENT */}
                <h3 className="font-cormorant text-2xl font-semibold text-[#741717] mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="font-sans font-light text-[#22000C] text-base leading-relaxed max-w-[270px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
