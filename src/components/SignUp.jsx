import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthContexts';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import { Fade } from 'react-awesome-reveal';
import Navbar from './Navbar';
import registerAnimation from '../../public/animations/boyWithLaptop.json'
import Lottie from 'lottie-react';

const SignUp = () => {

    const { createUser, setUser, errorMessage, setErrorMessage } = use(AuthContext);

    const navigate = useNavigate();

    const handleCreateUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const { email, password, name, photo, ...rest } = Object.fromEntries(formData.entries());


        // Clear previous error
        setErrorMessage('');

        // Password validation checks

        if (password.length < 6) {
            setErrorMessage('Password must be at least 6 characters long.');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setErrorMessage('Password must include at least one uppercase letter.');
            return;
        }
        if (!/[a-z]/.test(password)) {
            setErrorMessage('Password must include at least one lowercase letter.');
            return;
        }
        // Validate photo URL length
        if (photo.length > 1024) {
            setErrorMessage('Photo URL must be less than 1024 characters.');
            return;
        }
        // create user on firebase
        createUser(email, password)
            .then(result => {

                const profile = {
                    displayName: name,
                    photoURL: photo
                }



                updateProfile(result.user, profile)
                    .then(() => {


                        setUser(result.user)
                        navigate('/');

                        const userProfile = {
                            email,
                            name,
                            photo,
                            ...rest,
                            creationTime: result.user?.metadata?.creationTime,
                            lastSignInTime: result.user?.metadata?.lastSignInTime,
                        }

                        // save data in DB
                        fetch('https://hobbins-server.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(userProfile)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    Swal.fire({
                                        // position: "top-end",
                                        icon: "success",
                                        title: "Account created successfully!",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });

                                }
                            })

                    })
                    .catch(error => {
                        setErrorMessage(error.message);
                    });

            })
            .catch(error => {
                setErrorMessage(error.code)
            })

    }

    return (
        <>
            <Navbar></Navbar>
            <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-10 gap-10">
                {/* Form Section */}
                <Fade cascade damping={0.5} className="w-full md:w-1/2">
                    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 p-8">
                        <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-8 select-none">
                            Sign Up
                        </h1>

                        <form onSubmit={handleCreateUser} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your full name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                                />
                            </div>

                            <div>
                                <label htmlFor="photo" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Photo URL
                                </label>
                                <input
                                    type="text"
                                    id="photo"
                                    name="photo"
                                    placeholder="Image URL"
                                    required
                                    onChange={() => setErrorMessage(null)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                                />
                            </div>

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
                                    placeholder="Create a password"
                                    required
                                    onChange={() => setErrorMessage(null)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                                />
                            </div>

                            <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                                Already have an account?{' '}
                                <Link to="/SignIn" className="text-purple-600 font-semibold hover:underline">
                                    Sign In
                                </Link>
                            </p>

                            {errorMessage && (
                                <p className="text-sm text-red-500 text-center">{errorMessage}</p>
                            )}

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:from-purple-700 hover:to-pink-600 transition"
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                </Fade>

                {/* Animation Section */}
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <Lottie animationData={registerAnimation} className="w-[100%]" />
                </div>
            </section>
        </>
    );
};

export default SignUp;