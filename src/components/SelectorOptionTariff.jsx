import React, {useEffect, useState} from "react";
import {addSelected,removeSelected} from "../redux/slices/selectedSlice";
import {useDispatch, useSelector} from "react-redux";

import check from "../assets/small_img/check_white.svg"

const SelectorOptionTariff=({id , title , price})=>{
    const {selectedItems}=useSelector(state => state.selected)
    const [checked,setChecked]=useState(false)
    const dispatch=useDispatch()
    useEffect(() => {
        setChecked(selectedItems.find(item=>item.id===id)!==undefined)
    },[])

    const toggleCheckedItem = () => {
        if(!checked){
            dispatch(addSelected({id,title,price}))
        }
        else{
            dispatch(removeSelected(id))
        }
        setChecked(!checked)
    }
    return(
        <li className="selector_item">
            <div className="selector_name" onClick={toggleCheckedItem}>{title};</div>
            <div className={checked ? "select_circle selected": "select_circle"} onClick={toggleCheckedItem}>
                {checked && <img src={check} alt="" className="selected_img"/>}
            </div>
        </li>
    )
}
export default SelectorOptionTariff