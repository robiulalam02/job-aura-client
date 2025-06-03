import { Fragment, Suspense, use } from 'react';
import { AuthContext } from '../../provider/AuthContext';
import Loading from '../Loading/Loading';
import ApplicationList from './ApplicationList';
import { myApplications } from '../../API/Loaderapi';



const My_Applications = () => {
    const {profile} = use(AuthContext);
    console.log(profile);
    return (
        <div className='max-w-screen-xl mx-auto h-screen my-20'>
            <div>
                <h3 className='text-xl exo2 font-semibold'>My Job Applications:</h3>
            </div>
            <Suspense fallback={<Loading/>}>
                <ApplicationList myApplications={myApplications(profile.email)}></ApplicationList>
            </Suspense>
        </div>
    );
};

export default My_Applications;