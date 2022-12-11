import Poster1 from "./Poster1";
import {Swiper, SwiperSlide} from "swiper/react";
import React from "react";

import SwiperCore, { Mousewheel, Autoplay,Scrollbar,Pagination } from "swiper";

import 'swiper/css/pagination';
import 'swiper/swiper.min.css';

SwiperCore.use([Mousewheel ,Autoplay,Pagination]);

const Billboard = () => {

     return (
        <>
            <div className="board--body common_background">
                <div className="corner corner--top-left"></div>
                <div className="corner corner--top-right"></div>
                <div className="corner corner--bottom-left"></div>
                <div className="corner corner--bottom-right"></div>
                <div className="swiper__wrapper">
                    <Swiper
                        slidesPerView="1"
                        mousewheel={false}
                        direction="vertical"
                        pagination={{ clickable: true }}
                        height={380}
                        scrollbar={{ draggable: false }}
                        loop={true}
                        noSwiping={true}
                        noSwipingClass={'swiper-slide'}
                        modules={[Autoplay, Mousewheel,Scrollbar,Pagination]}
                        autoplay={{ delay: 4000}}
                        spaceBetween={10}
                        speed={500}
                    >
                        <SwiperSlide>
                            <Poster1 />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Poster1 />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Poster1 />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Poster1 />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Poster1 />
                        </SwiperSlide>
                    </Swiper>
                </div>

            </div>
        </>
    )
}
export default Billboard