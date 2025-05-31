import React, { useEffect, useState } from 'react';
import Jobs_Card from './Jobs_Card';

const Featured_Jobs = ({ jobs }) => {

    const [jobsData, setJobsData] = useState([]);

    useEffect(()=>{
        const newJobs = jobs.slice(0, 6);
        setJobsData(newJobs)
    }, [jobs])

    return (
        <div className='bg-slate-100 my-40'>
            <div className='max-w-screen-xl mx-auto py-20'>
                <div>
                    <h2 className='text-4xl font-bold exo2 mb-4'>Latest <span className='text-primary font-semibold'>Featured</span> Jobs</h2>
                    <p className='text-md'>To choose your trending job dream & to make future bright.</p>
                </div>

                <div className='grid grid-cols-3 gap-4 mt-10'>
                    {
                        jobsData.map(job => <Jobs_Card key={job._id} job={job} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Featured_Jobs;