import React from "react";

import {ShopListItem} from "./ShopListItem";
import {motion} from "framer-motion";
import arrow from "../../assets/small_img/arrow.svg";
import profile from "../../assets/shop/1.png"

const shopListStickers = [
    {id:1, imgUrl:"products/sticker/1.svg", title:"Стикеры “Limited Edition”", price:500},
    {id:2, imgUrl:"products/sticker/2.svg", title:"Стикеры “Limited Edition”", price:500},
    {id:3, imgUrl:"products/sticker/5.svg", title:"Стикеры “Limited Edition”", price:500},
    {id:4, imgUrl:"products/sticker/4.svg", title:"Стикеры “Limited Edition”", price:500},
    {id:5, imgUrl:"products/sticker/3.svg", title:"Стикеры “Limited Edition”", price:500}
]

const shopListThemes = [
    {id:1, imgUrl:"products/theme/1.svg", title:"Стикеры “Limited Edition”", price:500},
    {id:2, imgUrl:"products/theme/2.svg", title:"Стикеры “Limited Edition”", price:500},
    {id:3, imgUrl:"products/theme/5.svg", title:"Стикеры “Limited Edition”", price:500},
    {id:4, imgUrl:"products/theme/3.svg", title:"Стикеры “Limited Edition”", price:500},
    {id:5, imgUrl:"products/theme/4.svg", title:"Стикеры “Limited Edition”", price:500}
]

const leftSlideAnimation = {
    hidden:{
        x:-100,
        opacity:0
    },
    visible:{
        x:0,
        opacity: 1,
        transition:{duration:0.3}
    }
}

const rightSlideAnimation = {
    hidden:{
        x:100,
        opacity:0
    },
    visible:{
        x:0,
        opacity: 1,
        transition:{duration:0.3}
    }
}

const ShopMainCategory = ({setActiveCategoryId}) => {
    return (
        <>
            <motion.div className="shop--list__main" initial={{opacity:0}} animate={{opacity:1}} transition={{ duration:0.15 }}>
                <div className="shop--list__previews">
                    <div className="shop--list__preview--block">
                        <div className="section_title">
                            <div>
                                <div className="title">
                                    Новинки
                                </div>
                            </div>
                            <div className="more" onClick={()=>setActiveCategoryId(5)}>
                                Смотреть больше
                                <img src={arrow} alt="" className="section_arrow"/>
                            </div>
                        </div>
                        <ul className="shop--list__preview--block--list">
                            {
                                shopListStickers.map((item, i) => (
                                    <ShopListItem key={item.id} {...item} />
                                ))
                            }
                        </ul>
                    </div>
                    <div className="shop--list__preview--block">
                        <div className="section_title">
                            <div>
                                <div className="title">
                                    Стикеры
                                </div>
                            </div>
                            <div className="more" onClick={()=>setActiveCategoryId(2)}>
                                Смотреть больше
                                <img src={arrow} alt="" className="section_arrow"/>
                            </div>
                        </div>
                        <ul className="shop--list__preview--block--list">
                            {
                                shopListStickers.map((item, i) => (
                                    <ShopListItem key={item.id} {...item} />
                                ))
                            }
                        </ul>
                    </div>
                    <div className="shop--list__preview--block">
                        <div className="section_title">
                            <div>
                                <div className="title">
                                    Темы
                                </div>
                            </div>
                            <div className="more" onClick={()=>setActiveCategoryId(3)}>
                                Смотреть больше
                                <img src={arrow} alt="" className="section_arrow"/>
                            </div>
                        </div>
                        <ul className="shop--list__preview--block--list">
                            {
                                shopListThemes.map((item, i) => (
                                    <ShopListItem key={item.id} {...item} theme={true}/>
                                ))
                            }
                        </ul>
                    </div>
                    <motion.div className="registration--block"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{amount:0.45, once:true}}
                    >
                        <motion.div variants={leftSlideAnimation} className="registration--block__photo common_background"

                        >
                            <div className="registration--block__photo--wrapper">
                                <img src={profile} alt=""/>
                            </div>
                        </motion.div>
                        <motion.div variants={rightSlideAnimation} className="registration--block__form common_background">
                            <div className="registration--block__top">
                                <div className="registration--block__form--title">
                                    Скидка до 20%
                                </div>
                                <div className="registration--block__form--subtitle">
                                    Зарегестрируйся и получи промокод на первую покупку
                                </div>
                            </div>

                            <form action="#" className="registration--from">
                                <div className="registration--from__input">
                                    <input type="text" placeholder="Имя"/>
                                </div>
                                <div className="registration--from__input">
                                    <input type="email" placeholder="E-mail"/>
                                </div>
                                <button className="registration--from__submit">Зарегистрироваться</button>
                            </form>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}
export default ShopMainCategory