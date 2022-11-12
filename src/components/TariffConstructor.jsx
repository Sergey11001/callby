import BlockTariff from "./BlockTariff";
import Selector from "./SelectorTariffs";
import {useSelector} from "react-redux";
import {useMemo} from "react";


const TariffConstructor=()=>{
    const {selectedItems}=useSelector(state => state.selected)
    const price=useMemo(() => selectedItems.reduce((sum,cur)=>sum+cur.price,0),[selectedItems] )
    return(
        <>
            <div className="constructor_switched">
                <div className="generation_sub_column">
                    <div className="generation_sub common_background">
                        <div className="constructor_title generation_title">
                            Собери свою подписку 🎓
                        </div>
                        <div className="generation_descript">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </div>
                        <div className="selector">
                            <Selector />
                        </div>

                        <div className="rules">
                            <div>Правила:</div>
                            <ol className="roles_list">
                                <li className="role_item">Максимальное количество опций - <span>8</span>, минимальное - <span>3</span>;</li>
                                <li className="role_item">Тариф можно изменить в настройках личного кабинета;</li>
                                <li className="role_item">Минимальная стоимость тарифа - 89 рублей;</li>
                                <li className="role_item">Тариф <span>нельзя</span> передавать владельцам других аккаунтов.</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="own_tariff_column">
                    <div className={selectedItems.length ? "own_tariff": "own_tariff inactive_tariff"}>
                        <BlockTariff blue price={price} title={'Ваш личный тариф'} descriptionList={!selectedItems.length ? ["Выберете правильный план для вашей работы!"]:selectedItems.map(item=>item.title)} long={selectedItems.length!==0} ownTariff/>
                    </div>
                </div>
            </div>
        </>

    )
}

export default TariffConstructor