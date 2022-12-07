import BlockTariff from "./BlockTariff";

import {tariffBlocksShortList} from "../../constants";

const TariffBlocksShort=()=>{
    return(
        <>
            {tariffBlocksShortList.map((block,i) =>
                <BlockTariff blue={i%2!==0} key={i} {...block} />
            )}
        </>
    )
}

export default TariffBlocksShort