import React from "react";
import BlockAdvantage from "./BlockAdvantage";

const advantages_blocks_list=[
    {img:"/img/people_emogi/1.svg",title:"Вся работа в одном месте",description:"Благодаря расширенному функционалу приложения, вся работа происходит в одном месте, и вы больше не будете использовать сторонние программы"},
    {img:"/img/people_emogi/2.svg",title:"Простой в использовани",description:"Интуитивное расположение кнопок через которые вы сможете с полным комфортом пользоваться приложением"},
    {img:"/img/people_emogi/3.svg",title:"Тарифный план",description:"Используйте уже готовый набор функционала или собери свой индивидуально. Получите уникальный тарифный план!"},
]
const AdvantagesBlocks=()=>{

    return(
        <>
            {advantages_blocks_list.map((block,i)=>
                <BlockAdvantage key={i} {...block} />
            )}
        </>
    )
}

export default AdvantagesBlocks