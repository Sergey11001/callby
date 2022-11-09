import PersonPortret from "../components/PersonPortret";
import React, {useState} from "react";
import {listPersonOurTeam} from "../constants";

const OurTeam=()=>{
    const [activePersonTeam,setActivePersonTeam]=useState(0)
    return(
        <>
            <div className="our_team_page">
                <div className="title_page our_team_page_title">
                    <div className="title tariff_title">
                        Наша команда
                    </div>
                    <div className="subtitle our_team_subtitle">
                        Мы создаем для вас уникальный продукт!
                    </div>
                </div>
                <div className="team_list">
                    {listPersonOurTeam.map((item,i) =>
                        <PersonPortret key={i} index={i}  {...item} activePerson={activePersonTeam} setActivePerson={setActivePersonTeam}/>
                    )}
                </div>

            </div>
        </>
    )
}

export default OurTeam