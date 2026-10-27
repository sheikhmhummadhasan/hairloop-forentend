"use client";

import { useState } from "react";
import { Button, Description, Input, Label, Radio, RadioGroup } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { signUp } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
import { createAuthClient } from "better-auth/react";

const SignupForm = () => {
  const [loading, setLoading] = useState(false);

  const authClient = createAuthClient();
  const signIn = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: "google",
    });
    if (data) {
      toast.success(`Sigin successfully done`);
    } else {
      toast.error(error.message || "Something went wrong!");
    }
  };

  const [role, setRole] = useState("seeker");
  console.log(role);
  const handleSignup = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    data.role = role;

    console.log(data);
    const singup = await signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role,
    });
    console.log(singup);
    if (!singup) {
      toast.error("Somthing went to wrong");
    } else {
      toast.success("Sign up Successfull...");
      redirect("/");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#09090b] px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#18181b] p-6 shadow-2xl sm:p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Create Account
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Join Hair Loop and get started
          </p>
        </div>

        <form onSubmit={handleSignup} className="space-y-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-200">
              Name
            </label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your full name"
              aria-label="Name"
              className="w-full text-white"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-200"
            >
              Email Address
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              aria-label="Email Address"
              className="w-full text-white"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-200"
            >
              Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Create a password"
              aria-label="Password"
              className="w-full text-white"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <RadioGroup onChange={value => setRole(value)} name="role" defaultValue="seeker">
              <Label>Select as Role.</Label>
              <Description>Select your account role</Description>

              <Radio value="seeker">
                <Radio.Content>
                  <Radio.Control>
                    <Radio.Indicator />
                  </Radio.Control>
                  Seeker
                </Radio.Content>
              </Radio>

              <Radio value="recruiter">
                <Radio.Content>
                  <Radio.Control>
                    <Radio.Indicator />
                  </Radio.Control>
                  Recruiter
                </Radio.Content>
              </Radio>
            </RadioGroup>
          </div>

          <Button
            type="submit"
            isDisabled={loading}
            className="w-full bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-500"
          >
            Create Account
          </Button>
        </form>

        <div className="my-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-xs text-gray-500">OR SIGN UP WITH</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <Button
          type="button"
          variant="bordered"
          onClick={signIn}
          className="w-full border border-white/15 bg-[#27272a] py-3 font-medium text-white transition hover:bg-[#3f3f46]"
        >
          <FcGoogle size={20} />
          Continue with Google
        </Button>

        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-semibold text-violet-400 hover:text-violet-300"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
