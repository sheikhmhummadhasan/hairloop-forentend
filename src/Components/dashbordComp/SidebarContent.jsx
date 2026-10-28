"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  BriefcaseBusiness,
  Users,
  Settings,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashbord", icon: LayoutDashboard },
  { name: "My Company", href: "/dashbord/company", icon: Building2 },
  { name: "Manage Jobs", href: "/dashbord/jobs", icon: BriefcaseBusiness },
  { name: "Applications", href: "/dashbord/applications", icon: Users },
  { name: "Settings", href: "/dashbord/settings", icon: Settings },
];

export function SidebarContent({ setMenuOpen }) {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/dashbord") return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <div className="flex h-full flex-col justify-between bg-[#141414] text-white">
      <div>
        {/* Brand Logo */}
        <Link
          href="/dashbord"
          onClick={() => setMenuOpen && setMenuOpen(false)}
          className="flex h-[68px] items-center border-b border-[#292929] px-5 text-xl font-extrabold tracking-tight"
        >
          HireLoop<span className="text-sky-400">.</span>
        </Link>

        {/* User Profile Header */}
        <div className="border-b border-[#292929] px-4 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-indigo-600 text-xs font-bold text-white">
              AS
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Alex Sterling</p>
              <p className="text-[10px] text-gray-500">Recruiter</p>
            </div>
          </div>
          <span className="mt-3 inline-block rounded bg-[#292929] px-2 py-1 text-[9px] font-semibold text-gray-300 uppercase">
            PREMIUM ACCOUNT
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1 px-3 py-6">
          {navigation.map(({ name, href, icon: Icon }) => {
            const active = isActive(href);

            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen && setMenuOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`flex items-center gap-3 border-r-[3px] px-3 py-3 text-xs transition ${
                  active
                    ? "border-white bg-[#292929] text-white font-semibold"
                    : "border-transparent text-gray-400 hover:bg-[#222222] hover:text-white"
                }`}
              >
                <Icon size={15} strokeWidth={1.7} />
                {name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Profile Info */}
      <div className="border-t border-[#292929] p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#303030] text-[10px] font-bold text-white">
            AS
          </div>
          <div>
            <p className="text-[11px] font-medium text-white">Alex Sterling</p>
            <p className="text-[9px] text-gray-500">Premium Account</p>
          </div>
        </div>
      </div>
    </div>
  );
}