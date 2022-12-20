import React, {forwardRef} from "react";

import {motion} from "framer-motion";
import loveWhite from "../../assets/small_img/love_white.svg";

const productUpAnimation = {
    hidden:{
        y:100,
        opacity:0
    },
    visible:{
        y:0,
        opacity: 1,
        transition:{duration:0.4}

    }
}

export const ShopListItem = ({id, imgUrl, title, price, theme=false}) => {
    return (
        <motion.li className="list--product"
                   initial="hidden"
                   whileInView="visible"
                   viewport={{amount:0.2, once:true}}
        >
            <div className="add--love">
                <img src={loveWhite} alt=""/>
            </div>
            <div className="product--body">
                <div className={theme ? "product--img__wrapper product--img__wrapper_theme" : "product--img__wrapper"}>
                    <motion.img variants={productUpAnimation} src={require("../../assets/" + imgUrl)} alt=""/>
                </div>
                <div className="product--title">
                    {title}
                </div>
                <div className="product--price">
                    {price} ₽
                </div>
            </div>
        </motion.li>
    )
}