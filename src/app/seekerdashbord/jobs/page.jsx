export const instant = false
import Jobs from '@/Components/Jobs';
import { getRole } from '@/lib/mechine';
import React from 'react';

const JobsPage = async() => {
    const jobs = await getRole();
    return (
        <div>
            <Jobs jobs={jobs} />
        </div>
    );
};

export default JobsPage;