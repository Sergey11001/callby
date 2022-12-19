import BlockTariff from "./BlockTariff";
import {motion} from "framer-motion";

import {tariffBlocksShortList} from "../../constants";


const TariffBlocksShort=()=>{
    return(
        <>
            <motion.div className="tariffs_list"
                        initial={{ x:-100}}
                        whileInView={{ x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration:0.7}}
            >
                {tariffBlocksShortList.map((block,i) =>(
                        <BlockTariff blue={i%2!==0} key={i} {...block} />
                    )
                )}
            </motion.div>

        </>
    )
}

export default TariffBlocksShort