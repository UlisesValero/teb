import { FaBusinessTime } from "react-icons/fa6";
import { FaBus } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const cardsContent = [
    { title: "Comodidad asegurada", text: "En TEB disponemos de una flota moderna y versátil, diseñada para brindar confort en cada trayecto.", icon: <FaBus /> },
    { title: "Precisión operativa", text: "Implementamos procesos rigurosos que aseguran puntualidad y eficiencia en todos nuestros servicios.", icon: <FaBusinessTime /> },
    { title: "Equipo calificado", text: "Nuestro personal uniformado refleja el compromiso y la excelencia que definen a TEB.", icon: <FaUserTie /> },
    { title: "Seguridad certificada", text: "Cumplimos con todas las normativas y protocolos para garantizar un traslado seguro y confiable.", icon: <AiOutlineSafetyCertificate /> }
]

const Cards = () => {
    return (
       <section className="w-full flex flex-col py-50 gap-15 bg-gradient-to-b from-dblue to-dblue2 h-fit">
            <div className="flex flex-wrap justify-center gap-10 lg:gap-20 ">
                {cardsContent.map((content, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md p-8 w-[70%]  md:w-[320px]  flex flex-col items-center text-center"
                    >
                        <div className="text-6xl text-gold/80 mb-4">
                            {content.icon}
                        </div>
                        <h1 className="font-bold text-xl md:text-2xl mb-2 text-gray-800">
                            {content.title}
                        </h1>
                        <p className="text-sm md:text-md text-gray-600">{content.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Cards