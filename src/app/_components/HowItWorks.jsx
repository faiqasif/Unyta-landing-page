"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Icons } from "./icons";

const creatorContent = [
  {
    title: <>Build your profile & media kit</>,
    desc: "Showcase your style, audience insights, and past collaborations to attract the right brands.",
    icon: Icons.profile,
  },
  {
    title: <>Swipe to match with aligned brands & chat</>,
    desc: "Discover brands seeking authentic partnerships tailored to your niche and content style.",
    icon: Icons.swipe,
  },
  {
    title: (
      <>
        Track Collaborations
        <br />
        and Earn Badges
      </>
    ),
    desc: "Complete collaborations, earn badges, and unlock exclusive rewards.",
    icon: Icons.track,
  },
  {
    title: (
      <>
        Discover Nearby
        <br />
        Creators and Brands
      </>
    ),
    desc: "Use the interactive map to find nearby creators and opportunities in your city.",
    icon: Icons.discover,
  },
];

const brandContent = [
  {
    title: (
      <>
        Match, Connect, and
        <br />
        Chat with Creators
      </>
    ),
    desc: "Discover verified creators who align with your brand values and campaign objectives.",
    icon: Icons.match,
  },
  {
    title: (
      <>
        Launch Authentic
        <br />
        Collaborations
      </>
    ),
    desc: "Create campaigns that drive real engagement through genuine creator partnerships.",
    icon: Icons.launch,
  },
  {
    title: (
      <>
        Track Results and
        <br />
        Reward Top Creators
      </>
    ),
    desc: "Monitor collaborations in real time and review creators from your centralized dashboard.",
    icon: Icons.results,
  },
  {
    title: (
      <>
        Manage Your Creator
        <br />
        Network Effortlessly
      </>
    ),
    desc: "Track collaboration history and build long-term partnerships by tailoring your Preferred Creators list.",
    icon: Icons.manage,
  },
];

const mobileSteps = [
  {
    step: "STEP 1",
    title: "Create Your Profile",
    desc: "Build your profile and showcase your style, audience, and goals.",
    bullets: ["Profile & media kit", "Audience insights"],
    icon: Icons.profile,
  },
  {
    step: "STEP 2",
    title: "Discover Matches",
    desc: "Find relevant creators or brands that align with your goals.",
    bullets: ["Swipe-to-match", "Curated recommendations"],
    icon: Icons.match,
  },
  {
    step: "STEP 3",
    title: "Connect & Collaborate",
    desc: "Chat, confirm, and manage collaborations all in one place.",
    bullets: ["In-app chat", "Campaign management"],
    icon: Icons.featureChat,
  },
  {
    step: "STEP 4",
    title: "Track & Grow",
    desc: "Track performance, earn rewards, and grow lasting partnerships.",
    bullets: ["Rewards & badges", "Expert guidance & strategy"],
    icon: Icons.results,
  },
];

const BulletCheckIcon = () => (
  <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#741717]">
    <svg width="8" height="6" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.5 4L4 6.5L8.5 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

export const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState("creators");
  const currentContent = activeTab === "creators" ? creatorContent : brandContent;

  return (
    <>
      {/* MOBILE VIEW */}
      <section
        id="how-it-works"
        className="md:hidden flex flex-col items-center bg-white pt-10 pb-8 px-4 overflow-hidden scroll-mt-20"
      >
        <motion.h2
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-cormorant text-[28px] uppercase text-[#741717] mb-3 font-semibold text-center tracking-wide"
        >
          How It Works
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-[#22000C] text-[14px] leading-relaxed font-sans font-light text-center max-w-[320px] mb-8"
        >
          Whether you&apos;re a creator or a brand, Unyta makes collaboration effortless and rewarding.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-2 gap-3 w-full max-w-[400px]"
        >
          {mobileSteps.map((item) => (
            <motion.div
              key={item.step}
              variants={{
                hidden: { y: 16, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              className="bg-[#F9F6F6] rounded-[14px] px-3 py-4 flex flex-col items-center text-center gap-2.5"
            >
              <div className="flex flex-col items-center gap-1.5 w-full">
                <span className="font-sans text-[10px] font-medium tracking-[0.12em] uppercase border-b border-[#D4B7B7] pb-2 mb-1 text-[#741717]">
                  {item.step}
                </span>
              </div>

              <div
                className="w-10 h-10 rounded-[10px] bg-[#541409] flex items-center justify-center shrink-0"
                style={{
                  boxShadow:
                    "0px -3px 6px 0px #FFFFFFA3 inset, 0px 3px 8px rgba(84, 20, 9, 0.2)",
                }}
              >
                <div className="scale-90">{item.icon}</div>
              </div>

              <h3 className="font-cormorant font-semibold text-[#741717] leading-tight px-1">
                {item.title}
              </h3>

              <p className="font-sans font-light text-[#22000C]/80 text-[11px] leading-snug px-0.5">
                {item.desc}
              </p>

              <ul className="flex flex-col gap-1.5 w-full mt-auto pt-1 items-start px-1">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-1.5">
                    <BulletCheckIcon />
                    <span className="font-sans text-[10px] font-medium text-[#741717] leading-tight text-left">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* DESKTOP VIEW — unchanged */}
      <section className="hidden md:flex flex-col items-center bg-white pt-7 sm:pt-15 pb-5 px-6 md:px-12 overflow-hidden scroll-mt-24">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-cormorant text-2xl sm:text-[36px] md:text-[40px] uppercase text-[#0D0D12] mb-2 font-semibold text-center"
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

        <motion.div
          key={activeTab}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-[1200px] mx-auto w-full"
        >
          {currentContent.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 20, opacity: 0, scale: 0.95 },
                visible: {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              className="bg-[#F9F6F6] rounded-[16px] p-6 flex flex-col items-start gap-y-4 shadow-sm"
            >
              <div
                className="w-[52px] h-[52px] rounded-[14px] bg-gradient-to-br from-[#541409] to-[#3a0d05] flex items-center justify-center"
                style={{
                  boxShadow:
                    "0px -4px 8px 0px #FFFFFFA3 inset, 0px 4px 10px rgba(84, 20, 9, 0.25)",
                }}
              >
                {item.icon}
              </div>
              <div className="flex flex-col gap-y-3">
                <h3 className="font-cormorant text-2xl font-semibold text-[#22000C] leading-snug">
                  {item.title}
                </h3>
                <p
                  className={`font-sans font-light text-[#22000C] tracking-wide ${index === 3 ? "text-sm" : "text-[15px]"}`}
                >
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
};
