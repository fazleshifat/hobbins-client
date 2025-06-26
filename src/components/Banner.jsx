import React, { use } from 'react';
import Slider from './Slider';
import TypeWriter from './TypeWriter';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router';

const Banner = () => {

    return (
        <div id='home'>
            <div className="max-w-[1300px] h-auto md:h-[400px] mx-auto gap-10 px-10 pt-10 flex flex-col-reverse md:flex-row justify-between items-center">



                <div className='flex-1'>
                    <Slider></Slider>
                </div>


                <div className="flex-1">
                    <Fade cascade direction={'left'}>
                        <div className="flex-col">
                            <div>

                                <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">

                                    Connect Through Your Hobby!

                                    <span className='text-pink-600'>
                                        <br />
                                        <TypeWriter></TypeWriter></span></h1>

                                <p className="dark:text-white py-6">
                                    Build your community, share what you love, and explore new passions like <span className='font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'>Painting, Gaming, Hiking, Cooking</span> or anything — all in one place.
                                </p>
                                <Link to='/myGroups' className="btn bg-gradient-to-r from-purple-500 to-pink-500 text-white">Get Started</Link>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div >
    );
};

export default Banner;