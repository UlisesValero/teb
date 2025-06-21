import { useNavigate } from "react-router-dom"
import { BsArrowUpRight } from "react-icons/bs";
import { servicesList } from "../../lib/tebContent";

const Services = () => {
    const navigate = useNavigate()

    const handleClick = (id) => {
        navigate(`/servicio/${id}`)
    }
    return (
<section className="py-10 lg:px-40 w-full h-[150vh] lg:h-[100vh] flex justify-start items-end flex-col bg-[url('/assets/bus-bg-teb.jpg')] bg-no-repeat bg-[length:800px] bg-bottom-left">
                <h1 className="pb-15 font-h1 text-5xl flex items-center justify-end">
                    Nuestros servicios
                </h1>
            <div className="flex flex-wrap items-center justify-center gap-10 lg:w-[40%]">

                {servicesList.map(service => (
                    <div
                        key={service.key}
                        className="relative group overflow-hidden shadow-lg shadow-gray-400 hover:shadow-dblue cursor-pointer "
                    >
                        <img
                            src={service.img}
                            alt={service.alt}
                            className="w-[18rem] h-[22rem] object-cover transition-transform duration-300 group-hover:scale-110"
                        />

                        <div className="flex items-center pb-6 justify-center absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-600">
                            <div className="flex items-center" onClick={() => handleClick(service.id)}>
                                <p className="text-white text-xl font-semibold text-center px-4">{service.text || "Más información"}</p>
                                <BsArrowUpRight className="text-white" />
                            </div>
                        </div>

                        <div className="flex justify-center absolute bottom-0 left-0 w-full bg-white bg-opacity-80 py-2">
                            <h2 className="text-xl font-semibold">{service.name}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    )
}

export default Services