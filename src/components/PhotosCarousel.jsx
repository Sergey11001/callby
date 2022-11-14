import useHorizontalScroll from "../ScrollCarusel";
import PhotoCarouselItem from "./PhotoCarouselItem";
import {useEffect, useRef} from "react";

const photosCarousel=["/img/photo_carousel/2.jpg", "/img/photo_carousel/1.jpg", "/img/photo_carousel/3.jpg", "/img/photo_carousel/2.jpg"]

const PhotosCarousel = () =>{
    const carouselPhotos=useHorizontalScroll()
    const carouselPhotoBody=useRef(null)

    useEffect(()=>{
        const scrollCarousel = () =>{
            const carouselItems=document.querySelectorAll('.photo_item')

            if(carouselPhotos.current.getBoundingClientRect().left>document.querySelector('.photo_item').getBoundingClientRect().x){
                carouselPhotoBody.current.classList.add("first_scrolled")
            }
            else{
                carouselPhotoBody.current.classList.remove("first_scrolled")
            }

            if(carouselPhotos.current.getBoundingClientRect().right<carouselItems[carouselItems.length-1].getBoundingClientRect().right-1){
                carouselPhotoBody.current.classList.add("last_scrolled")
            }
            else {
                carouselPhotoBody.current.classList.remove("last_scrolled")
            }
        }
        carouselPhotos.current.addEventListener("scroll", scrollCarousel)

    },[])

    return (
        <div className="about_photos common_background">
            <div className="about_photos_title">
                Немного фоточек 🙌🏻
            </div>
            <div className="about_photos_carousel" ref={carouselPhotoBody}>
                <div className="photos_carousel_wrapper" ref={carouselPhotos}>
                    {photosCarousel.map((item,i)=>
                        <PhotoCarouselItem key={i} urlImg={item} />
                    )}
                </div>
            </div>
        </div>
    )
}
export default PhotosCarousel