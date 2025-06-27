import React, { use } from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import { AuthContext } from '../AuthProvider/AuthContexts';
import ThemeToggle from '../components/ThemeToggle';

const Dashboard = () => {

    const { user, userSignOut } = use(AuthContext);



    return (
        <>
            {/* <Navbar></Navbar> */}
            <section className="max-w-full h-[100vh] mx-auto p-2 md:p-5 flex flex-col md:flex-row">
                {/* Sidebar */}
                <div className="w-full md:w-3/12 sticky top-0 md:h-[90vh] overflow-y-auto pr-0 md:pr-4 border-r border-indigo-300 bg-base-300 rounded-xl shadow-md mb-4 md:mb-0">
                    <div className="flex flex-col h-full">
                        {/* Top Navigation */}
                        {/* Logo */}
                        <Link to='/' className='flex justify-center items-center md:gap-1'>
                            <img src="/assets/logo.png" className='w-8 md:w-10 animate-pulse' alt="logo" />
                            <p className="text-base md:text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                                <span className='hidden md:flex'>HOBBINS</span>
                            </p>
                        </Link>
                        <nav className="mb-6 border-t-2 border-indigo-300">
                            <h2 className="text-xl font-bold mb-4 pl-4 pt-4">Dashboard</h2>
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
                        <div className="p-4 w-full border-t-2 border-indigo-300 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <img
                                    src={user?.photoURL}
                                    alt="Profile"
                                    className="w-10 h-10 rounded-full"
                                />
                                <div className="flex items-center gap-2">
                                    <p className="font-semibold text-center sm:text-left text-sm sm:text-base">{user?.displayName}</p>
                                    <ThemeToggle />
                                </div>
                            </div>
                            <button
                                onClick={() => userSignOut()}
                                className="btn btn-accent btn-sm text-white"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full md:w-9/12 md:pl-4 overflow-y-auto">
                    <Outlet />
                </div>
            </section>

        </>
    );
};

export default Dashboard;