"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Search,
  FileText,
  CreditCard,
  Settings,
  LogOut,
  Mail,
  Bell,
  Building2,
  BriefcaseBusiness,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navigation = [
  { name: "Dashboard", href: "/seekerdashbord", icon: LayoutDashboard },
  { name: "Jobs", href: "/seekerdashbord/jobs", icon: Building2 },
  {
    name: "Saved Jobs",
    href: "/seekerdashbord/save-jobs",
    icon: BriefcaseBusiness,
  },
  {
    name: "Applications",
    href: "/seekerdashbord/applications",
    icon: FileText,
  },
  { name: "Billing", href: "/seekerdashbord/billing", icon: CreditCard },
  { name: "Settings", href: "/seekerdashbord/settings", icon: Settings },
];

export default function SeekerDashboardLayout({ children }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const isActive = (href) => pathname === href;

  return (
    <div className="min-h-screen bg-[#0f0f11] font-sans text-gray-200">
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/70 md:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex h-dvh flex-col border-r border-gray-800 bg-[#050505] p-4 transition-all duration-300 ${
          collapsed ? "w-20" : "w-64"
        } ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="mb-6 flex items-center justify-between px-2 py-2">
          {!collapsed && (
            <Link
              href="/seekerdashbord"
              className="text-2xl font-bold tracking-wide text-white"
            >
              HireLoop
            </Link>
          )}

          <button
            type="button"
            onClick={() => {
              if (window.innerWidth < 768) {
                setSidebarOpen(false);
              } else {
                setCollapsed(!collapsed);
              }
            }}
            aria-label="Toggle sidebar"
            className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-800 hover:text-white"
          >
            <span className="md:hidden">
              <X size={20} />
            </span>
            <span className="hidden md:block">
              {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
            </span>
          </button>
        </div>

        <div
          className={`mb-6 flex items-center gap-3 rounded-xl border border-gray-800 bg-gray-900/60 px-3 py-3 ${
            collapsed ? "justify-center" : ""
          }`}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 font-bold text-white">
            S
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <h4 className="text-sm font-semibold text-white">
                Seeker Portal
              </h4>
              <p className="text-xs text-gray-400">Professional Tier</p>
            </div>
          )}
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto">
          {navigation.map(({ name, href, icon: Icon }) => {
            const active = isActive(href);

            return (
              <Link
                key={href}
                href={href}
                title={collapsed ? name : undefined}
                onClick={() => setSidebarOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`flex items-center gap-3 rounded-lg border-r-[3px] px-3 py-3 text-sm transition ${
                  active
                    ? "border-indigo-400 bg-[#292929] text-white"
                    : "border-transparent text-gray-400 hover:bg-[#222222] hover:text-white"
                } ${collapsed ? "justify-center" : ""}`}
              >
                <Icon size={18} className="shrink-0" />
                {!collapsed && <span>{name}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="space-y-3 border-t border-gray-800 pt-4">
          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className={`w-full rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-gray-200 ${
              collapsed ? "px-2" : ""
            }`}
          >
            {collapsed ? "+" : "Post Resume"}
          </button>

          <button
            type="button"
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-400 transition hover:bg-gray-800 hover:text-white ${
              collapsed ? "justify-center" : ""
            }`}
          >
            <LogOut size={18} />
            {!collapsed && "Logout"}
          </button>
        </div>
      </aside>

      <div
        className={`min-h-screen transition-all duration-300 ${
          collapsed ? "md:ml-20" : "md:ml-64"
        }`}
      >
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-3 border-b border-gray-800 bg-[#0f0f11]/95 px-4 backdrop-blur sm:px-6 lg:px-8">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open sidebar"
              className="shrink-0 rounded-lg border border-gray-700 p-2 text-white transition hover:bg-gray-800 md:hidden"
            >
              <Menu size={20} />
            </button>

            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Search opportunities..."
                className="w-full rounded-full border border-gray-800 bg-gray-900 py-2 pl-9 pr-4 text-sm text-gray-200 placeholder-gray-500 outline-none focus:border-gray-600"
              />
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <button
              type="button"
              aria-label="Messages"
              className="relative rounded-lg p-2 text-gray-400 transition hover:bg-gray-800 hover:text-white"
            >
              <Mail size={20} />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
            </button>

            <button
              type="button"
              aria-label="Notifications"
              className="relative rounded-lg p-2 text-gray-400 transition hover:bg-gray-800 hover:text-white"
            >
              <Bell size={20} />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-green-500" />
            </button>

            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 bg-indigo-600 text-sm font-semibold text-white">
              S
            </div>
          </div>
        </header>

        <main className="min-w-0 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}