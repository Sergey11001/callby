import {createSlice} from "@reduxjs/toolkit";

const initialState={
    selectedItems:[]
}

const selectedSlice=createSlice({
    name:"selected",
    initialState,
    reducers:{
        addSelected(state,action){
            state.selectedItems=[...state.selectedItems,action.payload]
        },
        removeSelected(state,action){
            state.selectedItems=state.selectedItems.filter(item=>item.id!==action.payload)
        }
    }
})

export const {addSelected,removeSelected}=selectedSlice.actions
export default selectedSlice.reducer