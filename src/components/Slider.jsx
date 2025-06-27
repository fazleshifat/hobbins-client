import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Slider() {
    return (
        <>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 30,
                    slideShadows: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper h-[300px]"
            >
                <SwiperSlide>
                    <img src="/assets/photographer.png" className='mx-auto h-full'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/coding.png" className='mx-auto h-full'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/skethcers.png" className='mx-auto h-full'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/booklovers.png" className='mx-auto h-full'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/fishing.png" className='mx-auto h-full'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/guitars.png" className='mx-auto h-full'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/cooking.png" className='mx-auto h-full'/>
                </SwiperSlide>

            </Swiper>
        </>
    );
}
