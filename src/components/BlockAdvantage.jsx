import React, {forwardRef} from "react";
import {motion} from "framer-motion";

export const BlockAdvantage=forwardRef(({img , title , description, variants, custom},ref)=>{
    return(
        <motion.div custom={custom} variants={variants} className="column_adv common_background" ref={ref}>
            <div className="adv_content">
                <div className="adv_image">
                    <img src={require(`../assets/${img}`)} alt="" className="adv_img"/>
                </div>
                <div className="adv_title">
                    {title}
                </div>
                <div className="adv_subtitle">
                    {description}
                </div>
            </div>
        </motion.div>
    )
})

export const MBlockAdvantage = motion(BlockAdvantage)