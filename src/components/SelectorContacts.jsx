import {useEffect, useRef, useState} from "react";

import {contactOptions} from "../constants";

const SelectorContacts = () => {
    const [activeSelector,setActiveSelector]=useState(false)
    const [activeIndex,setActiveIndex]=useState(-1)
    const popupContacts=useRef(null)
    const chooseOption = (i) => {
        setActiveIndex(i)
        setActiveSelector(false)
    }
    useEffect(()=>{
        const handleClickOut=(e)=>{
            if(!e.composedPath().includes(popupContacts.current)){
                setActiveSelector(false)
            }
        }
        window.addEventListener('click',handleClickOut)
        return ()=>window.removeEventListener('click',handleClickOut)
    },[])


    return(
        <div className="contact_selector" ref={popupContacts}>
            <div className={activeSelector ? "selector_contacts_header become_white border_yellow" : activeIndex!==-1 ? "selector_contacts_header become_white":"selector_contacts_header common_background"} onClick={()=>setActiveSelector(!activeSelector)}>
                <div className={activeIndex!==-1 ? "selector_placeholder active_placeholder":"selector_placeholder"}>{activeSelector ? "":activeIndex!==-1 ? contactOptions[activeIndex]:"Причина"}</div>
                <div className="selector_img">
                    <img src="/img/small_img/arr_down_blue.svg" alt="arrow" className={activeSelector ? "container_selector_img img_rotate":"container_selector_img"}/>
                </div>
            </div>
            <div className={activeSelector ? "contacts_selector_body_wrapper active_contact_selector":"contacts_selector_body_wrapper"}>
                <div className="contacts_selector_body">
                    <ul className="contacts_selector_options">
                        {contactOptions.map((item,i)=>
                            <li key={i} className="contacts_selector_option" onClick={()=>chooseOption(i)}>{item}</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default SelectorContacts