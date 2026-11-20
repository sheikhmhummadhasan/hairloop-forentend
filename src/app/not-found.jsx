"use client";

import React from "react";
import { AlertTriangle, ArrowLeft, Home } from "lucide-react";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#09090b] flex items-center justify-center px-6">
      <div className="max-w-lg w-full text-center">
        <div className="relative inline-flex items-center justify-center mb-8">
          <h1 className="text-[140px] md:text-[180px] font-black leading-none text-gray-800">
            404
          </h1>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center backdrop-blur-sm">
              <AlertTriangle
                size={40}
                className="text-red-400"
              />
            </div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Page not found
        </h2>

        <p className="text-gray-400 mt-4 leading-7">
          The page you are looking for does not exist or may have been moved.
          Please check the URL or return to your dashboard.
        </p>

        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-800 text-gray-300 hover:bg-gray-800 transition"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition"
          >
            <Home size={18} />
            Home
          </button>
        </div>

        <div className="mt-12 text-sm text-gray-600">
          Error Code: 404
        </div>
      </div>
    </div>
  );
};

export default NotFound;