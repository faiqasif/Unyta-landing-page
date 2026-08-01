/**
 * Seeds the Unyta admin user.
 *
 *   npm run seed:admin
 *
 * Creates (or reuses) the Firebase Auth account below and writes its matching
 * record into the `adminUsers` Firestore collection, which is what /admin checks
 * for authorisation.
 *
 * Prerequisites, both one-time, in the Firebase Console for the project in .env:
 *   1. Authentication → Sign-in method → enable Email/Password.
 *   2. Firestore → Rules → publish the rules from firestore.rules.
 *
 * Override the defaults with SEED_ADMIN_EMAIL / SEED_ADMIN_PASSWORD / SEED_ADMIN_NAME.
 * Note that firestore.rules pins adminUsers creation to admin@unyta.com, so a
 * different address needs that rule updated too.
 */
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Timestamp, doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const EMAIL = (process.env.SEED_ADMIN_EMAIL ?? "admin@unyta.com").trim().toLowerCase();
const PASSWORD = process.env.SEED_ADMIN_PASSWORD ?? "password";
const NAME = process.env.SEED_ADMIN_NAME ?? "Unyta Admin";

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

function fail(message, hint) {
  console.error(`\n✗ ${message}`);
  if (hint) console.error(`  ${hint}\n`);
  process.exit(1);
}

if (!config.apiKey || !config.projectId) {
  fail(
    "Missing Firebase configuration.",
    "Run with env loaded: `npm run seed:admin` reads .env via --env-file."
  );
}

const app = initializeApp(config);
const auth = getAuth(app);
const db = getFirestore(app);

console.log(`\nSeeding admin for project "${config.projectId}"…`);
console.log(`  email:    ${EMAIL}`);
console.log(`  password: ${PASSWORD === "password" ? "password (change it after first login)" : "(from SEED_ADMIN_PASSWORD)"}`);

let credential;
let created = false;
try {
  credential = await createUserWithEmailAndPassword(auth, EMAIL, PASSWORD);
  created = true;
  console.log("\n✓ Auth account created.");
} catch (error) {
  if (error.code === "auth/email-already-in-use") {
    console.log("\n· Auth account already exists — signing in instead.");
    try {
      credential = await signInWithEmailAndPassword(auth, EMAIL, PASSWORD);
    } catch (signInError) {
      if (signInError.code === "auth/invalid-credential" || signInError.code === "auth/wrong-password") {
        fail(
          `${EMAIL} already exists with a different password.`,
          "Set SEED_ADMIN_PASSWORD to the current password, or reset it in Firebase Console → Authentication → Users."
        );
      }
      fail(`Could not sign in: ${signInError.code ?? signInError.message}`);
    }
  } else if (error.code === "auth/operation-not-allowed") {
    fail(
      "Email/password sign-in is disabled for this Firebase project.",
      "Enable it in Firebase Console → Authentication → Sign-in method → Email/Password."
    );
  } else if (error.code === "auth/weak-password") {
    fail("Firebase rejected the password (minimum 6 characters).", "Set SEED_ADMIN_PASSWORD to something longer.");
  } else {
    fail(`Could not create the auth account: ${error.code ?? error.message}`);
  }
}

const { user } = credential;

if (created || user.displayName !== NAME) {
  await updateProfile(user, { displayName: NAME });
}

const adminRef = doc(db, "adminUsers", user.uid);
try {
  const existing = await getDoc(adminRef);
  const now = Timestamp.now();
  await setDoc(
    adminRef,
    {
      name: NAME,
      email: EMAIL,
      role: existing.exists() ? (existing.data().role ?? "owner") : "owner",
      createdAt: existing.exists() ? (existing.data().createdAt ?? now) : now,
      updatedAt: now,
    },
    { merge: true }
  );
  console.log(`✓ adminUsers/${user.uid} ${existing.exists() ? "updated" : "created"}.`);
} catch (error) {
  if (error.code === "permission-denied") {
    fail(
      "Firestore blocked the adminUsers write.",
      "Publish the rules from firestore.rules in Firebase Console → Firestore → Rules, then re-run."
    );
  }
  fail(`Could not write adminUsers: ${error.code ?? error.message}`);
}

console.log(`\n✓ Done. Sign in at /admin/login with ${EMAIL}.`);
console.log("  Change the password from /admin/settings after the first login.\n");
process.exit(0);
