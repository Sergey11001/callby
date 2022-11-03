import React, {useRef, useState} from "react";
import AdvantagesBlocks from "../components/AdvantagesBlocks";
import TariffBlocksShort from "../components/TariffBlocksShort";
import PersonPortret from "../components/PersonPortret";
import {Link} from "react-router-dom";


const arr_person=[
    {imgUrl:"/img/profile_photo/1.png",name:`Владимир`,surname:"Житов",job:"CЕO"},
    {imgUrl:"/img/profile_photo/2.png",name:"Евгения",surname:"Житов",job:"Founder/CVO"},
    {imgUrl:"/img/profile_photo/3.png",name:"Владимир",surname:"Отставная",job:"Founder/CMO"},
    {imgUrl:"/img/profile_photo/4.png",name:"Владимир",surname:"Житов",job:"Founder/ Art-director"},
    {imgUrl:"/img/profile_photo/5.png",name:"Мария",surname:"Захарова",job:"Graphic Designer"}
]
const Home=()=>{
    const [activePerson,setActivePerson]=useState(0)

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
                        <div className="wrapper_input">
                            <input type="email" className="union_input mail_input" placeholder='example@mail.ru'/>
                            <div className="btn_wrapper btn_wrapper_mail">
                                <button className="union_btn input_btn  btn">Начать!</button>
                            </div>
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
                                    <img src="/img/small_img/chat.svg" alt="" className="tool_data_img"/>
                                </div>
                                <div className="data_col">15</div>
                            </div>
                            <div className="tool_data">
                            <div className="tool_data_image">
                                <img src="/img/small_img/clip.svg" alt="" className="tool_data_img"/>
                            </div>
                            <div className="data_col">3</div>
                        </div>

                        </div>
                    </div>
                    <div className="big_circular">

                    </div>
                    <div className="union_image_wrapper">
                        <div className="union_image">
                            <img src="/img/small_img/hands.png" alt="hands" className="union_img"/>
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
                        <img src="/img/small_img/arrow.svg" alt="" className="section_arrow"/>
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
                    <Link to="/team">
                        Подробнее
                        <img src="/img/small_img/arrow.svg" alt="" className="section_arrow"/>
                    </Link>
                </div>
                <div className="team_list">
                    {arr_person.map((item,i)=>
                         <PersonPortret key={i} {...item} setActivePerson={setActivePerson} activePerson={activePerson} index={i} />
                    )}
                </div>
            </section>

            <section className="join">
                <div className="title join_title">
                    Присоединяйтесь!
                </div>
                <div className="subtitle join_subtitle">
                    Откройте для себя новое рабочее пространство!
                </div>
                <div className="wrapper_input join_input_wrapper">
                    <input type="email" className="join_input mail_input" placeholder='example@mail.ru'/>
                    <div className="btn_wrapper btn_wrapper_mail">
                        <button className="join_btn input_btn  btn">Начать!</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home