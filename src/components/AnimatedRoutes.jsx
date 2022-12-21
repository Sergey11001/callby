import {Route, Routes, useLocation} from "react-router-dom";

import {AnimatePresence} from "framer-motion"


import Home from "../pages/Home";
import Tariffs from "../pages/Tariffs";
import Contacts from "../pages/Contacts";
import OurTeam from "../pages/OurTeam";
import AboutUs from "../pages/AboutUs";
import Study from "../pages/Study";
import Shop from "../pages/Shop";
import Support from "../pages/Support";
import Presentation from "./Presentation/Presentation";


const AnimatedRoutes = () => {
    const location=useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home/>}/>
                <Route path="/tariffs" element={<Tariffs/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/team" element={<OurTeam/>}/>
                <Route path="/about" element={<AboutUs/>}/>
                <Route path="/learning" element={<Study/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/presentation" element={<Presentation/>}/>
                <Route path="/contacts/support" element={<Support/>}/>
            </Routes>
        </AnimatePresence>

    )
}
export default AnimatedRoutes