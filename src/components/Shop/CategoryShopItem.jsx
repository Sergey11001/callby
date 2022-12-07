import React from "react";


const CategoryShopItem = ({id, title, titleImg, activeCategoryId, setActiveCategoryId}) => {
    return (
        <li className={activeCategoryId===id ? "shop--list__category list--category list--category_active " : "shop--list__category list--category common_background"} onClick={() => setActiveCategoryId(id)}>
            <div className="list--category__name">
                <p>{title}</p> <span>{titleImg}</span>
            </div>
        </li>
    )
}
export default CategoryShopItem