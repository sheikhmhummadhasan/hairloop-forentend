
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  Building2,
  BriefcaseBusiness,
  Users,
  Settings,
  Search,
  Bell,
  Plus,
  Menu,
  X,
} from "lucide-react";
import { SidebarContent } from "@/Components/dashbordComp/SidebarContent";

const navigation = [
  { name: "Dashboard", href: "/dashbord", icon: LayoutDashboard },
  { name: "My Company", href: "/dashbord/company", icon: Building2 },
  { name: "Manage Jobs", href: "/dashbord/jobs", icon: BriefcaseBusiness },
  { name: "Applications", href: "/dashbord/applications", icon: Users },
  { name: "Settings", href: "/dashbord/settings", icon: Settings },
];

const DashboardLayout = ({ children }) => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href) => {
    if (href === "/dashbord") return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[220px] flex-col border-r border-[#303030] bg-[#141414] md:flex">
        <SidebarContent />
      </aside>

      
{menuOpen && (
  <div className="fixed inset-0 z-40 md:hidden">
    <button
      type="button"
      aria-label="Close menu overlay"
      onClick={() => setMenuOpen(false)}
      className="absolute inset-0 bg-black/70"
    />

    <aside className="absolute inset-y-0 left-0 flex w-[250px] max-w-[85vw] flex-col overflow-y-auto border-r border-[#303030] bg-[#141414]">
      <div className="flex justify-end p-3">
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          className="rounded p-2 text-gray-400 hover:bg-[#292929] hover:text-white"
        >
          <X size={20} />
        </button>
      </div>

      <SidebarContent />
    </aside>
  </div>
)}


      <div className="min-h-screen md:ml-[220px]">
        <header className="sticky top-0 z-20 flex h-[68px] items-center justify-between gap-3 border-b border-[#303030] bg-[#121212] px-4 sm:px-6">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <button
              type="button"
              aria-label="Open navigation menu"
              onClick={() => setMenuOpen(true)}
              className="rounded p-2 text-gray-400 hover:bg-[#292929] hover:text-white md:hidden"
            >
              <Menu size={20} />
            </button>

            <h1 className="truncate text-sm font-medium">
              {navigation.find((item) => isActive(item.href))?.name || "Dashboard"}
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

        <main className="mx-auto min-h-[calc(100vh-68px)] w-full max-w-[1600px] p-4 sm:p-6 lg:p-8">
          {children}
        </main>

        <Link
          href="/dashbord/jobs"
          aria-label="Add a job"
          className="fixed bottom-6 right-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg transition hover:scale-105"
        >
          <Plus size={22} />
        </Link>
      </div>
    </div>
  );
};

export default DashboardLayout;
