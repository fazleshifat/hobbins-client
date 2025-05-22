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
                    rotate: 1,
                    stretch: 10,
                    depth: 100,
                    modifier: 10,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper flex items-center"
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co/Xf3003cR/photographer-preview.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/WpYmLfwc/skethcers.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/booklovers.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/fishing.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
