import React from 'react';

const Login = () => {
    return (
        <div className="flex items-center bg-base-200 min-h-screen">
            <div className="flex-col w-lg mx-auto">
                <div className="bg-base-100 p-4 shadow-2xl">
                    <h1 className="text-5xl text-center font-bold">Login now!</h1>
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input w-full" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input w-full" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;