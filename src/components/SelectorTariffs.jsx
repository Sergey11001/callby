import React, {useState} from "react";
import SelectorOptionTariff from "./SelectorOptionTariff";

import {selectionOptions} from "../constants";
import {useSelector} from "react-redux";

import arrow from "../assets/small_img/arr_down.svg"

const SelectorTariffs=()=>{
    const [activePopup,setActivePopup]=useState(false)
    const {selectedItems} = useSelector((state) =>state.selected)
    return(
        <>
            <div className="selector_wrapper">
                <div  className={activePopup ? "selector_header border_yellow":"selector_header"}>
                    <input disabled={true} value={selectedItems.length ?  selectedItems.map(item=>item.title).join(", ") : "Выберите тарифные опции"} className={selectedItems.length ? "selector_title option_chose" : "selector_title"} />
                    <button className="btn selector_btn" onClick={()=>setActivePopup(!activePopup)}>
                        <img src={arrow} alt="" className={activePopup ? "selector_img img_rotate":"selector_img"}/>
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