import React from 'react';
import { Link } from 'react-router';
import Navbar from '../components/Navbar';

const ErrorPage = () => {
    return (
        <>
            {/* <Navbar></Navbar> */}
            <div className='w-fit flex bg-base-300 min-h-screen mx-auto'>
                <div className="mx-auto flex bg-base-300 items-center justify-center flex-col">
                    <img src="/assets/errorimage.jpg" className='w-6/12' alt="error" />
                    <h1 className='text-gray-400 text-2xl'>page not found</h1>
                    <Link to='/' className='btn btn-primary flex text-md w-fit mt-10'>back to homepage</Link>
                </div>
            </div>
        </>
    );
};

export default ErrorPage;