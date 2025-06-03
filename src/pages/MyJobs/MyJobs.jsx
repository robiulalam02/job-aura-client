import React, { Fragment, Suspense, use, useState } from 'react';
import { AuthContext } from '../../provider/AuthContext';
import Loading from '../../components/Loading/Loading';
import { myJobsData } from '../../API/MyJobsAPI';
import MyJobsTable from './MyJobsTable';

const MyJobs = () => {
    const { profile } = use(AuthContext);
    console.log(myJobsData(profile.email));
    const [jobCount, setJobCount] = useState(0)
    return (
        <div className='max-w-screen-xl mx-auto h-screen my-20'>
            <div className='flex items-center justify-between'>
                <h3 className='text-xl exo2 font-semibold'>My Added Jobs Lists:</h3>
                <h3 className='text-xl exo2 font-semibold'>Total Jobs: 0{jobCount}</h3>
            </div>
            <Suspense fallback={<Loading />}>
                <MyJobsTable setJobCount={setJobCount} myJobsData={myJobsData(profile.email)}></MyJobsTable>
            </Suspense>
        </div>
    );
};

export default MyJobs;