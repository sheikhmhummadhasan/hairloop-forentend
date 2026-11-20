"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";

const VerifyOTP = ({ email }) => {
  const [otp, setOtp] = useState("");

  const handleVerify = async (e) => {
    e.preventDefault();

    const { data, error } = await authClient.emailOtp.verifyEmail({
      email,
      otp,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Email verified successfully!");
  };

  return (
    <form onSubmit={handleVerify}>
      <input
        type="text"
        placeholder="Enter 6 digit OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        maxLength={6}
      />

      <button type="submit">
        Verify OTP
      </button>
    </form>
  );
};

export default VerifyOTP;