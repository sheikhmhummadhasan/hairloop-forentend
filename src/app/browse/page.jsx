export const instant = false;
import Jobs from "@/Components/Jobs";
import { getRole } from "@/lib/mechine";
import React from "react";

const BrowseJobs = async () => {
  const jobs = await getRole();

  return (
    <div>
      <Jobs jobs={jobs} />;
    </div>
  );
};

export default BrowseJobs;
