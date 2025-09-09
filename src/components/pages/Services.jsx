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
      className="relative w-full min-h-screen px-4 py-50 lg:px-40 bg-no-repeat bg-cover bg-dblue"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1046%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c37 C 96%2c58.6 288%2c141.2 480%2c145 C 672%2c148.8 768%2c46 960%2c56 C 1152%2c66 1344%2c167.2 1440%2c195L1440 560L0 560z' fill='rgba(238%2c 238%2c 238%2c 1)'%3e%3c/path%3e%3cpath d='M 0%2c364 C 20.6%2c387.6 61.8%2c480.2 103%2c482 C 144.2%2c483.8 164.8%2c365.8 206%2c373 C 247.2%2c380.2 267.8%2c511.4 309%2c518 C 350.2%2c524.6 370.8%2c408.6 412%2c406 C 453.2%2c403.4 473.8%2c505.6 515%2c505 C 556.2%2c504.4 576.8%2c394.2 618%2c403 C 659.2%2c411.8 679.8%2c571.8 721%2c549 C 762.2%2c526.2 782.8%2c308 824%2c289 C 865.2%2c270 885.8%2c454.6 927%2c454 C 968.2%2c453.4 988.8%2c290.6 1030%2c286 C 1071.2%2c281.4 1091.8%2c418.8 1133%2c431 C 1174.2%2c443.2 1194.8%2c328 1236%2c347 C 1277.2%2c366 1298.2%2c531.8 1339%2c526 C 1379.8%2c520.2 1419.8%2c359.6 1440%2c318L1440 560L0 560z' fill='rgba(238%2c 238%2c 238%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1046'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
        backgroundPosition: "center 100px",
      }}
    >
      <div className="relative z-10 flex flex-col items-center space-y-10 md:space-y-25">
        
        <div className="text-center flex flex-col gap-2">
          <motion.h2
            initial={{ opacity: 0.5, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl md:text-4xl font-bold text-gold font-h2"
          >
              Soluciones de movilidad adaptadas a tus necesidades
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-10 w-full max-w-7xl">
          {servicesList.slice(0, 3).map((service, index) => (
            <motion.a
              key={service.key}
              href={`/servicio/${service.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:shadow-md hover:shadow-gold group flex flex-col bg-dblue rounded-2xl overflow-hidden shadow-lg shadow-gray-300 transition-shadow duration-300 
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
