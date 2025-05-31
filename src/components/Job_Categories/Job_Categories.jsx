import React from 'react';

const Job_Categories = ({ jobs }) => {
    return (
        <div className='mb-40 max-w-screen-xl mx-auto'>
                <div>
                    <h2 className='text-4xl font-bold exo2 mb-4'>Trending Jobs <span className='text-primary font-semibold'>Category</span></h2>
                    <p className='text-md'>To choose your trending job dream & to make future bright.</p>
                </div>
                <div className='grid grid-cols-5 gap-4 mt-10 justify-center items-center text-center'>
                    {
                        jobs.map(job=> <div className='border border-primary-content hover:border-primary transition-all duration-100 ease-in-out p-5 cursor-pointer' key={job._id}>
                            <p className='font-semibold'>{job.category}</p>
                        </div>)
                    }
                </div>
        </div>
    );
};

export default Job_Categories;