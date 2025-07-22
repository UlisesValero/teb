import { CiLocationOn } from "react-icons/ci";
import Button from '../ui/Button'
import { HiArrowUturnRight } from "react-icons/hi2";
import ArgentinaSvg from "./ArgentinaSvg";


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
        <p className="text-gold max-w-4xl mx-auto font-h3 text-md md:text-lg lg:text-xl font-semibold">
          Servicio especializado en turismo nacional.
        </p>
      </div>

      <div className="mt-12 w-[85%] flex flex-col lg:flex-row gap-12">

        <div className="flex-1 space-y-8">
            <h1 className="font-h3 text-xl text-dblue font-extrabold">Destinos habituales</h1>
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
          
          <div className="">
                <ArgentinaSvg/>
          </div>

            </div>

      <div className="flex justify-center pt-20">
        <a href={window.location.pathname !== "/" ? "/#contact" : "#contact"}>
          <Button text={"Solicitar cotización"}/>
        </a>
      </div>

    </section>
  )
}

export default ArgentinaMap
