import {useEffect} from "react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import teamPhoto1 from "../assets/aboutUs/1.png"
import teamPhoto2 from "../assets/aboutUs/2.png"


const leftSideAnimation = {
    hidden:{
        x:-80,
        opacity:0
    },
    visible: (custom=0)=>({
        x:0,
        opacity: 1,
        transition:{delay:custom*0.1, duration:0.5}
    })
}
const rightSideAnimation = {
    hidden:{
        x:"100%",
        opacity:0
    },
    visible: (custom=0)=>({
        x:0,
        opacity: 1,
        transition:{delay:custom*0.2, duration:0.5}
    })
}


const AboutUs = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

    return(
        <>
            <motion.div className="about_page" initial={{opacity:0}} animate={{opacity:1}} transition={{ duration:0.15 }}>
                <motion.div initial={{y:-50}} animate={{y:0}} transition={{ duration:0.3}}>
                    <div className="title_page about_title_page">
                        Что на счет нас?
                    </div>
                    <div className="subtitle about_sub_title">
                        Узнайте о нас побольше
                    </div>
                </motion.div>

                <div className="about_page_content">
                    <div className="about_story common_background">
                        <motion.div className="story_body"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{amount:0.2, once:true}}
                        >
                            <div>

                            </div>
                            <motion.div className="story_body__title" variants={leftSideAnimation}>
                                Мы активная команда ЭФИРЪ стараемся внедрить что-то новое на рынок IT технологий. Мы занимаемся совершенно новым и прогрессивным видеокоммуникационным сервисом под названием ЭФИРЪ
                            </motion.div>
                            <motion.div className="story_body__description" variants={leftSideAnimation} custom={1}>
                                <p>В один день мы поняли что почти все приложения стали однотипные и нету новых нетрадиционных решений которые могли бы открыть глаза всем пользователям интернета. И мы решили что нужно дать тот самый новый глоток воздуха и перевернуть устоявшиеся рамки в общении. Наше инновационное детище позволит сменить вектор традиционных приложений для общения</p>
                                <p>Наша команда подходит с новым взглядом каков должен быть сервис видеосвязи. А также мы смотрим в будущее и стараемся понять, чем люди будут/хотят пользоваться через пару лет.</p>
                            </motion.div>
                            <Link to="/team" className="btn btn--team">
                                Перейти к команде
                            </Link>
                            <motion.div className="story_body__img--wrapper story_body__img--wrapper_first" variants={rightSideAnimation}>
                                <img src={teamPhoto1} alt=""/>
                            </motion.div>
                            <motion.div className="story_body__img--wrapper story_body__img--wrapper_second" variants={rightSideAnimation} custom={1}>
                                <img src={teamPhoto2} alt=""/>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
export default AboutUs