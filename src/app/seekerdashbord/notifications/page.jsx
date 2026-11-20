
"use client";

import React from "react";
import { Bell, BellRing, CheckCheck } from "lucide-react";

const NotificationsPage = () => {
  return (
    <div className="p-6 md:p-10 space-y-8 max-w-6xl w-full mx-auto font-sans text-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Notifications
          </h1>
          <p className="text-gray-400 mt-2">
            Stay updated with your latest activities.
          </p>
        </div>

        <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition">
          <CheckCheck size={18} />
          <span className="hidden sm:block">Mark all as read</span>
        </button>
      </div>

      <div className="flex items-center gap-3 border-b border-gray-800 pb-4">
        <button className="px-4 py-2 rounded-xl bg-white text-black text-sm font-medium">
          All
        </button>

        <button className="px-4 py-2 rounded-xl text-gray-400 hover:bg-gray-800 hover:text-white transition text-sm">
          Unread
        </button>
      </div>

      <div className="min-h-[400px] flex flex-col items-center justify-center text-center border border-gray-800 rounded-2xl bg-gray-900/30 px-6 py-12">
        <div className="relative mb-6">
          <div className="w-20 h-20 rounded-2xl bg-gray-800 flex items-center justify-center">
            <Bell size={34} className="text-gray-400" />
          </div>

          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
            <BellRing size={15} className="text-blue-400" />
          </div>
        </div>

        <h2 className="text-xl font-semibold text-white">
          No notifications yet
        </h2>

        <p className="text-gray-400 max-w-sm mt-3 leading-6">
          You are all caught up! We will notify you when theres something new
          regarding your jobs, applications, or account.
        </p>

        <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
          <CheckCheck size={16} />
          <span>You are up to date</span>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
