
"use client";

import React, { useState } from "react";
import {
  Search,
  CheckCircle,
  MapPin,
  Building2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const BrowseCompaniesClient = ({ company }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  const companies = Array.isArray(company) ? company : [];

  const filteredCompanies = companies.filter((item) =>
    [
      item.name,
      item.industry,
      item.location,
    ].some((value) =>
      value?.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);

  const paginatedCompanies = filteredCompanies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-[#0e0f12] text-gray-200 font-sans p-6 md:p-12 flex flex-col items-center">
      <div className="w-full max-w-6xl space-y-8">

        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Browse Companies
          </h1>
          <p className="text-sm md:text-base text-gray-400 max-w-xl">
            Discover leading companies and find your next professional home.
          </p>
        </div>

        <div className="bg-[#181a1f] border border-[#272a30] rounded-2xl p-3 shadow-xl">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by name, industry, or location..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full bg-[#121316] text-white pl-12 pr-4 py-3.5 rounded-xl border border-[#2d3139] focus:outline-none focus:border-gray-500 placeholder-gray-500 text-sm md:text-base"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedCompanies.map((item) => (
            <div
              key={item._id}
              className="group bg-[#15171c] hover:bg-[#1a1d24] border border-[#252830] hover:border-[#373c48] rounded-2xl p-6 transition-all duration-200 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg border border-indigo-800/40 bg-indigo-950/60 text-indigo-400">
                    {item.name?.charAt(0).toUpperCase()}
                  </div>

                  {item.verifiedBadge && (
                    <div className="flex items-center gap-1 bg-emerald-950/50 border border-emerald-800/40 text-emerald-400 text-xs font-semibold px-2.5 py-1 rounded-full">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>VERIFIED</span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed mb-5 line-clamp-2">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <div className="flex items-center gap-1.5 bg-[#1f232b] text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg border border-[#2d323e]">
                    <Building2 className="w-3.5 h-3.5 text-gray-400" />
                    {item.industry}
                  </div>

                  <div className="flex items-center gap-1.5 bg-[#1f232b] text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg border border-[#2d323e]">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                    {item.location}
                  </div>
                </div>

                <div className="text-xs text-gray-400 space-y-2 mb-5">
                  <p>Employees: {item.employees}</p>
                  <p>Website: {item.website}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#222630] flex items-center justify-between text-xs md:text-sm">
                <span className="text-gray-400 font-medium">
                  Company Profile
                </span>

                <Link
                  href={`/companies/${item._id}`}
                  className="font-semibold text-white hover:text-blue-400 inline-flex items-center gap-1 transition-colors"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredCompanies.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            No companies found.
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 pt-6">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-xl bg-[#181a1f] border border-[#272a30] flex items-center justify-center disabled:opacity-40"
            >
              <ChevronLeft />
            </button>

            <span className="text-sm text-gray-300">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-xl bg-[#181a1f] border border-[#272a30] flex items-center justify-center disabled:opacity-40"
            >
              <ChevronRight />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default BrowseCompaniesClient;
