import React from 'react';

const Working_Process = () => {
    return (
        <div className='my-20 max-w-screen-xl mx-auto'>
            <div className='text-center'>
                <h2 className='text-4xl font-semibold exo2 mb-4'>Our Working <span className='text-primary'>Process</span></h2>
                <p className='text-md'>To choose your trending job dream & to make future bright.</p>
                {/* <span>&#8594;</span> */}
            </div>

            <div className='grid grid-cols-4 gap-5 mt-14'>
                <div className='flex justify-center items-center relative'>
                    <div className='bg-slate-100 justify-center gap-3 rounded-full w-[250px] h-[250px] flex flex-col items-center text-center transition-all border-primary-content ease-in-out border hover:border-primary cursor-pointer duration-300'>
                        <img src="/assets/account-create.svg" alt="" />
                        <h3 className='font-semibold exo2 text-xl'>Account Create</h3>
                        <p className='text-gray-500'>To create your account be confident & safely.</p>
                    </div>
                    <span className='absolute left-70 text-primary text-6xl'>&#8594;</span>
                </div>
                <div className='flex justify-center items-center relative'>
                    <div className='bg-slate-100 justify-center gap-3 rounded-full w-[250px] h-[250px] flex flex-col items-center text-center transition-all border-primary-content ease-in-out border hover:border-primary cursor-pointer duration-300'>
                        <img src="/assets/create-resume.svg" alt="" />
                        <h3 className='font-semibold exo2 text-xl'>Account Create</h3>
                        <p className='text-gray-500'>To create your account be confident & safely.</p>
                    </div>
                    <span className='absolute left-70 text-primary text-6xl'>&#8594;</span>
                </div>
                <div className='flex justify-center items-center relative'>
                    <div className='bg-slate-100 justify-center gap-3 rounded-full w-[250px] h-[250px] flex flex-col items-center text-center ease-in-out border-primary-content border hover:border-primary cursor-pointer transition-all duration-300'>
                        <img src="/assets/job-find.svg" alt="" />
                        <h3 className='font-semibold exo2 text-xl'>Account Create</h3>
                        <p className='text-gray-500'>To create your account be confident & safely.</p>
                    </div>
                    <span className='absolute left-70 text-primary text-6xl'>&#8594;</span>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='bg-slate-100 justify-center gap-3 rounded-full w-[250px] h-[250px] flex flex-col items-center text-center border-primary-content ease-in-out border hover:border-primary cursor-pointer transition-all duration-300'>
                        <img src="/assets/job-apply.svg" alt="" />
                        <h3 className='font-semibold exo2 text-xl'>Account Create</h3>
                        <p className='text-gray-500'>To create your account be confident & safely.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Working_Process;