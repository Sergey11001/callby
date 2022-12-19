import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

import TariffBlocksLong from "../components/Tariffs/TariffBlocksLong";
import TariffConstructor from "../components/Tariffs/TariffConstructor";


const Tariffs = () => {
    const [active,setActive]=useState(false)

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])
    return(
        <>
            <motion.div className="tariff_page" initial={{opacity:0}} animate={{opacity:1}} transition={{ duration:0.15 }}>
                <div className="title_page tariff_page_title">
                    <motion.div initial={{y:-50}} animate={{y:0}} transition={{ duration:0.3 }}>
                        <div className="title tariff_title">
                            Тарифный план
                        </div>
                        <div className="subtitle tariff_subtitle">
                            Выберите правильный план для вашей работы!
                        </div>
                    </motion.div>
                    <div className={active ? "tariff_switch common_background  tariff_switch_active":"tariff_switch common_background"}>
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
                <div className="hard_decision bottom_cluster">
                    <div className="title cluster_title">
                        Трудно принять решение?
                    </div>
                    <div className="subtitle cluster_subtitle">
                        Задайте нам вопрос в чат поддержки
                    </div>
                    <Link to="/contacts/support" className="support_btn btn ">Поддержка</Link>
                </div>
            </motion.div>

        </>

    )
}
export default Tariffs