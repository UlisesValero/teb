import { servicesList } from "../../lib/tebContent";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { TbMailForward } from "react-icons/tb";
import ArgentinaMap from "./ArgentinaMap";

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const servicio = servicesList.find((s) => s.id === id);

  if (!servicio)
    return (
      <div className="p-10 text-red-500 text-xl">Servicio no encontrado</div>
    );

  return (
    <>

    {/* COLOCAR IMAGENES DESDE tebContent con la respectiva imagen de cada servicio */}
<div
  className="w-full h-[200px] md:h-[400px] lg:h-[500px] bg-fixed bg-top lg:bg-bottom bg-contain bg-no-repeat lg:bg-cover bg-[url('/assets/mainbg.jpg')] z-50"
>
  <div className="w-full h-full bg-opacity-30 flex items-center justify-center">
    {/* COLOCAR TEXTOS DESDE tebContent CON EL RESPECTIVO TITULO DE CADA SERVICIO */}
    <h1 className="text-white text-4xl font-bold">Servicios</h1>
  </div>
</div>


    <section className="py-10 md:py-20 flex flex-col items-center">
      <div className="relative w-[90%] md:w-[80%] lg:w-[75%] rounded-3xl shadow-lg md:px-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:items-center justify-end lg:h-[45rem] relative">

          <div className="z-10 lg:w-1/2">
            <img
              src={servicio.img}
              alt={servicio.alt}
              className="w-full lg:h-130 px-5 lg:px-0 py-5"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center gap-5 lg:gap-8">
            <h1 className="text-2xl lg:text-4xl font-h1 text-gold/90">{servicio.title}</h1>
            <p className="text-md lg:text-lg font-p text-gray-400 leading-relaxed px-3 md:px-10 lg:px-0">
              {servicio.description}
            </p>              
        <Button 
        className="py-2 px-3 md:py-4 md:px-6 text-xl font-p hover:text-gold/80 w-fit border border-white hover:border-gold"
        onClick={() => navigate("/contacto")}
          >
          <span className=" transition-opacity duration-400 ease-in-out group-hover:opacity-0">
            Contáctenos
          </span>

          <TbMailForward
            className="absolute inset-0 m-auto opacity-0 transition-opacity duration-400 ease-in-out group-hover:opacity-100"
            size={24}
          />

        </Button>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-gray-300 hover:bg-gray-400 text-black rounded-xl transition"
        >
          Volver a servicios
        </Button>
      </div>
    </section>
    <ArgentinaMap/>
    </>
  )
}

export default ServiceDetail;

// <section className="w-full bg-white text-gray-900 px-6 py-16 lg:px-40">
//       <h2 className="text-3xl lg:text-4xl font-bold mb-8 border-b-2 border-gray-300 pb-2">
//         Servicios de Traslado Nacional
//       </h2>

//       <p className="text-base lg:text-lg mb-6">
//         Brindamos soluciones de transporte hacia cualquier punto del país durante todo el año, adaptándonos a las necesidades de cada grupo. Nos caracteriza una actitud proactiva, abiertos a propuestas innovadoras y destinos no convencionales.
//       </p>

//       <p className="text-base lg:text-lg mb-6">
//         Con más de <span className="font-semibold">30 años de experiencia</span>, ofrecemos un servicio de excelencia, basado en la puntualidad, la cordialidad de nuestros choferes y un alto estándar de seguridad. Todas nuestras unidades están conectadas con nuestro centro de operaciones a través de <span className="font-semibold">tracking satelital</span> en tiempo real.
//       </p>

//       <h3 className="text-2xl font-semibold mt-10 mb-4">Destinos frecuentes</h3>

//       <ul className="space-y-4 list-disc list-inside text-base lg:text-lg">
//         <li>
//           <span className="font-medium">Región del Noroeste:</span> Valles Calchaquíes, Tren de las Nubes, Quebrada de Humahuaca, Valle de la Luna, Tilcara, Cafayate.
//         </li>
//         <li>
//           <span className="font-medium">Litoral Termal:</span> Colón, La Paz, Federación, Concordia.
//         </li>
//         <li>
//           <span className="font-medium">Córdoba:</span> Villa General Belgrano (Oktoberfest), Cerro Uritorco, Valle de Punilla, Traslasierra, Villa Carlos Paz.
//         </li>
//         <li>
//           <span className="font-medium">Mendoza:</span> Ruta del vino, Valle Grande, Cerro de la Gloria.
//         </li>
//         <li>
//           <span className="font-medium">Centros de esquí:</span> Chapelco, Las Leñas, La Hoya, Cerro Catedral.
//         </li>
//         <li>
//           <span className="font-medium">Patagonia Atlántica:</span> Península de Valdés (fauna), Puerto Madryn (avistaje de ballenas).
//         </li>
//         <li>
//           <span className="font-medium">Santa Cruz y Tierra del Fuego:</span> Glaciar Perito Moreno, Ushuaia (la ciudad más austral del mundo).
//         </li>
//       </ul>
//     </section>
