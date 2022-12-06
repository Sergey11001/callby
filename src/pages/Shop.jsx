import {Link} from "react-router-dom";
import React from "react";
import CategoriesShop from "../components/Shop/CategoriesShop";
import FilterShop from "../components/Shop/FilterShop";
import ShopList from "../components/Shop/ShopList";
import ShopMainCategory from "../components/Shop/ShopMainCategory";
const Shop = () => {

    return(
        <>
            <div className="shop__page">
                <div className="shop--list">
                    <CategoriesShop />
                    <ShopMainCategory />
                    {/*<FilterShop />*/}
                    {/*<ShopList />*/}
                    {/*<button className="shop--list__more--btn">*/}
                    {/*    Смотреть больше*/}
                    {/*</button>*/}
                    <div className="hard_decision bottom_cluster">
                        <div className="title cluster_title">
                            Не смогли найти товар?
                        </div>
                        <div className="subtitle cluster_subtitle">
                            Задайте нам вопрос в чат поддержки
                        </div>
                        <Link to="/contacts/support" className="support_btn btn ">Поддержка</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Shop