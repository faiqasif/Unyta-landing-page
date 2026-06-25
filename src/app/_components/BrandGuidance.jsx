"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { BrandDemoDialog } from "./BrandDemoDialog";

const CONTACT_EMAIL = "contact@joinunyta.com";

const ChevronRight = ({ className = "" }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor " strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>

);

const EnvelopeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.33301 7L10.3982 11.5698C13.3715 13.2545 14.6278 13.2545 17.6012 11.5698L25.6663 7" stroke="#741717" strokeWidth="1.75" strokeLinejoin="round" />
    <path d="M2.35141 15.7217C2.42767 19.2982 2.46581 21.0864 3.78546 22.4111C5.1051 23.7358 6.94173 23.7818 10.615 23.8741C12.8789 23.9311 15.1205 23.9311 17.3844 23.8741C21.0577 23.7818 22.8942 23.7358 24.214 22.4111C25.5336 21.0864 25.5717 19.2982 25.6479 15.7217C25.6725 14.5717 25.6725 13.4286 25.6479 12.2786C25.5717 8.70217 25.5336 6.91394 24.214 5.58927C22.8942 4.2646 21.0577 4.21846 17.3844 4.12616C15.1205 4.06928 12.8789 4.06928 10.615 4.12615C6.94173 4.21843 5.1051 4.26458 3.78545 5.58926C2.4658 6.91392 2.42767 8.70215 2.35139 12.2786C2.32687 13.4286 2.32688 14.5717 2.35141 15.7217Z" stroke="#741717" strokeWidth="1.75" strokeLinejoin="round" />
  </svg>

);

const CalendarIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.6663 2.3335V7.00016M9.33301 2.3335V7.00016" stroke="#741717" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15.1667 4.6665H12.8333C8.43355 4.6665 6.23367 4.6665 4.86683 6.03334C3.5 7.40018 3.5 9.60006 3.5 13.9998V16.3332C3.5 20.7329 3.5 22.9329 4.86683 24.2996C6.23367 25.6665 8.43355 25.6665 12.8333 25.6665H15.1667C19.5664 25.6665 21.7664 25.6665 23.1331 24.2996C24.5 22.9329 24.5 20.7329 24.5 16.3332V13.9998C24.5 9.60006 24.5 7.40018 23.1331 6.03334C21.7664 4.6665 19.5664 4.6665 15.1667 4.6665Z" stroke="#741717" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3.5 11.6665H24.5" stroke="#741717" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.9944 16.3335H14.0049M13.9944 21.0002H14.0049M18.6558 16.3335H18.6663M9.33301 16.3335H9.34347M9.33301 21.0002H9.34347" stroke="#741717" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>

);

export const BrandGuidance = ({ onDemoSubmitSuccess }) => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <section className="bg-[#F9F6F6] flex flex-col w-full">
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="rounded-[32px] md:rounded-[40px] px-6 py-12 md:px-12 md:py-16 flex flex-col items-center text-center"
      >
        <span className="px-4 py-1.5 rounded-full bg-[#EADCDC] text-[#741717] text-xs font-sans font-medium mb-6">
          For Brands
        </span>

        <h2 className="font-cormorant text-[32px] md:text-[40px] uppercase font-semibold text-[#571111] mb-3 leading-tight max-w-[720px]">
          Need Personalised Guidance?
        </h2>

        <p className="font-sans font-medium text-[#22000C]/80 text-base md:text-lg max-w-[456px] leading-relaxed mb-10 md:mb-12">
          Speak with our team to explore Unyta and understand which setup best
          matches your brand goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 w-full max-w-[820px] relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#D4B7B7] -translate-x-1/2" />

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4 w-full max-w-[340px]">
              <EnvelopeIcon />
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex-1 flex items-center justify-between gap-3 p-3 rounded-lg border border-[#741717] text-[#741717] font-sans text-base tracking-wide hover:bg-white transition-colors"
              >
                <span>Contact Us</span>
                <ChevronRight />
              </a>
            </div>
            <p className="font-sans font-light text-sm text-[#22000C]/60 max-w-[340px]">
              Have questions? Our Team is here to help.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4 w-full max-w-[340px]">
              <CalendarIcon />
              <button
                type="button"
                onClick={() => setIsDemoOpen(true)}
                className="flex-1 flex items-center justify-between gap-3 p-3 rounded-lg bg-[#741717] text-white font-sans text-base tracking-wide hover:bg-[#5a1212] transition-colors"
              >
                <span>Book a Demo</span>
                <ChevronRight className="text-white" />
              </button>
            </div>
            <p className="font-sans font-light text-sm text-[#22000C]/60 max-w-[340px] pl-6">
              For multi-locations businesses or larger brands.
            </p>
          </div>
        </div>
      </motion.div>

      <BrandDemoDialog
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        onSubmitSuccess={() => {
          setIsDemoOpen(false);
          onDemoSubmitSuccess?.();
        }}
      />
    </section>
  );
};
