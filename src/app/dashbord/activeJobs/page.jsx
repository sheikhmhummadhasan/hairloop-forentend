
export const instant = false;

import { auth } from '@/lib/auth';
import { activeJobs } from '@/lib/mechine';
import { headers } from 'next/headers';
import React from 'react';

const JonClosedPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  const id = session?.user?.id;
  const res = await activeJobs(id);

  return (
    <div className="min-h-screen bg-zinc-950 p-6 md:p-10">
      <div className="mx-auto max-w-6xl">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">
            Closed Jobs ({res.length})
          </h1>
          <p className="mt-2 text-sm text-zinc-400">
            All your unverified job postings in one place.
          </p>
        </div>

        {res?.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2">
            {res.map((job) => (
              <div
                key={job._id}
                className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-semibold text-white">
                      {job.jobTitle}
                    </h2>
                    <p className="mt-1 text-sm text-zinc-400">
                      {job.companyName}
                    </p>
                  </div>

                  <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                    Active
                  </span>
                </div>

                <p className="mb-5 line-clamp-3 text-sm leading-6 text-zinc-400">
                  {job.description}
                </p>

                <div className="grid grid-cols-2 gap-4 border-t border-zinc-800 pt-4">
                  <div>
                    <p className="text-xs text-zinc-500">Location</p>
                    <p className="mt-1 text-sm text-zinc-200">
                      {job.location}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500">Salary</p>
                    <p className="mt-1 text-sm text-zinc-200">
                      ${job.salary}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500">Experience</p>
                    <p className="mt-1 text-sm text-zinc-200">
                      {job.experience}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500">Posted Date</p>
                    <p className="mt-1 text-sm text-zinc-200">
                      {new Date(job.cratedAT).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="mt-5 border-t border-zinc-800 pt-4">
                  <p className="mb-2 text-xs text-zinc-500">Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills?.map((skill, index) => (
                      <span
                        key={index}
                        className="rounded-lg bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-12 text-center">
            <h2 className="text-xl font-semibold text-white">
              No Closed Jobs Found
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              You dont have any unverified job postings.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default JonClosedPage;
