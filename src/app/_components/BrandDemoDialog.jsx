"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  submitBrandDemoRequest,
  getApplicationErrorMessage,
} from "@/lib/firebase/applications";

const INDUSTRY_OPTIONS = [
  "Fashion",
  "Beauty",
  "Travel",
  "Dining",
  "Wellness",
  "Fitness",
  "Jewellery",
  "Home & Decor",
  "Other",
];

const LOCATIONS_OPTIONS = [
  "1",
  "2–5",
  "6–10",
  "11–25",
  "26+",
];

const CAMPAIGNS_OPTIONS = [
  "1–2",
  "3–5",
  "6–10",
  "11–20",
  "20+",
];

const inputClassName =
  "w-full h-[44px] sm:h-[48px] rounded-full border border-[#C7C7CB] px-5 sm:px-6 font-sans font-normal text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#741717] transition-all text-xs sm:text-sm appearance-none bg-white";

const SelectChevron = () => (
  <svg
    className="pointer-events-none absolute right-5 sm:right-6 top-1/2 -translate-y-1/2 text-[#741717]"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const BrandDemoDialog = ({ isOpen, onClose, onSubmitSuccess }) => {
  const [fullName, setFullName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [brandName, setBrandName] = useState("");
  const [industry, setIndustry] = useState("");
  const [numberOfLocations, setNumberOfLocations] = useState("");
  const [estimatedCampaignsPerMonth, setEstimatedCampaignsPerMonth] = useState("");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    if (!isOpen) {
      setFullName("");
      setWorkEmail("");
      setBrandName("");
      setIndustry("");
      setNumberOfLocations("");
      setEstimatedCampaignsPerMonth("");
      setNotes("");
      setSubmitError(null);
      setSubmitting(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.toggleLenisScroll) {
      window.toggleLenisScroll(isOpen);
    }
    return () => {
      if (typeof window !== "undefined" && window.toggleLenisScroll) {
        window.toggleLenisScroll(false);
      }
    };
  }, [isOpen]);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitError(null);

    if (
      !fullName.trim() ||
      !workEmail.trim() ||
      !brandName.trim() ||
      !industry ||
      !numberOfLocations ||
      !estimatedCampaignsPerMonth
    ) {
      setSubmitError("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);
    try {
      await submitBrandDemoRequest({
        fullName,
        workEmail,
        brandName,
        industry,
        numberOfLocations,
        estimatedCampaignsPerMonth,
        notes,
      });
      onClose();
      onSubmitSuccess?.();
    } catch (err) {
      setSubmitError(getApplicationErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
          />

          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 pointer-events-none overflow-y-auto">
            <motion.div
              initial={{ y: 100, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 100, opacity: 0, scale: 0.97 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className={[
                "relative pointer-events-auto flex flex-col overflow-y-auto scrollbar-hide my-auto",
                "bg-white shadow-2xl border border-stone-200",
                "w-full max-w-[min(100vw-2rem,712px)] max-h-[92vh] h-auto min-h-0",
                "rounded-[24px] pt-8 px-6 pb-8 gap-4 sm:pt-10 sm:px-10 sm:pb-10 sm:gap-4",
                "sm:max-w-[480px] lg:max-w-[712px]",
              ].join(" ")}
              data-lenis-prevent
            >
              <button
                type="button"
                onClick={onClose}
                className="absolute top-4 right-5 sm:top-6 sm:right-8 text-stone-400 hover:text-black transition-colors z-10"
                aria-label="Close"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <div className="flex flex-col items-center text-center">
                <Image
                  src="/logo-brown.png"
                  alt="Unyta"
                  width={48}
                  height={48}
                  className="object-contain mb-3 w-9 sm:w-12 h-auto"
                  quality={100}
                />
                <h2 className="font-cormorant font-medium text-2xl sm:text-[28px] md:text-[40px] leading-tight text-[#741717] uppercase tracking-tight mb-2">
                  Book a Brand Demo
                </h2>
                <p className="font-sans font-medium text-[#741717] text-[13px] sm:text-sm md:text-base max-w-[550px] leading-relaxed px-2 sm:px-0">
                  Explore how Unyta can support your brand with a tailored setup
                  for large-scale or multi-location collaboration needs.
                </p>
              </div>

              <form
                id="brand-demo-form"
                className="flex flex-col gap-3"
                onSubmit={handleSubmit}
                noValidate
              >
                {submitError && (
                  <p
                    className="rounded-2xl bg-red-50 px-4 py-2 text-center text-xs text-red-800 sm:text-sm"
                    role="alert"
                  >
                    {submitError}
                  </p>
                )}

                <input
                  type="text"
                  name="fullName"
                  autoComplete="name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Full Name"
                  className={inputClassName}
                />

                <input
                  type="email"
                  name="workEmail"
                  autoComplete="email"
                  value={workEmail}
                  onChange={(e) => setWorkEmail(e.target.value)}
                  placeholder="Work Email"
                  className={inputClassName}
                />

                <input
                  type="text"
                  name="brandName"
                  autoComplete="organization"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  placeholder="Brand Name"
                  className={inputClassName}
                />

                <div className="relative">
                  <select
                    name="industry"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className={`${inputClassName} ${!industry ? "text-stone-400" : ""}`}
                  >
                    <option value="" disabled>
                      Industry
                    </option>
                    {INDUSTRY_OPTIONS.map((option) => (
                      <option key={option} value={option} className="text-stone-900">
                        {option}
                      </option>
                    ))}
                  </select>
                  <SelectChevron />
                </div>

                <div className="relative">
                  <select
                    name="numberOfLocations"
                    value={numberOfLocations}
                    onChange={(e) => setNumberOfLocations(e.target.value)}
                    className={`${inputClassName} ${!numberOfLocations ? "text-stone-400" : ""}`}
                  >
                    <option value="" disabled>
                      Number of Locations / Sales Channels
                    </option>
                    {LOCATIONS_OPTIONS.map((option) => (
                      <option key={option} value={option} className="text-stone-900">
                        {option}
                      </option>
                    ))}
                  </select>
                  <SelectChevron />
                </div>

                <div className="relative">
                  <select
                    name="estimatedCampaignsPerMonth"
                    value={estimatedCampaignsPerMonth}
                    onChange={(e) => setEstimatedCampaignsPerMonth(e.target.value)}
                    className={`${inputClassName} ${!estimatedCampaignsPerMonth ? "text-stone-400" : ""}`}
                  >
                    <option value="" disabled>
                      Estimated Campaigns / Month
                    </option>
                    {CAMPAIGNS_OPTIONS.map((option) => (
                      <option key={option} value={option} className="text-stone-900">
                        {option}
                      </option>
                    ))}
                  </select>
                  <SelectChevron />
                </div>

                <textarea
                  name="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Optional Notes: Tell us about your goals, requirements, or any specific questions."
                  rows={4}
                  className="w-full min-h-[120px] rounded-2xl border border-[#C7C7CB] px-5 py-4 font-sans font-normal text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#741717] transition-all text-xs sm:text-sm resize-y"
                />
              </form>

              <div className="flex flex-col gap-3 mt-auto">
                <button
                  type="submit"
                  form="brand-demo-form"
                  disabled={submitting}
                  className="w-full h-[52px] sm:h-[60px] rounded-full bg-[#741717] text-white font-sans font-medium text-[15px] sm:text-[17px] hover:bg-[#541409] transition-all shadow-lg active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none"
                >
                  {submitting ? "Submitting…" : "Submit Request"}
                </button>
                <p className="font-sans font-normal text-[#22000C]/70 text-xs sm:text-[13px] text-center pb-2 sm:pb-0 leading-relaxed">
                  By submitting this request, our team will review your inquiry
                  and contact you within{" "}
                  <span className="font-semibold text-[#22000C]">24—48 hours.</span>
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
