

const Header=()=>{
    return(
        <header className="header">
            <div className="header_container">
                <div className="logo">
                    <div className="header_image">
                        <img src="/img/header/logo.png" alt="" className="logo_img"/>
                    </div>
                </div>
                <div className="burger">
                    <span></span>
                </div>
                <nav className="header_menu">
                    <ul className="menu_list">
                        <li className="menu_item">
                            <a href="#" className="menu_link">Тарифы</a>
                        </li>
                        <li className="menu_item">
                            <a href="#" className="menu_link">Обучение</a>
                        </li>
                        <li className="menu_item">
                            <a href="#" className="menu_link">Магазин</a>
                        </li>
                        <li className="menu_item">
                            <a href="#" className="menu_link">Контакты</a>
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