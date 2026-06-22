"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

/** Shared feature list — same for every tab. */
export const platformFeatures = [
  {
    icon: "/new-features/tab-1/1.svg",
    title: "Swipe-to-Match",
    description: "Fast, intuitive matching between brands and creators.",
  },
  {
    icon: "/new-features/tab-1/2.svg",
    title: "Smart Dashboards",
    description: "Campaign tracking, insights, and collaboration tools.",
  },
  {
    icon: "/new-features/tab-1/3.svg",
    title: "Seamless Chat & Pitches",
    description: "Share briefs, content, and ideas directly in-app.",
  },
  {
    icon: "/new-features/tab-1/4.svg",
    title: "Membership-based Community",
    description: "High-quality creators and trusted brands only.",
  },
  {
    icon: "/new-features/tab-1/5.svg",
    title: "Gamification & Rewards",
    description: "Earn rewards, badges and star reviews.",
  },
  {
    icon: "/new-features/tab-1/6.svg",
    title: "Interactive Map",
    description: "Find nearby experiences and global connections.",
  },
  {
    icon: "/new-features/tab-1/7.svg",
    title: "Strategic Support",
    description: "Book a personalised consulting from marketing experts.",
  },
];

/** Tab configuration — only the preview image changes per tab. */
export const platformFeatureTabs = [
  { id: "home", label: "Home", image: "/plat.png" },
  { id: "chat", label: "Chat", image: "/plat-2.png" },
  { id: "match", label: "Match", image: "/plat-3.png" },
  { id: "map", label: "Map", image: "/plat-4.png" },
  { id: "my-collabs", label: "My Collabs", image: "/plat-5.png" },
  { id: "strategy", label: "Strategy", image: "/plat-6.png" },
];

export const HomePlatformFeatures = () => {
  const [activeTabId, setActiveTabId] = useState(platformFeatureTabs[0].id);
  const activeTab =
    platformFeatureTabs.find((tab) => tab.id === activeTabId) ??
    platformFeatureTabs[0];

  return (
    <section
      id="features"
      className="w-full py-16 md:py-24 bg-white flex flex-col items-center overflow-hidden scroll-mt-24 antialiased"
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center px-6 mb-8 md:mb-10"
      >
        <h2 className="font-cormorant text-[36px] md:text-[40px] uppercase font-medium text-[#0D0D12] mb-4">
          Platform Features
        </h2>
        <p className="font-light tracking-normal text-[#22000C] text-base md:text-lg max-w-2xl mx-auto">
          Everything you need to discover, connect, and collaborate — all in
          one place.
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="w-full max-w-[1200px] flex flex-col mx-auto px-4 md:px-6 mb-8 md:mb-12"
      >
        <div className="flex bg-[#F9F6F6] rounded-xl p-1.5 self-center w-fit overflow-x-auto scrollbar-hide">
          {platformFeatureTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTabId(tab.id)}
              className={`shrink-0 rounded-lg px-4 sm:px-6 font-medium text-lg py-2.5 tracking-wide transition-all font-cormorant whitespace-nowrap ${
                activeTabId === tab.id
                  ? "bg-[#541409] text-white shadow-sm"
                  : "text-stone-600 hover:text-[#541409]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-[580px_1fr] gap-8 lg:gap-10 items-start">
        <motion.div
          key={`image-${activeTabId}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full"
        >
          <div className="relative w-full max-w-[580px]">
            <Image
              src={activeTab.image}
              alt={`${activeTab.label} platform preview`}
              width={320}
              height={640}
              quality={100}
              sizes="(max-width: 768px) 80vw, 320px"
              className="w-full h-auto"
              priority={activeTabId === "home"}
            />
          </div>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="flex flex-col gap-3 sm:gap-4"
        >
          {platformFeatures.map((feature, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { y: 16, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.4, ease: "easeOut" },
                },
              }}
              className="flex items-start gap-4 bg-[#F9F6F6] rounded-[16px] p-4 h-[87px]"
            >
              <Image src={feature.icon} alt={feature.title} width={52} height={52} />
              <div className="flex gap-1 flex-col min-w-0">
                <h3 className="font-cormorant text-xl font-semibold text-[#541409] leading-snug">
                  {feature.title}
                </h3>
                <p className="font-sans font-light text-[#22000C]/80 text-sm tracking-wide leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};
