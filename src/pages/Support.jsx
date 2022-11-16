import Accordion from "../components/Accordion";
import {useEffect} from "react";


const Support=()=>{

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])
    return(
        <>
            <div className="support_page">
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
                </div>
            </div>
        </>
    )
}

export default Support