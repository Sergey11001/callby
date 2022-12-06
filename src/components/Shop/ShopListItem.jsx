import React from "react";

import loveWhite from "../../assets/small_img/love_white.svg";

const ShopListItem = ({id, imgUrl, title, price}) => {
    return (
        <li className="list--product">
            <div className="add--love">
                <img src={loveWhite} alt=""/>
            </div>
            <div className="product--body">
                <div className="product--img__wrapper">
                    <img src={require("../../assets/" + imgUrl)} alt=""/>
                </div>
                <div className="product--title">
                    {title}
                </div>
                <div className="product--price">
                    {price} ₽
                </div>
            </div>
        </li>
    )
}
export default ShopListItem