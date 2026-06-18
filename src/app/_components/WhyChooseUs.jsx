"use client";

import { motion } from "motion/react";

export const WhyChooseUs = () => {
  const reasonFeatures = [
    {
      title: "Audience Authenticity Checks",
      desc: "We verify engagement rates and audience quality to ensure genuine partnerships.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.7088 3.49534C16.8165 2.55382 14.5009 2 12 2C9.4991 2 7.1835 2.55382 5.29116 3.49534C4.36318 3.95706 3.89919 4.18792 3.4496 4.91378C3 5.63965 3 6.34248 3 7.74814V11.2371C3 16.9205 7.54236 20.0804 10.173 21.4338C10.9067 21.8113 11.2735 22 12 22C12.7265 22 13.0933 21.8113 13.8269 21.4338C16.4576 20.0804 21 16.9205 21 11.2371V7.74814C21 6.34249 21 5.63966 20.5504 4.91378C20.1008 4.18791 19.6368 3.95706 18.7088 3.49534Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

      )
    },
    {
      title: "Global Market Reach",
      desc: "Connect with creators and brands all over the world.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_4488_1109)">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" />
            <path d="M8 12C8 18 12 22 12 22C12 22 16 18 16 12C16 6 12 2 12 2C12 2 8 6 8 12Z" stroke="white" strokeWidth="2" />
            <path d="M21 15H3" stroke="white" strokeWidth="2" />
            <path d="M21 9H3" stroke="white" strokeWidth="2" />
          </g>
          <defs>
            <clipPath id="clip0_4488_1109">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>

      )
    },
    {
      title: "Collaboration & Safety Policies",
      desc: "Our community guidelines ensure reliability and accountability for all members.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" />
          <path d="M12 8V12L14 14" stroke="white" strokeWidth="2" />
        </svg>

      )
    },
    {
      title: "Dedicated Support & Consulting",
      desc: "Get personalized help with premium support options and add-on consulting services.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 10.8045C17 10.4588 17 10.286 17.052 10.132C17.2032 9.68444 17.6018 9.51076 18.0011 9.32888C18.45 9.12442 18.6744 9.02219 18.8968 9.0042C19.1493 8.98378 19.4022 9.03818 19.618 9.15929C19.9041 9.31984 20.1036 9.62493 20.3079 9.87302C21.2513 11.0188 21.7229 11.5918 21.8955 12.2236C22.0348 12.7334 22.0348 13.2666 21.8955 13.7764C21.6438 14.6979 20.8485 15.4704 20.2598 16.1854C19.9587 16.5511 19.8081 16.734 19.618 16.8407C19.4022 16.9618 19.1493 17.0162 18.8968 16.9958C18.6744 16.9778 18.45 16.8756 18.0011 16.6711C17.6018 16.4892 17.2032 16.3156 17.052 15.868C17 15.714 17 15.5412 17 15.1955V10.8045Z" stroke="white" strokeWidth="2" />
          <path d="M7 10.8046C7 10.3694 6.98778 9.97821 6.63591 9.6722C6.50793 9.5609 6.33825 9.48361 5.99891 9.32905C5.55001 9.12458 5.32556 9.02235 5.10316 9.00436C4.43591 8.9504 4.07692 9.40581 3.69213 9.87318C2.74875 11.019 2.27706 11.5919 2.10446 12.2237C1.96518 12.7336 1.96518 13.2668 2.10446 13.7766C2.3562 14.6981 3.15152 15.4705 3.74021 16.1856C4.11129 16.6363 4.46577 17.0475 5.10316 16.996C5.32556 16.978 5.55001 16.8757 5.99891 16.6713C6.33825 16.5167 6.50793 16.4394 6.63591 16.3281C6.98778 16.0221 7 15.631 7 15.1957V10.8046Z" stroke="white" strokeWidth="2" />
          <path d="M5 9C5 5.68629 8.13401 3 12 3C15.866 3 19 5.68629 19 9" stroke="white" strokeWidth="2" />
          <path d="M19 17V17.8C19 19.5673 17.2091 21 15 21H13" stroke="white" strokeWidth="2" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-[#24000C] flex flex-col items-center justify-center py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center">

        {/* HEADER */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-cormorant text-[36px] md:text-[40px] uppercase font-medium text-white mb-2">
            WHY CHOOSE US?
          </h2>
          <p className="font-sans font-light text-white/70 text-base md:text-lg">
            Trust and transparency are at the core of Unyta.
          </p>
        </motion.div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-6 w-full max-w-5xl">
          {reasonFeatures.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="flex items-start gap-x-6"
            >
              <div className="w-[60px] h-[60px] shrink-0 rounded-[16px] bg-[#5C3028A3] border border-white/10 flex items-center justify-center">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="font-cormorant text-[20px] md:text-2xl font-medium text-white mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="font-sans font-light text-[#E8E8E8] text-sm md:text-[15px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
