import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import { SlLocationPin } from 'react-icons/sl';

const Dream_Location = () => {
    const [next, setNext] = useState(null)
    return (
        <div className='bg-slate-100 h-[600px] my-20'>
            <div className='max-w-screen-xl mx-auto py-20'>
                <div>
                    <h2 className='text-4xl font-bold exo2 mb-4'>Get Job With <span className='text-primary font-semibold'>Dream Location</span></h2>
                    <div className='flex justify-between'>
                        <p className='text-md'>To choose your trending job dream & to make future bright.</p>
                        <div class="flex gap-2">
                            <button
                                onClick={() => next && next.slidePrev()}
                                class="inline-flex items-center border border-primary h-8 w-8 rounded-full justify-center text-primary hover:bg-indigo-50">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18">
                                    </path>
                                </svg>

                            </button>
                            <button
                                onClick={() => next && next.slideNext()}
                                class="inline-flex justify-center items-center border border-primary h-8 w-8  rounded-full text-primary hover:bg-indigo-50">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* <span>&#8594;</span> */}
                </div>
                <div className='mt-10'>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={4}
                        autoplay={{ delay: 3000 }}
                        loop={true}
                        onSwiper={setNext}
                    >
                        <SwiperSlide>
                            <div className='text-center flex flex-col items-center gap-5'>
                                <div className='h-48 w-full overflow-hidden rounded-md'>
                                    <img className='h-full w-full object-cover transition-all duration-300 hover:scale-110 delay-100 ease-in-out' src="https://i.ibb.co.com/chCK75LL/new-york.jpg" alt="" />
                                </div>
                                <div>
                                    <span className='flex items-center gap-1'>
                                        <span className='text-primary'>
                                            <SlLocationPin />
                                        </span>

                                        <h3 className='font-semibold text-lg'>New York, USA</h3>
                                    </span>
                                    <p className='text-gray-600'>Job Available: <span className='font-semibold text-gray-900'>255</span></p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='text-center flex flex-col items-center gap-5'>
                                <div className='h-48 overflow-hidden rounded-md'>
                                    <img className='h-full w-full object-cover transition-all duration-300 hover:scale-110 delay-100 ease-in-out' src="https://i.ibb.co.com/60B6nSyv/australia.jpg" alt="" />
                                </div>
                                <div>
                                    <span className='flex items-center gap-1'>
                                        <span className='text-primary'>
                                            <SlLocationPin />
                                        </span>

                                        <h3 className='font-semibold text-lg'>Sydey, Australia</h3>
                                    </span>
                                    <p className='text-gray-600'>Job Available: <span className='font-semibold text-gray-900'>430</span></p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='text-center flex flex-col items-center gap-5'>
                                <div className='h-48 w-full overflow-hidden rounded-md'>
                                    <img className='h-full w-full object-cover transition-all duration-300 hover:scale-110 delay-100 ease-in-out' src="https://i.ibb.co.com/QFSqt75D/london.jpg" alt="" />
                                </div>
                                <div>
                                    <span className='flex items-center gap-1'>
                                        <span className='text-primary'>
                                            <SlLocationPin />
                                        </span>

                                        <h3 className='font-semibold text-lg'>London, UK</h3>
                                    </span>
                                    <p className='text-gray-600'>Job Available: <span className='font-semibold text-gray-900'>230</span></p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='text-center flex flex-col items-center gap-5'>
                                <div className='h-48 overflow-hidden rounded-md'>
                                    <img className='h-full w-full object-cover transition-all duration-300 hover:scale-110 delay-100 ease-in-out' src="https://i.ibb.co.com/SXx74RT3/dhaka.jpg" alt="" />
                                </div>
                                <div>
                                    <span className='flex items-center gap-1'>
                                        <span className='text-primary'>
                                            <SlLocationPin />
                                        </span>

                                        <h3 className='font-semibold text-lg'>Dhaka, Bangladesh</h3>
                                    </span>
                                    <p className='text-gray-600'>Job Available: <span className='font-semibold text-gray-900'>560</span></p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='text-center flex flex-col items-center gap-5'>
                                <div className='h-48 overflow-hidden rounded-md'>
                                    <img className='h-full w-full object-cover transition-all duration-300 hover:scale-110 delay-100 ease-in-out' src="https://i.ibb.co.com/LXktTCrB/delhi.jpg" alt="" />
                                </div>
                                <div>
                                    <span className='flex items-center gap-1'>
                                        <span className='text-primary'>
                                            <SlLocationPin />
                                        </span>

                                        <h3 className='font-semibold text-lg'>New Delhi, India</h3>
                                    </span>
                                    <p className='text-gray-600'>Job Available: <span className='font-semibold text-gray-900'>890</span></p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Dream_Location;