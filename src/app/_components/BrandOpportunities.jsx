"use client";

import Image from "next/image";
import { motion } from "motion/react";

export const BrandOpportunities = () => {
  const features = [
    {
      text: "Access vetted, high-quality creators",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.8332 5.83333C10.8332 7.67428 9.34075 9.16667 7.49984 9.16667C5.65889 9.16667 4.1665 7.67428 4.1665 5.83333C4.1665 3.99238 5.65889 2.5 7.49984 2.5C9.34075 2.5 10.8332 3.99238 10.8332 5.83333Z" stroke="#141414" strokeWidth="1.5" />
          <path d="M12.5 9.16667C14.3409 9.16667 15.8333 7.67428 15.8333 5.83333C15.8333 3.99238 14.3409 2.5 12.5 2.5" stroke="#141414" strokeWidth="1.5" />
          <path d="M9.1665 11.6665H5.83317C3.53199 11.6665 1.6665 13.532 1.6665 15.8332C1.6665 16.7537 2.4127 17.4998 3.33317 17.4998H11.6665C12.587 17.4998 13.3332 16.7537 13.3332 15.8332C13.3332 13.532 11.4677 11.6665 9.1665 11.6665Z" stroke="#141414" strokeWidth="1.5" />
          <path d="M14.1665 11.6665C16.4677 11.6665 18.3332 13.532 18.3332 15.8332C18.3332 16.7537 17.587 17.4998 16.6665 17.4998H15.4165" stroke="#141414" strokeWidth="1.5" />
        </svg>

      )
    },
    {
      text: "Track campaign progress in real-time",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.5 17.5H8.33333C5.58347 17.5 4.20854 17.5 3.35427 16.6457C2.5 15.7914 2.5 14.4165 2.5 11.6667V2.5" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M10.8335 8.3335V17.5002" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M15 10.8335V17.5002" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M6.6665 10.8335V16.6668" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M17.5 6.65561C15.9667 6.65561 14.3268 6.8686 13.2309 5.41105C11.9832 3.75165 9.6835 3.75165 8.43575 5.41105C7.33985 6.8686 5.70002 6.65561 4.16667 6.65561H2.5" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" />
        </svg>

      )
    },
    {
      text: "Centralized messaging and collaboration",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.25 7.0835H13.75M6.25 10.4168H10.8333" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.6665 8.75016C1.6665 8.10784 1.67772 7.48082 1.69908 6.87541C1.76885 4.89752 1.80375 3.90857 2.60823 3.09804C3.41271 2.2875 4.42959 2.244 6.46334 2.15699C7.57915 2.10925 8.76725 2.0835 9.99984 2.0835C11.2324 2.0835 12.4205 2.10925 13.5363 2.15699C15.5701 2.244 16.587 2.2875 17.3914 3.09804C18.1959 3.90857 18.2308 4.89752 18.3006 6.87541C18.3219 7.48082 18.3332 8.10784 18.3332 8.75016C18.3332 9.3925 18.3219 10.0195 18.3006 10.6249C18.2308 12.6028 18.1959 13.5917 17.3914 14.4023C16.587 15.2128 15.5701 15.2563 13.5363 15.3433C12.9247 15.3695 12.2913 15.3891 11.6409 15.4014C11.0233 15.4131 10.7145 15.419 10.4432 15.5223C10.1718 15.6257 9.94359 15.8214 9.48692 16.2129L7.6707 17.7703C7.56045 17.8648 7.42 17.9168 7.27476 17.9168C6.93883 17.9168 6.6665 17.6445 6.6665 17.3086V15.3517C6.59852 15.349 6.5308 15.3462 6.46333 15.3433C4.42958 15.2563 3.41271 15.2128 2.60823 14.4022C1.80375 13.5917 1.76885 12.6028 1.69908 10.6249C1.67772 10.0195 1.6665 9.3925 1.6665 8.75016Z" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

      )
    },
    {
      text: "Drive authentic engagement and reach",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_4036_8216)">
            <path d="M18.3332 9.99984C18.3332 14.6022 14.6022 18.3332 9.99984 18.3332C5.39746 18.3332 1.6665 14.6022 1.6665 9.99984C1.6665 5.39746 5.39746 1.6665 9.99984 1.6665C14.6022 1.6665 18.3332 5.39746 18.3332 9.99984Z" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.5 11.6667V10C12.5 8.8215 12.5 8.23223 12.1339 7.86612C11.7678 7.5 11.1785 7.5 10 7.5H8.33333M11.6667 8.33333L7.5 12.5" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_4036_8216">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>

      )
    }
  ];

  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT: IMAGE CARD (Reversed order) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "circOut" }}
          className="bg-[#F5F3F2] rounded-[16px] relative overflow-hidden flex flex-col items-center pt-10 order-2 lg:order-1"
          style={{ width: "570px", height: "445px", opacity: 1 }}
        >
          <div
            className="relative w-full flex justify-center transition-all duration-500"
            style={{ transform: "translateY(-70px)" }}
          >
            <Image
              src="/screen8.png"
              alt="Brand Strategy Mockup"
              width={580}
              height={1160}
              quality={100}
              className="object-top drop-shadow-2xl transition-all duration-500"
              style={{ width: "400px", minWidth: "400px", height: "auto" }}
              priority
            />
          </div>
        </motion.div>

        {/* RIGHT: CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="flex flex-col items-start order-1 lg:order-2"
        >
          {/* TAG (Using your tweaked #EADCDC style) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 }
            }}
            className="px-4 py-1.5 rounded-full bg-[#EADCDC] p-2 text-[#741717] text-xs font-sans font-medium mb-5"
          >
            For Brands
          </motion.div>

          {/* TITLE (Using your tweaked 40px medium style) */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="font-cormorant text-[36px] md:text-[40px] font-medium text-[#0D0D12] leading-[1.2] mb-5 max-w-xl"
          >
            Discover Creators Who Deliver Results
          </motion.h2>

          {/* DESC (Using your tweaked mb-5 style) */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-[#22000C] font-sans font-light text-[17px] md:text-lg leading-relaxed mb-5"
          >
            Launch campaigns with trusted creators. Access insights, streamline communication, and earn authentic reviews.
          </motion.p>

          {/* FEATURE PILLS (Using your tweaked border and padding) */}
          <div className="flex flex-col gap-y-4 mb-8">
            {features.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0, transition: { delay: index * 0.1 } }
                }}
                className="flex items-center w-fit gap-x-2 pl-3 pr-4 py-2.25 rounded-full border border-[#E9E6E7] text-[#22000C] font-sans font-medium text-sm hover:bg-[#F9F6F6] transition-colors group cursor-default"
              >
                <div className="text-[#22000C] group-hover:text-[#741717] transition-colors shrink-0">
                  {item.icon}
                </div>
                {item.text}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1 }
            }}
            className="flex flex-col items-start gap-y-6"
          >
            <p className="text-[#741717] text-lg">
              Apply for Early Access
            </p>
            <button className="h-14 px-10 rounded-full bg-[#741717] text-white font-sans text-base tracking-wide shadow-lg hover:bg-[#5a1212] transition-all hover:scale-105 active:scale-95">
              Join as a Brand
            </button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
