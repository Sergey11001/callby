import React from "react";

import CategoryShopItem from "./CategoryShopItem";

const categoryList =[
    {id:1, title:"Главная", titleImg:"✨"},
    {id:2, title:"Стикеры", titleImg:"🌚"},
    {id:3, title:"Темы", titleImg:"🌈"},
    {id:4, title:"Звуки", titleImg:"⚡"},
    {id:5, title:"Наборы", titleImg:"🌟"},
]

const CategoriesShop = () => {
    return (
        <ul className="shop--list__categories">
            {
                categoryList.map((item, i) => (
                    <CategoryShopItem key={item.id} {...item} />
                ))
            }
        </ul>
    )
}

export default CategoriesShop