import AccordionItem from "./AccordionItem";

import {accordionItems} from "../constants"
import {useState} from "react";


const Accordion=()=>{
    const [indexOpenAccordion, setIndexOpenAccordion] = useState(-1)
    return(
        <>
            <div className="accordion">
                {accordionItems.map((item,i)=>
                    <AccordionItem key={i} {...item} indexOpenAccordion={indexOpenAccordion} setIndexOpenAccordion={setIndexOpenAccordion} index={i}/>
                )}
            </div>

        </>
    )
}
export default Accordion