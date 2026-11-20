
"use client";

import React from "react";
import { MessageCircle, Search, Inbox } from "lucide-react";

const MessagesPage = () => {
  return (
    <div className="p-6 md:p-10 space-y-8 max-w-6xl w-full mx-auto font-sans text-gray-200">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Messages
          </h1>
          <p className="text-gray-400 mt-2">
            Connect and communicate with employers.
          </p>
        </div>

        <div className="relative w-full md:w-72">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full bg-gray-900 border border-gray-800 rounded-xl pl-10 pr-4 py-3 text-sm text-white outline-none focus:border-gray-600 transition placeholder:text-gray-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 border border-gray-800 rounded-2xl overflow-hidden min-h-[500px] bg-gray-900/20">
        
        <div className="border-r border-gray-800">
          <div className="p-5 border-b border-gray-800">
            <h2 className="font-semibold text-white">All Conversations</h2>
            <p className="text-sm text-gray-500 mt-1">
              Your inbox
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center py-20 px-6">
            <div className="w-16 h-16 rounded-2xl bg-gray-800 flex items-center justify-center mb-4">
              <Inbox size={28} className="text-gray-500" />
            </div>

            <h3 className="text-white font-medium">
              No conversations
            </h3>

            <p className="text-gray-500 text-sm mt-2 max-w-xs">
              Your conversations with recruiters and employers will appear here.
            </p>
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col items-center justify-center text-center p-8">
          <div className="w-20 h-20 rounded-2xl bg-gray-800 flex items-center justify-center mb-6">
            <MessageCircle size={36} className="text-gray-400" />
          </div>

          <h2 className="text-xl font-semibold text-white">
            Your inbox is empty
          </h2>

          <p className="text-gray-400 mt-3 max-w-md leading-6">
            When an employer or recruiter sends you a message, you will be able
            to view and reply to it here.
          </p>

          <div className="mt-8 flex items-center gap-2 text-sm text-gray-500">
            <MessageCircle size={16} />
            <span>Start connecting with employers</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MessagesPage;
