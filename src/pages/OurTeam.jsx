import React, {useEffect, useState} from "react";
import {listPersonOurTeam} from "../constants";
import TeamList from "../components/TeamList";


const OurTeam = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[])
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
                <TeamList listPeople={listPersonOurTeam} />
            </div>
        </>
    )
}

export default OurTeam