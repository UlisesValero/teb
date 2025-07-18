import { GraduationCap, Clock, ShieldCheck, FileText, Users } from "lucide-react"
import Button from '../ui/Button'
import { HiArrowUturnRight } from "react-icons/hi2"

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
const educationalServices = [
  {title: "Excursiones", desc: "Traslados seguros y organizados para salidas escolares y educativas."},
  {title: "Visitas Guiadas", desc: "Movilidad para recorridos culturales, museos y centros de interés."},
  {title: "Campamentos", desc: "Logística de ida y vuelta para campamentos escolares y recreativos."},
  {title: "Eventos Deportivos para Clubs", desc: "Traslados grupales a competencias y entrenamientos, con responsabilidad y puntualidad."}
]

const Educational = () => {
  return (
    <section className="bg-white py-10 px-4 md:px-10 lg:px-20">

<div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto text-center py-5 md:py-11">
      {educationalServices.map((service, index) => (
        <div key={index} className="bg-white md:w-90 md:h-40 p-6 rounded-lg shadow-lg hover:scale-[1.05] transition-transform duration-200">
          <h3 className="text-xl font-h3 font-semibold text-dblue pb-2">{service.title}</h3>
          <p className="text-gray-600 font-p">{service.desc}</p>
        </div>
      ))}
    </div>

    <div className="bg-white py-16 px-6 md:px-12">
  <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-10">
    Instituciones que confían en nosotros
  </h2>

  <div className="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto">
    {[
      { src: "/assets/APV-Logo.png", alt: "Ateneo Popular Versalles" },
      { src: "/assets/CCBA-Logo.png", alt: "Club Ciudad de Buenos Aires" },
      { src: "/assets/ET-Logo.png", alt: "Club El Talar" },
      { src: "/assets/IMD-Logo.png", alt: "Instituto Mater Dolorosa" },
      { src: "/assets/CNSM-Logo.png", alt: "Colegio Nuestra Señora de la Misericordia" },
      { src: "/assets/ISF-Logo.png", alt: "Club Ciudad de San Fernando" }
    ].map((inst, index) => (
      <div key={index} className="relative group">
        <img
          src={inst.src}
          alt={inst.alt}
          className="h-12 md:h-16 hover:scale-[1.10] transition duration-300"
        />
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap z-10">
          {inst.alt}
        </span>
      </div>
    ))}
  </div>
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
          <img
            src="/assets/educativo.jpg"
            alt="Escolares"
            className="rounded-xl shadow-md max-h-[400px] object-cover"
          />
        </div>
      </div>




      <div className="flex justify-center pt-20">
        <a href={window.location.pathname !== "/" ? "/#contact" : "#contact"}>
          <Button className="relative group px-10 py-2 border-gray-300 hover:border-gold/80 border text-xl font-p hover:text-gold/80 overflow-hidden">
            <span className="transition-opacity duration-400 ease-in-out group-hover:opacity-0">
              Solicita cotización
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
