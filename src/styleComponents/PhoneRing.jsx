import React from "react";


const PhoneRing=()=>{
    return(
        <div className="phone_ring background_style_block">
            <div className="phone_img_wrapper">
                <div className="phone_image">
                    <img src="/img/phone1.png" alt="" className="phone_img"/>
                </div>
            </div>
            <div className="phone_name">
                <div className="name">Анна Вакуленко</div>
                <div className="phone_ended">Звонок завершен</div>
            </div>
            <div className="date">06.07.2022</div>
        </div>
    )
}
export default PhoneRing