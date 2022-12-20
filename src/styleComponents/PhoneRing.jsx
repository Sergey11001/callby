import React from "react";
import {motion} from "framer-motion";

import personImg from "../assets/phone3.svg"

const PhoneRing=({parentRef})=>{
    return(
        <motion.div className="phone_ring background_style_block"
             drag
             whileDrag={{scale:1.15}}
             dragConstraints={parentRef}
        >
            <div className="phone_img_wrapper">
                <div className="phone_image">
                    <img src={personImg} alt="" className="phone_img"/>
                </div>
            </div>
            <div className="phone_name">
                <div className="name">Анна Вакуленко</div>
                <div className="phone_ended">Звонок завершен</div>
            </div>
            <div className="date">06.07.2022</div>
        </motion.div>
    )
}
export default PhoneRing