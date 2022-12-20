import React from "react";
import {MBlockAdvantage} from "./BlockAdvantage";
import {advantagesBlocksList} from "../constants";
import {motion} from "framer-motion";

const leftSideAnimation = {
    hidden:{
        x:-100,
        opacity:0
    },
    visible:(custom=0) => ({
        x:0,
        opacity: 1,
        transition:{delay:custom*0.15, duration:0.5}

    })
}

const AdvantagesBlocks=()=>{

    return(
        <>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{amount:0.2, once:true}}
            >
                <section className="advantage">
                    {advantagesBlocksList.map((block,i)=>
                        <MBlockAdvantage variants={leftSideAnimation} custom={i} key={i} {...block} />
                    )}
                </section>
            </motion.div>


        </>
    )
}

export default AdvantagesBlocks