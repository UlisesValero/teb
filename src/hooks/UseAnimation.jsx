import { motion } from "framer-motion"
import useMediaQuery from "../hooks/useMediaQuery"


const UseAnimation = ({ children }) => {
    const isMdUp = useMediaQuery("(min-width: 768px)")
    const amount = isMdUp ? 0.1 : 0.02
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount}}
            transition={{ duration: 0.6, ease: "easeInOut" }}
        >
            {children}
        </motion.div>
    )
}

export default UseAnimation
