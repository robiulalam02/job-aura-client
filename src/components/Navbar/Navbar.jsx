import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {

    const links = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Find Jobs</NavLink>
        <NavLink to="/">Create Jobs</NavLink>
        <NavLink to="/">Contact</NavLink>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <img className='w-40' src="/public/assets/logo-copy.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-10">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='gap-4 flex'>
                        <button className='border border-primary text-primary px-8 py-2 font-medium rounded-sm'>Login</button>
                        <button className='bg-primary text-white px-8 py-2 font-medium rounded-sm'>Registier</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;