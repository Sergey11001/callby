import React from "react";


const CategoryShopItem = ({id, title, titleImg}) => {
    return (
        <li className="shop--list__category list--category">
            <div className="list--category__name">
                <p>{title}</p> <span>{titleImg}</span>
            </div>
        </li>
    )
}
export default CategoryShopItem