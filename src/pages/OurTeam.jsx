import PersonPortret from "../components/PersonPortret";
import React, {useState} from "react";


const arr_person_full=[
    {imgUrl:"/img/profile_photo/1.png",name:`Владимир`,surname:"Житов",job:"CЕO"},
    {imgUrl:"/img/profile_photo/2.png",name:"Евгения",surname:"Житов",job:"Founder/CVO"},
    {imgUrl:"/img/profile_photo/3.png",name:"Владимир",surname:"Отставная",job:"Founder/CMO"},
    {imgUrl:"/img/profile_photo/4.png",name:"Владимир",surname:"Житов",job:"Founder/ Art-director"},
    {imgUrl:"/img/profile_photo/5.png",name:"Мария",surname:"Отставная",job:"Graphic Designer"},
    {imgUrl:"/img/profile_photo/6.png",name:"Мария",surname:"Житов",job:"HR архитектор"},
    {imgUrl:"/img/profile_photo/10.png",name:"Мария",surname:"Отставная",job:"HR-менеджер"},
    {imgUrl:"/img/profile_photo/8.png",name:"Мария",surname:"Захарова",job:"Middle Backend Rust Developer"},
    {imgUrl:"/img/profile_photo/9.png",name:"Мария",surname:"Захарова",job:"Middle Frontend Rust Developer"},
]
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
                    {arr_person_full.map((item,i)=>
                        <PersonPortret key={i} index={i}  {...item} activePerson={activePersonTeam} setActivePerson={setActivePersonTeam}/>
                    )}
                </div>

            </div>
        </>
    )
}

export default OurTeam