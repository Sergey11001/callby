import React from "react";
import {motion} from "framer-motion";

import play from "../assets/small_img/play.svg"

const MusicPlay=({parentRef})=>{
    return(
        <motion.div className="music_block background_style_block"
                    drag
                    whileDrag={{scale:1.1}}
                    dragConstraints={parentRef}
        >
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
                    <img src={play} alt="" className="music_play_img"/>
                </div>
            </div>
        </motion.div>
    )
}

export default MusicPlay