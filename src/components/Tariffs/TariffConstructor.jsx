import BlockTariff from "./BlockTariff";
import Selector from "./SelectorTariffs";
import {useSelector} from "react-redux";
import {useMemo} from "react";

import {motion} from "framer-motion";

const TariffConstructor=()=>{
    const {selectedItems}=useSelector(state => state.selected)
    const price=useMemo(() => selectedItems.reduce((sum,cur)=>sum+cur.price,0),[selectedItems] )
    return(
        <>
            <div className="constructor_switched">
                <motion.div className="generation_sub_column" initial={{x:-100}} animate={{x:0}} transition={{ duration:0.3 }}>
                    <div className="generation_sub common_background">
                        <div className="constructor_title generation_title">
                            Собери свою подписку 🎓
                        </div>
                        <div className="generation_descript">
                            С помощью данной уникальной возможности, вы сможете собрать все нужные функции для пользования приложением. Просто выберите нужные вам пункты и наслаждайтесь работой. Ощутите свободу в простых действиях.                        </div>
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
                </motion.div>
                <div className="own_tariff_column">
                    <motion.div className={selectedItems.length ? "own_tariff": "own_tariff inactive_tariff"} initial={{x:100}} animate={{x:0}} transition={{ duration:0.3 }} >
                        <BlockTariff blue price={price} title={'Ваш личный тариф'} descriptionList={!selectedItems.length ? ["Выберите правильный план для вашей работы!"]:selectedItems.map(item=>item.title)} long={selectedItems.length!==0} ownTariff/>
                    </motion.div>
                </div>
            </div>
        </>

    )
}

export default TariffConstructor