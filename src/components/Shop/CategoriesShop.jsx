import React from "react";
import {motion} from "framer-motion";
import {MCategoryShopItem} from "./CategoryShopItem";

const leftSideAnimation = {
    hidden:{
        x:-150,
        opacity:0
    },
    visible:(custom=0) => ({
        x:0,
        opacity: 1,
        transition:{delay:custom*0.15, duration:0.5}

    })
}

const CategoriesShop = ({categoryList, activeCategoryId, setActiveCategoryId}) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{amount:0.2, once:true}}
        >
            <ul className="shop--list__categories">
                {
                    categoryList.map((item, i) => (
                        <MCategoryShopItem variants={leftSideAnimation} custom={i*0.6}  key={item.id} {...item}  activeCategoryId={activeCategoryId} setActiveCategoryId={setActiveCategoryId}/>
                    ))
                }
            </ul>
        </motion.div>

    )
}

export default CategoriesShop