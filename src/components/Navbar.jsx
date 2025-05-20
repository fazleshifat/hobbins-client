import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthContexts';

const Navbar = () => {

    const { user } = use(AuthContext);

    const links = (
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/createGroup'>Create Groups</Link></li>
            <li><Link to='/all-groups'>All Groups</Link></li>
            <li><Link to='/myGroups'>My Groups</Link></li>
        </>
    )


    return (
        <div className="navbar flex justify-between bg-base-100 shadow-sm">
            <div className="flex items-center">

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>

                <Link to='/' className='flex items-center'>
                    <img src="/assets/logo.png" className='w-10' alt="logo" />
                    <p className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">hoBBins</p>
                </Link>
            </div>
            <div className="flex items-center gap-2">


                <ul className='menu menu-horizontal hidden md:flex items-center px-1'>
                    {links}
                </ul>


                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />

                {
                    !user ?
                        (
                            <>
                                <Link to='/SignIn' className='btn btn-primary'>SignIn</Link>
                                <Link to='/signUp' className='btn btn-secondary'>Register</Link>
                            </>
                        )

                        :
                        (
                            <>
                                <div className="dropdown dropdown-hover">

                                    <div className="w-10 rounded-full">
                                        <img
                                            className='rounded-full'
                                            alt="Tailwind CSS Navbar component"
                                            src={user.photoURL} />

                                    </div>

                                    <div tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 flex w-30 border-2 shadow-sm">
                                        <p>{user.displayName}</p>
                                    </div>
                                </div>
                                <button className='btn btn-accent text-white ml-1'>Logout</button>
                            </>
                        )
                }
            </div>
        </div>
    );
};

export default Navbar;