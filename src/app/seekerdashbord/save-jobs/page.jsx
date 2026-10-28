"use client";
import React, { useState } from "react";
import {
  Bookmark,
  Briefcase,
  MapPin,
  DollarSign,
  Clock,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

const SAVED_JOBS = [
  {
    id: "1",
    title: "Senior Product Designer",
    company: "TECHFLOW",
    location: "San Francisco, CA (Hybrid)",
    salary: "$160k - $200k + Equity",
    savedTime: "Saved 2 hours ago",
    closingSoon: "Closes in 3 days",
    status: "apply",
    isBookmarked: true,
    logoBg: "bg-purple-950/60 text-purple-400 border-purple-800/40",
  },
  {
    id: "2",
    title: "Frontend Engineer",
    company: "VERCEL",
    location: "Remote, Global",
    salary: "$140k - $180k",
    savedTime: "Saved yesterday",
    status: "apply",
    isBookmarked: true,
    logoBg: "bg-blue-950/60 text-blue-400 border-blue-800/40",
  },
  {
    id: "3",
    title: "Staff UI Researcher",
    company: "LINEAR",
    location: "New York, NY (On-site)",
    salary: "$180k - $220k",
    savedTime: "Saved 3 days ago",
    status: "draft",
    isBookmarked: true,
    logoBg: "bg-cyan-950/60 text-cyan-400 border-cyan-800/40",
  },
  {
    id: "4",
    title: "Full Stack Developer",
    company: "META",
    location: "Menlo Park, CA (Hybrid)",
    salary: "$150k - $210k + Bonus",
    savedTime: "Saved 5 days ago",
    status: "apply",
    isBookmarked: true,
    logoBg: "bg-indigo-950/60 text-indigo-400 border-indigo-800/40",
  },
  {
    id: "5",
    title: "Design Systems Lead",
    company: "SPOTIFY",
    location: "Remote, USA",
    salary: "",
    savedTime: "Closed yesterday",
    status: "closed",
    isBookmarked: false,
    logoBg: "bg-emerald-950/60 text-emerald-400 border-emerald-800/40",
  },
];

const SavedJobsContent = () => {
  const [activeTab, setActiveTab] = useState("All Saved");
  const [sortBy, setSortBy] = useState("Recently Saved");

  return (
    <div className="p-6 md:p-10 space-y-8 max-w-6xl w-full mx-auto font-sans text-gray-200">
      
      {/* TITLE & STATS CARDS */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Saved Jobs
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Manage and track your bookmarked opportunities.
          </p>
        </div>

        {/* Stat Cards */}
        <div className="flex items-center gap-4">
          {/* Total Saved */}
          <div className="bg-[#15171d] border border-[#21252f] rounded-2xl p-4 px-5 flex items-center gap-4 shadow-lg min-w-[160px]">
            <div className="w-10 h-10 rounded-xl bg-[#1e222c] border border-[#2c3240] flex items-center justify-center text-white shrink-0">
              <Bookmark className="w-5 h-5 fill-white text-white" />
            </div>
            <div>
              <span className="text-[11px] font-medium text-gray-400 block uppercase tracking-wider">
                Total Saved
              </span>
              <span className="text-xl font-bold text-white">24</span>
            </div>
          </div>

          {/* Closing Soon */}
          <div className="bg-[#15171d] border border-[#21252f] rounded-2xl p-4 px-5 flex items-center gap-4 shadow-lg min-w-[160px]">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-medium text-gray-400 block uppercase tracking-wider">
                Closing Soon
              </span>
              <span className="text-xl font-bold text-white">3</span>
            </div>
          </div>
        </div>
      </div>

      {/* FILTER TABS & SORT DROPDOWN BAR */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#14161b] p-2 rounded-2xl border border-[#21252f]">
        <div className="flex flex-wrap items-center gap-1">
          {["All Saved", "Design (8)", "Engineering (12)", "Product (4)"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                activeTab === tab
                  ? "bg-[#1f2430] text-white border border-[#2e3546]"
                  : "text-gray-400 hover:text-white hover:bg-[#1a1d24]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 px-3 text-xs text-gray-400">
          <span>Sort by:</span>
          <div className="relative inline-block">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#1a1d25] text-white font-medium pr-8 pl-3 py-1.5 rounded-xl border border-[#282d3a] appearance-none cursor-pointer focus:outline-none transition"
            >
              <option value="Recently Saved">Recently Saved</option>
              <option value="Salary: High to Low">Salary: High to Low</option>
              <option value="Closing Soon">Closing Soon</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" />
          </div>
        </div>
      </div>

      {/* SAVED JOBS LIST */}
      <div className="space-y-4">
        {SAVED_JOBS.map((job) => (
          <div
            key={job.id}
            className="group bg-[#15171d] hover:bg-[#181b22] border border-[#21252f] hover:border-[#2f3544] rounded-2xl p-5 md:p-6 transition-all duration-200 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            {/* Left Section */}
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-base border ${job.logoBg} shrink-0`}>
                <Briefcase className="w-5 h-5" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {job.title}
                  </h3>
                  <span className="bg-[#1f232d] text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded border border-[#2b313e] uppercase">
                    {job.company}
                  </span>
                </div>

                <p className="text-xs text-gray-400 font-medium mb-3 flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-gray-500" />
                    {job.location}
                  </span>
                </p>

                {job.salary && (
                  <div className="inline-flex items-center gap-1.5 bg-[#1b1e26] text-gray-300 text-xs font-medium px-3 py-1 rounded-lg border border-[#262b37]">
                    <DollarSign className="w-3.5 h-3.5 text-gray-400" />
                    <span>{job.salary}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center justify-between md:justify-end gap-4 border-t md:border-t-0 pt-4 md:pt-0 border-[#20242e]">
              <div className="text-right">
                <span className={`text-xs block font-medium ${job.status === "closed" ? "text-rose-500" : "text-gray-400"}`}>
                  {job.savedTime}
                </span>
                {job.closingSoon && (
                  <span className="text-[11px] text-amber-400 font-semibold block mt-0.5">
                    {job.closingSoon}
                  </span>
                )}
              </div>

              <button className={`p-2.5 rounded-xl border transition ${
                job.isBookmarked
                  ? "bg-[#1f232d] border-[#2e3444] text-amber-400"
                  : "bg-[#121418] border-[#20242e] text-gray-500 hover:text-white"
              }`}>
                <Bookmark className={`w-4 h-4 ${job.isBookmarked ? "fill-amber-400" : ""}`} />
              </button>

              {job.status === "apply" && (
                <Link
                  href={`/jobs/${job.id}`}
                  className="bg-white hover:bg-gray-100 text-black font-semibold px-5 py-2.5 rounded-xl text-xs md:text-sm shadow-md transition whitespace-nowrap"
                >
                  Apply Now
                </Link>
              )}

              {job.status === "draft" && (
                <Link
                  href={`/jobs/${job.id}`}
                  className="bg-[#202531] hover:bg-[#282f3f] text-gray-200 border border-[#2e3648] font-semibold px-4 py-2.5 rounded-xl text-xs md:text-sm transition whitespace-nowrap"
                >
                  Draft Started
                </Link>
              )}

              {job.status === "closed" && (
                <button className="bg-rose-950/30 hover:bg-rose-950/50 text-rose-400 border border-rose-900/40 font-semibold px-4 py-2.5 rounded-xl text-xs md:text-sm transition whitespace-nowrap">
                  Remove from List
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* LOAD MORE */}
      <div className="text-center pt-2">
        <button className="text-xs font-semibold text-gray-400 hover:text-white bg-[#15171d] hover:bg-[#1a1e27] border border-[#21252f] px-6 py-3 rounded-xl transition inline-flex items-center gap-2">
          <span>Load More</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};

export default SavedJobsContent;