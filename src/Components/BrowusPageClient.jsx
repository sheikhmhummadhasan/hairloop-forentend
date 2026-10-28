"use client";
import React, { useState, useMemo } from "react";
import {
  Search,
  Bookmark,
  Clock,
  DollarSign,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Zap,
  Flame,
  Briefcase,
  Star,
  Check,
  X,
  SlidersHorizontal,
} from "lucide-react";
import Link from "next/link";

// Sample initial job data matching the design
const INITIAL_JOBS = [
  {
    id: "1",
    title: "Senior Product Designer",
    company: "TechFlow Systems",
    location: "San Francisco, CA (Remote)",
    salary: "$140k - $180k",
    jobType: "Full-time",
    level: "Senior",
    badge: { text: "Easy Apply", type: "easyApply" },
    isBookmarked: false,
    logoText: "TF",
    logoBg: "bg-emerald-950/60 text-emerald-400 border-emerald-800/40",
    dateAdded: "2026-10-28",
  },
  {
    id: "2",
    title: "Lead Frontend Engineer",
    company: "FinGrid Solutions",
    location: "New York, NY",
    salary: "$165k - $210k",
    jobType: "Hybrid",
    level: "Lead",
    badge: null,
    isBookmarked: false,
    logoText: "FG",
    logoBg: "bg-cyan-950/60 text-cyan-400 border-cyan-800/40",
    dateAdded: "2026-10-27",
  },
  {
    id: "3",
    title: "UX Researcher",
    company: "CreativeStudio",
    location: "Austin, TX",
    salary: "$110k - $145k",
    jobType: "Contract",
    level: "Mid-Level",
    badge: null,
    isBookmarked: false,
    logoText: "CS",
    logoBg: "bg-purple-950/60 text-purple-400 border-purple-800/40",
    dateAdded: "2026-10-25",
  },
  {
    id: "4",
    title: "Machine Learning Engineer",
    company: "HealthAI Corp",
    location: "Boston, MA (Remote)",
    salary: "$180k - $250k",
    jobType: "Full-time",
    level: "Senior",
    badge: { text: "Hot Job", type: "hotJob" },
    isBookmarked: false,
    logoText: "HA",
    logoBg: "bg-amber-950/60 text-amber-400 border-amber-800/40",
    dateAdded: "2026-10-28",
  },
  {
    id: "5",
    title: "Senior Backend Developer",
    company: "CloudScale Tech",
    location: "Seattle, WA (Remote)",
    salary: "$150k - $195k",
    jobType: "Full-time",
    level: "Senior",
    badge: { text: "Easy Apply", type: "easyApply" },
    isBookmarked: true,
    logoText: "CS",
    logoBg: "bg-blue-950/60 text-blue-400 border-blue-800/40",
    dateAdded: "2026-10-26",
  },
  {
    id: "6",
    title: "Full Stack Consultant",
    company: "Apex Digital",
    location: "Chicago, IL",
    salary: "$120k - $160k",
    jobType: "Freelance",
    level: "Mid-Level",
    badge: null,
    isBookmarked: false,
    logoText: "AD",
    logoBg: "bg-rose-950/60 text-rose-400 border-rose-800/40",
    dateAdded: "2026-10-24",
  },
];

const BrowusJobsPage = () => {
  const [jobs, setJobs] = useState(INITIAL_JOBS);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSearch, setActiveSearch] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [sortBy, setSortBy] = useState("Most Recent");
  const [currentPage, setCurrentPage] = useState(1);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Toggle bookmark status for a job
  const toggleBookmark = (id) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === id ? { ...job, isBookmarked: !job.isBookmarked } : job,
      ),
    );
  };

  // Toggle filter checkbox
  const handleTypeChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
    setCurrentPage(1);
  };

  // Execute search action
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setActiveSearch(searchQuery);
    setCurrentPage(1);
  };

  // Filter and sort jobs based on user controls
  const filteredJobs = useMemo(() => {
    return jobs
      .filter((job) => {
        const queryMatch =
          activeSearch.trim() === "" ||
          job.title.toLowerCase().includes(activeSearch.toLowerCase()) ||
          job.company.toLowerCase().includes(activeSearch.toLowerCase()) ||
          job.location.toLowerCase().includes(activeSearch.toLowerCase());

        const typeMatch =
          selectedTypes.length === 0 || selectedTypes.includes(job.jobType);

        return queryMatch && typeMatch;
      })
      .sort((a, b) => {
        if (sortBy === "Most Recent") {
          return new Date(b.dateAdded) - new Date(a.dateAdded);
        }
        if (sortBy === "Salary: High to Low") {
          const getHighSalary = (str) =>
            parseInt(str.split("-")[1]?.replace(/[^0-9]/g, "") || "0");
          return getHighSalary(b.salary) - getHighSalary(a.salary);
        }
        return 0;
      });
  }, [jobs, activeSearch, selectedTypes, sortBy]);

  return (
    <div className="min-h-screen bg-[#0e0f12] text-gray-200 font-sans p-4 md:p-8 flex flex-col items-center">
      <div className="w-full max-w-6xl space-y-6">
        {/* TOP SEARCH HEADER */}
        <div className="bg-[#181a1f] border border-[#272a30] rounded-2xl p-3 md:p-4 shadow-xl">
          <form
            onSubmit={handleSearchSubmit}
            className="flex flex-col sm:flex-row gap-3 items-center"
          >
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by job title, keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#121316] text-white pl-12 pr-4 py-3.5 rounded-xl border border-[#2d3139] focus:outline-none focus:border-gray-500 placeholder-gray-500 text-sm md:text-base transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveSearch("");
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto bg-white text-black hover:bg-gray-200 font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 text-sm md:text-base whitespace-nowrap shadow-lg hover:shadow-white/10"
            >
              Search Jobs
            </button>
          </form>
        </div>

        {/* MAIN CONTAINER (FILTERS + JOB LIST) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          {/* MOBILE FILTER TOGGLE BUTTON */}
          <div className="lg:hidden flex justify-between items-center bg-[#181a1f] p-4 rounded-xl border border-[#272a30]">
            <span className="font-semibold text-white">Filters</span>
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="flex items-center gap-2 bg-[#252830] text-gray-200 px-3 py-1.5 rounded-lg text-sm"
            >
              <SlidersHorizontal className="w-4 h-4" />
              {showMobileFilters ? "Hide" : "Show Filters"}
            </button>
          </div>

          {/* SIDEBAR FILTERS */}
          <aside
            className={`bg-[#181a1f] border border-[#272a30] rounded-2xl p-6 shadow-xl space-y-6 ${
              showMobileFilters ? "block" : "hidden lg:block"
            }`}
          >
            <div className="flex justify-between items-center pb-2 border-b border-[#2d3139]">
              <h2 className="text-xl font-bold text-white tracking-wide">
                Filters
              </h2>
              {selectedTypes.length > 0 && (
                <button
                  onClick={() => setSelectedTypes([])}
                  className="text-xs text-gray-400 hover:text-white underline transition"
                >
                  Reset
                </button>
              )}
            </div>

            {/* Job Type Section */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 mb-4 tracking-wider uppercase">
                Job Type
              </h3>
              <div className="space-y-3">
                {/* Full-time Option */}
                <label className="flex items-center justify-between cursor-pointer group select-none">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={selectedTypes.includes("Full-time")}
                        onChange={() => handleTypeChange("Full-time")}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${
                          selectedTypes.includes("Full-time")
                            ? "bg-white border-white text-black"
                            : "bg-[#121316] border-[#383d47] group-hover:border-gray-500"
                        }`}
                      >
                        {selectedTypes.includes("Full-time") && (
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        )}
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition">
                      Full-time
                    </span>
                  </div>
                  <span className="text-xs font-medium text-gray-500">
                    1.2k
                  </span>
                </label>

                {/* Contract Option */}
                <label className="flex items-center justify-between cursor-pointer group select-none">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={selectedTypes.includes("Contract")}
                        onChange={() => handleTypeChange("Contract")}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${
                          selectedTypes.includes("Contract")
                            ? "bg-white border-white text-black"
                            : "bg-[#121316] border-[#383d47] group-hover:border-gray-500"
                        }`}
                      >
                        {selectedTypes.includes("Contract") && (
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        )}
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition">
                      Contract
                    </span>
                  </div>
                  <span className="text-xs font-medium text-gray-500">
                    432
                  </span>
                </label>

                {/* Freelance Option */}
                <label className="flex items-center justify-between cursor-pointer group select-none">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={selectedTypes.includes("Freelance")}
                        onChange={() => handleTypeChange("Freelance")}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${
                          selectedTypes.includes("Freelance")
                            ? "bg-white border-white text-black"
                            : "bg-[#121316] border-[#383d47] group-hover:border-gray-500"
                        }`}
                      >
                        {selectedTypes.includes("Freelance") && (
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        )}
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition">
                      Freelance
                    </span>
                  </div>
                  <span className="text-xs font-medium text-gray-500">
                    156
                  </span>
                </label>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT AREA */}
          <main className="lg:col-span-3 space-y-4">
            {/* RESULTS HEADER & SORTING */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 px-1">
              <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                Found{" "}
                <span className="text-white">
                  {filteredJobs.length === 6 ? "1,248" : filteredJobs.length}
                </span>{" "}
                Professional Jobs
              </h1>

              <div className="flex items-center space-x-2 text-sm text-gray-400 self-end sm:self-auto">
                <span>Sort by:</span>
                <div className="relative inline-block">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-transparent text-white font-semibold pr-8 pl-1 py-1 appearance-none cursor-pointer focus:outline-none hover:text-gray-200 transition"
                  >
                    <option
                      value="Most Recent"
                      className="bg-[#181a1f] text-white"
                    >
                      Most Recent
                    </option>
                    <option
                      value="Salary: High to Low"
                      className="bg-[#181a1f] text-white"
                    >
                      Salary: High to Low
                    </option>
                  </select>
                  <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" />
                </div>
              </div>
            </div>

            {/* JOB CARDS LIST */}
            <div className="flex flex-col gap-4">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="group bg-[#181a1f] border border-[#272a30] hover:border-[#383d47] rounded-2xl p-5 md:p-6 transition-all duration-200 shadow-lg relative"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex gap-4 items-start">
                        {/* Company Logo Avatar */}
                        <Link href={`/browse/${job.id}`}>
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-base border ${job.logoBg} shrink-0 hover:opacity-80 transition-opacity`}
                          >
                            {job.logoText}
                          </div>
                        </Link>

                        {/* Title and Company Info */}
                        <div>
                          <Link href={`/browse/${job.id}`}>
                            <h3 className="text-lg md:text-xl font-bold text-white hover:text-blue-400 transition-colors">
                              {job.title}
                            </h3>
                          </Link>
                          <p className="text-sm text-gray-400 font-medium mt-1">
                            {job.company}{" "}
                            <span className="text-gray-600 px-1">•</span>{" "}
                            {job.location}
                          </p>
                        </div>
                      </div>

                      {/* Bookmark Button */}
                      <button
                        onClick={() => toggleBookmark(job.id)}
                        className={`p-2 rounded-xl border transition-all ${
                          job.isBookmarked
                            ? "bg-amber-500/10 border-amber-500/30 text-amber-400"
                            : "bg-[#121316] border-[#2d3139] text-gray-400 hover:text-white hover:border-gray-500"
                        }`}
                        title={
                          job.isBookmarked
                            ? "Remove Bookmark"
                            : "Bookmark Job"
                        }
                      >
                        <Bookmark
                          className={`w-5 h-5 ${
                            job.isBookmarked ? "fill-amber-400" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* BADGES, TAGS & DETAILS BUTTON SECTION */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mt-5 pt-1">
                      <div className="flex flex-wrap items-center gap-2">
                        {/* Salary Tag */}
                        <div className="flex items-center gap-1.5 bg-[#20232b] text-gray-300 text-xs md:text-sm font-medium px-3 py-1.5 rounded-lg border border-[#2d3139]">
                          <DollarSign className="w-3.5 h-3.5 text-gray-400" />
                          <span>{job.salary}</span>
                        </div>

                        {/* Job Type Tag */}
                        <div className="flex items-center gap-1.5 bg-[#20232b] text-gray-300 text-xs md:text-sm font-medium px-3 py-1.5 rounded-lg border border-[#2d3139]">
                          <Clock className="w-3.5 h-3.5 text-gray-400" />
                          <span>{job.jobType}</span>
                        </div>

                        {/* Job Level Tag */}
                        {job.level && !job.badge && (
                          <div className="flex items-center gap-1.5 bg-[#20232b] text-gray-300 text-xs md:text-sm font-medium px-3 py-1.5 rounded-lg border border-[#2d3139]">
                            <Star className="w-3.5 h-3.5 text-gray-400" />
                            <span>{job.level}</span>
                          </div>
                        )}

                        {/* Special Badge - Easy Apply */}
                        {job.badge?.type === "easyApply" && (
                          <div className="flex items-center gap-1.5 bg-emerald-950/40 text-emerald-400 text-xs md:text-sm font-medium px-3 py-1.5 rounded-lg border border-emerald-800/40">
                            <Zap className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
                            <span>{job.badge.text}</span>
                          </div>
                        )}

                        {/* Special Badge - Hot Job */}
                        {job.badge?.type === "hotJob" && (
                          <div className="flex items-center gap-1.5 bg-amber-950/40 text-amber-400 text-xs md:text-sm font-medium px-3 py-1.5 rounded-lg border border-amber-800/40">
                            <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
                            <span>{job.badge.text}</span>
                          </div>
                        )}
                      </div>

                      {/* Dedicated View Details Button */}
                      <Link
                        href={`/browse/${job.id}`}
                        className="ml-auto inline-flex items-center gap-1.5 px-4 py-1.5 text-xs md:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-[#181a1f] border border-[#272a30] rounded-2xl p-12 text-center text-gray-400">
                  <Briefcase className="w-12 h-12 mx-auto text-gray-600 mb-3" />
                  <p className="text-lg font-medium text-gray-300">
                    No jobs match your filter criteria.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedTypes([]);
                      setActiveSearch("");
                      setSearchQuery("");
                    }}
                    className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded-lg text-sm hover:bg-gray-200 transition"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
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

              <button
                onClick={() => setCurrentPage(1)}
                className={`w-10 h-10 rounded-xl font-semibold text-sm transition ${
                  currentPage === 1
                    ? "bg-white text-black"
                    : "bg-[#181a1f] text-gray-300 border border-[#272a30] hover:border-gray-500 hover:text-white"
                }`}
              >
                1
              </button>

              <button
                onClick={() => setCurrentPage(2)}
                className={`w-10 h-10 rounded-xl font-semibold text-sm transition ${
                  currentPage === 2
                    ? "bg-white text-black"
                    : "bg-[#181a1f] text-gray-300 border border-[#272a30] hover:border-gray-500 hover:text-white"
                }`}
              >
                2
              </button>

              <button
                onClick={() => setCurrentPage(3)}
                className={`w-10 h-10 rounded-xl font-semibold text-sm transition ${
                  currentPage === 3
                    ? "bg-white text-black"
                    : "bg-[#181a1f] text-gray-300 border border-[#272a30] hover:border-gray-500 hover:text-white"
                }`}
              >
                3
              </button>

              <span className="text-gray-500 px-1 font-bold">...</span>

              <button
                onClick={() => setCurrentPage(42)}
                className={`w-10 h-10 rounded-xl font-semibold text-sm transition ${
                  currentPage === 42
                    ? "bg-white text-black"
                    : "bg-[#181a1f] text-gray-300 border border-[#272a30] hover:border-gray-500 hover:text-white"
                }`}
              >
                42
              </button>

              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, 42))}
                disabled={currentPage === 42}
                className="w-10 h-10 rounded-xl bg-[#181a1f] border border-[#272a30] flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 disabled:opacity-40 disabled:cursor-not-allowed transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default BrowusJobsPage;