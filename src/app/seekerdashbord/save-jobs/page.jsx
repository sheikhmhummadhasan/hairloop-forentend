import SavedJobs from '@/Components/SavedJobs';
import { auth } from '@/lib/auth';
import { getSavedJobs } from '@/lib/mechine';
import { headers } from 'next/headers';
export const instant = false;

const JaveJob = async () => {

  const session = await auth.api.getSession({
    headers: await headers()
  })

  const userID = session?.user?.id

  const SavedJob = await getSavedJobs(userID);
  console.log(SavedJob)
  
  return (
    <div>
      <SavedJobs SavedJob={SavedJob} />
    </div>
  );
};

export default JaveJob;