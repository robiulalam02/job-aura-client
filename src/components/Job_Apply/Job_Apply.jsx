import React, { use } from 'react';
import { CgWebsite } from 'react-icons/cg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { IoCalendarOutline } from 'react-icons/io5';
import { MdOutlineEmail, MdOutlinePhoneInTalk, MdSchool } from 'react-icons/md';
import { PiGenderIntersexBold } from 'react-icons/pi';
import { SlLocationPin } from 'react-icons/sl';
import { AuthContext } from '../../provider/AuthContext';
import { useParams } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';

const Job_Apply = () => {

    const { profile } = use(AuthContext);
    const { id } = useParams();
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-GB');

    const handleApplyJob = e => {
        e.preventDefault();

        const form = new FormData(e.target);
        const applyDetails = Object.fromEntries(form.entries());

        const application = {
            jobId: id,
            ...applyDetails,
            applyDate: formattedDate
        }

        console.log(application);

        // send application data to Database

        axios.post('http://localhost:3000/applications', {
            ...application
        })
            .then(response => {
                if (response.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "job application submitted successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    e.target.reset();
                }
            })
    }

    return (
        <div className=' bg-gray-50'>
            <div className='max-w-screen-xl mx-auto h-full py-20 pb-40'>
                <div className='text-center'>
                    <h2 className='exo2 text-3xl font-semibold'>Job Application</h2>
                </div>
                <div className='mt-10 border border-primary-content rounded-lg p-14 bg-white h-full'>
                    <h3 className='exo2 text-xl font-semibold mb-8'>Personal Information</h3>
                    <form onSubmit={handleApplyJob} className='grid grid-cols-2 gap-4'>
                        <div>
                            <label>Full Name<span className='text-error'>*</span></label>
                            <div className='border border-primary-content flex items-center gap-2 p-3 rounded-md'>
                                <div className='flex items-center gap-1'>
                                    <span className='text-primary'><HiOutlineUserCircle /></span>
                                    <span className='text-gray-600'>|</span>
                                </div>
                                <div className='w-full'>
                                    <input type="text" name='name' className='focus:outline-0 w-full' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label>Email<span className='text-error'>*</span></label>
                            <div className='border border-primary-content flex items-center gap-2 p-3 rounded-md'>
                                <div className='flex items-center gap-1'>
                                    <span className='text-primary'><MdOutlineEmail /></span>
                                    <span className='text-gray-600'>|</span>
                                </div>
                                <div className='w-full'>
                                    <input type="email" readOnly value={profile.email} name='email' className='focus:outline-0 w-full text-gray-500' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label>Date of Birth<span className='text-error'>*</span></label>
                            <div className='border border-primary-content flex items-center gap-2 p-3 rounded-md'>
                                <div className='flex items-center gap-1'>
                                    <span className='text-primary'><IoCalendarOutline /></span>
                                    <span className='text-gray-600'>|</span>
                                </div>
                                <div className='w-full'>
                                    <input type="date" name='birthDate' className='focus:outline-0 w-full' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label>Phone<span className='text-error'>*</span></label>
                            <div className='border border-primary-content flex items-center gap-2 p-3 rounded-md'>
                                <div className='flex items-center gap-1'>
                                    <span className='text-primary'><MdOutlinePhoneInTalk /></span>
                                    <span className='text-gray-600'>|</span>
                                </div>
                                <div className='w-full'>
                                    <input type="number" name='phone' className='focus:outline-0 w-full' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label>Address<span className='text-error'>*</span></label>
                            <div className='border border-primary-content flex items-center gap-2 p-3 rounded-md'>
                                <div className='flex items-center gap-1'>
                                    <span className='text-primary'><SlLocationPin /></span>
                                    <span className='text-gray-600'>|</span>
                                </div>
                                <div className='w-full'>
                                    <input type="text" name='address' className='focus:outline-0 w-full' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label>Github Link<span className='text-error'>*</span></label>
                            <div className='border border-primary-content flex items-center gap-2 p-3 rounded-md'>
                                <div className='flex items-center gap-1'>
                                    <span className='text-primary'><FaGithub /></span>
                                    <span className='text-gray-600'>|</span>
                                </div>
                                <div className='w-full'>
                                    <input type="url" name='github' className='focus:outline-0 w-full' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label>Linkedin Link<span className='text-error'>*</span></label>
                            <div className='border border-primary-content flex items-center gap-2 p-3 rounded-md'>
                                <div className='flex items-center gap-1'>
                                    <span className='text-primary'><FaLinkedin /></span>
                                    <span className='text-gray-600'>|</span>
                                </div>
                                <div className='w-full'>
                                    <input type="url" name='linkedin' className='focus:outline-0 w-full' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label>Portfolio Link<span className='text-error'>*</span></label>
                            <div className='border border-primary-content flex items-center gap-2 p-3 rounded-md'>
                                <div className='flex items-center gap-1'>
                                    <span className='text-primary'><CgWebsite /></span>
                                    <span className='text-gray-600'>|</span>
                                </div>
                                <div className='w-full'>
                                    <input type="url" name='portfolio' className='focus:outline-0 w-full' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label>Gender<span className='text-error'>*</span></label>
                            <div className='border border-primary-content flex items-center gap-2 p-3 rounded-md'>
                                <div className='flex items-center gap-1'>
                                    <span className='text-primary'><PiGenderIntersexBold /></span>
                                    <span className='text-gray-600'>|</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <input className='text-primary' type="radio" name="gender" value="male" />
                                    <label>Male</label>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <input className='text-primary' type="radio" name="gender" value="female" />
                                    <label>Female</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label>Education<span className='text-error'>*</span></label>
                            <div className='border border-primary-content flex items-center gap-2 p-3 rounded-md'>
                                <div className='flex items-center gap-1'>
                                    <span className='text-primary'><MdSchool /></span>
                                    <span className='text-gray-600'>|</span>
                                </div>
                                <div className='w-full'>
                                    <input type="text" name='education' className='focus:outline-0 w-full' />
                                </div>
                            </div>
                        </div>

                        <div>
                            <button className='bg-primary px-6 py-3 font-medium rounded-md text-white mt-10' type="submit">Apply Job</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Job_Apply;