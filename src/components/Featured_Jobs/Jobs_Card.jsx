import React from 'react';
import { IoIosArrowDropright } from 'react-icons/io';
import { IoBookmarkOutline } from 'react-icons/io5';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import { useNavigate } from 'react-router';

const Jobs_Card = ({ job }) => {
    const navigate = useNavigate();
    console.log(job);
    return (
        <div className='bg-white p-5 rounded-r-md border-l-2 border-primary-content hover:border-primary transition-all duration-150 ease-in-out cursor-pointer'>
            <div className='flex items-center gap-5 '>
                <div className='w-12 h-12 overflow-hidden'>
                    <img className='h-full w-full object-cover' src={job.company_logo} alt="" />
                </div>
                <div className='flex items-center justify-between w-full border-b border-gray-200 pb-2'>
                    <div>
                        <h3 className='font-semibold text-lg'>{job.title}</h3>
                        <p className='text-sm'>
                            <span>{job.location} </span>|
                            <span> {job.jobType}</span>
                        </p>
                    </div>
                    <button className='rounded-full border border-primary p-1 text-primary'>
                        <IoBookmarkOutline size={20} />
                    </button>
                </div>
            </div>
            <div className='bg-[#fdf9f9] my-4 flex px-6 py-10 rounded-md items-center'>
                <ul className='flex flex-col gap-2'>
                    <li className='flex items-center gap-1 font-semibold'>
                        <span className='text-primary'><IoIosArrowDropright /></span>
                        Salary:
                        <span className='font-normal'>{job.salaryRange.min}-{job.salaryRange.max} {job.salaryRange.currency}</span>
                        /month 
                    </li>
                    {
                        job.responsibilities.map((item, index) => <li className='flex items-center gap-1' key={index}>
                            <span className='text-primary'><IoIosArrowDropright /></span>
                            <span>{item}</span>
                        </li>)
                    }
                </ul>
            </div>
            <button onClick={() => navigate(`/jobs/${job._id}`)} className='text-primary exo2'>Apply Now</button>
        </div>
    );
};

export default Jobs_Card;