import {Link} from "react-router-dom";


const Footer=()=>{
    return(
        <footer className="footer">
            <div className="footer_container">
                <nav className="footer_nav">
                    <div className="footer_image">
                        <img src="/img/footer/footer.png" alt="" className="footer_img"/>
                    </div>
                    <ul className="footer_column">
                        <li className="footer_column_title">
                            Меню
                        </li>
                        <li className="footer_item">
                            <Link to="/tariffs" className="footer_link">Тарифы</Link>
                        </li>
                        <li className="footer_item">
                            <Link to="/learning" className="footer_link">Обучение</Link>
                        </li>
                        <li className="footer_item">
                            <Link to="/shop" className="footer_link">Магазин</Link>
                        </li>
                        <li className="footer_item">
                            <Link to="/contacts" className="footer_link">Контакты</Link>
                        </li>
                    </ul>
                    <ul className="footer_column">
                        <li className="footer_column_title">
                            Контакты
                        </li>
                        <li className="footer_item">
                            <img src="/img/footer/1.svg" alt="" className="footer_link_img"/>
                            <a href="#" className="footer_link">8 (999) 423-28-14</a>
                        </li>
                        <li className="footer_item">
                            <img src="/img/footer/2.svg" alt="" className="footer_link_img"/>
                            <a href="#" className="footer_link">efircalbe@gmail.com</a>
                        </li>
                    </ul>
                    <ul className="footer_column">
                        <li className="footer_column_title">
                            Компания
                        </li>
                        <li className="footer_item">
                            <Link to="/about" className="footer_link">О нас</Link>
                        </li>
                        <li className="footer_item">
                            <Link to="/vacations" className="footer_link">Вакансии</Link>
                        </li>
                        <li className="footer_item">
                            <Link to="/team" className="footer_link">Команда</Link>
                        </li>
                        <li className="footer_item">
                            <Link to="/protocol" className="footer_link">Протокол</Link>
                        </li>
                        <li className="footer_item">
                            <Link to="/contacts/support" className="footer_link">Служба поддержки</Link>
                        </li>
                    </ul>
                    <ul className="footer_column social_column">
                        <a href="#" className="social_item common_background">
                            <img src="/img/social/telegram.svg" alt="" className="social_img"/>
                        </a>
                        <a href="#" className="social_item common_background">
                            <img src="/img/social/facebook.svg" alt="" className="social_img"/>
                        </a>
                        <a href="#" className="social_item common_background">
                            <img src="/img/social/twitter.svg" alt="" className="social_img"/>
                        </a>
                    </ul>
                </nav>
                <div className="sub_footer">
                    <div className="company_name">
                        ООО “КОЛЛБИ”
                    </div>
                    <div className="country">
                        <img src="/img/footer/flag.svg" alt="" className="flag_img"/>
                        Рус
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer