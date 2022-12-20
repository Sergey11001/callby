import React from "react";
import {motion} from "framer-motion";

import filter from "../../assets/small_img/filter.svg";

const FilterShop = () => {
    return (
        <ul className="shop--list__filters ">
            <li className="shop--list__filters--item">
                <img src={filter} alt="" className="filter"/>
                <span>По популярности</span>
            </li>
            <li className="shop--list__filters--item">
                <img src={filter} alt="" className="filter"/>
                <span>По цвету</span>
            </li>
            <li className="shop--list__filters--item">
                <img src={filter} alt="" className="filter"/>
                <span>По количеству</span>
            </li>
            <li className="shop--list__filters--item shop--list__filters--item_btn">
                <span>Применить</span>
            </li>
        </ul>
    )
}
export default FilterShop