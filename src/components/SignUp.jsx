import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthContexts';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';

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
        <div className="flex items-center m-4 md:m-0 md:min-h-screen">
            <div className="flex-col w-lg mx-auto">
                <div className="bg-base-100 p-4 shadow-2xl rounded-3xl">
                    <h1 className="text-3xl md:text-5xl text-center font-bold">Sign up now!</h1>
                    <div className="card-body">
                        <form onSubmit={handleCreateUser}>
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input w-full" placeholder="name" required />
                            <label className="label">Photo URL</label>
                            <input type="text" name='photo' className="input w-full" placeholder="photo url" required onChange={() => setErrorMessage(null)} />
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input w-full" placeholder="Email" required />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input w-full" placeholder="Password" required onChange={() => setErrorMessage(null)} />
                            <div className='mt-3'>Already have an account? <Link to='/SignIn' className='text-primary'>SignIn</Link></div>
                            {
                                errorMessage && <p className='text-red-500'>{errorMessage}</p>
                            }
                            <button className="btn btn-neutral w-full mt-4">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;