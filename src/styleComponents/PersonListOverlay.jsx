import React from "react";


const PersonListOverlay=()=>{
    return(
        <div className="person_list background_style_block">
            <div className="person_image">
                <img src="/img/phone2.png" alt="" className="person_img"/>
            </div>
            <div className="person_image">
                <img src="/img/phone3.png" alt="" className="person_img"/>
            </div>
            <div className="person_image">
                <img src="/img/phone1.png" alt="" className="person_img"/>
            </div>
            <div className="person_image empty_blue_block">
                +2
            </div>
        </div>
    )
}
export default PersonListOverlay