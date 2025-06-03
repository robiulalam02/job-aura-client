import React, { use } from 'react';
import Application_Rows from './Application_Rows';

const ApplicationList = ({ myApplications }) => {
    const applications = use(myApplications);
    console.log(applications);
    return (
        <div className='mt-10 border border-primary-content  rounded-box'>
            <table className='w-full table'>
                
                <tbody>

                    {
                        applications.map(application => <Application_Rows key={application._id} application={application} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ApplicationList;