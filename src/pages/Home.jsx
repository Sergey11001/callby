import React, {useRef} from "react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

import AdvantagesBlocks from "../components/AdvantagesBlocks";
import TariffBlocksShort from "../components/Tariffs/TariffBlocksShort";
import PhoneRing from "../styleComponents/PhoneRing";
import PersonListOverlay from "../styleComponents/PersonListOverlay";
import MusicPlay from "../styleComponents/MusicPlay";
import Tools from "../styleComponents/Tools";
import TeamList from "../components/TeamList";
import {listPersonHomePage} from "../constants";

import hands from "../assets/small_img/hands.svg"
import arrow from "../assets/small_img/arrow.svg"

const leftSideAnimation = {
    hidden:{
        x:-100,
        opacity:0
    },
    visible: (custom=0) => ({
            x:0,
            opacity: 1,
            transition:{delay:custom*0.1}
        }
    )
}

const imgAnimation = {
    hidden:{
        x:100,
        opacity:0
    },
    visible: {
        x:0,
        opacity: 1,
        transition:{duration: 0.4}
    }
}

const btnAnimation = {
    hidden:{
        y:80,
        opacity:0
    },
    visible: {
        y:0,
        opacity: 1,
        transition: {duration:0.4}
    }
}

const Home = () => {
    const refDraggable = useRef(null)
    return(
        <>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{ duration:0.15 }}>
                <motion.section className="union"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{amount:0.2, once:true}}
                >
                    <div className="content_column">
                        <div className="union_content">
                            <motion.div variants={leftSideAnimation} className="union_title title">
                                Соединяем миры и пространство
                            </motion.div>
                            <motion.div custom={0.5} variants={leftSideAnimation} className="subtitle union_subtitle">
                                Присоединяйся и ощути абсолютно новые эмоции от общения!
                            </motion.div>
                            <motion.div variants={btnAnimation}  className="wrapper_input">
                                <input type="email" className="union_input mail_input" placeholder='example@mail.ru'/>
                                <div className="btn_wrapper btn_wrapper_mail">
                                    <button className="union_btn input_btn  btn">Начать!</button>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                    <motion.div variants={imgAnimation} className="image_column" ref={refDraggable}>
                        <PhoneRing parentRef={refDraggable}/>
                        <PersonListOverlay parentRef={refDraggable}/>
                        <MusicPlay parentRef={refDraggable}/>
                        <Tools parentRef={refDraggable}/>
                        <div className="big_circular">

                        </div>
                        <div className="union_image_wrapper">
                            <div className="union_image">
                                <img src={hands} alt="hands" className="union_img"/>
                            </div>
                        </div>
                    </motion.div>
                </motion.section>
                <AdvantagesBlocks/>
                <section className="tariff">
                    <div className="section_title">
                        <div>
                            <div className="title tariff_title">
                                Тарифный план
                            </div>
                            <div className="subtitle tariff_subtitle">
                                Выберите правильный план для вашей работы!
                            </div>
                        </div>
                        <Link to="/tariffs" className="more">
                            Подробнее
                            <img src={arrow} alt="" className="section_arrow"/>
                        </Link>
                    </div>
                       <TariffBlocksShort />
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
            </motion.div>
        </>
    )
}

export default Home