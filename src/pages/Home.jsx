import React from "react";
import AdvantagesBlocks from "../components/AdvantagesBlocks";
import TariffBlocksShort from "../components/TariffBlocksShort";

const Home=()=>{

    return(
        <>
            <section className="union">
                <div className="content_column">
                    <div className="union_content">
                        <div className="union_title">
                            Соединяем миры и пространство
                        </div>
                        <div className="subtitle union_subtitle">
                            Присоединяйся и ощути абсолютно новые эмоции от общения!
                        </div>
                        <div className="union_input_wrapper input_wrapper">
                            <input type="email" className="union_input mail_input" placeholder='example@mail.ru'/>
                            <button className="union_btn input_btn btn">Начать!</button>
                        </div>
                    </div>
                </div>
                <div className="image_column">
                    <div className="phone_block">
                        <div className="phone_img_wrapper">
                            <div className="phone_image">
                                <img src="/img/phone1.png" alt="" className="phone_img"/>
                            </div>
                        </div>
                        <div className="phone_name">
                            <div className="name">Анна Вакуленко</div>
                            <div className="phone_ended">Звонок завершен</div>
                        </div>
                        <div className="date">06.07.2022</div>
                    </div>
                    <div className="person_list">
                        <div className="person_image">
                            <img src="/img/phone2.png" alt="" className="person_img"/>
                        </div>
                        <div className="person_image">
                            <img src="/img/phone3.png" alt="" className="person_img"/>
                        </div>
                        <div className="person_image">
                            <img src="/img/phone1.png" alt="" className="person_img"/>
                        </div>
                        <div className="person_image empty_blue_block">
                            +2
                        </div>
                    </div>

                    <div className="tool_block">
                        <div className="tool_header">
                            <div className="green_block"></div>
                            <div className="red_block"></div>
                            <div className="points">
                                <span></span>
                            </div>
                        </div>
                        <div className="tool_title">
                            Задача
                        </div>
                        <div className="tool_descript">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </div>
                        <div className="tool_footer">
                            <div className="tool_images">
                                <div className="tool_image">
                                    <img src="/img/phone1.png" alt="" className="tool_img"/>
                                </div>
                                <div className="tool_image">
                                    <img src="/img/phone3.png" alt="" className="tool_img"/>
                                </div>
                            </div>
                            <div className="tool_data">
                                <div className="tool_data_image">
                                    <img src="/img/chat.svg" alt="" className="tool_data_img"/>
                                </div>
                                <div className="data_col">15</div>
                            </div>
                            <div className="tool_data">
                            <div className="tool_data_image">
                                <img src="/img/clip.svg" alt="" className="tool_data_img"/>
                            </div>
                            <div className="data_col">3</div>
                        </div>

                        </div>
                    </div>


                    <div className="big_circular">

                    </div>
                    <div className="union_image_wrapper">
                        <div className="union_image">
                            <img src="/img/hands.png" alt="hands" className="union_img"/>
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
                    <a href="#">
                        Подробнее
                        <img src="/img/arrow.svg" alt="" className="section_arrow"/>
                    </a>
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
                    <a href="#">
                        Подробнее
                        <img src="/img/arrow.svg" alt="" className="section_arrow"/>
                    </a>
                </div>
            </section>
            <section className="join">
                <div className="title join_title">
                    Присоединяйтесь!
                </div>
                <div className="subtitle join_subtitle">
                    Откройте для себя новое рабочее пространство!
                </div>
                <div className="join_input_wrapper input_wrapper">
                    <input type="email" className="join_input mail_input" placeholder='example@mail.ru'/>
                    <button className="join_btn input_btn btn">Начать!</button>
                </div>
            </section>
        </>
    )
}

export default Home