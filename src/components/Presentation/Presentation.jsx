import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import PresentationSlide from "./PresentationSlide";
import {motion} from "framer-motion";

import SwiperCore, { Mousewheel, Autoplay,Scrollbar,Pagination } from "swiper";

import 'swiper/css/pagination';
import 'swiper/swiper.min.css';

SwiperCore.use([Mousewheel ,Autoplay,Pagination]);

const presentationImg = [
    "presentation/1.png",
    "presentation/2.png",
    "presentation/3.png",
    "presentation/4.png",
    "presentation/5.png",
    "presentation/6.png",
    "presentation/7.png",
    "presentation/8.png",
    "presentation/9.png",
    "presentation/10.png",
    "presentation/11.png",
    "presentation/12.png",
    "presentation/13.png",
    "presentation/14.png",
    "presentation/15.png",
    "presentation/16.png",
    "presentation/17.png",
    "presentation/18.png",
    "presentation/19.png",
    "presentation/20.png",
    "presentation/21.png",
]

const Presentation = () => {
    return (
        <>
            <motion.div className="presentation--page" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.15}}>
                <div className="presentation--body">
                    <Swiper
                        slidesPerView="1"
                        direction="vertical"
                        pagination={{ clickable: true }}
                        height={600}
                        loop={true}
                        modules={[Autoplay, Mousewheel,Scrollbar,Pagination]}
                        autoplay={{ delay: 5000, disableOnInteraction:false, pauseOnMouseEnter:false}}
                        spaceBetween={10}
                        speed={600}

                    >
                        {
                            presentationImg.map((item,i) => (
                                <SwiperSlide>
                                    <PresentationSlide imgUrl={item} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </motion.div>
        </>
    )
}
export default Presentation