import React from "react";
import {motion} from "framer-motion";

import personImg1 from "../assets/phone2.svg"
import personImg2 from "../assets/phone3.svg"
import chat from "../assets/small_img/chat.svg"
import clip from "../assets/small_img/clip.svg"


const Tools=({parentRef})=>{
    return(
        <motion.div className="tool_block background_style_block"
             drag
             whileDrag={{scale:1.1}}
             dragConstraints={parentRef}
        >
            <div className="tool_header">
                <div className="green_block"></div>
                <div className="red_block"></div>
                <div className="points">
                    <span></span>
                </div>
            </div>
            <div className="tool_title">
                Задача
            </div>
            <div className="tool_descript">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            </div>
            <div className="tool_footer">
                <div className="tool_images">
                    <div className="tool_image">
                        <img src={personImg1} alt="" className="tool_img"/>
                    </div>
                    <div className="tool_image">
                        <img src={personImg2} alt="" className="tool_img"/>
                    </div>
                </div>
                <div className="tool_data">
                    <div className="tool_data_image">
                        <img src={chat} alt="" className="tool_data_img"/>
                    </div>
                    <div className="data_col">15</div>
                </div>
                <div className="tool_data">
                    <div className="tool_data_image">
                        <img src={clip} alt="" className="tool_data_img"/>
                    </div>
                    <div className="data_col">3</div>
                </div>

            </div>
        </motion.div>
    )
}
export default Tools