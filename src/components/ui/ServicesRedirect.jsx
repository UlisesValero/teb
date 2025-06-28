import { servicesList } from "../../lib/tebContent"
import { Link,  } from "react-router-dom"
import { BsArrowUpRight } from "react-icons/bs"

const ServiceRedirect = () => {
  // const location = useLocation()
  const currentId = location.pathname.startsWith("/servicio/")
    ? location.pathname.split("/servicio/")[1]
    : null

  return (

    <div className="w-[80%] py-10">
        <div className="bg-white drop-shadow-2xl rounded-xl p-5 flex flex-col gap-4">
      {servicesList.map((service) => {
        const Icon = service.icon
        const isActive = service.id === currentId
        return (
            
          <Link
            key={service.key}
            to={`/servicio/${service.id}`}
            className={`pb-1 border-b border-gray-300 flex items-center justify-between group text-dblue text-xl
                hover:text-dblue/80 hover:font-semibold hover:brightness-110 hover:bg-gray-300/50 hover:scale-[1.02] transition-all duration-300
                ${isActive ? "text-dblue/80 font-semibold brightness-110 bg-gray-300/50 scale-[1.04]" : ""}
              `}
          >
            <div className="flex items-center gap-3">
              <Icon className="text-gold/80 text-4xl" />
              <span>{service.name}</span>
            </div>

            <BsArrowUpRight className={`transform transition-all duration-600 ${isActive ? "rotate-45" : ""} group-hover:rotate-45`} />
          </Link>
        )
      })}
      </div>
    </div>

  )
}

export default ServiceRedirect