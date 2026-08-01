"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { getAuthErrorMessage } from "@/lib/firebase/auth";
import { useAdminAuth } from "../_components/AdminAuthProvider";
import { Alert, Spinner, inputClassName } from "../_components/ui";

export default function AdminLoginPage() {
  const router = useRouter();
  const { signIn } = useAdminAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    setError(null);
    if (!email.trim() || !password) {
      setError("Enter your email and password.");
      return;
    }
    setSubmitting(true);
    try {
      await signIn({ email, password });
      router.replace("/admin");
    } catch (err) {
      setError(getAuthErrorMessage(err));
      setSubmitting(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F5F2F1] px-5 py-12 font-sans">
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 26, stiffness: 300 }}
        className="w-full max-w-[456px] rounded-[24px] border border-stone-200 bg-white px-6 pb-8 pt-9 shadow-2xl sm:px-10 sm:pb-10"
      >
        <div className="flex flex-col items-center text-center">
          <Image
            src="/image.png"
            alt="Unyta Monogram"
            width={48}
            height={48}
            quality={100}
            className="mb-3 w-[40px] object-contain sm:w-[48px]"
            style={{ height: "auto", filter: "brightness(0)" }}
          />
          <h1 className="font-cormorant text-2xl font-medium uppercase leading-tight tracking-tight text-[#22000C] sm:text-[34px]">
            Unyta Admin
          </h1>
          <p className="mt-1 font-sans text-[13px] font-medium tracking-tight text-[#741717] sm:text-base">
            Sign in to review applications and demo requests.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-3" noValidate>
          {error && <Alert tone="error">{error}</Alert>}

          <input
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email Address"
            className={inputClassName}
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              className={`${inputClassName} pr-12 sm:pr-14`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-stone-400 transition-colors hover:text-stone-600 sm:right-6"
            >
              {showPassword ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" /></svg>
              )}
            </button>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-2 flex h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[#741717] font-sans text-[15px] font-medium text-white shadow-lg transition-all hover:bg-[#541409] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60 sm:h-[60px] sm:text-[17px]"
          >
            {submitting && <Spinner />}
            {submitting ? "Signing in…" : "Sign In"}
          </button>
        </form>

        <p className="mt-5 text-center font-sans text-xs text-stone-500">
          Restricted to Unyta staff.{" "}
          <Link href="/" className="font-semibold text-[#741717] underline hover:text-[#541409]">
            Back to site
          </Link>
        </p>
      </motion.div>
    </main>
  );
}
