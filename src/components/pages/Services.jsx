import { useNavigate } from "react-router-dom"
import { BsArrowUpRight } from "react-icons/bs"
import { servicesList } from "../../lib/tebContent"

const Services = () => {
    const navigate = useNavigate()

    const handleClick = (id) => {
        navigate(`/servicio/${id}`)
    }

    return (
        <section className="relative w-full min-h-screen px-4 py-20 lg:px-40 bg-black">
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/bus-bg-teb.jpg"
                    alt="Fondo buses"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            </div>

            <div className="relative z-10 flex flex-col items-center text-white space-y-16">
                <h1 className="text-4xl md:text-5xl font-bold text-center font-h1">
                    Nuestros servicios
                </h1>

                <div className="flex flex-col gap-12 md:w-[90%] lg:w-[80%]">
                    {servicesList.map((service, index) => (
                        <div
                            key={service.key}
                            onClick={() => handleClick(service.id)}
                            className={`relative flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                                } group overflow-hidden cursor-pointer border border-white/10 rounded-2xl shadow-xl hover:scale-[1.01] transition-all duration-300`}
                        >

                            <div className="md:w-1/2 h-64 md:h-[22rem] relative">
                                <img
                                    src={service.img}
                                    alt={service.alt}
                                    className="w-full h-full object-cover transition-all duration-500 group-hover:blur-xs"
                                />
                            </div>

                            <div className="md:w-1/2 p-8 bg-white/10 backdrop-blur-md flex flex-col justify-center text-left space-y-3">
                                <h1 className="text-2xl font-h1 font-semibold">{service.name}</h1>
                                <p className="text-gray-300/80 font-p text-lg">
                                    {service.text || "Más información sobre este servicio."}
                                </p>
                                <div className="flex items-center gap-2 text-gold/90 font-p text-xl">
                                    <span>Ver más</span>
                                    <BsArrowUpRight
                                        className="group-hover:rotate-45 transform transition-all duration-600" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
