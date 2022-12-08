
import sticker1 from "../../assets/billbordbg/1.png"
import sticker2 from "../../assets/billbordbg/2.png"
import sticker3 from "../../assets/billbordbg/3.png"
import sticker4 from "../../assets/billbordbg/4.png"
import sticker5 from "../../assets/billbordbg/5.png"
import sticker6 from "../../assets/billbordbg/6.png"
import sticker7 from "../../assets/billbordbg/7.png"

const Billboard = () => {
    return (
        <>
            <div className="board--body common_background">
                <div className="board--body--window">
                    <div className="board--body__carousel">
                        <div className="board--body__content--wrapper">
                            <div className="board--body__content">
                                <div className="board--body__title">
                                    Сделай первую покупку и получи 20% на следующую
                                </div>
                                <button className="board--body__btn">
                                    Начать покупки
                                </button>
                            </div>
                            <img src={sticker1} alt="" className="sticker sticker1"/>
                            <img src={sticker2} alt="" className="sticker sticker2"/>
                            <img src={sticker3} alt="" className="sticker sticker3"/>
                            <img src={sticker4} alt="" className="sticker sticker4"/>
                            <img src={sticker5} alt="" className="sticker sticker5"/>
                            <img src={sticker6} alt="" className="sticker sticker6"/>
                            <img src={sticker7} alt="" className="sticker sticker7"/>
                        </div>
                    </div>
                    <div className="board--body__dots">
                        <div className="dot dot_active"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Billboard