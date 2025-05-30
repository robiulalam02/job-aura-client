import React from 'react';
import CountUp from 'react-countup';
import { BsBuildings } from 'react-icons/bs';
import { GiBoxUnpacking } from 'react-icons/gi';
import { PiSuitcaseSimple } from 'react-icons/pi';
import { SlMagnifier } from 'react-icons/sl';

const Hero = () => {
    return (
        <div className="h-[700px] relative bg-[url(/assets/banner.jpeg)] bg-cover bg-center">
            <div className='bg-black opacity-70 h-full w-full absolute'></div>
            <div className="flex flex-col gap-10 relative items-center justify-center h-full text-center z-10 text-white">
                <div >
                    <h1 className="text-7xl font-bold exo2">
                        Your Career's <span className="text-primary">Opportunity</span>
                    </h1>
                    <p className='mt-4 text-lg'>2400 Peoples are daily search in this portal, 100 user added job portal!</p>
                </div>
                <div className='grid grid-cols-4 gap-10'>
                    <div className='flex items-center gap-4'>
                        <div className='text-primary border border-primary p-3'><PiSuitcaseSimple size={40} /></div>
                        <div className='text-2xl'>
                            <h3 >Live Jobs</h3>
                            <span className='text-primary font-medium'>
                                <CountUp end={2000} />
                                +
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='text-primary border border-primary p-3'><BsBuildings size={40} /></div>
                        <div className='text-2xl'>
                            <h3 >Companies</h3>
                            <span className='text-primary font-medium'>
                                <CountUp end={1100} />
                                +
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='text-primary border border-primary p-3'><SlMagnifier size={40} /></div>
                        <div className='text-2xl'>
                            <h3 >Candidates</h3>
                            <span className='text-primary font-medium'>
                                <CountUp end={3000} />
                                +
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='text-primary border border-primary p-3'><GiBoxUnpacking size={40} /></div>
                        <div className='text-2xl'>
                            <h3 >New Jobs</h3>
                            <span className='text-primary font-medium'>
                                <CountUp end={300} />
                                +
                            </span>
                        </div>
                    </div>
                </div>
                <div className='min-w-4xl'>
                    <div className='flex items-center justify-between p-5 gap-5 bg-white h-24 rounded-md w-full'>
                        <input className='bg-slate-200 h-full w-full rounded-sm focus:outline-primary placeholder:text-primary px-4 text-primary' type="text" name="" placeholder='Search Jobs' />
                        <button className='bg-primary px-8 h-full flex items-center gap-2 rounded-sm' type="submit"><SlMagnifier /> Search</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Hero;