import React from 'react';

const CreateJob_Form = ({formData, handleSubmit, handleChange}) => {
    return (
        <div class="mx-14 mt-10 border border-primary-content rounded-lg">
            <div class="mt-10 text-center font-bold exo2">Add a Job</div>
            <div class="mt-3 text-center text-4xl font-bold exo2">Basic Job Information</div>
            <div class="p-8">
                <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                    <div class="flex gap-4 items-center">
                        <div className='w-1/2'>
                            <label>Job Title <span className='text-error'>*</span></label>
                            <input value={formData.title} required onChange={handleChange} type="text" name="title" class="px-4 h-12 w-full rounded-sm border border-primary-content focus:outline-primary" placeholder="Job title" />
                        </div>
                        <div className='w-1/2'>
                            <label>Company <span className='text-error'>*</span></label>
                            <input value={formData.company} required onChange={handleChange} type="text" name="company" class="w-full px-4 h-12 rounded-sm border border-primary-content focus:outline-primary" placeholder="Company name" />
                        </div>
                    </div>
                    <div class="flex gap-4 ">
                        <div className='w-1/2'>
                            <label>Address <span className='text-error'>*</span></label>
                            <input value={formData.location} required onChange={handleChange} type="text" name="location" class="w-full px-4 h-12 rounded-sm border border-primary-content focus:outline-primary" placeholder="Company address" />
                        </div>
                        <div className='w-1/2'>
                            <label>Logo URL <span className='text-error'>*</span></label>
                            <input value={formData.company_logo} required onChange={handleChange} type="text" name="company_logo" class="w-full block px-4 h-12 rounded-sm border border-primary-content focus:outline-primary" placeholder="Company logo" />
                        </div>
                    </div>
                    <div class=" flex gap-4">
                        <div className='w-1/2'>
                            <label>Job Type <span className='text-error'>*</span></label>
                            <select required onChange={handleChange} name="jobType" class="w-full px-4 h-12 rounded-sm border border-primary-content focus:outline-primary">
                                <option class="font-semibold">Select Job Type</option>
                                <option value="On-site" class="font-semibold">On-site</option>
                                <option value="Remote" class="font-semibold">Remote</option>
                                <option value="Hybrid" class="font-semibold">Hybrid</option>
                            </select>
                        </div>
                        <div className='w-1/2'>
                            <label>Job Category <span className='text-error'>*</span></label>
                            <select required onChange={handleChange} name="category" class="w-full px-4 h-12 rounded-sm border border-primary-content focus:outline-primary">
                                <option class="font-semibold">Select Job Category</option>
                                <option value="Development" class="font-semibold">Development</option>
                                <option value="Cyber Security" class="font-semibold">Cyber Security</option>
                                <option value="Hybrid" class="font-semibold">Digital Marketing</option>
                            </select>
                        </div>

                    </div>
                    <div className='flex gap-4 '>
                        <div className='w-1/2'>
                            <label>Requirements <span className='text-error'>*</span></label>
                            <input name="requirements" value={formData.requirements} required onChange={handleChange} placeholder="Requirements (comma separated)" className="w-full px-4 h-12 rounded-sm border border-primary-content focus:outline-primary" />
                        </div>

                        <div className='w-1/2'>
                            <label>Responsibilities <span className='text-error'>*</span></label>
                            <input name="responsibilities" value={formData.responsibilities} required onChange={handleChange} placeholder="Responsibilities (comma separated)" className="w-full px-4 h-12 rounded-sm border border-primary-content focus:outline-primary" />
                        </div>
                    </div>
                    <div className='flex gap-4 '>
                        <div className='w-1/2'>
                            <label>HR Email <span className='text-error'>*</span></label>
                            <input type="email" name="hr_email" value={formData.hr_email} required onChange={handleChange} placeholder="HR Email" className="w-full px-4 h-12 rounded-sm border border-primary-content focus:outline-primary" />
                        </div>

                        <div className='w-1/2'>
                            <label>HR Name <span className='text-error'>*</span></label>
                            <input name="hr_name" value={formData.hr_name} required onChange={handleChange} placeholder="HR Name" className="w-full px-4 h-12 rounded-sm border border-primary-content focus:outline-primary" />
                        </div>
                    </div>
                    <div className="flex gap-4 h-auto">
                        <div className='flex-1 flex flex-col'>
                            <label>Min Salary <span className='text-error'>*</span></label>
                            <input type="number" name="salaryRange.min" value={formData.salaryRange.min} required onChange={handleChange} placeholder="Min Salary" className="px-4 h-12 rounded-sm border border-primary-content focus:outline-primary " />
                        </div>
                        <div className='flex-1 flex flex-col'>
                            <label>Max Salary <span className='text-error'>*</span></label>
                            <input type="number" name="salaryRange.max" value={formData.salaryRange.max} required onChange={handleChange} placeholder="Max Salary" className="px-4 h-12 rounded-sm border border-primary-content focus:outline-primary " />
                        </div>
                        <div className='flex-1 flex flex-col'>
                            <label>Currency <span className='text-error'>*</span></label>
                            <select name="salaryRange.currency" value={formData.salaryRange.currency} required onChange={handleChange} className="px-4 h-12 rounded-sm border border-primary-content focus:outline-primary">
                                <option>Currency</option>
                                <option value="bdt">BDT</option>
                                <option value="usd">USD</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='w-1/2'>
                            <label>Status <span className='text-error'>*</span></label>
                            <select name="status" value={formData.status} required onChange={handleChange} className="px-4 h-12 rounded-sm border border-primary-content focus:outline-primary flex-1 w-full">
                                <option value="active">Status</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                        <div className='w-1/2'>
                            <label>Deadline <span className='text-error'>*</span></label>
                            <input value={formData.applicationDeadline} required onChange={handleChange} name="applicationDeadline" type='date' class="w-full px-4 h-12 rounded-sm border border-primary-content focus:outline-primary">
                            </input>
                        </div>
                    </div>
                    <div className=''>
                        <div>
                            <label>Description</label>
                            <textarea value={formData.description} required onChange={handleChange} name="description" cols="30" rows="5" class="w-full p-4 rounded-sm border border-primary-content focus:outline-primary" placeholder='Description'></textarea>
                        </div>
                    </div>
                    <div class="text-center">
                        <button type='submit' class="rounded-sm mt-5 bg-primary px-8 h-12 text-sm font-semibold text-white">Add Job</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateJob_Form;