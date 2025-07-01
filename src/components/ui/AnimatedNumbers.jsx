import { useEffect, useState } from "react";
import { MdModeOfTravel } from "react-icons/md";
import { LuMilestone } from "react-icons/lu";
import { MdCalendarToday } from "react-icons/md";




const AnimatedNumber = ({ value, duration = 3000 }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        let start = 0;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const currentVal = Math.floor(progress * value);
            setDisplayValue(currentVal);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setDisplayValue(value);
            }
        };

        requestAnimationFrame(animate);
    }, [value, duration]);

    return (
        <div className="text-4xl font-h3 font-bold text-lblue">
            {displayValue.toLocaleString()}
        </div>
    );
};

export default function AnimatedNumbers() {
    return (
        <div className="flex items-center justify-center bg-dblue py-30 gap-50">
            <div className="flex flex-col gap-2 ">
                <div className="flex items-end">
                    <MdModeOfTravel size={45} className="text-gold pr-1" />
                    <AnimatedNumber value={1000} duration={3000} />
                </div>
                <h1 className="text-center text-white font-h3 text-xl">Viajes realizados</h1>
            </div>
            
            <div className="flex flex-col gap-2 ">
                <div className="flex items-end">
                    <LuMilestone size={45} className="text-gold pr-1" />
                    <AnimatedNumber value={50000} duration={2500} />
                    <h1 className="text-lblue font-h3 text-xl">KM</h1>
                </div>
                <h1 className="text-center text-white font-h3 text-xl">Recorridos</h1>
            </div>
            
            <div className="flex flex-col gap-2 ">
                <div className="flex items-end">
                    <MdCalendarToday size={43} className="text-gold pr-2" />
                    <AnimatedNumber value={1995} duration={2500} />
                </div>
                <h1 className="text-white font-h3 text-xl">35 años de experiencia</h1>
            </div>
        </div>
    );
}
