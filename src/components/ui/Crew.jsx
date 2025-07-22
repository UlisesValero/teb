import { GraduationCap, Clock, FileText, Users } from "lucide-react"
import { HiArrowUturnRight } from "react-icons/hi2"
import Button from "../ui/Button"
import { crewContent } from "../../lib/tebContent"

const features = [
  {
    icon: <Clock className="text-lblue" size={24} />,
    title: "Puntualidad asegurada",
    desc: "Coordinación directa con departamentos de operaciones aéreas."
  },
  {
    icon: <Users className="text-lblue" size={24} />,
    title: "Comunicación constante",
    desc: "Disponibilidad 24/7 para vuelos programados o de última hora."
  },
  {
    icon: <FileText className="text-lblue" size={24} />,
    title: "Documentación completa",
    desc: "Unidades con amplio espacio para equipaje y protocolos de descanso."
  },
  {
    icon: <GraduationCap className="text-lblue" size={24} />,
    title: "Atención personalizada",
    desc: "Conductores con experiencia en logística aeroportuaria."
  }
]

const Crew = () => {
  return (
    <section className="bg-white py-10 px-4 md:px-10">

      <div className="bg-gray-100 mt-10 py-12 px-6 md:px-16 rounded-2xl shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          
          <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
            <h3 className="text-3xl font-h3 font-semibold text-gold">
              Transporte especializado para Tripulaciones Aéreas
            </h3>

            <p className="text-black text-lg leading-relaxed font-p">
              Entendemos la precisión que exige la industria aeronáutica. Por eso, nos especializamos en el <strong>traslado exclusivo de tripulaciones</strong>, sin importar la aerolínea.
              Nuestro compromiso es ofrecer puntualidad, confort y un servicio confiable para que cada equipo de vuelo llegue a destino en tiempo y forma.
            </p>

            <div className="flex justify-center pt-3">
              <a href={window.location.pathname !== "/" ? "/#contact" : "#contact"}>
                <Button text={"Solicitar cotización"}/>
              </a>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-6">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-md text-dblue font-h3">{item.title}</h4>
                  <p className="text-black font-p text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-h3 font-semibold text-dblue pb-6">Hoteles de destino habituales</h3>
        <div className="flex flex-wrap gap-6 text-gray-700">
          {crewContent.map((content, i) => (
            <div key={i} className="flex-1 min-w-[250px] p-4 bg-gray-100 rounded-xl shadow-sm flex">
              <div className="w-1/4 flex justify-center">
                <img src={content.logo} className="h-18 rounded-3xl hover:scale-[1.08] transition-all duration-300" alt={content.title} />
              </div>
              <div className="w-3/4 flex flex-col justify-center px-2">
                <h4 className="font-semibold font-h3 pb-2">{content.title}</h4>
                <p className="text-sm font-p">{content.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-15">
        <h3 className="text-2xl font-semibold font-h3 text-dblue pb-6">Empresas con las que trabajamos</h3>
        <div className="flex-1 max-w-[21rem] p-4 bg-gray-100 rounded-xl shadow-sm flex">
          <div className="w-1/4">
            <img src="/assets/aerolineas-logo.png" className="h-18 rounded-3xl hover:scale-[1.08] transition-all duration-300" alt="Aerolíneas Argentinas" />
          </div>
          <div className="w-3/4 flex flex-col justify-center px-2 text-gray-700">
            <h4 className="font-semibold font-h3 pb-2">Aerolineas Argentinas</h4>
            <p className="text-sm font-p">Ezeiza</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Crew
