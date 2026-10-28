"use client";
import React from "react";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const PaymentSuccessModal = ({
  amount = "$20.00",
  sessionId = "cs_test_a1048jT8JC10x98...",
  onDashboardClick,
}) => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 font-sans">
      <div className="w-full max-w-md bg-[#16181d] border border-[#252830] rounded-2xl p-6 md:p-8 text-center shadow-2xl relative overflow-hidden">
        {/* Glow effect background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Success Icon */}
        <div className="mx-auto w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center mb-4 text-emerald-400">
          <Check className="w-6 h-6 stroke-[3]" />
        </div>

        {/* Badge */}
        <div className="inline-block mb-3">
          <span className="bg-[#1e232d] text-emerald-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-900/50">
            UPGRADE SUCCESSFUL
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
          Welcome to Hireloop Pro
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-300 mb-2">
          Your payment of{" "}
          <span className="font-semibold text-white">{amount}</span> was
          received perfectly.
        </p>

        <p className="text-xs text-gray-400 leading-relaxed mb-6">
          All advanced premium recruiting modules are unlocked on your account.{" "}
          <span className="text-emerald-400 font-medium">
            You may need to re-authenticate to see the effect.
          </span>
        </p>

        {/* Session ID Box */}
        <div className="bg-[#111216] border border-[#252830] rounded-xl p-3 flex items-center justify-between gap-2 mb-6 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Session ID Verified</span>
          </div>
          <code className="bg-[#181a20] px-2.5 py-1 rounded border border-[#2a2e3a] text-[11px] text-gray-400 font-mono overflow-hidden text-ellipsis whitespace-nowrap max-w-[150px]">
            {sessionId}
          </code>
        </div>

        {/* Action Button */}
        {onDashboardClick ? (
          <button
            onClick={onDashboardClick}
            className="w-full bg-white hover:bg-gray-100 text-black font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 text-sm shadow-lg"
          >
            <span>Go to Workspace Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <Link
            href={user.role === "recruiter" ? "/dashbord" : "/seekerdashbord"}
            className="w-full bg-white hover:bg-gray-100 text-black font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 text-sm shadow-lg"
          >
            <span>Go to Workspace Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default PaymentSuccessModal;
