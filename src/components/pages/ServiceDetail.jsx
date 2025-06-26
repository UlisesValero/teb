import { servicesList } from "../../lib/tebContent";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { TbMailForward } from "react-icons/tb";
import ArgentinaMap from "./ArgentinaMap";
import CorporativeT from "../ui/CorporativeT";

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
  className="w-full h-[200px] md:h-[400px] bg-fixed bg-top lg:bg-bottom bg-contain bg-no-repeat lg:bg-cover bg-[url('/assets/mainbg.jpg')] z-50"
>
  <div className="w-full h-full flex items-center justify-center pt-25">
    {/* COLOCAR TEXTOS DESDE tebContent CON EL RESPECTIVO TITULO DE CADA SERVICIO */}
  </div>
</div>

    {servicio.id === "nacional" ? (<ArgentinaMap/>) : null}
    {servicio.id === "empresarial" ? (<CorporativeT/>) : null}


    </>
  )
}

export default ServiceDetail;

    // <section className="py-10 md:py-20 flex flex-col items-center">
    //   <div className="relative w-[90%] md:w-[80%] lg:w-[75%] rounded-3xl shadow-lg md:px-10">
    //     <div className="flex flex-col lg:flex-row gap-10 lg:items-center justify-end lg:h-[45rem] relative">

    //       <div className="z-10 lg:w-1/2">
    //         <img
    //           src={servicio.img}
    //           alt={servicio.alt}
    //           className="w-full lg:h-130 px-5 lg:px-0 py-5"
    //         />
    //       </div>

    //       <div className="w-full lg:w-1/2 flex flex-col items-center gap-5 lg:gap-8">
    //           <h1 className="text-2xl lg:text-4xl font-h1 text-gold/90 text-center">{servicio.subTitle}</h1>
    //         <p className="text-md lg:text-lg font-p text-gray-400 leading-relaxed px-3 text-center md:px-10 lg:px-0">
    //           {servicio.description}
    //         </p>              
    //     <Button 
    //     className="py-2 px-3 md:py-4 md:px-6 text-xl font-p hover:text-gold/80 w-fit border border-white hover:border-gold"
    //     onClick={() => navigate("/contacto")}
    //       >
    //       <span className=" transition-opacity duration-400 ease-in-out group-hover:opacity-0">
    //         Contáctenos
    //       </span>

    //       <TbMailForward
    //         className="absolute inset-0 m-auto opacity-0 transition-opacity duration-400 ease-in-out group-hover:opacity-100"
    //         size={24}
    //       />

    //     </Button>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="mt-10">
    //     <Button
    //       onClick={() => navigate("/")}
    //       className="px-6 py-3 bg-gray-300 hover:bg-gray-400 text-black rounded-xl transition"
    //     >
    //       Volver a servicios
    //     </Button>
    //   </div>
    // </section>