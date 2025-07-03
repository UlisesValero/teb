import { useEffect, useState } from "react"
import { MdModeOfTravel } from "react-icons/md"
import { LuMilestone } from "react-icons/lu"
import { MdCalendarToday } from "react-icons/md"




const AnimatedNumber = ({ value, duration = 3000 }) => {
    const [displayValue, setDisplayValue] = useState(0)

    useEffect(() => {
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

        requestAnimationFrame(animate);
    }, [value, duration])

    return (
        <div className="text-4xl font-h3 font-bold text-white">
            {displayValue.toLocaleString()}
        </div>
    )
}

export default function AnimatedNumbers() {
    return (
        <div className="bg-dblue py-20 lg:py-30 flex justify-center">
            <div className="w-fit flex flex-col lg:flex-row items-center gap-20 lg:gap-50">
                {/* Viajes realizados */}
                <div className="flex flex-col gap-2 items-center">
                    <div className="flex flex-col items-center">
                        <MdModeOfTravel size={45} className="text-gold mb-2" />
                        <AnimatedNumber value={1000} duration={3200} />
                    </div>
                    <h1 className="text-center text-lblue font-h3 text-xl">Viajes realizados</h1>
                </div>

                {/* KM recorridos */}
                <div className="flex flex-col gap-2 items-center">
                    <div className="flex flex-col items-center">
                        <LuMilestone size={45} className="text-gold mb-2" />
                        <div className="flex items-center gap-1">
                            <AnimatedNumber value={50000} duration={3200} />
                            <h1 className="text-white font-h3 text-xl">KM</h1>
                        </div>
                    </div>
                    <h1 className="text-center text-lblue font-h3 text-xl">Recorridos</h1>
                </div>

                {/* Años de experiencia */}
                <div className="flex flex-col gap-2 items-center">
                    <div className="flex flex-col items-center">
                        <MdCalendarToday size={45} className="text-gold mb-2" />
                        <AnimatedNumber value={1995} duration={3200} />
                    </div>
                    <h1 className="text-center text-lblue font-h3 text-xl">35 años de experiencia</h1>
                </div>
            </div>
        </div>
    )
}
