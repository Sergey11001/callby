import {Link} from "react-router-dom";


const MemoryItem = ({imgUrl , id , sub_title}) =>{

    return(
        <div className="carousel_item">
            <div className="carousel_item_body">
                <div className="carousel_item_image">
                    <img src={require('../assets/' + imgUrl)} alt="" className="item_img"/>
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