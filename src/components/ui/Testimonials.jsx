import { FaQuoteRight } from "react-icons/fa"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Juan Pérez",
    company: "Empresa Uno",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "María López",
    company: "Compañía Dos",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Carlos García",
    company: "Servicios Tres",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "Ana Fernández",
    company: "Soluciones Cuatro",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
]

const Testimonials = () => {
  return (
    <section className="w-full flex flex-col pt-50 pb-30 bg-gradient-to-t from-dblue to-dblue2 px-6 md:px-0">
        <div className="w-full flex justify-center ">
        <h1 className="w-[78%] pb-20 font-h3 text-4xl text-white">Experiencia TEB</h1>
        </div>
      <div className="flex flex-wrap justify-center gap-10">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
            className="hover:scale-105 hover:shadow-md hover:shadow-lblue relative bg-white rounded-2xl shadow-md p-8 flex flex-col justify-between min-h-[320px] hover:shadow-lg transition-all duration-300 w-full sm:w-[48%] lg:w-[18%]"
          >

            <div className="absolute top-1 right-1 text-dblue text-2xl">
              <FaQuoteRight />
            </div>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
              {t.text}
            </p>

            <div className="mt-auto">
              <h3 className="font-bold text-dblue text-lg">{t.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{t.company}</p>
              <div className="flex gap-1 text-lblue">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span key={idx}>★</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
