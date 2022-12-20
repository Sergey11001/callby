

const PresentationSlide = ({imgUrl}) => {
    return (
        <>
            <div className="presentation--slide">
                <img src={require("../../assets/"+imgUrl)} alt=""/>
            </div>
        </>
    )
}
export default PresentationSlide