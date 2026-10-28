"use client";
import React, { useState } from "react";
import {
  Search,
  CheckCircle,
  Cloud,
  MapPin,
  Briefcase,
  Building2,
  ChevronLeft,
  ChevronRight,
  Cpu,
  HeartPulse,
  Palette,
  Zap,
  Bot,
} from "lucide-react";
import Link from "next/link";

// Sample Companies Data matching your image design
const COMPANIES = [
  {
    id: "1",
    name: "NexaSystems",
    description: "Pioneering autonomous cloud infrastructure for Fortune 500 enterprises and emerging...",
    tags: [
      { label: "Cloud Tech", icon: Cloud },
      { label: "Remote", icon: MapPin },
    ],
    activeJobs: "14 Active Jobs",
    verified: true,
    logoText: "N",
    logoBg: "bg-indigo-950/60 text-indigo-400 border-indigo-800/40",
  },
  {
    id: "2",
    name: "FinEdge Global",
    description: "Leading the fintech revolution with blockchain-integrated banking and real-...",
    tags: [
      { label: "Fintech", icon: Building2 },
      { label: "London", icon: MapPin },
    ],
    activeJobs: "8 Active Jobs",
    verified: true,
    logoText: "F",
    logoBg: "bg-blue-950/60 text-blue-400 border-blue-800/40",
  },
  {
    id: "3",
    name: "BioGen Research",
    description: "Bridging biology and software engineering to develop next-generation personalized...",
    tags: [
      { label: "HealthTech", icon: HeartPulse },
      { label: "Boston", icon: MapPin },
    ],
    activeJobs: "22 Active Jobs",
    verified: true,
    logoText: "B",
    logoBg: "bg-emerald-950/60 text-emerald-400 border-emerald-800/40",
  },
  {
    id: "4",
    name: "CreativeX Studio",
    description: "An award-winning design collective transforming how brands interact with the...",
    tags: [
      { label: "Design", icon: Palette },
      { label: "Berlin", icon: MapPin },
    ],
    activeJobs: "5 Active Jobs",
    verified: true,
    logoText: "C",
    logoBg: "bg-rose-950/60 text-rose-400 border-rose-800/40",
  },
  {
    id: "5",
    name: "Volt Energy",
    description: "Scaling renewable energy storage through advanced lithium-ion engineering and smart",
    tags: [
      { label: "GreenTech", icon: Zap },
      { label: "San Jose", icon: MapPin },
    ],
    activeJobs: "31 Active Jobs",
    verified: true,
    logoText: "V",
    logoBg: "bg-amber-950/60 text-amber-400 border-amber-800/40",
  },
  {
    id: "6",
    name: "Aura AI",
    description: "Revolutionizing mental wellness with privacy-first artificial intelligence and...",
    tags: [
      { label: "AI Wellness", icon: Bot },
      { label: "Remote", icon: MapPin },
    ],
    activeJobs: "11 Active Jobs",
    verified: true,
    logoText: "A",
    logoBg: "bg-purple-950/60 text-purple-400 border-purple-800/40",
  },
];

const BrowseCompaniesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="min-h-screen bg-[#0e0f12] text-gray-200 font-sans p-6 md:p-12 flex flex-col items-center">
      <div className="w-full max-w-6xl space-y-8">
        
        {/* HEADER SECTION */}
        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Browse Companies
          </h1>
          <p className="text-sm md:text-base text-gray-400 max-w-xl">
            Discover the world&apos;s leading technology and creative organizations. Filter by industry, size, and values to find your next professional home.
          </p>
        </div>

        {/* SEARCH BAR */}
        <div className="bg-[#181a1f] border border-[#272a30] rounded-2xl p-3 shadow-xl">
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, industry, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#121316] text-white pl-12 pr-4 py-3.5 rounded-xl border border-[#2d3139] focus:outline-none focus:border-gray-500 placeholder-gray-500 text-sm md:text-base transition-all"
              />
            </div>
            <button
              type="button"
              className="w-full sm:w-auto bg-white text-black hover:bg-gray-200 font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 text-sm md:text-base whitespace-nowrap shadow-lg"
            >
              Find Companies
            </button>
          </div>
        </div>

        {/* COMPANIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANIES.map((company) => (
            <div
              key={company.id}
              className="group bg-[#15171c] hover:bg-[#1a1d24] border border-[#252830] hover:border-[#373c48] rounded-2xl p-6 transition-all duration-200 shadow-xl flex flex-col justify-between relative"
            >
              <div>
                {/* Top: Logo & Verified Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg border ${company.logoBg} shadow-inner`}
                  >
                    {company.logoText}
                  </div>
                  {company.verified && (
                    <div className="flex items-center gap-1 bg-emerald-950/50 border border-emerald-800/40 text-emerald-400 text-xs font-semibold px-2.5 py-1 rounded-full">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>VERIFIED</span>
                    </div>
                  )}
                </div>

                {/* Company Name & Description */}
                <h3 className="text-xl font-bold text-white group-hover:text-gray-100 transition-colors mb-2">
                  {company.name}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-5 line-clamp-2">
                  {company.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {company.tags.map((tag, idx) => {
                    const TagIcon = tag.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-1.5 bg-[#1f232b] text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg border border-[#2d323e]"
                      >
                        <TagIcon className="w-3.5 h-3.5 text-gray-400" />
                        <span>{tag.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Card Footer: Active Jobs & View Openings */}
              <div className="pt-4 border-t border-[#222630] flex items-center justify-between text-xs md:text-sm">
                <span className="text-gray-400 font-medium">
                  {company.activeJobs}
                </span>
                <Link
                  href={`/companies/${company.id}`}
                  className="font-semibold text-white hover:text-blue-400 inline-flex items-center gap-1 transition-colors"
                >
                  View Openings &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION CONTROLS */}
        <div className="flex items-center justify-center gap-2 pt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="w-10 h-10 rounded-xl bg-[#181a1f] border border-[#272a30] flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {[1, 2, 3].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-xl font-semibold text-sm transition ${
                currentPage === page
                  ? "bg-white text-black"
                  : "bg-[#181a1f] text-gray-300 border border-[#272a30] hover:border-gray-500 hover:text-white"
              }`}
            >
              {page}
            </button>
          ))}

          <span className="text-gray-500 px-1 font-bold">...</span>

          <button
            onClick={() => setCurrentPage(12)}
            className={`w-10 h-10 rounded-xl font-semibold text-sm transition ${
              currentPage === 12
                ? "bg-white text-black"
                : "bg-[#181a1f] text-gray-300 border border-[#272a30] hover:border-gray-500 hover:text-white"
            }`}
          >
            12
          </button>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, 12))}
            disabled={currentPage === 12}
            className="w-10 h-10 rounded-xl bg-[#181a1f] border border-[#272a30] flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default BrowseCompaniesPage;