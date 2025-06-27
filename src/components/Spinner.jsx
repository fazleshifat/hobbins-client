import React from 'react';
import loadingAnimation from '../../public/animations/loading.json'
import Lottie from 'lottie-react';

const Spinner = () => {
    return (
        <div className="h-[90vh] w-fit flex justify-center flex-col mx-auto">
            {/* <span className="loading loading-infinity text-gray-500 w-14"></span> */}
            
                <Lottie animationData={loadingAnimation} className='w-20'></Lottie>
        </div>
    );
};

export default Spinner;