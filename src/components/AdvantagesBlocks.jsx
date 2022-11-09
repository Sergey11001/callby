import React from "react";
import BlockAdvantage from "./BlockAdvantage";
import {advantagesBlocksList} from "../constants";

const AdvantagesBlocks=()=>{

    return(
        <>
            {advantagesBlocksList.map((block,i)=>
                <BlockAdvantage key={i} {...block} />
            )}
        </>
    )
}

export default AdvantagesBlocks