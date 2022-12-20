import BlockTariff from "./BlockTariff";

import {tariffBlocksShortList} from "../../constants";


const TariffBlocksShort=()=>{
    return(
        <>
            <div className="tariffs_list">
                {tariffBlocksShortList.map((block,i) =>(
                        <BlockTariff blue={i%2!==0} key={i} {...block} />
                    )
                )}
            </div>

        </>
    )
}

export default TariffBlocksShort