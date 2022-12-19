import {useEffect} from "react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import teamPhoto1 from "../assets/aboutUs/1.png"
import teamPhoto2 from "../assets/aboutUs/2.png"

const AboutUs = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

    return(
        <>
            <motion.div className="about_page" initial={{opacity:0}} animate={{opacity:1}} transition={{ duration:0.15 }}>
                <div className="title_page about_title_page">
                    Что на счет нас?
                </div>
                <div className="subtitle about_sub_title">
                    Узнайте о нас побольше
                </div>
                <div className="about_page_content">
                    <div className="about_story common_background">
                        <div className="story_body">
                            <div className="story_body__title">
                                Мы активная команда ЭФИРЪ стараемся внедрить что-то новое на рынок IT технологий. Мы занимаемся совершенно новым и прогрессивным видеокоммуникационным сервисом под названием ЭФИРЪ
                            </div>
                            <div className="story_body__description">
                                <p>В один день мы поняли что почти все приложения стали однотипные и нету новых нетрадиционных решений которые могли бы открыть глаза всем пользователям интернета. И мы решили что нужно дать тот самый новый глоток воздуха и перевернуть устоявшиеся рамки в общении. Наше инновационное детище позволит сменить вектор традиционных приложений для общения</p>
                                <p>Наша команда подходит с новым взглядом каков должен быть сервис видеосвязи. А также мы смотрим в будущее и стараемся понять, чем люди будут/хотят пользоваться через пару лет.</p>
                            </div>
                            <Link to="/team" className="btn btn--team">
                                Перейти к команде
                            </Link>
                            <div className="story_body__img--wrapper story_body__img--wrapper_first">
                                <img src={teamPhoto1} alt=""/>
                            </div>
                            <div className="story_body__img--wrapper story_body__img--wrapper_second">
                                <img src={teamPhoto2} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
export default AboutUs