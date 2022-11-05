import React from "react";


const Tools=()=>{
    return(
        <div className="tool_block background_style_block">
            <div className="tool_header">
                <div className="green_block"></div>
                <div className="red_block"></div>
                <div className="points">
                    <span></span>
                </div>
            </div>
            <div className="tool_title">
                Задача
            </div>
            <div className="tool_descript">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            </div>
            <div className="tool_footer">
                <div className="tool_images">
                    <div className="tool_image">
                        <img src="/img/phone1.png" alt="" className="tool_img"/>
                    </div>
                    <div className="tool_image">
                        <img src="/img/phone3.png" alt="" className="tool_img"/>
                    </div>
                </div>
                <div className="tool_data">
                    <div className="tool_data_image">
                        <img src="/img/small_img/chat.svg" alt="" className="tool_data_img"/>
                    </div>
                    <div className="data_col">15</div>
                </div>
                <div className="tool_data">
                    <div className="tool_data_image">
                        <img src="/img/small_img/clip.svg" alt="" className="tool_data_img"/>
                    </div>
                    <div className="data_col">3</div>
                </div>

            </div>
        </div>
    )
}
export default Tools