import React, {useState} from "react";
import {addSelected,removeSelected} from "../redux/slices/selectedSlice";
import {useDispatch, useSelector} from "react-redux";

const SelectorOption=({id,title,price})=>{
    const {selectedItems}=useSelector(state => state.selected)
    const [checked,setChecked]=useState(selectedItems.find(item=>item.id===id)!==undefined)
    const dispatch=useDispatch()
    const ToggleCheckedItem=()=>{
        if(!checked){
            setChecked(true)
            dispatch(addSelected({id,title,price}))
        }
        else{
            setChecked(false)
            dispatch(removeSelected(id))
        }
    }
    return(
        <li className="selector_item">
            <div className="selector_name" onClick={()=>ToggleCheckedItem()}>{title}</div>
            <div className={checked ? "select_circle selected": "select_circle"} onClick={()=>ToggleCheckedItem()}>
                {checked && <img src="/img/check_white.svg" alt="" className="selected_img"/>}
            </div>
        </li>
    )
}
export default SelectorOption