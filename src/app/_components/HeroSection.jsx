"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function HeroSection({ onJoinCreator, onJoinBrand }) {
    return (
        <section className="relative flex h-svh min-h-[900px] max-h-[900px] w-full flex-col items-center bg-[#F1E8E8] pt-24 md:pt-32 lg:pt-35 overflow-hidden">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    visible: { transition: { staggerChildren: 0.15 } }
                }}
                className="z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center"
            >
                <motion.h1
                    variants={{
                        hidden: { y: 30, opacity: 0 },
                        visible: { y: 0, opacity: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="text-balance font-cormorant text-[36px] md:text-[48px] font-semibold tracking-tight text-[#22000C] leading-[1.1] md:leading-[1.2]"
                >
                    The members<span className="font-sans font-normal">-</span>only community
                    <br />
                    where{" "}
                    <span className="text-[#741717] font-medium">
                        creators
                    </span>{" "}
                    and{" "}
                    <span className="text-[#741717] font-medium">
                        brands
                    </span>
                    <br />
                    connect authentically.
                </motion.h1>

                <motion.p
                    variants={{
                        hidden: { y: 20, opacity: 0 },
                        visible: { y: 0, opacity: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="mx-auto mt-2 max-w-lg font-light text-[#22000C] text-lg font-sans sm:text-xl"
                >
                    Swipe to match. Unlock exclusive collaborations, gifted products, and
                    curated experiences.
                </motion.p>

                <motion.div
                    variants={{
                        hidden: { y: 20, opacity: 0 },
                        visible: { y: 0, opacity: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="mt-6 flex flex-col items-center gap-y-3"
                >
                    <p className="text-lg md:text-[20px] text-[#741717]">
                        Apply for Early Access
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
                        <button
                            type="button"
                            onClick={onJoinCreator}
                            className="h-12 w-full sm:w-auto rounded-full bg-[#741717] px-8 text-sm tracking-wide text-white transition-all hover:scale-105 active:scale-95"
                        >
                            Join as a Creator
                        </button>
                        <button
                            type="button"
                            onClick={onJoinBrand}
                            className="h-12 w-full sm:w-auto rounded-full border-2 border-[#741717] bg-white/30 px-8 text-sm tracking-wide text-[#741717] backdrop-blur-sm transition-all hover:bg-white/50 hover:scale-105 active:scale-95"
                        >
                            Join as a Brand
                        </button>
                    </div>
                </motion.div>
            </motion.div>

            <div className="mt-10 flex w-full max-w-6xl items-end justify-center gap-2 sm:gap-10 md:gap-30 lg:gap-40 px-4 pointer-events-none select-none">
                <motion.div
                    initial={{ y: 250, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "circOut", delay: 0.15 }}
                >
                    <div className="w-[100px] sm:w-[140px] md:w-[180px] lg:w-[220px] translate-y-[-50px] md:translate-y-[-150px]">
                        <Image
                            src="/left.png"
                            alt="Unyta Left Phone"
                            width={900}
                            height={1800}
                            quality={100}
                            sizes="(max-width: 640px) 100px, (max-width: 768px) 140px, (max-width: 1024px) 180px, 220px"
                            className="w-full h-auto object-contain drop-shadow-xl"
                        />
                    </div>
                </motion.div>

                <motion.div
                    className="z-20"
                    initial={{ y: 300, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.7, ease: "circOut", delay: 0.35 }}
                >
                    <div className="w-[120px] sm:w-[160px] md:w-[200px] lg:w-[240px] translate-y-[-10px] md:translate-y-[-65px]">
                        <Image
                            src="/middle.png"
                            alt="Unyta Middle Phone"
                            width={960}
                            height={1920}
                            quality={100}
                            sizes="(max-width: 640px) 120px, (max-width: 768px) 160px, (max-width: 1024px) 200px, 240px"
                            className="w-full h-auto object-contain drop-shadow-2xl"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 250, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "circOut", delay: 0.55 }}
                >
                    <div className="w-[100px] sm:w-[140px] md:w-[180px] lg:w-[220px] translate-y-[-40px] md:translate-y-[-142px]">
                        <Image
                            src="/right.png"
                            alt="Unyta Right Phone"
                            width={900}
                            height={1800}
                            quality={100}
                            sizes="(max-width: 640px) 100px, (max-width: 768px) 140px, (max-width: 1024px) 180px, 220px"
                            className="w-full h-auto object-contain drop-shadow-xl"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
