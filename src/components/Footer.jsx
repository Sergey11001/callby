

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
                            <a href="#" className="footer_link">Тарифы</a>
                        </li>
                        <li className="footer_item">
                            <a href="#" className="footer_link">Обучение</a>
                        </li>
                        <li className="footer_item">
                            <a href="#" className="footer_link">Магазин</a>
                        </li>
                        <li className="footer_item">
                            <a href="#" className="footer_link">Контакты</a>
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
                            <a href="#" className="footer_link">О нас</a>
                        </li>
                        <li className="footer_item">
                            <a href="#" className="footer_link">Вакансии</a>
                        </li>
                        <li className="footer_item">
                            <a href="#" className="footer_link">Команда</a>
                        </li>
                        <li className="footer_item">
                            <a href="#" className="footer_link">Протокол</a>
                        </li>
                        <li className="footer_item">
                            <a href="#" className="footer_link">Служба поддержки</a>
                        </li>
                    </ul>
                    <ul className="footer_column social_column">
                        <a href="#" className="social_item">
                            <img src="/img/social/telegram.svg" alt="" className="social_img"/>
                        </a>
                        <a href="#" className="social_item">
                            <img src="/img/social/facebook.svg" alt="" className="social_img"/>
                        </a>
                        <a href="#" className="social_item">
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