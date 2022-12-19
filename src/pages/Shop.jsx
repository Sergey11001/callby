import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";

import CategoriesShop from "../components/Shop/CategoriesShop";
import FilterShop from "../components/Shop/FilterShop";
import ShopList from "../components/Shop/ShopList";
import ShopMainCategory from "../components/Shop/ShopMainCategory";
import Billboard from "../components/Billboard/Billboard";


const categoryList =[
    {id:1, title:"Главная", titleImg:"✨"},
    {id:2, title:"Стикеры", titleImg:"🌚"},
    {id:3, title:"Темы", titleImg:"🌈"},
    {id:4, title:"Звуки", titleImg:"⚡"},
    {id:5, title:"Наборы", titleImg:"🌟"},
]

const Shop = () => {
    const [activeCategoryId,setActiveCategoryId] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
    },[activeCategoryId])
    return(
        <>
            <motion.div className="shop__page" initial={{opacity:0}} animate={{opacity:1}} transition={{ duration:0.15 }}>
                <div className="shop--list">
                    {
                        activeCategoryId===1 ?
                            <Billboard /> :
                            <></>
                    }
                    <CategoriesShop categoryList={categoryList} activeCategoryId={activeCategoryId} setActiveCategoryId={setActiveCategoryId}/>
                    {
                        activeCategoryId===1 ?
                            <ShopMainCategory setActiveCategoryId={setActiveCategoryId} />
                            :
                            <>
                                <FilterShop />
                                <ShopList />
                                <button className="shop--list__more--btn">
                                    Смотреть больше
                                </button>
                            </>
                    }
                    <div className="bottom_cluster_support bottom_cluster">
                        <div className="title cluster_title">
                            Не смогли найти товар?
                        </div>
                        <div className="subtitle cluster_subtitle">
                            Задайте нам вопрос в чат поддержки
                        </div>
                        <Link to="/contacts/support" className="support_btn btn ">Поддержка</Link>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
export default Shop