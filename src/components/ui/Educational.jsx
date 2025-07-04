import { GraduationCap, Clock, ShieldCheck, FileText, Users } from "lucide-react"
import Button from '../ui/Button'
import { HiArrowUturnRight } from "react-icons/hi2";


const features = [
  {
    icon: <ShieldCheck className="text-lblue" size={24} />,
    title: "Seguridad profesional",
    desc: "Choferes capacitados y unidades habilitadas, cumpliendo con todas las normativas."
  },
  {
    icon: <Clock className="text-lblue" size={24} />,
    title: "Puntualidad asegurada",
    desc: "Turnos escolares cubiertos con precisión y seguimiento en tiempo real."
  },
  {
    icon: <Users className="text-lblue" size={24} />,
    title: "Comunicación constante",
    desc: "Canales directos con las familias para brindar tranquilidad y control."
  },
  {
    icon: <FileText className="text-lblue" size={24} />,
    title: "Documentación completa",
    desc: "Cumplimiento legal: seguros, permisos y certificados disponibles."
  },
  {
    icon: <GraduationCap className="text-lblue" size={24} />,
    title: "Atención personalizada",
    desc: "Adaptación a las necesidades de cada alumno e institución educativa."
  }
]

const Educational = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10">
      <div className="text-center">
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Servicio especializado en el transporte seguro, puntual y confiable de estudiantes.
        </p>
      </div>

      <div className="mt-12 flex flex-col lg:flex-row gap-12">

        <div className="flex-1 space-y-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="mt-1">{feature.icon}</div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{feature.title}</h4>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1 flex justify-center">
          <img src="/assets/educativo.jpg" alt="Escolares" className="rounded-xl shadow-md max-h-[400px] object-cover" />
        </div>
      </div>

      <div className="flex justify-center pt-20">
        <a href={window.location.pathname !== "/" ? "/#contact" : "#contact"}>
          <Button className="relative group px-10 py-2 border-gray-300 hover:border-gold/80 border text-xl font-p hover:text-gold/80 overflow-hidden">

            <span className="transition-opacity duration-400 ease-in-out group-hover:opacity-0">
              Solicita cotizacion
            </span>
            <HiArrowUturnRight
              className="absolute inset-0 m-auto opacity-0 transition-opacity duration-400 ease-in-out group-hover:opacity-100"
              size={24}
            />
          </Button>
        </a>
      </div>
    </section>
  )
}

export default Educational
