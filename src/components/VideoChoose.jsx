import React, {useState} from "react";
import useHorizontalScroll from "../hooks/ScrollCarusel";
import useBlurSideCarousel from "../hooks/BlurSideCarousel";
import {videoList} from "../constants";


const VideoChoose = () => {
    const carouselVideo=useHorizontalScroll()
    const carouselWrapper=useBlurSideCarousel("video_name_item",carouselVideo)
    const [activeVideo,setActiveVideo]=useState(0);

    return (
        <>
            <div className="video_wrapper">
                <iframe className="video" src={`https://www.youtube.com/embed/${videoList[activeVideo].videoUrl}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>

                </iframe>
            </div>

            <div className="video_content">
                <div className="video_list_wrapper last_scrolled" ref={carouselWrapper}>
                    <ul className="video_name_list" ref={carouselVideo}>
                        {videoList.map((item,i)=>
                            <li key={i} className={activeVideo===i ? "video_name_item active_video" : "video_name_item"} onClick={()=>setActiveVideo(i)}>
                                <div className="number_lesson">
                                    {i + 1} урок
                                </div>
                                <div className="video_title">
                                    {item.videoName}
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default VideoChoose