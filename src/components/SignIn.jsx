import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthContexts';
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
// import { GoogleAuthProvider } from 'firebase/auth';

const SignIn = () => {

    const { user, signInUser, setUser, signInGoogle, errorMessage, setErrorMessage } = use(AuthContext);
    // setErrorMessage('')

    // const [errorMessage, setErrorMessage] = useState(null);
    // setErrorMessage('')
    // console.log(errorMessage)

    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location)




    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const { email, password } = Object.fromEntries(formData.entries());

        // console.log(email, password)

        // sign in user with firebase auth
        signInUser(email, password)
            .then((result) => {
                // console.log(userCredential.user);
                // setLoading(false)
                navigate(location?.state || '/');
                setUser(result.user);

                Swal.fire({
                    // position: "top-end",
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
        <div className="flex items-center m-4 md:m-0 md:min-h-screen">
            <div className="flex-col w-md mx-auto">
                <div className="bg-base-100 p-4 shadow-2xl rounded-2xl">
                    <h1 className="text-3xl md:text-5xl text-center font-bold">Sign In</h1>
                    <div className="card-body">
                        <form onSubmit={handleSignIn}>
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input w-full" placeholder="Email" required onChange={() => setErrorMessage(null)} />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input w-full" placeholder="Password" required onChange={() => setErrorMessage(null)} />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <div className='mt-3'>Don't have an account? <Link to='/SignUp' className='text-primary'>Sign Up</Link></div>

                            {errorMessage && (
                                <p className="text-md text-red-500 mt-2">{errorMessage}</p>
                            )}
                            <button className="btn btn-neutral w-full mt-4">Sign In</button>

                        </form>

                        {/* Google */}
                        <button onClick={handleSignInWithGoogle} className="btn w-full mt-2 bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;