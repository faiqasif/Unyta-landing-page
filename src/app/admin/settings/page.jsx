"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  getAuthErrorMessage,
  updateAdminEmail,
  updateAdminName,
  updateAdminPassword,
} from "@/lib/firebase/auth";
import { passwordMeetsPolicy } from "@/lib/firebase/applications";
import { formatDate } from "@/lib/admin/format";
import { useAdminAuth } from "../_components/AdminAuthProvider";
import { CheckIcon } from "../_components/icons";
import {
  Alert,
  Card,
  CardHeading,
  Field,
  PageHeader,
  PillButton,
  Spinner,
  inputClassName,
} from "../_components/ui";

function PasswordInput({ value, onChange, placeholder, autoComplete }) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="relative">
      <input
        type={visible ? "text" : "password"}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`${inputClassName} pr-12 sm:pr-14`}
      />
      <button
        type="button"
        onClick={() => setVisible(!visible)}
        aria-label={visible ? "Hide password" : "Show password"}
        className="absolute right-5 top-1/2 -translate-y-1/2 text-stone-400 transition-colors hover:text-stone-600 sm:right-6"
      >
        {visible ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" /></svg>
        )}
      </button>
    </div>
  );
}

export default function AdminSettingsPage() {
  const { user, profile, patchProfile } = useAdminAuth();

  const [name, setName] = useState(profile?.name ?? "");
  const [nameSaving, setNameSaving] = useState(false);
  const [nameError, setNameError] = useState(null);

  const [email, setEmail] = useState(user?.email ?? "");
  const [emailPassword, setEmailPassword] = useState("");
  const [emailSaving, setEmailSaving] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const [emailNotice, setEmailNotice] = useState(null);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordSaving, setPasswordSaving] = useState(false);
  const [passwordError, setPasswordError] = useState(null);

  useEffect(() => {
    if (profile?.name) setName(profile.name);
  }, [profile?.name]);

  useEffect(() => {
    if (user?.email) setEmail(user.email);
  }, [user?.email]);

  const hasMinLen = newPassword.length >= 8;
  const hasNumber = /\d/.test(newPassword);
  const hasSymbol = /[^a-zA-Z0-9]/.test(newPassword);

  async function handleNameSubmit(event) {
    event.preventDefault();
    setNameError(null);
    if (!name.trim()) {
      setNameError("Enter a name.");
      return;
    }
    setNameSaving(true);
    try {
      const saved = await updateAdminName(name);
      patchProfile({ name: saved });
      toast.success("Name updated.");
    } catch (err) {
      setNameError(getAuthErrorMessage(err));
    } finally {
      setNameSaving(false);
    }
  }

  async function handleEmailSubmit(event) {
    event.preventDefault();
    setEmailError(null);
    setEmailNotice(null);
    const trimmed = email.trim().toLowerCase();
    if (!trimmed) {
      setEmailError("Enter an email address.");
      return;
    }
    if (trimmed === user?.email) {
      setEmailError("That is already your sign-in email.");
      return;
    }
    if (!emailPassword) {
      setEmailError("Enter your current password to confirm this change.");
      return;
    }
    setEmailSaving(true);
    try {
      const result = await updateAdminEmail({ newEmail: trimmed, currentPassword: emailPassword });
      setEmailPassword("");
      if (result.status === "verification-sent") {
        setEmailNotice(
          `Verification sent to ${result.email}. The change takes effect once you open that link.`
        );
        toast.success("Verification email sent.");
      } else {
        patchProfile({ email: result.email });
        toast.success("Email updated.");
      }
    } catch (err) {
      setEmailError(getAuthErrorMessage(err));
    } finally {
      setEmailSaving(false);
    }
  }

  async function handlePasswordSubmit(event) {
    event.preventDefault();
    setPasswordError(null);
    if (!currentPassword) {
      setPasswordError("Enter your current password.");
      return;
    }
    if (!passwordMeetsPolicy(newPassword)) {
      setPasswordError("New password must be at least 8 characters and include a number and a symbol.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordError("New passwords do not match.");
      return;
    }
    setPasswordSaving(true);
    try {
      await updateAdminPassword({ newPassword, currentPassword });
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      toast.success("Password updated.");
    } catch (err) {
      setPasswordError(getAuthErrorMessage(err));
    } finally {
      setPasswordSaving(false);
    }
  }

  return (
    <>
      <PageHeader title="Settings" subtitle="Manage the details of your admin account." />

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="flex flex-col gap-4">
          {/* NAME */}
          <Card>
            <CardHeading title="Profile" subtitle="The name shown across the admin panel." />
            <form onSubmit={handleNameSubmit} className="flex flex-col gap-3" noValidate>
              {nameError && <Alert tone="error">{nameError}</Alert>}
              <Field label="Full name">
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  autoComplete="name"
                  placeholder="Full name"
                  className={inputClassName}
                />
              </Field>
              <div className="flex justify-end">
                <PillButton type="submit" disabled={nameSaving || name.trim() === (profile?.name ?? "")}>
                  {nameSaving && <Spinner />}
                  {nameSaving ? "Saving…" : "Save name"}
                </PillButton>
              </div>
            </form>
          </Card>

          {/* EMAIL */}
          <Card>
            <CardHeading
              title="Sign-in email"
              subtitle="Changing this changes the address you log in with."
            />
            <form onSubmit={handleEmailSubmit} className="flex flex-col gap-3" noValidate>
              {emailError && <Alert tone="error">{emailError}</Alert>}
              {emailNotice && <Alert tone="success">{emailNotice}</Alert>}
              <Field label="Email address">
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="email"
                  placeholder="admin@unyta.com"
                  className={inputClassName}
                />
              </Field>
              <Field label="Current password" hint="Required to confirm an email change.">
                <PasswordInput
                  value={emailPassword}
                  onChange={setEmailPassword}
                  placeholder="Current password"
                  autoComplete="current-password"
                />
              </Field>
              <div className="flex justify-end">
                <PillButton
                  type="submit"
                  disabled={emailSaving || email.trim().toLowerCase() === user?.email}
                >
                  {emailSaving && <Spinner />}
                  {emailSaving ? "Saving…" : "Update email"}
                </PillButton>
              </div>
            </form>
          </Card>

          {/* PASSWORD */}
          <Card>
            <CardHeading title="Password" subtitle="Use at least 8 characters, a number and a symbol." />
            <form onSubmit={handlePasswordSubmit} className="flex flex-col gap-3" noValidate>
              {passwordError && <Alert tone="error">{passwordError}</Alert>}
              <Field label="Current password">
                <PasswordInput
                  value={currentPassword}
                  onChange={setCurrentPassword}
                  placeholder="Current password"
                  autoComplete="current-password"
                />
              </Field>
              <Field label="New password">
                <PasswordInput
                  value={newPassword}
                  onChange={setNewPassword}
                  placeholder="New password"
                  autoComplete="new-password"
                />
              </Field>

              <div className="h-[8px] w-full overflow-hidden rounded-full bg-[#F1E8E8]">
                <div
                  className="h-full rounded-full bg-[#741717] transition-all duration-300"
                  style={{
                    width: `${Math.min(
                      100,
                      (hasMinLen ? 34 : 1) + (hasNumber ? 33 : 1) + (hasSymbol ? 33 : 1)
                    )}%`,
                  }}
                />
              </div>
              <ul className="flex flex-col gap-2 pt-1">
                {[
                  [hasMinLen, "8 characters minimum"],
                  [hasNumber, "a number"],
                  [hasSymbol, "a symbol"],
                ].map(([met, label]) => (
                  <li key={label} className="flex items-center gap-2.5">
                    <span
                      className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                        met ? "border-[#741717] bg-[#741717] text-white" : "border-[#9D9AA4]"
                      }`}
                    >
                      {met && <CheckIcon width={10} height={10} strokeWidth={3} />}
                    </span>
                    <span className="font-sans text-sm font-light text-[#22000C]">{label}</span>
                  </li>
                ))}
              </ul>

              <Field label="Confirm new password">
                <PasswordInput
                  value={confirmPassword}
                  onChange={setConfirmPassword}
                  placeholder="Confirm new password"
                  autoComplete="new-password"
                />
              </Field>
              <div className="flex justify-end">
                <PillButton type="submit" disabled={passwordSaving}>
                  {passwordSaving && <Spinner />}
                  {passwordSaving ? "Saving…" : "Update password"}
                </PillButton>
              </div>
            </form>
          </Card>
        </div>

        {/* ACCOUNT SUMMARY */}
        <Card className="h-fit">
          <CardHeading title="Account" />
          <dl className="flex flex-col gap-4">
            {[
              ["Name", profile?.name || "—"],
              ["Sign-in email", user?.email || "—"],
              ["Role", profile?.role || "admin"],
              [
                "Added",
                profile?.createdAt?.toDate ? formatDate(profile.createdAt.toDate()) : "—",
              ],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-[#741717]">
                  {label}
                </dt>
                <dd className="mt-0.5 break-words font-sans text-sm text-[#22000C]">{value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 border-t border-stone-100 pt-4 font-sans text-xs font-light leading-relaxed text-stone-500">
            Admin accounts are provisioned by seeding. To add another admin, run the seed script with
            that address and add its record to the adminUsers collection.
          </p>
        </Card>
      </div>
    </>
  );
}
