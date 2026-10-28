"use client";
import React from "react";
import {
  Download,
  CreditCard,
  CheckCircle2,
  Plus,
  HelpCircle,
} from "lucide-react";

const BILLING_HISTORY = [
  {
    id: "1",
    date: "Sep 24, 2023",
    plan: "Professional Tier",
    amount: "$29.00",
    trxId: "TRX-948102-HL",
    status: "PAID",
  },
  {
    id: "2",
    date: "Aug 24, 2023",
    plan: "Professional Tier",
    amount: "$29.00",
    trxId: "TRX-771920-HL",
    status: "PAID",
  },
  {
    id: "3",
    date: "Jul 24, 2023",
    plan: "Professional Tier",
    amount: "$29.00",
    trxId: "TRX-231906-HL",
    status: "PAID",
  },
  {
    id: "4",
    date: "Jun 24, 2023",
    plan: "Standard Tier",
    amount: "$12.00",
    trxId: "TRX-220199-HL",
    status: "PAID",
  },
];

const BillingContent = () => {
  return (
    <div className="p-6 md:p-10 space-y-8 max-w-6xl w-full mx-auto font-sans text-gray-200">
      
      {/* HEADER TITLE */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          Subscription & Billing
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Manage your professional tier features, recurring payments, and billing history.
        </p>
      </div>

      {/* TOP SECTION: Current Plan & Payment Method */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Current Plan Card (Takes 2 Columns) */}
        <div className="lg:col-span-2 bg-[#15171d] border border-[#21252f] rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
          <div>
            {/* Current Plan Badge */}
            <div className="inline-block mb-4">
              <span className="bg-[#232732] text-gray-200 text-[10px] font-bold px-3 py-1 rounded tracking-widest uppercase border border-[#313645]">
                CURRENT PLAN
              </span>
            </div>

            {/* Plan Title & Price Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Professional Tier
                </h2>
                <p className="text-xs text-gray-400 mt-1">
                  Unlock global job insights and unlimited applications.
                </p>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-3xl font-extrabold text-white">$29</span>
                <span className="text-xs text-gray-400 font-medium">/mo</span>
                <p className="text-[11px] text-gray-500 mt-0.5">
                  Next billing date: Oct 24, 2023
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-6 pt-2 border-t border-[#21252f]">
              <div className="flex items-center gap-2.5 text-xs text-gray-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Unlimited Applications</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-gray-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Premium Job Insights</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-gray-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Priority Candidate Badge</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-gray-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct Recruiter Messaging</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-2">
            <button className="bg-white hover:bg-gray-100 text-black font-semibold px-5 py-2.5 rounded-xl text-xs md:text-sm transition shadow-sm">
              Upgrade Plan
            </button>
            <button className="bg-[#1e222c] hover:bg-[#272c38] text-gray-200 border border-[#2c3240] font-semibold px-5 py-2.5 rounded-xl text-xs md:text-sm transition">
              Manage Plan
            </button>
          </div>
        </div>

        {/* Payment Method Card (Takes 1 Column) */}
        <div className="bg-[#15171d] border border-[#21252f] rounded-2xl p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-white tracking-wide">
                Payment Method
              </h3>
              <span className="bg-[#1e222c] text-gray-400 text-[10px] font-semibold px-2 py-0.5 rounded border border-[#2c3240] uppercase tracking-wider">
                SECURE BY STRIPE
              </span>
            </div>

            {/* Virtual Credit Card Box */}
            <div className="bg-gradient-to-tr from-[#1b1e28] to-[#111319] border border-[#2c3342] rounded-xl p-4 shadow-inner space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="w-9 h-6 bg-amber-500/80 rounded-[4px] border border-amber-400/40 flex items-center px-1">
                  <div className="w-3 h-2 bg-amber-300/60 rounded-[1px]" />
                </div>
                <span className="font-extrabold italic text-sm tracking-wider text-white">
                  VISA
                </span>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-gray-300 font-mono text-sm tracking-widest">
                  <span>••••</span>
                  <span>••••</span>
                  <span>••••</span>
                  <span className="text-white font-bold">4242</span>
                </div>
              </div>

              <div className="flex items-end justify-between pt-1">
                <div>
                  <span className="text-[9px] text-gray-500 uppercase tracking-wider block">
                    CARD HOLDER
                  </span>
                  <span className="text-xs font-bold text-gray-200 uppercase tracking-tight">
                    ALEXANDER SEEKER
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[9px] text-gray-500 uppercase tracking-wider block">
                    EXPIRES
                  </span>
                  <span className="text-xs font-mono text-gray-200 font-semibold">
                    12/25
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Add New Payment Method Button */}
          <button className="w-full mt-6 bg-[#1b1e28] hover:bg-[#222633] text-gray-300 border border-[#2c3342] font-semibold py-2.5 rounded-xl text-xs transition flex items-center justify-center gap-2">
            <Plus className="w-3.5 h-3.5" />
            <span>Add New Payment Method</span>
          </button>
        </div>

      </div>

      {/* BILLING HISTORY SECTION */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white tracking-tight">
            Billing History
          </h2>
          <button className="text-xs font-semibold text-gray-300 hover:text-white bg-[#15171d] hover:bg-[#1a1e27] border border-[#21252f] px-3.5 py-2 rounded-xl transition flex items-center gap-1.5">
            <Download className="w-3.5 h-3.5" />
            <span>Export PDF</span>
          </button>
        </div>

        {/* History Table */}
        <div className="bg-[#15171d] border border-[#21252f] rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-gray-300">
              <thead className="bg-[#121418] text-gray-400 font-medium border-b border-[#21252f]">
                <tr>
                  <th className="py-3.5 px-6">Date</th>
                  <th className="py-3.5 px-6">Plan</th>
                  <th className="py-3.5 px-6">Amount</th>
                  <th className="py-3.5 px-6">Transaction ID</th>
                  <th className="py-3.5 px-6 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#21252f]">
                {BILLING_HISTORY.map((item) => (
                  <tr key={item.id} className="hover:bg-[#1a1d26] transition-colors">
                    <td className="py-4 px-6 text-gray-300 font-medium">
                      {item.date}
                    </td>
                    <td className="py-4 px-6 text-gray-300 font-medium">
                      {item.plan}
                    </td>
                    <td className="py-4 px-6 text-gray-300 font-semibold">
                      {item.amount}
                    </td>
                    <td className="py-4 px-6 font-mono text-gray-400 text-[11px]">
                      {item.trxId}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider border text-emerald-400 border-emerald-800/40 bg-emerald-950/40">
                        • {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* SUPPORT FOOTER BOX */}
      <div className="bg-[#15171d] border border-[#21252f] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div>
          <h3 className="text-sm font-bold text-white">
            Need help with your invoice?
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">
            Our support team is available 24/7 to help you resolve any payment issues or clarify billing details.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button className="bg-[#1e222c] hover:bg-[#272c38] text-gray-200 border border-[#2c3240] font-semibold px-4 py-2.5 rounded-xl text-xs transition">
            Contact Support
          </button>
          <a
            href="#"
            className="text-xs font-semibold text-gray-400 hover:text-white underline transition"
          >
            Read Refund Policy
          </a>
        </div>
      </div>

    </div>
  );
};

export default BillingContent;