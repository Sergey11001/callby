import {Link} from "react-router-dom";

import footerImg from "../assets/footer/footer.png"

import vk from "../assets/social/vk.svg"
import telegram from "../assets/social/telegram.svg"
import youtube from "../assets/social/y.svg"
import medium from "../assets/social/medium.svg"


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
                            <Link to="/team" className="footer_link">Наша команда</Link>
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
                            <Link to="/contacts/support" className="footer_link">Служба поддержки</Link>
                        </li>
                        <li className="footer_item">
                            <Link to="/agree" className="footer_link">Пользовательские соглашения</Link>
                        </li>
                        <li className="footer_item">
                            <Link to="/privacy" className="footer_link">Политика конфеденциальности</Link>
                        </li>
                    </ul>
                    <ul className="footer_column social_column">
                        <a href="https://t.me/ef_ir1"  target="_blank" className="social_item">
                            <img src={telegram} alt="" className="social_img"/>
                        </a>
                        <a href="https://youtube.com/@ef_ir1"  target="_blank" className="social_item social_youtube">
                            <img src={youtube} alt="" className="social_img"/>
                        </a>
                        <a href="https://vk.com/club217847616"  target="_blank" className="social_item">
                            <img src={vk} alt="" className="social_img"/>
                        </a>
                        <a href="https://medium.com/@ef_ir1"  target="_blank" className="social_item">
                            <img src={medium} alt="" className="social_img"/>
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