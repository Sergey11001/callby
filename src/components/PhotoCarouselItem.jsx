

const PhotoCarouselItem = ({urlImg}) =>{
    return(
        <div className="photo_item">
            <div className="photo_item_wrapper">
                <img src={require('../assets/' + urlImg)} alt="" className="photo_img"/>
            </div>
        </div>
    )
}
export default PhotoCarouselItem