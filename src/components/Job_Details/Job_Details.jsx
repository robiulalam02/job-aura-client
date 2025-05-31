import React from 'react';
import { IoIosArrowDropright } from 'react-icons/io';
import { IoBookmarkOutline } from 'react-icons/io5';
import { MdKeyboardDoubleArrowRight, MdOutlineCategory, MdOutlineWorkOutline } from 'react-icons/md';
import { RiMoneyPoundCircleLine } from 'react-icons/ri';
import { SlLocationPin } from 'react-icons/sl';
import { useLoaderData } from 'react-router';

const Job_Details = () => {
    const jobData = useLoaderData();
    console.log(jobData);
    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <div className='text-center'>
                <h2 className='exo2 text-3xl font-semibold'>Job Details</h2>
            </div>
            <div className='mt-10 flex items-center justify-between border-b border-gray-200 pb-8'>
                <div className='flex items-center gap-4'>
                    <div className='w-12 h-12 overflow-hidden'>
                        <img className='h-full w-full object-cover' src={jobData.company_logo} alt="" />
                    </div>
                    <div>
                        <h3 className='font-semibold'>{jobData.title}</h3>
                        <p className='text-sm'>{jobData.company}</p>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-5'>
                    <div className='space-y-2'>
                        <div className='flex items-center gap-2'>
                            <span className='flex items-center gap-1'>
                                <span className='text-primary'><SlLocationPin /></span>
                                <span className='font-semibold'>Location:</span>
                            </span>
                            <span>{jobData.location}</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='flex items-center gap-1'>
                                <span className='text-primary'><MdOutlineWorkOutline /></span>
                                <span className='font-semibold'>Job Type:</span>
                            </span>
                            <span>{jobData.jobType}</span>
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <div className='flex items-center gap-2'>
                            <span className='flex items-center gap-1'>
                                <span className='text-primary'><MdOutlineCategory /></span>
                                <span className='font-semibold'>Category:</span>
                            </span>
                            <span>{jobData.category}</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='flex items-center gap-1'>
                                <span className='text-primary'><RiMoneyPoundCircleLine /></span>
                                <span className='font-semibold'>Salary:</span>
                            </span>
                            <span>{jobData.salaryRange.min}-{jobData.salaryRange.max} bdt/month</span>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='flex items-center gap-4'>
                        <p>Save Job</p>
                        <button className='border border-primary p-1 rounded-full'>
                            <span className='text-primary'><IoBookmarkOutline size={20} /></span>
                        </button>
                    </div>
                    <button className='bg-primary px-8 py-2 rounded-sm text-white'>Apply Job</button>
                </div>
            </div>
            <div className='flex justify-between mt-10'>
                <div className='space-y-5 w-8/12'>
                    <p>
                        <span className='font-semibold'>Job Description:   </span>
                        <span>{jobData.description}</span>
                    </p>
                    <p>
                        <span className='font-semibold'>Job Responsibilities: </span>
                        <span>Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</span>
                        <ul className='mt-2 space-y-2'>
                            {
                                jobData.responsibilities.map(item => <li className='flex items-center gap-1'><span className='text-primary'><MdKeyboardDoubleArrowRight /></span> {item}</li>)
                            }
                        </ul>
                    </p>
                    <p>
                        <span className='font-semibold'>Job Requirements: </span>
                        <ul className='mt-2 space-y-2'>
                            {
                                jobData.requirements.map(item => <li className='flex items-center gap-1'><span className='text-primary'><MdKeyboardDoubleArrowRight /></span> {item}</li>)
                            }
                        </ul>
                    </p>
                </div>
                <div className='w-4/12'>

                </div>
            </div>
        </div>
    );
};

export default Job_Details;