import useHorizontalScroll from "../../hooks/ScrollCarusel";
import MemoryItem from "./MemoryItem";
import useBlurSideCarousel from "../../hooks/BlurSideCarousel";
import {rememberList} from "../../constants";
import {useState} from "react";


const Memories = () =>{
    const [activeMemoryId,setActiveMemoryId] = useState(1)

    const carouselStory=useHorizontalScroll()
    const carouselWrapper=useBlurSideCarousel("carousel_item",carouselStory)

    return (
        <>
            <div className="about_carousel_wrapper last_scrolled" ref={carouselWrapper}>
                <div className="about_carousel" ref={carouselStory}>
                    {rememberList.map((item,i)=>
                        <MemoryItem key={i} {...item} activeMemoryId={activeMemoryId} setActiveMemoryId={setActiveMemoryId}></MemoryItem>
                    )}
                </div>
            </div>
            <div className="about_story common_background">
                <div className="story_body">
                    <div className="story_column">
                        <div className="story_content">
                            Nunc tempor interdum ex, sed cursus nunc egestas aliquet. Pellentesque interdum vulputate elementum. Donec erat diam, pharetra nec enim ut, bibendum pretium tellus. Vestibulum et turpis nibh. Cras vel ornare velit, ac pretium arcu. Cras justo augue, finibus id sollicitudin et, rutrum eget metus. Suspendisse ut mauris eu massa pulvinar sollicitudin vel sed enim. Pellentesque viverra arcu et dignissim vehicula. Donec a velit ac dolor dapibus pellentesque sit amet at erat.
                        </div>
                    </div>
                    <div className="story_column">
                        <div className="story_content">
                            Nunc tempor interdum ex, sed cursus nunc egestas aliquet. Pellentesque interdum vulputate elementum. Donec erat diam, pharetra nec enim ut, bibendum pretium tellus. Vestibulum et turpis nibh. Cras vel ornare velit, ac pretium arcu. Cras justo augue, finibus id sollicitudin et, rutrum eget metus. Suspendisse ut mauris eu massa pulvinar sollicitudin vel sed enim. Pellentesque viverra arcu et dignissim vehicula. Donec a velit ac dolor dapibus pellentesque sit amet at erat.
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Memories