import {useEffect} from "react";
import Memories from "../components/Memories";
import PhotosCarousel from "../components/PhotosCarousel";

const AboutUs = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

    return(
        <>
            <div className="about_page">
                <div className="title_page about_title_page">
                    Что на счет нас?
                </div>
                <div className="sub_title about_sub_title">
                    Нажмите на воспоминание, чтобы активировать его
                </div>
                <div className="about_page_content">
                    <Memories />
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
                    <PhotosCarousel />
                </div>
            </div>
        </>
    )
}
export default AboutUs