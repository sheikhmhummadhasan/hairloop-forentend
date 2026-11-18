"use client";

import { useState } from "react";
import { updateApplicationStatus } from "@/lib/mechine";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ApplicantCard = ({ applicant, role }) => {
    const router = useRouter()
    const handleStatusChange = async (status) => {
      if(applicant.status === "pending" && role === 'recruiter'){
        const data = await updateApplicationStatus(applicant._id, status);
        router.refresh()
      }else{
        toast.error('you can not modefi secend time')
      }
    };

  return (
    <div className="bg-[#18181b] border border-[#303033] rounded-xl p-5 space-y-4 hover:border-gray-600 transition">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-semibold text-white">
            {applicant.applicantName}
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            {applicant.applicantEmail}
          </p>
        </div>

        <span
          className={`text-xs px-3 py-1 rounded-full capitalize ${
            applicant.status === "offered"
              ? "bg-green-500/10 text-green-400"
              : applicant.status === "rejected"
                ? "bg-red-500/10 text-red-400"
                : "bg-yellow-500/10 text-yellow-400"
          }`}
        >
          {applicant.status}
        </span>
      </div>

      <p className="text-sm text-gray-400">
        Applied for <span className="text-white">{applicant.jobTitle}</span>
      </p>

      <div className="border-t border-[#303033] pt-4 grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs text-gray-500">Company</p>
          <p className="text-sm text-white mt-1">{applicant.companyName}</p>
        </div>

        <div>
          <p className="text-xs text-gray-500">Applied Date</p>
          <p className="text-sm text-white mt-1">
            {new Date(applicant.appliedAt).toLocaleDateString("en-GB")}
          </p>
        </div>
      </div>

      <div className="border-t border-[#303033] pt-4 flex flex-wrap gap-2">
        <a
          href={applicant.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs bg-[#27272a] text-gray-200 px-3 py-2 rounded-lg hover:bg-[#38383c]"
        >
          View Resume
        </a>
      </div>

      <div className="border-t border-[#303033] pt-4 flex gap-3">
        <button
          onClick={() => handleStatusChange("offered")}
          className="flex-1 bg-green-600/10 text-green-400 border border-green-600/30 py-2 rounded-lg text-sm hover:bg-green-600 hover:text-white transition disabled:opacity-40"
        >
          Offerd
        </button>

        <button
          onClick={() => handleStatusChange("rejected")}
          className="flex-1 bg-red-600/10 text-red-400 border border-red-600/30 py-2 rounded-lg text-sm hover:bg-red-600 hover:text-white transition disabled:opacity-40"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default ApplicantCard;
