import DeleteJobs from "@/Components/dashbordComp/DeleteJobs";
import UpdateJobsStatus from "@/Components/dashbordComp/UpdateJobsStatus";
import { auth } from "@/lib/auth";
import {
  getRoleByUserID,
  getRolebyUserIdAndDelete,
  updatejobsClosed,
} from "@/lib/mechine";
import { headers } from "next/headers";
import Link from "next/link";

export const instant = false;

const Jobpost = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const id = session?.user?.id;
  const res = id ? await getRoleByUserID(id) : [];
  const jobs = Array.isArray(res) ? res : [];

  return (
    <div className="min-h-screen bg-[#09090b] px-5 py-10 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-5">
          <div>
            <h1 className="text-3xl font-bold">My Job Posts</h1>
            <p className="mt-2 text-sm text-zinc-400">
              Manage and track your job listings.
            </p>
          </div>

          <Link
            href="/dashbord/jobs"
            className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
          >
            + Post a Job
          </Link>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 bg-[#18181b] p-6">
            <p className="text-sm text-zinc-400">Total Job Posts</p>
            <h2 className="mt-3 text-3xl font-bold">{jobs.length}</h2>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-[#18181b] p-6">
            <p className="text-sm text-zinc-400">Verified Jobs</p>
            <h2 className="mt-3 text-3xl font-bold">
              {jobs.filter((job) => job.verifiedBadge).length}
            </h2>
          </div>
        </div>

        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-semibold">All Listings</h2>
          <span className="text-sm text-zinc-400">
            {jobs.length} Jobs Found
          </span>
        </div>

        {jobs.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-zinc-700 bg-[#18181b] px-5 py-20 text-center">
            <h3 className="text-xl font-semibold">No Jobs Posted Yet</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Start hiring by creating your first job post.
            </p>
            <Link
              href="/dashbord/postjob"
              className="mt-6 inline-block rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black"
            >
              Create Job Post
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {jobs.map((job) => (
              <div
                key={job._id}
                className="rounded-2xl border border-zinc-800 bg-[#18181b] p-6 transition hover:border-zinc-600"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold">{job.jobTitle}</h3>
                    <p className="mt-1 text-sm text-zinc-400">
                      {job.companyName}
                    </p>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      job.verifiedBadge
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-red-500/10 text-red-400"
                    }`}
                  >
                    {job.verifiedBadge ? "✓ Open For Apply" : "✕ Closed"}
                  </span>
                </div>

                <p className="mt-5 line-clamp-2 text-sm leading-6 text-zinc-400">
                  {job.description}
                </p>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-zinc-500">Location</p>
                    <p className="mt-1 text-sm">{job.location}</p>
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500">Salary</p>
                    <p className="mt-1 text-sm">${job.salary}</p>
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500">Experience</p>
                    <p className="mt-1 text-sm">{job.experience}</p>
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500">Posted Date</p>
                    <p className="mt-1 text-sm">
                      {job.cratedAT
                        ? new Date(job.cratedAT).toLocaleDateString("en-US")
                        : "N/A"}
                    </p>
                  </div>
                </div>

                <div className="mt-5">
                  <p className="mb-3 text-xs text-zinc-500">Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills?.map((skill, index) => (
                      <span
                        key={index}
                        className="rounded-lg bg-zinc-800 px-3 py-1.5 text-xs text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-zinc-800 pt-5">
                  <span className="text-xs text-zinc-500">
                    Job ID: {String(job._id).slice(-8)}
                  </span>

                  <div className="flex gap-3">
                    <DeleteJobs id={job._id} />
                   <UpdateJobsStatus id={job._id}/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobpost;
