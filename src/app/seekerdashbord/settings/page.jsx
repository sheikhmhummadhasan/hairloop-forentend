"use client";
import React, { useState, useRef } from "react";
import {
  Upload,
  FileText,
  X,
  Camera,
} from "lucide-react";

const SettingsContent = () => {
  // Form States
  const [fullName, setFullName] = useState("Jane Doe");
  const [email, setEmail] = useState("jane.doe@example.com");
  const [headline, setHeadline] = useState("Senior UX/UI Designer");
  const [bio, setBio] = useState(
    "Passionate designer with 5+ years of experience crafting user-centric digital experiences..."
  );

  // Avatar State
  const [avatarUrl, setAvatarUrl] = useState("https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces");
  const fileInputRef = useRef(null);

  // Skills State
  const [skills, setSkills] = useState(["Figma", "UI Design", "Prototyping"]);
  const [newSkill, setNewSkill] = useState("");

  // Resume State
  const [resumeName, setResumeName] = useState("Jane_Doe_Resume_2023.pdf");
  const [resumeInfo, setResumeInfo] = useState("Last updated 2 days ago - 1.2 MB");

  // Handle Avatar Change
  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatarUrl(imageUrl);
    }
  };

  // Handle Add Skill
  const handleAddSkill = (e) => {
    if (e.key === "Enter" && newSkill.trim() !== "") {
      e.preventDefault();
      if (!skills.includes(newSkill.trim())) {
        setSkills([...skills, newSkill.trim()]);
      }
      setNewSkill("");
    }
  };

  // Handle Remove Skill
  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  return (
    <div className="p-6 md:p-10 space-y-8 max-w-6xl w-full mx-auto font-sans text-gray-200">
      
      {/* HEADER TITLE */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          Settings
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Manage your account details and professional profile.
        </p>
      </div>

      {/* TOP SECTION: Profile Information & Resume Upload */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Profile Information (Takes 2 Columns) */}
        <div className="lg:col-span-2 bg-[#15171d] border border-[#21252f] rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
          <h2 className="text-lg font-bold text-white">
            Profile Information
          </h2>

          {/* Avatar Section */}
          <div className="flex items-center gap-5">
            <div className="relative w-16 h-16 rounded-full overflow-hidden bg-[#1f232d] border border-[#2e3444] flex items-center justify-center shrink-0">
              <img
                src={avatarUrl}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              {/* Hidden File Input */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/png, image/jpeg, image/gif"
                className="hidden"
              />
              <button
                type="button"
                onClick={handleAvatarClick}
                className="bg-[#1f232d] hover:bg-[#282d3a] text-white border border-[#2e3444] font-semibold px-4 py-2 rounded-xl text-xs transition mb-1 cursor-pointer"
              >
                Change Avatar
              </button>
              <p className="text-[11px] text-gray-500">
                JPG, GIF or PNG. Max size of 5MB.
              </p>
            </div>
          </div>

          {/* Input Fields: Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-[#111216] border border-[#272b36] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gray-500 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#111216] border border-[#272b36] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gray-500 transition"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              className="bg-white hover:bg-gray-100 text-black font-semibold px-5 py-2.5 rounded-xl text-xs md:text-sm transition shadow-sm"
            >
              Update Profile
            </button>
            <button
              type="button"
              className="bg-[#1e222c] hover:bg-[#272c38] text-gray-300 border border-[#2c3240] font-semibold px-5 py-2.5 rounded-xl text-xs md:text-sm transition"
            >
              Reset Password
            </button>
          </div>
        </div>

        {/* Resume Box (Takes 1 Column) */}
        <div className="bg-[#15171d] border border-[#21252f] rounded-2xl p-6 flex flex-col justify-between shadow-xl">
          <div>
            <h2 className="text-lg font-bold text-white mb-1">Resume</h2>
            <p className="text-xs text-gray-400 mb-6">
              Upload your most recent resume to enable one-click applications.
            </p>

            {/* Resume Upload Preview Box */}
            <div className="border border-dashed border-[#2d323e] bg-[#111216] rounded-xl p-6 text-center space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#1d2028] border border-[#2a2e3a] flex items-center justify-center text-gray-400 mx-auto">
                <FileText className="w-5 h-5" />
              </div>
              
              {resumeName ? (
                <div>
                  <h4 className="text-xs font-bold text-white truncate max-w-[200px] mx-auto">
                    {resumeName}
                  </h4>
                  <p className="text-[10px] text-gray-500 mt-0.5">
                    {resumeInfo}
                  </p>
                </div>
              ) : (
                <p className="text-xs text-gray-400">No resume uploaded</p>
              )}

              {/* Replace / Remove Buttons */}
              <div className="flex items-center justify-center gap-2 pt-2">
                <button
                  type="button"
                  className="bg-[#1f232d] hover:bg-[#282d3a] text-gray-300 border border-[#2e3444] font-medium px-3.5 py-1.5 rounded-lg text-xs transition"
                >
                  Replace
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setResumeName("");
                    setResumeInfo("");
                  }}
                  className="bg-[#1a1c22] hover:bg-rose-950/30 text-rose-400 border border-rose-900/30 font-medium px-3.5 py-1.5 rounded-lg text-xs transition"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* LOWER SECTION: Professional Details */}
      <div className="bg-[#15171d] border border-[#21252f] rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
        <h2 className="text-lg font-bold text-white">
          Professional Details
        </h2>

        <div className="space-y-4">
          {/* Professional Headline */}
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1.5">
              Professional Headline
            </label>
            <input
              type="text"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              className="w-full bg-[#111216] border border-[#272b36] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gray-500 transition"
            />
          </div>

          {/* Bio */}
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1.5">
              Bio
            </label>
            <textarea
              rows={4}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full bg-[#111216] border border-[#272b36] rounded-xl p-4 text-sm text-white focus:outline-none focus:border-gray-500 transition resize-none"
            />
          </div>

          {/* Skills Tag Input */}
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1.5">
              Skills
            </label>
            <div className="w-full bg-[#111216] border border-[#272b36] rounded-xl p-2.5 flex flex-wrap items-center gap-2 min-h-[46px]">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-[#1f232d] text-gray-300 text-xs font-medium px-3 py-1 rounded-lg border border-[#2d323e] flex items-center gap-1.5"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(skill)}
                    className="text-gray-500 hover:text-white transition"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
              <input
                type="text"
                placeholder="Add a skill..."
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyDown={handleAddSkill}
                className="bg-transparent text-sm text-white placeholder-gray-600 focus:outline-none px-2 py-0.5 flex-1 min-w-[120px]"
              />
            </div>
          </div>
        </div>

        {/* Save Details Button */}
        <div className="pt-2">
          <button
            type="button"
            className="bg-white hover:bg-gray-100 text-black font-semibold px-5 py-2.5 rounded-xl text-xs md:text-sm transition shadow-sm"
          >
            Save Details
          </button>
        </div>
      </div>

    </div>
  );
};

export default SettingsContent;