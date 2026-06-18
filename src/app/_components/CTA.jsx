"use client";

import { motion } from "motion/react";

export const CTA = ({ onJoinCreator, onJoinBrand }) => {
  return (
    <section className="w-full py-16 lg:h-[412px] lg:py-0 bg-white flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "circInOut" }}
        className="max-w-5xl mx-auto flex flex-col items-center"
      >
        <h2 className="font-cormorant font-semibold text-[36px] md:text-[40px] text-[#22000C] mb-4 leading-tight">
          Ready To Transform Your Collaboration Workflow?
        </h2>
        
        <p className="font-sans font-light text-[#22000C] text-base md:text-[22px] tracking-wider mb-8 max-w-[588px]">
          Join a global community where creators and brands build meaningful partnerships.
        </p>

        <span className="font-sans font-medium text-[#741717] text-xl mb-6 tracking-wide">
          Apply for Early Access
        </span>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button 
            onClick={onJoinCreator}
            className="bg-[#741717] text-white px-10 py-4 rounded-full font-sans text-[15px] tracking-wide hover:bg-[#5a1212] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#741717]/10"
          >
            Join as a Creator
          </button>
          <button 
            onClick={onJoinBrand}
            className="border border-[#741717] text-[#741717] px-10 py-4 rounded-full font-sans text-[15px] tracking-wide hover:bg-[#741717]/5 transition-all hover:scale-105 active:scale-95"
          >
            Join as a Brand
          </button>
        </div>
      </motion.div>
    </section>
  );
};
