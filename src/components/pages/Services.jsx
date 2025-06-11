import { useNavigate } from "react-router-dom"
import { BsArrowUpRight } from "react-icons/bs";
import { servicesList } from "../../lib/servicesList";

const Services = () => {
    const navigate = useNavigate()

    const handleClick = (id) => {
        navigate(`/servicio/${id}`)
    }
    return (
        <section className="flex flex-wrap items-center justify-center gap-6 p-10">
            {servicesList.map(service => (
                <div
                    key={service.key}
                    className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer"
                >
                    <img
                        src={service.img}
                        alt={service.alt}
                        className="w-[18rem] object-cover transition-transform duration-300 group-hover:scale-110"
                    />

                    <div className="flex items-center pb-6 justify-center absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-600">
                        <div className="flex items-center" onClick={() => handleClick(service.id)}>
                        <p className="text-white text-xl font-semibold text-center px-4">{service.text || "Más información"}</p>
                        <BsArrowUpRight className="text-white"/>
                        </div>
                    </div>

                    <div className="flex justify-center absolute bottom-0 left-0 w-full bg-white bg-opacity-80 py-2">
                        <h2 className="">{service.name}</h2>
                    </div>
                </div>
            ))}
        </section>

    )
}

export default Services