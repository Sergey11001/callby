import {NavLink} from "react-router-dom";
import React from "react";
import {motion} from "framer-motion";

import logo from "../../assets/header/logo.png";
import love from "../../assets/small_img/love.svg"
import basket from "../../assets/small_img/basket.svg"
import search from "../../assets/small_img/search.svg"

const HeaderShop = () => {
    return(
        <header className="header">
            <div className="header_container">
                <NavLink to="/" className="logo">
                    <div className="header_image">
                        <img src={logo} alt="" className="logo_img"/>
                    </div>
                </NavLink>
                <motion.div className="header__search" initial={{opacity:0, y:-40}} animate={{opacity:1, y:0}} transition={{duration:0.3}}>
                    <input type="text" placeholder="Поиск" className="header__search--input"/>
                    <img src={search} alt="" className="header__search--img"/>
                </motion.div>
                <div className="header__inf">
                    <div className="header__inf--item">
                        <img src={love} alt="" className="love"/>
                    </div>
                    <div className="header__inf--item">
                        <img src={basket} alt="" className="basket"/>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default HeaderShop