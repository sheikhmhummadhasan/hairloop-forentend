
import React from "react";

const AvailableCompany = ({ company }) => {
  return (
    <div className="min-h-screen bg-zinc-950 p-6 md:p-10">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 md:p-8">

          <div className="mb-8 border-b border-zinc-800 pb-6">
            <p className="mb-2 text-sm text-emerald-400">
              Company Profile
            </p>

            <h1 className="text-3xl font-bold text-white">
              {company.name}
            </h1>

            <p className="mt-2 text-sm text-zinc-400">
              {company.industry}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">

            <div>
              <p className="text-sm text-zinc-500">Location</p>
              <p className="mt-2 text-white">{company.location}</p>
            </div>

            <div>
              <p className="text-sm text-zinc-500">Employees</p>
              <p className="mt-2 text-white">{company.employees}</p>
            </div>

            <div>
              <p className="text-sm text-zinc-500">Website</p>
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block break-all text-blue-400 hover:underline"
              >
                {company.website}
              </a>
            </div>

            <div>
              <p className="text-sm text-zinc-500">Created At</p>
              <p className="mt-2 text-white">
                {new Date(company.cratedAT).toLocaleDateString()}
              </p>
            </div>

          </div>

          <div className="mt-8 border-t border-zinc-800 pt-6">
            <p className="mb-3 text-sm text-zinc-500">
              About Company
            </p>

            <p className="text-sm leading-7 text-zinc-300">
              {company.description}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AvailableCompany;
