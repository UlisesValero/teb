import { useEffect, useState, useRef } from "react"
import { MdModeOfTravel } from "react-icons/md"
import { LuMilestone } from "react-icons/lu"
import { MdCalendarToday } from "react-icons/md"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

const AnimatedNumber = ({ value, duration = 2000 }) => {
    const [displayValue, setDisplayValue] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 0.3, once: true })

    useEffect(() => {
        if (!isInView) return

        let start = 0
        const startTime = performance.now()

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const currentVal = Math.floor(progress * value)
            setDisplayValue(currentVal)

            if (progress < 1) {
                requestAnimationFrame(animate)
            } else {
                setDisplayValue(value)
            }
        }

        requestAnimationFrame(animate)
    }, [isInView, value, duration])

    return (
        <div
            ref={ref}
            className="text-5xl font-h3 font-bold text-white"
        >
            {displayValue.toLocaleString()}
        </div>
    )
}


export default function AnimatedNumbers() {
    return (
        <div className="bg-dblue py-20 lg:py-60  flex justify-center">
            
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="w-fit flex flex-col lg:flex-row items-center gap-20 lg:gap-50"
            >
                <div className="flex flex-col gap-2 items-center">
                    <div className="flex flex-col items-center">
                        <MdModeOfTravel size={70} className="text-gold mb-7" />
                        <AnimatedNumber value={1000} duration={3200} />
                    </div>
                    <h1 className="text-center text-lblue font-h3 text-2xl">Viajes realizados</h1>
                </div>

                <div className="flex flex-col gap-2 items-center">
                    <div className="flex flex-col items-center">
                        <LuMilestone size={70} className="text-gold mb-7" />
                        <div className="flex items-center gap-1">
                            <AnimatedNumber value={50000} duration={3200} />
                            <h1 className="text-white font-h3 text-3xl">KM</h1>
                        </div>
                    </div>
                    <h1 className="text-center text-lblue font-h3 text-2xl">Recorridos</h1>
                </div>

                <div className="flex flex-col gap-2 items-center">
                    <div className="flex flex-col items-center">
                        <MdCalendarToday size={70} className="text-gold mb-7" />
                        <AnimatedNumber value={1995} duration={3200} />
                    </div>
                    <h1 className="text-center text-lblue font-h3 text-2xl">35 años de experiencia</h1>
                </div>
            </motion.div>
            
        </div>
    )
}
