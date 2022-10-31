import {configureStore} from "@reduxjs/toolkit";
import selected from "./slices/selectedSlice";
export const store=(
    configureStore({
        reducer:{
            selected
        }
    })
)