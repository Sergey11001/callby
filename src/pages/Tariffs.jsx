import React, {useState} from "react";
import TariffBlocksLong from "../components/TariffBlocksLong";
import TariffConstructor from "../components/TariffConstructor";


const Tariffs=()=>{
    const [active,setActive]=useState(false)

    return(
        <>
            <div className="tariff_page">
                <div className="title_page tariff_page_title">
                    <div className="title tariff_title">
                        Тарифный план
                    </div>
                    <div className="subtitle tariff_subtitle">
                        Выберете правильный план для вашей работы!
                    </div>
                    <div className={active ? "tariff_switch tariff_switch_active":"tariff_switch"}>
                        <div onClick={()=>setActive(false)} className={active ? "constructor":"constructor active_toggle"}>
                            Конструктор
                        </div>
                        <div onClick={()=>setActive(true)} className={active ? "list_tariffs active_toggle":"list_tariffs"}>
                            Тарифы
                        </div>
                    </div>
                </div>
                <div className="switched">
                    {active ? <TariffBlocksLong /> : <TariffConstructor />}
                </div>
                <div className="hard_decision bottom_claster">
                    <div className="title claster_title">
                        Трудно принять решение?
                    </div>
                    <div className="subtitle claster_subtitle">
                        Задайте нам вопрос в чат поддержки
                    </div>
                    <button className="support_btn btn">Поддержка</button>
                </div>
            </div>

        </>

    )
}
export default Tariffs