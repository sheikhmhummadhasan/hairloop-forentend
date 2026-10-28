
import {
  FileText,
  Users,
  Zap,
  CheckCircle2,
  Building2,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  {
    title: "Total Job Posts",
    value: "48",
    icon: FileText,
  },
  {
    title: "Total Applicants",
    value: "1,284",
    icon: Users,
  },
  {
    title: "Active Jobs",
    value: "18",
    icon: Zap,
  },
  {
    title: "Jobs Closed",
    value: "32",
    icon: CheckCircle2,
  },
];

const applications = [
  {
    name: "Julianne Moore",
    role: "Senior Product Designer",
    date: "Oct 24, 2026",
    experience: "6 years",
    status: "Interviewing",
  },
  {
    name: "Robert Downey",
    role: "Backend Engineer",
    date: "Oct 23, 2026",
    experience: "4 years",
    status: "New",
  },
  {
    name: "Emma Stone",
    role: "Marketing Lead",
    date: "Oct 22, 2026",
    experience: "8 years",
    status: "Reviewing",
  },
  {
    name: "Chris Pratt",
    role: "Product Manager",
    date: "Oct 21, 2026",
    experience: "5 years",
    status: "Rejected",
  },
];

const companies = [
  {
    name: "Google Inc.",
    description: "Technology · Mountain View",
    jobs: 24,
    icon: "G",
  },
  {
    name: "Meta Platforms",
    description: "Social Media · Menlo Park",
    jobs: 18,
    icon: "M",
  },
  {
    name: "Stripe",
    description: "Fintech · San Francisco",
    jobs: 12,
    icon: "S",
  },
  {
    name: "Tesla",
    description: "Automotive · Austin",
    jobs: 31,
    icon: "T",
  },
];

const statusStyles = {
  Interviewing: "bg-emerald-500/15 text-emerald-400",
  New: "bg-gray-500/20 text-gray-300",
  Reviewing: "bg-amber-500/15 text-amber-400",
  Rejected: "bg-red-500/15 text-red-400",
};

const DashboardPage = () => {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-xl font-medium tracking-tight sm:text-2xl">
          Welcome back, Alex Sterling
        </h1>
      </section>

      <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ title, value, icon: Icon }) => (
          <div
            key={title}
            className="rounded-lg border border-[#303030] bg-[#1b1b1b] p-4 transition hover:border-[#484848]"
          >
            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-md bg-[#303030] text-gray-200">
              <Icon size={18} strokeWidth={1.7} />
            </div>
            <p className="text-xs text-gray-400">{title}</p>
            <p className="mt-1 text-2xl font-medium">{value}</p>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 items-start gap-5 xl:grid-cols-[minmax(0,1.8fr)_minmax(280px,0.85fr)]">
        <div className="min-w-0">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-lg font-medium">Recent Applications</h2>
            <button
              type="button"
              className="text-xs text-gray-400 transition hover:text-white"
            >
              View all
            </button>
          </div>

          <div className="overflow-hidden rounded-lg border border-[#303030] bg-[#1b1b1b]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] text-left text-xs">
                <thead className="border-b border-[#303030] bg-[#202020] text-gray-400">
                  <tr>
                    <th className="px-4 py-4 font-medium">Candidate Name</th>
                    <th className="px-4 py-4 font-medium">Role</th>
                    <th className="px-4 py-4 font-medium">Date Applied</th>
                    <th className="px-4 py-4 font-medium">Experience</th>
                    <th className="px-4 py-4 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((application) => (
                    <tr
                      key={application.name}
                      className="border-b border-[#292929] last:border-0 hover:bg-[#222222]"
                    >
                      <td className="whitespace-nowrap px-4 py-5">
                        <div className="flex items-center gap-2">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#383838] text-[10px] font-semibold text-gray-300">
                            {application.name
                              .split(" ")
                              .map((part) => part[0])
                              .join("")}
                          </div>
                          <span className="font-medium text-gray-200">
                            {application.name}
                          </span>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-5 text-gray-400">
                        {application.role}
                      </td>
                      <td className="whitespace-nowrap px-4 py-5 text-gray-400">
                        {application.date}
                      </td>
                      <td className="whitespace-nowrap px-4 py-5 text-gray-400">
                        {application.experience}
                      </td>
                      <td className="whitespace-nowrap px-4 py-5">
                        <span
                          className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${
                            statusStyles[application.status]
                          }`}
                        >
                          {application.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="min-w-0">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-lg font-medium">My Top Companies</h2>
            <button
              type="button"
              className="text-xs text-gray-400 transition hover:text-white"
            >
              View all
            </button>
          </div>

          <div className="rounded-lg border border-[#303030] bg-[#1b1b1b] p-3">
            <div className="space-y-1">
              {companies.map((company) => (
                <div
                  key={company.name}
                  className="flex items-center gap-3 rounded-md p-3 transition hover:bg-[#252525]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#414141] bg-[#303030] text-sm font-bold text-gray-200">
                    {company.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-semibold text-gray-100">
                      {company.name}
                    </p>
                    <p className="mt-1 truncate text-[10px] text-gray-500">
                      {company.description}
                    </p>
                  </div>

                  <div className="shrink-0 text-right">
                    <p className="text-xs font-medium">{company.jobs}</p>
                    <p className="mt-1 text-[8px] text-gray-400">ACTIVE JOBS</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-md border border-[#383838] py-3 text-xs text-gray-300 transition hover:bg-[#292929] hover:text-white"
            >
              View All Companies
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;
