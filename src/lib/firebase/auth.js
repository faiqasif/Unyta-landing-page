import {
  EmailAuthProvider,
  getAuth,
  onAuthStateChanged as onFirebaseAuthStateChanged,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  updateEmail,
  updatePassword,
  updateProfile,
  verifyBeforeUpdateEmail,
} from "firebase/auth";
import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { getFirebaseApp, getFirebaseDb } from "./client";

export const ADMIN_USERS_COLLECTION = "adminUsers";

export function getFirebaseAuth() {
  return getAuth(getFirebaseApp());
}

export function onAdminAuthStateChanged(callback) {
  return onFirebaseAuthStateChanged(getFirebaseAuth(), callback);
}

export async function signInAdmin({ email, password }) {
  const auth = getFirebaseAuth();
  const credential = await signInWithEmailAndPassword(
    auth,
    email.trim().toLowerCase(),
    password
  );
  const profile = await fetchAdminProfile(credential.user.uid);
  if (!profile) {
    await firebaseSignOut(auth);
    const error = new Error("This account is not an Unyta admin.");
    error.code = "admin/not-authorized";
    throw error;
  }
  return { user: credential.user, profile };
}

export async function signOutAdmin() {
  await firebaseSignOut(getFirebaseAuth());
}

/** Returns the adminUsers doc for a uid, or null when the account is not an admin. */
export async function fetchAdminProfile(uid) {
  try {
    const snapshot = await getDoc(doc(getFirebaseDb(), ADMIN_USERS_COLLECTION, uid));
    if (!snapshot.exists()) return null;
    return { id: snapshot.id, ...snapshot.data() };
  } catch (error) {
    if (error?.code === "permission-denied") return null;
    throw error;
  }
}

async function reauthenticate(currentPassword) {
  const auth = getFirebaseAuth();
  const user = auth.currentUser;
  if (!user) {
    const error = new Error("Your session expired. Sign in again.");
    error.code = "admin/no-session";
    throw error;
  }
  const credential = EmailAuthProvider.credential(user.email, currentPassword);
  await reauthenticateWithCredential(user, credential);
  return user;
}

export async function updateAdminName(name) {
  const auth = getFirebaseAuth();
  const user = auth.currentUser;
  if (!user) {
    const error = new Error("Your session expired. Sign in again.");
    error.code = "admin/no-session";
    throw error;
  }
  const trimmed = name.trim();
  await updateProfile(user, { displayName: trimmed });
  await updateDoc(doc(getFirebaseDb(), ADMIN_USERS_COLLECTION, user.uid), {
    name: trimmed,
    updatedAt: serverTimestamp(),
  });
  return trimmed;
}

/**
 * Changes the sign-in email. Projects with email enumeration protection enabled
 * cannot change an email outright — there we send a verification link to the new
 * address and the change lands once it is confirmed.
 */
export async function updateAdminEmail({ newEmail, currentPassword }) {
  const user = await reauthenticate(currentPassword);
  const trimmed = newEmail.trim().toLowerCase();
  try {
    await updateEmail(user, trimmed);
  } catch (error) {
    if (
      error?.code === "auth/operation-not-allowed" ||
      error?.code === "auth/unverified-email"
    ) {
      await verifyBeforeUpdateEmail(user, trimmed);
      return { status: "verification-sent", email: trimmed };
    }
    throw error;
  }
  await updateDoc(doc(getFirebaseDb(), ADMIN_USERS_COLLECTION, user.uid), {
    email: trimmed,
    updatedAt: serverTimestamp(),
  });
  return { status: "updated", email: trimmed };
}

export async function updateAdminPassword({ newPassword, currentPassword }) {
  const user = await reauthenticate(currentPassword);
  await updatePassword(user, newPassword);
  await updateDoc(doc(getFirebaseDb(), ADMIN_USERS_COLLECTION, user.uid), {
    updatedAt: serverTimestamp(),
  });
}

export function getAuthErrorMessage(error) {
  switch (error?.code) {
    case "auth/invalid-credential":
    case "auth/wrong-password":
    case "auth/user-not-found":
      return "Incorrect email or password.";
    case "auth/invalid-email":
      return "That email address is not valid.";
    case "auth/too-many-requests":
      return "Too many attempts. Wait a moment and try again.";
    case "auth/user-disabled":
      return "This account has been disabled.";
    case "auth/network-request-failed":
      return "Network error. Check your connection and try again.";
    case "auth/requires-recent-login":
      return "For security, sign in again before changing this.";
    case "auth/email-already-in-use":
      return "Another account already uses that email address.";
    case "auth/weak-password":
      return "Choose a password with at least 8 characters.";
    case "auth/operation-not-allowed":
      return "Email/password sign-in is disabled for this Firebase project. Enable it in Firebase Console → Authentication → Sign-in method.";
    case "admin/not-authorized":
      return "This account is not an Unyta admin.";
    case "admin/no-session":
      return "Your session expired. Sign in again.";
    case "permission-denied":
      return "Firestore blocked this request. Publish the rules from firestore.rules in Firebase Console → Firestore → Rules.";
    default:
      return error?.message || "Something went wrong. Please try again.";
  }
}
