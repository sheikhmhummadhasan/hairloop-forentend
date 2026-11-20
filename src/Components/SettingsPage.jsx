"use client";
import React, { useState, useRef, useEffect } from "react";
import { User } from "lucide-react";
import { authClient, useSession } from "@/lib/auth-client";

const SettingsPage = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const [fullName, setFullName] = useState("Jane Doe");
  const [email, setEmail] = useState("jane.doe@example.com");

  const [avatarUrl, setAvatarUrl] = useState("");
  const [imgError, setImgError] = useState(false);
  const fileInputRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!user) return;
    if (user.name) setFullName(user.name);
    if (user.email) setEmail(user.email);
    if (user.image) {
      setAvatarUrl(user.image);
      setImgError(false);
    }
  }, [user]);

  // 1. Change Avatar: image file read kore preview + state e rakhe
  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setMessage("File must be under 5MB.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatarUrl(String(reader.result || ""));
      setImgError(false);
      setMessage("Avatar selected. Click Update Profile to save.");
    };
    reader.readAsDataURL(file);
  };

  // 2. Update Profile: name & image Better Auth diye update kore
  const handleUpdateProfile = async () => {
    setLoading(true);
    setMessage("");
    try {
      const { error } = await authClient.updateUser({
        name: fullName,
        image: avatarUrl || undefined,
      });

      if (error) {
        setMessage(error.message || "Failed to update profile.");
      } else {
        setMessage("Profile updated successfully.");
      }
    } catch {
      setMessage("Something went wrong while updating profile.");
    } finally {
      setLoading(false);
    }
  };

  // 3. Reset Password: email e password reset link pathay
  const handleResetPassword = async () => {
    if (!email) {
      setMessage("Email address is required.");
      return;
    }

    setResetLoading(true);
    setMessage("");
    try {
      const resetFn = authClient.requestPasswordReset || authClient.forgetPassword;
      const { error } = await resetFn({
        email,
        redirectTo: "/reset-password",
      });

      if (error) {
        setMessage(error.message || "Failed to send reset email.");
      } else {
        setMessage(`Password reset link sent to ${email}`);
      }
    } catch {
      setMessage("Could not send reset email.");
    } finally {
      setResetLoading(false);
    }
  };

  return (
    <div className="p-6 md:p-10 space-y-8 max-w-6xl w-full mx-auto font-sans text-gray-200">
      {/* HEADER TITLE */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Settings
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Manage your account details.
          </p>
        </div>
        {message && (
          <p className="text-xs font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1.5 rounded-lg">
            {message}
          </p>
        )}
      </div>

      {/* Profile Information */}
      <div className="bg-[#15171d] border border-[#21252f] rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
        <h2 className="text-lg font-bold text-white">
          Profile Information
        </h2>

        {/* Avatar Section */}
        <div className="flex items-center gap-5">
          <div className="relative w-16 h-16 rounded-full overflow-hidden bg-[#1f232d] border border-[#2e3444] flex items-center justify-center shrink-0">
            {avatarUrl && !imgError ? (
              <img
                src={avatarUrl}
                alt="Avatar"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <User className="w-7 h-7 text-gray-400" />
            )}
          </div>
          <div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/png, image/jpeg, image/gif, image/webp"
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
            disabled={loading}
            onClick={handleUpdateProfile}
            className="bg-white hover:bg-gray-100 disabled:opacity-60 text-black font-semibold px-5 py-2.5 rounded-xl text-xs md:text-sm transition shadow-sm cursor-pointer"
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
          <button
            type="button"
            disabled={resetLoading}
            onClick={handleResetPassword}
            className="bg-[#1e222c] hover:bg-[#272c38] disabled:opacity-60 text-gray-300 border border-[#2c3240] font-semibold px-5 py-2.5 rounded-xl text-xs md:text-sm transition cursor-pointer"
          >
            {resetLoading ? "Sending..." : "Reset Password"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;