import React from 'react';
import { AiOutlineBars } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import { VscThreeBars } from 'react-icons/vsc';

const Application_Rows = ({ application }) => {
    const { applyDate, company, company_logo, location, title } = application;
    return (
        <tr className='border-primary-content'>
            <td className='p-6'>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={company_logo}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{company}</div>
                        <div className="text-sm opacity-50">{location}</div>
                    </div>
                </div>
            </td>
            <td className='p-6'>
                <div className='flex flex-col items-center gap-1'>
                    <p><span className='font-semibold'>Position:</span> {title}</p>
                    <span className="badge badge-ghost badge-sm">Applied on: {applyDate}</span>
                </div>
            </td>
            <td>
                <div className='flex gap-4 justify-end'>
                    <button className="flex items-center gap-1 font-medium bg-blue-500 rounded-sm text-white px-5 py-1"><VscThreeBars /> details</button>
                    <button className="flex items-center gap-1 font-medium bg-rose-500 rounded-sm text-white px-5 py-1"><ImCancelCircle /> cancel</button>
                </div>
            </td>
        </tr>
    );
};

export default Application_Rows;