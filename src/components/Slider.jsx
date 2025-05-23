import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './slider.css';

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
                className="mySwiper flex items-center"
            >
                <SwiperSlide>
                    <img src="/assets/photographer.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/coding.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/skethcers.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/booklovers.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/fishing.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/guitars.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/videoGames.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/cooking.png" />
                </SwiperSlide>

            </Swiper>
        </>
    );
}
