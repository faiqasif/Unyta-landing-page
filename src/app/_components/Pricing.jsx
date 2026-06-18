"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export const Pricing = () => {
  const [audience, setAudience] = useState("creators");
  const [cycle, setCycle] = useState("monthly");

  const plans = {
    creators: [
      {
        title: "Free",
        desc: "Get started with basic features",
        price: "0.00",
        suffix: "/ Month",
        features: [
          "Unlimited matches with brands",
          "Map to connect globally",
          "Find nearby creators on the map",
          "Connect and chat with creators",
        ],
        buttonText: "Get Started",
        isAdvanced: false,
      },
      {
        title: "Advanced",
        desc: "Unlock full potential",
        price: cycle === "monthly" ? "5.99" : "59.99",
        suffix: cycle === "monthly" ? "/ Month" : "/ yr",
        features: [
          "Unlimited Matches with Brands",
          "Find Nearby Creators on the Map",
          "Connect and Chat with Creators",
          "Priority Brand Matches",
          "Premium Customer Support",
          "Monthly Featured Profile Boost",
        ],
        buttonText: "Upgrade Now",
        isAdvanced: true,
        showSave: cycle === "annual",
        savePercent: "17%",
      },
    ],
    brands: [
      {
        title: "Standard",
        desc: "Ideal for small brands starting with influencer marketing",
        price: cycle === "monthly" ? "45" : "459",
        suffix: cycle === "monthly" ? "/ mo" : "/ yr",
        features: ["1 campaign per month", "Match with up to 30 creators per campaign"],
        buttonText: "Choose Standard",
        isAdvanced: false,
        showSave: cycle === "annual",
        savePercent: "15%",
      },
      {
        title: "Advanced",
        desc: "For growing brands managing multiple campaigns",
        price: cycle === "monthly" ? "99" : "1,009",
        suffix: cycle === "monthly" ? "/ yr" : "/ yr", // Middle card suffix is /yr in both on ss?
        features: ["3 campaigns per month", "Match with up to 90 creators per campaign", "Priority customer support"],
        buttonText: "Choose Advanced",
        isAdvanced: true,
        showSave: cycle === "annual",
        savePercent: "15%",
      },
      {
        title: "Premium",
        desc: "Best for brands running large-scale or ongoing influencer activations",
        price: cycle === "monthly" ? "189" : "1,928",
        suffix: cycle === "monthly" ? "/ mo" : "/ yr",
        features: [
          "Unlimited campaigns per month",
          "Unlimited creator matches and gifting",
          "Priority customer support",
          "Early access to new content creators",
        ],
        buttonText: "Choose Premium",
        isAdvanced: false,
        showSave: cycle === "annual",
        savePercent: "15%",
      },
    ],
  };

  const currentPlans = plans[audience];

  return (
    <section id="pricing" className="w-full py-24 bg-[#F9F6F6] flex flex-col items-center overflow-hidden">
      {/* HEADER */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-10 px-6"
      >
        <h2 className="font-cormorant text-[36px] md:text-[48px] text-[#0D0D12] mb-3 leading-tight">
          Flexible Plans For Every Stage
        </h2>
        <p className="font-sans font-light text-[#22000C]/70 text-base md:text-lg">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </motion.div>

      {/* TOGGLES CONTAINER */}
      <div className="flex flex-col sm:flex-row gap-6 mb-14">
        <div className="flex bg-[#F9F6F6] p-1.5 rounded-xl border border-stone-100 w-full sm:w-auto overflow-hidden">
          <button
            onClick={() => setAudience("creators")}
            className={`${audience === "creators" ? "bg-[#541409] text-white shadow-sm" : "text-stone-600 hover:text-[#541409]"
              } rounded-lg px-8 py-2.5 text-lg tracking-wide transition-all font-cormorant w-1/2 sm:w-auto whitespace-nowrap`}
          >
            For Creators
          </button>
          <button
            onClick={() => setAudience("brands")}
            className={`${audience === "brands" ? "bg-[#541409] text-white shadow-sm" : "text-stone-600 hover:text-[#541409]"
              } rounded-lg px-8 py-2.5 text-lg tracking-wide transition-all font-cormorant w-1/2 sm:w-auto whitespace-nowrap`}
          >
            For Brands
          </button>
        </div>

        <div className="flex bg-[#F9F6F6] p-1.5 rounded-xl border border-stone-100 w-full sm:w-auto overflow-hidden">
          <button
            onClick={() => setCycle("monthly")}
            className={`${cycle === "monthly" ? "bg-[#541409] text-white shadow-sm" : "text-stone-600 hover:text-[#541409]"
              } rounded-lg px-8 py-2.5 text-lg tracking-wide transition-all font-cormorant w-1/2 sm:w-auto whitespace-nowrap`}
          >
            Monthly
          </button>
          <button
            onClick={() => setCycle("annual")}
            className={`${cycle === "annual" ? "bg-[#541409] text-white shadow-sm" : "text-stone-600 hover:text-[#541409]"
              } rounded-lg px-8 py-2.5 text-lg tracking-wide transition-all font-cormorant w-1/2 sm:w-auto whitespace-nowrap`}
          >
            Annual
          </button>
        </div>
      </div>

      {/* CARDS GRID */}
      <div
        className={`max-w-7xl mx-auto w-full px-6 grid grid-cols-1 gap-12 items-stretch justify-center justify-items-center ${audience === "brands" ? "md:grid-cols-3" : "md:grid-cols-2 max-w-[900px]"
          }`}
      >
        {currentPlans.map((plan, index) => (
          <motion.div
            key={`${audience}-${cycle}-${index}`}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`rounded-[24px] flex flex-col items-center text-center border relative transition-all ${plan.isAdvanced
                ? "bg-[#EBE4E1] border-[#541409] p-8 pt-12"
                : "bg-white border-[#CECECE] p-8 pt-12"
              }`}
            style={audience === "creators" ? { width: "426px", opacity: 1 } : {}}
          >
            {plan.isAdvanced && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#3D1009] text-white px-6 py-2 rounded-full text-[13px] font-sans uppercase tracking-widest">
                Most Popular
              </div>
            )}

            <h3 className="font-cormorant text-[28px] text-[#191D23] mb-1">{plan.title}</h3>
            <p className="font-sans font-medium text-sm leading-relaxed text-[#4A4A58] mb-6 px-2">
              {plan.desc}
            </p>

            <div className={`mb-1 flex items-baseline gap-1 ${plan.showSave ? "mt-2" : "mt-0"}`}>
              <span className="font-cormorant text-[36px] md:text-[42px] font-semibold text-[#541409]">
                €{plan.price}
              </span>
              <span className="text-[15px] text-[#541409] truncate">{plan.suffix}</span>
            </div>

            {plan.showSave && (
              <div className="mb-6 px-3 py-1 rounded-full border border-stone-200 bg-white text-xs text-stone-500 font-sans">
                Save {plan.savePercent}
              </div>
            )}

            <ul className="flex flex-col gap-y-3.5 items-start w-full mb-10 px-2 mt-4">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-start gap-x-3 text-[16px] text-[#541409] font-medium tracking-wide font-sans text-left leading-tight">
                  <svg className="shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#741717" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  {f}
                </li>
              ))}
            </ul>

            <button
              className={`mt-auto w-full py-3.5 rounded-full font-sans text-xl tracking-wide transition-all ${plan.isAdvanced
                  ? "bg-[#741717] text-white hover:bg-[#5a1212] hover:scale-[1.02] active:scale-95"
                  : "border border-[#741717] text-[#741717] hover:bg-[#741717]/5"
                }`}
            >
              {plan.buttonText}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
