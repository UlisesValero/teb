import { CiLocationOn } from "react-icons/ci"
import Button from '../ui/Button'
import { motion } from "framer-motion"
import ArgentinaSvg from "../ui/ArgentinaSvg"

const features = [
  {
    title: "Litoral Termal",
    desc: "Colón, La Paz, Federación, Concordia."
  },
  {
    title: "Región del Noroeste",
    desc: "Valles Calchaquíes, Tren de las Nubes, Quebrada de Humahuaca, Valle de la Luna, Tilcara, Cafayate."
  },
  {
    title: "Córdoba",
    desc: "Villa General Belgrano (Oktoberfest), Cerro Uritorco, Valle de Punilla, Traslasierra, Villa Carlos Paz."
  },
  {
    title: "Mendoza",
    desc: "Ruta del vino, Valle Grande, Cerro de la Gloria."
  },
  {
    title: "Patagonia Atlántica",
    desc: "Península Valdés (fauna marina), Puerto Madryn (avistaje de ballenas)."
  },
  {
    title: "Santa Cruz y Tierra del Fuego",
    desc: "Glaciar Perito Moreno, Ushuaia (la ciudad más austral del mundo)."
  }
]

const National = () => {
  return (
    <section className="bg-white md:py-16 px-4 md:px-20 overflow-hidden">

      <motion.div
        className="mt-12 w-full flex flex-col lg:flex-row gap-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <div className="flex-1 flex flex-col space-y-8">
          <div className="flex flex-col gap-3">
            <h3 className="text-gold font-h3 text-md md:text-lg lg:text-xl font-semibold">
              Conocé Argentina con nuestro servicio de turismo nacional
            </h3>
            <p className="text-lg text-dblue font-p">
              Realizamos traslados a lo largo y ancho del país durante todo el año, ofreciendo un servicio seguro, flexible y adaptado a las necesidades de cada grupo o institución. También estamos abiertos a propuestas personalizadas que incluyan destinos no convencionales o experiencias fuera de ruta. Nuestro compromiso es llevarte a descubrir cada rincón de Argentina con responsabilidad y confort.
            </p>
          </div>

          <h4 className="pt-10 font-h3 text-xl text-dblue font-extrabold">Destinos frecuentes</h4>

          <div className="flex flex-wrap gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="flex w-full items-start gap-4 bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <CiLocationOn className="text-lblue mt-1" size={24} />
                <div>
                  <h5 className="text-lg font-semibold text-gray-800">{feature.title}</h5>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className=" pt-10 flex justify-center">
            <a href={window.location.pathname !== "/" ? "/#contact" : "#contact"}>
              <Button text={"Solicitar cotización"} />
            </a>
          </div>
        </div>

        <motion.div
          className="w-full lg:w-fit flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="w-fit hover:scale-105 transition-transform duration-500 ease-in-out">
            <ArgentinaSvg />
          </div>
        </motion.div>
      </motion.div>

    </section>
  )
}

export default National
