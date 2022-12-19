import React, {useEffect, useState} from "react";
import {listPersonOurTeam} from "../constants";
import TeamList from "../components/TeamList";
import {motion} from "framer-motion";

const OurTeam = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[])
    return(
        <>
            <motion.div className="our_team_page" initial={{opacity:0}} animate={{opacity:1}} transition={{ duration:0.15 }}>
                <div className="title_page our_team_page_title">
                    <motion.div initial={{y:-50}} animate={{y:0}} transition={{ duration:0.3}}>
                        <div className="title tariff_title">
                            Наша команда
                        </div>
                        <div className="subtitle our_team_subtitle">
                            Мы создаем для вас уникальный продукт!
                        </div>
                    </motion.div>

                </div>
                <TeamList listPeople={listPersonOurTeam} />
            </motion.div>
        </>
    )
}

export default OurTeam