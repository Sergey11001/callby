import React, {useEffect, useRef, useState} from "react";

const PersonPortret=({index,surname,activePerson,setActivePerson,imgUrl,name,job})=>{

    useEffect(()=>{
        const FindLastFirst=()=>{
            let lastElement=false;
            let arr = document.querySelector('.team_list').children
            for (let i = 0; i < arr.length; i++) {
                if(lastElement && lastElement.offsetLeft>arr[i].offsetLeft){
                    lastElement.classList.add("last_row_person")
                    arr[i].classList.add("first_row_person")
                }
                else if(lastElement){
                    lastElement.classList.remove('last_row_person')
                    arr[i].classList.remove('first_row_person')
                }
                lastElement=arr[i];
                console.log(...arr[i].classList)
            }
        }
        FindLastFirst()
        const windowWidthChange=()=>{
            FindLastFirst()
        }
        window.addEventListener('resize',windowWidthChange)
        return ()=>window.removeEventListener('resize',windowWidthChange)
    },[activePerson])
    return(
        <div onClick={()=>setActivePerson(index)} className={index===activePerson ? "team_person_wrapper active_person" : index-1===activePerson ?"team_person_wrapper person_right":index+1===activePerson ? "team_person_wrapper person_left" : "team_person_wrapper"}>
            <div className="team_person_block">
                <div className="person_image">
                    <img src={imgUrl} alt="" className="person_img"/>
                </div>
                <div className="person_inf">
                    <div className="person_name">
                        {name} <br /> {surname}
                    </div>
                    <div className="job_name">
                        {job}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PersonPortret