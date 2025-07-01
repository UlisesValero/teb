import Button from "../ui/Button"
import { TbMailForward } from "react-icons/tb"

const Welcome = () => {

  
  return (
    <div className="flex flex-col justify-center space-y-5 h-[70%] w-full pt-30 lg:pt-60">
<div className="flex flex-col items-start justify-center gap-3 text-gray-300 w-full">
  <div className="flex flex-col md:flex-row md:items-center md:gap-2">
    <div className="flex">
      <h3 className="text-md md:text-lg lg:text-xl font-h3">
        <span className="text-gold">TEB transportes</span><span className="text-white">,</span>
      </h3>
    </div>
    <h3 className="text-md md:text-lg lg:text-xl font-h3">
      junto a ti en cada trayecto
    </h3>
  </div>

  <h2 className="text-4xl md:text-5xl font-h3 font-bold max-w-6xl">
    Contamos con más de 35 años de experiencia en el traslado de personas
  </h2>
</div>


          <a href="#contact">
        <Button className="hover:bg-gradient-to-b hover:from-dblue hover:to-dblue2 py-3 px-13 text-2xl font-p hover:text-gold/90 transition-all duration-400">
          <span className="transition-opacity duration-400 ease-in-out  group-hover:opacity-0">
            Contáctenos
          </span>

          <TbMailForward
            className="absolute inset-0 m-auto opacity-0 transition-opacity duration-400 ease-in-out group-hover:opacity-100"
            size={27}
          />
        </Button>
        </a>
      </div>
  )
}

export default Welcome
