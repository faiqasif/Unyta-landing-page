"use client";

import Image from "next/image";
import { motion } from "motion/react";

const creatorFeatures = [
  {
    text: "Showcase your unique style and media kit",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5813 2.9165H9.41934C8.82384 2.9165 8.52609 2.9165 8.25907 3.00984C8.096 3.06683 7.94278 3.14883 7.80491 3.2529C7.57912 3.4233 7.41397 3.67104 7.08366 4.1665C6.91449 4.42027 6.66513 4.79431 6.56573 4.89876C6.31946 5.15756 5.99653 5.33039 5.64458 5.39175C5.50254 5.4165 5.35005 5.4165 5.04507 5.4165C4.22833 5.4165 3.81998 5.4165 3.48607 5.51102C2.65079 5.74747 1.99796 6.4003 1.76151 7.23558C1.66699 7.56948 1.66699 7.97785 1.66699 8.79459V12.0832C1.66699 14.4402 1.66699 15.6187 2.39923 16.3509C3.13146 17.0832 4.30998 17.0832 6.66699 17.0832H13.3337C15.6907 17.0832 16.8692 17.0832 17.6014 16.3509C18.3337 15.6187 18.3337 14.4402 18.3337 12.0832V8.79459C18.3337 7.97785 18.3337 7.56948 18.2392 7.23558C18.0027 6.4003 17.3498 5.74747 16.5146 5.51102C16.1807 5.4165 15.7723 5.4165 14.9556 5.4165C14.6506 5.4165 14.4981 5.4165 14.3561 5.39175C14.0041 5.33039 13.6812 5.15756 13.4349 4.89876C13.3355 4.7943 13.0862 4.42026 12.917 4.1665C12.5867 3.67104 12.4215 3.4233 12.1958 3.2529C12.0578 3.14883 11.9047 3.06683 11.7416 3.00984C11.4746 2.9165 11.1768 2.9165 10.5813 2.9165Z" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.3337 10.8333C13.3337 12.6742 11.8413 14.1667 10.0003 14.1667C8.15938 14.1667 6.66699 12.6742 6.66699 10.8333C6.66699 8.99242 8.15938 7.5 10.0003 7.5C11.8413 7.5 13.3337 8.99242 13.3337 10.8333Z" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.8335 7.9165V7.92484" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    text: "Track collaborations and brand reviews",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_creator_star)">
          <path d="M11.4395 2.86999L12.906 5.82724C13.106 6.23889 13.6393 6.63375 14.0893 6.70936L16.7473 7.15463C18.4471 7.44028 18.8471 8.68367 17.6222 9.91025L15.5558 11.9938C15.2058 12.3466 15.0142 13.0271 15.1224 13.5144L15.7141 16.0936C16.1807 18.1351 15.1058 18.9248 13.3143 17.8578L10.8229 16.3708C10.373 16.102 9.63142 16.102 9.17309 16.3708L6.68173 17.8578C4.89859 18.9248 3.81538 18.1267 4.28199 16.0936L4.87359 13.5144C4.98191 13.0271 4.79027 12.3466 4.4403 11.9938L2.37387 9.91025C1.15734 8.68367 1.54896 7.44028 3.24877 7.15463L5.90681 6.70936C6.34843 6.63375 6.8817 6.23889 7.08168 5.82724L8.54817 2.86999C9.34809 1.26534 10.6479 1.26534 11.4395 2.86999Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_creator_star">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    text: "Earn badges and unlock exclusive rewards",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.724 4.34373C9.839 4.10807 10.1613 4.10808 10.2763 4.34373L10.9542 5.73334C10.9992 5.82557 11.0837 5.88977 11.1817 5.90605L12.6553 6.15121C12.9051 6.19276 13.0047 6.51247 12.826 6.69952L11.771 7.80447C11.7012 7.87767 11.6689 7.98132 11.6843 8.08345L11.9168 9.62552C11.9562 9.88669 11.6956 10.0844 11.47 9.96436L10.1408 9.25711C10.0525 9.21002 9.94783 9.21002 9.8595 9.25711L8.53033 9.96436C8.30478 10.0844 8.04409 9.88669 8.08346 9.62552L8.316 8.08345C8.3314 7.98132 8.29918 7.87767 8.22929 7.80447L7.1743 6.69952C6.9957 6.51247 7.09523 6.19276 7.345 6.15121L8.81866 5.90605C8.91658 5.88977 9.00108 5.82557 9.04608 5.73334L9.724 4.34373Z" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.8332 7.49984C15.8332 10.7215 13.2215 13.3332 9.99984 13.3332C6.77818 13.3332 4.1665 10.7215 4.1665 7.49984C4.1665 4.27818 6.77818 1.6665 9.99984 1.6665C13.2215 1.6665 15.8332 4.27818 15.8332 7.49984Z" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.8335 13.6185L12.1888 17.2093C12.4619 17.9328 12.5985 18.2945 12.836 18.3332C13.0741 18.298 13.3657 17.9002 13.6508 17.1808C13.855 16.6658 13.957 16.4083 14.1672 16.2694C14.2317 16.2268 14.3022 16.1932 14.3768 16.1694C14.6198 16.0922 14.8993 16.1678 15.4582 16.3188C16.0559 16.4804 16.4711 16.4353 16.635 16.3188C16.6832 16.2846 16.635 16.3163 16.635 16.3163C16.7315 16.1451 16.6012 15.8781 16.3408 15.3441L14.5469 11.6665" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.16683 13.6183L7.8115 17.2084C7.53841 17.9318 7.26826 18.2945 7.03076 18.3332C6.79264 18.298 6.6501 17.9384 6.36501 17.2192C6.16089 16.7043 6.04329 16.4076 5.83306 16.2687C5.76861 16.2261 5.69804 16.1925 5.62352 16.1688C5.38048 16.0915 5.10101 16.1671 4.54206 16.3182C3.9444 16.4797 3.52925 16.432 3.36529 16.3155C3.26881 16.1444 3.39905 15.8774 3.65952 15.3435L5.45339 11.6665" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    text: "Match with brands that fit your niche",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.3332 5.62516H16.0091C15.5082 5.62516 15.2577 5.62516 15.0215 5.55365C14.7853 5.48214 14.5769 5.3432 14.1601 5.06533C13.5349 4.64852 12.8217 4.17304 12.4673 4.06576C12.1131 3.9585 11.7373 3.9585 10.9859 3.9585C9.96409 3.9585 9.30542 3.9585 8.846 4.1488C8.38659 4.3391 8.0253 4.70039 7.30273 5.42296L6.66683 6.05886C6.50399 6.2217 6.42256 6.30313 6.3723 6.38351C6.18596 6.6815 6.20661 7.06437 6.42391 7.34059C6.48254 7.4151 6.57225 7.4873 6.75165 7.63168C7.4148 8.16536 8.37084 8.1121 8.97134 7.50801L9.99984 6.47338H10.8332L15.8332 11.5031C16.2934 11.9661 16.2934 12.7167 15.8332 13.1797C15.3729 13.6427 14.6268 13.6427 14.1665 13.1797L13.7498 12.7606M13.7498 12.7606L11.2498 10.2457M13.7498 12.7606C14.2101 13.2236 14.2101 13.9742 13.7498 14.4371C13.2896 14.9001 12.5434 14.9001 12.0832 14.4371L11.2498 13.5989M11.2498 13.5989C11.7101 14.0618 11.7101 14.8125 11.2498 15.2755C10.7896 15.7384 10.0434 15.7384 9.58317 15.2755L8.33317 14.018M11.2498 13.5989L9.58317 11.9322M8.33317 14.018L7.9165 13.5989M8.33317 14.018C8.79342 14.481 8.79342 15.2316 8.33317 15.6946C7.87294 16.1576 7.12675 16.1576 6.6665 15.6946L4.31348 13.2926C3.82996 12.799 3.5882 12.5522 3.27846 12.422C2.96872 12.2918 2.62324 12.2918 1.93229 12.2918H1.6665" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.3333 12.2915H16.25" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.08317 5.625H1.6665" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const brandFeatures = [
  {
    text: "Access vetted, high-quality creators",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.8332 5.83333C10.8332 7.67428 9.34075 9.16667 7.49984 9.16667C5.65889 9.16667 4.1665 7.67428 4.1665 5.83333C4.1665 3.99238 5.65889 2.5 7.49984 2.5C9.34075 2.5 10.8332 3.99238 10.8332 5.83333Z" stroke="#141414" strokeWidth="1.5" />
        <path d="M12.5 9.16667C14.3409 9.16667 15.8333 7.67428 15.8333 5.83333C15.8333 3.99238 14.3409 2.5 12.5 2.5" stroke="#141414" strokeWidth="1.5" />
        <path d="M9.1665 11.6665H5.83317C3.53199 11.6665 1.6665 13.532 1.6665 15.8332C1.6665 16.7537 2.4127 17.4998 3.33317 17.4998H11.6665C12.587 17.4998 13.3332 16.7537 13.3332 15.8332C13.3332 13.532 11.4677 11.6665 9.1665 11.6665Z" stroke="#141414" strokeWidth="1.5" />
        <path d="M14.1665 11.6665C16.4677 11.6665 18.3332 13.532 18.3332 15.8332C18.3332 16.7537 17.587 17.4998 16.6665 17.4998H15.4165" stroke="#141414" strokeWidth="1.5" />
      </svg>
    ),
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
    ),
  },
  {
    text: "Centralized messaging and collaboration",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.25 7.0835H13.75M6.25 10.4168H10.8333" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1.6665 8.75016C1.6665 8.10784 1.67772 7.48082 1.69908 6.87541C1.76885 4.89752 1.80375 3.90857 2.60823 3.09804C3.41271 2.2875 4.42959 2.244 6.46334 2.15699C7.57915 2.10925 8.76725 2.0835 9.99984 2.0835C11.2324 2.0835 12.4205 2.10925 13.5363 2.15699C15.5701 2.244 16.587 2.2875 17.3914 3.09804C18.1959 3.90857 18.2308 4.89752 18.3006 6.87541C18.3219 7.48082 18.3332 8.10784 18.3332 8.75016C18.3332 9.3925 18.3219 10.0195 18.3006 10.6249C18.2308 12.6028 18.1959 13.5917 17.3914 14.4023C16.587 15.2128 15.5701 15.2563 13.5363 15.3433C12.9247 15.3695 12.2913 15.3891 11.6409 15.4014C11.0233 15.4131 10.7145 15.419 10.4432 15.5223C10.1718 15.6257 9.94359 15.8214 9.48692 16.2129L7.6707 17.7703C7.56045 17.8648 7.42 17.9168 7.27476 17.9168C6.93883 17.9168 6.6665 17.6445 6.6665 17.3086V15.3517C6.59852 15.349 6.5308 15.3462 6.46333 15.3433C4.42958 15.2563 3.41271 15.2128 2.60823 14.4022C1.80375 13.5917 1.76885 12.6028 1.69908 10.6249C1.67772 10.0195 1.6665 9.3925 1.6665 8.75016Z" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    text: "Drive authentic engagement and reach",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_brand_reach)">
          <path d="M18.3332 9.99984C18.3332 14.6022 14.6022 18.3332 9.99984 18.3332C5.39746 18.3332 1.6665 14.6022 1.6665 9.99984C1.6665 5.39746 5.39746 1.6665 9.99984 1.6665C14.6022 1.6665 18.3332 5.39746 18.3332 9.99984Z" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12.5 11.6667V10C12.5 8.8215 12.5 8.23223 12.1339 7.86612C11.7678 7.5 11.1785 7.5 10 7.5H8.33333M11.6667 8.33333L7.5 12.5" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_brand_reach">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];

const FeaturePill = ({ item, index, direction }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, x: direction === "left" ? -20 : 20 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { delay: index * 0.15, duration: 0.7, ease: "easeOut" },
      },
    }}
    className="flex items-center w-fit gap-x-2 pl-3 pr-4 py-2.5 rounded-full border border-[#E9E6E7] text-[#22000C] font-sans font-medium text-sm hover:bg-[#F9F6F6] transition-colors group cursor-default"
  >
    <div className="text-[#22000C] group-hover:text-[#741717] transition-colors shrink-0">
      {item.icon}
    </div>
    {item.text}
  </motion.div>
);

export const Opportunities = ({ onJoinCreator, onJoinBrand }) => {
  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-0 items-start">

          {/* LEFT: FOR CREATORS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.16 } },
            }}
            className="flex flex-col items-start"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
              }}
              className="px-4 py-1.5 rounded-full bg-[#EADCDC] text-[#741717] text-xs font-sans font-medium mb-5"
            >
              For Creators
            </motion.div>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: "easeOut" } },
              }}
              className="font-cormorant text-[36px] md:text-[40px] font-medium text-[#0D0D12] leading-[1.2] mb-5 max-w-md"
            >
              Turn Your Creativity Into Opportunities
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.95, ease: "easeOut" } },
              }}
              className="text-[#22000C] font-sans font-light leading-relaxed mb-5 max-w-[418px]"
            >
              Build your portfolio, track your campaigns, and collaborate with brands that value your content.
            </motion.p>

            <div className="flex flex-col gap-y-4 mb-8">
              {creatorFeatures.map((item, index) => (
                <FeaturePill key={index} item={item} index={index} direction="left" />
              ))}
            </div>

            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.95, ease: "easeOut" } },
              }}
              className="flex flex-col items-start gap-y-4"
            >
              <p className="text-[#741717] text-lg">Apply for Early Access</p>
              <button
                type="button"
                onClick={onJoinCreator}
                className="h-14 px-10 rounded-full bg-[#741717] text-white font-sans text-base tracking-wide shadow-lg hover:bg-[#5a1212] transition-all hover:scale-105 active:scale-95"
              >
                Join as a Creator
              </button>
            </motion.div>
          </motion.div>

          {/* CENTER: OVERLAP IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.35, ease: "circOut" }}
            className="hidden lg:flex items-center justify-center pt-13 px-4"
          >
            <Image
              src="/overlap-image.png"
              alt="Polaroid collage"
              width={299}
              height={450}
              quality={100}
              className="object-contain"
              priority
            />
          </motion.div>

          {/* RIGHT: FOR BRANDS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.16 } },
            }}
            className="flex flex-col items-start"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
              }}
              className="px-4 py-1.5 rounded-full bg-[#EADCDC] text-[#741717] text-xs font-sans font-medium mb-5"
            >
              For Brands
            </motion.div>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: "easeOut" } },
              }}
              className="font-cormorant text-[36px] md:text-[40px] font-medium text-[#0D0D12] leading-[1.2] mb-5 max-w-md"
            >
              Discover Creators Who Deliver Results
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.95, ease: "easeOut" } },
              }}
              className="text-[#22000C] font-sans font-light leading-relaxed -tracking-normal mb-5 max-w-[418px]"
            >
              Launch campaigns with trusted creators. Access insights, streamline communication, and earn authentic reviews.
            </motion.p>

            <div className="flex flex-col gap-y-4 mb-8">
              {brandFeatures.map((item, index) => (
                <FeaturePill key={index} item={item} index={index} direction="right" />
              ))}
            </div>

            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.95, ease: "easeOut" } },
              }}
              className="flex flex-col items-start gap-y-4"
            >
              <p className="text-[#741717] text-lg">Apply for Early Access</p>
              <button
                type="button"
                onClick={onJoinBrand}
                className="h-14 px-10 rounded-full bg-[#741717] text-white font-sans text-base tracking-wide shadow-lg hover:bg-[#5a1212] transition-all hover:scale-105 active:scale-95"
              >
                Join as a Brand
              </button>
            </motion.div>
          </motion.div>

          {/* MOBILE: OVERLAP IMAGE (shown between sections on mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.35, ease: "circOut" }}
            className="flex lg:hidden items-center justify-center -order-1"
          >
            <Image
              src="/overlap-image.png"
              alt="Polaroid collage"
              width={300}
              height={420}
              quality={100}
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
