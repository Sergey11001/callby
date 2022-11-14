import useHorizontalScroll from "../ScrollCarusel";
import {useEffect, useRef} from "react";
import MemoryItem from "./MemoryItem";


const rememberList=[
    {sub_title:"Взлеты и падения", id:1,imgUrl:"/img/carousel/1.jpg"},
    {sub_title:"Тот день, когда...", id:2,imgUrl:"/img/carousel/2.jpg"},
    {sub_title:"Общий сбор", id:3,imgUrl:"/img/carousel/3.jpg"},
    {sub_title:"День Х", id:4,imgUrl:"/img/carousel/4.jpg"},
    {sub_title:"Взлеты и падения", id:5,imgUrl:"/img/carousel/2.jpg"}
]

const Memories = () =>{
    const carouselStory=useHorizontalScroll()
    const carouselWrapper=useRef(null)

    useEffect(()=>{
        const scrollCarousel = () =>{
            const carouselItems=document.querySelectorAll('.carousel_item')

            if(carouselStory.current.getBoundingClientRect().left>document.querySelector('.carousel_item').getBoundingClientRect().x){
                carouselWrapper.current.classList.add("first_scrolled")
            }
            else{
                carouselWrapper.current.classList.remove("first_scrolled")
            }

            if(carouselStory.current.getBoundingClientRect().right<carouselItems[carouselItems.length-1].getBoundingClientRect().right-1){
                carouselWrapper.current.classList.add("last_scrolled")
            }
            else {
                carouselWrapper.current.classList.remove("last_scrolled")
            }
        }

        carouselStory.current.addEventListener("scroll", scrollCarousel)
    },[])

    return (
        <div className="about_carousel_wrapper" ref={carouselWrapper}>
            <div className="about_carousel" ref={carouselStory}>
                {rememberList.map((item,i)=>
                    <MemoryItem key={i} {...item}></MemoryItem>
                )}
            </div>
        </div>
    )
}
export default Memories