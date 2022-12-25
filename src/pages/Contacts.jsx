import SelectorContacts from "../components/SelectorContacts";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";

import contact1 from "../assets/contacts/1.svg"
import contact2 from "../assets/contacts/2.svg"
import contact3 from "../assets/contacts/3.svg"

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        x:0,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const item = {
    hidden: { opacity: 0, x:100 },
    show: { opacity: 1, x:0 }
}

const Contacts = () => {
    const blurFromInput = (e) =>{
        if(e.target.value.trim()!==""){
            e.target.classList.add("filled_input")
        }
        else{
            e.target.classList.remove("filled_input")
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])
    return(
        <>
            <motion.div className="contacts_page" initial={{opacity:0}} animate={{opacity:1}} transition={{ duration:0.15 }}>
                <motion.div className="title_page contacts_title_page" initial={{x:-100}} animate={{x:0}} transition={{ duration:0.2 }}>
                    <div className="title contacts_title">
                        Свяжитесь с нами!
                    </div>
                    <div className="sub_title contacts_subtitle">
                        Отправьте нам свое письмо
                    </div>
                </motion.div>
                <div className="contacts_wrapper">
                    <motion.div className="form_block"  initial={{x:-100}} animate={{x:0}} transition={{ duration:0.6 }}>
                        <form action="#" className="contact_form" >
                            <div className="inputs_block_wrapper">
                                <input type="text" className="contact_input common_background" placeholder="Имя" onBlur={(e)=>blurFromInput(e)}/>
                                <input type="text" className="contact_input common_background" placeholder="E-mail" onBlur={(e)=>blurFromInput(e)}/>
                            </div>
                            <div className="inputs_block_wrapper">
                                <SelectorContacts />
                                <input type="text" className="contact_input common_background" placeholder="Номер телефона" onBlur={(e)=>blurFromInput(e)}/>
                            </div>
                            <div className="inputs_block_wrapper">
                                <textarea className="textarea_contact common_background" placeholder="Сообщение" onBlur={(e)=>blurFromInput(e)}></textarea>
                            </div>
                            <div className="btn_wrapper btn_wrapper_contacts">
                                <button className="contact_btn btn">Отправить</button>
                            </div>
                        </form>
                    </motion.div>
                    <div className="contact_inf_block">
                        <motion.div className="contact_inf_content"
                                    variants={container}
                                    initial="hidden"
                                    animate="show"
                        >
                            <motion.div className="inform_block" variants={item} >
                                <div className="inform_title">
                                    Позвоните нам
                                </div>
                                <div className="inform_description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                </div>
                                <a href="#" className="contact_information">
                                    <div className="contact_inf_image_column">
                                        <div className="inf_image_wrapper">
                                            <img src={contact1} alt="" className="inf_img"/>
                                        </div>
                                    </div>
                                    <div className="contact_contacts">
                                        8 (999) 423-28-14
                                    </div>
                                </a>
                            </motion.div>
                            <motion.div className="inform_block" variants={item}>
                                <div className="inform_title">
                                    Посетите нас
                                </div>
                                <div className="inform_description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                </div>
                                <a href="#" className="contact_information">
                                    <div className="contact_inf_image_column">
                                        <div className="inf_image_wrapper">
                                            <img src={contact2} alt="" className="inf_img"/>
                                        </div>
                                    </div>
                                    <div className="contact_contacts">
                                        г.Иркутск, ул.Павлова 133, офис 201
                                    </div>
                                </a>
                            </motion.div>
                            <motion.div className="inform_block" variants={item}>
                                <div className="inform_title">
                                    Live чат
                                </div>
                                <div className="inform_description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                </div>
                                <Link to="support" className="contact_information">
                                    <div className="contact_inf_image_column">
                                        <div className="inf_image_wrapper">
                                            <img src={contact3} alt="" className="inf_img"/>
                                        </div>
                                    </div>
                                    <div className="contact_contacts">
                                        Начать чат
                                    </div>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.6212153510714!2d104.32693671574813!3d52.304729179774014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5da83ae19a33240d%3A0x83d7d263ca9b7777!2z0YPQuy4g0JDQutCw0LTQtdC80LjQutCwINCf0LDQstC70L7QstCwLCAxMzMsINCY0YDQutGD0YLRgdC6LCDQmNGA0LrRg9GC0YHQutCw0Y8g0L7QsdC7LiwgNjY0MDQ0!5e0!3m2!1sru!2sru!4v1667317679024!5m2!1sru!2sru"
                        allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade" className="google_map"></iframe>
                </div>
            </motion.div>
        </>
    )
}
export default Contacts