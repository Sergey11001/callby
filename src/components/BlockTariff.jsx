import React from "react";


const BlockTariff=({title,description_list,price,long=false,blue,own_tarif})=>{
    return(
        <div className="tariff_column">
            <div className={blue ? "tariff_content tariff_blue": "tariff_content"}>
                <div className="tariff_content_title">
                    {title}
                </div>
                {price===0 && !own_tarif &&
                    <div className="tariff_subtitle">
                        Бесплатная версия даёт возможность прикоснуться к основному функционалу приложения
                    </div>
                }
                <ul className="tariff_advs">
                    {description_list.map((item,i)=>
                        <li key={i} className={long ? "tariff_adv no_last_opacity":"tariff_adv"}>
                            <img src={blue ? "/img/small_img/check_white.svg":"/img/small_img/check.svg"} alt="" className="img_tariff"/>
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