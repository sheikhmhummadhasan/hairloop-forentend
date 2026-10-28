"use client";
import React, { useState } from "react";
import {
  Download,
  Code,
  User,
  Database,
  Cloud,
  Cpu,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const APPLICATIONS = [
  {
    id: "1",
    title: "Senior Frontend Engineer",
    type: "Full-time • Remote",
    company: "Stark Industries",
    applied: "2 hours ago",
    status: "Applied",
    statusColor: "text-gray-300 border-gray-600 bg-gray-800/50",
    icon: Code,
    iconBg: "bg-gray-800 text-gray-300",
  },
  {
    id: "2",
    title: "Product Designer",
    type: "Contract • Hybrid",
    company: "Cyberdyne Systems",
    applied: "1 day ago",
    status: "Review",
    statusColor: "text-amber-400 border-amber-600/50 bg-amber-950/30",
    icon: User,
    iconBg: "bg-gray-800 text-gray-300",
  },
  {
    id: "3",
    title: "Lead Data Scientist",
    type: "Full-time • On-site",
    company: "Wayne Enterprises",
    applied: "4 days ago",
    status: "Shortlisted",
    statusColor: "text-emerald-400 border-emerald-600/50 bg-emerald-950/30",
    icon: Database,
    iconBg: "bg-gray-800 text-gray-300",
  },
  {
    id: "4",
    title: "Cloud Architect",
    type: "Full-time • Remote",
    company: "Oscorp Tech",
    applied: "1 week ago",
    status: "Rejected",
    statusColor: "text-rose-400 border-rose-600/50 bg-rose-950/30",
    icon: Cloud,
    iconBg: "bg-rose-900/50 text-rose-300",
  },
  {
    id: "5",
    title: "AI Research Engineer",
    type: "Full-time • Hybrid",
    company: "Hooli Corp",
    applied: "2 weeks ago",
    status: "Offered",
    statusColor: "text-purple-400 border-purple-600/50 bg-purple-950/30",
    icon: Cpu,
    iconBg: "bg-gray-800 text-gray-300",
  },
];

const MyApplicationsContent = () => {
  const [activeTab, setActiveTab] = useState("Active");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="p-6 md:p-8 space-y-6 max-w-6xl w-full mx-auto font-sans text-gray-200">
      
      {/* HEADER TITLE & ACTIONS */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            My Applications
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Track your job applications and interview progress in real-time.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Active / Archived Toggle */}
          <div className="bg-[#16181d] border border-[#232731] p-1 rounded-xl flex items-center gap-1">
            <button
              onClick={() => setActiveTab("Active")}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition ${
                activeTab === "Active"
                  ? "bg-[#232731] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setActiveTab("Archived")}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition ${
                activeTab === "Archived"
                  ? "bg-[#232731] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Archived
            </button>
          </div>

          {/* Export PDF Button */}
          <button className="bg-white hover:bg-gray-200 text-black font-semibold px-4 py-2 rounded-xl text-xs flex items-center gap-2 transition shadow-sm">
            <Download className="w-3.5 h-3.5" />
            <span>Export PDF</span>
          </button>
        </div>
      </div>

      {/* STATS OVERVIEW CARDS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#16181d] border border-[#232731] rounded-2xl p-4">
          <span className="text-xs text-gray-400 font-medium block mb-1">
            Total Applied
          </span>
          <span className="text-2xl font-bold text-white">24</span>
        </div>

        <div className="bg-[#16181d] border border-[#232731] rounded-2xl p-4">
          <span className="text-xs text-gray-400 font-medium block mb-1">
            Shortlisted
          </span>
          <span className="text-2xl font-bold text-white">8</span>
        </div>

        <div className="bg-[#16181d] border border-[#232731] rounded-2xl p-4">
          <span className="text-xs text-gray-400 font-medium block mb-1">
            Interviews
          </span>
          <span className="text-2xl font-bold text-amber-500">3</span>
        </div>

        <div className="bg-[#16181d] border border-[#232731] rounded-2xl p-4">
          <span className="text-xs text-gray-400 font-medium block mb-1">
            Success Rate
          </span>
          <span className="text-2xl font-bold text-emerald-500">12%</span>
        </div>
      </div>

      {/* APPLICATIONS TABLE */}
      <div className="bg-[#16181d] border border-[#232731] rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-300">
            <thead className="bg-[#121418] text-gray-400 font-medium border-b border-[#232731]">
              <tr>
                <th className="py-3.5 px-5">Job Title</th>
                <th className="py-3.5 px-5">Company</th>
                <th className="py-3.5 px-5">Applied</th>
                <th className="py-3.5 px-5">Status</th>
                <th className="py-3.5 px-5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#232731]">
              {APPLICATIONS.map((app) => {
                const IconComponent = app.icon;
                return (
                  <tr
                    key={app.id}
                    className="hover:bg-[#1c1f26] transition-colors"
                  >
                    {/* Job Title & Icon */}
                    <td className="py-4 px-5">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${app.iconBg}`}
                        >
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-bold text-white text-sm">
                            {app.title}
                          </p>
                          <p className="text-[11px] text-gray-500">
                            {app.type}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Company */}
                    <td className="py-4 px-5 font-medium text-gray-300">
                      {app.company}
                    </td>

                    {/* Applied Time */}
                    <td className="py-4 px-5 text-gray-400">
                      {app.applied}
                    </td>

                    {/* Status Badge */}
                    <td className="py-4 px-5">
                      <span
                        className={`px-3 py-1 rounded-full text-[11px] font-semibold border ${app.statusColor}`}
                      >
                        {app.status}
                      </span>
                    </td>

                    {/* Action Link */}
                    <td className="py-4 px-5 text-right">
                      <button className="text-gray-400 hover:text-white font-medium text-xs transition">
                        Details
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* TABLE FOOTER / PAGINATION */}
        <div className="p-4 border-t border-[#232731] flex items-center justify-between text-xs text-gray-500">
          <span>Showing 1-5 of 24 applications</span>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="p-1 rounded hover:text-white disabled:opacity-30 disabled:hover:text-gray-500"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => setCurrentPage(1)}
              className={`w-6 h-6 rounded flex items-center justify-center font-semibold text-xs ${
                currentPage === 1
                  ? "bg-white text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              1
            </button>

            <button
              onClick={() => setCurrentPage(2)}
              className={`w-6 h-6 rounded flex items-center justify-center font-semibold text-xs ${
                currentPage === 2
                  ? "bg-white text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              2
            </button>

            <button
              onClick={() => setCurrentPage(3)}
              className={`w-6 h-6 rounded flex items-center justify-center font-semibold text-xs ${
                currentPage === 3
                  ? "bg-white text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              3
            </button>

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, 3))}
              disabled={currentPage === 3}
              className="p-1 rounded hover:text-white disabled:opacity-30 disabled:hover:text-gray-500"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MyApplicationsContent;