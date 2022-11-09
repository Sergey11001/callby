import AccordionItem from "./AccordionItem";

import {accordionItems} from "../constants"


const Accordion=()=>{
    return(
        <>
            <div className="accordion">
                {accordionItems.map((item,i)=>
                    <AccordionItem key={i} {...item} />
                )}
            </div>

        </>
    )
}
export default Accordion