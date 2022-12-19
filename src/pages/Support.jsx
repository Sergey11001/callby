import Accordion from "../components/Accordion";
import {useEffect} from "react";
import {motion} from "framer-motion";

import chat from "../assets/supportBlock.png"

const Support = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])
    return(
        <>
            <motion.div className="support_page" initial={{opacity:0}} animate={{opacity:1}} transition={{ duration:0.15 }}>
                <div className="title_page support_title_page">
                    <div className="title support_title">
                        Служба поддержки
                    </div>
                </div>
                <div className="support_content">
                    <div className="questions_column">
                        <div className="questions_column_content">
                            <div className="question_column_title">
                                Часто задаваемые вопросы
                            </div>
                            <div className="question_column_subtitle">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                            </div>
                            <Accordion />
                        </div>
                    </div>
                    <div className="support__chat">
                        <img src={chat} alt=""/>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Support