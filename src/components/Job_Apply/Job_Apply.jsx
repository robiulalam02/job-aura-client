import React from 'react';
import { HiOutlineUserCircle } from 'react-icons/hi';

const Job_Apply = () => {
    return (
        <div className='h-screen bg-gray-50'>
            <div className='max-w-screen-xl mx-auto h-full py-20 pb-40'>
                <div className='text-center'>
                    <h2 className='exo2 text-3xl font-semibold'>Job Application</h2>
                </div>
                <div className='mt-10 border border-primary-content rounded-lg p-14 bg-white h-full'>
                    <h3 className='exo2 text-xl font-semibold mb-8'>Personal Information</h3>
                    <form className='grid grid-cols-2 gap-4'>
                        <div>
                            <label>Full Name<span className='text-error'>*</span></label>
                            <div className='border border-primary-content flex items-center gap-2 p-3 rounded-md'>
                                <div className='flex items-center gap-1'>
                                    <span className='text-primary'><HiOutlineUserCircle /></span>
                                    <span className='text-gray-600'>|</span>  
                                </div>
                                <div className='w-full'>
                                    <input type="text" className='focus:outline-0 w-full'/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label>Email<span className='text-error'>*</span></label>
                            <div className='border border-primary-content flex items-center gap-2 p-3 rounded-md'>
                                <div className='flex items-center gap-1'>
                                    <span className='text-primary'><HiOutlineUserCircle /></span>
                                    <span className='text-gray-600'>|</span>  
                                </div>
                                <div className='w-full'>
                                    <input type="email" className='focus:outline-0 w-full'/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Job_Apply;