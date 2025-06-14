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
       <section className="w-full bg-gradient-to-b from-dblue to-dblue2 h-fit pb-60">
        <h1 className="flex justify-center text-3xl lg:text-7xl font-bold text-white pt-10  font-p">
        ¿Por que elegirnos?
        </h1>
            <div className="flex flex-wrap justify-center gap-10 lg:gap-20 pt-30">
                {cardsContent.map((content, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md p-6 w-[280px] min-h-[250px] flex flex-col items-center text-center"
                    >
                        <div className="text-4xl text-gold/80 mb-4">
                            {content.icon}
                        </div>
                        <h1 className="font-bold text-lg mb-2 text-gray-800">
                            {content.title}
                        </h1>
                        <p className="text-sm text-gray-600">{content.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Cards