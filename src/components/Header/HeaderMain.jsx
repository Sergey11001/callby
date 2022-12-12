import {NavLink} from "react-router-dom";
import logo from "../../assets/header/logo.png";
import React, {useEffect, useRef} from "react";


const HeaderMain = ({activeBurger, setActiveBurger}) => {

    const burger=useRef(null)
    const menu=useRef(null)
    useEffect(()=>{
        const handleClickOutMenu=(e)=>{
            if(!e.composedPath().includes(menu.current) && !e.composedPath().includes(burger.current)){
                setActiveBurger(false)
            }
        }
        document.body.addEventListener("click",handleClickOutMenu)
        return ()=>document.body.removeEventListener("click",handleClickOutMenu)
    },[])

    useEffect(()=>{
        activeBurger ? document.body.classList.add('noscroll') : document.body.classList.remove("noscroll")
        return () => document.body.classList.remove("noscroll")
    },[activeBurger])

    return(
        <header className="header">
            <div className="header_container">
                <NavLink to="/" className="logo">
                    <div className="header_image">
                        <img src={logo} alt="" className="logo_img"/>
                    </div>
                </NavLink>
                <div ref={burger} className={activeBurger ? "burger active_burger" : "burger "} onClick={()=>setActiveBurger(!activeBurger)}>
                    <span></span>
                </div>
                <nav ref={menu} className={activeBurger ? "header_menu active_menu":"header_menu"}>
                    <ul className="menu_list">
                        <li className="menu_item">
                            <NavLink to="/tariffs" className="menu_link" onClick={()=>setActiveBurger(false)}>Тарифы</NavLink>
                        </li>
                        <li className="menu_item">
                            <NavLink to="/learning" className="menu_link" onClick={()=>setActiveBurger(false)}>Обучение</NavLink>
                        </li>
                        <li className="menu_item">
                            <NavLink to="/team" className="menu_link" onClick={()=>setActiveBurger(false)}>Наша Команда</NavLink>
                        </li>
                        <li className="menu_item">
                            <NavLink to="/shop" className="menu_link" onClick={()=>setActiveBurger(false)}>Магазин</NavLink>
                        </li>
                        <li className="menu_item">
                            <NavLink to="/contacts" className="menu_link" onClick={()=>setActiveBurger(false)}>Контакты</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="reg_menu">
                    <NavLink to="/registration" className="registration">Регистрация</NavLink>
                    <div className="btn_wrapper">
                        <button className="enter_btn btn">Вход</button>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default HeaderMain