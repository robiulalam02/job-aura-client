import React, { use, useEffect } from 'react';
import MyJobsLists from './MyJobsLists';

const MyJobsTable = ({ myJobsData, setJobCount }) => {
    const myJobs = use(myJobsData);
    console.log(myJobs);
    useEffect(() => {
        setJobCount(myJobs.length)
    }, [myJobs, setJobCount])
    return (
        <div className='mt-10 rounded-box overflow-x-auto border-primary-content border'>
            <table className='min-w-full table rounded-box'>
                <thead className='bg-primary text-white'>
                    <tr className='rounded-t-box'>
                        <th>Job Title</th>
                        <th className='text-center'>Applications</th>
                        <th className='text-center'>Viewed</th>
                        <th className='text-center'>Not Viewed</th>
                        <th className='text-center'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myJobs?.map(jobs => <MyJobsLists key={jobs._id} jobs={jobs} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyJobsTable;