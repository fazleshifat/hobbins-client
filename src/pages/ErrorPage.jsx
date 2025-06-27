import React from 'react';
import { Link } from 'react-router';
import Navbar from '../components/Navbar';

const ErrorPage = () => {
    return (
        <>
            {/* <Navbar></Navbar> */}
            <div className="min-h-screen flex items-center justify-center px-4">
                <div className=" p-10 max-w-xl w-full text-center">

                    <img
                        src="/assets/errorimage.jpg"
                        alt="404 Not Found"
                        className="w-64 h-64 object-contain mx-auto mb-6 animate-pulse"
                    />

                    <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
                        Page Not Found
                    </h1>

                    <p className="text-gray-600 dark:text-gray-300 text-md mb-6">
                        Sorry, the page you’re looking for doesn’t exist or has been moved.
                    </p>

                    <Link
                        to="/"
                        className="inline-block px-6 py-3 text-white font-semibold bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl shadow-md hover:from-purple-700 hover:to-pink-600 transition-all duration-300"
                    >
                        Back to Homepage
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ErrorPage;