import { servicesList } from "../../lib/tebContent"
import { useParams, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { useDarkBg } from "../../context/DarkBg"
import { useEffect } from "react"
import { PiWarningLight } from "react-icons/pi"
import National from "../ui/National"
import CorporativeT from "../ui/CorporativeT"
import Receptive from "../ui/Receptive"
import ServicesRedirect from "../ui/ServicesRedirect"
import Educational from "../ui/Educational"
import Crew from "../ui/Crew"
import UseAnimation from "../../hooks/UseAnimation"
import PageTransition from "../../hooks/PageTransition"
import Button from "../ui/Button"

const ServiceDetail = () => {
  const { id } = useParams()
  const servicio = servicesList.find((s) => s.id === id)
  const location = useLocation()
  const { darken } = useDarkBg()


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [location.pathname])

  if (!servicio)
    return (
      <div className="h-[90vh] w-full flex flex-col justify-center items-center gap-5">
        <h1 className="text-red-500 text-4xl font-h1 flex">No existe un servicio en esta ruta <PiWarningLight /></h1>
        <a href={window.location.pathname !== "/" ? "/#hero" : "#hero"}>
          <Button text={"Volver al inicio"} />
        </a>
      </div>
    )

  return (
    <section className="bg-white">

      <div
        className={`z-50 w-full h-[200px] md:h-[350px] bg-fixed bg-top lg:bg-bottom bg-contain bg-no-repeat lg:bg-cover 
          ${servicio.id === "nacional" ? "bg-[url('/assets/teb-nacional.jpg')]" : ""}
          ${servicio.id === "empresarial" ? "bg-[url('/assets/mainbg.jpg')]" : ""}
          ${servicio.id === "turistico" ? "bg-[url('/assets/mainbg.jpg')]" : ""}
          ${servicio.id === "educativo" ? "bg-[url('/assets/mainbg.jpg')]" : ""}
          ${servicio.id === "tripulacion" ? "bg-[url('/assets/mainbg.jpg')]" : ""}`}
      >
        <div className="w-full h-full flex items-end justify-center pb-10 ">
          <h1 className=" font-bold text-white text-xl md:text-2xl lg:text-4xl gap-3">{servicio.name.toUpperCase()}</h1>
        </div>
      </div>
      <PageTransition>

        {servicio.id === "nacional" ? (
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            <div className="lg:w-[70%]">
              <National />
            </div>
            <div className="hidden lg:flex lg:w-[30%]">
              <ServicesRedirect />
            </div>
          </div>
        ) : null}
        {servicio.id === "empresarial" ? (
          <UseAnimation><CorporativeT /></UseAnimation>
        ) : null}
        {servicio.id === "turistico" ? (
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            <div className="lg:w-[70%]">
              <Receptive />
            </div>
            <div className="hidden lg:flex lg:w-[30%]">
              <ServicesRedirect />
            </div>
          </div>
        ) : null}
        {servicio.id === "educativo" ? (
          <div className="w-full flex flex-col lg:flex-row items-center lg:items-start">
            <div className="lg:w-[70%]">
              <Educational />
            </div>
            <div className="hidden lg:flex lg:w-[30%]">
              <ServicesRedirect />
            </div>
          </div>
        ) : null}
        {servicio.id === "tripulacion" ? (
          <div className="w-full flex flex-col items-center lg:items-start lg:flex-row">
            <div className="lg:w-[70%]">
              <Crew />
            </div>
            <div className="hidden lg:flex lg:w-[30%]">
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
      </PageTransition>
    </section>
  )
}

export default ServiceDetail
