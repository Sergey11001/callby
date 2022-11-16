import {useEffect, useRef} from "react";


function useBlurSideCarousel (carouselElements,scrollingElement){
    const elRef=useRef()
    useEffect(()=>{
        const el=elRef.current;
        if(el){
            const scrollCarousel = () => {
                const carouselItems=document.querySelectorAll(`.${carouselElements}`)
                if(el.getBoundingClientRect().left>carouselItems[0].getBoundingClientRect().x){
                    el.classList.add("first_scrolled")
                }
                else{
                    el.classList.remove("first_scrolled")
                }

                if(el.getBoundingClientRect().right<carouselItems[carouselItems.length-1].getBoundingClientRect().right-1){
                    el.classList.add("last_scrolled")
                }
                else {
                    el.classList.remove("last_scrolled")
                }
            }
            scrollingElement.current.addEventListener("scroll", scrollCarousel)
        }
    },[])
    return elRef
}
export default useBlurSideCarousel