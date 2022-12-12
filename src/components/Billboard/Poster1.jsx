import sticker1 from "../../assets/billbordbg/1.svg";
import sticker2 from "../../assets/billbordbg/2.svg";
import sticker3 from "../../assets/billbordbg/3.svg";
import sticker4 from "../../assets/billbordbg/4.svg";
import sticker5 from "../../assets/billbordbg/5.svg";
import sticker6 from "../../assets/billbordbg/6.svg";
import sticker7 from "../../assets/billbordbg/7.svg";


const Poster1 = () => {
    return (
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
    )
}
export default Poster1