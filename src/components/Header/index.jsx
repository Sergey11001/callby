
import React, {useState} from "react";
import {useLocation} from "react-router-dom";

import HeaderMain from "./HeaderMain";
import HeaderShop from "./HeaderShop";

const Index=()=>{
    const location=useLocation()
    const [activeBurger,setActiveBurger]=useState(false)
    return location.pathname.match("/shop") ? <HeaderShop /> : <HeaderMain activeBurger={activeBurger} setActiveBurger={setActiveBurger}/>
}

export default Index