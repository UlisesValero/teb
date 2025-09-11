import { servicesList } from "../../lib/tebContent"
import { Link } from "react-router-dom"
import { BsArrowUpRight } from "react-icons/bs"

const ServiceRedirect = () => {
  const currentId = location.pathname.startsWith("/servicio/")
    ? location.pathname.split("/servicio/")[1]
    : null

  return (
    <div className="px-6 py-8">
      <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-3 border border-gray-200">
        {servicesList.map((service) => {
          const Icon = service.icon
          const isActive = service.id === currentId
          return (
            <Link
              key={service.key}
              to={`/servicio/${service.id}`}
              className={`group flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-300 
                ${
                  isActive
                    ? "bg-dblue text-white shadow-md scale-[1.02]"
                    : "text-dblue hover:bg-lblue/20 hover:text-dblue/80"
                }`}
            >
              <div className="flex items-center gap-3">
                <Icon
                  className={`text-xl md:text-2xl lg:text-3xl transition-colors 
                    ${isActive ? "text-gold" : "text-dblue group-hover:text-gold"}`}
                />
                <h3
                  className={`font-h3 text-base md:text-lg transition-colors pr-3
                    ${isActive ? "font-bold text-white" : "text-dblue group-hover:text-dblue/90"}`}
                >
                  {service.name}
                </h3>
              </div>

              <BsArrowUpRight
                className={`text-sm transition-transform duration-500 
                  ${isActive ? "rotate-45 text-gold" : "group-hover:rotate-45 group-hover:text-gold"}`}
              />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default ServiceRedirect
