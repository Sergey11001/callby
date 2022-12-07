import React from "react";

import CategoryShopItem from "./CategoryShopItem";


const CategoriesShop = ({categoryList, activeCategoryId, setActiveCategoryId}) => {
    return (
        <ul className="shop--list__categories">
            {
                categoryList.map((item, i) => (
                    <CategoryShopItem key={item.id} {...item}  activeCategoryId={activeCategoryId} setActiveCategoryId={setActiveCategoryId}/>
                ))
            }
        </ul>
    )
}

export default CategoriesShop