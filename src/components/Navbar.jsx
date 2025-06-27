import React, { use, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthContexts';
import { signOut } from 'firebase/auth';
import Swal from 'sweetalert2';
import { auth } from '../firebase/firebase.init';
import { HiMagnifyingGlass } from "react-icons/hi2";
import ThemeToggle from './ThemeToggle';

const Navbar = () => {

    const { user, userSignOut } = use(AuthContext);
    const navigate = useNavigate();

    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    // const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 10);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const handleSignOut = () => {
        userSignOut();
        navigate('/signIn');
    }

    const links = (
        <>
            <li><Link to='/' className='font-semibold text-gray-600 dark:text-indigo-300 hover:text-indigo-700'>Home</Link></li>
            <li><Link to='/all-groups' className='font-semibold text-gray-600 dark:text-indigo-300 hover:text-indigo-700'>All Groups</Link></li>
            <li><Link to='/aboutUs' className='font-semibold text-gray-600 dark:text-indigo-300 hover:text-indigo-700'>About Us</Link></li>
            <li><Link to='/contactSection' className='font-semibold text-gray-600 dark:text-indigo-300 hover:text-indigo-700'>Contact</Link></li>
            <li><Link to='/support' className='font-semibold text-gray-600 dark:text-indigo-300 hover:text-indigo-700'>Support</Link></li>
            {user && <li><Link to='/dashboard' className='font-semibold text-gray-600 dark:text-indigo-300 hover:text-indigo-700'>Dashboard</Link></li>}

        </>
    )


    return (

        <div className="sticky top-0 z-50">

            <div className="navbar mx-auto justify-between px-5 bg-black/10 dark:bg-indigo-700/60 backdrop-blur-md shadow-sm">
                <div className="flex items-center">
                    {/* Mobile Dropdown */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn bg-gradient-to-r from-purple-300 via-pink-200 to-red-200 text-white font-semibold px-4 py-2 shadow-md hover:from-purple-300 hover:to-red-200 transition duration-300 cursor-pointer md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-40 p-2 shadow text-sm">
                            {links}
                        </ul>
                    </div>

                    {/* Logo */}
                    <Link to='/' className='flex items-center md:gap-1'>
                        <img src="/assets/logo.png" className='w-8 md:w-10 animate-pulse' alt="logo" />
                        <p className="text-base md:text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                            <span className='hidden md:flex'>hoBBins</span>
                        </p>
                    </Link>
                    {/* <HiMagnifyingGlass className='md:hidden cursor-pointer text-2xl text-gray-400' /> */}
                </div>

                <div className="flex items-center">
                    {/* Desktop Links */}
                    <ul className='space-x-7 mr-3 menu-horizontal hidden md:flex items-center px-1 text-sm'>
                        {links}
                    </ul>

                    {/* theme controller */}
                    <ThemeToggle></ThemeToggle>
                    {/* <ThemeController></ThemeController> */}
                    {/* Auth Buttons */}
                    {
                        !user ? (
                            <>
                                <div className='flex flex-row space-y-1 space-x-1 w-full md:w-auto'>
                                    <Link to='/SignIn' className='btn btn-primary w-fit btn-sm'>Sign In</Link>
                                    <Link to='/signUp' className='btn btn-secondary w-fit btn-sm'>Register</Link>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='flex items-center bg-base-300 p-2 rounded-3xl'>
                                    <div className="drawer-content flex items-center mx-auto">
                                        <label htmlFor="my-drawer-4" className=" w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden cursor-pointer">
                                            <img
                                                className="rounded-full object-cover w-full h-full"
                                                alt="User Avatar"
                                                src={user.photoURL}
                                            />
                                        </label>
                                    </div>
                                    <button onClick={handleSignOut} className='hidden md:flex btn btn-accent btn-sm text-white ml-1'>Logout</button>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>


    );
};

export default Navbar;