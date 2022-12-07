import React from "react";

import check from "../../assets/small_img/check.svg"
import whiteCheck from "../../assets/small_img/check_white.svg"

const BlockTariff=({title , descriptionList , price,blue , ownTariff , long=false}) => {
    return(
        <div className="tariff_column">
            <div className={blue ? "tariff_content tariff_blue": "tariff_content"}>
                <div className="tariff_content_title">
                    {title}
                </div>
                {price===0 && !ownTariff &&
                    <div className="tariff_subtitle">
                        Бесплатная версия даёт возможность прикоснуться к основному функционалу приложения
                    </div>
                }
                <ul className="tariff_advs">
                    {descriptionList.map((item,i)=>
                        <li key={i} className={long ? "tariff_adv no_last_opacity":"tariff_adv"}>
                            <img src={blue ? whiteCheck : check} alt="" className="img_tariff"/>
                            <div className="item_adv">
                                {item}
                            </div>
                        </li>
                    )}
                </ul>
                <div className="tariff_price">
                    <span className="rub">₽</span>
                    <span>{price}</span>
                    <span className="month">/мес</span>
                </div>
                <div className="btn_wrapper_bold">
                    <button className="tariff_btn btn">Выбрать</button>
                </div>
            </div>
        </div>
    )
}
export default BlockTariff