
"use client";

import { useRouter } from "next/navigation";
import { getRolebyUserIdAndDelete } from "@/lib/mechine";

const DeleteJobs = ({ id }) => {
  const router = useRouter();
  console.log(id)

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Delete all your jobs?");

    if (!confirmDelete) return;

    const res = await getRolebyUserIdAndDelete(id);

    if (res?.deletedCount > 0) {
      router.refresh();
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="rounded-lg border border-red-500/30 px-4 py-2 text-sm text-red-400 hover:bg-red-500 hover:text-white"
    >
      Delete Jobs
    </button>
  );
};

export default DeleteJobs;
