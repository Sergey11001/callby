import useHorizontalScroll from "../hooks/ScrollCarusel";
import MemoryItem from "./MemoryItem";
import useBlurSideCarousel from "../hooks/BlurSideCarousel";
import {rememberList} from "../constants";


const Memories = () =>{
    const carouselStory=useHorizontalScroll()
    const carouselWrapper=useBlurSideCarousel("carousel_item",carouselStory)

    return (
        <div className="about_carousel_wrapper last_scrolled" ref={carouselWrapper}>
            <div className="about_carousel" ref={carouselStory}>
                {rememberList.map((item,i)=>
                    <MemoryItem key={i} {...item}></MemoryItem>
                )}
            </div>
        </div>
    )
}
export default Memories