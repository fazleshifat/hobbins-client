import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthContexts';
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import Spinner from './Spinner';
import { Fade } from 'react-awesome-reveal';
import Navbar from './Navbar';
// import { GoogleAuthProvider } from 'firebase/auth';

const SignIn = () => {



    const { user, signInUser, setUser, signInGoogle, errorMessage, setErrorMessage } = use(AuthContext);


    const location = useLocation();
    const navigate = useNavigate();



    window.scrollTo(0, 0);

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const { email, password } = Object.fromEntries(formData.entries());


        // sign in user with firebase auth
        signInUser(email, password)
            .then((result) => {
                navigate(location?.state || '/');
                setUser(result.user);

                Swal.fire({
                    icon: "success",
                    title: "Log in success!",
                    showConfirmButton: false,
                    timer: 1500
                });



            })
            .catch((error) => {
                setErrorMessage(error.code);
                setLoading(false);
            });
    }


    const handleSignInWithGoogle = () => {
        signInGoogle()
            .then((result) => {
                setUser(result.user);
                navigate(location?.state || '/');
            }).catch((error) => {
                setErrorMessage(error.message);
                setLoading(false);
            });
    }

    return (
        <>
            <Navbar></Navbar>
            <Fade cascade damping={0.5}>
                <div className="flex items-center justify-center min-h-[90vh] p-6">
                    <div className="w-full max-w-xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 p-8">
                        <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-8 select-none">
                            Sign In
                        </h1>

                        <form onSubmit={handleSignIn} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    required
                                    onChange={() => setErrorMessage(null)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Your password"
                                    required
                                    onChange={() => setErrorMessage(null)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                                />
                            </div>

                            <div className="flex justify-between items-center text-sm">
                                <a href="#" className="text-purple-600 hover:text-purple-800 transition">
                                    Forgot password?
                                </a>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Don't have an account?{' '}
                                    <Link to="/SignUp" className="text-purple-600 font-semibold hover:underline">
                                        Sign Up
                                    </Link>
                                </p>
                            </div>

                            {errorMessage && (
                                <p className="text-sm text-red-500 text-center">{errorMessage}</p>
                            )}

                            <button
                                type="submit"
                                className="w-full cursor-pointer bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:from-purple-700 hover:to-pink-600 transition"
                            >
                                Sign In
                            </button>
                        </form>

                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
                            </div>
                            <div className="relative flex justify-center text-sm text-gray-500 dark:text-gray-400">
                                Or continue with
                            </div>
                        </div>

                        <button
                            onClick={handleSignInWithGoogle}
                            className="w-full cursor-pointer bg-white flex items-center justify-center gap-2 py-3 border border-gray-300 dark:border-gray-700 rounded-xl text-black hover:shadow-lg transition"
                        >
                            <svg
                                aria-label="Google logo"
                                width="20"
                                height="20"
                                viewBox="0 0 512 512"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="inline"
                            >
                                <path d="M0 0H512V512H0z" />
                                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
                            </svg>
                            Login with Google
                        </button>
                    </div>
                </div>
            </Fade>

        </>
    );
};

export default SignIn;