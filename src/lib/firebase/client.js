import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

function readConfig() {
  return {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  };
}

export function getFirebaseApp() {
  if (typeof window === "undefined") {
    throw new Error("Firebase client SDK must run in the browser.");
  }
  const config = readConfig();
  if (!config.apiKey || !config.projectId) {
    throw new Error(
      "Missing Firebase configuration. Add NEXT_PUBLIC_FIREBASE_* keys to .env.local (see .env.example)."
    );
  }
  return getApps().length ? getApp() : initializeApp(config);
}

export function getFirebaseDb() {
  return getFirestore(getFirebaseApp());
}

/** Call once on the client to enable GA4 (optional). Safe to no-op if analytics is unsupported. */
export async function initFirebaseAnalytics() {
  if (typeof window === "undefined") return;
  const config = readConfig();
  if (!config.apiKey || !config.projectId || !config.measurementId) return;
  try {
    const { getAnalytics, isSupported } = await import("firebase/analytics");
    if (!(await isSupported())) return;
    const app = getFirebaseApp();
    getAnalytics(app);
  } catch {
    // Missing/invalid config or analytics blocked
  }
}
