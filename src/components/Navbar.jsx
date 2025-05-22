import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthContexts';
import { signOut } from 'firebase/auth';
import Swal from 'sweetalert2';
import { auth } from '../firebase/firebase.init';
import { HiMagnifyingGlass } from "react-icons/hi2";

const Navbar = () => {

    const { user } = use(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            Swal.fire({
                // position: "top-end",
                icon: "success",
                title: "Signed out successful! Still you can visit the homepage",
                showConfirmButton: false,
                timer: 2000
            });
            navigate('/SignIn')
        }).catch((error) => {
            console.log(error.message)
        });
    }

    const links = (
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/all-groups'>All Groups</Link></li>
            <li><Link to='/myGroups'>My Groups</Link></li>
            <li><Link to='/createGroup'>Create Groups</Link></li>
            <button onClick={handleSignOut} className='btn md:hidden btn-accent btn-sm text-white ml-1'>Logout</button>
        </>
    )


    return (
        <div className="navbar md:justify-between bg-base-100 shadow-sm px-4 py-2">
            <div className="flex items-center">
                {/* Mobile Dropdown */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="cursor-pointer md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    <img src="/assets/logo.png" className='w-8 md:w-10' alt="logo" />
                    <p className="text-base md:text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        hoBBins
                    </p>
                </Link>
                <HiMagnifyingGlass className='md:hidden cursor-pointer text-2xl text-gray-400' />
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto">
                {/* Desktop Links */}
                <ul className='menu menu-horizontal hidden md:flex items-center px-1 text-sm'>
                    {links}
                </ul>

                {/* Search */}
                <input
                    type="text"
                    placeholder="Search"
                    className="input hidden md:flex input-bordered input-sm md:w-30"
                />
                <HiMagnifyingGlass className='hidden md:flex cursor-pointer text-2xl text-gray-400' />

                {/* Auth Buttons */}
                {
                    !user ? (
                        <>
                            <div className='flex flex-row space-y-1 space-x-1 w-full md:w-auto'>
                                <Link to='/SignIn' className='btn btn-primary w-6/12 btn-sm'>Sign In</Link>
                                <Link to='/signUp' className='btn btn-secondary w-6/12 btn-sm'>Register</Link>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="dropdown dropdown-hover flex items-center mx-auto">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden">
                                    <img
                                        className='rounded-full object-cover w-full h-full'
                                        alt="User Avatar"
                                        src={user.photoURL}
                                    />
                                </div>
                                <p className="text-center text-sm ml-2 bg-gray-200 py-2 px-3 rounded-2xl hidden">{user.displayName}</p>

                                <div tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 md:w-32 p-2 shadow text-sm mt-20">
                                    <p className="text-center">{user.displayName}</p>
                                </div>
                            </div>
                            <button onClick={handleSignOut} className='hidden md:flex btn btn-accent btn-sm text-white ml-1'>Logout</button>
                        </>
                    )
                }
            </div>
        </div>

    );
};

export default Navbar;