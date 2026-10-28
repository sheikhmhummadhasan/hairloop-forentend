"use client";
import React, { useState } from 'react';
import { 
  ArrowLeft,
  Bookmark, 
  DollarSign, 
  MapPin, 
  Clock, 
  BarChart2, 
  CheckCircle2, 
  Check, 
  ShieldCheck, 
  PieChart, 
  Laptop, 
  Palmtree, 
  ExternalLink,
  Layers, // Figma-র বদলে Layers ব্যবহার করুন
  Layout,
  Code
} from 'lucide-react';

const BrowseDetailPageClient = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [hasApplied, setHasApplied] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);

  const handleApply = (e) => {
    e.preventDefault();
    setHasApplied(true);
    setShowApplyModal(false);
  };

  return (
    <div className="min-h-screen bg-[#0e0f12] text-gray-200 font-sans p-4 md:p-8 flex flex-col items-center">
      <div className="w-full max-w-5xl space-y-6">
        
        {/* TOP NAVIGATION BACK BUTTON */}
        <div className="flex items-center justify-between">
          <button 
            onClick={() => alert('Navigating back to Job Browse page...')}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors bg-[#181a1f] px-3.5 py-2 rounded-xl border border-[#272a30]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Jobs</span>
          </button>
          
          <span className="text-xs text-gray-500 font-medium">Posted 2 days ago</span>
        </div>

        {/* 1. HEADER CARD */}
        <div className="bg-[#181a1f] border border-[#272a30] rounded-2xl p-6 md:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              {/* Company Logo Avatar */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#121316] border border-[#2d3139] flex items-center justify-center shrink-0 shadow-inner">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xs">
                  CS
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-1">
                <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                  Senior Product Designer
                </h1>
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
                  <span className="font-semibold text-gray-300">CloudScale AI</span>
                  <span className="text-gray-600">•</span>
                  <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5 fill-emerald-400 text-[#181a1f]" />
                    <span>Verified Employer</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-3 rounded-xl border transition-all ${
                  isBookmarked
                    ? "bg-amber-500/10 border-amber-500/30 text-amber-400"
                    : "bg-[#121316] border-[#2d3139] text-gray-400 hover:text-white hover:border-gray-500"
                }`}
                title={isBookmarked ? "Remove Bookmark" : "Save Job"}
              >
                <Bookmark className={`w-5 h-5 ${isBookmarked ? "fill-amber-400" : ""}`} />
              </button>

              <button
                onClick={() => setShowApplyModal(true)}
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

        {/* 2. OVERVIEW METRICS ROW */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {/* Stat 1 */}
          <div className="bg-[#181a1f] border border-[#272a30] rounded-2xl p-4 md:p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#121316] border border-[#2d3139] flex items-center justify-center text-gray-400 shrink-0">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase">Salary Range</p>
              <p className="text-sm md:text-base font-bold text-white mt-0.5">$140k - $180k</p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="bg-[#181a1f] border border-[#272a30] rounded-2xl p-4 md:p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#121316] border border-[#2d3139] flex items-center justify-center text-gray-400 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase">Location</p>
              <p className="text-sm md:text-base font-bold text-white mt-0.5">Remote (US)</p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="bg-[#181a1f] border border-[#272a30] rounded-2xl p-4 md:p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#121316] border border-[#2d3139] flex items-center justify-center text-gray-400 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase">Job Type</p>
              <p className="text-sm md:text-base font-bold text-white mt-0.5">Full-time</p>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="bg-[#181a1f] border border-[#272a30] rounded-2xl p-4 md:p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#121316] border border-[#2d3139] flex items-center justify-center text-gray-400 shrink-0">
              <BarChart2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase">Experience</p>
              <p className="text-sm md:text-base font-bold text-white mt-0.5">5+ Years</p>
            </div>
          </div>
        </div>

        {/* MAIN BODY GRID (3:2 split) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* 3. LEFT COLUMN - MAIN DETAILS */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#181a1f] border border-[#272a30] rounded-2xl p-6 md:p-8 shadow-xl space-y-8">
              
              {/* Job Description */}
              <section className="space-y-3">
                <h2 className="text-lg md:text-xl font-bold text-white">Job Description</h2>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed font-normal">
                  At CloudScale AI, we are building the next generation of infrastructure monitoring tools. We are looking for a Senior Product Designer who is passionate about translating complex technical workflows into elegant, intuitive interfaces. You will be a key member of our design team, working closely with engineering and product leadership to define the vision for our core platform experience.
                </p>
              </section>

              {/* Responsibilities */}
              <section className="space-y-4">
                <h2 className="text-lg md:text-xl font-bold text-white">Responsibilities</h2>
                <ul className="space-y-3 text-sm md:text-base text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 shrink-0" />
                    <span>Lead the end-to-end design process for major platform features, from discovery to high-fidelity implementation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 shrink-0" />
                    <span>Collaborate with cross-functional partners to understand user needs and translate them into functional design requirements.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 shrink-0" />
                    <span>Maintain and evolve our design system, ensuring consistency and accessibility across the entire product suite.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 shrink-0" />
                    <span>Conduct user research and usability testing to validate design decisions and iterate based on feedback.</span>
                  </li>
                </ul>
              </section>

              {/* Requirements & Badges */}
              <section className="space-y-5">
                <h2 className="text-lg md:text-xl font-bold text-white">Requirements</h2>
                
                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2.5">
                  <div className="inline-flex items-center gap-2 bg-[#121316] border border-[#2d3139] px-3.5 py-2 rounded-xl text-xs md:text-sm text-gray-300 font-medium">
                    <Layers className="w-4 h-4 text-gray-400" />
                    <span>Figma Expertise</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-[#121316] border border-[#2d3139] px-3.5 py-2 rounded-xl text-xs md:text-sm text-gray-300 font-medium">
                    <Layers className="w-4 h-4 text-gray-400" />
                    <span>System Thinking</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-[#121316] border border-[#2d3139] px-3.5 py-2 rounded-xl text-xs md:text-sm text-gray-300 font-medium">
                    <Layout className="w-4 h-4 text-gray-400" />
                    <span>UI/UX Design</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-[#121316] border border-[#2d3139] px-3.5 py-2 rounded-xl text-xs md:text-sm text-gray-300 font-medium">
                    <Code className="w-4 h-4 text-gray-400" />
                    <span>Basic Frontend</span>
                  </div>
                </div>

                {/* Requirements List */}
                <ul className="space-y-3 text-sm md:text-base text-gray-400 pt-1">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 shrink-0" />
                    <span>5+ years of experience designing complex B2B SaaS products or data-heavy applications.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 shrink-0" />
                    <span>A strong portfolio showcasing your design process and problem-solving skills.</span>
                  </li>
                </ul>
              </section>

              {/* Benefits */}
              <section className="space-y-5 pt-2">
                <h2 className="text-lg md:text-xl font-bold text-white">Benefits</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="flex items-center gap-3.5 bg-[#121316] border border-[#2d3139] p-3.5 rounded-2xl">
                    <div className="w-9 h-9 rounded-xl bg-[#1c1f26] flex items-center justify-center text-gray-300 shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold text-gray-200">Full Health & Dental</span>
                  </div>

                  <div className="flex items-center gap-3.5 bg-[#121316] border border-[#2d3139] p-3.5 rounded-2xl">
                    <div className="w-9 h-9 rounded-xl bg-[#1c1f26] flex items-center justify-center text-gray-300 shrink-0">
                      <PieChart className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold text-gray-200">Competitive 401k</span>
                  </div>

                  <div className="flex items-center gap-3.5 bg-[#121316] border border-[#2d3139] p-3.5 rounded-2xl">
                    <div className="w-9 h-9 rounded-xl bg-[#1c1f26] flex items-center justify-center text-gray-300 shrink-0">
                      <Laptop className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold text-gray-200">Latest Hardware Stipend</span>
                  </div>

                  <div className="flex items-center gap-3.5 bg-[#121316] border border-[#2d3139] p-3.5 rounded-2xl">
                    <div className="w-9 h-9 rounded-xl bg-[#1c1f26] flex items-center justify-center text-gray-300 shrink-0">
                      <Palmtree className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold text-gray-200">Unlimited PTO</span>
                  </div>
                </div>
              </section>

            </div>
          </div>

          {/* 4. RIGHT COLUMN - COMPANY OVERVIEW SIDEBAR */}
          <div className="space-y-6">
            <div className="bg-[#181a1f] border border-[#272a30] rounded-2xl p-6 shadow-xl space-y-6">
              <h2 className="text-lg font-bold text-white tracking-wide">Company Overview</h2>

              {/* Workspace Mock Preview */}
              <div className="relative rounded-2xl overflow-hidden border border-[#2d3139] bg-[#121316] h-40 flex items-center justify-center group">
                <div className="absolute inset-0 bg-gradient-to-t from-[#181a1f] via-transparent to-transparent opacity-80 z-10" />
                
                {/* SVG Mockup Image matching the dark workspace thumbnail */}
                <svg className="w-full h-full object-cover text-gray-700" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="400" height="200" fill="#0f1115"/>
                  <rect x="40" y="30" width="320" height="130" rx="8" fill="#181c24" stroke="#2a2e38"/>
                  <rect x="120" y="50" width="160" height="90" rx="4" fill="#0c0e12" stroke="#3b4252"/>
                  <line x1="120" y1="120" x2="280" y2="120" stroke="#2e3440" strokeWidth="2"/>
                  <rect x="180" y="140" width="40" height="15" fill="#2e3440"/>
                  <rect x="160" y="155" width="80" height="5" fill="#2e3440"/>
                  <circle cx="200" cy="80" r="15" stroke="#4c566a" strokeWidth="2"/>
                </svg>

                <div className="absolute bottom-3 left-4 z-20 text-xs text-gray-300 font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>CloudScale AI HQ</span>
                </div>
              </div>

              {/* Company Info List */}
              <div className="space-y-4 pt-1 border-b border-[#2d3139] pb-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400 font-medium uppercase text-xs tracking-wider">Size</span>
                  <span className="text-gray-200 font-semibold">250 - 500 Employees</span>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400 font-medium uppercase text-xs tracking-wider">Industry</span>
                  <span className="text-gray-200 font-semibold">SaaS / Artificial Intelligence</span>
                </div>
              </div>

              {/* Visit Website Button */}
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#121316] hover:bg-[#20232b] text-gray-300 hover:text-white border border-[#2d3139] transition-all text-sm font-semibold"
              >
                <span>Visit Website</span>
                <ExternalLink className="w-4 h-4" />
              </a>

            </div>
          </div>

        </div>

      </div>

      {/* APPLY NOW MODAL */}
      {showApplyModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#181a1f] border border-[#272a30] w-full max-w-md rounded-2xl p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">Apply for Senior Product Designer</h3>
              <button 
                onClick={() => setShowApplyModal(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleApply} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Full Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="John Doe"
                  className="w-full bg-[#121316] text-white px-4 py-3 rounded-xl border border-[#2d3139] focus:outline-none focus:border-gray-400 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Portfolio / Resume URL</label>
                <input 
                  type="url" 
                  required 
                  placeholder="https://myportfolio.com"
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
                  className="w-1/2 py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-gray-200"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
export default BrowseDetailPageClient;