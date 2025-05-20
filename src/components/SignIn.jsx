import React, { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthContexts';
import { useLocation, useNavigate } from 'react-router';

const SignIn = () => {

    const { signInUser, setUser } = use(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    console.log(location)

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const { email, password } = Object.fromEntries(formData.entries());

        console.log(email, password)

        // sign in user with firebase auth
        signInUser(email, password)
            .then((userCredential) => {
                console.log(userCredential.user);
                setUser(userCredential.user);
                navigate(location?.state || '/');

            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    return (
        <div className="flex items-center bg-base-200 min-h-screen">
            <div className="flex-col w-lg mx-auto">
                <div className="bg-base-100 p-4 shadow-2xl">
                    <h1 className="text-5xl text-center font-bold">SignIn now!</h1>
                    <div className="card-body">
                        <form onSubmit={handleSignIn}>
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input w-full" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input w-full" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">SignIn</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;