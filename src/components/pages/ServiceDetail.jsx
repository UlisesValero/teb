import { servicesList } from "../../lib/tebContent"
import { useParams, useNavigate } from "react-router-dom"
import ArgentinaMap from "../ui/ArgentinaMap"
import CorporativeT from "../ui/CorporativeT"
import Receptive from "../ui/Receptive"
import ServicesRedirect from "../ui/ServicesRedirect"
import Educational from "../ui/Educational"
import { AnimatePresence, motion } from "framer-motion"
import DarkBgProvider, { useDarkBg } from "../../context/DarkBg"
import Crew from "../ui/Crew"

const ServiceDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const servicio = servicesList.find((s) => s.id === id)
  const {darken} = useDarkBg()


  if (!servicio)
    return (
      <div className="p-10 text-red-500 text-xl">Servicio no encontrado</div>
    );

  return (
    <section className="bg-white">

      {/* COLOCAR IMAGENES DESDE tebContent con la respectiva imagen de cada servicio */}
      <div
        className="w-full h-[200px] md:h-[300px] bg-fixed bg-top lg:bg-bottom bg-contain bg-no-repeat lg:bg-cover bg-[url('/assets/mainbg.jpg')] z-50"
      >
        <div className="w-full h-full flex items-end justify-center pb-10 ">
          <h1 className=" font-bold text-white text-xl md:text-2xl lg:text-4xl gap-3">{servicio.name.toUpperCase()}</h1>
          {/* COLOCAR TEXTOS DESDE tebContent CON EL RESPECTIVO TITULO DE CADA SERVICIO */}
        </div>
      </div>

      {servicio.id === "nacional" ? (
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-[70%]">
            <ArgentinaMap />
          </div>
          <div className="lg:w-[30%]">
            <ServicesRedirect />
          </div>
        </div>
      ) : null}
      {servicio.id === "empresarial" ? (<CorporativeT />) : null}
      {servicio.id === "turistico" ? (
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-[70%]">
            <Receptive />
          </div>
          <div className="lg:w-[30%]">
            <ServicesRedirect />
          </div>
        </div>
      ) : null}
      {servicio.id === "educativo" ? (
        <div className="w-full flex flex-col lg:flex-row">
          <div className="lg:w-[70%]">
            <Educational />
          </div>
          <div className="lg:w-[30%]">
            <ServicesRedirect />
          </div>

        </div>
      ) : null}
      {servicio.id === "tripulacion" ? (
        <div className="w-full flex flex-col items-center lg:items-start lg:flex-row">
          <div className="lg:w-[70%]">
              <Crew/>
          </div>
          <div className="lg:w-[30%]">
            <ServicesRedirect />
          </div>

        </div>
      ) : null}

      <AnimatePresence>
        {darken && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="fixed inset-0 bg-[#000000]/80 pointer-events-none z-20"
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default ServiceDetail
