import React, {useState} from "react";
import SelectorOptionTariff from "./SelectorOptionTariff";

import {selectionOptions} from "../constants";


const SelectorTariffs=()=>{
    const [activePopup,setActivePopup]=useState(false)
    return(
        <>
            <div className="selector_wrapper">
                <div  className={activePopup ? "selector_header border_yellow":"selector_header"}>
                    <div className="selector_title">
                        Приватные чаты и каналы
                    </div>
                    <button className="btn selector_btn" onClick={()=>setActivePopup(!activePopup)}>
                        <img src="/img/small_img/arr_down.svg" alt="" className={activePopup ? "selector_img img_rotate":"selector_img"}/>
                    </button>
                </div>
                <div className={activePopup ? "selector_body_wrapper_active selector_body_wrapper" :"selector_body_wrapper"}>
                    <div className="selector_body common_background">
                        <ul className="selector_items">
                            {selectionOptions.map((item,i)=>
                                <SelectorOptionTariff key={i} {...item} />
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SelectorTariffs