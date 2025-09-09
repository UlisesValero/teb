import { BsArrowUpRight } from "react-icons/bs"
import { servicesList } from "../../lib/tebContent"
import { motion } from "framer-motion"

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const Services = () => {
  return (
    <section
      id="services"
      className="relative w-full min-h-screen px-4 py-20 lg:px-40 bg-white"
    >
      <div className="relative z-10 flex flex-col items-center space-y-16">
        
        <div className="text-center flex flex-col gap-2 pb-10">
          <motion.h2
            initial={{ opacity: 0.5, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-h3 font-bold text-dblue"
          >
            Servicios
          </motion.h2>

          <p className="text-gold font-p text-base sm:text-lg">
            Soluciones de movilidad adaptadas a tus necesidades
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10 w-full max-w-7xl">
          {servicesList.slice(0, 3).map((service, index) => (
            <motion.a
              key={service.key}
              href={`/servicio/${service.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:shadow-md hover:shadow-gold group flex flex-col bg-dblue rounded-2xl overflow-hidden shadow-lg transition-shadow duration-300 
                         w-full sm:w-[calc(50%-1.25rem)] lg:w-[33%] max-w-sm"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="h-56 sm:h-64 w-full overflow-hidden">
                <motion.img
                  src={service.img}
                  alt={service.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
              <div className="p-6 flex flex-col gap-3 text-white">
                <h1 className="text-xl sm:text-2xl font-h1">{service.name}</h1>
                <p className="text-gray-300/80 font-p text-sm sm:text-base leading-relaxed">
                  {service.text}
                </p>
                <div className="flex items-center gap-2 text-yellow-400 font-p text-sm">
                  <span>Ver más</span>
                  <BsArrowUpRight className="group-hover:rotate-45 transform transition-all duration-300" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-10 w-full max-w-6xl">
          {servicesList.slice(3, 5).map((service, index) => (
            <motion.a
              key={service.key}
              href={`/servicio/${service.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:shadow-md hover:shadow-gold group flex flex-col bg-dblue rounded-2xl overflow-hidden shadow-lg transition-shadow duration-300 
                         w-full sm:w-[calc(50%-1.25rem)] lg:w-[33%] max-w-sm"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="h-56 sm:h-64 w-full overflow-hidden">
                <motion.img
                  src={service.img}
                  alt={service.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
              <div className="p-6 flex flex-col gap-3 text-white">
                <h1 className="text-xl sm:text-2xl font-h1">{service.name}</h1>
                <p className="text-gray-300/80 font-p text-sm sm:text-base leading-relaxed">
                  {service.text}
                </p>
                <div className="flex items-center gap-2 text-yellow-400 font-p text-sm">
                  <span>Ver más</span>
                  <BsArrowUpRight className="group-hover:rotate-45 transform transition-all duration-300" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
