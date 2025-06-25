import { useNavigate } from "react-router-dom"
import { BsArrowUpRight } from "react-icons/bs"
import { servicesList } from "../../lib/tebContent"

const Services = () => {
    const navigate = useNavigate()

    const handleClick = (id) => {
        navigate(`/servicio/${id}`)
    }

    return (
        <section className="relative w-full min-h-screen px-4 py-20 lg:px-40 bg-white">
            <div className="relative z-10 flex flex-col items-center text-white space-y-16">

                <div className="flex flex-col gap-12 md:w-[90%] lg:w-[80%]">
                    {servicesList.map((service, index) => {
                        let impar = index % 2 !== 0
                        return (
                        <div
                            key={service.key}
                            onClick={() => handleClick(service.id)}
                            className={`relative flex flex-col md:flex-row ${impar ? "md:flex-row-reverse" : ""
                                } group overflow-hidden cursor-pointer border border-white/10 rounded-2xl hover:scale-[1.01] transition-all duration-300`}
                        >

                            <div className="md:w-1/2 h-64 md:h-[22rem] relative">
                                <img
                                    src={service.img}
                                    alt={service.alt}
                                    className="w-full h-full object-cover transition-all duration-500 group-hover:blur-xs"
                                />
                            </div>

                            <div className={`md:w-1/3 p-8 ${impar ? "rounded-b-2xl md:rounded-br-none md:rounded-l-2xl" : "rounded-b-2xl md:rounded-bl-none md:rounded-r-2xl"}  bg-dblue backdrop-blur-md flex flex-col justify-center text-left space-y-3`}>
                                
                                <h1 className="text-4xl font-h1">{service.name}</h1>
                                <p className="text-gray-300/80 font-p text-xl">{service.text}</p>

                                <div className="flex items-center gap-2 text-yellow-400 font-p text-lg">
                                    <span>Ver más</span>
                                    <BsArrowUpRight
                                        className="group-hover:rotate-45 transform transition-all duration-600" />
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default Services
