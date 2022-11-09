import BlockTariff from "./BlockTariff";


import {tariffBlocksLongList} from "../constants";

const TariffBlocksLong=()=>{
    return(
        <>
            <div className="tariffs_list">
                {tariffBlocksLongList.map((block,i) =>
                    <BlockTariff blue={i%2!==0} long={true} key={i} {...block} />
                )}
            </div>

        </>
    )
}

export default TariffBlocksLong