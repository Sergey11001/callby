
import React from "react";
import {useLocation} from "react-router-dom";

import HeaderMain from "./HeaderMain";
import HeaderShop from "./HeaderShop";

const Index=()=>{
    const location=useLocation()

    return location.pathname.match("/shop") ? <HeaderShop /> : <HeaderMain />
}

export default Index