import React from "react";


const MusicPlay=()=>{
    return(
        <div className="music_block background_style_block">
            <div className="music_blue_block">

            </div>
            <div className="music_name">
                Музыка
            </div>
            <div className="music_artist">
                Исполнитель
            </div>
            <div className="music_line">
                <div className="blue_part">

                </div>
            </div>
            <div className="music_timer">
                <div className="from">
                    1:23
                </div>
                <div className="to">
                    3:45
                </div>
            </div>
            <div className="music_play">
                <div className="play_image">
                    <img src="/img/small_img/play.svg" alt="" className="music_play_img"/>
                </div>
            </div>
        </div>
    )
}

export default MusicPlay