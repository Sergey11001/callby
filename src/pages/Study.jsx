import {Link} from "react-router-dom";
import React, {useEffect} from "react";
import VideoChoose from "../components/VideoChoose";
import {motion} from "framer-motion";

const Study= () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[])
    return(
        <>
            <motion.div className="study_page" initial={{opacity:0}} animate={{opacity:1}} transition={{ duration:0.15 }}>
                <div className="title_page study_title_page">
                    <div className="title study_title">
                        Обучение!
                    </div>
                    <div className="subtitle study_subtitle">
                        Мы подготовили для Вас несколько видео уроков и инструкцию
                    </div>
                </div>

                <VideoChoose />

                <div className="bottom_cluster_support bottom_cluster">
                    <div className="title cluster_title">
                        Не смогли найти ответ?
                    </div>
                    <div className="subtitle cluster_subtitle">
                        Задайте нам вопрос в чат поддержки
                    </div>
                    <Link to="/contacts/support" className="support_btn btn ">Поддержка</Link>
                </div>

            </motion.div>
        </>
    )
}
export default Study

