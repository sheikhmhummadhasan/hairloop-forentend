"use client";
import { useSession } from "@/lib/auth-client";
import { postjobs } from "@/lib/mechine";
import { useRouter } from "next/navigation";
import React from "react";

const JobPostForm = () => {
  const router = useRouter();
  const { data: session, error } = useSession();
  const createdUser = session?.user?.id;

  const handelJobPost = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const date = new Date();

    formData.append("cratedAT", date.toISOString());
    formData.append("createdBY", createdUser);


    const data = Object.fromEntries(formData.entries());
    data.saved = false;

    data.skills = data.skills.split(",").map((item) => item.trim());
    data.responsibilities = data.responsibilities
      .split(",")
      .map((item) => item.trim());
    data.requirements = data.requirements.split(",").map((item) => item.trim());
    data.benefits = data.benefits.split(",").map((item) => item.trim());

    data.verifiedBadge = data.verifiedBadge === "true";

    const res = await postjobs(data);

    if (res?.insertedId || res?.acknowledged) {
      router.push("/dashbord");
    }

  };

  return (
    <form
      onSubmit={handelJobPost}
      className="space-y-5 rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
    >
      <div>
        <label className="mb-2 block text-sm font-medium text-white">
          Job Title
        </label>
        <input
          type="text"
          name="jobTitle"
          placeholder="Backend Node.js Developer"
          required
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-emerald-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-white">
          Company Name
        </label>
        <input
          type="text"
          name="companyName"
          placeholder="CloudNest Technologies"
          required
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-emerald-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-white">
          Job Description
        </label>
        <textarea
          name="description"
          placeholder="Describe the job..."
          rows={4}
          required
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-emerald-500"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Location
          </label>
          <input
            type="text"
            name="location"
            placeholder="Remote"
            required
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Salary
          </label>
          <input
            type="text"
            name="salary"
            placeholder="$1,000 - $1,500 / month"
            required
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-emerald-500"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-white">
          Experience
        </label>
        <select
          name="experience"
          required
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-emerald-500"
        >
          <option value="">Select Experience</option>
          <option value="Fresher">Fresher</option>
          <option value="1-2 years">1-2 years</option>
          <option value="3-5 years">3-5 years</option>
          <option value="5-8 years">5-8 years</option>
          <option value="8+ years">8+ years</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-white">
          Skills (comma separated)
        </label>
        <input
          type="text"
          name="skills"
          placeholder="Node.js, Express.js, MongoDB, REST API"
          required
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-emerald-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-white">
          Responsibilities (comma separated)
        </label>
        <textarea
          name="responsibilities"
          placeholder="Develop backend APIs, Manage databases, Improve server performance"
          rows={3}
          required
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-emerald-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-white">
          Requirements (comma separated)
        </label>
        <textarea
          name="requirements"
          placeholder="Strong Node.js experience, Knowledge of database design"
          rows={3}
          required
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-emerald-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-white">
          Benefits (comma separated)
        </label>
        <textarea
          name="benefits"
          placeholder="Work from home, Paid leave, Performance bonuses"
          rows={3}
          required
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-emerald-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-white">
          Company Website
        </label>
        <input
          type="url"
          name="website"
          placeholder="https://example.com"
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-emerald-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-white">
          Verified Badge
        </label>
        <select
          name="verifiedBadge"
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-emerald-500"
        >
          <option value="false">Not Verified</option>
          <option value="true">Verified</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-emerald-500 py-3 font-semibold text-zinc-950 transition hover:bg-emerald-400"
      >
        Publish Job
      </button>
    </form>
  );
};

export default JobPostForm;
