"use client";

import { updatejobsClosed } from "@/lib/mechine";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const UpdateJobsStatus = ({ id }) => {
    const router = useRouter()
  const handelUpdate = async () => {
    const updateStatus = await updatejobsClosed(id);

    if (updateStatus?.modifiedCount > 0) {
      toast.success("Job closed successfully");
      router.refresh()
    }
  };

  return (
    <button
      onClick={handelUpdate}
      className="rounded-lg border border-zinc-700 px-4 py-2 text-sm transition hover:bg-white hover:text-black"
    >
      Closed
    </button>
  );
};

export default UpdateJobsStatus;