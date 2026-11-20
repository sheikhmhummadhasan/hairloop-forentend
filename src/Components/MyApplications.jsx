"use client";

import React from "react";
import {
  Briefcase,
  Clock,
  CheckCircle,
  XCircle,
  FileText,
  MapPin,
  Calendar,
} from "lucide-react";
import Link from "next/link";

const MyApplications = ({
  getPending = [],
  getOffer = [],
  resForRejection = [],
  resById = [],
}) => {
  // পরিবর্তন: সব data array কিনা নিশ্চিত করা হচ্ছে
  const pendingJobs = Array.isArray(getPending) ? getPending : [];
  const offerJobs = Array.isArray(getOffer) ? getOffer : [];
  const rejectedJobs = Array.isArray(resForRejection)
    ? resForRejection
    : [];
  const allJobs = Array.isArray(resById) ? resById : [];

  // পরিবর্তন: সব application এক জায়গায় নিয়ে আসা
  const applications = [
    ...allJobs.map((job) => ({
      ...job,
      applicationStatus: job.status || "Applied",
    })),

    ...pendingJobs.map((job) => ({
      ...job,
      applicationStatus: "Pending",
    })),

    ...offerJobs.map((job) => ({
      ...job,
      applicationStatus: "Selected",
    })),

    ...rejectedJobs.map((job) => ({
      ...job,
      applicationStatus: "Rejected",
    })),
  ];

  // পরিবর্তন: duplicate application remove করা হচ্ছে
  const uniqueApplications = applications.filter(
    (job, index, array) =>
      index === array.findIndex((item) => item._id === job._id)
  );

  // পরিবর্তন: application status অনুযায়ী total count
  const totalApplications = uniqueApplications.length;

  const pendingCount = uniqueApplications.filter(
    (job) => job.applicationStatus?.toLowerCase() === "pending"
  ).length;

  const selectedCount = uniqueApplications.filter(
    (job) =>
      job.applicationStatus?.toLowerCase() === "selected" ||
      job.applicationStatus?.toLowerCase() === "offer" ||
      job.applicationStatus?.toLowerCase() === "offered"
  ).length;

  const rejectedCount = uniqueApplications.filter(
    (job) => job.applicationStatus?.toLowerCase() === "rejected"
  ).length;

  // পরিবর্তন: status অনুযায়ী badge color
  const getStatusStyle = (status) => {
    const currentStatus = status?.toLowerCase();

    if (
      currentStatus === "selected" ||
      currentStatus === "offer" ||
      currentStatus === "offered"
    ) {
      return "bg-green-500/10 text-green-400 border-green-500/20";
    }

    if (currentStatus === "rejected") {
      return "bg-red-500/10 text-red-400 border-red-500/20";
    }

    if (currentStatus === "pending") {
      return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
    }

    return "bg-blue-500/10 text-blue-400 border-blue-500/20";
  };

  return (
    <div className="p-6 md:p-10 space-y-8 max-w-6xl w-full mx-auto font-sans text-gray-200">

      {/* পরিবর্তন: Application dashboard heading */}
      <div>
        <div className="flex items-center gap-2">
          <span className="h-8 w-1 rounded-full bg-orange-400"></span>

          <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            My Applications
          </h1>
        </div>

        <p className="mt-3 pl-3 text-sm text-[#a7a5a4] sm:text-base">
          Track all your job applications and application status.
        </p>
      </div>

      {/* পরিবর্তন: ৪টি statistics card */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {/* Total Applications */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#252525] to-[#181818] p-5 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10">
              <Briefcase className="h-6 w-6 text-blue-400" />
            </div>

            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Total
            </span>
          </div>

          <p className="mt-5 text-sm font-medium text-gray-400">
            Total Applications
          </p>

          <h2 className="mt-1 text-3xl font-black text-white">
            {totalApplications}
          </h2>
        </div>

        {/* Pending */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#252525] to-[#181818] p-5 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-400/20 bg-yellow-400/10">
              <Clock className="h-6 w-6 text-yellow-400" />
            </div>

            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Pending
            </span>
          </div>

          <p className="mt-5 text-sm font-medium text-gray-400">
            Under Review
          </p>

          <h2 className="mt-1 text-3xl font-black text-white">
            {pendingCount}
          </h2>
        </div>

        {/* Selected */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#252525] to-[#181818] p-5 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-green-400/20 bg-green-400/10">
              <CheckCircle className="h-6 w-6 text-green-400" />
            </div>

            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Selected
            </span>
          </div>

          <p className="mt-5 text-sm font-medium text-gray-400">
            Offers Received
          </p>

          <h2 className="mt-1 text-3xl font-black text-white">
            {selectedCount}
          </h2>
        </div>

        {/* Rejected */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#252525] to-[#181818] p-5 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-red-400/20 bg-red-400/10">
              <XCircle className="h-6 w-6 text-red-400" />
            </div>

            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Rejected
            </span>
          </div>

          <p className="mt-5 text-sm font-medium text-gray-400">
            Rejected Applications
          </p>

          <h2 className="mt-1 text-3xl font-black text-white">
            {rejectedCount}
          </h2>
        </div>
      </div>

      {/* পরিবর্তন: Application table */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1e1e1e]">

        <div className="flex flex-col gap-3 border-b border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">
              Application History
            </h2>

            <p className="mt-1 text-sm text-gray-400">
              Review your submitted job applications.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#252525] px-4 py-2">
            <FileText className="h-4 w-4 text-orange-400" />

            <span className="text-sm text-gray-300">
              {totalApplications} Applications
            </span>
          </div>
        </div>

        {/* পরিবর্তন: কোনো application না থাকলে empty state */}
        {uniqueApplications.length === 0 ? (
          <div className="flex min-h-[250px] flex-col items-center justify-center px-6 py-12 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-400/20 bg-orange-400/10">
              <Briefcase className="h-8 w-8 text-orange-400" />
            </div>

            <h3 className="text-lg font-bold text-white">
              No Applications Found
            </h3>

            <p className="mt-2 max-w-sm text-sm leading-6 text-gray-400">
              You havent applied for any jobs yet. Start exploring jobs and
              apply for your next opportunity.
            </p>

            <Link
              href="/browse"
              className="mt-5 rounded-xl bg-orange-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-orange-300"
            >
              Browse Jobs
            </Link>
          </div>
        ) : (
          // পরিবর্তন: responsive table
          <div className="overflow-x-auto">
            <table className="w-full min-w-[750px] text-left">

              <thead className="bg-[#252525]">
                <tr>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Job Position
                  </th>

                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Company
                  </th>

                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Location
                  </th>

                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Applied Date
                  </th>

                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/5">

                {uniqueApplications.map((job, index) => (
                  <tr
                    key={job._id || index}
                    className="transition hover:bg-white/[0.02]"
                  >

                    {/* Job title */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#252525]">
                          <Briefcase className="h-4 w-4 text-orange-400" />
                        </div>

                        <div>
                          <p className="font-semibold text-white">
                            {job.jobTitle || job.title || "Untitled Job"}
                          </p>

                          {job.jobType && (
                            <p className="mt-1 text-xs text-gray-500">
                              {job.jobType}
                            </p>
                          )}
                        </div>
                      </div>
                    </td>

                    {/* Company */}
                    <td className="px-5 py-4">
                      <span className="text-sm text-gray-300">
                        {job.companyName || "N/A"}
                      </span>
                    </td>

                    {/* Location */}
                    <td className="px-5 py-4">
                      <span className="inline-flex items-center gap-1.5 text-sm text-gray-400">
                        <MapPin className="h-3.5 w-3.5" />
                        {job.location || "N/A"}
                      </span>
                    </td>

                    {/* Applied date */}
                    <td className="px-5 py-4">
                      <span className="inline-flex items-center gap-1.5 text-sm text-gray-400">
                        <Calendar className="h-3.5 w-3.5" />

                        {job.appliedAt || job.createdAt
                          ? new Date(
                              job.appliedAt || job.createdAt
                            ).toLocaleDateString()
                          : "N/A"}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-semibold ${getStatusStyle(
                          job.applicationStatus || job.status
                        )}`}
                      >
                        {job.applicationStatus || job.status || "Applied"}
                      </span>
                    </td>

                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyApplications;