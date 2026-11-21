"use client";

import { usePathname } from "next/navigation";
import {
  Search,
  Bell,
} from "lucide-react";
import DashboardMobileMenu from "@/Components/dashbordComp/DashboardMobileMenu";

const navigation = [
  { name: "Dashboard", href: "/dashbord" },
  { name: "My Company", href: "/dashbord/company" },
  { name: "Manage Jobs", href: "/dashbord/jobs" },
  { name: "Applications", href: "/dashbord/applications" },
  { name: "Settings", href: "/dashbord/settings" },
];

const DashboardHeader = () => {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/dashbord") return pathname === href;

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const currentPage = navigation.find((item) => isActive(item.href));

  return (
    <header className="sticky top-0 z-20 flex h-[68px] items-center justify-between gap-3 border-b border-[#303030] bg-[#121212] px-4 sm:px-6">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <DashboardMobileMenu />

        <h1 className="truncate text-sm font-medium">
          {currentPage?.name || "Dashboard"}
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden h-9 w-56 items-center gap-2 rounded-full border border-[#303030] bg-[#191919] px-3 sm:flex">
          <Search size={14} className="text-gray-500" />

          <input
            type="search"
            placeholder="Search companies..."
            className="w-full bg-transparent text-xs outline-none placeholder:text-gray-600"
          />
        </div>

        <button
          type="button"
          aria-label="Notifications"
          className="p-2 text-gray-400 hover:text-white"
        >
          <Bell size={16} />
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;