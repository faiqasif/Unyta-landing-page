"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Icons } from "./icons";

export const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState("creators");

  const creatorContent = [
    {
      title: <>Build a Standout<br/>Profile and Media Kit</>,
      desc: "Showcase your style, audience insights, and past collaborations to attract the right brands.",
      icon: Icons.profile
    },
    {
      title: <>Swipe to Match<br/>with Brands</>,
      desc: "Discover brands seeking authentic partnerships tailored to your niche and content style.",
      icon: Icons.swipe
    },
    {
      title: <>Track Collaborations<br/>and Earn Badges</>,
      desc: "Complete collaborations, earn badges, and unlock exclusive rewards.",
      icon: Icons.track
    },
    {
      title: <>Discover Nearby<br/>Creators and Brands</>,
      desc: "Use the interactive map to find nearby creators and opportunities in your city.",
      icon: Icons.discover
    }
  ];

  const brandContent = [
    {
      title: <>Match, Connect, and<br/>Chat with Creators</>,
      desc: "Discover verified creators who align with your brand values and campaign objectives.",
      icon: Icons.match
    },
    {
      title: <>Launch Authentic<br/>Collaborations</>,
      desc: "Create campaigns that drive real engagement through genuine creator partnerships.",
      icon: Icons.launch
    },
    {
      title: <>Track Results and<br/>Reward Top Creators</>,
      desc: "Monitor collaborations in real time and review creators from your centralized dashboard.",
      icon: Icons.results
    },
    {
      title: <>Manage Your Creator<br/>Network Effortlessly</>,
      desc: "Track collaboration history and build long-term partnerships by tailoring your Preferred Creators list.",
      icon: Icons.manage
    }
  ];

  const currentContent = activeTab === "creators" ? creatorContent : brandContent;

  return (
    <section id="how-it-works" className="flex flex-col items-center bg-white py-15 px-6 md:px-12 overflow-hidden">
      <motion.h2 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-cormorant text-[36px] md:text-[40px] uppercase text-[#0D0D12] mb-2 font-semibold text-center"
      >
        How It Works
      </motion.h2>
      <motion.p 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="text-[#22000C] text-base md:text-lg tracking-wide font-sans font-light text-center max-w-3xl mb-8"
      >
        Whether you are a creator or a brand, Unyta makes collaboration effortless and rewarding.
      </motion.p>

      {/* TOGGLE */}
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="flex bg-[#F9F6F6] rounded-xl p-1.5 mb-8 border border-stone-100 max-w-full w-full sm:w-auto overflow-hidden"
      >
        <button 
          onClick={() => setActiveTab("creators")}
          className={`${activeTab === "creators" ? "bg-[#541409] text-white shadow-sm" : "text-stone-600 hover:text-[#541409]"} rounded-lg px-2 sm:px-8 py-2.5 text-[15px] sm:text-lg tracking-wide transition-all font-cormorant w-1/2 sm:w-auto whitespace-nowrap`}
        >
          For Creators
        </button>
        <button 
          onClick={() => setActiveTab("brands")}
          className={`${activeTab === "brands" ? "bg-[#541409] text-white shadow-sm" : "text-stone-600 hover:text-[#541409]"} rounded-lg px-2 sm:px-8 py-2.5 text-[15px] sm:text-lg tracking-wide transition-all font-cormorant w-1/2 sm:w-auto whitespace-nowrap`}
        >
          For Brands
        </button>
      </motion.div>

      {/* CARDS GRID */}
      <motion.div 
        key={activeTab} // Triggers elegant stagger re-animation on tab switch
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } }
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-[1200px] mx-auto w-full"
      >
        {currentContent.map((item, index) => (
          <motion.div 
            key={index} 
            variants={{
              hidden: { y: 20, opacity: 0, scale: 0.95 },
              visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
            }}
            className="bg-[#F9F6F6] rounded-[16px] p-6 flex flex-col items-start gap-y-4 shadow-sm"
          >
            <div
              className="w-[52px] h-[52px] rounded-[14px] bg-gradient-to-br from-[#541409] to-[#3a0d05] flex items-center justify-center"
              style={{ boxShadow: "0px -4px 8px 0px #FFFFFFA3 inset, 0px 4px 10px rgba(84, 20, 9, 0.25)" }}
            >
              {item.icon}
            </div>
            <div className="flex flex-col gap-y-3">
              <h3 className="font-cormorant text-2xl font-semibold text-[#22000C] leading-snug">
                {item.title}
              </h3>
              <p className={`font-sans font-light text-[#22000C] tracking-wide ${index === 3 ? "text-sm" : "text-[15px]"}`}>
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <Link
        href="/#features"
        className="mt-10 inline-flex rounded-full bg-[#541409] px-8 py-4 font-light text-[15px] tracking-wide text-white transition-all hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
      >
        See All Features
      </Link>
    </section>
  );
};
