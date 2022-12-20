import FilterShop from "./FilterShop";
import ShopList from "./ShopList";
import React from "react";
import {motion} from "framer-motion";

export const ShopProductsCategory = () => {
    return(
        <>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{ duration:0.15 }}>
                <FilterShop />
                <ShopList />
                <button className="shop--list__more--btn">
                    Смотреть больше
                </button>
            </motion.div>

        </>
    )
}
