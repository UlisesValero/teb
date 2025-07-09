import { BsArrowUpRight } from "react-icons/bs"
import { servicesList } from "../../lib/tebContent"
import { motion } from "framer-motion"


const Services = () => {
  return (
    <section id="services" className="relative w-full min-h-screen px-4 py-20 lg:px-40 bg-white">
      <div className="relative z-10 flex flex-col items-center text-white space-y-16">
        <div className="flex flex-col gap-12 md:w-[90%] lg:w-[80%]">
          <div className="text-center flex flex-col gap-1 pb-10">
            <motion.h2
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="text-6xl font-h3 font-bold text-dblue"
>
  Servicios
</motion.h2>

            <p className="text-gold font-p text-lg">Soluciones de movilidad adaptadas a tus necesidades</p>
          </div>

          {servicesList.map((service, index) => {
            const impar = index % 2 !== 0

            return (
              <a
                key={service.key}
                href={`/servicio/${service.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0, x: impar ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className={`relative flex flex-col md:flex-row ${impar ? "md:flex-row-reverse" : ""
                      } overflow-hidden cursor-pointer border border-white/10 rounded-2xl hover:scale-[1.01] transition-all duration-300`}
                  >
                    <div className="md:w-1/2 min-h-70 max-h-90  relative">
                      <img
                        src={service.img}
                        alt={service.alt}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:blur-xs"
                      />
                    </div>

                    <div
                      className={`md:w-1/3 p-8 ${impar
                        ? "rounded-b-2xl md:rounded-br-none md:rounded-l-2xl"
                        : "rounded-b-2xl md:rounded-bl-none md:rounded-r-2xl"
                        } bg-dblue backdrop-blur-md flex flex-col justify-center text-left space-y-3`}
                    >
                      <h1 className="text-4xl font-h1">{service.name}</h1>
                      <p className="text-gray-300/80 font-p text-xl">{service.text}</p>
                      <div className="flex items-center gap-2 text-yellow-400 font-p text-lg">
                        <span>Ver más</span>
                        <BsArrowUpRight className="group-hover:rotate-45 transform transition-all duration-600" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
