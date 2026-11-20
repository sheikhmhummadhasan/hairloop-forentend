"use client";
import { applicationForJob, deleteSave } from "@/lib/mechine";
import {
  Bookmark,
  Briefcase,
  Clock,
  DollarSign,
  MapPin,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const SavedJobs = ({ SavedJob }) => {
  const router = useRouter();

  const handeldelete = async (id) => {
    const deleteSaved = await deleteSave(id);
    if (deleteSave) {
      router.refresh();
    }
  };
  return (
    <div>
      {/* পরিবর্তন: SavedJob থাকলে jobs দেখাবে, না থাকলে empty state দেখাবে */}
      {SavedJob?.length > 0 ? (
        SavedJob.map((e) => {
          const {
            companyName,
            experience,
            jobTitle,
            location,
            salary,
            verifiedBadge,
            thisJobId,
            createdAT,
            _id,
          } = e;

          return (
            <div
              key={_id}
              className="group w-full rounded-xl border border-[#303030] bg-[#1e1e1e] p-4 sm:p-5 transition-all duration-300 hover:border-[#454545] mt-3 hover:bg-[#222222]"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#3a3a3a] bg-[#151515]">
                    <Briefcase className="h-5 w-5 text-white" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-semibold text-white sm:text-lg">
                        {jobTitle}
                      </h3>

                      <span className="rounded bg-[#353535] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-gray-300">
                        {companyName}
                      </span>

                      {verifiedBadge && (
                        <span className="rounded bg-blue-500/10 px-2 py-0.5 text-[9px] font-semibold text-blue-400">
                          Verified
                        </span>
                      )}
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#353535] px-2.5 py-1 text-[11px] text-gray-300">
                        <MapPin className="h-3 w-3" />
                        {location}
                      </span>

                      {salary && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#353535] px-2.5 py-1 text-[11px] text-gray-300">
                          <DollarSign className="h-3 w-3" />
                          {salary}
                        </span>
                      )}
                    </div>

                    {experience && (
                      <p className="mt-2 text-xs text-gray-500">
                        Experience: {experience}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#333333] pt-3 sm:justify-end sm:border-0 sm:pt-0">
                  <div className="text-left sm:text-right">
                    {createdAT && (
                      <p className="text-[11px] text-gray-400">
                        <Clock className="mr-1 inline h-3 w-3" />
                        Saved {new Date(createdAT).toLocaleDateString()}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={() => handeldelete(_id)}
                    title="Remove saved job"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#353535] text-gray-400 transition hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-400 disabled:opacity-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>

                  <Link
                    href={`/browse/${thisJobId}`}
                    className="rounded-lg bg-white px-5 py-2.5 text-center text-xs font-semibold text-black transition hover:bg-gray-200 sm:text-sm"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        // পরিবর্তন: কোনো saved job না থাকলে এই box দেখাবে
        <div className="mt-6 flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#353535] bg-[#1e1e1e] px-6 py-12 text-center">
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-400/20 bg-orange-400/10">
            <Bookmark className="h-8 w-8 text-orange-300" />
          </div>

          <h2 className="text-xl font-bold text-white">
            No Saved Jobs Available
          </h2>

          <p className="mt-2 max-w-sm text-sm leading-6 text-gray-400">
            You haven't saved any jobs yet. Browse available jobs and bookmark
            the opportunities you're interested in.
          </p>

          <Link
            href="/browse"
            className="mt-6 rounded-xl bg-orange-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-orange-300"
          >
            Browse Jobs
          </Link>
        </div>
      )}
    </div>
  );
};

export default SavedJobs;
