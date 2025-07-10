
import { GraduationCap, Clock, FileText, Users } from "lucide-react"
import { HiArrowUturnRight } from "react-icons/hi2";
import Button from '../ui/Button'


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
      <div className="text-center">
        <p className="text-gold max-w-4xl mx-auto font-h3 text-md md:text-lg lg:text-xl font-semibold">
          Servicio especializado en el transporte seguro, puntual y confiable de estudiantes.
        </p>
      </div>

        <h1 className="py-8 font-h3 text-xl text-dblue font-extrabold">¿Por qué elegirnos?</h1>
      <div className="flex flex-col lg:flex-row gap-12">
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
          <img src="/assets/mainbg.jpg" alt="Escolares" className="rounded-xl shadow-md max-h-[400px] object-cover" />
        </div>
      </div>

            <div className="mt-16">
        <h3 className="text-2xl font-semibold text-[#040c32] mb-6">Hoteles de destino habituales</h3>
        <div className="flex flex-wrap gap-6 text-gray-700">
          <div className="flex-1 min-w-[250px] p-4 bg-gray-100 rounded-xl shadow-sm">
            <h4 className="font-semibold mb-2">Hotel NH City</h4>
            <p className="text-sm">CABA - Centro</p>
          </div>
          <div className="flex-1 min-w-[250px] p-4 bg-gray-100 rounded-xl shadow-sm">
            <h4 className="font-semibold mb-2">Holiday Inn Ezeiza</h4>
            <p className="text-sm">Zona Aeropuerto Ezeiza</p>
          </div>
          <div className="flex-1 min-w-[250px] p-4 bg-gray-100 rounded-xl shadow-sm">
            <h4 className="font-semibold mb-2">Howard Johnson Palermo</h4>
            <p className="text-sm">CABA - Palermo</p>
          </div>
        </div>
      </div>

            <div className="mt-20">
        <h3 className="text-2xl font-semibold text-[#040c32] mb-6">Empresas con las que trabajamos</h3>
        <div className="flex flex-wrap gap-8 items-center">
          <img src="/assets/logos/aerolineas.png" alt="Aerolíneas Argentinas" className="h-12" />
          <img src="/assets/logos/latam.png" alt="Latam" className="h-12" />
          <img src="/assets/logos/sky.png" alt="Sky Airline" className="h-12" />
          <img src="/assets/logos/jetSmart.png" alt="JetSmart" className="h-12" />
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

export default Crew
