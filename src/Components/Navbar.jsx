"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  const handleLogout = async () => {
    try {
      const { error } = await authClient.signOut();

      if (error) {
        toast.error(error.message || "Logout failed!");
        return;
      }
      toast.success("Logout successfully done!");
      setMenuOpen(false);
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    }
  };

  const navLinks = [
    { href: "/browse", label: "Browse Jobs" },
    { href: "/pricing", label: "Pricing" },
    { href: "/company", label: "Company" },
  ];

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-[1320px] items-center justify-between rounded-2xl border border-white/10 bg-[#222222]/95 px-4 py-3 shadow-xl backdrop-blur-xl sm:px-6">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={90}
            height={50}
            priority
            className="h-auto w-[72px] sm:w-[90px]"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          {isPending ? null : user ? (
            <div className="flex items-center gap-3">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={user.name || "User"}
                  width={40}
                  height={40}
                  unoptimized
                  className="h-10 w-10 rounded-full border border-white/20 object-cover"
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5c53fe] font-semibold text-white">
                 {user.name?.charAt(0)?.toUpperCase() || "U"}
                </div>
              )}

              <span className="max-w-32 truncate text-sm font-medium text-white">
               Hi !, {user.name}
              </span>

              <button
                onClick={handleLogout}
                className="rounded-xl border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-red-400 hover:bg-red-500/10 hover:text-red-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                href="/signin"
                className="text-sm font-semibold text-[#8c85ff] transition hover:text-white"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="rounded-xl bg-[#5c53fe] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-[#4940e8]"
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition hover:bg-white/10 md:hidden"
        >
          <span className="text-2xl">{menuOpen ? "×" : "☰"}</span>
        </button>
      </nav>

      {menuOpen && (
        <div className="mx-auto mt-2 max-w-[1320px] space-y-4 rounded-2xl border border-white/10 bg-[#222222] p-5 shadow-xl md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-gray-300 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="h-px bg-white/10" />

          {isPending ? null : user ? (
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name || "User"}
                    width={44}
                    height={44}
                    unoptimized
                    className="h-11 w-11 rounded-full border border-white/20 object-cover"
                  />
                ) : (
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#5c53fe] font-semibold text-white">
                    {user.name?.charAt(0)?.toUpperCase() || "U"}
                  </div>
                )}

                <div className="min-w-0">
                  <p className="truncate font-semibold text-white">
                    {user.name}
                  </p>
                  <p className="text-xs text-gray-400">Logged in</p>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="w-full rounded-xl border border-red-400/30 px-4 py-3 text-sm font-semibold text-red-300 transition hover:bg-red-500/10"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <Link
                href="/signin"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl border border-white/10 px-4 py-3 text-center font-semibold text-white transition hover:bg-white/5"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl bg-[#5c53fe] px-4 py-3 text-center font-semibold text-white transition hover:bg-[#4940e8]"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
