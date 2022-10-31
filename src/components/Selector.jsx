import React, {useState} from "react";
import SelectorOption from "./SelectorOption";

const selection_options=[
    {id:1,price:35,title:"Совместное редактирование (расширенная версия);"},
    {id:2,price:40,title:"Создавайте свою сводку правил;"},
    {id:3,price:62,title:"Облачное хранилище объемом 50 Гб"},
    {id:4,price:15,title:"Приватные чаты и каналы;"},
    {id:5,price:79,title:"Отображение тех, кто не подключился к конференции;"},
]


const Selector=()=>{
    const [activePopup,setActivePopup]=useState(false)
    return(
        <>
            <div className="selector_wrapper">
                <div className="selector_header">
                    <div className="selector_title">
                        Приватные чаты и каналы
                    </div>
                    <button className="btn selector_btn" onClick={()=>setActivePopup(a=>!a)}>
                        <img src="/img/arr_down.svg" alt="" className={activePopup ? "selector_img img_rotate":"selector_img"}/>
                    </button>
                </div>
                <div className={activePopup ? "selector_body_wrapper_active selector_body_wrapper" :"selector_body_wrapper"}>
                    <div className="selector_body">
                        <ul className="selector_items">
                            {selection_options.map((item,i)=>
                                <SelectorOption key={i} {...item} />
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Selector