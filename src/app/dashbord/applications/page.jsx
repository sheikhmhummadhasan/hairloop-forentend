export const instant = false
import { auth } from "@/lib/auth";
import { getApplicationMyCompany } from "@/lib/mechine";
import { headers } from "next/headers";
import ApplicantCard from "@/Components/ApplicantCard";

const ApplicentPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const id = session?.user?.id;
  const role = session?.user?.role

  const applicnt = await getApplicationMyCompany(id);

  return (
    <div className="min-h-screen bg-[#09090b] text-white px-5 py-10">

      <div className="max-w-5xl mx-auto">

        <div className="mb-7">
          <h1 className="text-2xl font-bold">
            Applicants ({applicnt.length})
          </h1>

          <p className="text-xs text-gray-400 mt-2">
            Manage and review all applicants for your job postings.
          </p>
        </div>

        {applicnt.length === 0 ? (
          <div className="border border-[#303033] bg-[#18181b] rounded-xl p-10 text-center">
            <h2 className="text-lg font-semibold">
              No Applicants Yet
            </h2>
            <p className="text-sm text-gray-400 mt-2">
              Applicants will appear here when someone applies for your jobs.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {applicnt.map((applicant) => (
              <ApplicantCard
                key={applicant._id}
                applicant={applicant}
                role={role}
              />
            ))}

          </div>
        )}

      </div>

    </div>
  );
};

export default ApplicentPage;
