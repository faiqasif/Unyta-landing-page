"use client";

import { motion } from "motion/react";

export const GettingStarted = () => {
  const steps = [
    {
      title: "Apply & Create Profile",
      desc: "Download the app, sign up, and complete your application with your details.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13C12.7614 13 15 10.7614 15 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17.5 21V14M14 17.5H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 20C3 16.134 6.13401 13 10 13C11.4872 13 12.8662 13.4638 14 14.2547" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

      )
    },
    {
      title: "Get Approved",
      desc: "Our team reviews your application. Once accepted, you'll be ready to explore.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 2.4578C14.053 2.16035 13.0452 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 10.9548 21.8396 9.94704 21.5422 9" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M8.5 9.5L12 13L21.0002 3" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>

      )
    },
    {
      title: "Explore & Match",
      desc: "Discover campaigns, swipe to match with brands or creators that fit your style.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 17L21 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>


      )
    },
    {
      title: "Start Collaborating",
      desc: "Connect, chat, and create authentic content together.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 6.75H19.2111C18.61 6.75 18.3094 6.75 18.026 6.66418C17.7426 6.57837 17.4925 6.41165 16.9923 6.0782C16.2421 5.57803 15.3862 5.00745 14.961 4.87872C14.5359 4.75 14.085 4.75 13.1833 4.75C11.9571 4.75 11.1667 4.75 10.6154 4.97836C10.0641 5.20672 9.63056 5.64027 8.76347 6.50736L8.00039 7.27044C7.80498 7.46585 7.70727 7.56356 7.64695 7.66002C7.42335 8.01761 7.44813 8.47705 7.70889 8.80851C7.77924 8.89793 7.88689 8.98456 8.10218 9.15782C8.89796 9.79824 10.0452 9.73432 10.7658 9.00942L12 7.76786H13L19 13.8036C19.5523 14.3592 19.5523 15.2599 19 15.8155C18.4477 16.3711 17.5523 16.3711 17 15.8155L16.5 15.3125M16.5 15.3125L13.5 12.2947M16.5 15.3125C17.0523 15.8681 17.0523 16.7689 16.5 17.3244C15.9477 17.88 15.0523 17.88 14.5 17.3244L13.5 16.3185M13.5 16.3185C14.0523 16.874 14.0523 17.7748 13.5 18.3304C12.9477 18.8859 12.0523 18.8859 11.5 18.3304L10 16.8214M13.5 16.3185L11.5 14.3185M10 16.8214L9.5 16.3185M10 16.8214C10.5523 17.377 10.5523 18.2778 10 18.8334C9.44772 19.3889 8.55229 19.3889 8 18.8334L5.17637 15.9509C4.59615 15.3586 4.30604 15.0625 3.93435 14.9062C3.56266 14.75 3.14808 14.75 2.31894 14.75H2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 14.75H19.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.5 6.75H2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

      )
    }
  ];

  return (
    <section className="w-full h-auto bg-white flex items-center justify-center py-24">
      <div className="w-full flex flex-col items-center">

        {/* HEADER */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20 px-6"
        >
          <h2 className="font-cormorant text-[36px] md:text-[48px] uppercase font-semibold text-[#0D0D12] mb-4">
            GETTING STARTED
          </h2>
          <p className="font-sans font-light text-[#22000C] text-base md:text-lg max-w-2xl mx-auto">
            Join Unyta in four simple steps and start your collaboration journey today.
          </p>
        </motion.div>

        {/* STEPS GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="relative w-full max-w-7xl mx-auto px-6 md:px-12"
        >
          {/* CONNECTING LINE (Desktop) */}
          <motion.div
            variants={{
              hidden: { scaleX: 0, opacity: 0 },
              visible: { scaleX: 1, opacity: 1, transition: { duration: 1.2, ease: "easeInOut", delay: 0.3 } }
            }}
            className="absolute top-[26px] left-[10%] right-[10%] h-[1px] hidden lg:block origin-left"
            style={{ background: "linear-gradient(90deg, #E8C6C1 0%, #58180E 50%, #E8C6C1 100%)" }}
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 md:gap-y-12 gap-x-4 lg:gap-x-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { y: 40, opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                className="flex flex-col items-center text-center relative z-10"
              >
                {/* ICON BADGE */}
                <div
                  className="w-[52px] h-[52px] rounded-full bg-gradient-to-br from-[#541409] to-[#3a0d05] flex items-center justify-center mb-6"
                  style={{ boxShadow: "0px -4px 8px 0px #FFFFFFA3 inset, 0px 4px 10px rgba(84, 20, 9, 0.25)" }}
                >
                  {step.icon}
                </div>

                {/* TEXT CONTENT */}
                <h3 className="font-cormorant text-2xl font-semibold text-[#741717] mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="font-sans font-light text-[#22000C] text-[15px] leading-relaxed max-w-[240px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
