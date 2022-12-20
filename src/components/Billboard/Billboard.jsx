import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import {motion} from "framer-motion";
import Poster1 from "./Poster1";
import SwiperCore, { Mousewheel, Autoplay,Scrollbar,Pagination } from "swiper";

import 'swiper/css/pagination';
import 'swiper/swiper.min.css';

SwiperCore.use([Mousewheel ,Autoplay,Pagination]);

const Billboard = () => {

     return (
        <>
            <motion.div className="board--body common_background"
                        initial={{opacity:0, y:-50}}
                        whileInView={{opacity:1,y:0}}
                        viewport={{amount:0.2, once:true}}
                        transition={{duration:0.3}}
            >
                <div className="corner corner--top-left"></div>
                <div className="corner corner--top-right"></div>
                <div className="corner corner--bottom-left"></div>
                <div className="corner corner--bottom-right"></div>
                <div className="swiper__wrapper">
                    <Swiper
                        slidesPerView="1"
                        mousewheel={false}
                        direction="vertical"
                        pagination={{ clickable: false }}
                        height={380}
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

            </motion.div>
        </>
    )
}
export default Billboard