import React, { use } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthContext';
import Swal from 'sweetalert2';

const Navbar = () => {
    const navigate = useNavigate();
    const { profile, userSignOut } = use(AuthContext)
    console.log(profile);

    const handleSignOut = () => {
        userSignOut()
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "user signout successful",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }

    const links = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/findJobs">Find Jobs</NavLink>
        <NavLink to="/createJobs">Create Jobs</NavLink>
        <NavLink to="/contuct">Contact</NavLink>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm py-3 px-4">
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
                        {
                            profile ?
                                <div className='flex items-center gap-4'>
                                    <div className='dropdown w-12 h-12'>
                                        <button>
                                            <img className='w-full h-full' src={profile.photoURL} alt="" />
                                        </button>
                                        <ul className="menu relative right-5 dropdown-content bg-base-100 rounded-box z-1 w-52 shadow-sm p-3 gap-2">
                                            <Link to="/">my profile</Link>
                                            <Link to="/myApplications">my applications</Link>
                                        </ul>
                                    </div>
                                    <button onClick={handleSignOut} className='bg-primary text-white px-8 py-2 font-medium rounded-sm'>Logout</button>
                                </div>
                                :
                                <div className='flex items-center gap-4'>
                                    <button onClick={() => navigate('/auth/login')} className='border border-primary text-primary px-8 py-2 font-medium rounded-sm'>Login</button>
                                    <button onClick={() => navigate('/auth/registration')} className='bg-primary text-white px-8 py-2 font-medium rounded-sm'>Registier</button>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;