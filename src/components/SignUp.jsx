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


        // console.log(userProfile)

        // create user on firebase
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                setUser(result.user)

                const userProfile = {
                    email,
                    ...rest,
                    creationTime: result.user?.metadata?.creationTime,
                    lastSignInTime: result.user?.metadata?.lastSignInTime,
                }

                const profile = {
                    displayName: name,
                    photoURL: photo
                }
                updateProfile(result.user, profile)
                    .then(() => {
                        // toast('✅ User updated');
                        Swal.fire({
                            // position: "top-end",
                            icon: "success",
                            title: "Registration successful!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/');
                    })
                    .catch(error => {
                        setErrorMessage(error.code)
                    })

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
                        console.log('user data after save at DB', data)
                    })
            })
            .catch(error => {
                console.log(error.code)
            })

    }

    return (
        <div className="flex items-center bg-base-200 min-h-screen">
            <div className="flex-col w-lg mx-auto">
                <div className="bg-base-100 p-4 shadow-2xl">
                    <h1 className="text-5xl text-center font-bold">Sign up now!</h1>
                    <div className="card-body">
                        <form onSubmit={handleCreateUser}>
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input w-full" placeholder="Email" required />
                            <label className="label">Photo URL</label>
                            <input type="text" name='photo' className="input w-full" placeholder="Email" required />
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input w-full" placeholder="Email" required />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input w-full" placeholder="Password" required />
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