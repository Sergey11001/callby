
const MemoryItem = ({imgUrl , id , sub_title, activeMemoryId, setActiveMemoryId}) =>{

    return(
        <div className={activeMemoryId===id ? "carousel_item carousel_item_active" : "carousel_item"} onClick={()=> setActiveMemoryId(id)}>
            <div className="carousel_item_body">
                <div className="carousel_item_image">
                    <img src={require('../../assets/' + imgUrl)} alt="" className="item_img"/>
                </div>
                <div className="carousel_item_inf">
                    <div className="item_title">
                        {id} воспоминание
                    </div>
                    <div className="item_sub_title">
                        {sub_title}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MemoryItem