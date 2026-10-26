"use client";

import { useState } from "react";
import { Button, Input } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const SigninForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const signin = await signIn.email({
        email: data.email,
        password: data.password,
      });

      if (signin.error) {
        toast.error(signin.error.message || "Login failed!");
        return;
      }

      toast.success("Login successful!");
      router.push("/");
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignin = async () => {
    try {
      const result = await signIn.social({
        provider: "google",
        callbackURL: "/",
      });

      if (result?.error) {
        toast.error(result.error.message || "Google login failed!");
      }
    } catch (error) {
      toast.error(error.message || "Google login failed!");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#09090b] px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#18181b] p-6 shadow-2xl sm:p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Welcome Back
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Sign in to your Hair Loop account
          </p>
        </div>

        <form onSubmit={handleSignin} className="space-y-5">
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
              placeholder="Enter your password"
              aria-label="Password"
              className="w-full text-white"
              required
            />
          </div>

          <div className="flex justify-end">
            <a
              href="/forgot-password"
              className="text-sm text-violet-400 hover:text-violet-300"
            >
              Forgot password?
            </a>
          </div>

          <Button
            type="submit"
            isDisabled={loading}
            className="w-full bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-500"
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <div className="my-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-xs text-gray-500">OR SIGN IN WITH</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <Button
          type="button"
          variant="bordered"
          onPress={handleGoogleSignin}
          className="w-full border border-white/15 bg-[#27272a] py-3 font-medium text-white transition hover:bg-[#3f3f46]"
        >
          <FcGoogle size={20} />
          Continue with Google
        </Button>

        <p className="mt-6 text-center text-sm text-gray-400">
          Dont have an account?{" "}
          <a
            href="/signup"
            className="font-semibold text-violet-400 hover:text-violet-300"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SigninForm;
