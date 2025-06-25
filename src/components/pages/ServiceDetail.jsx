import { servicesList } from "../../lib/tebContent";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { TbMailForward } from "react-icons/tb";

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const servicio = servicesList.find((s) => s.id === id);

  if (!servicio)
    return (
      <div className="p-10 text-red-500 text-xl">Servicio no encontrado</div>
    );

  return (
    <section className="min-h-screen bg-gray-100 py-20 flex flex-col items-center">
      
      <div className="relative w-[90%] md:w-[80%] lg:w-[65%] bg-dblue rounded-3xl shadow-lg">
        <div className="flex lg:flex-row flex-wrap lg:items-center justify-end lg:h-[40rem] relative">

          <div className="lg:absolute lg:-left-[7%] z-10 lg:w-1/2">
            <img
              src={servicio.img}
              alt={servicio.alt}
              className="w-full lg:h-130 px-5 lg:px-0 py-5"
            />
          </div>

          <div className="w-full lg:w-1/2 p-5 lg:p-10 flex flex-col items-center gap-5 lg:gap-8">
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
          onClick={() => navigate("/#servicio")}
          className="px-6 py-3 bg-gray-300 hover:bg-gray-400 text-black rounded-xl transition"
        >
          Volver a servicios
        </Button>
      </div>
    </section>
  );
};

export default ServiceDetail;
