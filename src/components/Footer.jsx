import {Link} from "react-router-dom";

import footerImg from "../assets/footer/footer.png"
import facebook from "../assets/social/facebook.svg"
import telegram from "../assets/social/telegram.svg"
import twitter from "../assets/social/twitter.svg"
import flag from "../assets/footer/flag.svg"
import menuImg1 from '../assets/footer/1.svg'
import menuImg2 from '../assets/footer/2.svg'

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer_container">
                <nav className="footer_nav">
                    <div className="footer_image">
                        <img src={footerImg} alt="" className="footer_img"/>
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
                            <img src={menuImg1} alt="" className="footer_link_img"/>
                            <a href="#" className="footer_link">8 (999) 423-28-14</a>
                        </li>
                        <li className="footer_item">
                            <img src={menuImg2} alt="" className="footer_link_img"/>
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
                            <img src={telegram} alt="" className="social_img"/>
                        </a>
                        <a href="#" className="social_item common_background">
                            <img src={facebook} alt="" className="social_img"/>
                        </a>
                        <a href="#" className="social_item common_background">
                            <img src={twitter} alt="" className="social_img"/>
                        </a>
                    </ul>
                </nav>
                <div className="sub_footer">
                    <div className="company_name">
                        ООО “КОЛЛБИ”
                    </div>
                    <div className="country">
                        <img src={flag} alt="" className="flag_img"/>
                        Рус
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer