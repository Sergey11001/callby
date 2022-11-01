
import React from "react";
import {Link,NavLink} from "react-router-dom";

const Header=()=>{
    return(
        <header className="header">
            <div className="header_container">
                <NavLink to="/" className="logo">
                    <div className="header_image">
                        <img src="/img/header/logo.png" alt="" className="logo_img"/>
                    </div>
                </NavLink>
                <div className="burger">
                    <span></span>
                </div>
                <nav className="header_menu">
                    <ul className="menu_list">
                        <li className="menu_item">
                            <NavLink to="/tariffs" className="menu_link">Тарифы</NavLink>
                        </li>
                        <li className="menu_item">
                            <NavLink to="/learning" className="menu_link">Обучение</NavLink>
                        </li>
                        <li className="menu_item">
                            <NavLink to="/shop" className="menu_link">Магазин</NavLink>
                        </li>
                        <li className="menu_item">
                            <NavLink to="/contacts" className="menu_link">Контакты</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="reg_menu">
                    <a href="#" className="registration">Регистрация</a>
                    <button className="enter_btn btn">Вход</button>
                </div>
            </div>
        </header>
    )
}

export default Header