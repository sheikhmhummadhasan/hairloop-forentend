"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  Bookmark,
  DollarSign,
  MapPin,
  Clock,
  BarChart2,
  CheckCircle2,
  Check,
  ExternalLink,
  Layers,
} from "lucide-react";
import { toast } from "react-toastify";
import { applicationForJob } from "@/lib/mechine";
import { useSession } from "@/lib/auth-client";

const BrowseDetailPageClient = ({ res }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [hasApplied, setHasApplied] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { data: session } = useSession();
  const userData = session?.user;

  const {
    benefits = [],
    companyName,
    description,
    experience,
    jobTitle,
    location,
    requirements = [],
    responsibilities = [],
    salary,
    skills = [],
    verifiedBadge,
    website,
    _id,
  } = res || {};

  const handleApply = async (e) => {
    e.preventDefault();

    if (!userData) {
      toast.error("Please login first!");
      return;
    }

    if (!_id) {
      toast.error("Job information not found!");
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());

      const applicationData = {
        jobId: _id,
        jobTitle,
        companyName,
        applicantId: userData.id,
        applicantName: data.fullName,
        applicantEmail: userData.email,
        resumeUrl: data.resumeUrl,
        appliedAt: new Date().toISOString(),
        status: "pending",
      };

      const result = await applicationForJob(applicationData);

      if (result?.insertedId || result?.acknowledged || result?.success) {
        // toast.success("Application submitted successfully!");
        setHasApplied(true);
        setShowApplyModal(false);
      } else {
        toast.error(result?.message || "Application submission failed!");
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!res) {
    return (
      <div className="min-h-screen bg-[#0e0f12] text-white flex items-center justify-center">
        Job details not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0e0f12] text-gray-200 font-sans p-4 md:p-8 flex flex-col items-center">
      <div className="w-full max-w-5xl space-y-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors bg-[#181a1f] px-3.5 py-2 rounded-xl border border-[#272a30]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Jobs</span>
          </button>

          <span className="text-xs text-gray-500 font-medium">Job Details</span>
        </div>

        <div className="bg-[#181a1f] border border-[#272a30] rounded-2xl p-6 md:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-5 min-w-0">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#121316] border border-[#2d3139] flex items-center justify-center shrink-0 shadow-inner">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                  {companyName?.slice(0, 2)?.toUpperCase() || "CO"}
                </div>
              </div>

              <div className="space-y-2 min-w-0">
                <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight break-words">
                  {companyName}
                </h1>

                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
                  <span className="font-semibold text-gray-300">
                    {jobTitle}
                  </span>

                  {verifiedBadge && (
                    <>
                      <span className="text-gray-600">•</span>
                      <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-1 rounded-full">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Verified Employer</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end shrink-0">
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-3 rounded-xl border transition-all ${
                  isBookmarked
                    ? "bg-amber-500/10 border-amber-500/30 text-amber-400"
                    : "bg-[#121316] border-[#2d3139] text-gray-400 hover:text-white hover:border-gray-500"
                }`}
                title={isBookmarked ? "Remove Bookmark" : "Save Job"}
              >
                <Bookmark
                  className={`w-5 h-5 ${isBookmarked ? "fill-amber-400" : ""}`}
                />
              </button>

              <button
                onClick={() => {
                  if (!userData) {
                    toast.error("Please login first!");
                    return;
                  }
                  setShowApplyModal(true);
                }}
                disabled={hasApplied}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg ${
                  hasApplied
                    ? "bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 cursor-default"
                    : "bg-white text-black hover:bg-gray-200 active:scale-95 hover:shadow-white/10"
                }`}
              >
                {hasApplied ? "Applied ✓" : "Apply Now"}
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          <div className="bg-[#181a1f] border border-[#272a30] rounded-2xl p-4 md:p-5 flex items-center gap-4 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[#121316] border border-[#2d3139] flex items-center justify-center text-gray-400 shrink-0">
              <DollarSign className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase">
                Salary Range
              </p>
              <p className="text-sm md:text-base font-bold text-white mt-0.5 break-words">
                {salary}
              </p>
            </div>
          </div>

          <div className="bg-[#181a1f] border border-[#272a30] rounded-2xl p-4 md:p-5 flex items-center gap-4 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[#121316] border border-[#2d3139] flex items-center justify-center text-gray-400 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase">
                Location
              </p>
              <p className="text-sm md:text-base font-bold text-white mt-0.5 break-words">
                {location}
              </p>
            </div>
          </div>

          <div className="bg-[#181a1f] border border-[#272a30] rounded-2xl p-4 md:p-5 flex items-center gap-4 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[#121316] border border-[#2d3139] flex items-center justify-center text-gray-400 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase">
                Job Type
              </p>
              <p className="text-sm md:text-base font-bold text-white mt-0.5">
                Full-time
              </p>
            </div>
          </div>

          <div className="bg-[#181a1f] border border-[#272a30] rounded-2xl p-4 md:p-5 flex items-center gap-4 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[#121316] border border-[#2d3139] flex items-center justify-center text-gray-400 shrink-0">
              <BarChart2 className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase">
                Experience
              </p>
              <p className="text-sm md:text-base font-bold text-white mt-0.5">
                {experience}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#181a1f] border border-[#272a30] rounded-2xl p-6 md:p-8 shadow-xl space-y-8">
              <section className="space-y-3">
                <h2 className="text-lg md:text-xl font-bold text-white">
                  Job Description
                </h2>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                  {description}
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg md:text-xl font-bold text-white">
                  Responsibilities
                </h2>
                <ul className="space-y-3 text-sm md:text-base text-gray-400">
                  {responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="space-y-5">
                <h2 className="text-lg md:text-xl font-bold text-white">
                  Skills
                </h2>

                <div className="flex flex-wrap gap-2.5">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="inline-flex items-center gap-2 bg-[#121316] border border-[#2d3139] px-3.5 py-2 rounded-xl text-xs md:text-sm text-gray-300 font-medium"
                    >
                      <Layers className="w-4 h-4 text-gray-400" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-5">
                <h2 className="text-lg md:text-xl font-bold text-white">
                  Requirements
                </h2>

                <ul className="space-y-3 text-sm md:text-base text-gray-400">
                  {requirements.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="space-y-5 pt-2">
                <h2 className="text-lg md:text-xl font-bold text-white">
                  Benefits
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3.5 bg-[#121316] border border-[#2d3139] p-3.5 rounded-2xl"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#1c1f26] flex items-center justify-center text-gray-300 shrink-0">
                        <Check className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-semibold text-gray-200">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#181a1f] border border-[#272a30] rounded-2xl p-6 shadow-xl space-y-6">
              <h2 className="text-lg font-bold text-white tracking-wide">
                Company Overview
              </h2>

              <div className="relative rounded-2xl overflow-hidden border border-[#2d3139] bg-[#121316] h-40 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-[#181a1f] via-transparent to-transparent opacity-80 z-10" />

                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white text-3xl font-bold">
                  {companyName?.slice(0, 2)?.toUpperCase() || "CO"}
                </div>

                <div className="absolute bottom-3 left-4 z-20 text-xs text-gray-300 font-medium flex items-center gap-1.5">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      verifiedBadge ? "bg-emerald-400" : "bg-gray-500"
                    }`}
                  />
                  <span>{companyName}</span>
                </div>
              </div>

              <div className="space-y-4 pt-1 border-b border-[#2d3139] pb-6">
                <div className="flex justify-between items-center gap-4 text-sm">
                  <span className="text-gray-400 font-medium uppercase text-xs tracking-wider">
                    Experience
                  </span>
                  <span className="text-gray-200 font-semibold text-right">
                    {experience}
                  </span>
                </div>

                <div className="flex justify-between items-center gap-4 text-sm">
                  <span className="text-gray-400 font-medium uppercase text-xs tracking-wider">
                    Location
                  </span>
                  <span className="text-gray-200 font-semibold text-right">
                    {location}
                  </span>
                </div>

                <div className="flex justify-between items-center gap-4 text-sm">
                  <span className="text-gray-400 font-medium uppercase text-xs tracking-wider">
                    Verification
                  </span>
                  <span className="text-gray-200 font-semibold text-right">
                    {verifiedBadge ? "Verified" : "Not verified"}
                  </span>
                </div>
              </div>

              {website && (
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#121316] hover:bg-[#20232b] text-gray-300 hover:text-white border border-[#2d3139] transition-all text-sm font-semibold break-all"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="w-4 h-4 shrink-0" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {showApplyModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#181a1f] border border-[#272a30] w-full max-w-md rounded-2xl p-6 shadow-2xl space-y-5">
            <div className="flex justify-between items-center gap-4">
              <h3 className="text-xl font-bold text-white">
                Apply for {companyName}
              </h3>
              <button
                onClick={() => setShowApplyModal(false)}
                className="text-gray-400 hover:text-white"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleApply} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  defaultValue={userData?.name || ""}
                  placeholder="Your full name"
                  className="w-full bg-[#121316] text-white px-4 py-3 rounded-xl border border-[#2d3139] focus:outline-none focus:border-gray-400 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                  Portfolio / Resume URL
                </label>
                <input
                  type="url"
                  name="resumeUrl"
                  required
                  placeholder="https://yourportfolio.com"
                  className="w-full bg-[#121316] text-white px-4 py-3 rounded-xl border border-[#2d3139] focus:outline-none focus:border-gray-400 text-sm"
                />
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowApplyModal(false)}
                  className="w-1/2 py-3 rounded-xl border border-[#2d3139] text-gray-300 hover:text-white text-sm font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-1/2 py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-gray-200 disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrowseDetailPageClient;
