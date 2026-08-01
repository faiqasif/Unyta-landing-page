"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import {
  fetchAdminProfile,
  onAdminAuthStateChanged,
  signInAdmin,
  signOutAdmin,
} from "@/lib/firebase/auth";

const AdminAuthContext = createContext(null);

export function AdminAuthProvider({ children }) {
  const [state, setState] = useState({ status: "loading", user: null, profile: null });

  useEffect(() => {
    let active = true;
    const unsubscribe = onAdminAuthStateChanged(async (user) => {
      if (!user) {
        if (active) setState({ status: "signed-out", user: null, profile: null });
        return;
      }
      const profile = await fetchAdminProfile(user.uid).catch(() => null);
      if (!active) return;
      setState(
        profile
          ? { status: "signed-in", user, profile }
          : { status: "not-authorized", user, profile: null }
      );
    });
    return () => {
      active = false;
      unsubscribe();
    };
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const { user, profile } = await signInAdmin({ email, password });
    setState({ status: "signed-in", user, profile });
  }, []);

  const signOut = useCallback(async () => {
    await signOutAdmin();
    setState({ status: "signed-out", user: null, profile: null });
  }, []);

  const patchProfile = useCallback((patch) => {
    setState((previous) =>
      previous.profile
        ? { ...previous, profile: { ...previous.profile, ...patch } }
        : previous
    );
  }, []);

  return (
    <AdminAuthContext.Provider value={{ ...state, signIn, signOut, patchProfile }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error("useAdminAuth must be used inside AdminAuthProvider.");
  }
  return context;
}
