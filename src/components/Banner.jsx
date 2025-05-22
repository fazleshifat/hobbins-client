import React, { use } from 'react';
import Slider from './Slider';
import { AuthContext } from '../AuthProvider/AuthContexts';

const Banner = () => {

    return (
        <div className=''>
            <div className="flex flex-col-reverse md:flex-row max-w-11/12 mx-auto items-center">

                <Slider></Slider>


                <div className="hero">
                    <div className="hero-content flex-col">
                        <div>
                            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Connect Through Your Hobby!</h1>
                            <p className="py-6">
                                Build your community, share what you love, and explore new passions like <span className='font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'>Painting, Gaming, Hiking, Cooking</span> or anything — all in one place.
                            </p>
                            <button className="btn bg-gradient-to-r from-purple-500 to-pink-500 text-white">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;