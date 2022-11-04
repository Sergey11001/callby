import SelectorContacts from "../components/SelectorContacts";


const Contacts=()=>{
    return(
        <>
            <div className="contacts_page">
                <div className="title_page contacts_title_page">
                    <div className="title contacts_title">
                        Свяжитесь с нами!
                    </div>
                    <div className="sub_title contacts_subtitle">
                        Отправьте нам свое письмо!
                    </div>
                </div>
                <div className="contacts_wrapper">
                    <div className="form_block">
                        <form action="#" className="contact_form">
                            <div className="inputs_block_wrapper">
                                <input type="text" className="contact_input" placeholder="Полное имя"/>
                                <input type="text" className="contact_input" placeholder="E-mail"/>
                            </div>
                            <div className="inputs_block_wrapper">
                                <SelectorContacts />
                                <input type="text" className="contact_input" placeholder="Номер телефона"/>
                            </div>
                            <div className="inputs_block_wrapper">
                                <textarea className="textarea_contact" placeholder="Сообщение"></textarea>
                            </div>
                            <div className="btn_wrapper btn_wrapper_contacts">
                                <button className="contact_btn btn">Отправить</button>
                            </div>
                        </form>
                    </div>
                    <div className="contact_inf_block">
                        <div className="contact_inf_content">
                            <div className="inform_block">
                                <div className="inform_title">
                                    Позвоните нам
                                </div>
                                <div className="inform_description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                </div>
                                <a href="#" className="contact_information">
                                    <div className="contact_inf_image_column">
                                        <div className="inf_image_wrapper">
                                            <img src="/img/contacts/1.svg" alt="" className="inf_img"/>
                                        </div>
                                    </div>
                                    <div className="contact_contacts">
                                        8 (999) 423-28-14
                                    </div>
                                </a>
                            </div>
                            <div className="inform_block">
                                <div className="inform_title">
                                    Посетите нас
                                </div>
                                <div className="inform_description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                </div>
                                <a href="#" className="contact_information">
                                    <div className="contact_inf_image_column">
                                        <div className="inf_image_wrapper">
                                            <img src="/img/contacts/2.svg" alt="" className="inf_img"/>
                                        </div>
                                    </div>
                                    <div className="contact_contacts">
                                        г.Иркутск, ул.Павлова 133, офис 201
                                    </div>
                                </a>
                            </div>
                            <div className="inform_block">
                                <div className="inform_title">
                                    Live чат
                                </div>
                                <div className="inform_description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                </div>
                                <a href="#" className="contact_information">
                                    <div className="contact_inf_image_column">
                                        <div className="inf_image_wrapper">
                                            <img src="/img/contacts/3.svg" alt="" className="inf_img"/>
                                        </div>
                                    </div>
                                    <div className="contact_contacts">
                                        Начать чат
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.6212153510714!2d104.32693671574813!3d52.304729179774014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5da83ae19a33240d%3A0x83d7d263ca9b7777!2z0YPQuy4g0JDQutCw0LTQtdC80LjQutCwINCf0LDQstC70L7QstCwLCAxMzMsINCY0YDQutGD0YLRgdC6LCDQmNGA0LrRg9GC0YHQutCw0Y8g0L7QsdC7LiwgNjY0MDQ0!5e0!3m2!1sru!2sru!4v1667317679024!5m2!1sru!2sru"
                        allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade" className="google_map"></iframe>
                </div>
            </div>
        </>
    )
}
export default Contacts