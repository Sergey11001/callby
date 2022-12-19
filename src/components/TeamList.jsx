import React, {useEffect, useState} from "react";

import PersonPortret from "./PersonPortret";

const TeamList = ({listPeople}) => {
    const [activePerson,setActivePerson]=useState(-1)
    useEffect(()=>{
        setTimeout(()=>setActivePerson(0),80)
    },[])
    return (
        <div className="team_list">
            {listPeople.map((item,i)=>
                <PersonPortret key={i} index={i}  {...item} activePerson={activePerson} setActivePerson={setActivePerson}/>
            )}
        </div>
    )
}

export default TeamList