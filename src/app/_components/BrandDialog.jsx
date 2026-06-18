"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import toast from "react-hot-toast";
import {
  submitBrandApplication,
  getApplicationErrorMessage,
  passwordMeetsPolicy,
} from "@/lib/firebase/applications";

export const BrandDialog = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [instagramHandle, setInstagramHandle] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const hasMinLen = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[^a-zA-Z0-9]/.test(password);

  useEffect(() => {
    if (!isOpen) {
      setFullName("");
      setEmail("");
      setInstagramHandle("");
      setWebsiteUrl("");
      setPassword("");
      setConfirmPassword("");
      setSubmitError(null);
      setSubmitting(false);
      setShowPassword(false);
      setShowConfirmPassword(false);
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
    if (!fullName.trim() || !email.trim() || !instagramHandle.trim()) {
      setSubmitError("Please fill in all required fields.");
      return;
    }
    if (!passwordMeetsPolicy(password)) {
      setSubmitError("Password must be at least 8 characters and include a number and a symbol.");
      return;
    }
    if (password !== confirmPassword) {
      setSubmitError("Passwords do not match.");
      return;
    }
    setSubmitting(true);
    try {
      await submitBrandApplication({
        fullName,
        email,
        instagramHandle,
        websiteUrl,
        password,
      });
      toast.success("Thanks! Your brand application was submitted.");
      onClose();
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
          {/* OVERLAY */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
          />

          {/* Centered modal */}
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 pointer-events-none overflow-y-auto">

            {/* DIALOG CONTAINER */}
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
              {/* CLOSE BUTTON */}
              <button 
                onClick={onClose}
                className="absolute top-4 right-5 sm:top-6 sm:right-8 text-stone-400 hover:text-black transition-colors z-10"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>

              {/* HEADER */}
              <div className="flex flex-col items-center text-center">
                <Image 
                  src="/image.png" 
                  alt="Unyta Monogram" 
                  width={48} 
                  height={48} 
                  className="object-contain mb-3 w-[36px] sm:w-[48px]"
                  quality={100}
                  style={{ 
                    height: "auto",
                    filter: "brightness(0)" 
                  }}
                />
                <h2 className="font-cormorant font-medium text-2xl sm:text-[28px] md:text-[40px] leading-tight text-[#22000C] uppercase tracking-tight mb-1">
                  Join Unyta as a Brand
                </h2>
                <p className="font-sans font-medium tracking-tight text-[#741717] text-[13px] sm:text-sm md:text-base lg:text-xl max-w-[550px] leading-relaxed px-4 sm:px-0">
                  Match with top-tier creators and launch authentic partnerships that drive real engagement.
                </p>
              </div>

              {/* FORM */}
              <form id="brand-early-access-form" className="flex flex-col gap-3" onSubmit={handleSubmit} noValidate>
                {submitError && (
                  <p className="rounded-2xl bg-red-50 px-4 py-2 text-center text-xs text-red-800 sm:text-sm" role="alert">
                    {submitError}
                  </p>
                )}
                {/* FULL NAME */}
                <div className="relative">
                  <input 
                    type="text" 
                    name="fullName"
                    autoComplete="name"
                    value={fullName}
                    onChange={(ev) => setFullName(ev.target.value)}
                    placeholder="Full Name"
                    className="w-full h-[44px] sm:h-[48px] rounded-full border border-[#C7C7CB] px-5 sm:px-6 font-sans font-normal text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#741717] transition-all text-xs sm:text-sm"
                  />
                </div>

                {/* BUSINESS EMAIL */}
                <div className="relative">
                  <input 
                    type="email" 
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                    placeholder="Business Email"
                    className="w-full h-[44px] sm:h-[48px] rounded-full border border-[#C7C7CB] px-5 sm:px-6 font-sans font-normal text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#741717] transition-all text-xs sm:text-sm"
                  />
                </div>

                {/* INSTAGRAM */}
                <div className="relative">
                  <input 
                    type="text" 
                    name="instagramHandle"
                    autoComplete="username"
                    value={instagramHandle}
                    onChange={(ev) => {
                      const v = ev.target.value;
                      if (v === "") {
                        setInstagramHandle("");
                        return;
                      }
                      setInstagramHandle("@" + v.replace(/^@+/, ""));
                    }}
                    placeholder="Instagram Handle"
                    className="w-full h-[44px] sm:h-[48px] rounded-full border border-[#C7C7CB] px-5 sm:px-6 pr-12 sm:pr-14 font-sans font-normal text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#741717] transition-all text-xs sm:text-sm"
                  />
                  <button type="button" className="absolute right-5 sm:right-6 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 transition-colors" aria-label="Instagram handle">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                  </button>
                </div>

                {/* WEBSITE URL */}
                <div className="relative">
                  <input 
                    type="url" 
                    name="websiteUrl"
                    autoComplete="url"
                    value={websiteUrl}
                    onChange={(ev) => setWebsiteUrl(ev.target.value)}
                    placeholder="Website URL"
                    className="w-full h-[44px] sm:h-[48px] rounded-full border border-[#C7C7CB] px-5 sm:px-6 font-sans font-normal text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#741717] transition-all text-xs sm:text-sm"
                  />
                </div>

                {/* PASSWORD */}
                <div className="space-y-2">
                  <div className="relative">
                    <input 
                      type={showPassword ? "text" : "password"} 
                      name="password"
                      autoComplete="new-password"
                      value={password}
                      onChange={(ev) => setPassword(ev.target.value)}
                      placeholder="Password"
                      className="w-full h-[44px] sm:h-[48px] rounded-full border border-[#C7C7CB] px-5 sm:px-6 pr-12 sm:pr-14 font-sans font-normal text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#741717] transition-all text-xs sm:text-sm"
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-5 sm:right-6 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 transition-colors"
                    >
                      {showPassword ? (
                         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                      ) : (
                         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                      )}
                    </button>
                  </div>
                  
                  {/* STRENGTH BAR */}
                  <div className="w-full h-[8px] bg-[#F1E8E8] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#741717] rounded-full transition-all duration-300"
                      style={{
                        width: `${Math.min(100, (hasMinLen ? 34 : 1) + (hasNumber ? 33 : 1) + (hasSymbol ? 33 : 1))}%`,
                      }}
                    />
                  </div>

                  {/* REQUIREMENTS */}
                  <div className="flex flex-col items-start gap-2 pt-1">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-4 h-4 rounded-full border ${hasMinLen ? "border-[#741717] bg-[#741717]" : "border-[#9D9AA4]"}`} />
                      <span className="font-sans font-light text-[#22000C] text-sm">8 characters minimum</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className={`w-4 h-4 rounded-full border ${hasNumber ? "border-[#741717] bg-[#741717]" : "border-[#9D9AA4]"}`} />
                      <span className="font-sans font-light text-[#22000C] text-sm">a number</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className={`w-4 h-4 rounded-full border ${hasSymbol ? "border-[#741717] bg-[#741717]" : "border-[#9D9AA4]"}`} />
                      <span className="font-sans font-light text-[#22000C] text-sm">a symbol</span>
                    </div>
                  </div>
                </div>

                {/* CONFIRM PASSWORD */}
                <div className="relative">
                  <input 
                    type={showConfirmPassword ? "text" : "password"} 
                    name="confirmPassword"
                    autoComplete="new-password"
                    value={confirmPassword}
                    onChange={(ev) => setConfirmPassword(ev.target.value)}
                    placeholder="Confirm Password"
                    className="w-full h-[44px] sm:h-[48px] rounded-full border border-[#C7C7CB] px-5 sm:px-6 pr-12 sm:pr-14 font-sans font-normal text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#741717] transition-all text-xs sm:text-sm"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-5 sm:right-6 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 transition-colors"
                  >
                    {showConfirmPassword ? (
                       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    ) : (
                       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                    )}
                  </button>
                </div>
              </form>

              {/* CTAS */}
              <div className="flex flex-col gap-3 mt-auto">
                <button
                  type="submit"
                  form="brand-early-access-form"
                  disabled={submitting}
                  className="w-full h-[52px] sm:h-[60px] rounded-full bg-[#741717] text-white font-sans font-medium text-[15px] sm:text-[17px] hover:bg-[#541409] transition-all shadow-lg active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none"
                >
                  {submitting ? "Submitting…" : "Apply for Early Access"}
                </button>
                <p className="font-sans font-normal text-[#22000C] text-xs sm:text-[13px] text-center pb-2 sm:pb-0">
                  By signing up, you agree to Unyta&apos;s{" "}
                  <Link href="/terms" onClick={onClose} className="font-semibold underline hover:text-[#741717]">Terms of Service</Link> &{" "}
                  <Link href="/privacy" onClick={onClose} className="font-semibold underline hover:text-[#741717]">Privacy Policy</Link>
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
