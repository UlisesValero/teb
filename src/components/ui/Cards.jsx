import { FaBusinessTime, FaBus, FaUserTie } from "react-icons/fa6"
import { AiOutlineSafetyCertificate } from "react-icons/ai"

const cardsContent = [
    {
        title: "Comodidad asegurada",
        text: "En TEB disponemos de una flota moderna y versátil, diseñada para brindar confort en cada trayecto.",
        icon: <FaBus />,
        backText: "Flota equipada y moderna para garantizar confort en todo momento."
    },
    {
        title: "Precisión operativa",
        text: "Implementamos procesos rigurosos que aseguran puntualidad y eficiencia en todos nuestros servicios.",
        icon: <FaBusinessTime />,
        backText: "Puntualidad y eficiencia como pilares de nuestro trabajo."
    },
    {
        title: "Equipo calificado",
        text: "Nuestro personal uniformado refleja el compromiso y la excelencia que definen a TEB.",
        icon: <FaUserTie />,
        backText: "Personal profesional altamente capacitado para cada tarea."
    },
    {
        title: "Seguridad certificada",
        text: "Cumplimos con todas las normativas y protocolos para garantizar un traslado seguro y confiable.",
        icon: <AiOutlineSafetyCertificate />,
        backText: "Certificaciones al día y estrictos protocolos de seguridad."
    }
]

const Cards = () => {
    return (
        <section className="w-full flex flex-col py-40 gap-15 bg-gradient-to-b from-dblue to-dblue2 h-fit">
            <div className="flex flex-wrap justify-center gap-10 lg:gap-20">
                {cardsContent.map((content, index) => (
                    <div
                        key={index}
                        className="w-[70%] md:w-[320px] group"
                        style={{ perspective: "1000px" }}
                    >
                        {/* Este contenedor rota en hover */}
                        <div
                            className="relative w-full h-80 transition-transform duration-700"
                            style={{
                                transformStyle: "preserve-3d",
                                transform: "rotateY(0deg)"
                            }}
                        >
                            <div className="absolute inset-0 transition-transform duration-700 group-hover:rotate-y-180" style={{ transformStyle: "preserve-3d" }}>
                                {/* FRONT */}
                                <div
                                    className="absolute w-full h-full bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center"
                                    style={{
                                        backfaceVisibility: "hidden"
                                    }}
                                >
                                    <div className="text-6xl text-gold/80 mb-4">
                                        {content.icon}
                                    </div>
                                    <h1 className="font-bold text-xl md:text-2xl mb-2 text-gray-800">
                                        {content.title}
                                    </h1>
                                    <p className="text-sm md:text-md text-gray-600">{content.text}</p>
                                </div>

                                {/* BACK */}
                                <div
                                    className="absolute w-full h-full bg-white rounded-2xl shadow-md p-8 flex flex-col justify-center items-center text-center"
                                    style={{
                                        transform: "rotateY(180deg)",
                                        backfaceVisibility: "hidden"
                                    }}
                                >
                                    <h2 className="text-xl font-bold text-gray-800 mb-2">Más información</h2>
                                    <p className="text-sm md:text-md text-gray-600">{content.backText}</p>
                                </div>
                            </div>
                        </div>

                        <style>
                            {`.group:hover .group-hover\\:rotate-y-180 {
                                transform: rotateY(180deg);}`}
                        </style>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Cards
