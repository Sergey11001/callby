import useHorizontalScroll from "../../hooks/ScrollCarusel";
import PhotoCarouselItem from "./PhotoCarouselItem";
import useBlurSideCarousel from "../../hooks/BlurSideCarousel";

const photosCarousel=["photo_carousel/3.png", "photo_carousel/1.png", "photo_carousel/2.png", "photo_carousel/1.png"]

const PhotosCarousel = () =>{
    const carouselPhotos=useHorizontalScroll()
    const carouselWrapper=useBlurSideCarousel("photo_item",carouselPhotos)

    return (
        <div className="about_photos common_background">
            <div className="about_photos_title">
                Немного фоточек 🙌🏻
            </div>
            <div className="photos_carousel_wrapper last_scrolled" ref={carouselWrapper}>
                <div className="photos_carousel" ref={carouselPhotos}>
                    {photosCarousel.map((item,i)=>
                        <PhotoCarouselItem key={i} urlImg={item} />
                    )}
                </div>
            </div>
        </div>

    )
}
export default PhotosCarousel