import { addDoc, collection, Timestamp } from "firebase/firestore";
import { getFirebaseDb } from "./client";

export function normalizeInstagramHandle(handle) {
  const t = handle.trim();
  if (!t) return "";
  return t.startsWith("@") ? t.slice(1) : t;
}

export function passwordMeetsPolicy(password) {
  if (password.length < 8) return false;
  if (!/\d/.test(password)) return false;
  if (!/[^a-zA-Z0-9]/.test(password)) return false;
  return true;
}

export function getApplicationErrorMessage(error) {
  const code = error?.code;
  switch (code) {
    case "permission-denied":
      return "Could not save: Firestore blocked the write. In Firebase Console open Firestore → Rules, paste the rules from firestore.rules in this project, click Publish, and confirm the app uses the same project as in .env.local (NEXT_PUBLIC_FIREBASE_PROJECT_ID).";
    case "unavailable":
      return "Service temporarily unavailable. Try again in a moment.";
    default:
      return error?.message || "Something went wrong. Please try again.";
  }
}

export async function submitCreatorApplication({
  fullName,
  email,
  instagramHandle,
  password,
}) {
  const db = getFirebaseDb();
  const trimmedEmail = email.trim().toLowerCase();
  await addDoc(collection(db, "creators"), {
    fullName: fullName.trim(),
    email: trimmedEmail,
    instagramHandle: normalizeInstagramHandle(instagramHandle),
    password,
    createdAt: Timestamp.now(),
  });
}

export async function submitBrandApplication({
  fullName,
  email,
  instagramHandle,
  websiteUrl,
  password,
}) {
  const db = getFirebaseDb();
  const trimmedEmail = email.trim().toLowerCase();
  const url = websiteUrl.trim();
  await addDoc(collection(db, "brands"), {
    fullName: fullName.trim(),
    email: trimmedEmail,
    instagramHandle: normalizeInstagramHandle(instagramHandle),
    websiteUrl: url || null,
    password,
    createdAt: Timestamp.now(),
  });
}
