import { CiLocationOn } from "react-icons/ci";
import Button from '../ui/Button'
import { HiArrowUturnRight } from "react-icons/hi2";

const destinos = [
    { nombre: "Región Noroeste", top: "12%", left: "44%" },
    { nombre: "Mendoza", top: "35%", left: "39%" },
    { nombre: "Córdoba", top: "27%", left: "47%" },
    { nombre: "Puerto Madryn", top: "62%", left: "42%" },
    { nombre: "Glaciar Perito Moreno", top: "70%", left: "37%" },
    { nombre: "Ushuaia", top: "85%", left: "40%" },
];

const features = [
      {
    icon: <CiLocationOn className="text-lblue" size={24} />,
    title: "Litoral Termal",
    desc: "Colón, La Paz, Federación, Concordia."
  },
  {
    icon: <CiLocationOn className="text-lblue" size={24} />,
    title: "Región del Noroeste",
    desc: "Valles Calchaquíes, Tren de las Nubes, Quebrada de Humahuaca, Valle de la Luna, Tilcara, Cafayate."
  },
  {
    icon: <CiLocationOn className="text-lblue" size={24} />,
    title: "Córdoba",
    desc: "Villa General Belgrano (Oktoberfest), Cerro Uritorco, Valle de Punilla, Traslasierra, Villa Carlos Paz."
  },
  {
    icon: <CiLocationOn className="text-lblue" size={24} />,
    title: "Mendoza",
    desc: "Ruta del vino, Valle Grande, Cerro de la Gloria."
  },
  {
    icon: <CiLocationOn className="text-lblue" size={24} />,
    title: "Patagonia Atlántica",
    desc: "Península de Valdés (fauna), Puerto Madryn (avistaje de ballenas)."
  },
  {
    icon: <CiLocationOn className="text-lblue" size={24} />,
    title: "Santa Cruz y Tierra del Fuego",
    desc: "Glaciar Perito Moreno, Ushuaia (la ciudad más austral del mundo)."
  }
]

const ArgentinaMap = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10">
      <div className="text-center">
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Servicio especializado en el transporte seguro, puntual y confiable de estudiantes.
        </p>
      </div>

      <div className="mt-12 flex flex-col lg:flex-row gap-12">

        <div className="flex-1 space-y-8">
            <h1 className="font-h3 text-center text-2xl text-gold font-extrabold">Destinos habituales</h1>
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

                   <div className="relative w-full max-w-2xl ">
                <img
                    src="/assets/map.png"
                    alt="Mapa de Argentina"
                    className="w-full h-auto"
                />

                {destinos.map((destino, index) => (
                    <div
                        key={index}
                        className="absolute group"
                        style={{ top: destino.top, left: destino.left }}
                    >
                        <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-md hover:scale-125 transition-transform duration-200" />
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-gray-700 text-xs px-2 py-0.5 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                            {destino.nombre}
                        </span>
                    </div>
                ))}
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

export default ArgentinaMap
