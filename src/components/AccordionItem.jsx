import {useState} from "react";


const AccordionItem=({titleHead , titleItem})=>{
    const [accordionOpen,setAccordionOpen]=useState(false)
    return(
        <>
            <div className="accordion_item">
                <div className="accordion_item_header">
                    <div className="item_header_title">
                        {titleHead}
                    </div>
                    <div className="btn_open_accordion" onClick={()=>setAccordionOpen(a=>!a)}>
                        {accordionOpen ? "–":"+"}
                    </div>
                </div>
                <div className={accordionOpen ? "accordion_item_body accordion_item_body_active":"accordion_item_body"}>
                    <div className="item_title_body">
                        {titleItem}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccordionItem