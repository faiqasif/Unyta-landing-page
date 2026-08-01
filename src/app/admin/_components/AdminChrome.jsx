"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import { useAdminAuth } from "./AdminAuthProvider";
import {
  BrandsIcon,
  CreatorsIcon,
  DashboardIcon,
  DemoIcon,
  MenuIcon,
  SettingsIcon,
  SignOutIcon,
} from "./icons";

const NAV_ITEMS = [
  { href: "/admin", label: "Dashboard", icon: DashboardIcon },
  { href: "/admin/creators", label: "Creators", icon: CreatorsIcon },
  { href: "/admin/brands", label: "Brands", icon: BrandsIcon },
  { href: "/admin/demo-requests", label: "Demo Requests", icon: DemoIcon },
  { href: "/admin/settings", label: "Settings", icon: SettingsIcon },
];

function isActive(pathname, href) {
  return href === "/admin" ? pathname === "/admin" : pathname.startsWith(href);
}

function initialsOf(name, email) {
  const source = (name || email || "A").trim();
  const parts = source.split(/[\s@._-]+/).filter(Boolean);
  return (parts[0]?.[0] ?? "A").concat(parts[1]?.[0] ?? "").toUpperCase();
}

function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F5F2F1]">
      <div className="flex flex-col items-center gap-4">
        <span className="h-8 w-8 animate-spin rounded-full border-2 border-[#741717]/25 border-t-[#741717]" />
        <p className="font-sans text-sm text-[#741717]">Loading admin…</p>
      </div>
    </div>
  );
}

function NotAuthorizedScreen({ onSignOut, email }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F5F2F1] px-6">
      <div className="w-full max-w-[440px] rounded-[24px] border border-stone-200 bg-white p-8 text-center shadow-xl">
        <h1 className="font-cormorant text-[28px] font-medium uppercase tracking-tight text-[#22000C]">
          No admin access
        </h1>
        <p className="mt-2 font-sans text-sm font-light text-stone-600">
          {email ? <span className="font-medium text-[#741717]">{email}</span> : "This account"} is
          signed in but has no record in the admin directory.
        </p>
        <button
          onClick={onSignOut}
          className="mt-6 h-[48px] w-full rounded-full bg-[#741717] font-sans text-sm font-medium text-white transition-all hover:bg-[#541409] active:scale-[0.98]"
        >
          Sign out
        </button>
      </div>
    </div>
  );
}

function SidebarContent({ pathname, profile, user, onNavigate, onSignOut }) {
  return (
    <div className="flex h-full flex-col bg-[#541409] text-warm-white">
      <div className="flex items-center gap-2 px-6 pt-7 pb-6">
        <Image
          src="/image.png"
          alt=""
          width={32}
          height={34}
          quality={100}
          className="shrink-0"
          style={{ width: "auto", height: "auto" }}
        />
        <Image
          src="/footer-logo.png"
          alt="Unyta"
          width={104}
          height={24}
          quality={100}
          className="shrink-0"
          style={{ width: "auto", height: "auto" }}
        />
        <span className="ml-1 rounded-full border border-white/20 bg-white/10 px-2 py-0.5 font-sans text-[10px] font-medium uppercase tracking-[0.12em] text-warm-white/90">
          Admin
        </span>
      </div>

      <nav className="flex flex-1 flex-col gap-1 px-3">
        {NAV_ITEMS.map((item) => {
          const active = isActive(pathname, item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex items-center gap-3 rounded-full px-4 py-3 font-sans text-sm transition-colors",
                active
                  ? "bg-white/12 font-medium text-white"
                  : "font-light text-warm-white/70 hover:bg-white/8 hover:text-white"
              )}
            >
              <Icon className="shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-white/10 px-4 py-5">
        <div className="flex items-center gap-3 px-2">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/12 font-sans text-xs font-semibold text-white">
            {initialsOf(profile?.name, user?.email)}
          </span>
          <span className="min-w-0">
            <span className="block truncate font-sans text-sm font-medium text-white">
              {profile?.name || "Admin"}
            </span>
            <span className="block truncate font-sans text-xs font-light text-warm-white/60">
              {user?.email}
            </span>
          </span>
        </div>
        <button
          onClick={onSignOut}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-2.5 font-sans text-sm font-light text-warm-white/80 transition-colors hover:bg-white/10 hover:text-white"
        >
          <SignOutIcon width={18} height={18} />
          Sign out
        </button>
      </div>
    </div>
  );
}

export function AdminChrome({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const { status, user, profile, signOut } = useAdminAuth();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isLoginRoute = pathname === "/admin/login";

  useEffect(() => {
    if (status === "signed-out" && !isLoginRoute) router.replace("/admin/login");
    if (status === "signed-in" && isLoginRoute) router.replace("/admin");
  }, [status, isLoginRoute, router]);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  async function handleSignOut() {
    try {
      await signOut();
      toast.success("Signed out.");
      router.replace("/admin/login");
    } catch {
      toast.error("Could not sign out. Try again.");
    }
  }

  if (isLoginRoute) {
    return status === "loading" || status === "signed-in" ? <LoadingScreen /> : children;
  }

  if (status === "loading" || status === "signed-out") return <LoadingScreen />;

  if (status === "not-authorized") {
    return <NotAuthorizedScreen email={user?.email} onSignOut={handleSignOut} />;
  }

  return (
    <div className="min-h-screen bg-[#F5F2F1] font-sans text-[#22000C]">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[268px] lg:block">
        <SidebarContent
          pathname={pathname}
          profile={profile}
          user={user}
          onSignOut={handleSignOut}
        />
      </aside>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            aria-label="Close menu"
            onClick={() => setDrawerOpen(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          <div className="absolute inset-y-0 left-0 w-[280px] max-w-[85vw] shadow-2xl">
            <SidebarContent
              pathname={pathname}
              profile={profile}
              user={user}
              onNavigate={() => setDrawerOpen(false)}
              onSignOut={handleSignOut}
            />
          </div>
        </div>
      )}

      <div className="lg:pl-[268px]">
        <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-stone-200 bg-[#F5F2F1]/90 px-5 py-3.5 backdrop-blur-md lg:hidden">
          <button
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-[#541409]"
          >
            <MenuIcon />
          </button>
          <Image
            src="/logo-brown.png"
            alt="Unyta"
            width={36}
            height={40}
            quality={100}
            style={{ height: "auto" }}
          />
          <span className="ml-auto font-sans text-xs font-medium uppercase tracking-[0.12em] text-[#741717]">
            Admin
          </span>
        </header>

        <main className="mx-auto w-full max-w-[1280px] px-5 py-7 sm:px-8 sm:py-10">{children}</main>
      </div>
    </div>
  );
}
