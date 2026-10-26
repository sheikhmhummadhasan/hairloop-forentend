import Link from "next/link";
import { FaMapMarkerAlt, FaBriefcase, FaArrowRight } from "react-icons/fa";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25-€40/hour",
  },
  {
    id: 2,
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25-€40/hour",
  },
  {
    id: 3,
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25-€40/hour",
  },
  {
    id: 4,
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25-€40/hour",
  },
  {
    id: 5,
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25-€40/hour",
  },
  {
    id: 6,
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25-€40/hour",
  },
];

const Jobs = () => {
  return (
    <section className="bg-black px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-9 text-center sm:mb-12">
          <div className="mb-4 inline-flex items-center gap-2 text-[10px] font-medium tracking-[0.16em] text-neutral-400 sm:text-xs">
            <span className="h-1 w-1 rounded-full bg-[#7965ff]" />
            SMART JOB DISCOVERY
            <span className="h-1 w-1 rounded-full bg-[#7965ff]" />
          </div>

          <h2 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
            The roles you'd never
            <br />
            find by searching
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {jobs.map((job) => (
            <article
              key={job.id}
              className="group flex min-h-[178px] flex-col rounded-2xl border border-white/[0.04] bg-[#151515] p-4 transition duration-300 hover:-translate-y-1 hover:border-[#7965ff]/30 hover:bg-[#19191d] sm:min-h-[178px] sm:p-5"
            >
              <h3 className="text-base font-medium tracking-tight text-white sm:text-lg">
                {job.title}
              </h3>

              <p className="mt-2 line-clamp-2 text-[11px] leading-5 text-neutral-400 sm:text-xs">
                {job.description}
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#222222] px-2 py-1 text-[10px] text-neutral-200">
                  <FaMapMarkerAlt className="text-[#d98af7]" />
                  {job.location}
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#222222] px-2 py-1 text-[10px] text-neutral-200">
                  <FaBriefcase className="text-[#d98af7]" />
                  {job.type}
                </span>
              </div>

              <div className="mt-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#222222] px-2 py-1 text-[10px] text-neutral-200">
                  <span className="text-[#d98af7]">€</span>
                  {job.salary}
                </span>
              </div>

              <div className="mt-auto pt-5">
                <Link
                  href={`/browse/${job.id}`}
                  className="inline-flex items-center gap-2 text-[11px] font-medium text-white transition-colors hover:text-[#a99cff]"
                >
                  Apply Now
                  <FaArrowRight className="text-[9px] transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <Link
            href="/browse"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-xs font-medium text-black transition hover:bg-[#dedbff]"
          >
            View all job openings
            <FaArrowRight className="text-[10px]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Jobs;