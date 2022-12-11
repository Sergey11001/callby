import React from "react";
import ShopListItem from "./ShopListItem";

const shopList = [
    {id:1, imgUrl:"products/sticker/1.png", title:"Стикеры “Limited Edition”", price:500},
    {id:2, imgUrl:"products/sticker/2.png", title:"Стикеры “Limited Edition”", price:500},
    {id:3, imgUrl:"products/sticker/3.png", title:"Стикеры “Limited Edition”", price:500},
    {id:4, imgUrl:"products/sticker/4.png", title:"Стикеры “Limited Edition”", price:500},
    {id:5, imgUrl:"products/sticker/5.png", title:"Стикеры “Limited Edition”", price:500},
    {id:6, imgUrl:"products/sticker/1.png", title:"Стикеры “Limited Edition”", price:500},
    {id:7, imgUrl:"products/sticker/2.png", title:"Стикеры “Limited Edition”", price:500},
    {id:8, imgUrl:"products/sticker/3.png", title:"Стикеры “Limited Edition”", price:500},
    {id:9, imgUrl:"products/sticker/4.png", title:"Стикеры “Limited Edition”", price:500},
    {id:10, imgUrl:"products/sticker/5.png", title:"Стикеры “Limited Edition”", price:500},
]

const ShopList = () => {
    return (
        <ul className="shop--list__products">
            {
                shopList.map((item, i) => (
                    <ShopListItem key={item.id} {...item} />
                ))
            }
        </ul>
    )
}
export default ShopList