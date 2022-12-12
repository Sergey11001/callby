import React from "react";
import AdvantagesBlocks from "../components/AdvantagesBlocks";
import TariffBlocksShort from "../components/Tariffs/TariffBlocksShort";
import {Link} from "react-router-dom";
import PhoneRing from "../styleComponents/PhoneRing";
import PersonListOverlay from "../styleComponents/PersonListOverlay";
import MusicPlay from "../styleComponents/MusicPlay";
import Tools from "../styleComponents/Tools";

import TeamList from "../components/TeamList";
import {listPersonHomePage} from "../constants";

import hands from "../assets/small_img/hands.svg"
import arrow from "../assets/small_img/arrow.svg"

const Home = () => {
    return(
        <>
            <section className="union">
                <div className="content_column">
                    <div className="union_content">
                        <div className="union_title title">
                            Соединяем миры и пространство
                        </div>
                        <div className="subtitle union_subtitle">
                            Присоединяйся и ощути абсолютно новые эмоции от общения!
                        </div>
                        <div className="wrapper_input">
                            <input type="email" className="union_input mail_input" placeholder='example@mail.ru'/>
                            <div className="btn_wrapper btn_wrapper_mail">
                                <button className="union_btn input_btn  btn">Начать!</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="image_column">
                    <PhoneRing />
                    <PersonListOverlay />
                    <MusicPlay />
                    <Tools />
                    <div className="big_circular">

                    </div>
                    <div className="union_image_wrapper">
                        <div className="union_image">
                            <img src={hands} alt="hands" className="union_img"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="advantage">
                <AdvantagesBlocks />
            </section>
            <section className="tariff">
                <div className="section_title">
                    <div>
                        <div className="title tariff_title">
                            Тарифный план
                        </div>
                        <div className="subtitle tariff_subtitle">
                            Выберете правильный план для вашей работы!
                        </div>
                    </div>
                    <Link to="/tariffs" className="more">
                        Подробнее
                        <img src={arrow} alt="" className="section_arrow"/>
                    </Link>
                </div>
                <div className="tariffs_list">
                    <TariffBlocksShort />
                </div>
            </section>
            <section className="team">
                <div className="section_title team_title">
                    <div>
                        <div className="title tariff_title">
                            Наша команда
                        </div>
                        <div className="subtitle tariff_subtitle">
                            Мы создаем для вас уникальный продукт!
                        </div>
                    </div>
                    <Link to="/team" className="more">
                        Подробнее
                        <img src={arrow} alt="" className="section_arrow"/>
                    </Link>
                </div>
                <TeamList listPeople={listPersonHomePage} />
            </section>
            <section className="join bottom_cluster">
                <div className="title cluster_title">
                    Присоединяйтесь!
                </div>
                <div className="subtitle cluster_subtitle">
                    Откройте для себя новое рабочее пространство!
                </div>
                <div className="wrapper_input join_input_wrapper">
                    <input type="email" className="join_input mail_input" placeholder='example@mail.ru'/>
                    <div className="btn_wrapper btn_wrapper_mail">
                        <button className="join_btn input_btn  btn">Отправить</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home