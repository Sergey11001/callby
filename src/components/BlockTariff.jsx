import React from "react";


const BlockTariff=({title,description_list,price,long=false})=>{

    return(
        <div className="tariff_column">
            <div className="tariff_content">
                <div className="tariff_content_title">
                    {title}
                </div>
                {price===0 &&
                    <div className="tariff_subtitle">
                        Бесплатная версия даёт возможность прикоснуться к основному функционалу приложения
                    </div>
                }
                <ul className="tariff_advs">
                    {description_list.map((item,i)=>
                        <li key={i} className={long ? "tariff_adv no_last_opacity":"tariff_adv"}>
                            <img src="/img/check.svg" alt="" className="img_tariff"/>
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
                <button className="tariff_btn btn">Выбрать</button>
            </div>
        </div>
    )
}
export default BlockTariff