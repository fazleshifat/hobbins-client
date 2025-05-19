import React from 'react';
import Slider from './Slider';

const Banner = () => {
    return (
        <div className='bg-base-200'>
            <div className="flex flex-col max-w-11/12 mx-auto gap-20 md:flex-row items-center">

                <Slider></Slider>


                <div className="hero ">
                    <div className="hero-content flex-col">
                        <div>
                            <h1 className="text-5xl font-bold">Box Office News!</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;