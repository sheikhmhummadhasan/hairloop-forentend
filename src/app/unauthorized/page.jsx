"use client";

import React from "react";
import { ShieldAlert, LockKeyhole, ArrowLeft, Home } from "lucide-react";
import { useRouter } from "next/navigation";

const UnauthorizedPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#09090b] px-4 py-10">
      <div className="w-full max-w-lg rounded-2xl border border-red-500/20 bg-[#111113] p-8 md:p-10 text-center shadow-2xl shadow-red-500/5">

        <div className="flex justify-center mb-6">
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-red-500/10 border border-red-500/20">
            <ShieldAlert size={48} className="text-red-500" />
            <span className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-red-600 border-4 border-[#111113]">
              <LockKeyhole size={14} className="text-white" />
            </span>
          </div>
        </div>

        <div className="mb-4">
          <span className="inline-flex items-center rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-red-400">
            Unauthorized Access
          </span>
        </div>

        <h1 className="text-3xl font-bold text-white mb-3">
          Access Denied
        </h1>

        <p className="text-gray-400 leading-relaxed mb-6">
          You do not have permission to access this page.
          This area is restricted to authorized users only.
        </p>

        <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5 mb-8 text-left">
          <div className="flex items-start gap-3">
            <ShieldAlert className="mt-0.5 shrink-0 text-red-500" size={20} />

            <div>
              <h3 className="font-semibold text-red-400 mb-2">
                Security Warning
              </h3>

              <p className="text-sm leading-relaxed text-gray-300">
                Unauthorized access attempts are strictly prohibited.
                If you attempt to access restricted areas again,
                <span className="font-semibold text-red-400">
                  {" "}your account may be blocked.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => router.back()}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-gray-300 transition hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

          <button
            onClick={() => router.push("/")}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
          >
            <Home size={18} />
            Home Page
          </button>
        </div>

        <p className="mt-8 text-xs text-gray-600">
          Error Code: 403 · Forbidden
        </p>
      </div>
    </div>
  );
};

export default UnauthorizedPage;