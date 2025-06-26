import React, { use } from 'react';
import { NavLink, Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import { AuthContext } from '../AuthProvider/AuthContexts';
import ThemeToggle from '../components/ThemeToggle';

const Dashboard = () => {

    const { user, userSignOut } = use(AuthContext);



    return (
        <>
            {/* <Navbar></Navbar> */}
            <section className="max-w-full h-[100vh] mx-auto p-5 flex">
                {/* Sidebar */}
                <div className="w-3/12 sticky h-full top-1 overflow-y-auto pr-4 border-r-5 border-indigo-300 bg-base-300 rounded-xl shadow-md">
                    <div className="flex flex-col h-full">
                        {/* Top Navigation */}
                        <nav className="mb-6">
                            <h2 className="text-xl font-bold mb-4 pl-4 pt-2">Dashboard</h2>
                            <ul className="space-y-2 mx-2">

                                <li>
                                    <NavLink
                                        to="/dashboard"
                                        className={({ isActive }) =>
                                            `block px-4 py-2 rounded-xl font-medium ${isActive ? 'bg-purple-300 text-white' : 'hover:bg-purple-400 hover:text-white'}`
                                        }
                                    >
                                        Overview
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/all-groups"
                                        className={({ isActive }) =>
                                            `block px-4 py-2 rounded-xl font-medium ${isActive ? 'bg-purple-500 text-white' : 'hover:bg-purple-400 hover:text-white'}`
                                        }
                                    >
                                        All Groups
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/create-group"
                                        className={({ isActive }) =>
                                            `block px-4 py-2 rounded-xl font-medium ${isActive ? 'bg-purple-500 text-white' : 'hover:bg-purple-400 hover:text-white'}`
                                        }
                                    >
                                        Create Group
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/my-groups"
                                        className={({ isActive }) =>
                                            `block px-4 py-2 rounded-xl font-medium ${isActive ? 'bg-purple-500 text-white' : 'hover:bg-purple-400 hover:text-white'}`
                                        }
                                    >
                                        My Groups
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={`/dashboard/profile/${user?.email}`}
                                        className={({ isActive }) =>
                                            `block px-4 py-2 rounded-xl font-medium ${isActive ? 'bg-purple-500 text-white' : 'hover:bg-purple-400 hover:text-white'}`
                                        }
                                    >
                                        Profile
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            `block px-4 py-2 rounded-xl font-medium ${isActive ? 'bg-purple-300 text-white' : 'hover:bg-purple-400 hover:text-white'}`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/settings"
                                        className={({ isActive }) =>
                                            `block px-4 py-2 rounded-xl font-medium ${isActive ? 'bg-purple-300 text-white' : 'hover:bg-purple-400 hover:text-white'}`
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
                        <div className="p-4 w-full border-t-2 border-indigo-300 flex items-center flex-col lg:flex-row justify-between">
                            <div className="flex items-center gap-3">
                                <img
                                    src={user?.photoURL}
                                    alt="Profile"
                                    className="w-10 h-10 rounded-full"
                                />
                                <div className='flex items-center'>
                                    <p className="font-semibold">{user?.displayName}</p>
                                    <ThemeToggle></ThemeToggle>

                                </div>
                            </div>
                            <div className='block'>
                                <button onClick={() => userSignOut()} className="btn btn-accent text-white hover:underline">Logout</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-9/12 pl-4 overflow-y-auto">
                    <Outlet />
                </div>
            </section>
        </>
    );
};

export default Dashboard;