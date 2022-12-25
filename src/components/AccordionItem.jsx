import {useState} from "react";


const AccordionItem=({titleHead , titleItem, indexOpenAccordion, setIndexOpenAccordion, index})=>{

    const toggleAccordion = (index) => {
        if(indexOpenAccordion===index){
            console.log("Close")
            setIndexOpenAccordion(-1)
        }
        else{
            setIndexOpenAccordion(index)
        }
    }

    return(
        <>
            <div className="accordion_item">
                <div className="accordion_item_header">
                    <div className="item_header_title">
                        {titleHead}
                    </div>
                    <div className="btn_open_accordion" onClick={()=>toggleAccordion(index)}>
                        {indexOpenAccordion===index ? "–":"+"}
                    </div>
                </div>
                <div className={indexOpenAccordion===index ? "accordion_item_body accordion_item_body_active":"accordion_item_body"}>
                    <div className="item_title_body">
                        {titleItem}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccordionItem