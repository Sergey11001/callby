import BlockTariff from "./BlockTariff";
import {motion} from "framer-motion";

import {tariffBlocksLongList} from "../../constants";

const TariffBlocksLong=()=>{
    return(
        <>
            <motion.div className="tariffs_list"
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration:0.3}}
            >
                {tariffBlocksLongList.map((block,i) =>(
                        <BlockTariff blue={i%2!==0} long={true} key={i} {...block} />
                    )
                )}
            </motion.div>

        </>
    )
}

export default TariffBlocksLong