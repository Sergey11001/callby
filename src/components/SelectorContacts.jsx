import {useState} from "react";

const contact_options=["Обращение","Жалоба","Благодарность"]
const SelectorContacts=()=>{
    const [activeSelector,setActiveSelector]=useState(false)
    const [activeIndex,setActiveIndex]=useState(-1)

    const ChooseOption=(i)=>{
        setActiveIndex(i)
        setActiveSelector(false)
    }
    return(
        <div className="contact_selector">
            <div className={activeSelector ? "selector_contacts_header become_white":"selector_contacts_header"} onClick={()=>setActiveSelector(a=>!a)}>
                <div className={activeIndex!==-1 ? "selector_placeholder active_placeholder":"selector_placeholder"}>{activeIndex!==-1 ? contact_options[activeIndex]:"Причина"}</div>
                <div className="selector_img">
                    <img src="/img/arr_down_blue.svg" alt="arrow" className={activeSelector ? "container_selector_img img_rotate":"container_selector_img"}/>
                </div>
            </div>
            <div className={activeSelector ? "contacts_selector_body_wrapper active_contact_selector":"contacts_selector_body_wrapper"}>
                <div className="contacts_selector_body">
                    <ul className="contacts_selector_options">
                        {contact_options.map((item,i)=>
                            <li className="contacts_selector_option" onClick={()=>ChooseOption(i)}>{item}</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default SelectorContacts