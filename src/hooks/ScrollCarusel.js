import { useRef, useEffect } from "react";

function useHorizontalScroll() {
    const elRef = useRef();
    useEffect(() => {
        const el = elRef.current;
        if (el) {
            const onWheel = e => {
                if (e.deltaY === 0) return;
                e.preventDefault();
                el.scrollBy(e.deltaY, 0, "smooth");
            }
            el.addEventListener("wheel", onWheel);
        }
    }, []);
    return elRef;
}
export default useHorizontalScroll