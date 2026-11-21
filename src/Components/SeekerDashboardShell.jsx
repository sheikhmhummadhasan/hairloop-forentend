"use client";

import { useState, useEffect, useRef } from "react";
import {
  LayoutDashboard,
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
import { useSession } from "@/lib/auth-client";

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
  { name: "Messages", href: "/seekerdashbord/messages", icon: Mail },
  { name: "Notifications", href: "/seekerdashbord/notifications", icon: Bell },
];

const SeekerDashboardShell = ({ children }) => {
  const pathname = usePathname();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const [messageOpen, setMessageOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const messageRef = useRef(null);
  const notificationRef = useRef(null);

  const isActive = (href) => pathname === href;

  const { data: session, error } = useSession();

  const userName = session?.user?.name;
  const userImage = session?.user?.image;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (messageRef.current && !messageRef.current.contains(event.target)) {
        setMessageOpen(false);
      }

      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
              {collapsed ? (
                <ChevronRight size={20} />
              ) : (
                <ChevronLeft size={20} />
              )}
            </span>
          </button>
        </div>

        <div
          className={`mb-6 flex items-center gap-3 rounded-xl border border-gray-800 bg-gray-900/60 px-3 py-3 ${
            collapsed ? "justify-center" : ""
          }`}
        >
          {userImage ? (
            <img
              src={userImage}
              alt={userName}
              className="h-10 w-10 shrink-0 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 font-bold text-white">
              {userName?.charAt(0)?.toUpperCase() || "S"}
            </div>
          )}

          {!collapsed && (
            <div className="min-w-0">
              <h4 className="truncate text-sm font-semibold text-white">
                {userName}
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
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <div ref={messageRef} className="relative">
              <button
                type="button"
                aria-label="Messages"
                aria-expanded={messageOpen}
                onClick={() => {
                  setMessageOpen(!messageOpen);
                  setNotificationOpen(false);
                }}
                className={`relative rounded-lg p-2 transition ${
                  messageOpen
                    ? "bg-gray-800 text-white"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <Mail size={20} />

                <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
              </button>

              {messageOpen && (
                <div className="absolute right-0 top-12 z-50 w-[320px] overflow-hidden rounded-2xl border border-gray-800 bg-[#18181b] shadow-2xl sm:w-[360px]">
                  <div className="flex items-center justify-between border-b border-gray-800 px-5 py-4">
                    <h3 className="font-semibold text-white">Messages</h3>

                    <span className="rounded-full bg-indigo-500/10 px-2.5 py-1 text-xs font-medium text-indigo-400">
                      Inbox
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-center px-6 py-10 text-center">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-800">
                      <Mail className="h-6 w-6 text-gray-400" />
                    </div>

                    <h4 className="font-semibold text-white">
                      No messages yet
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      Your messages will appear here when you receive them.
                    </p>
                  </div>

                  <Link
                    href="/seekerdashbord/messages"
                    onClick={() => setMessageOpen(false)}
                    className="block border-t border-gray-800 px-5 py-3 text-center text-sm font-medium text-indigo-400 transition hover:bg-white/5"
                  >
                    View All Messages
                  </Link>
                </div>
              )}
            </div>

            <div ref={notificationRef} className="relative">
              <button
                type="button"
                aria-label="Notifications"
                aria-expanded={notificationOpen}
                onClick={() => {
                  setNotificationOpen(!notificationOpen);
                  setMessageOpen(false);
                }}
                className={`relative rounded-lg p-2 transition ${
                  notificationOpen
                    ? "bg-gray-800 text-white"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <Bell size={20} />

                <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-green-500" />
              </button>

              {notificationOpen && (
                <div className="absolute right-0 top-12 z-50 w-[320px] overflow-hidden rounded-2xl border border-gray-800 bg-[#18181b] shadow-2xl sm:w-[360px]">
                  <div className="flex items-center justify-between border-b border-gray-800 px-5 py-4">
                    <h3 className="font-semibold text-white">Notifications</h3>

                    <span className="rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-400">
                      Updates
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-center px-6 py-10 text-center">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-800">
                      <Bell className="h-6 w-6 text-gray-400" />
                    </div>

                    <h4 className="font-semibold text-white">
                      Youre all caught up
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      Your notifications and important updates will appear here.
                    </p>
                  </div>

                  <Link
                    href="/seekerdashbord/notifications"
                    onClick={() => setNotificationOpen(false)}
                    className="block border-t border-gray-800 px-5 py-3 text-center text-sm font-medium text-indigo-400 transition hover:bg-white/5"
                  >
                    View All Notifications
                  </Link>
                </div>
              )}
            </div>

            {userImage ? (
              <img
                src={userImage}
                alt={userName}
                className="h-10 w-10 shrink-0 rounded-full object-cover"
              />
            ) : (
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 font-bold text-white">
                {userName?.charAt(0)?.toUpperCase() || "S"}
              </div>
            )}
          </div>
        </header>

        <main className="min-w-0 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
};

export default SeekerDashboardShell;