"use client";

import { motion } from "motion/react";

const trustItems = [
  {
    label: "Members-only community",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12105 13.2453 4 14.3624 4 15.5C4 16.6376 4.12105 17.7547 4.26781 18.8447Z" stroke="#741717" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9" stroke="#741717" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.125 15.5H12M12.25 15.5C12.25 15.6381 12.1381 15.75 12 15.75C11.8619 15.75 11.75 15.6381 11.75 15.5C11.75 15.3619 11.8619 15.25 12 15.25C12.1381 15.25 12.25 15.3619 12.25 15.5Z" stroke="#741717" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.125 15.5H8M8.25 15.5C8.25 15.6381 8.13807 15.75 8 15.75C7.86193 15.75 7.75 15.6381 7.75 15.5C7.75 15.3619 7.86193 15.25 8 15.25C8.13807 15.25 8.25 15.3619 8.25 15.5Z" stroke="#741717" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.125 15.5H16M16.25 15.5C16.25 15.6381 16.1381 15.75 16 15.75C15.8619 15.75 15.75 15.6381 15.75 15.5C15.75 15.3619 15.8619 15.25 16 15.25C16.1381 15.25 16.25 15.3619 16.25 15.5Z" stroke="#741717" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Trusted & authenticated",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.7088 3.49534C16.8165 2.55382 14.5009 2 12 2C9.4991 2 7.1835 2.55382 5.29116 3.49534C4.36318 3.95706 3.89919 4.18792 3.4496 4.91378C3 5.63965 3 6.34248 3 7.74814V11.2371C3 16.9205 7.54236 20.0804 10.173 21.4338C10.9067 21.8113 11.2735 22 12 22C12.7265 22 13.0933 21.8113 13.8269 21.4338C16.4576 20.0804 21 16.9205 21 11.2371V7.74814C21 6.34249 21 5.63966 20.5504 4.91378C20.1008 4.18791 19.6368 3.95706 18.7088 3.49534Z" stroke="#741717" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 11.5C9 11.5 10.4079 11.7519 11 13.5C11 13.5 12.5 10.5 15 9.5" stroke="#741717" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Exclusive opportunities",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 11V15C4 18.2998 4 19.9497 5.02513 20.9749C6.05025 22 7.70017 22 11 22H13C16.2998 22 17.9497 22 18.9749 20.9749C20 19.9497 20 18.2998 20 15V11" stroke="#741717" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 9C3 8.25231 3 7.87846 3.20096 7.6C3.33261 7.41758 3.52197 7.26609 3.75 7.16077C4.09808 7 4.56538 7 5.5 7H18.5C19.4346 7 19.9019 7 20.25 7.16077C20.478 7.26609 20.6674 7.41758 20.799 7.6C21 7.87846 21 8.25231 21 9C21 9.74769 21 10.1215 20.799 10.4C20.6674 10.5824 20.478 10.7339 20.25 10.8392C19.9019 11 19.4346 11 18.5 11H5.5C4.56538 11 4.09808 11 3.75 10.8392C3.52197 10.7339 3.33261 10.5824 3.20096 10.4C3 10.1215 3 9.74769 3 9Z" stroke="#741717" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M6 3.78571C6 2.79949 6.79949 2 7.78571 2H8.14286C10.2731 2 12 3.7269 12 5.85714V7H9.21429C7.43908 7 6 5.56091 6 3.78571Z" stroke="#741717" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M18 3.78571C18 2.79949 17.2005 2 16.2143 2H15.8571C13.7269 2 12 3.7269 12 5.85714V7H14.7857C16.5609 7 18 5.56091 18 3.78571Z" stroke="#741717" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 11V22" stroke="#741717" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export const CTA = ({ onJoinCreator, onJoinBrand }) => {
  return (
    <>
      {/* MOBILE VIEW */}
      <section className="md:hidden w-full py-7 bg-white flex flex-col items-center text-center px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "circInOut" }}
          className="w-full max-w-md flex flex-col items-center"
        >
          <h2 className="font-cormorant font-semibold text-2xl uppercase text-[#741717] mb-2 leading-tight">
            Join the Waitlist
          </h2>

          <p className="font-sans font-light text-[#22000C] text-lg mb-5">
            Be the first to experience Unyta
          </p>

          <div className="flex flex-row gap-3 items-stretch w-full mb-8">
            <button
              type="button"
              onClick={onJoinCreator}
              className="flex-1 bg-[#741717] text-white px-3 py-3.5 rounded-full font-sans text-[13px] tracking-wide transition-all active:scale-[0.98] shadow-lg shadow-[#741717]/10"
            >
              Join as a Creator
            </button>
            <button
              type="button"
              onClick={onJoinBrand}
              className="flex-1 border border-[#741717] text-[#741717] bg-white px-3 py-3.5 rounded-full font-sans text-[13px] tracking-wide transition-all active:scale-[0.98]"
            >
              Join as a Brand
            </button>
          </div>

          <div className="flex items-start justify-between w-full gap-2">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-1 flex-1">
                <div className="flex h-8 w-8 items-center justify-center">
                  {item.icon}
                </div>
                <span className="font-sans text-xs text-start leading-tight text-[#741717] max-w-[100px]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* DESKTOP VIEW — unchanged */}
      <section className="hidden md:flex w-full py-16 lg:h-[412px] lg:py-0 bg-white flex-col items-center justify-center text-center px-6">
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
              type="button"
              onClick={onJoinCreator}
              className="bg-[#741717] text-white px-10 py-4 rounded-full font-sans text-[15px] tracking-wide hover:bg-[#5a1212] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#741717]/10"
            >
              Join as a Creator
            </button>
            <button
              type="button"
              onClick={onJoinBrand}
              className="border border-[#741717] text-[#741717] px-10 py-4 rounded-full font-sans text-[15px] tracking-wide hover:bg-[#741717]/5 transition-all hover:scale-105 active:scale-95"
            >
              Join as a Brand
            </button>
          </div>
        </motion.div>
      </section>
    </>
  );
};
