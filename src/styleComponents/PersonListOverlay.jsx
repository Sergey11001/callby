import React from "react";
import {motion} from "framer-motion";

import phone1 from  "../assets/phone1.svg"
import phone2 from  "../assets/phone2.svg"
import phone3 from  "../assets/phone3.svg"
const PersonListOverlay=({parentRef})=>{
    return(
        <motion.div className="person_list background_style_block"
                    drag
                    whileDrag={{scale:1.15}}
                    dragConstraints={parentRef}
        >
            <div className="person_image">
                <img src={phone1} alt="" className="person_img"/>
            </div>
            <div className="person_image">
                <img src={phone2} alt="" className="person_img"/>
            </div>
            <div className="person_image">
                <img src={phone3} alt="" className="person_img"/>
            </div>
            <div className="person_image empty_blue_block">
                +2
            </div>
        </motion.div>
    )
}
export default PersonListOverlay