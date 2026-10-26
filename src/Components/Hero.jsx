"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FaBriefcase,
  FaBuilding,
  FaUsers,
  FaStar,
  FaSearch,
  FaMapMarkerAlt,
} from "react-icons/fa";

const stats = [
  { icon: FaBriefcase, value: "50K", label: "Active Jobs" },
  { icon: FaBuilding, value: "12K", label: "Companies" },
  { icon: FaUsers, value: "2M", label: "Job Seekers" },
  { icon: FaStar, value: "97%", label: "Satisfaction Rate" },
];

const trending = ["Product Designer", "AI Engineering", "Dev-ops Engineer"];

const Hero = () => {
  const [job, setJob] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();

    if (job.trim()) params.set("search", job.trim());
    if (location.trim()) params.set("location", location.trim());

    window.location.href = `/browse?${params.toString()}`;
  };

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#03040a] text-white">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/globe.png"
          alt="Earth background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-[#03040a]/15 to-[#03040a]/75" />

      <div className="relative z-20 mx-auto flex max-w-[1320px] flex-col items-center px-4 pb-10 pt-24 text-center sm:px-6 sm:pt-28 lg:px-8 lg:pt-32">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-[10px] font-medium tracking-[0.12em] text-neutral-300 shadow-lg backdrop-blur-xl sm:text-xs">
          <FaBriefcase className="text-orange-400" />
          <span className="font-bold text-white">50,000+</span>
          <span>NEW JOBS THIS MONTH</span>
        </div>

        <h1 className="max-w-5xl text-3xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
          Find Your Dream Job{" "}
          <span className="bg-gradient-to-r from-[#a8c8ff] via-[#8b80ff] to-[#bc72ff] bg-clip-text text-transparent">
            Today
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-6 text-gray-200 sm:text-base sm:leading-7">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>

        <form
          onSubmit={handleSearch}
          className="mt-8 flex w-full max-w-3xl flex-col gap-2 rounded-2xl border border-white/20 bg-[#080a18]/80 p-2 shadow-[0_12px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:flex-row sm:items-center"
        >
          <label className="flex min-w-0 flex-1 items-center gap-3 px-3">
            <FaSearch className="shrink-0 text-neutral-300" />
            <input
              value={job}
              onChange={(e) => setJob(e.target.value)}
              placeholder="Job title, skill or company"
              aria-label="Job title, skill or company"
              className="h-11 w-full min-w-0 bg-transparent text-sm text-white outline-none placeholder:text-gray-400"
            />
          </label>

          <div className="hidden h-7 w-px bg-white/20 sm:block" />

          <label className="flex min-w-0 flex-1 items-center gap-3 border-t border-white/10 px-3 sm:border-t-0">
            <FaMapMarkerAlt className="shrink-0 text-neutral-300" />
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location or Remote"
              aria-label="Location or Remote"
              className="h-11 w-full min-w-0 bg-transparent text-sm text-white outline-none placeholder:text-gray-400"
            />
          </label>

          <button
            type="submit"
            aria-label="Search jobs"
            className="flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#5c53fe] px-5 font-semibold transition hover:bg-[#4940e8]"
          >
            <FaSearch />
            <span className="sm:hidden">Search Jobs</span>
          </button>
        </form>

        <div className="mt-5 flex max-w-3xl flex-wrap items-center justify-center gap-2">
          <span className="mr-1 text-xs text-gray-300">
            Trending Position:
          </span>

          {trending.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setJob(item)}
              className="rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[10px] text-gray-100 backdrop-blur-md transition hover:border-[#8175ff] hover:bg-[#5c53fe]/30 sm:text-xs"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="relative mt-20 w-full sm:mt-28 lg:mt-36">
          <div className="pointer-events-none absolute inset-x-0 -top-16 mx-auto h-40 max-w-3xl rounded-full bg-[#5145ff]/20 blur-[80px] sm:-top-20" />

          <p className="relative mx-auto max-w-xl text-lg font-medium leading-snug text-white drop-shadow-[0_2px_15px_rgba(92,83,254,0.8)] sm:text-2xl lg:text-3xl">
            Assisting over{" "}
            <span className="text-[#b6a5ff]">15,000</span> job seekers
            <br />
            find their dream positions.
          </p>

          <div className="relative z-10 mx-auto mt-12 grid max-w-[1320px] grid-cols-2 gap-3 text-left sm:mt-16 sm:grid-cols-4 sm:gap-4 lg:mt-20">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex min-h-[120px] flex-col items-start rounded-xl border border-white/15 bg-[#080911]/80 p-4 shadow-[0_8px_35px_rgba(0,0,0,0.3)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#8175ff]/60 sm:min-h-[145px] sm:rounded-2xl sm:p-5 lg:min-h-[160px] lg:p-6"
              >
                <Icon className="mb-3 text-base text-[#a58bff] sm:mb-5 sm:text-lg" />
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                  {value}
                </h3>
                <p className="mt-1.5 text-[11px] text-gray-300 sm:text-sm">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;