import React from 'react';
import { ImCancelCircle } from 'react-icons/im';
import { LuCalendarDays } from 'react-icons/lu';
import { VscThreeBars } from 'react-icons/vsc';

const MyJobsLists = ({ jobs }) => {
    console.log(jobs);
    const { title, location, applicationDeadline } = jobs;
    return (
        <tr className='text-center'>
            <td className='py-6 pl-3'>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                        <div className="flex items-center gap-1">
                            <div className='flex items-center space-x-0.5'>
                                <span className='text-primary'><LuCalendarDays /></span>
                                <p className='font-medium'>Deadline:</p>
                            </div>
                            <span className='opacity-70'>{applicationDeadline}</span></div>
                    </div>
                </div>
            </td>
            <td className='p-6'>
                <span>600</span>
            </td>
            <td>
                <span>400</span>
            </td>
            <td>
                <span>200</span>
            </td>
            <td>
                <div className='flex gap-4 justify-center'>
                    <button className="flex items-center gap-1 font-medium bg-blue-500 rounded-sm text-white px-5 py-1"><VscThreeBars /> details</button>
                    <button className="flex items-center gap-1 font-medium bg-rose-500 rounded-sm text-white px-5 py-1"><ImCancelCircle /> delete job</button>
                </div>
            </td>
        </tr>
    );
};

export default MyJobsLists;