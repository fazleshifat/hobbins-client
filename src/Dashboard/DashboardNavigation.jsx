import React, { use } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthContexts';
import ThemeToggle from '../components/ThemeToggle';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import Swal from 'sweetalert2';

const DashboardNavigation = () => {

    const { user } = use(AuthContext);
    const Navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            Swal.fire({
                // position: "top-end",
                icon: "success",
                title: "Signed out successful! Still you can visit the homepage",
                showConfirmButton: false,
                timer: 2000
            });
            Navigate('/SignIn')
        }).catch((error) => {

        });
    }

    return (
        <div className="w-full sticky top-0 h-[90vh] overflow-y-auto pr-0 md:pr-4 border-r border-indigo-300 bg-base-300 rounded-xl shadow-md">
            <div className="flex flex-col h-full">
                {/* Top Navigation */}
                {/* Logo */}
                <Link to='/' className='hidden md:flex justify-center items-center md:gap-1'>
                    <img src="/assets/logo.png" className='w-8 md:w-10 animate-pulse' alt="logo" />
                    <p className="text-base md:text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        <span className='hidden md:flex'>HOBBINS</span>
                    </p>
                </Link>
                <nav className="mb-6 border-t-2 border-indigo-300">
                    <h2 className="text-xl font-bold mb-4 pl-4 pt-4 border-b-2 md:border-b-0 text-center">Dashboard</h2>
                    <ul className="space-y-2 mx-2">
                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                    `block px-4 py-2 rounded-xl font-medium ${isActive ? 'bg-purple-300 text-white' : 'hover:bg-purple-400 hover:text-white'
                                    }`
                                }
                            >
                                Overview
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/all-groups"
                                className={({ isActive }) =>
                                    `block px-4 py-2 rounded-xl font-medium ${isActive ? 'bg-purple-500 text-white' : 'hover:bg-purple-400 hover:text-white'
                                    }`
                                }
                            >
                                All Groups
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/create-group"
                                className={({ isActive }) =>
                                    `block px-4 py-2 rounded-xl font-medium ${isActive ? 'bg-purple-500 text-white' : 'hover:bg-purple-400 hover:text-white'
                                    }`
                                }
                            >
                                Create Group
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/my-groups"
                                className={({ isActive }) =>
                                    `block px-4 py-2 rounded-xl font-medium ${isActive ? 'bg-purple-500 text-white' : 'hover:bg-purple-400 hover:text-white'
                                    }`
                                }
                            >
                                My Groups
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `block px-4 py-2 rounded-xl font-medium ${isActive ? 'bg-purple-300 text-white' : 'hover:bg-purple-400 hover:text-white'
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/settings"
                                className={({ isActive }) =>
                                    `block px-4 py-2 rounded-xl font-medium ${isActive ? 'bg-purple-300 text-white' : 'hover:bg-purple-400 hover:text-white'
                                    }`
                                }
                            >
                                Settings
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                {/* Spacer */}
                <div className="flex-grow"></div>

                {/* Profile Info */}
                <div className="p-4 w-full border-t-2 border-indigo-300 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <img
                            src={user?.photoURL}
                            alt="Profile"
                            className="w-10 h-10 rounded-full"
                        />
                        <p>{user?.displayName}</p>
                        <ThemeToggle></ThemeToggle>
                    </div>
                    <button
                        onClick={() => handleSignOut()}
                        className="btn btn-accent btn-sm text-white"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div >
    );
};

export default DashboardNavigation;