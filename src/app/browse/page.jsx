export const instant = false;
import Jobs from "@/Components/Jobs";
import { auth } from "@/lib/auth";
import { getRole } from "@/lib/mechine";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const BrowseJobs = async () => {
  const jobs = await getRole();
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if(!session){
    redirect('/signin')
  }

  return (
    <div>
      <Jobs jobs={jobs} />;
    </div>
  );
};

export default BrowseJobs;
