import React, {forwardRef} from "react";
import {motion} from "framer-motion";

export const CategoryShopItem = forwardRef(({id, title, titleImg, activeCategoryId, setActiveCategoryId},ref) => {
    return (
        <li ref={ref} className={activeCategoryId===id ? "shop--list__category list--category list--category_active " : "shop--list__category list--category common_background"} onClick={() => setActiveCategoryId(id)}>
            <div className="list--category__name">
                <p>{title}</p> <span>{titleImg}</span>
            </div>
        </li>
    )
})
export const MCategoryShopItem = motion(CategoryShopItem)